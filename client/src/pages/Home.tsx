 

const Home = ({user}:{user:any}) => {

    let message;

    if (user) {
        message = 'test'
    } else {
        message = 'You are not logged in'
        
    }

   
    return (
        <div className="container">
            <h1>{message}</h1>
        </div>
    )
}

export default Home
