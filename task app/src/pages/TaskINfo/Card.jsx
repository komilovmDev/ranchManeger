export default function Card({ card }) {
    return (
        <>
            <div className="taskInfoCard" onClick={() => closeRef.current.classList.remove('none1')}>
                <p>{card.title}</p>
                <div className="taskInfoCard__usersINfo">
                    <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                    <img src="https://lh3.googleusercontent.com/a/AAcHTtebJ7FQXHDSt3g_H96uktTJuDJIcYFas4iuzt1iMGSV=s96-c" alt="" />
                </div>
            </div>
        </>
    )
}