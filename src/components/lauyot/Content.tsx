import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <div className="bg-[#F9FAFB] dark:bg-[#111827] w-full h-[calc(100vh-66px)] p-4 overflow-y-auto no-scrollbar ">
      <Outlet />
    </div>
  );
}
