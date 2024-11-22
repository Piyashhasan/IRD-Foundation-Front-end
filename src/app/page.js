import Category from "@/components/Category/Category";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import MainContent from "@/components/MainContent/MainContent";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="px-10 py-6">
      <div className="flex justify-between gap-x-[30px]">
        {/* --- Left sidebar section start --- */}
        <div className="w-[100px] bg-white rounded-3xl overflow-hidden">
          <LeftSideBar />
        </div>
        {/* --- Left sidebar section end --- */}

        <div className="w-full">
          {/* --- Navbar section start --- */}
          <div>
            <NavBar />
          </div>
          {/* --- Navbar section end --- */}

          <div className="flex justify-between gap-x-8 mt-7">
            {/* --- Category section start --- */}
            <div className="min-w-[350px]">
              <Category />
            </div>
            {/* --- Category section end --- */}

            {/* --- Main content section start --- */}
            <div className="w-full">
              <MainContent />
            </div>
            {/* --- Category section end --- */}

            {/* --- Settings section start --- */}
            <div className="min-w-[330px] hidden 2xl:block">
              <h1>Settings section</h1>
            </div>
            {/* --- Settings section end --- */}
          </div>
        </div>
      </div>
    </div>
  );
}
