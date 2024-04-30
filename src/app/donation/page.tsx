import Donation from "@/components/Donation";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ecoNusantara",
    description: "Website ecoNusantara",
};

const DonationPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <Donation />
      </div>
    </DefaultLayout>
  );
};

export default DonationPage
