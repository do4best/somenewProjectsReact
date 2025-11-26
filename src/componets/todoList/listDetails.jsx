import React from 'react';

function ListDetails({todolist1,handelToggle,hadelDelete}) {
    return (
        <>
            <ul className="list-group w-50 d-flex flex-column">
                {todolist1.map((items)=>(
                    <li key={items.id} className={`list-group-item d-flex justify-content-between align-items-start ${items.done ? 'bg-danger':""} `}>{items.item} <span
                        className="input-group-text" id="basic-addon2">{items.done ?
                        <i className="bi bi-check-circle-fill" onClick={() => handelToggle(items.id)}></i> :
                        <i className="bi bi-bag-x" onClick={() => handelToggle(items.id)} ></i>} <i
                        className="ms-3 bi bi-trash3" onClick={() => hadelDelete(items.id)}></i></span></li>
                ))}



            </ul>

        </>
    );
}

export default ListDetails;