import { BiSolidLock } from 'react-icons/bi'
import './mainNav.css'
import { useRef } from 'react'

export default function MainNav() {

    const closeRef = useRef()

    return (
        <>
            <div className="mainNav">
                <h5>All Boards</h5>
                <button onClick={() => closeRef.current.classList.remove('none')}>+ Add</button>
            </div>
            <div ref={closeRef} className="mainNavModel none">
                <div className="mainNavModelCard">
                    <button className='close' onClick={() => closeRef.current.classList.add('none')}>X</button>
                    <input type="text" placeholder="Add board title" />
                    <button id='type'><BiSolidLock /><h5>Private</h5></button>
                    <div className="btns">
                        <button className='btns1'>Canel</button>
                        <button className='btns2'>+ Create</button>
                    </div>
                </div>
            </div>
        </>
    )
}