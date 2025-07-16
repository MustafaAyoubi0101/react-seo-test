import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/home";
import { lazy, Suspense } from "react";
const Contact = lazy(() => import('./pages/contact'))
const AboutPage = lazy(() => import('./pages/about'))
const PostPage = lazy(() => import('./pages/posts'))
const FAQPage = lazy(() => import('./pages/faq'))
const BlogPostPage = lazy(() => import('./pages/post'))
const PrivacyPolicy = lazy(() => import('./pages/privacy'))

function App() {

  useEffect(() => {
    const CreatedMetaDesctipt = document.createElement("meta");
    CreatedMetaDesctipt.setAttribute("name", "description");
    CreatedMetaDesctipt.setAttribute("content", "Come and read my articles!");
    document.head.appendChild(CreatedMetaDesctipt);
  }, [])

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/privacy" element={
              <Suspense fallback={'loading...'}>
                <PrivacyPolicy />
              </Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={'loading...'}>
                <AboutPage />
              </Suspense>
            } />
            <Route path="/posts" element={
              <Suspense fallback={'loading...'}>
                <PostPage />
              </Suspense>
            } />
            <Route path="/posts/:id" element={
              <Suspense fallback={'loading...'}>
                <BlogPostPage />
              </Suspense>
            } />
            <Route path="/faq" element={
              <Suspense fallback={'loading...'}>
                <FAQPage />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={'loading...'}>
                <Contact />
              </Suspense>
            } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
