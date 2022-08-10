import React from "react";
import { Route, Routes } from "react-router-dom";

import Index from "../pages/Index";

const SignIn = React.lazy(() => import("../pages/SignIn"));
const Cart = React.lazy(() => import("../pages/Cart"));

function Router() {
  return (
    <React.Suspense>
      <Routes>
        <Route element={<Index />} path="/" />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </React.Suspense>
  );
}

export default Router;
