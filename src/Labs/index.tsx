import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC.tsx";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
    return (
        <div>
            <h1>Labs - Likhith Reddy Rechintala</h1>
            <a href="https://github.com/likhithreddy/kambaz-web-application.git" target="_blank" className="fs-4 text-decoration-none" id="wd-github">Kambaz Github Code Repository</a>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2/*" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    );
}
