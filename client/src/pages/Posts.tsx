import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/redux/store";
import { Post } from "../presentation/component/Post";

export const PostsPage: FC<{}> = () => {
  const posts = useSelector((state: RootState) => state.posts.list);

  return (
    <>
      {posts.map((post) => {
        return <Post {...post} />;
      })}
    </>
  );
};
