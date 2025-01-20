import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const Page = () => {
  return (
    <div className="bg-[#191919] text-white min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-10">
          <h1 className="text-7xl font-extrabold ml-20 mt-10">DevMinds</h1> {/* Aumentado tamaño y margen */}
          <p className="text-lg text-center mt-4 mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut enim dolor.
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
