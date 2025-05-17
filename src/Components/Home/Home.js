import { useEffect, useRef } from "react";
import { Articles } from "../Articles/Articles";
import { Subreddits } from "../Subreddits/Subreddits";
import { fetchReddit } from "../../API/RedditApi";
import { subreddits } from "../../API/subredditsApi";
import { addArticle, removeArticle, removeAll } from "../Articles/articlesSlice";
import { addSubreddit, removeAllSubreddits } from "../Subreddits/subredditsSlice";
import { setSearch } from "../Header/searchSlice";
import { selectChosen } from "../Subreddits/subredditsSlice";
import { selectSearch } from "../Header/searchSlice";
import { selectArticles } from "../Articles/articlesSlice";
import { useDispatch, useSelector } from "react-redux";

export function Home() {
    const dispatch = useDispatch();
    const subredditName = useSelector(selectChosen);
    const articlesArray = useSelector(selectArticles).array;
    const search = useSelector(selectSearch);

    useEffect(() => {
      async function loadArticles() {
        const arrayObj = await fetchReddit(subredditName);
        arrayObj.forEach(obj => dispatch(addArticle(obj)));
      }
      if (prevSubredditName.current !== subredditName) {
        dispatch(setSearch(''));
        prevSubredditName.current = subredditName;
      }
      dispatch(removeAll());
      loadArticles();

    }, [subredditName, search.isSearching, dispatch]);

    const prevSubredditName = useRef(subredditName);

    useEffect(() => {
      async function loadSubreddits() {
        const arraySub = await subreddits();
        arraySub.forEach(obj => dispatch(addSubreddit(obj)));
      }
      dispatch(removeAllSubreddits());
      loadSubreddits();
    }, [dispatch]);
    
    useEffect(() => {
      if (search.isSearching) {
        articlesArray.forEach(article => {
          if (!article.title || !article.title.toLowerCase().includes(search.searchString.toLowerCase())) {
            dispatch(removeArticle(article.id));
          }
        })
      }
    }, [search, articlesArray, dispatch])
    

    return (
      <div className="home">
        <Articles />
        <Subreddits />
      </div>
    );
}