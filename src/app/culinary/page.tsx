import Culinary from "@/components/Culinary";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ecoNusantara",
    description: "Website ecoNusantara",
};

const CulinaryPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <Culinary />
      </div>
    </DefaultLayout>
  );
};

export default CulinaryPage
