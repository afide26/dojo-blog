import { useState } from "react";

const Home = () => {

    const [name,setName]= useState('Alan');
    const [age,setAge] = useState(50);

    const handleClick = ()=>{
        setName("Carlos");
        setAge(27)
    }
    return (
        <div className="home">
            <h1>Homepage</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Change the name</button>
        </div>
    );
}
 
export default Home;