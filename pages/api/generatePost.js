import {Configuration, OpenAIApi} from "openai";

export default async function handler(req, res){
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });

    const openai = new OpenAIApi(config);

    const {topic, keywords} = req.body;

    // const topic = "Top recipes about fasting";
    // const keywords = "Ketogenic diet, common meals to prep, best fasting advices";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following
        comma-separated keywords: ${keywords}. The content should be formatted in SEO-friendly HTML.
        The response must also include appropriate HTML title and meta description content.
        The return format must be stringigied JSON in the following format:
        {
            "postContent": post content here
            "title": title goes here
            "metaDescription": meta description goes here
        }`,
        max_tokens: 3600,
        temperature: 0,
        }
    );
    console.log("response:", response)
    res.status(200).json({post: response.data.choices[0]?.text.split('\n').join('')});
}