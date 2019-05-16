import React from 'react';



class AddToCalender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCalender: {
                id: 0,
                courseName: '',
                duration: '',
                startDate: ''

            }
        }
    }

    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        this.setState(prevState => ({
            
            newCalender: {
                ...prevState.newCalender, [name]: value
            }
        }  
        ));
        }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.url, {
            method: 'POST',
            body:JSON.stringify(this.state.newCalender)
        })
    }

    render() {
        return (
            <form className="form">
                <div><label htmlFor="">ID</label><input type="text"/></div>
                <div><label htmlFor="">CourseName</label><input type="text"/></div>
                <div><label htmlFor="">Duration</label><input type="text"/></div>
                <div><label htmlFor="">Start Date</label><input type="text"/></div>
                <div><input type="submit" value="Add"/></div>

            </form>
        );
    }
}

export default AddToCalender;