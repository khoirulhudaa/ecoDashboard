import Contact from "@/components/Contact";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ecoNusantara",
    description: "Website ecoNusantara",
};

const ContactPage = () => {
  return (
    <DefaultLayout>

      <div className="flex flex-col gap-10">
        <Contact />
      </div>
    </DefaultLayout>
  );
};

export default ContactPage
