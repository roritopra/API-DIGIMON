export const getDigimon =async () => {
    const response= await fetch("https://digimon-api.vercel.app/api/digimon")
    const data= await response.json();
    console.log(data)
    return ["2", "asmdigf"];
}