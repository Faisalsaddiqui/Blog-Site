import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Ensure you have axios installed

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostPageContent({ post }) {
  const [author, setAuthor] = useState(null);
  const { date, title, content, categories } = post;
  const haveCategories = Boolean(categories?.length);

  // Fetch author details using the author ID
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(`http://localhost/my-site/wp-json/wp/v2/users/${post.author}`);
        console.log({response})
        setAuthor(response.data);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, [post.author]);

  return (
    <article>
      <h1>{title.rendered}</h1>
      <p className="post-meta">
        <span role="img" aria-label="writing hand">
          ✍️
        </span>{" "}
        {author ? author.display_name : "Loading..."} on {formatDate(date)}
      </p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
      {haveCategories ? (
        <div className="categories-list">
          <h2>Categorized As</h2>
          <ul>
            {categories.map((category) => {
              console.log({category})
              const { slug, name } = category; // Make sure you handle categories correctly
              return (
                <Link to={`/category/${slug}`} key={slug}>
                  <li>{name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
