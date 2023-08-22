import FindOption from "./FindOption";

type FindOptionListProps = {
  optionList: naver.maps.Service.AddressItemV2[];
  onClick: (address: naver.maps.Service.AddressItemV2) => void;
};
export default function FindOptionList({
  optionList,
  onClick,
}: FindOptionListProps) {
  return (
    <>
      {optionList.length > 0 && (
        <div className="absolute top-[96px] left-0 w-full shadow-md">
          {optionList.map((option) => {
            const handleClick = () => {
              onClick(option);
            };

            return (
              <FindOption onClick={handleClick} key={option.x} {...option} />
            );
          })}
        </div>
      )}
    </>
  );
}
