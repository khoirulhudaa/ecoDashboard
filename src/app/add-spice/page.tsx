import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddSpice from "@/components/addSpice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddSpicePage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddSpice />
      </div>
    </DefaultLayout>
  );
};

export default AddSpicePage
