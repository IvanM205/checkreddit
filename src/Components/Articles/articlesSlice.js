import { createSlice } from '@reduxjs/toolkit';
import searchIcon from '../../Assets/search-icon.png';

const initialState = {
    articles: {
        subreddit: null,
        array: [{
            title: "Default Post",
            imgSrc: searchIcon,
            author: 'Default Author',
            commentsNum: 420
        }]
    }
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticle: (state, action) => {
            state.articles.array.push(action.payload);
        },
        removeArticle: (state, action) => {
            state.articles.array.filter(article => article.id === action.payload.id);
        },
        removeAll: (state) => {
            state.articles.array = [];
        }
    }
});

export const selectArticles = (state) => state.articles.articles;
export const { addArticle, removeArticle, removeAll } = articlesSlice.actions;

export default articlesSlice.reducer;
