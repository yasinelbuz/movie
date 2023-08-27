import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import Constant from "@/constant";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { store } from "@/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={{ ...Constant.theme }}>
					<Constant.globalStyles />
					<App />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
