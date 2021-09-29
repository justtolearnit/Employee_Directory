import React, { Component } from "react";

class UploadDirectory extends Component {

    state = {
        name: "",
        email: "",
        mobile: "",
        designation: ""
    };

    add = (e) => {
        e.preventDefault();
        this.props.addEmployeeData(this.state)
    }

    render() {
        return (
            <form onSubmit={this.add}>
                <input type="text" placeholder="Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <input type="text" placeholder="Mobile" value={this.state.mobile} onChange={e => this.setState({ mobile: e.target.value })} />
                <input type="text" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                <input type="text" placeholder="Designation" value={this.state.designation} onChange={e => this.setState({ designation: e.target.value })} />
                <button>Add Employee</button>
            </form>
        );

    }

}
export default UploadDirectory;