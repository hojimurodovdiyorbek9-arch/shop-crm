import { Route, Routes } from "react-router";
import Dashboard from "./feature/dashboard/pages/Dashboard";
import Categories from "./feature/categories/pages/Categories";
import Customer from "./feature/customer/pages/Customer";

import OrderManagment from "./feature/orderManagment/pages/OrderManagment";
import Lauyot from "./components/lauyot/Lauyot";
import Login from "./feature/auth/pages/Login";
import Profile from "./feature/profile/pages/Profile";
import Products from "./feature/products/pages/Products";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lauyot />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orderManagment" element={<OrderManagment />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
