import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddDonation from "@/components/addDonation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddDonationPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddDonation />
      </div>
    </DefaultLayout>
  );
};

export default AddDonationPage
