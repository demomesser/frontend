import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"
import NotFoundPage from "./pages/PageNotFound";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default App
