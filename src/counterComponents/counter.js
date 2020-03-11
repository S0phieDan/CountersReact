import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counterVal: this.props.startVal
        };
        this.add = this.add.bind(this);
    }

    add()
    {
        let nextCount = this.state.counterVal + this.props.interval;

        if(nextCount <= this.props.maxVal){
            this.setState({counterVal: nextCount});
        }
    }

    remove()
    {
        let prevCount = this.state.counterVal - this.props.interval;

        if(prevCount >= this.props.minVal){
            this.setState({counterVal: prevCount});
        }
        
    }

    reset(){
        this.setState({counterVal: this.props.startVal});
    }



    render() {
        return (
          <React.Fragment>
            <div class="card" style={{margin: "10px"}}>
                <div class="card-body">
                    <h4 class="card-title">Counter: {this.state.counterVal}</h4>
                    <p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${this.state.counterVal}%`}} aria-valuemin={this.props.minVal} aria-valuemax={this.props.maxVal}></div>
                        </div>
                    </p>
                    <button type="button" className="btn btn-success" onClick={(e)=>this.add()}>+</button>
                    <button type="button" className="btn btn-danger" onClick={(e)=>this.remove()}>-</button>
                    <button type="button" className="btn btn-info" onClick={(e)=>this.reset()}>reset</button>
                    
                </div>
            </div>
          </React.Fragment>
        )
    }
}
