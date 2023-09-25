import axios from 'axios'
import './taskCard.css'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function TaskCard({ item }) {

    const token = localStorage.getItem('accessToken')

    const deleteBoard = async () => {
        const response = await axios.delete(`http://manager.zafarr.uz/routers/boards/${item.id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            }
        )
        window.location.reload()
    }

    return (
        <div className="UserCardBox" key={item.id}>
            <div className="UserCard">
                <div className="boximgtype">
                    <button onClick={deleteBoard}><AiFillCloseCircle size={'40px'} /></button>
                </div>
                <Link to={`/TaskInfo/${item.id}`}>
                    <div className="Teaxt">
                        <p>{item.title}</p>
                    </div>
                </Link>
                <div className="UserImg">
                    {/* {
                        item.users.map(data => (
                            <img src={data.image} alt="" />
                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}