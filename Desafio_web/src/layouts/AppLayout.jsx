import { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

import { Container } from "./Styles";

export default function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll page to top when it is opened
  }, [pathname]);

  return (
    <Container>
      <Outlet />
    </Container>
  );
}
