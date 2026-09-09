import { Route, Routes } from "react-router-dom";
import Categories from "../../feature/categories/pages/Categories";
import Customer from "../../feature/customer/pages/Customer";
import Dashboard from "../../feature/dashboard/pages/Dashboard";
import Products from "../../feature/products/pages/Products";
import OrderManagment from "../../feature/orderManagment/pages/OrderManagment";

export default function Content() {
  return (
    <div className="bg-[#F9FAFB] w-full h-[calc(100vh-96px)] p-4 overflow-y-auto ">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orderManagment" element={<OrderManagment />} />
      </Routes>
    </div>
  );
}
