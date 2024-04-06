import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import ErrorWriteBoard from "../view/write/ErrorWriteBoard.tsx";

const router = createBrowserRouter([
    {
        path: "/app",
        element: <App />
    },
    {
        path: "/error/write",
        element: <ErrorWriteBoard />
    }
])

export default router;