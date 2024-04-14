import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {    //$id is a variable
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
                className='rounded-xl'

                />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard

//NOTES:
//This is the id of post -> appwriteService.getFilePreview(featuredImage)
//Imageid 'll remain with the post id