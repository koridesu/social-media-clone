import React, { useState } from 'react';
import classes from './CreatePost.module.css';
import { CreatePostProps } from './interfaces';
import { v4 as uuidv4 } from 'uuid';

function CreatePost(props: CreatePostProps) {
  const [input, setInput] = useState<string>('');

  const createPostHandler = () => {
    const postData = {
      id: uuidv4(),
      content: input,
      date: new Date(),
      like: 0,
      dislike: 0,
    };
    const storage = localStorage.getItem('posts');

    if (!storage) {
      localStorage.setItem('posts', JSON.stringify([postData]));
    } else {
      const storedPosts = JSON.parse(storage);
      console.log(storedPosts);

      storedPosts.push(postData);
      localStorage.setItem('posts', JSON.stringify(storedPosts));
    }
    props.refresher();
    setInput('');
  };

  return (
    <div className={classes.postBody}>
      <textarea
        className={classes.textInput}
        placeholder='Your text here'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div className={classes.buttonContainer}>
        <div className={classes.iconContainer}>
          <svg className={classes.addFileButton}></svg>
          <svg className={classes.emojiButton}></svg>
        </div>
        <button className={classes.submitButton} onClick={createPostHandler}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
