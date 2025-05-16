

export async function fetchReddit(subredditName=null) {
    try {
        let urlFetch = ''
        if (subredditName !== null) {
            urlFetch = `/r/${subredditName}/.json`;
            console.log(subredditName);
        } else {
            urlFetch = "/.json";
        }
        const response = await fetch(urlFetch);
        if (!response.ok) {
            throw new Error("Network respone was not ok");
        };
        const data = await response.json();
        const posts = data.data.children.map(post => {
            // Determine post type and set appropriate image source
            const postData = post.data;
            let imgSrc = null;
            let postType = 'link';
            let selftext = null;
            
            // Check if it's an image post
            if (postData.url && postData.url.match(/\.(jpeg|jpg|gif|png)$/i)) {
                imgSrc = postData.url;
                postType = 'image';
            } 
            // Check if it's a self (text) post
            else if (postData.is_self) {
                selftext = postData.selftext;
                postType = 'self';
            } 
            // Handle Reddit image hosting (i.redd.it)
            else if (postData.url && (postData.url.includes('i.redd.it') || postData.domain === 'i.redd.it')) {
                imgSrc = postData.url;
                postType = 'image';
            }
            // Handle Reddit video
            else if (postData.is_video && postData.media?.reddit_video?.fallback_url) {
                imgSrc = postData.thumbnail !== 'default' ? postData.thumbnail : null;
                postType = 'video';
            }
            // Handle image previews for links when available
            else if (postData.thumbnail && postData.thumbnail !== 'self' && postData.thumbnail !== 'default') {
                imgSrc = postData.thumbnail;
                postType = 'link_with_thumbnail';
            }
            
            return {
                id: postData.id,
                title: postData.title,
                author: postData.author,
                commentsNum: postData.num_comments,
                created: postData.created,
                imgSrc: imgSrc,
                postType: postType,
                url: postData.url,
                selftext: selftext,
                permalink: postData.permalink,
                subreddit: postData.subreddit
            };
        });
        
        return posts;
    } catch(err) {
        console.error(err);
        return [];
    }
}
