import FindTextField from "@/find/components/FindTextField";
import FilterList from "./FilterList";

export default function HomeHeader() {
  return (
    <div className="absolute top-0 w-full flex flex-col gap-12 p-20">
      <div></div>

      <FindTextField />
      <FilterList />
    </div>
  );
}
