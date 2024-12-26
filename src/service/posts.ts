import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Post }  from '../types.js'

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
    }),
      addPost: builder.mutation<Post, Partial<Post>>({
          query: (newPost) => ({
                url: '/posts',
                method: 'POST',
              body: JSON.stringify(newPost),
              headers: {
                'Content-Type': 'application/json; charset=UTF-8' ,
              }
          }),
      })
    }),
  
})

export const { useGetPostsQuery, useAddPostMutation } = postsApi