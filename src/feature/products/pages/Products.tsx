import Input from "antd/es/input/Input";
import Search from "antd/es/input/Search";
import {
  CirclePlus,
  CircleX,
  Save,
  SquarePen,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";
import { Checkbox, DatePicker, message, Radio, Select, Switch } from "antd";
import ProductTable from "../components/ProductTable";
import ProductService from "../service/ProductService";
import CategoriesService from "../../categories/service/CategoriesService";
import type { CreateProductInput } from "../types/ProductTypes";

const COLORS = [
  { name: "green", hex: "#D7EACB" },
  { name: "pink", hex: "#ECD3D6" },
  { name: "gray", hex: "#D5DDE0" },
  { name: "yellow", hex: "#ECE7C9" },
  { name: "black", hex: "#464A4D" },
];

// Doimiy (o'zgarmas) brand ID — backend'dagi mavjud brandning UUID'i
// MUHIM: shu yerga haqiqiy, bazada mavjud bo'lgan brand UUID'ini yozing
const BRAND_ID = "e3919333-c644-4727-9998-f0c524ada6b3";

function generateSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function generateSku(name: string) {
  return (
    name
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 10) || "SKU"
  );
}

export default function Products() {
  const { useCreateProduct } = ProductService();
  const { mutate: createProduct, isPending: isSaving } = useCreateProduct();

  const { isLoading: categoriesLoading, data: categoriesData } =
    CategoriesService();

  const categories = categoriesData?.data ?? [];

  // Form state
  const [phoneName, setPhoneName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | null>(null);
  const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);
  const [value, setValue] = useState("yes"); // Tax Included
  const [stockQuantity, setStockQuantity] = useState<number | null>(null);
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isFeatured, setIsFeatured] = useState(false);
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Images
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [extraImageUrls, setExtraImageUrls] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleAddImage = () => {
    if (!newImageUrl.trim()) return;
    setExtraImageUrls((prev) => [...prev, newImageUrl.trim()]);
    setNewImageUrl("");
  };

  const handleRemoveImage = (index: number) => {
    setExtraImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setPhoneName("");
    setDescription("");
    setPrice(null);
    setDiscountedPrice(null);
    setValue("yes");
    setStockQuantity(null);
    setIsUnlimited(false);
    setIsActive(true);
    setIsFeatured(false);
    setCategoryId(undefined);
    setSelectedColor(null);
    setMainImageUrl("");
    setExtraImageUrls([]);
  };

  const validate = (): string | null => {
    if (!phoneName.trim()) return "Mahsulot nomini kiriting";
    if (!description.trim()) return "Tavsifni kiriting";
    if (!price || price <= 0) return "Narxni to'g'ri kiriting";
    if (!categoryId) return "Kategoriyani tanlang";
    if (!mainImageUrl.trim()) return "Asosiy rasm URL manzilini kiriting";
    if (!isUnlimited && (stockQuantity === null || stockQuantity < 0))
      return "Ombordagi sonini kiriting yoki 'Unlimited' ni yoqing";
    return null;
  };

  const handleSubmit = (publish: boolean) => {
    const error = validate();
    if (error) {
      message.error(error);
      return;
    }

    const discountPercent =
      discountedPrice && price
        ? Math.round(((price - discountedPrice) / price) * 100)
        : 0;

    const payload: CreateProductInput = {
      name: phoneName,
      slug: generateSlug(phoneName),
      description,
      shortDescription: description.slice(0, 120),
      sku: generateSku(phoneName),
      barcode: "",
      brandId: BRAND_ID,
      price: price!,
      oldPrice: discountedPrice ?? 0,
      discountPercent,
      stock: isUnlimited ? 999999 : stockQuantity!,
      lowStockThreshold: 5,
      categoryId: categoryId!,
      isActive: publish ? isActive : false,
      isFeatured,
      isNew: true,
      isPopular: false,
      images: [
        { url: mainImageUrl, alt: phoneName, isMain: true, sortOrder: 0 },
        ...extraImageUrls.map((url, i) => ({
          url,
          alt: phoneName,
          isMain: false,
          sortOrder: i + 1,
        })),
      ],
      variants: selectedColor
        ? [
            {
              sku: `${generateSku(phoneName)}-${selectedColor.toUpperCase()}`,
              price: price!,
              stock: isUnlimited ? 999999 : stockQuantity!,
              attributes: { color: selectedColor },
              isActive: true,
            },
          ]
        : [],
    };

    createProduct(payload, {
      onSuccess: () => {
        message.success(
          publish
            ? "Mahsulot muvaffaqiyatli e'lon qilindi"
            : "Qoralama sifatida saqlandi",
        );
        resetForm();
      },
      onError: (err: any) => {
        message.error(
          err?.response?.data?.message ?? "Mahsulot yaratishda xatolik",
        );
      },
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#023337] text-[22px] font-bold">Add New Product</p>
        <div className="flex items-center gap-5">
          <div>
            <Search placeholder="Search..." />
          </div>
          <div className="flex items-center gap-3">
            <div>
              <button
                type="button"
                disabled={isSaving}
                onClick={() => handleSubmit(true)}
                className="px-4 py-2 bg-[#4EA674] rounded-sm text-[15px] font-bold text-white cursor-pointer disabled:opacity-50"
              >
                {isSaving ? "Saqlanmoqda..." : "Publish Product"}
              </button>
            </div>
            <div>
              <button
                type="button"
                disabled={isSaving}
                onClick={() => handleSubmit(false)}
                className="flex items-center gap-1 px-4 py-2 bg-[#FFFFFF] rounded-sm text-[15px] font-bold text-[#023337] cursor-pointer disabled:opacity-50"
              >
                <Save size={18} />
                Save to draft
              </button>
            </div>
            <div className="px-4 py-2 rounded-sm bg-[#FFFFFF]">
              <CirclePlus color="#6A717F" size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-5 mt-9">
        {/* left */}
        <div className="w-[55%] rounded-sm bg-white shadow-[0px_1px_3px_0px_#00000033] p-6">
          <p className="text-[22px] font-bold text-[#23272E]">Basic Details</p>

          <div className="flex flex-col gap-3 mt-6">
            <label htmlFor="">Product Name</label>
            <Input
              className="h-10"
              placeholder="Phone name"
              value={phoneName}
              onChange={(e) => setPhoneName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <label htmlFor="">Product Description</label>
            <div className="bg-[#F9FAFB] p-3 rounded-sm">
              <textarea
                className="w-full bg-transparent border-0 outline-0 resize-none"
                rows={4}
                placeholder="Mahsulot tavsifini yozing..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex justify-end gap-2.5 mt-5">
                <SquarePen className="cursor-pointer" size={20} />
                <WandSparkles className="cursor-pointer" size={20} />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[22px] font-bold text-[#23272E]">Pricing</p>
            <div>
              <label htmlFor="">Product Price</label>
              <div className="bg-[#F9FAFB] mt-3 shadow rounded-lg py-[15px] px-3 flex items-center justify-between">
                <input
                  className="border-0 outline-0 bg-transparent w-full"
                  type="number"
                  placeholder="0"
                  value={price ?? ""}
                  onChange={(e) =>
                    setPrice(e.target.value ? Number(e.target.value) : null)
                  }
                />
                <select className="border-0 outline-0 bg-transparent cursor-pointer">
                  <option value="UZS">UZS</option>
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="mt-5">
                <label
                  htmlFor=""
                  className="text-[#023337] text-[15px] font-bold"
                >
                  Discounted Price{" "}
                  <span className="text-[#6A717F] font-normal">(Optional)</span>
                </label>
                <div className="flex justify-between mt-3 items-center py-2 px-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg">
                  <input
                    className="border-0 outline-0 bg-transparent w-full"
                    type="number"
                    placeholder="0"
                    value={discountedPrice ?? ""}
                    onChange={(e) =>
                      setDiscountedPrice(
                        e.target.value ? Number(e.target.value) : null,
                      )
                    }
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor=""
                  className="text-[#023337] text-[15px] font-bold"
                >
                  Tax Included
                </label>
                <div className="gap-2 mt-3.5">
                  <Radio.Group
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  >
                    <div className="flex flex-col gap-2">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </div>
                  </Radio.Group>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[#023337] font-bold text-[15px]">Expiration</p>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <DatePicker className="w-full h-[40px]" placeholder="start" />
                </div>
                <div>
                  <DatePicker className="w-full h-[40px]" placeholder="end" />
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#23272E] text-[22px] font-bold mt-8">
                Inventory
              </p>
              <div className="grid grid-cols-2 my-5 gap-5">
                <div>
                  <label htmlFor="">Stock Quantity</label>
                  <div className="mt-3">
                    <Input
                      className="h-[40px]"
                      type="number"
                      disabled={isUnlimited}
                      placeholder={isUnlimited ? "Unlimited" : "0"}
                      value={isUnlimited ? "" : (stockQuantity ?? "")}
                      onChange={(e) =>
                        setStockQuantity(
                          e.target.value ? Number(e.target.value) : null,
                        )
                      }
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Stock Status</label>
                  <div className="mt-3">
                    <Select
                      className="h-[40px] w-full"
                      value={isActive ? "In Stock" : "Out of Stock"}
                      onChange={(v) => setIsActive(v === "In Stock")}
                      options={[
                        { value: "In Stock", label: "In Stock" },
                        { value: "Out of Stock", label: "Out of Stock" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center mt-3.5">
              <Switch checked={isUnlimited} onChange={setIsUnlimited} />
              <p className="text-[#023337] font-normal text-[15px]">
                Unlimited
              </p>
            </div>

            <div className="flex items-center gap-2 mt-5">
              <Checkbox
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
              />
              <p className="text-[#6A717F] text-[15px] font-normal">
                Highlight this product in a featured section.
              </p>
            </div>

            <div className="flex justify-end gap-5 items-center mt-8">
              <div>
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={() => handleSubmit(false)}
                  className="px-3 cursor-pointer py-2.5 font-bold text-[15px] text-[#023337] flex gap-2 items-center bg-[#FFFFFF] rounded-lg border border-[#E5E7EB] disabled:opacity-50"
                >
                  <Save size={18} />
                  Save to draft
                </button>
              </div>
              <div>
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={() => handleSubmit(true)}
                  className="px-3 cursor-pointer text-[#FFFFFF] font-bold text-[15px] py-2.5 flex gap-2 items-center bg-[#4EA674] rounded-lg border border-[#E5E7EB] disabled:opacity-50"
                >
                  {isSaving ? "Saqlanmoqda..." : "Publish Product"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-[43%] p-6 rounded-sm bg-white shadow-[0px_1px_3px_0px_#00000033]">
          <p className="text-[#23272E] font-bold text-[22px]">
            Upload Product Image
          </p>

          <div className="mt-5">
            <p className="text-[#023337] text-[15px] font-bold">
              Asosiy rasm (URL)
            </p>
            <div className="border mt-3 border-[#E5E7EB] rounded-lg flex flex-col p-3 gap-3">
              {mainImageUrl && (
                <div className="flex items-center justify-center">
                  <img
                    src={mainImageUrl}
                    alt=""
                    className="max-h-40 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
              <Input
                placeholder="https://example.com/image.jpg"
                value={mainImageUrl}
                onChange={(e) => setMainImageUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[#023337] text-[15px] font-bold">
              Qo'shimcha rasmlar
            </p>
            <div className="grid grid-cols-2 gap-5 mt-3">
              {extraImageUrls.map((url, index) => (
                <div
                  key={index}
                  className="border border-[#E5E7EB] rounded-lg relative p-1"
                >
                  <img
                    src={url}
                    alt=""
                    className="w-full h-20 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div
                    className="absolute top-0.5 right-0.5 cursor-pointer"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <CircleX size={16} color="#6A717F" />
                  </div>
                </div>
              ))}
              <div className="border border-[#E5E7EB] rounded-lg flex items-center justify-center w-full p-3">
                <div className="flex flex-col gap-2 w-full">
                  <Input
                    placeholder="Rasm URL"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    onPressEnter={handleAddImage}
                  />
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="flex items-center justify-center gap-1 text-[#4EA674] cursor-pointer"
                  >
                    <CirclePlus size={18} />
                    <span>Add Image</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[#23272E] font-bold text-[22px]">Categories</p>
            <div className="mt-5">
              <p className="text-[#023337] font-bold text-[15px]">
                Product Category
              </p>
              <div className="mt-3">
                <Select
                  placeholder="Kategoriyani tanlang"
                  className="h-[40px] w-full"
                  loading={categoriesLoading}
                  value={categoryId}
                  onChange={setCategoryId}
                  options={categories.map((c) => ({
                    value: c.id,
                    label: c.name,
                  }))}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[#023337] font-bold text-[15px]">
              Select your color (ixtiyoriy)
            </p>
            <div className="mt-3 flex items-center gap-3">
              {COLORS.map((c) => (
                <div
                  key={c.name}
                  onClick={() =>
                    setSelectedColor((prev) =>
                      prev === c.name ? null : c.name,
                    )
                  }
                  style={{ background: c.hex }}
                  className={`cursor-pointer rounded-lg w-12 h-12 border ${
                    selectedColor === c.name
                      ? "border-[#4EA674] border-2"
                      : "border-[#00000033]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductTable />
      </div>
    </div>
  );
}
