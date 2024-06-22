import { Route, Routes } from "react-router-dom";

import { BoardRouter } from "./BoardRouter";

import { Home } from "~pages/Home/Home";
import { Login } from "~pages/Login/Login";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/board/*" element={<BoardRouter />} />
        </Routes>
    );
};
