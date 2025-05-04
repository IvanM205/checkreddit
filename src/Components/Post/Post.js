import './Post.css';

export function Post({ obj }) {
    return (
        <div className='card'>
            <div className='post-wrapper'>
                <div className='post-votes-container'>

                </div>
                <div className='post-container'>
                    <div className='post-title'>{obj.title}</div>
                    <div className='post-image-container'>
                        <img src={obj.imgSrc} alt='post-image' />
                    </div>
                    <div className='post-details'>
                        <span className='author-details'>{obj.author}</span>
                        <span className='ago'>HERE HOW long ago</span>
                        <span className='post-comments-container'>
                            <button>Comments</button>
                            <span>{obj.commentsNum}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}