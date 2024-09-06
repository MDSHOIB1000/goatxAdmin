import { Navigate, Outlet } from "react-router-dom";
import DasBoardPage from "../pages/dasBoardPage";

function PrivateRoute({ componet: componet, isAuthenticated, ...rest }) {
  return isAuthenticated ? <DasBoardPage /> : <Navigate to="/loginPage" />;
}
export default PrivateRoute;
