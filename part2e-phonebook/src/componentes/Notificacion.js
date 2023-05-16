import React from 'react'

export const Notification = ({message}) => {

    //console.log("Checking el mensaje:", message.includes("Delete"))

    if (message === '')
        <div className="">
            {message}
        </div>
    else if ( message.includes("Delete"))
        return (
        <div className="error">
            {message}
        </div>
    )
    else
        return (
            <div className="success">
                {message}
            </div>
        )

}