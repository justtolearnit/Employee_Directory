import React from 'react';

const ListDirectory = (props) => {
    const toMapDirectories = (props.directories.map((info) => {
        const { id, name, email, number, designation } = info;
        const clicked = () => {
            props.editHandler({id});
        }
        return (
            <div key={id} >
                <h1>{name}{id}</h1>
                <button onClick={clicked}>Edit</button>
            </div>
        )
    }))
    return (
        <div>{toMapDirectories}</div>
    )

}
export default ListDirectory;