import React, {Component} from "react";

class Form extends Component{
    initialState={
        departTime:'',
        departStation:'',
        arriveStation:'',
    }
    state = this.initialState

    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {departTime,departStation,arriveStation} = this.state;
        return(
            <form>
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">Departure Time</label>
                    <input type="text" className="form-control" name="departTime" id="departTime" 
                    value={departTime} onChange={this.handleChange} placeholder="Time"/></div>
                <div className="mb-3">
                    <label htmlFor="depart" className="form-label">Departure</label>
                    <input type="text" className="form-control" name="departStation" id="departStation"
                    value={departStation} onChange={this.handleChange} placeholder="Bus Stop Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="depart" className="form-label">Arrival</label>
                    <input type="text" className="form-control" name="arriveStation" id="arriveStation"
                    value={arriveStation} onChange={this.handleChange} placeholder="Bus Stop Name"/>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        )
    }
}

export default Form;