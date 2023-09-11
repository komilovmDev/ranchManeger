/* eslint-disable react/jsx-key */
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { BiSolidLock } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { MdDescription } from 'react-icons/md'
import { GoKebabHorizontal } from 'react-icons/go'
import Navbar from '../../companents/navbar/Navbar'
import './taskInfo.css'
import { useRef, useState } from 'react'
import { ImEarth } from 'react-icons/im'
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';

export default function TaskInfo() {

    const inputRef = useRef()
    const taskNameRef = useRef()
    const closeRef = useRef()
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const setRef = useRef()

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
                                <MenuButton><button className='dropOnBtn'><BiSolidLock /> <span>Private</span></button></MenuButton>
                                <Menu className='dropMenu1'>
                                    <div className="tskSelectorTitle">
                                        <h3>Visibility</h3>
                                        <p>Choose who can see this board</p>
                                    </div>
                                    <MenuItem className='dropBtn'>
                                        <ImEarth color='#61BD4F'/>
                                        <span>Public</span>
                                        <p>Anyone can see this board. Only board members can edit</p>
                                    </MenuItem>
                                    <MenuItem className='dropBtn'>
                                        <BiSolidLock color='#EB5A46' />
                                        <span>Private</span>
                                        <p>Only board members can see and edit this board</p>
                                    </MenuItem>
                                </Menu>
                            </Dropdown>
                        </button>
                        {/* <div className="tskSelector">
                            <div className="tskSelectorTitle">
                                <h3>Visibility</h3>
                                <p>Choose who can see this board</p>
                            </div>
                            <div className="tskSelects">
                                <button>
                                    <ImEarth />
                                    <span>Public</span>
                                    <p>Anyone can see this board. Only board members can edit</p>
                                </button>
                                <button>
                                    <BiSolidLock />
                                    <span>Private</span>
                                    <p>Only board members can see and edit this board</p>
                                </button>
                            </div>
                        </div> */}
                    </div>
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
                                    <Dropdown>
                                        <MenuButton><button><GoKebabHorizontal /></button></MenuButton>
                                        <Menu className='dropMenu'>
                                            <MenuItem className='dropBtn'>Rename</MenuItem>
                                            <MenuItem className='dropBtn'>Delete this list</MenuItem>
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
                                                <button className='close' onClick={() => closeRef.current.classList.add('none1')}>X</button>
                                                <div className="TaskInfBox">
                                                    <div className="TaskInfBoxLeft">
                                                        <div className="TaskInfLabel">
                                                            <label> <MdDescription />    <input type="text" /></label>
                                                            <div className="btnLabel">
                                                                <button><BsPlusLg /> Edit</button>
                                                            </div>
                                                        </div>
                                                        <div className="TaskInfLabel">
                                                            <label> <MdDescription />    <input type="text" /></label>
                                                            <div className="btnLabel">
                                                                <button><BsPlusLg /> Edit</button>
                                                            </div>
                                                        </div>
                                                        <div className="TaskInfFile">
                                                            <div className="TaskInfFileMiniBox"></div>
                                                            <div className="TaskInfFileT">
                                                                <p>September or 11</p>
                                                                <div className='TaskInfoInpute'>
                                                                    <label htmlFor="fileInput" className="custom-file-upload">
                                                                        Image
                                                                    </label>
                                                                    <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                                                                    {selectedFile && <p>Selected file: {selectedFile.name}</p>}
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