import React, { Component } from "react";
import { Link } from 'react-router-dom';
import api from '../api/directory';
class EditDirectory extends Component {

    constructor(props) {
        super(props)
        const { id, name, email, number, designation } = props.location.state.details;
        this.state = {
            id: id,
            name: name,
            email: email,
            number: number,
            designation: designation
        }
    }


    edit = (e) => {
        console.log(this.props)
        e.preventDefault();
        const response = api.put(`/directory/${this.state.id}`, this.state);
        this.props.toGetDirectories(this.state);
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.edit}>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    <input type="text" placeholder="Mobile" value={this.state.mobile} onChange={e => this.setState({ mobile: e.target.value })} />
                    <input type="text" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                    <input type="text" placeholder="Designation" value={this.state.designation} onChange={e => this.setState({ designation: e.target.value })} />
                    <button>Edit Employee</button>
                </form>
                <Link to="/"><button >Employee List</button></Link>
            </div>
        );

    }

}
export default EditDirectory;