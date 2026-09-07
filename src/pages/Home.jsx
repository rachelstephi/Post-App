import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postActions";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();

  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  return (
    <main className="home">
      <section className="home-container">
        <div className="home-heading">
          <p className="eyebrow">LATEST POSTS</p>
          <h1>Explore Posts</h1>
          <p className="subtitle">
            Discover interesting posts and read more about them.
          </p>
        </div>

        {loading && <Loader />}

        {error && (
          <div className="error-message">
            <h2>Something went wrong</h2>
            <p>{error}</p>
            <button onClick={() => dispatch(fetchPosts())}>Try Again</button>
          </div>
        )}

        {!loading && !error && (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
