import React, {useId} from 'react'

const Input = React.forwardRef(function Input({     //what parameters we 'll take in input
    label,
    type = 'text',
    className = '',     //bydefault we take className as empty
    ...props
}, ref) {   //we 'll use this ref for reference 
    const id = useId()
    return (
        <div className='w-full '>
            {/* we have taken id in htmlFor just for accessibility purpose(not IMP) */}
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input 
            type={type} 
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
            ref = {ref}     //this is the thing that 'll give you reference of the parent component & bcoz of this we have used forwardRef, component is different & we want ref. so we pass the ref. from that component & take the access of the state from there
            {...props}
            id={id} //we have put the id here also & in the label also, so that if the user clicks on the label then also the input field gets active
            />
                
        </div>
    )
})

export default Input

