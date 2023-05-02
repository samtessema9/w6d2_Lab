import React, {useState, useRef} from 'react';

const TextInput = () => {
    const [inputValue, setInputValue] = useState('');

    const ref = useRef(null)

    const updateInputValue = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue)
    }

    const show = () => {
        const nextSibling = ref.current;
        nextSibling.style.display = 'block';
    }

    return ( 
        <>
            <input placeholder='text' onChange={updateInputValue}></input>
            <button  onClick={show}>show</button>
            <p ref={ref} style={{display: 'none'}}>{inputValue}</p>
        </>
     );
}
 
export default TextInput;