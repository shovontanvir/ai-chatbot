import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StateProvider } from "./states/StateProvider.jsx";
import reducer, { initialState } from "./states/reducer";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </Router>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
