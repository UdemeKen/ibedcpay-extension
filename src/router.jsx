import { createBrowserRouter } from "react-router-dom";
import CancelPayment from "./views/errorConfirmations/CancelPayment";
import SuccessfulPayment from "./views/successConfirmations/SuccessfulPayments";
import Spinner from "./views/spinner/Spinner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Spinner />
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