import Button from "@/components/design/Button";
import TuneIcon from "@mui/icons-material/Tune";

export default function FilterList() {
  const filterList = ["i", "거리", "토사 나와요", "토사 받아요"];

  return (
    <div className="w-full flex gap-12">
      {filterList.map((filter) => (
        <Button
          key={filter}
          className="flex-none"
          style={{ padding: "5px 10px", width: "fit-content", minWidth: 0 }}
        >
          {filter === "i" ? <TuneIcon className="rotate-90" /> : filter}
        </Button>
      ))}
    </div>
  );
}
