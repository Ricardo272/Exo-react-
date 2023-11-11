import { useState } from 'react';
import './Home.css';

function Home() {
    const [animation, setAnimation] = useState(true)

    const toggleAnimation = () => {
        console.log(animation)
        setAnimation(animation => !animation)
    }
    return (
        <div>
            <div className="container">
                <img src={"../images/dwwm_1.png"}
                    className={`logo ${animation && "rotate"}`} alt="logo" />
                <h1>TP React Développeur Web et Web Mob </h1>
            </div>
            <button className="App-button">
                <button
                    className="App-button"
                    onClick={toggleAnimation}>
                    Modifier l’animation
                </button>            </button>
        </div >
    )
}
export default Home;
