import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post }) {
  const title =
    post.title.length > 45 ? `${post.title.slice(0, 45)}...` : post.title;

  const description =
    post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body;

  return (
    <article className="post-card">
      <img src={post.imgSrc} alt={post.title} className="post-image" />

      <div className="post-content">
        <span className="post-id">Post #{post.id}</span>

        <h2>{title}</h2>

        <p>{description}</p>

        {post.body.length > 100 && (
          <Link to={`/item/${post.id}`} className="read-more">
            Read More...
          </Link>
        )}
      </div>
    </article>
  );
}

export default PostCard;
