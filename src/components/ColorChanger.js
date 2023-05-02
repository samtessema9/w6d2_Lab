import React, {useState} from 'react';

const ColorChanger = () => {
    const colors = ['blue', 'green', 'purple', 'orange', 'pink', 'gray'];

    const [backgroundColor, setBackgroundColor] = useState(colors[0]);

    const handleColorChange = (e) => {
        let randomNumber = Math.floor(Math.random() * colors.length);
        setBackgroundColor(colors[randomNumber])
        console.log(backgroundColor);
        e.target.style.backgroundColor = backgroundColor;
    }

    return ( 
        <div>
            <button onClick={handleColorChange}>Generate color</button>
        </div>
     );
}
 
export default ColorChanger;