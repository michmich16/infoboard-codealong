import { myFetch } from "../Utils/apiUtils.js"

export const Menu = async () => {
    console.log("kald af menu funktion");
    const endpoint = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json";
    const data = myFetch(endpoint)
    console.log(data);
}