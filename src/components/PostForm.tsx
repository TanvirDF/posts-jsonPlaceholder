import React from 'react';
import { useState } from 'react';
import { useAddPostsMutation } from '../service/posts';

interface PostFormProps {
    toggleAddPostVisibility: () => void
}

const PostForm: React.FC<PostFormProps> = ({ toggleAddPostVisibility }) => {
    const [userId, setUserId] = useState(1)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const [addPost, { isLoading, isSuccess, isError }] = useAddPostsMutation()

    const formValidation = () => {
        if (userId < 1 || userId > 10) {
            alert('User ID must be between 1 and 10')
            return false
        }
        if (title.length < 1) {
            alert('Title is required')
            return false
        }
        if (body.length < 1) {
            alert('Body is required')
            return false
        }
        return true
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formValidation()) return
        const res = await addPost({ title, body, userId })
        console.log(res)
        setUserId(1)
        setTitle('')
        setBody('')
    }
    const handleCancel = () => {
        toggleAddPostVisibility()
    }

    return (
    <div className='blur-background'>


        <div className='form-container'>

            <div className='cancel-button-container'>
                <button onClick={ handleCancel} className='cancel-button'> X </button>  
            </div>
            <form className='' onSubmit={handleSubmit}>

          
            <h2> Add your post </h2>
            <div>
                <label>User ID</label>
                <input type="text" value={userId} onChange={e => setUserId(Number(e.target.value))} />
            </div>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Body</label>
                <textarea  value={body} onChange={e => setBody(e.target.value)} />
                </div>
    
            <button type="submit" disabled={isLoading}>Submit</button>
            {isSuccess && <p>Post added successfully!</p>}
            {isError && <p>Failed to add post.</p>}
            
            </form>
        </div>
    </div>
  );
};

export default PostForm;
