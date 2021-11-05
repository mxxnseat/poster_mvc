import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import { PostsPage } from "./pages/Posts";

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </Container>
  );
}
