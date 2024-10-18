import { createBrowserRouter } from "react-router-dom";
import CancelPayment from "./views/errorConfirmations/CancelPayment";
import Loader from "./views/Load/loader";
import SuccessfulPayment from "./views/successConfirmations/SuccessfulPayments";

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