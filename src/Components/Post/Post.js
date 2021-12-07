import React from "react";
import { useHistory } from "react-router";

const Post = (props) => {
  const { id, title, body } = props.post;
  const history = useHistory();
  const showComments = (id) => {
    const url = `post/${id}`;
    history.push(url);
  };

  return (
    <div>
      <h3>
        <strong>Id: {id}- </strong>
        {title}
      </h3>
      <button onClick={() => showComments(id)}>Show Comments</button>
    </div>
  );
};

export default Post;
