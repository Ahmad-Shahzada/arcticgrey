import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes-list/public-routes";
import Header from "./components/Header";

function App() {
  return (
    <Layout>
      <Routes>
        {publicRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        {/* Fallback route agar page na mile */}
        <Route path="*" element={<div className="text-white text-center pt-20">404 - Page Not Found</div>} />
      </Routes>
    </Layout>
  );
}

// Layout alignment for Dark Theme
const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      {/* Main Content: isko flex-grow diya taake footer (agar ho) hamesha niche rahe */}
      <main className="flex-grow w-full">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;