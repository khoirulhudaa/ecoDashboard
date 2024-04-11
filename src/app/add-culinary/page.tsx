import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddCulinary from "@/components/addCulinary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddCulinaryPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddCulinary />
      </div>
    </DefaultLayout>
  );
};

export default AddCulinaryPage
