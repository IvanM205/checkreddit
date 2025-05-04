import { Articles } from "../Articles/Articles";
import { Subreddits } from "../Subreddits/Subreddits";

export function Home() {
    return (
      <div className="home">
        <Articles />
        <Subreddits />
      </div>
    );
}