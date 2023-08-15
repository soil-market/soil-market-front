import Process from "@/components/shared/process/Process";
import PhoneTextField from "@/phone-verfication/components/PhoneTextField";

export default function PhoneVerficationPage() {
  return (
    <Process processName="phone-verification">
      <PhoneTextField />
      <div>전화번호 인증하기</div>
    </Process>
  );
}
