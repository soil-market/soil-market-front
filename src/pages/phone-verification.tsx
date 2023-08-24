import Process from "@/components/shared/process/Process";
import useIsMounted from "@/hooks/useIsMounted";
import PhoneTextField from "@/modules/phone-verfication/components/PhoneTextField";
import PhenVerification from "@/modules/phone-verfication/components/phoneVerification/PhenVerification";

export default function PhoneVerficationPage() {
  const { isMounted } = useIsMounted();

  return (
    <>
      <Process className="h-full" processName="phone-verification">
        {isMounted && <PhoneTextField />}
        {isMounted && <PhenVerification />}
      </Process>
      <div id={"recaptcha-container"}></div>
    </>
  );
}
