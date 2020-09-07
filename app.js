const argv = require('./config/yargs').argv;
const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let latLng = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(latLng.lat, latLng.lng);

        return `El clima de ${latLng.direccion} es de ${colors.green(temperatura)}${colors.green('°c')}`;

    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`);
    }
};

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));