import Image from "next/image";
import searchIcon from "@/assets/search.svg";
import profileIcon from "@/assets/profile.svg";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between gap-x-8">
      <div className="w-full flex items-center justify-between">
        <div>
          <h3 className="text-[24px] text-[#393939] font-semibold">Dua Page</h3>
        </div>
        {/* --- search input --- */}
        <div className="w-[350px] bg-white rounded-[10px] flex items-center justify-between border focus-within:border-green-600">
          <input
            className="px-4 py-3 rounded-[10px] outline-none text-[16px] w-full"
            type="text"
            name="search"
            placeholder="Search by Dua Name"
          />
          <button className="w-[54px] h-11 bg-[#F3F4F6] mr-1 rounded-[6px] flex items-center justify-center">
            <Image src={searchIcon} alt="search-icon" />
          </button>
        </div>
        {/* --- search input --- */}
      </div>
      <div className="min-w-[330px] flex items-center justify-end">
        <div className="flex items-center cursor-pointer">
          <Image
            className="w-[45px] h-[45px] object-cover object-top"
            src={profileIcon}
            alt="Profile icon"
          />
          <MdOutlineArrowDropDown className="text-[25px] text-[#868686]" />
        </div>
      </div>
    </nav>
  );
}
