import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <img src='./blog-logo.png' alt="blog" width={70} height={40} className="rounded-md" />
          <span className="text-xl font-bold">DevScope</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center -ml-[144px]">
          <Link to="/" className="hover:text-violet-800 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Home</Link>
          <Link to="/contact" className="hover:text-violet-800 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Contact</Link>
          <Link to="/faq" className="hover:text-violet-800 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">FAQ</Link>
          <Link to="/about" className="hover:text-violet-800 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">About</Link>
          <Link to="/privacy" className="hover:text-violet-800 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Privacy</Link>
        </nav>

        <div className="hidden md:flex hover:text-violet-800">
          <Link to="/">
            <div className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center overflow-hidden">
              <span className="text-lg">👩‍💻</span>
            </div>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden px-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <nav className="flex flex-col gap-4 py-4">
          <Link to="/" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Home</Link>
          <Link to="/contact" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Contact</Link>
          <Link to="/faq" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">FAQ</Link>
          <Link to="/about" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">About</Link>
          <Link to="/privacy" className="hover:text-green-700 font-medium transition-colors hover:bg-slate-100 p-2 rounded-lg">Privacy</Link>
          <Link to="/" className="flex items-center gap-2 hover:text-green-700">
            <div className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center overflow-hidden">
              <span className="text-lg">👩‍💻</span>
            </div>
            <span className="font-medium">Profile</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
