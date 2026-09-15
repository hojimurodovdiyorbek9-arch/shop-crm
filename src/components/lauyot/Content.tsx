import { Outlet } from "react-router-dom";


export default function Content() {
  return (
    <div className="bg-[#F9FAFB] w-full h-[calc(100vh-96px)] p-4 overflow-y-auto ">
      <Outlet />
    </div>
  );
}
