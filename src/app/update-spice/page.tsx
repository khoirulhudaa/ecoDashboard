import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateSpice from "@/components/updateSpice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateCulinaryPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateSpice />
      </div>
    </DefaultLayout>
  );
};

export default UpdateCulinaryPage
