// // import React, { useState, useEffect } from "react";

// // const WordPressPosts = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch posts from WordPress REST API
// //   useEffect(() => {
// //     fetch("https://public-api.wordpress.com/wp/v2")
// //       .then((response) => {
// //         setLoading(false);
// //         console.log(response);
// //         if (!response.ok) {
// //           throw new Error("Error fetching posts");
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         setPosts(data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         setError(error.message);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //  else if (error) {
// //     return <p>Error: {error}</p>;
// //   }

// //   return (
// //     <div>
// //       <h1>WordPress Posts</h1>
// //       <ul>
// //         {posts.map((post) => (
// //           <li key={post.id}>
// //             <h2>{post.title.rendered}</h2>
// //             <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default WordPressPosts;




// export const fetchPosts = async () => {
//     try {
//       const response = await fetch('https://api.example.com/posts');
//       const data = await response.json();
  
//       if (Array.isArray(data)) {
//         return data;
//       } else {
//         return [];
//       }
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       return [];
//     }
//   };  





// export const fetchPosts = async () => {
//     try {
//       const response = await fetch('https://public-api.wordpress.com/wp/v2');
//       const data = await response.json();
  
//       if (Array.isArray(data)) {
//         return data;
//       } else {
//         return [];
//       }
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       return [];
//     }
//   };  