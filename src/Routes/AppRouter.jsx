import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Header } from "../Components";
import { lazy, Suspense } from "react";
import {  Pagina404 } from "../Pages";
const Head = lazy(() => import("../Components/Header"));
export const AppRouter = () => {
  return (
    <>
      {/* PUBLICAS*/}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="d-flex justify-content-center">
                  <h4 className="text-white">Cargando...</h4>
                </div>
              }
            >
              <Head />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactos" element={<Contact />} />
        </Route>
    
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </>
  );
};

export default AppRouter;
