import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Spice from "@/components/Spice";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ecoNusantara",
    description: "Website ecoNusantara",
};

const SpicePage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <Spice />
      </div>
    </DefaultLayout>
  );
};

export default SpicePage
