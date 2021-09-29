import React from 'react';
import { Link } from 'react-router-dom';

const ListDirectory = (props) => {
    const toMapDirectories = (props.directories.map((info) => {
        const { id, name, email, number, designation } = info;
        const deleteButton = () => {
            props.deleteHandler({ id });
        }

        return (
            <div>

                <div key={id} >
                    <h1>{name}{id}</h1>
                    <button onClick={deleteButton}>Delete</button>
                    <Link to={{ pathname: "/edit", state: { details: info } }}><button>Edit</button></Link>
                </div>
            </div>
        )
    }))
    return (
        <div>
            <Link to="/add"><button>Add Employee</button></Link>
            {toMapDirectories}
        </div>
    )

}
export default ListDirectory;