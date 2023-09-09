import './taskCard.css'

export default function TaskCard({ item }) {
    return (
        <div className="UserCardBox">
            <div className="UserCard">
                <div className="boximgtype"></div>
                <div className="Teaxt">
                    <p>{item.name}</p>
                </div>
                <div className="UserImg">
                    {
                        item.users.map(data => (
                            <img src={data.image} alt="" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}