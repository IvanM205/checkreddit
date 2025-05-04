import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    subreddits: {
        array: []
    }
}

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        addSubreddit: (state, action) => {
            state.subreddits.array.push(action.payload);
            const idx = state.subreddits.array.length;
            state.subreddits.array[idx-1].id = uuidv4();
        },
        removeSubreddit: (state, action) => {
            state.subreddits.array = state.subreddits.array.filter(subreddit => (subreddit.id !== action.payload));
        },
        removeAll: (state) => {
            state.subreddits.array = [];
        }
    }
})

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const { addSubreddit, removeSubreddit, removeAll } = subredditsSlice.actions;

export default subredditsSlice.reducer;


/*
{
  title: "Subreddit title",
  src: "src%%%",
  articles: []
}
*/