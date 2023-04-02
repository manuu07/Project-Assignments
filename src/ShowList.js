import { useNavigate } from 'react-router-dom';

const ShowList = ({ showData }) => {
    const navigate = useNavigate();
    function handleClick(showId) {
        navigate(`/summary/${showId}`)
    }
    return (
        <>
            {showData.map((item, index) => {
                return (
                    <div className="show-container" key={item.show.id}>
                        <img src={
                            item.show.image?.medium} alt="show 1"></img>
                        <div>
                            <h2>{item.show.name}</h2>
                            <p>Rating: {
                                item.show.rating.average ? item.show.rating.average : 0
                            }</p>
                            <p>Status:<i> {item.show.status}</i></p>
                            <p>Language:<i> {item.show.language}</i></p>
                            <button onClick={() => handleClick(item.show.id)}>Click to know more !!</button>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default ShowList;