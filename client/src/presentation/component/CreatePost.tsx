import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePosts } from "../../useCases/posts.create.usecase";

const initialValues = {
  title: "",
  text: "",
};

export const CreatePost = () => {
  const [form, setForm] = useState({ ...initialValues });
  const createPostUseCase = useCreatePosts();
  const navigate = useNavigate();

  const formHandler = (e: FormEvent) => {
    e.preventDefault();

    createPostUseCase
      .createPost(
        {
          ...form,
          createTime: new Date().toISOString(),
        },
        "mxxnseat"
      )
      .then((data) => {
        console.log(data);
        navigate(data.redirectUri);
      })
      .catch((e: unknown) => {
        console.log(e);
      });
  };

  const fieldHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.getAttribute("name")!;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <div>
          <input
            type="text"
            onChange={fieldHandler}
            defaultValue={form["title"]}
            name="title"
          />
        </div>
        <div>
          <textarea
            onChange={fieldHandler}
            defaultValue={form["text"]}
            name="text"
          ></textarea>
        </div>
        <button type="submit">Create post</button>
      </form>
    </>
  );
};
