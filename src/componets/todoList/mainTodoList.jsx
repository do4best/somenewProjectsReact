import React, {useEffect, useState} from 'react';
import ListDetails from "./listDetails.jsx";



function MainTodoList() {
    const [text, setText] = useState("");
    // Initialize from localStorage (lazy initializer so it only runs once)
    const [todolist, settodoList] = useState(() => {
        try {
            const saved = localStorage.getItem('todolist');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('Failed to parse todolist from localStorage', e);
            return [];
        }
    });

    // Persist to localStorage whenever the todolist changes
    useEffect(() => {
        try {
            localStorage.setItem('todolist', JSON.stringify(todolist));
        } catch (e) {
            console.error('Failed to save todolist to localStorage', e);
        }
    }, [todolist]);
    const addItems=()=>{
        // Prevent adding empty or whitespace-only tasks
        if (!text.trim()) {
            alert("Please enter a task before adding.");
            return;
        }
        const newTodoItems={
            // Use timestamp-based id to minimize collision risk
            id: Date.now() + Math.floor(Math.random()*1000),
            item:text,
            done:false
        };
         settodoList([...todolist,newTodoItems])
        setText("")
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
 const handelDeleteAll=(items)=>{
        const newTodoList = todolist.filter((listitem)=>(listitem.id !== items))
     settodoList(newTodoList)
 }
 console.log(todolist);
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center ">
            <h1 className={"mt-5"}>Welcome to Do List</h1>
                {  <div className="input-group mb-3 w-25 mt-4">
                <input type="text" className="form-control" value={text} placeholder="Enter Your Task"
                       aria-label="Recipient’s username" aria-describedby="basic-addon2" onChange={(e)=>setText(e.target.value)}/>
                <span className="input-group-text" id="basic-addon2"><button onClick={addItems} className={"btn btn-primary"}><i className="bi bi-search"></i></button></span>
            </div>}
                {todolist.length > 0 && <ListDetails todolist1={todolist} handelToggle={handelDelete} hadelDelete={handelDeleteAll}/>}
            </div>
        </>
    );
}

export default MainTodoList;