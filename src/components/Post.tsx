import React, { useState } from 'react';
import { PostProps } from './interfaces';
import classes from './Post.module.css';
import PostBody from './PostBody';
import PostFooter from './PostFooter';

function Post(props: PostProps) {
  const [isEditing, setIsEditing] = useState(false);

  const toogleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className={isEditing ? classes.editingPost : classes.post}>
      <div className={isEditing ? classes.placeHolder : ''}>
        <PostBody
          post={props.post}
          refresher={props.refresher}
          isEditing={isEditing}
          toogleEditing={toogleEditing}
        />
        <PostFooter
          post={props.post}
          refresher={props.refresher}
          isEditing={isEditing}
          toogleEditing={toogleEditing}
        />
      </div>
    </div>
  );
}

export default Post;
