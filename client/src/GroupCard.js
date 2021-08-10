import {Link} from 'react-router-dom'
function GroupCard({group}){

    function handleClick(){
        
    }

    return(

                    <div className="card" onClick={handleClick}>
                        <div className="card-body">
                            <h5 className="card-title">{group.title}</h5>
                            <h6>View League</h6>
                        </div>
                    </div>
    )
}

export default GroupCard