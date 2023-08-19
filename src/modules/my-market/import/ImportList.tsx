import ImportListItem from "./ImportListItem";

export default function ImportList() {
  const item = {
    name: "마사토",
    amount: 2400,
    location: "경상남도 김해시",
  };

  return (
    <ol>
      <ImportListItem {...item} />
      <ImportListItem {...item} />
    </ol>
  );
}
