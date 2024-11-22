import categoryIcon from "@/assets/categoryIcon.svg";
import Image from "next/image";
import SubCategory from "../SubCategory/SubCategory";
export default function CategoryItem() {
  return (
    <div>
      <div className="flex items-center gap-x-2 bg-[#E8F0F5] p-[10px] rounded-[10px] cursor-pointer">
        <div className="min-w-[60px] h-[60px] bg-[#CFE0E5] rounded-[10px] flex items-center justify-center">
          <Image
            className="w-[40px] h-[40px] object-cover object-center"
            src={categoryIcon}
            alt="category icon"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <h5 className="text-[16px] font-semibold text-[#1FA45B]">
              Introduction to Dua
            </h5>
            <p className="text-[14px] text-[#7E7E7E]">Subcategory: 11</p>
          </div>
          <div>
            <h5 className="text-[16px] text-[#393939] font-semibold text-center">
              15
            </h5>
            <p className="text-[#7E7E7E] text-[14px]">Duas</p>
          </div>
        </div>
      </div>
      {/* --- sub category start --- */}
      <div className="ml-5 border-l-2 border-dotted border-[#1FA45B]">
        <SubCategory />
      </div>
      {/* --- sub category end --- */}
    </div>
  );
}
