import { createBrowserRouter } from "react-router-dom";
import CancelPayment from "./views/errorConfirmations/CancelPayment";
import SuccessfulPayment from "./views/successConfirmations/SuccessfulPayments";
import Loader from "./views/load/Loader.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Loader />
    },
    {
        path: "/success",
        element: <SuccessfulPayment />
    },
    {
        path: "/cancel",
        element: <CancelPayment />
    }
]);

export default router;