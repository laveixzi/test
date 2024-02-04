import { Outlet } from "react-router-dom";
import { DefaultFooter } from "../pages/footers";
import { DefaultHeader } from "../pages/headers";
import { useTheme } from "../hooks/useTheme";

export default function DefaultLayout() {
  useTheme();

  return (
    <>
      <div className="wrapper">
        <DefaultHeader />
        <Outlet />
      </div>
      <DefaultFooter />
    </>
  );
}
