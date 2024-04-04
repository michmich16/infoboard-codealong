import { myFetch } from "../Utils/apiUtils.js"

export const Menu = async () => {
    console.log("kald af menu funktion");
    const endpoint = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json";
    const data = await myFetch(endpoint)

    const container = document.getElementById("menu")
    container.innerHTML = ""

    const curday = (new Date().getDay()-1)

    const ul = document.createElement("ul")

    data && data.Days && data.Days.map((value, key) => {
        const li = document.createElement("li")
        li.innerHTML = `<span>${value.DayName}:</span>
                        <span>${value.Dish}:</span>`
        ul.appendChild(li)
    })

    container.appendChild(ul)

    setInterval(() => {
        Menu()
    }, 3600000)


}