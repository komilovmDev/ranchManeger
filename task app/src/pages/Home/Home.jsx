/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import MainCard from "../../companents/mainCards/MainCard";
import MainNav from "../../companents/mainNav/MainNav";
import Navbar from "../../companents/navbar/Navbar";
import TaskCard from "../../companents/taskCard/TaskCard";
import UserNav from "../../companents/userNav/userNav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Home() {

    const getUser = async () => {
        const response = await axios.get("http://manager.zafarr.uz/users/")
        setUserData(response.data)
    }

    useEffect(() => {
        getUser()
    }, [])


    const [userData, setUserData] = useState([])

    const [taskData, setTaskData] = useState([])

    const getBoard = async () => {
        const response = await axios.get("http://manager.zafarr.uz/routers/boards/")
        setTaskData(response.data)
    }

    useEffect(() => {
        getBoard()
    }, [])



    return (
        <>
            <Navbar />
            <MainNav taskData={taskData} setTaskData={setTaskData} />
            <div className="mainCards">
                {
                    taskData.map(item => (
                        <Link to={`/TaskInfo/${item.id}`}>
                            <TaskCard item={item} />
                        </Link>
                    ))
                }
            </div>
            <UserNav />
            <div className="mainCards">
                {
                    userData.map(item => (
                        <MainCard item={item} />
                    ))
                }
            </div>
        </>
    )
}