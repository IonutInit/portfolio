import { Configuration, OpenAIApi } from "openai";
import { MongoClient } from "mongodb";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);
const model = "davinci:ft-personal-2023-02-13-13-35-11"

const mongoURI = process.env.MONGO_URI;
const mongoClient = new MongoClient(mongoURI);
const dbName = "ChatBot_Archive";
const mongoCollection = "Chats";

const chatCollection = mongoClient.db(dbName).collection(mongoCollection);

export async function generateText(req, res) {
  const { chatId, prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model,
      prompt: `${prompt} ->`,
      max_tokens: 100,
      temperature: 0.4,
      // "top_p": 1,
      // "n": 1,
      // "stream": false,
      // "logprobs": null,
      stop: ["."],
    });

    const completion = response.data.choices[0].text;
    res.status(200).json(response.data.choices[0].text);

    await mongoClient.connect();
    await mongoClient.db().admin().listDatabases();
    let result = await chatCollection.insertOne({
      chatId,
      model,
      prompt,
      completion: completion.substring(1),
      date: new Date(),
    });
    await mongoClient.close();
  } catch (error) {
    if (error.response) {
      res
        .status(error.response.status)
        .json({ error: error.response.data.error.message });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
}
