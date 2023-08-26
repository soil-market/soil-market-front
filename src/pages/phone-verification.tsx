import Process from "@/components/shared/process/Process";
import useIsMounted from "@/hooks/useIsMounted";
import PhoneVerification from "@/modules/phone-verfication/components/PhoneVerification";
import PhoneConfirm from "@/modules/phone-verfication/components/phoneConfirm/PhoneConfirm";

export default function PhoneVerficationPage() {
  const { isMounted } = useIsMounted();

  return (
    <>
      <Process className="h-full" processName="phone-verification">
        {isMounted && <PhoneVerification />}
        {isMounted && <PhoneConfirm />}
      </Process>
      <div id={"recaptcha-container"}></div>
    </>
  );
}
