import { useState } from 'react';
import './App.css';
import CreatePost from './components/CreatePost';

import { PostData } from './components/interfaces';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState<PostData[]>(
    JSON.parse(localStorage.getItem('posts') ?? '[]')
  );

  const refresher = () => {
    const storage = localStorage.getItem('posts');

    if (storage) {
      const storedPosts = JSON.parse(storage);
      setPosts(storedPosts);
    }
  };

  return (
    <div className='App'>
      <CreatePost refresher={refresher}></CreatePost>

      <div className={'postContainer'}>
        {posts.map((post, index) => (
          <Post key={index} post={post} refresher={refresher}></Post>
        ))}
      </div>
    </div>
  );
}

export default App;
