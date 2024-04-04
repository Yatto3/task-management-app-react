import styles from "./TasksContainer.module.css"

export default function TaskContainer({tasklist,getEditRequest,getDeleteRequest}){
    
    const handleCreateNewTask = () => {
        let container = document.getElementById("container");
        container.classList.remove(container.classList[1]);
    }
    
    const tasksContainer = <div className={styles.tasksContainer}>
                            <button 
                                className={styles.addNew}
                                onClick={handleCreateNewTask}
                            >       Add New Task</button>
                            {tasklist.map((task) =>
                            <Task 
                                taskNumber ={task.id} 
                                key={task?.id} 
                                title={task?.title}
                                description={task?.description}
                                getEditRequest={getEditRequest}
                                getDeleteRequest={getDeleteRequest}/>)}
                          </div>;

    const taskContainerNoStyles = <div className={styles.visuallyHidden}>
                                    <button className={styles.addNew}>Add New Task</button>
                                  </div>;                      
    return(
        tasklist.length > 0  ? tasksContainer : taskContainerNoStyles
    )
}


function Task({title,description,taskNumber,getEditRequest,getDeleteRequest}){

    const handleEdit = () => {
        getEditRequest(taskNumber);
    }

    const handleDelete = () => {
        getDeleteRequest(taskNumber);
    }

    if (title && description) return (
        <div className={styles.task}>
            <div>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.oppButtons}>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}  