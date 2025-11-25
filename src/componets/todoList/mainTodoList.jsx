import React, {useState} from 'react';
import ListDetails from "./listDetails.jsx";



function MainTodoList() {
    const [text, setText] = useState("");
    const [todolist, settodoList] = useState([]);
    const addItems=()=>{
        const newTodoItems={
            id:Math.floor(Math.random()*1000),
            item:text,
            done:false
        };
         settodoList([...todolist,newTodoItems])
    }
 const handelDelete=(id)=>{
        const newTodoList = todolist.map((listitem)=>{
            if (listitem.id ===id){
                return {...listitem,done:!listitem.done}
            }
            return listitem
        })
     settodoList(newTodoList)
 }
 console.log(todolist);
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center ">
            <h1 className={"mt-5"}>Welcome to Do List</h1>
            <div className="input-group mb-3 w-25 mt-4">
                <input type="text" className="form-control" value={text} placeholder="Enter Your Task"
                       aria-label="Recipient’s username" aria-describedby="basic-addon2" onChange={(e)=>setText(e.target.value)}/>
                <span className="input-group-text" id="basic-addon2"><button onClick={addItems} className={"btn btn-primary"}><i className="bi bi-search"></i></button></span>
            </div>
                <ListDetails todolist1={todolist} handelToggle={handelDelete}/>
            </div>
        </>
    );
}

export default MainTodoList;