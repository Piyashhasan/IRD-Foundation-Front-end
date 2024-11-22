import Image from "next/image";
import logo from "@/assets/logo.svg";
import support from "@/assets/support.svg";
import homeIcon from "@/assets/home.svg";
import menuIcon from "@/assets/menu.svg";
import memorizeIcon from "@/assets/memorize.svg";
import keepMinusIcon from "@/assets/keep-minus.svg";
import ruqyahIcon from "@/assets/ruqyah.svg";
import duaIcon from "@/assets/dua-info.svg";
import bookIcon from "@/assets/books.svg";

export default function LeftSideBar() {
  return (
    <div className="h-[calc(100vh-50px)] overflow-y-auto">
      <div className="flex flex-col items-center justify-between">
        <div className="cursor-pointer">
          <Image className="object-cover object-center" src={logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-y-[27px] my-[80px]">
          <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center cursor-pointer">
            <Image src={homeIcon} alt="icon" />
          </div>
          <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center cursor-pointer">
            <Image src={menuIcon} alt="icon" />
          </div>
          <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center cursor-pointer">
            <Image src={memorizeIcon} alt="icon" />
          </div>
          <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center cursor-pointer">
            <Image src={keepMinusIcon} alt="icon" />
          </div>
          <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center cursor-pointer">
            <Image src={ruqyahIcon} alt="icon" />
          </div>
          <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center cursor-pointer">
            <Image src={duaIcon} alt="icon" />
          </div>
          <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center cursor-pointer">
            <Image src={bookIcon} alt="icon" />
          </div>
        </div>
        <div className="cursor-pointer">
          <Image
            className=" object-cover object-center"
            src={support}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
