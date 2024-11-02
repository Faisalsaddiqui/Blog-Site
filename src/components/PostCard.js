// import React from "react";
// import { Link } from "react-router-dom";

// const formatDate = (date) => new Date(date).toLocaleDateString();

// export default function PostCard({ post }) {


//   return (
//     <div className="post-card">
//       {/* {featuredImage ? (
//         <img
//           src={featuredImage.node.sourceUrl}
//           alt={featuredImage.node.altText}
//         />
//       ) : null} */}
//       <Link to={`/blog/${post.slug}`}>
//         <h3>{post.title.rendered}</h3>
//       </Link>
//       <div className="metadata">
//         <p>
//           <span className="text-bold">Date:</span> {formatDate(post.date)}
//         </p>
//         <p>
//           <span className="text-bold">Author:</span> {post.author}
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link to={`/blog/${post.slug}`}>
        <h3>{typeof post.title === 'object' ? post.title.rendered : post.title}</h3>
      </Link>
      <div className="metadata">
        <p>
          <span className="text-bold">Date:</span> {formatDate(post.date)}
        </p>
        <p>
          <span className="text-bold">Author:</span> {post.author}
        </p>
      </div>
    </div>
  );
}
