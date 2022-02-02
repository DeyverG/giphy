import axios from "axios";
import { gif } from "../models/GifModel";


export default async function GetGif(query: string, limit = 20) {

    const url = `${process.env.REACT_APP_URL_GIPHY}?api_key=${process.env.REACT_APP_API_KEY_GIPHY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`;

    try {
        const data: gif[] = await (await axios.get(url)).data.data;
        return data;
    } catch (error) {
        return []
    }

}