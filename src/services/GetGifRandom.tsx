import axios from "axios";
import { gif } from "../models/GifModel";

export default async function GetGifRandom(limit = 20) {

    const url = `${process.env.REACT_APP_URL_GIPHY_RANDOM}?api_key=${process.env.REACT_APP_API_KEY_GIPHY}&limit=${limit}&rating=g`;

    try {
        const data: gif[] = await (await axios.get(url)).data.data;
        return data;
    } catch (error) {
        return []
    }

}