import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

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
      </Routes>
    </Container>
  );
}
