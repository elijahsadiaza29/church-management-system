import { Routes, Route } from "react-router-dom";
import RootLayout from "./shared/components/layout/root-layout";
import Dashboard from "./pages/dashboard";

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
