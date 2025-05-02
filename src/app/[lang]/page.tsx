import Title from "@/app/components/ui/MainTitle/MainTitle";
import AboutUs from "@/app/components/sections/Hero";

const Page = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <Title />
        <AboutUs />
      </div>
    </div>
  );
};

export default Page;
