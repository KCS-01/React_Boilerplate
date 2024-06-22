import { Route, Routes } from "react-router-dom";

import { BoardItem } from "~pages/Board/BoardItem";
import { BoardList } from "~pages/Board/BoardList";
import { BoardModify } from "~pages/Board/BoardModify";
import { BoardWrite } from "~pages/Board/BoardWrite";

export const BoardRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<BoardList />} />
            <Route path="/:id" element={<BoardItem />} />
            <Route path="/write" element={<BoardWrite />} />
            <Route path="/modify/:id" element={<BoardModify />} />
        </Routes>
    );
};
