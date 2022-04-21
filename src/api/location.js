// const API_KEY = "efd037a22f14d6888e3f07f23e4cdba2";

// const location = async (location) => {
//     const response = await fetch(
//         `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${API_KEY}`,
//         { mode: "cors" }
//     );
//     var data = await response.json();

//     if (data.cod == "404") {
//         return;
//     } else {
//         return {
//             name: data.name,
//             lat: data.coord.lat,
//             lon: data.coord.lon,
//         };
//     }
// };

// export default location;

import axios from "axios";

const API_KEY = "efd037a22f14d6888e3f07f23e4cdba2";

export default axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        appid: API_KEY,
    },
});
