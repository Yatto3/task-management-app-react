import { useState } from "react"
import styles from "./TaskCreator.module.css"
import TaskContainer from "../TasksContainer/TasksContainer";

let tasklist = [];
let task_id = null;
let id = 0 ;

export default function Creator(){

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
   
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleCreateTask = () => {
        if (title && description ){
            tasklist.push({
                id : id++,
                title : title,
                description : description
            })
        } else {
            alert("Please provide a valid input");
        }
    }

    const clearBuffers = () => {
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        setTitle("");
        setDescription("");
    }

    const toggleHidden = (boolean) => {
        switch(boolean){
            case true : 
                document.getElementById("container").classList.toggle(styles.visuallyHidden);
                break;

            case false:
                document.getElementById("container").classList.remove(styles.visuallyHidden);
        }
    }

    const getEditRequest = (taskID) =>{
        task_id = taskID;
        editTask(taskID);     
    }
    const getDeleteRequest = (ID) =>{
        deleteTask(ID);
    }

    const deleteTask = (ID) => {
        setIsDeleting(true);
        if (isDeleting) {
            tasklist[ID].title = "";
            tasklist[ID].description = "";
            setIsDeleting(false);
        }
    }

    const editTask = (taskID) => {
        setIsEditing(true);
        toggleHidden(false);
        document.getElementById("title").value = tasklist[taskID].title;
        document.getElementById("description").value = tasklist[taskID].description;
    }

    const saveChanges = () => {
        tasklist[task_id].title = title;
        tasklist[task_id].description = description;
        setIsEditing(false);
    }

    return(
    <>
        <div className={styles.creatorContainer} id="container">
            <h1>Add Task</h1>
            <div className={styles.taskCreator}>
                <form action="">
                    <div>
                        <label htmlFor="">Enter Title</label>
                        <input 
                            type="text" 
                            placeholder="Title..." 
                            onChange={handleTitleChange}
                            id="title"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Enter a description</label>
                        <input 
                            type="text" 
                            placeholder="I love Java-Script" 
                            onChange={handleDescriptionChange}
                            id="description"
                        />
                    </div>
                    <button type="submit" onClick={(e) =>{ 
                        e.preventDefault();
                        isEditing ? saveChanges() : handleCreateTask()
                        clearBuffers();
                        title && description ? toggleHidden(true) : "" ;
                        }}>Save</button>
                </form>
            </div>
        </div>
        <TaskContainer 
            tasklist = {tasklist} 
            getEditRequest={getEditRequest} 
            getDeleteRequest={getDeleteRequest} 
        />
    </>
    )
}