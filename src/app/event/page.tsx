import Event from "@/components/Event";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ecoNusantara",
    description: "Website ecoNusantara",
};

const EventPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <Event />
      </div>
    </DefaultLayout>
  );
};

export default EventPage
