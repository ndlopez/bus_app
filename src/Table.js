import React from 'react';

const Table = (props) => {
    const {charData, } = props
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
            <th>Depart Time</th><th>Bus Number</th>
            <th>Heading</th><th>Bus Stop</th>
        </tr></thead>
    )
}

const TableBody = (props) => {
    const rows = props.charData.map((d,idx) => {
        return(
            <tr key={idx}>
                <td>{d.departTime}</td>
                <td>{d.busNumber}</td>
                <td>{d.heading}</td>
                <td>{d.busStop}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export default Table;