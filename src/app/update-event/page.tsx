import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateEvent from "@/components/updateEvent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateEventPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateEvent />
      </div>
    </DefaultLayout>
  );
};

export default UpdateEventPage
