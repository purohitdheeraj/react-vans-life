import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
	return (
		<main className="main app">
			<Header />
			<Outlet></Outlet>
			<Footer />
		</main>
	);
};

export default Layout;
