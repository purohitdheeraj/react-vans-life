import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShuttleVan } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {
	return (
		<header className="header">
			<h2 className="header-logo">
				<Link to="/">
					<FaShuttleVan size="2em" className="van-icon" />
				</Link>
			</h2>

			<nav className="nav">
				<ul>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
							to="host"
						>
							Host
						</NavLink>
					</li>

					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
							to="about"
						>
							About
						</NavLink>
					</li>

					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
							to="vans"
						>
							Vans
						</NavLink>
					</li>

					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? "active" : ""
							}
							to="login"
						>
							<HiOutlineUserCircle
								aria-label="login-icons"
								size="1.5em"
							/>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
