function NavBar({currentUser}){
    // console.log(currentUser)

    return(
        <div>
            <h2>{currentUser.username}</h2>
        </div>
    )
}

export default NavBar