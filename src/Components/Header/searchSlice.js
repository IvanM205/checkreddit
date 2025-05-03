import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: {
      isSearching: false,
      searchString: ''
    }
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            if (action.payload === '') {
                state.search.isSearching = false;
                state.search.searchString = '';
            } else {
                state.search.isSearching = true;
                state.search.searchString = action.payload;
            }
        }
    }
});

export const selectSearch = (state) => state.search;
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;


