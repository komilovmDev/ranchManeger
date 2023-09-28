import { useEffect , useState } from "react"
import axios from "axios"

export default function Card({ids , closeRef}) {

    // get card 
    const [cards, setCards] = useState([])
    const getCard = async () => {
        const response = await axios.get(`http://manager.zafarr.uz/routers/cards/${ids}`)
        setCards(response.data)
    }

    useEffect(() => {
        getCard()
    }, [])


    return (
        <>
            {
                cards.map(card => (
                    <div onClick={() => closeRef.current.classList.remove('none1')} className="taskInfoCard" key={card.id}>
                        <p>{card.title}</p>
                        <div className="taskInfoCard__usersINfo">
                            <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                            <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                        </div>
                    </div>
                ))
            }
        </>
    )
}