import React from 'react';

//const thisBus="\u71b1\u7530\u5de1\u56de";
//del *.log from C:\Users\GA-HON071\AppData\Local\npm-cache\_logs

const Table = (props) => {
    const {charData, } = props;
    return(
        <table className='table table-striped'>
            <TableHeader />
            <TableBody charData = {charData}/>
        </table>
    )
}

const TableHeader = () => {
    return(
        <thead><tr>
            <th>Depart Time</th><th>Stations</th>
            <th>Heading</th><th>Bus Stop</th>
        </tr></thead>
    )
}

const TableBody = (props) => {
    const rows = props.charData.map((d,idx) => {
        return(
            <tr key={idx}>
                <td>{d.DIAGRAM["\u5e73\u65e5"]["14"]}</td>
                <td>{d.STATIONS}</td>
                <td>{d.RAILWAY}</td>
                <td>{d.POLENAME}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export default Table;