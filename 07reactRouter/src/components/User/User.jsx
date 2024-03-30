import React from "react";
//we have to import a method {useParams} to take user passed value in the toolbar(address-bar)
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()    //since we have got the user value which he passed in the toolbar(address-bar)
    return(
        <div className="bg-gray-600 text-white py-2 text-3xl">User: {userid}</div>   //The value that we have passed in the main.jsx after the colon for user. The same value we have to pass here.
    )
}

export default User