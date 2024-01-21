import React from 'react';

const FeedbackSection = () => {
  return (
    <div className="feedback-main-container">
    <img src="/images/illustration.png" alt="" className="feedback-img" />
    <div className="feedback-container">
      <h2 className="feedback-header">Leave Your Feedback</h2>
      <p className="feedback-para">
      We are building and improving everyday, 
      making our community better. Please do share your ideas and be a part of what 
      makes the DEVGRU Advantage great. We look forward to hearing from you
      </p>
      <form className="feedback-form">
        <label htmlFor="name" className="feedback-label">Your Name:</label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your Name"
            className="feedback-input"
        />

        <label htmlFor="feedback"className="feedback-label">Your Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          rows="4"
          placeholder="Write your feedback here..."
          className="feedback-textarea"
        ></textarea>

        <button className="feedback-btn" type="submit">SUBMIT</button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackSection;