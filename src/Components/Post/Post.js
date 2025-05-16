import './Post.css';
import { timeAgo } from '../../Helpers/timeAgo';

export function Post({ obj }) {
    const time = timeAgo(obj.created);
    
    // Render different content based on post type
    const renderPostContent = () => {
        // If we don't have a postType yet (backward compatibility)
        if (!obj.postType) {
            // Just show the image if available
            return obj.imgSrc ? (
                <div className='post-image-container'>
                    <img src={obj.imgSrc} alt={obj.title} />
                </div>
            ) : null;
        }
        
        // Handle different post types
        switch(obj.postType) {
            case 'image':
                return (
                    <div className='post-image-container'>
                        <img src={obj.imgSrc} alt={obj.title} />
                    </div>
                );
            case 'self':
                return obj.selftext ? (
                    <div className='post-text-container'>
                        <p>{obj.selftext.length > 300 
                            ? obj.selftext.substring(0, 300) + '...' 
                            : obj.selftext}
                        </p>
                        {obj.selftext.length > 300 && (
                            <a 
                                href={`https://www.reddit.com${obj.permalink}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='read-more'
                            >
                                Read full post
                            </a>
                        )}
                    </div>
                ) : null;
            case 'video':
                return (
                    <div className='post-video-container'>
                        {obj.videoUrl ? (
                            <div className='video-player'>
                                <video 
                                    controls 
                                    preload="metadata"
                                    poster={obj.imgSrc} 
                                    className='reddit-video'
                                >
                                    <source src={obj.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : obj.imgSrc ? (
                            <div className='video-thumbnail' onClick={() => window.open(obj.url, '_blank')}>
                                <img src={obj.imgSrc} alt={obj.title} />
                                <div className='video-play-icon'>▶</div>
                            </div>
                        ) : (
                            <div className='video-placeholder' onClick={() => window.open(obj.url, '_blank')}>
                                <span>Video Content (Click to View on Reddit)</span>
                            </div>
                        )}
                    </div>
                );
            case 'link':
            case 'link_with_thumbnail':
                return (
                    <div className='post-link-container'>
                        {obj.imgSrc && (
                            <div className='link-thumbnail'>
                                <img src={obj.imgSrc} alt="Thumbnail" />
                            </div>
                        )}
                        <a 
                            href={obj.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='external-link'
                        >
                            <span className='link-domain'>
                                {tryGetDomain(obj.url)}
                            </span>
                        </a>
                    </div>
                );
            default:
                return null;
        }
    };
    
    // Helper function to extract domain from URL
    const tryGetDomain = (url) => {
        if (!url) return "reddit.com";
        try {
            return new URL(url).hostname;
        } catch {
            return url;
        }
    };

    return (
        <div className='card'>
            <div className='post-wrapper'>
                <div className='post-votes-container'>
                    {/* Your voting buttons here */}
                </div>
                <div className='post-container'>
                    <div className='post-title'>{obj.title}</div>
                    
                    {/* Render appropriate content based on post type */}
                    {renderPostContent()}
                    
                    <div className='post-details'>
                        <span className='author-details'>{obj.author}</span>
                        <span className='ago'>{time}</span>
                        <span className='post-comments-container'>
                            <button>Comments</button>
                            <span>{obj.commentsNum}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}