import './taskCard.css'

export default function TaskCard({item}) {
    return (
        <div className="tskcard">
            <h4>{item.name}</h4>
            <div className="userView">
                {
                    item.users.map(data => (
                        <img src={data.image} alt="" />  
                    ))
                }
            </div>           
        </div>
    )
}