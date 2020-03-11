import React, { Component } from 'react'
import Counter from './counter'

export default class Counters extends Component {
    render() {
        return (
        <React.Fragment>

            <h1>List of Counters</h1>
            {
                    this.props.data.map((counter) => 
                        {
                            return(<Counter startVal={counter.startVal} interval={counter.interval} maxVal={counter.maxVal} minVal={counter.minVal}></Counter>);

                        })
            } 
        </React.Fragment>
        );
    }
}
