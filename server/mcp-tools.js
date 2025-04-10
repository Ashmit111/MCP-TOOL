import { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";
config();

const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

// ...existing code...

async function createPost(status) {
    try {
        const newPost = await twitterClient.v2.tweet(status);
        console.log("Tweet response:", newPost);
        
        return {
            content: [
                {
                    type: "text",
                    text: `Tweeted: ${status}`
                }
            ]
        };
    } catch (error) {
        console.error("Error posting tweet:", error);
        return {
            content: [
                {
                    type: "text",
                    text: `Failed to tweet: ${error.message}`
                }
            ]
        };
    }
}
// ...existing code...

// ...existing code...

async function deletePost(tweetId) {
    try {
        const response = await twitterClient.v2.deleteTweet(tweetId);
        console.log("Delete tweet response:", response);
        
        return {
            content: [
                {
                    type: "text",
                    text: `Deleted tweet with id ${tweetId}`
                }
            ]
        };
    } catch (error) {
        console.error("Error deleting tweet:", error);
        return {
            content: [
                {
                    type: "text",
                    text: `Failed to delete tweet: ${error.message}`
                }
            ]
        };
    }
}

export { createPost, deletePost };