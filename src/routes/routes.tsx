import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { ProjectDetails } from "./projectDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<ProjectDetails />} />
    </Routes>
  );
}
