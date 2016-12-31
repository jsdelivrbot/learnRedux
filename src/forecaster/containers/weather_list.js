/**
 * Created by chintan on 12/30/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

    renderRows(){
        return this.props.weather.map(weather => {
            return (
                <tr key={weather.city.id}>
                    <td>
                        {weather.city.name}
                    </td>
                    <td>
                        {weather.list[0].main.temp}
                    </td>
                    <td>
                        {weather.list[0].main.pressure}
                    </td>
                    <td>
                        {weather.list[0].main.humidity}
                    </td>
                </tr>
            );
        });
    }

    render(){

        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>
                        City
                    </th>
                    <th>
                        Temperature
                    </th>
                    <th>
                        Pressure
                    </th>
                    <th>
                        Humidity
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