import axios from 'axios';

export const fetchSocialMedia = async () => {
    try {
        const response = await axios.get("http://localhost:3000/social_media");
        const sortedIcons = response.data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return sortedIcons;
    } catch (error) {
        console.error("Error fetching Social Media:", error);
        throw error;
    }
};
