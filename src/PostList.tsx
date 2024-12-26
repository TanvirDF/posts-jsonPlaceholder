import React from 'react';
import { useGetPostsQuery } from './service/posts';

const PostList: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  return (
    <div>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => (
            <tr key={post.id}>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
