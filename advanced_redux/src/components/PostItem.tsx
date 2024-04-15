import { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };

  return (
    <li className="list-group-item">
      {post.id}. {post.title}
      <button
        className="btn btn-secondary position-absolute top-0 end-50"
        onClick={handleUpdate}
      >
        Обновить пост
      </button>
      <button
        className="btn btn-secondary position-absolute top-0 end-0"
        onClick={handleRemove}
      >
        Удалить
      </button>
    </li>
  );
};
export default PostItem;
