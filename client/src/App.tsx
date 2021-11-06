import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PostsPage } from "./pages/Posts";
import { CreatePostPage } from "./pages/CreatePost";

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/posts">
          <Route path="" element={<PostsPage />} />
          <Route path="create" element={<CreatePostPage />} />
        </Route>
        <Route path="*" element={<>Page not found</>} />
      </Routes>

      <ToastContainer />
    </Container>
  );
}
