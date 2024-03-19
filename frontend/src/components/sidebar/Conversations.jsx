import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from '../../utils/emoji'
export default function Conversations() {
  const {loading, conversation} = useGetConversation();
  console.log(conversation)
  return (
    <div className="py-2 flex flex-col overflow-auto">

        {conversation.map((c, idx) => (
          <Conversation 
            key={c._id} 
            conversation={c}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversation.length - 1}
          />
        ))}

        {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}
