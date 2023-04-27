import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(false);
	const navigate = useNavigate();

	const userLogin = () => {
		setLoginState(true);
	};

	const userLogout = () => {
		setLoginState(false);
		navigate("/", { replace: true });
	};

	const value = {
		userLogin,
		userLogout,
		loginState,
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
