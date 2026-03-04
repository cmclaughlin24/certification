import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>Application Header & Navigation Items</header>
      <main>
        <Outlet />
      </main>
      <footer>Applicaton Footer</footer>
    </>
  );
}
