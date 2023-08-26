import FindTextField from "@/modules/find/components/FindTextField";
import FilterList from "./FilterList";
import HomeLocation from "./HomeLocation";

export default function HomeHeader() {
  return (
    <>
      <div className="absolute top-0 w-full flex flex-col gap-12 p-20 border-solid border-b-1 border-light-gray">
        <HomeLocation />
        <FindTextField placeholder={"서울 강남구청역"} />
        <FilterList />
      </div>
    </>
  );
}
