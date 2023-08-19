import ExportListItem from "./ExportListItem";

export default function ExportList() {
  const item = {
    name: "마사토",
    amount: 2400,
    location: "경상남도 김해시",
    imgUrl: "/mock/로고.png",
  };

  return (
    <ol>
      <ExportListItem {...item} />
    </ol>
  );
}
