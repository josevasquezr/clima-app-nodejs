const axios = require('axios');

const getClima = async(lat, lng) => {
    try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=da76e5569b69e44d6fb03cbbb2ec0540&units=metric`);
        return resp.data.main.temp;
    } catch (error) {
        throw new Error('Error en la petición del clima', error);
    }

}

module.exports = {
    getClima
};