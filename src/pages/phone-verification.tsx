import Process from "@/components/shared/process/Process";
import PhenVerification from "@/modules/phone-verfication/components/PhenVerification";
import PhoneTextField from "@/modules/phone-verfication/components/PhoneTextField";

export default function PhoneVerficationPage() {
  return (
    <Process className="h-full" processName="phone-verification">
      <PhoneTextField />
      <PhenVerification />
    </Process>
  );
}
