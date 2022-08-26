import React, {Component } from 'react';

class Country extends Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            items:[],
            query:'',
            setQuery:'',
            //set search parameters
            //to add more elements, add to this array
            searchParam:["capital","name"]
        };
    }

    componentDidMount(){
        fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    items:result.items    
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,error
                });
            }
        );
    }

    //here the search function
    search = (items) => {
        const {query,searchParam} = this.state;
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return(
                    item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) > -1
                );
            });
        });
    }
    render(){
        const {error,isLoaded,items,query,setQuery} = this.state;
        if(error){
            return <p>{error.message}</p>
        }else if(!isLoaded){
            return <p>Loading...</p>
        }else{
        return(
            <div>
                <div>
                    <label htmlFor='search-form'>
                        <input type="search" name="search-form" 
                        id="search-form" placeholder='Search for...' 
                        value={query} onChange={(e) => setQuery(e.target.value)}/>
                        <span>Search countries here</span>
                    </label>
                </div>
                <ul>
                    {this.search(items).map((item)=>(
                        <li>
                            <article key={item.callingCodes}>
                                <div><img src={item.flag} alt={item.name}/></div>
                                <div><h2>{item.name}</h2>
                                <ol><li>population:{""}<span>{item.population}</span></li>
                                <li>Capital:<span>{item.capital}</span></li></ol></div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }}
}

export default Country;