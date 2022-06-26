import React, {useState} from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({endOfMessageRef}) {
    const {user, Moralis} = useMoralis()
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!message) return;


        const Messages = Moralis.Object.extend("Messages")

        const messages = new Messages()

        messages.save({
            message: message,
            username: user.get("username"),
            ethAddress: user.get("ethAddress"),
        }).then((message)=>{
            // object saved Successfully
        }, (error) => {
            console.log(error.message)
        })
        endOfMessageRef.current.scrollIntoView({
            behavior:"smooth"
        })

        setMessage("")
    }
  return (
    <form onSubmit = {handleSubmit} className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl mx-auto shadow-xl rounded-full border-4 border-blue-400">
        <input value={message} onChange = {(e)=>setMessage(e.target.value)} placeholder={`Enter a message ${user.get("username")} `}className="flex-grow outline-none bg-transparent text-white placeholder:text-gray-500 " type="text" />
        <button type="submit" className="font-bold text-pink-500 ">Send</button>
    </form>
  )
}

export default SendMessage