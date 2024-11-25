"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

function ChangeLanguage() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeLanguage = (locale: string) => {
    setIsOpen(false);

    router.push(`/${locale}${pathname.slice(3)}`);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {pathname.includes("/ka") ? "ქართული" : "English"}
      </button>
      {isOpen && (
        <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-40 overflow-hidden">
          <button
            onClick={() => changeLanguage("en")}
            className="w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("ka")}
            className="w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            ქართული
          </button>
        </div>
      )}
    </div>
  );
}

export default ChangeLanguage;
