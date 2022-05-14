import {Wrapper} from "./searchBar.styles";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useState} from "react";

const SearchBar = () => {
    const [clicked, setClicked] = useState(false);
    return <>
        <Wrapper>
            <div className={`searchBarContainer ${clicked ? 'clicked' : ''}`}>
                <div className='searchBarContainer-first'>
                    <div>
                        <SearchOutlinedIcon sx={clicked && {color: 'rgb(29, 155, 240)'}}/>
                    </div>
                </div>
                <div className='searchBarContainer-second'>
                    <input placeholder='Search Twitter' onClick={() => setClicked(true)}
                           onBlur={() => setClicked(false)} className='searchBar' type="text" name="" id=""/>
                </div>
            </div>
        </Wrapper>
    </>
}

export default SearchBar;