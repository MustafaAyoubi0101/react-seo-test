import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-5 text-center text-sm space-y-1 text-gray-500">
      <div className="flex justify-center divide-x">
        <Link to="/privacy" className="px-3">
          Privacy Policy
        </Link>
        <Link to="/about" className="px-3">
          About
        </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()} DevScope. Designed and Developed By Mustafa Ayoubi.
      </div>
    </footer>
  );
}
