import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<div className="bg-[#f5f3ff]">
				<main className="p-5 container mx-auto">
					{children}
				</main>
			</div>
			<Footer />
		</>
	);
}