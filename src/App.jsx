import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { ErrorBoundary, Layout } from "./components";
import "./reset.css";
import "./App.css";
import {
	About,
	Home,
	Host,
	Login,
	VanDetail,
	Vans,
	PageNotFound,
} from "./pages";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<Layout />}
				errorElement={<ErrorBoundary />}
			>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="vans" element={<Vans />} />
				<Route path="vans/:id" element={<VanDetail />} />
				<Route path="host" element={<Host />} />
				<Route path="login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
