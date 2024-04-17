import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddEvent from "@/components/addEvent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddEventPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddEvent />
      </div>
    </DefaultLayout>
  );
};

export default AddEventPage
