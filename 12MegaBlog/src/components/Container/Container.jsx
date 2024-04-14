import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'> {children} </div> ;
}

export default Container

//NOTES:

//Container is just like a box, in the container we define the styling properties(height, width)
