import Process from "@/components/shared/process/Process";
import useIsMounted from "@/hooks/useIsMounted";
import PhenVerification from "@/modules/phone-verfication/components/PhenVerification";
import PhoneTextField from "@/modules/phone-verfication/components/PhoneTextField";

export default function PhoneVerficationPage() {
  const { isMounted } = useIsMounted();

  return (
    <Process className="h-full" processName="phone-verification">
      {isMounted && <PhoneTextField />}
      {isMounted && <PhenVerification />}
    </Process>
  );
}
