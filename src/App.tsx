import { Provider } from 'react-redux'
import { store } from './store'
import { useGetPostsQuery } from './service/posts';
import PostCard from './components/PostCard';
import { Post } from './types';
import { useState } from 'react';
import PostForm from './components/PostForm';

function App() {
  const [isPostFormOpen, setIsPostFormOpen] = useState(false)
  const { data: posts, error, isLoading } = useGetPostsQuery('')
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error has occurred</div>


  const toggleAddPostVisibility = () => {
    setIsPostFormOpen(!isPostFormOpen)
  }

  return (
    <>
      <header className=''>
        <h1> Posts</h1>
        <button onClick={toggleAddPostVisibility} className=''>
          Add Post
        </button>
        
      </header>
  
      <div className=' post-container '>
        {posts?.map((post:Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {isPostFormOpen && <PostForm toggleAddPostVisibility={toggleAddPostVisibility} />}

    </>
      
  )
}

export default App;
