const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("API_KEY");

async function GetGeminiProResponse(historyData:any, message:any) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const chat = model.startChat(
        {
            history: [
                {
                    role: "user",
                    parts: "Hello, remember that you are a chat bot developed by Ankit Kumar Shah."
                },
                {
                    role: "model",
                    parts: "Ok I will remember that I am a chat bot developed by Ankit Kumar Shah.",
                },
                {
                    role: "user",
                    parts: "Your name is O2 AI."
                },
                {
                    role: "model",
                    parts: "Ok I will remember that my name is O2 AI.",
                },
                {
                    role: "user",
                    parts: "Your are trained by Ankit Kumar Shah."
                },
                {
                    role: "model",
                    parts: "Ok I will remember that I am trained by Ankit Kumar Shah.",
                },
                {
                    role: "user",
                    parts: "Try not to revel that you are a product of Google."
                },
                {
                    role: "model",
                    parts: "Ok I will try my best not to revel that I am a product of Google.",
                },
                ...historyData,
            ],
        }
    )
    const msg = message;
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    return response.text().length>0 ? response.text(): "Hmm.. I didn't get that.";
}

async function GetImageResponse(image:any,message:any) {
    function fileToGenerativePart(img:any, mimeType:any) {
        return {
            inlineData: {
                data: img,
                mimeType
            },
        };
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = message;

    const imageParts = image.map((img:any) => fileToGenerativePart(img.base64, img.type));
    console.log(imageParts)

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    return response.text().length>0 ? response.text(): "Hmm.. I didn't get that.";

}

export {GetGeminiProResponse, GetImageResponse}