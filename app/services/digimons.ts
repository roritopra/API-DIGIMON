import { digiData } from "../types/data.js";

export const getDigimon =async ():Promise<Array<digiData>> => {
    const response= await fetch("https://digimon-api.vercel.app/api/digimon",)
    const data = await response.json();
    console.log(data);
    return data;
}