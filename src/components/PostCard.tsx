import React from 'react';

import { Post } from '../types';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {

    return (
        <div className="post-card">
          <div className="">
            <span className="post-user-id">User ID: { post.userId}</span>
          </div>
          <div className="post-card-body">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-paragraph">{post.body}</p>
          </div>
        </div>
  );
};

export default PostCard;
