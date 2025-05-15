

export async function fetchReddit(subredditName=null) {
    try {
        let urlFetch = ''
        if (subredditName !== null) {
            urlFetch = `/r/${subredditName}/new.json?raw_json=1`;
            console.log(subredditName);
        } else {
            urlFetch = "/new.json";
        }
        const response = await fetch(urlFetch);
        if (!response.ok) {
            throw new Error("Network respone was not ok");
        };
        const data = await response.json();
        console.log(data);
        const posts = data.data.children.map(post => ({
            title: post.data.title,
            imgSrc: post.data.url,
            author: post.data.author,
            commentsNum: post.data.num_comments,
            created: post.data.created 
        }))
        return posts;
    } catch(err) {
        console.error(err);
        return [];
    }
}
