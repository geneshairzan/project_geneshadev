import { Fragment } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

const ROUTESLIST = import.meta.glob("@pages/**/[a-z4[]*.jsx", { eager: true });

const default_router = (routeGlob) =>
  Object.keys(routeGlob).map((route) => {
    const path = route
      .replace("../pages", "")
      .replace(/\/src\/pages|index|\.jsx$/g, "")
      .replace(/\[\.{3}.+\]/, "*")
      .replace(/\[(.+)\]/, ":$1");

    return { path, component: ROUTESLIST[route].default, plain: route };
  });

function RouteProvider({ MainContainer = Fragment, routeGlob = ROUTESLIST }) {
  let router = default_router(routeGlob);
  let NotFound = router.find((d) => d.path.includes("404"))?.component || Default404;

  return (
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route>
            {router.map((d, ix) => (
              <Route key={ix} path={d.path} element={<d.component />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export { useLocation, RouteProvider, ROUTESLIST };
export default RouteProvider;

function Default404(params) {
  return <>404</>;
}
