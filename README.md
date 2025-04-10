# MCP Twitter Tool Example 🐦⚙️

This project demonstrates how to build an **MCP (Model Context Protocol)**-based server and client that interacts with tools like **Tweet posting and deletion**, using **Gemini** as the AI model and **Twitter API v2** for social media interactions.

---

## 🧠 Features

- 🐤 `createPost`: Tweet a message using Twitter API
- ❌ `deletePost`: Delete a tweet using its ID
- 🔁 Server-Client communication via Server-Sent Events (SSE)
- 🤖 Use Gemini AI to interact with tools and maintain conversation context

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mcp-twitter-bot
cd mcp-twitter-bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root directory and add your Twitter and Gemini API credentials:

```env
TWITTER_API_KEY=your-twitter-api-key
TWITTER_API_SECRET=your-twitter-api-secret
TWITTER_ACCESS_TOKEN=your-twitter-access-token
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
GEMINI_API_KEY=your-gemini-api-key
```

---

## 🧩 Run the Server

```bash
node server.js
```

This will start the MCP server on `http://localhost:3001`.

---

## 💬 Run the Client

```bash
node client.js
```

This starts a CLI chat interface where you can interact with Gemini AI and call the registered tools (e.g. tweet, delete, etc.)

---

## ⚙️ Available Tools

### 🐦 createPost

Posts a tweet:

```json
{
  "status": "Hello World from MCP!"
}
```

Returns:

```
Tweeted: Hello World from MCP!
Tweet ID: 1234567890123456789
```

---

### ❌ deletePost

Deletes a tweet:

```json
{
  "tweetId": "1234567890123456789"
}
```

Returns:

```
Deleted tweet with id 1234567890123456789
```

---

## 🏗️ Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Twitter API v2](https://developer.twitter.com/en/docs/twitter-api)
- [Google Gemini API](https://ai.google.dev/)
- [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk)

---

## 📄 License

MIT License
