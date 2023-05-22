import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import BlogPage from "./components/Pages/BlogPage";
import BlogDetailsPage from "./components/Pages/BlogDetailsPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import PortfolioDetailsPage from "./components/Pages/PortfolioDetailsPage";
import ServiceDetailsPage from "./components/Pages/ServiceDetailsPage";
import ServicesPage from "./components/Pages/ServicesPage";
import TeamPage from "./components/Pages/TeamPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import TeamDetails from "./components/Pages/TeamDetails";
import PhotographyAgencyHome from "./components/Pages/PhotographyAgencyHome";
import CreativePortfolioHome from "./components/Pages/CreativePortfolioHome";
import DigitalAgencyHome from "./components/Pages/DigitalAgencyHome";
import MarketingAgencyHome from "./components/Pages/MarketingAgencyHome";
import ShowcasePortfolioHome from "./components/Pages/ShowcasePortfolioHome";
import MainProduct from "./components/Pages/MainProduct";
import Layout from "./components/Layout";
// import Product from './components/Pages/Product';
import FaqPage from "./components/Pages/FaqPage";
import MainLayout from "./common/layout";
import DefaultPage from "./pages/default";
import CommonTable from "./common/table";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path="photography-agency"
						element={<PhotographyAgencyHome />}
					/>
					<Route
						path="digital-agency"
						element={<DigitalAgencyHome />}
					/>
					<Route
						path="marketing-agency"
						element={<MarketingAgencyHome />}
					/>
					<Route path="about" element={<AboutPage />} />
					<Route path="service" element={<ServicesPage />} />
					<Route
						path="service/:serviceDetailsId"
						element={<ServiceDetailsPage />}
					/>
					<Route path="portfolio" element={<PortfolioPage />} />
					<Route
						path="portfolio/:portfolioDetailsId"
						element={<PortfolioDetailsPage />}
					/>
					<Route path="blog" element={<BlogPage />} />
					<Route
						path="blog/:blogDetailsId"
						element={<BlogDetailsPage />}
					/>
					<Route path="contact" element={<ContactPage />} />
					<Route path="team" element={<TeamPage />} />
					<Route path="team/:teamDetails" element={<TeamDetails />} />
					{/* <Route
            path="/case-study/:caseStudyDetailsId"
            element={<Product />}
          /> */}
					<Route path="faq" element={<FaqPage />} />
				</Route>
				<Route
					path="/"
					element={
						<Layout headerVariant="cs-site_header_full_width" />
					}
				>
					<Route
						path="creative-portfolio"
						element={<CreativePortfolioHome />}
					/>
					<Route
						path="showcase-portfolio"
						element={<ShowcasePortfolioHome />}
					/>
					<Route path="main-product" element={<MainProduct />} />
				</Route>
				<Route path="*" element={<ErrorPage />} />
				<Route path="/admin/*" element={<MainLayout />}>
					<Route path="default" element={<DefaultPage />} />
					<Route path="analytics" element={<DefaultPage />} />
					<Route path="table" element={<CommonTable />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
