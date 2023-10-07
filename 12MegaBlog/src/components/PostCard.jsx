import React from 'react'
import appwriteService from'../appWrite/config'
import {Linnk} from 'react-router-dom'

function PostCard({$id,title,featureImage}) {
  return (
    <Linnk to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featureImage)} alt={title} className="rounded-xl" />
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Linnk>
  )
}

export default PostCard