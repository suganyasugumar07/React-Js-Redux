import React from 'react';



const DataTable = (props) => {

    return (
        
                props.tableData.map((response, index) => {
                    return <tr key={response.id}>
                        <td>{response.id}</td>
                        <td>{response.courseName}</td>
                        <td>{response.duration}</td>
                        <td>{response.startDate}</td>
                    </tr>
                })
        
    );

}

export default DataTable;