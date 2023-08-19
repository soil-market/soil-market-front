import FindTextField from "@/find/components/FindTextField";
import FilterList from "./FilterList";
import HomeLocation from "./HomeLocation";

export default function HomeHeader() {
  return (
    <div className="absolute top-0 w-full flex flex-col gap-12 p-20">
      <HomeLocation />
      <FindTextField />
      <FilterList />
    </div>
  );
}
