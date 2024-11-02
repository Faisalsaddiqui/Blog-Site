import axios from 'axios';

// Define the API endpoint
const apiEndpoint = 'http://localhost/my-site/wp-json/wp/v2/posts';

// Create a function to fetch posts
const client = async () => {
  try {
    const response = await axios.get(apiEndpoint, {
      headers: {
        Authorization: `Basic ${btoa("root:Admin@1234567890")}`, // Add your credentials
      },
    });
    console.log(response.data); // Handle the response data
  } catch (error) {
    console.error('Error fetching posts:', error); // Handle errors
  }
};

// Call the function
export default client;
