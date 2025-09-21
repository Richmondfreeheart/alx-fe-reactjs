import axios from "axios";

// Fetch GitHub user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Returns user object
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
