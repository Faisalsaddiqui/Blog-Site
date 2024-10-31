export default async function fetchPosts() {
    try {
      const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/dsgasdgfsa.wordpress.com/");
      if (!response.ok) {
        throw new Error("Error fetching posts");
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }  