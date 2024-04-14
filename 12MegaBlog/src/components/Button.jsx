import React from 'react'


function Button({   //passing parameters 
    children,       //text inside the btn, we can also call it text 
    type = 'button', //type can be different like submit, we passed a default value
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props        //spread operator so that we can take more values(additional properties)
}) {
  return (
    //we are passing tailwind properties inside the curly braces & in backticks bcoz it's a js syntax
    <button className={`px-4 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>{children}</button>
  )
}

export default Button