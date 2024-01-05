// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const apiKey = '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'; // Replace with your OpenAI API key
const apiUrl = 'https://api.openai.com/v1/completions';

app.get("/api/github-activity/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const userData = userResponse.data;

    let page = 1;
    let allRepos = [];

    while (true) {
      const repoResponse = await axios.get(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=100`
      );
      const repoData = repoResponse.data;

      if (repoData.length === 0) {
        // No more repositories, break out of the loop
        break;
      }

      allRepos = allRepos.concat(repoData);
      page++;
    }
    const resp = {
      userDetails: userData,
      repoDetails: allRepos,
    };
    // Process the data as needed
    res.json(resp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/trendingRepo/:language", async (req, res) => {
  try {
    const { language } = req.params;

    const repoResponse = await axios.get(
      `https://api.github.com/search/repositories?sort=stars&order=desc&q=${language}`
    );
    const repoData = repoResponse.data;

    if (repoData.length === 0) {
      return;
    }

    res.json(repoData.items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
