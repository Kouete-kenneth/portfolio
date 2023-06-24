/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Comments/GetComment')
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='TeatiMain'>
      <h2>Testimonials</h2>
      <ul className="comments__list">
        {testimonials.map((comment) => (
          <li key={testimonials._id} className="comments__item">
            <div className="comments__profile">
              
              <div className="comments__profile-info">
                <h3 className="comments__profile-name">{comment.name}</h3>
                <p className="comments__profile-role">{comment.role}</p>
              </div>
            </div>
            <p className="comments__message">{comment.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonial;
*/

import pic from "../../Assets/images/pic2.jpg"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './testimonial.scss';

const Testimonial = () => {
  const [comments, setTestimonial] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    role: '',
    ProfilePic: '',
    message: '',
    email:'',
  });

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Comments/GetComment')
      .then((response) => {
        setTestimonial(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewComment({ ...newComment, [name]: value });
  };
 /* const handleID=()=>{
    const id=document.getElementById("updatebtn");
    axios.
     delete('http://localhost:5000/api/Comments/deleteComment/${id}')
     .then(alert("delete successful"))
  }*/
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/Comments/PostComment", newComment)
  .then(response => {
    console.log(response);
    alert("Comment submitted successful");
    setNewComment({
      name: '',
      role: '',
      ProfilePic: '',
      message: '',
      email:'',
    });
  })
  .catch(error => {
    console.log(error);
  });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const id=document.getElementById("id").value;
    axios.put(`http://localhost:5000/api/Comments/updateComment/${id}`, newComment)
  .then(response => {
    console.log(response);
    alert(`${id}:Comment submitted successful`);
    setNewComment({
      name: '',
      role: '',
      ProfilePic: '',
      message: '',
      email:'',
    });
  })
  .catch(error => {
    console.log(error);
  });
  };

  const handleDelete=(event)=>{
    const id=document.getElementById("deleteID").innerText;
    event.preventDefault();
    axios.delete(`http://localhost:5000/api/Comments/deleteComment/${id}`)
    .then(alert(`${id} deleted sucessfully`))
    .catch(error=>{
       console.log(error);
    })

  }
  return (
    <div className="comment_main">
        <div className="comments">     
      <h2>Testimonial</h2>
      <ul className="comments__list">
        {comments.map((comment) => (
          <li key={comment._id} className="comments__item">
            <div className="comments__profile">
              <img
                src={pic}
                alt={comment.name}
                className="comments__profile-picture"
              />
              <div className="comments__profile-info">
                <h2 className="comments__profile-name">{comment.name}</h2>
                <p className="comments__profile-role">{comment.role}</p>
              </div>
            </div>
            <p className="comments__message">ID {comment._id}: {comment.message} <button id="deleteID" onClick={handleDelete} type="button" >{comment._id}</button>click to delete</p>
            <div className="space"></div>
          </li>
         
        ))}
      </ul>
      <form className="comments__form" onSubmit={handleSubmit}>
        <h2>Leave a comment</h2>
        <div className="comments__form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newComment.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={newComment.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={newComment.role}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="ProfilePic">Profile Picture:</label>
          <input
            type="text"
            id="ProfilePic"
            name="ProfilePic"
            value={newComment.profilePicture}
            onChange={handleInputChange}
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={newComment.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <form className="comments__form" onSubmit={handleUpdate}>
        <h2>update a comment</h2>
        <div className="comments__form-group">
          <label htmlFor="id">CommentID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={newComment._id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newComment.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={newComment.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={newComment.role}
            onChange={handleInputChange}
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="ProfilePic">Profile Picture:</label>
          <input
            type="text"
            id="ProfilePic"
            name="ProfilePic"
            value={newComment.profilePicture}
            onChange={handleInputChange}
          />
        </div>
        <div className="comments__form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={newComment.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
        </div>
    </div>
  );
};

export default Testimonial;