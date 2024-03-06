import React from "react";
import ReactDOM from "react-dom/client";
import { RouteProvider } from "@gendev/provider";
import "@/assets/css_reset.css";
import AppServiceProvider from "@context/appServiceProvider";

ReactDOM.createRoot(document.getElementById("root")).render(<RouteProvider MainContainer={AppServiceProvider} />);
