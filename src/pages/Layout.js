import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <main className="layout">
      <Outlet />
    </main>
  );
};

export default Layout;
