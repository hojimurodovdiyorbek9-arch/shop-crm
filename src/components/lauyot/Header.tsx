import { Input } from "antd";
import type { GetProps } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { BellDot, Moon, Sun } from "lucide-react";
import avatar from "../../assets/img/avatar.png";
import { useTheme } from "../../context/modContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;

  const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1677ff" }} />;

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="flex h-[66px] w-full items-center justify-between pl-[24px] pr-[44px] bg-white dark:bg-[#111827]">
      <div>
        <p className="text-[#023337]  dark:bg-[#111827] dark:text-white">
          Dashboard
        </p>
      </div>

      <div className="flex items-center gap-5">
        {/* Search */}
        <div>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            className={darkMode ? "dark-search" : ""}
            style={{ width: 300 }}
          />
        </div>

        {/* Notification */}
        <div>
          <BellDot size={20} className="text-[#6A717F] dark:text-white" />
        </div>

        {/* Dark / Light */}
        <div className="w-[56px] rounded-[20px] bg-[#EAF8E7] p-1">
          <div onClick={toggleDarkMode} className="cursor-pointer"  >
            <div
              className={`flex w-full cursor-pointer  transition-transform duration-500 ${
                darkMode ? "translate-x-[24px] " : "translate-x-0 "
              }`}
            >
              {!darkMode ? (
                <Sun size={24} className="rounded-full bg-white p-1" />
              ) : (
                <Moon size={24} className="rounded-full bg-white p-1" />
              )}
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div>
          <img
            src={avatar}
            alt="avatar"
            className="h-[40px] w-[40px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
