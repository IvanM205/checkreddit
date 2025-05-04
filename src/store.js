import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './Components/Header/searchSlice';
import articlesSlice from './Components/Articles/articlesSlice';

export default configureStore({
    reducer: {
        search: searchSlice,
        articles: articlesSlice
    }
});