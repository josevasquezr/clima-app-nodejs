const axios = require('axios');

const getLugarLatLng = async dir => {
    let dirParam = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ dirParam }&appid=da76e5569b69e44d6fb03cbbb2ec0540`,
        timeout: 1000,
        headers: {}
    });

    try {
        const respuesta = await instance.get();

        const data = respuesta.data;
        const direccion = `${data.name}, ${data.sys.country}`;
        const lat = data.coord.lat;
        const lng = data.coord.lon;

        return {
            direccion,
            lat,
            lng
        };

    } catch (error) {
        throw new Error(`Error al obtener data de la dirección ${dir}`, error);
    }
}

module.exports = {
    getLugarLatLng
};