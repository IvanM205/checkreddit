
export function Post(props) {
    return (
        <div className='card'>
            <div className='post-wrapper'>
                <div className='post-votes-container'>

                </div>
                <div className='post-container'>
                    <div className='post-title'>{props.title}</div>
                    <div className='post-image-container'>
                        <img src={props.imgSrc} alt='post-image' />
                    </div>
                    <div className='post-details'>
                        <span className='author-details'>{props.author}</span>
                        <span className='ago'>HERE HOW long ago</span>
                        <span className='post-comments-container'>
                            <button>Comments</button>
                            <span>{props.commentsNum}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}