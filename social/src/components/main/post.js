import React from 'react';
import logo__1 from './ava__1.jpg';
import classes from './post.module.css';

const Post = (props) => {

	return (
		<div className={classes.post__wrapper}>
			<img src={logo__1} className={classes.ava} alt="avatar" />
			{props.message}
			<div>Likes = {props.likesCount} </div>
		</div>
	)
}

export default Post;