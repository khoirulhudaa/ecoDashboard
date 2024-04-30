import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateDonation from "@/components/updateDonation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateDonationPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateDonation />
      </div>
    </DefaultLayout>
  );
};

export default UpdateDonationPage
