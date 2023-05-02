import React, {useState, useRef} from 'react'

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const updateObj = (e, name) => {
        console.log(name)
        setForm({...form, [name]: e.target.value})
        console.log(form)
    }

    const headingRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const nextSibling = headingRef.current.nextElementSibling;
        nextSibling.style.display = 'block'
        console.log(e.target)
    }

    return ( 
        <>
            <form id='form' ref={headingRef} onSubmit={handleSubmit}>
                <input placeholder='name' onChange={(e) => updateObj(e, 'name')}></input>
                <input placeholder='email' onChange={(e) => updateObj(e, 'email')}></input>
                <input placeholder='message' onChange={(e) => updateObj(e, 'message')}></input>
                <button type="submit" >Submit</button>
            </form>
            <div style={{display: 'none'}}>
                <p>name: {form.name}</p>
                <p>email: {form.email}</p>
                <p>message: {form.message}</p>
            </div>
        </>
     );
}
 
export default ContactForm;