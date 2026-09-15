import { Form, Input, InputNumber, Modal, Switch } from "antd";

import { useEffect } from "react";
import foto from "../../../assets/img/iphone1.png";
import type { CreateCategoryType } from "../types/CategoriesType";

interface Props {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (values: CreateCategoryType) => void;
}

export default function CategoriesModal({
  open,
  loading,
  onClose,
  onSubmit,
}: Props) {
  const [form] = Form.useForm<CreateCategoryType>();

  useEffect(() => {
    if (open) {
      form.resetFields();

      form.setFieldsValue({
        name: "",
        slug: "",
        description: "",
        image: null,
        parentId: undefined,
        isActive: true,
        sortOrder: 0,
      });
    }
  }, [open, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      console.log("FORM:", values);

      const data: CreateCategoryType = {
        name: values.name,
        slug: values.slug,
        description: values.description || "",
        image: values.image || foto,
        parentId: values.parentId || undefined,
        isActive: values.isActive,
        sortOrder: values.sortOrder,
      };

     

      onSubmit(data);
    } catch (error) {
      console.log("FORM ERROR:", error);
    }
  };

  return (
    <Modal
      title="Create Category"
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      okText="Create"
      cancelText="Cancel"
      confirmLoading={loading}
      centered
    >
      <Form form={form} layout="vertical" className="mt-5">
        <Form.Item
          label="Category name"
          name="name"
          rules={[
            {
              required: true,
              message: "Category nomini kiriting",
            },
          ]}
        >
          <Input placeholder="Smartphones" size="large" />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[
            {
              required: true,
              message: "Slug kiriting",
            },
          ]}
        >
          <Input placeholder="smartphones" size="large" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Smartphones category" rows={4} />
        </Form.Item>

        <Form.Item label="Image URL" name="image">
          <Input placeholder="https://example.com/image.png" size="large" />
        </Form.Item>

        {/* <Form.Item label="Parent ID" name="parentId">
          <Input placeholder="Parent category ID" size="large" />
        </Form.Item> */}

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Sort Order"
            name="sortOrder"
            rules={[
              {
                required: true,
                message: "Sort order kiriting",
              },
            ]}
          >
            <InputNumber
              min={0}
              className="w-full"
              size="large"
              placeholder="1"
            />
          </Form.Item>

          <Form.Item label="Active" name="isActive" valuePropName="checked">
            <Switch />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
