import React, { useState } from 'react';
import { PostData, PostProps } from './interfaces';
import classes from './PostBody.module.css';

function PostBody(props: PostProps) {
  const [input, setInput] = useState(props.post.content);

  const handleEdit = () => {
    const storage = localStorage.getItem('posts');
    if (storage) {
      const posts = JSON.parse(storage) as PostData[];

      const postIndex = posts.findIndex((post) => post.id === props.post.id);

      posts[postIndex].content = input;

      localStorage.setItem('posts', JSON.stringify(posts));

      props.refresher();
      props.toogleEditing && props.toogleEditing();
    }
  };

  const editButtons = () => {
    return (
      <div className={classes.buttonContainer}>
        <div className={classes.iconContainer}>
          <svg className={classes.addFileButton}></svg>
          <svg className={classes.emojiButton}></svg>
        </div>
        <div>
          <button
            className={classes.cancelButton}
            onClick={() => {
              setInput(props.post.content);
              props.toogleEditing && props.toogleEditing();
            }}
          >
            Cancel
          </button>
          <button className={classes.updateButton} onClick={handleEdit}>
            Update
          </button>
        </div>
      </div>
    );
  };

  const editTextArea = () => {
    return (
      <textarea
        className={classes.textInput}
        placeholder='Your text here'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
    );
  };

  return (
    <div
      className={props.isEditing ? classes.editingPostBody : classes.postBody}
    >
      <div className={classes.profilePicture}></div>
      <div className={classes.contentContainer}>
        <div className={classes.contentDate}>{props.post.date?.toString()}</div>
        <div
          className={props.isEditing ? classes.updateArea : classes.contentArea}
        >
          <div className={classes.userName}>Jane Doe </div>

          {props.isEditing ? (
            editTextArea()
          ) : (
            <div className={classes.content}>{props.post.content}</div>
          )}
          {props.isEditing ? editButtons() : null}
        </div>
      </div>
    </div>
  );
}

export default PostBody;
