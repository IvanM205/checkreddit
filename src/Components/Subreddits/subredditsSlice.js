import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    subreddits: {
        array: [],
        chosen: null,
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
        removeAllSubreddits: (state) => {
            state.subreddits.array = [];
        },
        chooseSubreddit: (state, action) => {
            state.subreddits.chosen = action.payload;
        }
    }
})

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectChosen = (state) => state.subreddits.subreddits.chosen;
export const { addSubreddit, removeSubreddit, removeAllSubreddits, chooseSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;

