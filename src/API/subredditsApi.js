
export async function subreddits() {
    try {
        const limit = 100;
        const url = new URL("https://www.reddit.com/subreddits/.json");
        url.searchParams.set('limit', limit.toString())
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network respone was not ok");
        };
        const data = await response.json();
        console.log("Subredits", data);
        const subreddits = data.data.children.map(child => ({
                title: child.data.title,
                src: child.data.icon_img,
                name: child.data.display_name
            }));
        return subreddits;
    } catch(err) {
        console.error(err);
        return [];
    }
}