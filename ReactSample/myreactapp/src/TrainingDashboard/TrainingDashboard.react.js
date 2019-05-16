import React, { Fragment } from 'react';
import DataTable from '../DataTable/DataTable.react'
import AddToCalender from '../AddToCalender/AddToCalender.react';
import NavBar from '../NavBar/NavBar.react';


class TrainingDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trngList : []
        }
    }

    url = "http://localhost:4000/calender";
    componentDidMount() {
        fetch(this.url)
            .then(response => response.json())
            .then(data => this.setState({ trngList: data }));
    }

    render() {
        return (
            <Fragment>
                <NavBar></NavBar>
                <AddToCalender></AddToCalender>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Start Date</th>
                    </thead>
                    <tbody>
                        <DataTable tableData={this.state.trngList}></DataTable>
                    </tbody>
                </table>
               </Fragment> 
           
        );
    }
}

export default TrainingDashboard;