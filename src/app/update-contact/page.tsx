import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateContact from "@/components/updateContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateContactPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateContact />
      </div>
    </DefaultLayout>
  );
};

export default UpdateContactPage
