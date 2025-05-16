import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import searchIcon from '../../Assets/search-icon.png';

const initialState = {
    articles: {
        array: []
    }
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticle: (state, action) => {
            state.articles.array.push(action.payload);
            const idx = state.articles.array.length;
            state.articles.array[idx-1].idx = uuidv4();
        },
        removeArticle: (state, action) => {
            state.articles.array = state.articles.array.filter(
                article => (article.id !== action.payload)
                
            );
        },
        removeAll: (state) => {
            state.articles.array = [];
        }
    }
});

export const selectArticles = (state) => state.articles.articles;
export const { addArticle, removeArticle, removeAll } = articlesSlice.actions;

export default articlesSlice.reducer;


/*
{
    title: "Default Post",
    imgSrc: '../../Assets/search-icon.png',
    author: 'Default Author',
    commentsNum: 420
}
*/