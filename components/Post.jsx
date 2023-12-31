import {useEffect, useState} from 'react'

function PostCard({post}){
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default function Post() {
    const [postData, setPostData] = useState([])

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPostData(json));
        },[])

  return (
    <div className='flex flex-col space-y-2'>
        {postData.map(singlePost => <PostCard key={singlePost.id} post=
        {singlePost} />)}
    </div>
  )
}
