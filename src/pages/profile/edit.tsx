import Button from "@/components/design/Button";
import TextField from "@/components/design/TextField";
import Header from "@/components/shared/header/Header";
import { useRouter } from "next/router";

export default function ProfileEditPage() {
  const name = "사용자 123";
  const hp = "010-1111-2222";
  const companyInfo = "건설업체";

  const list = [
    { label: "이름", value: name },
    { label: "업체정보", value: companyInfo },
    { label: "전화번호", value: hp },
  ];

  const { push } = useRouter();

  const onClick = () => {
    push("/profile");
  };

  return (
    <>
      <div className="flex flex-col">
        <Header text="프로필 수정" />
      </div>
      <div className="h-full flex flex-col justify-between pt-80 pb-87 px-20 gap-60">
        <div className="flex flex-col gap-60  w-full">
          {list.map((item) => (
            <TextField
              key={item.label}
              label={item.label}
              defaultValue={item.value}
              variant="filled"
            />
          ))}
        </div>

        <Button onClick={onClick}>수정완료</Button>
      </div>
    </>
  );
}
