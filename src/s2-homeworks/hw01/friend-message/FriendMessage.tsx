import React from 'react'
import s from './FriendMessage.module.css'
import { MessagePropsType } from '../message/Message'

type FriendMessageType = MessagePropsType

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = ({message}: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + message.id}
                    // создаёт студент
                    src={message.user.avatar}
                    alt={message.user.name}// с
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <p>{message.user.name}</p>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <p>{message.message.text}</p>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <p>{message.message.time}</p>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
