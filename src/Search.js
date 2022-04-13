import React, {useState} from "react";

function Search({details}){
    const [searchField,setSearchField] = useState(""); 
    const filteredBuses = details.filter(
        bus => {
            return (
                bus.number.includes(searchField)
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    }
    return console.log("empty");
}