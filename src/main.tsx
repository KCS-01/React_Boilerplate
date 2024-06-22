import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";

import "./index.css";

/** 리액트 쿼리 설정 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            throwOnError: true /** 에러 발생시 던지기 */,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
);
