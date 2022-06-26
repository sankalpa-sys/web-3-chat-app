

import { useRef } from 'react'
import {useMoralis, ByMoralis, useMoralisQuery} from 'react-moralis'
import Message from './Message'
import SendMessage from './SendMessage'

function Messages() {
    const {user} = useMoralis()
    const endOfMessageRef = useRef()

    const MINS_DURATION = 15

    const {data, loading, error} = useMoralisQuery(
        "Messages", 
        query => query.ascending("createdAt").greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
        [],{
            live: true
        }
    )


    
   
  return (
    <div className='pb-56 overflow-scroll'>
        <div className="my-5">
            <ByMoralis variant='dark' style = {{marginLeft: "auto", marginRight: "auto"}}/>
        </div>

       <div className="space-y-10 p-4">
           {data.map((message)=>(
            <Message key={message.id} message={message}/>
           ))}
       </div>
       <div className=" flex justify-center">
           <SendMessage endOfMessageRef = {endOfMessageRef}/>
       </div>
       <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5 ">
            <p >You are up to date {user.get("username")}! 🎉</p>
       </div>
    </div>
  )
}

export default Messages