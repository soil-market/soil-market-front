import PageLayout from "@/components/layout/PageLayout";
import Process from "@/components/shared/process/Process";
import CompanyInformationField from "@/modules/sign-up/components/CompanyInformationField";
import NameField from "@/modules/sign-up/components/NameField";

export default function SignUpPage() {
  return (
    <PageLayout className="h-full">
      <Process
        className="h-full flex flex-col justify-around"
        processName="sign-up"
      >
        <NameField />
        <CompanyInformationField />
      </Process>
    </PageLayout>
  );
}
