import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './Components/Header/searchSlice';
import articlesSlice from './Components/Articles/articlesSlice';
import subredditsSlice from './Components/Subreddits/subredditsSlice';

export default configureStore({
    reducer: {
        search: searchSlice,
        articles: articlesSlice,
        subreddits: subredditsSlice
    }
});