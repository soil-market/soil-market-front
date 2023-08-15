import Process from "@/components/shared/process/Process";
import PhenVerification from "@/phone-verfication/PhenVerification";
import PhoneTextField from "@/phone-verfication/components/PhoneTextField";

export default function PhoneVerficationPage() {
  return (
    <Process className="h-full" processName="phone-verification">
      <PhoneTextField />
      <PhenVerification />
    </Process>
  );
}
