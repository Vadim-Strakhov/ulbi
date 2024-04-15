import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  // console.log(posts);
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
      {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
    </ul>
  );
};
export default PostContainer2;
