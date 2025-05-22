import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import PostPage from "./pages/posts";
import FAQPage from "./pages/faq";
import BlogPostPage from "./pages/post";
import PrivacyPolicy from "./pages/privacy";
import Contact from './pages/contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/posts/:id" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
