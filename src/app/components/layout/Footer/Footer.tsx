'use client';

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white border-t border-white/20 mt-auto">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="py-3 sm:py-4 md:py-5">
          <p className="text-center font-doto font-medium text-xs sm:text-sm md:text-base lg:text-lg break-words tracking-wide">
            Copyright © {new Date().getFullYear()} DevMinds
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;