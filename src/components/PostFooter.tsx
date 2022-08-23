import React, { useState } from 'react';
import { PostData, PostProps } from './interfaces';

import classes from './PostFooter.module.css';

function PostFooter(props: PostProps) {
  const [isLiked, setisLiked] = useState(false);
  const [isDisliked, setisDisliked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      const storage = localStorage.getItem('posts');
      if (storage) {
        const posts = JSON.parse(storage) as PostData[];

        const postIndex = posts.findIndex((post) => post.id === props.post.id);

        posts[postIndex].like -= 1;
        setisLiked(false);
        localStorage.setItem('posts', JSON.stringify(posts));
        props.refresher();
      }
    } else {
      const storage = localStorage.getItem('posts');
      if (storage) {
        const posts = JSON.parse(storage) as PostData[];

        const postIndex = posts.findIndex((post) => post.id === props.post.id);

        posts[postIndex].like += 1;

        localStorage.setItem('posts', JSON.stringify(posts));
        setisLiked(true);
        props.refresher();
      }
    }
  };
  const handleDislike = () => {
    if (isDisliked) {
      const storage = localStorage.getItem('posts');
      if (storage) {
        const posts = JSON.parse(storage) as PostData[];

        const postIndex = posts.findIndex((post) => post.id === props.post.id);

        posts[postIndex].dislike -= 1;
        setisDisliked(false);
        localStorage.setItem('posts', JSON.stringify(posts));
        props.refresher();
      }
    } else {
      const storage = localStorage.getItem('posts');
      if (storage) {
        const posts = JSON.parse(storage) as PostData[];

        const postIndex = posts.findIndex((post) => post.id === props.post.id);

        posts[postIndex].dislike += 1;

        localStorage.setItem('posts', JSON.stringify(posts));
        setisDisliked(true);
        props.refresher();
      }
    }
  };

  const handleDelete = () => {
    const storage = localStorage.getItem('posts');

    if (storage) {
      const posts = JSON.parse(storage) as PostData[];

      const newPosts = posts.filter((post) => post.id !== props.post.id);

      localStorage.setItem('posts', JSON.stringify(newPosts));
      props.refresher();
    }
  };

  return (
    <div className={classes.buttonsBody}>
      <div className={classes.likeButtonBody}>
        <svg
          className={isLiked ? classes.likeButton : classes.notLikeButton}
          onClick={handleLike}
        ></svg>
        <div className={isLiked ? classes.likeCount : classes.notLikeCount}>
          {props.post.like}
        </div>
        <svg
          className={
            isDisliked ? classes.dislikeButton : classes.notDislikeButton
          }
          onClick={handleDislike}
        ></svg>
        <div
          className={
            isDisliked ? classes.dislikeCount : classes.notDislikeCount
          }
        >
          {props.post.dislike}
        </div>
      </div>
      <div className={classes.funtionalButtonBody}>
        <svg className={classes.editButton} onClick={props.toogleEditing}></svg>
        <svg className={classes.deleteButton} onClick={handleDelete}></svg>
      </div>
    </div>
  );
}

export default PostFooter;
