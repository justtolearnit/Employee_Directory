import React, {useRef} from 'react';
import { Link } from 'react-router-dom';

const ListDirectory = (props) => {

    const inputRef = useRef("")

    const toMapDirectories = (props.directories.map((info) => {
        const { id, name, email, mobile, designation } = info;
        const deleteButton = () => {
            props.deleteHandler({ id });
        }

    

        return (
            <div>

                <div key={id} >
                    <h1>{name}</h1>
                    <h3>{designation}</h3>
                    <p>{mobile}</p>
                    <p>{email}</p>
                    <button onClick={deleteButton}>Delete</button>
                    <Link to={{ pathname: "/edit", state: { details: info } }}><button>Edit</button></Link>
                </div>
            </div>
        )
    }))
    const searchHandler = () => {
        props.searchHandler(inputRef.current.value)
    }
    return (
        <div>
            <Link to="/add"><button>Add Employee</button></Link><br></br>
            <input ref={inputRef} type="text" value={props.term} onChange={searchHandler} placeholder="Search contacts..."/>
            {toMapDirectories.length < 1 ? "No Contacts available" : toMapDirectories}
        </div>
    )

}
export default ListDirectory;