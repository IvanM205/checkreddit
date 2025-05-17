
export async function fetchCommentsByPostId(postId) {
    try {
        // const url = `/comments/${postId}.json`;
        const url = `https://www.reddit.com/r/${subredditName}/.json`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch comments for post ${postId}`);
        }

        const data = await response.json();
        const commentItems = data[1]?.data?.children || [];
        console.log("Comments", commentItems);
        const comments = commentItems
            .filter(item => item.kind === 't1')
            .map(item => {
                const c = item.data;

                return {
                    author: c.author,
                    avatarUrl: `https://www.redditstatic.com/avatars/avatar_default_02_${(c.author.length % 7)}_F2E1C2.png`, // mock avatar
                    timestamp: new Date(c.created_utc * 1000).toLocaleString(),
                    content: c.body.split('\n').filter(line => line.trim() !== '')
                };
            });

        return comments;

    } catch (err) {
        console.error(`Error in fetchCommentsByPostId(${postId}):`, err);
        return [];
    }
}