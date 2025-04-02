import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RootLayout from "./layout/root-layout";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<div>Not Found Page</div>} />
    </Routes>
  );
};

export default App;
