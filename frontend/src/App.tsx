import {Routes, Route, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  return(
    <>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/company" element={<div>Company</div>} />
          <Route path="/pricing" element={<div>Pricing</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App;
