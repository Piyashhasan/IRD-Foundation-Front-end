import searchIcon from "@/assets/search.svg";
import Image from "next/image";
import CategoryItem from "../CategoryItem/CategoryItem";

export default function Category() {
  return (
    <div className="bg-white rounded-xl h-[calc(100vh-126px)]">
      <div className="bg-[#1FA45B] rounded-t-xl py-[18px]">
        <h3 className="text-[17px] font-semibold text-white text-center">
          Category
        </h3>
      </div>
      <div className="mx-4 my-4 bg-white rounded-[10px] flex items-center border focus-within:border-green-600">
        <button className="w-[54px] h-11 ml-1 rounded-[6px] flex items-center justify-center">
          <Image src={searchIcon} alt="search-icon" />
        </button>
        <input
          className="pl-1 pr-3 py-2 rounded-[10px] outline-none text-[16px] w-full"
          type="text"
          name="search"
          placeholder="Search by Categories"
        />
      </div>

      <div className="mx-4 p-2 h-[calc(100vh-280px)] overflow-y-auto">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
}
