/**
 * Created by chintan on 12/30/16.
 */
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
    const sum = data.reduce((a,b) => {
        return a + b;
    }, 0);

    return Math.round(sum / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} width={180} height={60}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>
        </div>
    );
}