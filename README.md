## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Move the appropriate directory
3. Run `npm install` to install the required dependencies.
4. Run `npm run dev` to start the web server.

## Project Overview:

This project is a simple React web application that interacts with a public API to fetch and add posts. It demonstrates how to make API calls, manage state using Redux Toolkit (RTK Query), and display data in a responsive UI.

### Functionality

1. Fetch Posts:
   - Fetches posts from https://jsonplaceholder.typicode.com/posts using useGetPostsQuery (RTK Query).
   - displays the all the posts in a grid format inside the PostCard component.
2. Add New Post:
   - Provides a pop-up form to add new post when the add post button is clicked on the header.
   - The post is sent to the API using useAddPostMutation.
   - The form handles success and error states based on the API response. ( since the json server is not updated with the new data a consol log is displayed to show the response).

## Step-by-step Breakdown:

1. API Service (RTK Query)

   - The API service (postApi.ts) was created using Redux Toolkit’s createApi function.
   - Two endpoints were defined:
     - getPosts - Fetches a list of posts.
     - addPost - Adds a new post by sending a POST request.

2. Redux Store Configuration

   - The store was created inside store.ts and configured to include the postApi reducer and middleware for handling RTK Query API calls.This enables caching, automatic refetching, and API call management.

3. Fetching and displaying the data:

   - At first the app is wrapped around the Provider with the store passed to it.
   - The posts are fetched using useGetPostsQuery hook in the App component. Handing the loading and error state.
   - Once the data is successfully loaded, they are rendered in the a grid format inside PostCard component.

4. Adding a new Posts:
   - To add a post a button is added at the header of the app. It pops up a form component called PostForm which allows user to add new post
   - useAddPostMutation hook triggers the POST request and consol logs the server’s response and handles the loading, success and error states.
