import { useState, useEffect } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(
    limit
    // { pollingInterval: 1000 } //_ для обновления данных через опр. время
  );

  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000);
  }, []);
  // console.log(posts);

  const handleCreate = async () => {
    const title = prompt();
    createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };
  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };
  return (
    <ul className="list-group m-5 w-50 position-relative">
      {isLoading && (
        <div
          className="spinner-border text-secondary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        ></div>
      )}
      {error && <h1>Произошла ошибка</h1>}
      {posts &&
        posts.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            remove={handleRemove}
            update={handleUpdate}
          />
        ))}

      <div className="d-flex justify-content-between">
        <button className="btn btn-primary w-25 mt-3" onClick={() => refetch()}>
          Обновить список
        </button>
        <button className="btn btn-primary w-25 mt-3" onClick={handleCreate}>
          Добавить
        </button>
      </div>
    </ul>
  );
};
export default PostContainer;
