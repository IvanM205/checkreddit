
export async function subreddits() {
    try {
        const response = await fetch("https://www.reddit.com/subreddits/popular.json");
        if (!response.ok) {
            throw new Error("Network respone was not ok");
        };
        const data = await response.json();
        console.log(data);
        const subreddits = data.data.children
            .map(child => ({
                title: child.data.title,
                src: child.data.icon_img || child.data.community_icon,
                name: child.data.name
            }));
        return subreddits;
    } catch(err) {
        console.error(err);
        return [];
    }
}