import PageLayout from "@/components/layout/PageLayout";
import Process from "@/components/shared/process/Process";
import NameField from "@/sign-up/components/NameField";

export default function SignUpPage() {
  return (
    <PageLayout className="h-full">
      <Process
        className="h-full flex flex-col justify-around"
        processName="sign-up"
      >
        <NameField />
      </Process>
    </PageLayout>
  );
}
