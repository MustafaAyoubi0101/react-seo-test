import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
