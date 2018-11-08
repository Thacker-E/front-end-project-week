import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => {
  const { id, title, textBody } = props;
  return (
    <Link to={`/notes/${id}`}>
      <h3>{title}</h3>
      <p>{textBody}</p>
    </Link>
  );
};

export default Note;

