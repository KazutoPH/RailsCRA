import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as page from "./pages";
import RootLayout from "./pages/components/shared/Layout/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<page.LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
