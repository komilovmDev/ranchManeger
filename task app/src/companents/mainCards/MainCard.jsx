import './mainCard.css'


export default function MainCard({item}) {
    return (
        <div className="mainCard" key={item.id}>
            <div className="mainCardImg">
                <img src={item.image} alt="" />
            </div>
            <h4>{item.name}</h4>
        </div>
    )
}