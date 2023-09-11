import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { BiSolidLock } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { GoKebabHorizontal } from 'react-icons/go'
import Navbar from '../../companents/navbar/Navbar'
import './taskInfo.css'
import { useRef, useState } from 'react'

export default function TaskInfo() {

    const inputRef = useRef()
    const taskNameRef = useRef()
    const closeRef = useRef()


    const [task, setTask] = useState([
        {
            id: 1,
            name: "UKM frontend",
            children: [
                {
                    id: 1,
                    name: "Website build",
                },
                {
                    id: 2,
                    name: "Website build 2",
                },
                {
                    id: 3,
                    name: "Website build 3",
                }
            ]
        },
    ])


    function Addtack() {
        if (inputRef.current.value == '') {
            inputRef.current.classList.add('inError')
            closeRef.classList.add('none')
        } else {
            const newTask = {
                id: taskData.length + 1,
                name: inputRef.current.value,
                users: [
                    {
                        image: "https://img.a.transfermarkt.technology/portrait/big/8198-1685035469.png?lm=1"
                    }
                ]
            };

            setTaskData([...taskData, newTask])
            inputRef.current.classList.remove('inError')
            inputRef.current.value = null
        }

    }


    function AddTaskMenu() {
        if (taskNameRef.current.value !== "") {
            const newData = {
                id: task.length + 1,
                name: taskNameRef.current.value,
                children: []
            }

            setTask([...task, newData])
            taskNameRef.current.value = ""
        }
    }


    function AddTask(taskItem) {
        if (inputRef.current.value !== "") {
            const newData = {
                id: taskItem.children.length + 1,
                name: inputRef.current.value,
            };

            const updatedTask = [...task];
            taskItem.children.push(newData);
            setTask(updatedTask);
            inputRef.current.value = "";
        } else {
            inputRef.current.classList.add('inError');
        }
    }

    return (
        <>
            <Navbar />
            <div className="ProfileNav">
                <div className="profilNavLeft">
                    <button className='statusTaskBtn'><BiSolidLock /> <span>Private</span></button>
                    <div className="userAdd">
                        <div className="userAdd__users">
                            <img src="https://img.a.transfermarkt.technology/portrait/big/8198-1685035469.png?lm=1" alt="" />
                            <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                        </div>
                        <div className="userAdd__userAdd">
                            <button><BsPlusLg /></button>
                        </div>
                    </div>
                </div>
                <div className="profilNavRight">
                    <button>2 user</button>
                </div>
            </div>
            <div className="tasks">
                {
                    task.map(taskItem => (
                        <div className="taskCard" key={taskItem.id}>
                            <div className="tasksNav">
                                <div className="taskData">
                                    <p>{taskItem.name}</p>
                                </div>
                                <div className="taskSet">
                                    <button><GoKebabHorizontal /></button>
                                </div>
                            </div>
                            {
                                taskItem.children.map(item => (
                                    <div className="taskInfoCard" onClick={() => closeRef.current.classList.remove('none')}>
                                        <p>{item.name}</p>
                                        <div className="taskInfoCard__usersINfo">
                                            <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                                            <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                                        </div>
                                    </div>
                                ))
                            }
                            <div ref={closeRef} className="TascInfMOdule none">
                                <div className="TascInfMOduleCard">
                                    <button className='close' onClick={() => closeRef.current.classList.add('none')}>X</button>
                                    <div className="TaskBtn">
                                        <button className='btns1'>Canel</button>
                                        <button className='btns2' onClick={() => Addtack() + closeRef.current.classList.add('none')}>+ Create</button>
                                    </div>
                                </div>
                            </div>
                            <div className="addMiniDesc">
                                <input ref={inputRef} type="text" placeholder='Add another card' />
                                <button onClick={() => AddTask(taskItem)}><BsPlusLg /></button>
                            </div>
                        </div>
                    ))
                }
                <div className="taskAddBtn">
                    <div className="addMiniDesc" style={{ backgroundColor: "#F1F3F2" }}>
                        <input ref={taskNameRef} type="text" placeholder='Add another list' />
                        <button onClick={AddTaskMenu}><BsPlusLg /></button>
                    </div>
                </div>
            </div>
        </>
    )
}