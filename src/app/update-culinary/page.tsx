import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateCulinary from "@/components/updateCulinary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateCulinaryPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateCulinary />
      </div>
    </DefaultLayout>
  );
};

export default UpdateCulinaryPage
