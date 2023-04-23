import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const userLogin = () => {
		setIsLoggedIn(true);
	};

	const userLogout = () => {
		setIsLoggedIn(false);
	};

	const value = {
		userLogin,
		userLogout,
		isLoggedIn,
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	return useContext(AuthContext);
};

export { AuthProvider, useAuth };
