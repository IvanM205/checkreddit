import { useEffect } from "react";
import { Articles } from "../Articles/Articles";
import { Subreddits } from "../Subreddits/Subreddits";
import { fetchReddit } from "../../API/RedditApi";
import { subreddits } from "../../API/subredditsApi";
import { addArticle, removeArticle, removeAll } from "../Articles/articlesSlice";
import { addSubreddit, removeSubreddit, removeAllSubreddits } from "../Subreddits/subredditsSlice";
import { selectChosen } from "../Subreddits/subredditsSlice";
import { useDispatch, useSelector } from "react-redux";

export function Home() {
    const dispatch = useDispatch();
    const subredditName = useSelector(selectChosen);
    console.log(subredditName);

    useEffect(() => {
      async function loadArticles() {
        const arrayObj = await fetchReddit(subredditName);
        arrayObj.forEach(obj => dispatch(addArticle(obj)));
      }
      dispatch(removeAll());
      loadArticles();
    }, [dispatch, subredditName]);

    useEffect(() => {
      async function loadSubreddits() {
        const arraySub = await subreddits();
        arraySub.forEach(obj => dispatch(addSubreddit(obj)));
      }
      loadSubreddits();
    }, [dispatch]);

    return (
      <div className="home">
        <Articles />
        <Subreddits />
      </div>
    );
}