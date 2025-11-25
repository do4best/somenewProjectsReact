import React from 'react';

function ListDetails({todolist1,handelToggle}) {
    return (
        <>
            <ul className="list-group w-50 d-flex flex-column">
                {todolist1.map((items)=>(
                    <li key={items.id} className="list-group-item d-flex justify-content-between align-items-start ">{items.item} <span
                        className="input-group-text" id="basic-addon2"><i className="bi bi-search" onClick={()=>handelToggle(items.id)}></i> <i
                        className="ms-3 bi bi-trash3"></i></span></li>
                ))}



            </ul>

        </>
    );
}

export default ListDetails;