import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import {Switch} from "@heroui/switch";

function App() {
  return (
   <div>
     <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
    <Switch defaultSelected aria-label="Automatic updates" color="warning" />
      <h1 className="text-7xl font-bold underline dark:bg-slate-700">
      Hello world!
    </h1>
    
   </div>
  );
}

export default App;
