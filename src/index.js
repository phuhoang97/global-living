import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "./scss/index.scss";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ConfigProvider
				theme={{
					token: {
						fontSize: 16,
						colorPrimary: "#7c3ab7",
					},
				}}
			>
				<App />
			</ConfigProvider>
		</BrowserRouter>
	</React.StrictMode>
);
