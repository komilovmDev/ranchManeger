import MainCard from "../../companents/mainCards/MainCard";
import MainNav from "../../companents/mainNav/MainNav";


export default function Home() {


    const data = [
        {
            id: 1 ,
            name: "Muhammad Komilov" ,
            image: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
        },
        {
            id: 2 ,
            name: "Lionel Ranaldo" ,
            image: "https://img.a.transfermarkt.technology/portrait/big/8198-1685035469.png?lm=1"
        }
    ]

    return (
        <>
            <MainNav />
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