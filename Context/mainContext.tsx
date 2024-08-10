import { GoogleGenerativeAI } from "@google/generative-ai";
import { createContext, useState } from "react";
import RNFS from 'react-native-fs';
import { GetImageResponse } from "../utils/AiUtil";

export const Context = createContext()

const genAI = new GoogleGenerativeAI("AIzaSyBtCGKVCWhLbQd_xVeQM2Pxduibb-uwbiE");
const model = genAI.getGenerativeModel({
    // The Gemini 1.5 models are versatile and work with multimodal prompts
    // model: "gemini-1.5-flash",
    model: "gemini-pro-vision"
  });

const ContextProvider = (props:any) => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [mimeType, setMimeType] = useState()
    const [aiResp, setAiResp] = useState("")
    const [error, setError] = useState()
    const[image, setImage] = useState()
    
   

    async function GenerateResult() {
        const Message = "Analyze the image of the plant and identify any defects, including: - Diseases (e.g. fungal infections, bacterial spots) - Pests (e.g. aphids, whiteflies, spider mites) - Nutrient deficiencies (e.g. nitrogen, iron, magnesium) - Physical damage (e.g. torn leaves, broken stems). Provide a concise list of identified defects without additional comments. also explain that this is an Experimental Feature: Please note that this plant analysis feature is experimental and not intended to replace professional expertise. If you suspect your plant has a serious issue, consult with a qualified botanist, horticulturist, or gardening expert for accurate diagnosis and guidance."
        console.log(image)
        try{
            const response =  await GetImageResponse(image,Message);
            console.log(response)
            setAiResp(response)
        } catch (e) {
            console.log("Something went wrong")
        }
    }
      
    const contextValue = {
        selectedImage,
        setSelectedImage,
        mimeType,
        setMimeType,
        GenerateResult,
        aiResp,
        setImage
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;