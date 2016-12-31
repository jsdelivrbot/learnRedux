/**
 * Created by chintan on 12/30/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderRows(){
        return this.props.weather.map(weather => {

            const temps = weather.list.map(data => data.main.temp);
            const pressure = weather.list.map(data => data.main.pressure);
            const humidity = weather.list.map(data => data.main.humidity);

            return (
                <tr key={weather.city.id}>
                    <td>
                        {weather.city.name}
                    </td>
                    <td>
                        <Chart data={temps} color="red" unit="K"/>
                    </td>
                    <td>
                        <Chart data={pressure} color="orange" unit="hPa"/>
                    </td>
                    <td>
                        <Chart data={humidity} color="blue" unit="%"/>
                    </td>
                </tr>
            );
        });
    }

    render(){

        return (
            <table className="table table-hover city-list">
                <thead>
                <tr>
                    <th>
                        City
                    </th>
                    <th>
                        Temperature (K)
                    </th>
                    <th>
                        Pressure (hPA)
                    </th>
                    <th>
                        Humidity (%)
                    </th>
                </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {
        weather       // Es6 => {weather} == {weather: weather}
    };
}

export default connect(mapStateToProps)(WeatherList);