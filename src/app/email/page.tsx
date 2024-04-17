import Email from "@/components/Email";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ecoNusantara",
    description: "Website ecoNusantara",
};

const EmailPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <Email />
      </div>
    </DefaultLayout>
  );
};

export default EmailPage
