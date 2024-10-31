// import React from "react";
// import { Link } from "react-router-dom";
// import PostPageContent from "../components/PostPageContent";
// import { data } from "../dummy-data/post";
// import { gql, useQuery } from "@apollo/client";

// const GET_POST_BY_SLUG = gql`
//   query getPostBySlug($id: ID!) {
//     post(id: $id, idType: SLUG) {
//       title
//       date
//       content
//       categories {
//         nodes {
//           slug
//           name
//         }
//       }
//       author {
//         node {
//           name
//         }
//       }
//     }
//   }
// `;

// export default function PostPage(props) {
//  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
// 	variables: {
// 		id: props.match.params.slug
// 	}
// });

//  const postFound = Boolean(data?.post);

//  return (
//    <div className="page-container">
//      <Link to="/">← Home</Link>
//      {loading ? (
//        <p>Loading…</p>
//      ) : error ? (
//        <p>Error: {error.message}</p>
//      ) : !postFound ? (
//        <p>Post could not be found.</p>
//      ) : (
//        <PostPageContent post={data.post} />
//      )}
//    </div>
//  );
// }




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostPageContent from "../components/PostPageContent";

export default function PostPage(props) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slug = props.match.params.slug;

  useEffect(() => {
    // Fetch post by slug using the WordPress REST API
    fetch(`http://localhost/my-site/wp-json/wp/v2/posts?slug=${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]); // The post will be the first element of the array
        } else {
          setPost(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="page-container">
      <Link to="/">← Home</Link>
      {loading ? (
        <p>Loading…</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !post ? (
        <p>Post could not be found.</p>
      ) : (
        <PostPageContent post={post} />
      )}
    </div>
  );
}
