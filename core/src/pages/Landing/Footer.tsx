// pages/index.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 px-8 py-12 text-center text-white md:px-32">
      <p>&copy; {new Date().getFullYear()} Our Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
