import { useState } from 'react';
import { setSearch } from './searchSlice';
import { useDispatch } from 'react-redux';
import icon from '../../Assets/checkreddit-icon.png';
export function Header() {
    const placeHolder = 'Search'
    const [ value, setValue] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setSearch(value));
        setValue('');
    }

    return (
        <header>
            <img className="header-icon" src={icon} />
            <h2>CheckReddit</h2>
            <form className="searchForm" onSubmit={submitHandler}>
                <input type="text" name="searchBar" id="searchBar" 
                    placeholder={placeHolder} value={value} onChange={e => setValue(e.target.value)} />
                <button type="submit"></button>
            </form>
        </header>
    );
}