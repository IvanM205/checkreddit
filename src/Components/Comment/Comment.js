import './Comment.css';

export function Comment(props) {
  const { author, avatarUrl, timestamp, content } = props.commentData;

  return (
    <div className="comment">
      <div className="comment-header">
        <img className="comment-avatar" src={avatarUrl} alt={`${author} profile`} />
        <div className="comment-author-timestamp">
          <p className="comment-author">{author}</p>
          <p className="comment-timestamp">{timestamp}</p>
        </div>
      </div>
      <div className="comment-content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
