const isProd = process.env.NODE_ENV === 'production';

export const DOMAIN = isProd ? window.location.origin : 'http://mrg.danat.su';
export const DDATA_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
export const LOCAL_DDATA_URI = 'local/templates/gas/ajax/dadata.php';
