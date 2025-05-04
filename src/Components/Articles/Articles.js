import { selectArticles } from "./articlesSlice";
import { useSelector } from 'react-redux';
import { Post } from '../Post/Post';

export function Articles() {
    const articles = useSelector(selectArticles);
    const array = articles.array;

    return (
        <div className="articles">
          {(array.length > 0) ? (array.map((obj) => {
            return (<article key={obj.id} ><Post obj={obj} /></article>)
          })) : (<span>No articles available</span>)}
        </div>
    );
}