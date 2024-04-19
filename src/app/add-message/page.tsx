import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddMessage from "@/components/addMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddEventPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddMessage />
      </div>
    </DefaultLayout>
  );
};

export default AddEventPage
