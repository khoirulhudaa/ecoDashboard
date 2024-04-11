import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddContact from "@/components/addContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddContactPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddContact />
      </div>
    </DefaultLayout>
  );
};

export default AddContactPage
