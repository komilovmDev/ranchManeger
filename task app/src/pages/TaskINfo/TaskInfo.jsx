import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { BiSolidLock } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { GoKebabHorizontal } from 'react-icons/go'
import Navbar from '../../companents/navbar/Navbar'
import './taskInfo.css'
import { useRef, useState } from 'react'

export default function TaskInfo() {

    const inputRef = useRef()


    const [data , setData] = useState([
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
    ])

    function AddTask() {
        const newData = 
            {
                id: data.length + 1 ,
                name: inputRef.current.value ,
            }

        setData([...data , newData])
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
                <div className="taskCard">
                    <div className="tasksNav">
                        <div className="taskData">
                            <p>28.02.2023 , 2:23</p>
                        </div>
                        <div className="taskSet">
                            <button><GoKebabHorizontal /></button>
                        </div>
                    </div>
                    {
                        data.map(item => (
                            <div className="taskInfoCard">
                                <p>{item.name}</p>
                                <div className="taskInfoCard__usersINfo">
                                    <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                                    <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                                </div>
                            </div>
                        ))
                    }
                    <div className="addMiniDesc">
                        <input ref={inputRef} type="text" placeholder='Add another card' />
                        <button onClick={AddTask}><BsPlusLg /></button>
                    </div>
                </div>
            </div>
        </>
    )
}