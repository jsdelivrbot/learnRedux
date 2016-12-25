/**
 * Created by chintan on 12/24/16.
 */
import axios from 'axios';
import Config from '../../../config';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Config.WEATHER_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`;
    const req = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: req
    }
}