import GroupCard from './GroupCard'

function Home({group, setGroups}){

    const groupCards = group.map(group => {
        return <>
         <div className="col-3" style={{ marginBottom: '20px',  }}>
             <GroupCard group={group} key={group.id} />
             </div>
             <br />
             </>
    })
    return(
        <div>
            <div className="row">{groupCards}</div>
        </div>
    )
}

export default Home