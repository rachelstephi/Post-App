import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import "./PostDetail.css";

function PostDetail() {
  const { id } = useParams();

  const { posts, loading, error } = useSelector((state) => state.posts);

  const post = posts.find((item) => item.id === Number(id));

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="detail-error">
        <h2>Unable to load post</h2>
        <p>{error}</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="detail-error">
        <h2>Post not found</h2>
        <p>The post you are looking for does not exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <main className="detail-page">
      <section className="detail-container">
        <Link to="/" className="back-link">
          ← Back to Posts
        </Link>

        <article className="detail-card">
          <img src={post.imgSrc} alt={post.title} className="detail-image" />

          <div className="detail-content">
            <div className="detail-meta">
              <span>Post #{post.id}</span>
              <span>User ID: {post.userId}</span>
            </div>

            <h1>{post.title}</h1>

            <p>{post.body}</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default PostDetail;
