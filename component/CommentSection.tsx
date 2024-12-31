"use client"
import { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleAddComment = () => {
    if (name && commentText) {
      const newComment = {
        id: comments.length + 1,
        name,
        text: commentText,
      };
      setComments([...comments, newComment]);
      setName('');
      setCommentText(''); 
    }
  };

  return (
    <div className=''>
      <h3>Enter Name</h3>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <h3>Enter Comment</h3>
      <input
        type="text"
        value={commentText}
        onChange={handleCommentChange}
        placeholder="Add a comment"
       
      />
      <button onClick={handleAddComment}  className="bg-teal-700 text-white py-2 px-4 rounded-lg  hover:bg-teal-800 transition-all">Add Comment</button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
