import React, {Component} from 'react';
//import './App.css';//Bootstrap is used instead.
import Table from './Table';
import Form from './Form';

class App extends Component{
  state = {
    buses:[],
    /*[
      {busNumber:"金山12",departTime:"14:10",departStation:"妙見町",
      arriveStation:"竜子二丁目",heading:"金山",busStop:"4"},
      {busNumber:"金山12",departTime:"14:40",departStation:"妙見町",
      arriveStation:"竜子二丁目",heading:"金山",busStop:"4"},
    ]*/
  }
  componentDidMount(){
    const thisBus="\u71b1\u7530\u5de1\u56de";
    const url = 'https://www.kotsu.city.nagoya.jp/STATION_DATA/station_infos/diagrams/11075.json?_5438387'
    fetch(url)
    .then((result) => result.json())
    .then((result) => {
      this.setState({buses:result[thisBus],})
    })
    .catch((error) => {
      //this.setState({buses:error});
      console.error(`Error: Cannot find ${thisBus}`,error);})
  }
  handleSubmit = (member) => {
    this.setState({buses:[...this.state.buses,member]})
    //... is JS spread operator
  }
  render(){
    const {buses} = this.state
    return(
      <div className='container'>
        <Form handleSubmit = {this.handleSubmit} />
        <Table charData = {buses} />
      </div>
    )
  }
}

export default App;
