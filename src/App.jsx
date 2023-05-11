import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import {
	AuthLayout,
	ErrorBoundary,
	Layout,
	ProtectedLayout,
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
import { loader as vanDetailLoader } from "./pages/VanDetail";
import { loader as hostLoader } from "./pages/Host";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<AuthLayout />}>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route
						path="vans"
						element={<Vans />}
						loader={loader}
						errorElement={<ErrorBoundary />}
					/>
					<Route
						path="vans/:id"
						element={<VanDetail />}
						loader={vanDetailLoader}
					/>

					<Route element={<ProtectedLayout />}>
						<Route
							path="host"
							element={<Host />}
							loader={hostLoader}
						/>
					</Route>

					<Route path="login" element={<Login />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
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
