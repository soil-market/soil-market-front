import PageLayout from "@/components/layout/PageLayout";
import FindOptionList from "@/modules/find/components/FindOptionList";
import FindTextField from "@/modules/find/components/FindTextField";
import GoToBtn from "@/modules/find/components/GoToBtn";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useState } from "react";

export default function FindPage() {
  const [text, setText] = useState("");
  const [addressList, setAddressList] = useState<
    naver.maps.Service.AddressItemV2[]
  >([]);
  const [currentAddress, setCurrentAddress] =
    useState<naver.maps.Service.AddressItemV2 | null>(null);

  const onSuccess = (addresses: naver.maps.Service.AddressItemV2[]) => {
    setAddressList(addresses);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
    if (value) {
      searchAddress(value, onSuccess);
    }
  };

  const onClick = (address: naver.maps.Service.AddressItemV2) => {
    setText(address.roadAddress);
    setCurrentAddress(address);
  };

  return (
    <PageLayout className="h-full justify-around">
      <div className="flex flex-col gap-12 relative">
        <Typography variant="h6">찾으시는 지역을 알려주세요!</Typography>
        <FindTextField value={text} onChange={onChange} />
        <FindOptionList onClick={onClick} optionList={addressList} />
      </div>
      <GoToBtn
        x={currentAddress ? currentAddress.x : ""}
        y={currentAddress ? currentAddress.y : ""}
      />
    </PageLayout>
  );
}

function searchAddress(
  query: string,
  onSuccess: (addresses: naver.maps.Service.AddressItemV2[]) => void
) {
  naver.maps.Service.geocode(
    {
      query,
    },
    (status, response) => {
      if (status !== naver.maps.Service.Status.OK) {
        return alert("Something wrong!");
      }

      const addresses = response.v2.addresses;

      onSuccess(addresses);
    }
  );
}
