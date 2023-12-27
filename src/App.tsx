import { BrowserRouter } from "react-router-dom";
import Router from "@/router";
import { Suspense } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
