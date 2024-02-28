import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./store";
import {
  QueryClient,
  QueryClientProvider,
  MutationCache,
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

const mutationCache = new MutationCache({
  onError: (error) => {
    toast.error(error.message);
  },
  onSuccess: (data) => {
    if (!data.success) {
      throw Error(data.message);
    }

    toast.success(data.message);
    return data;
  },
});

export const queryClient = new QueryClient({
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      // staleTime: 1000 * 2,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
