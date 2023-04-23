import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import {
	AuthReq,
	ErrorBoundary,
	Layout,
} from "./components";
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
import "./server";
import { loader } from "./pages/Vans";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<Layout />}
			>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route
					path="vans"
					element={<Vans />}
					loader={loader}
					errorElement={<ErrorBoundary />}
				/>
				<Route path="vans/:id" element={<VanDetail />} />
				<Route element={<AuthReq />}>
					<Route path="host" element={<Host />} />
				</Route>
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
