import { useState } from "react";
import MainCard from "../../companents/mainCards/MainCard";
import MainNav from "../../companents/mainNav/MainNav";
import Navbar from "../../companents/navbar/Navbar";
import TaskCard from "../../companents/taskCard/TaskCard";
import UserNav from "../../companents/userNav/userNav";


export default function Home() {


    const data = [
        {
            id: 1,
            name: "Muhammad Komilov",
            image: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
        },
        {
            id: 2,
            name: "Lionel Ranaldo",
            image: "https://img.a.transfermarkt.technology/portrait/big/8198-1685035469.png?lm=1"
        }
    ]

    const [taskData , setTaskData] =useState([
        {
            id: 1 ,
            name: "UKM Website build" ,
            users: [
                {
                    image: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
                }
            ] 
        }
    ])


    return (
        <>
            <Navbar />
            <MainNav taskData={taskData} setTaskData={setTaskData}/>
            <div className="mainCards">
                {
                    taskData.map(item => (
                        <TaskCard item={item} />
                    ))
                }
            </div>
            <UserNav />
            <div className="mainCards">
                {
                    data.map(item => (
                        <MainCard item={item} />
                    ))
                }
            </div>
        </>
    )
}