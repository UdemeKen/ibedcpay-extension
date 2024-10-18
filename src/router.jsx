import { createBrowserRouter } from "react-router-dom";
import CancelPayment from "./views/errorConfirmations/CancelPayment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CancelPayment />
    }
]);

export default router;