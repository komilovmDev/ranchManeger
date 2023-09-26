import axios from 'axios'
import './taskCard.css'
import { Link } from 'react-router-dom'
import { BiPencil } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import BasicModal from '../BasicModal/Modal'
import { BsCheckLg } from 'react-icons/bs'
import { BiCheckboxMinus } from 'react-icons/bi'
import Button from '@mui/material/Button';

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
                    <div className="modal">
                        <Button style={{minWidth: 'auto'}} variant="text"><BiCheckboxMinus color='red' size={'30px'} /></Button>
                        <Button style={{minWidth: 'auto'}} variant="text"><BsCheckLg color='green' size={'30px'} /></Button>
                        <BasicModal main={<button className='saveModal' onClick={deleteBoard}>Delete</button>} text={'Delete Board ?'} btn={<AiOutlineDelete color='red' size={'25px'} />} />
                        <BasicModal element={<input className='modalIn' placeholder='Board Name' />} main={<button className='saveModal' onClick={''}>ok</button>} text={'Board rename'} btn={<BiPencil color='black' size={'25px'} />} />
                    </div>
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