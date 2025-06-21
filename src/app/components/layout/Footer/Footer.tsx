'use client';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-text-primary border-t border-border-primary mt-auto">
      <div className="container-main">
        <div className="py-3 sm:py-4 md:py-5">
          <p className="text-center font-doto font-medium text-small text-text-primary tracking-wide">
            Copyright © {new Date().getFullYear()} DevMinds
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;