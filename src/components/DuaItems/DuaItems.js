import Image from "next/image";
import duaTitleIcon from "@/assets/allah.svg";
import copyIcon from "@/assets/copy.svg";
import bookMarkIcon from "@/assets/bookmark.svg";
import memorizeIcon from "@/assets/memorize.svg";
import shareIcon from "@/assets/share.svg";
import reportIcon from "@/assets/report.svg";
import audioIcon from "@/assets/audioIcon.svg";

export default function DuaItems() {
  return (
    <div className="my-[10px] px-[30px] py-[15px] bg-white rounded-[10px]">
      <div className="flex items-center gap-x-3">
        <div>
          <Image
            className="w-[35px] h-[35px] object-cover object-top"
            src={duaTitleIcon}
            alt="allah"
          />
        </div>
        <p className="text-[#1FA45B] font-semibold leading-6">
          1. The servant is dependent on his Lord #1
        </p>
      </div>
      <div className="mt-7">
        <p className="text-[#393939] leading-6">
          All human beings depend on Allah for their welfare and prevention of
          evil in various matters of their religion and world. Allah says
          (interpretation of the meaning): O mankind, you are those in need of
          Allah, while Allah is the Free of need, the Praiseworthy.
        </p>
      </div>

      <div className="mt-7">
        <p className="text-end text-[#393939] text-[24px] leading-6">
          لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
          وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
          مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ
          ذَا الْجَدِّ مِنْكَ الْجَدُّ
        </p>
      </div>

      <div className="mt-7">
        <p className="italic text-[#393939] leading-6">
          <span className="font-semibold not-italic">Transliteration:</span> Laa
          ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu
          wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa
          a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka
          al-jaddu
        </p>
      </div>

      <div className="mt-7">
        <p className="text-[#393939] leading-6">
          <span className="font-semibold not-italic">Translation:</span> There
          is none worthy of worship except Allah alone with no partner or
          associate. He is the Dominion and to Him be all praise, and He is able
          to do all things. O Allah, one can withhold what You have given and
          none can give what You have withheld, and no wealth or fortune can
          benefit anyone for from You comes all wealth and fortune.
        </p>
      </div>

      <div className="mt-7">
        <p className="text-[#1FA45B] font-semibold leading-6">Reference:</p>
        <p className="text-[#393939] text-[15px] font-semibold leading-6">
          Surah Al-Fatir 35:15
        </p>
      </div>
      <div className="mt-7 flex items-center justify-between">
        <div className="cursor-pointer">
          <Image src={audioIcon} alt="audio icon" />
        </div>
        <div className="flex items-center justify-end gap-x-10">
          <div className="cursor-pointer">
            <Image src={copyIcon} alt="copy icon" />
          </div>
          <div className="cursor-pointer">
            <Image src={bookMarkIcon} alt="bookmark icon" />
          </div>
          <div className="cursor-pointer">
            <Image src={memorizeIcon} alt="memorize icon" />
          </div>
          <div className="cursor-pointer">
            <Image src={shareIcon} alt="share icon" />
          </div>
          <div className="cursor-pointer">
            <Image src={reportIcon} alt="report icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
