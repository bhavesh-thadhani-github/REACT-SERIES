import React from 'react'

function Card({username, btnText='visit me'}){   //this props(pass parameter in this func.) pass an object, the value of the object can be given while using that component(here Card). See App.jsx for more info.
    // in the above username, we directly pass the property of the object
    // in the above btnText, we have passed the default value(if a developer not pass the value then that value 'll be passed)
    // console.log('props', props)
    // console.log(props.username);    //to use the property of the object
    console.log(username, btnText);  //here we directly access the username property(instead of writing props.username again & again)
    return(
        <div className="relative h-[400px] w-[300px] rounded-md mb-4">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
      {btnText}     {/* here the value of btnText will get printed in the UI */}
    </button>
  </div>
</div>
    )
}

export default Card 

