/**
 * Created by chintan on 12/24/16.
 */
import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
