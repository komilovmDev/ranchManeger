/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { BiSolidLock } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { MdDescription } from 'react-icons/md'
import { GoKebabHorizontal } from 'react-icons/go'
import Navbar from '../../companents/navbar/Navbar'
import './UserPage.css'
import { useRef, useState } from 'react'
import ava from './../../assets/vod.png';
import { ImEarth } from 'react-icons/im';
import { HiPencil } from 'react-icons/hi';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chat from '../../companents/chat/Chat'



export default function UserPage() {

    const top100Films = [
        { label: 'Muhammad Komilov', year: 1994 },
        { label: 'Lionel Ranaldo', year: 1972 },
    ]

    const inputRef = useRef()
    const taskNameRef = useRef()
    const closeRef = useRef()
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const setRef = useRef()
    const [editingTaskName, setEditingTaskName] = useState(""); // Yangi o'zgaruvchi
    const changeRef = useRef()


    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const imageUrl = event.target.result;
                setSelectedFile(file);
                setImageSrc(imageUrl);
            }
        }
    };
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
                    <div className="taskStatusSelect">
                        <button className='statusTaskBtn'>
                            <Dropdown className='hello'>
                                <MenuButton className='GlavBtn'><button className='dropOnBtn'><BiSolidLock /> <span>Private</span></button></MenuButton>
                            </Dropdown>
                        </button>
                    </div>
                    <div className="userAdd">
                        <div className="userAdd__users">
                            <img src="https://img.a.transfermarkt.technology/portrait/big/8198-1685035469.png?lm=1" alt="" />
                            <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
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
                                    {taskItem.id === editingTaskName ? (
                                        <input
                                            type="text"
                                            placeholder={taskItem.name}
                                            ref={changeRef}
                                        />
                                    ) : (
                                        <p>{taskItem.name}</p>
                                    )}
                                </div>
                                <div className="taskSet">
                                    <Dropdown>
                                        <MenuButton>
                                            <button>
                                                {
                                                    taskItem.id === editingTaskName ? (
                                                        <button onClick={() => setEditingTaskName(changeRef.current.value)}>Save</button>
                                                    ) : (
                                                        <GoKebabHorizontal />
                                                    )
                                                }
                                            </button>
                                        </MenuButton>
                                        <Menu className="dropMenu">
                                            <MenuItem
                                                className="dropBtn"
                                                onClick={() => setEditingTaskName(taskItem.id)}
                                            >
                                                Rename
                                            </MenuItem>
                                            <MenuItem className="dropBtn">Delete this list</MenuItem>
                                        </Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            {
                                taskItem.children.map(item => (
                                    <div className="taskInfoCardGlav">
                                        <div className="taskInfoCard" onClick={() => closeRef.current.classList.remove('none1')}>
                                            <p>{item.name}</p>
                                            <div className="taskInfoCard__usersINfo">
                                                <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                                                <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                                            </div>
                                        </div>
                                        <div ref={closeRef} className="TascInfMOdule none1">
                                            <div className="TascInfMOduleCard">
                                                <div className='CloseBox'>
                                                    <button className='close' onClick={() => closeRef.current.classList.add('none1')}>X</button>
                                                </div>
                                                <div className="TaskInfBox">
                                                    <div className="TaskInfBoxLeft">
                                                        <div className="TaskInfBoxLeftGalvLable">
                                                            <div className='GlavLableTitle'>
                                                                <h1>
                                                                    Website buil
                                                                </h1>
                                                                <button>
                                                                    <HiPencil />
                                                                </button>
                                                            </div>
                                                            <label> in list <input type="date" id="start" name="trip-start" placeholder="2023-09-19" min="2023-01-01" max="2023-12-31" /> - <input type="date" id="start" name="trip-start" placeholder="2023-09-19" min="2023-01-01" max="2023-12-31" /></label>
                                                        </div>
                                                        <div className="TaskInfFile">
                                                            <div className="TaskInfFileT">
                                                                <div className="TaskInfFileBtn">
                                                                    <div className="CommentInfo">
                                                                        <Chat />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="TaskInfRight">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div >
        </>
    )
}