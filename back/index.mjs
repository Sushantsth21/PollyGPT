import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/translate", async (req, res) => {
  const { text, option } = req.body;

  const messages = [
    {
      role: "system",
      content: `You are a translator. Translate the given data into ${option}`,
    },
    {
      role: "user",
      content: text,
    },
  ];
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const translatedText = response.choices[0].message.content;
    res.status(200).json({ translatedText });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ error: "Failed to translate text" });
  }
});

app.post("/chat", async (req, res) => {
  const { text } = req.body;

  const messages = [
    {
      role: "system",
      content:
        "Ask the user what language they want to chat in. After that, chat with the user in that language but notify them if there are grammatical errors.",
    },
    {
      role: "user",
      content: text,
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Log the entire response for debugging purposes
    console.log("OpenAI Response:", response);

    // Extract the bot response
    if (response && response.choices && response.choices.length > 0) {
      const botResponse = response.choices[0].message.content;
      res.json({ response: botResponse });
    } else {
      throw new Error("Unexpected response structure from OpenAI");
    }
  } catch (error) {
    console.error("Error communicating with OpenAI:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
