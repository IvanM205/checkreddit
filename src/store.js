import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './Components/Header/searchSlice';

export default configureStore({
    reducer: {
        search: searchSlice
    }
});