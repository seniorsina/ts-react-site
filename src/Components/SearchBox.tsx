import { debug, log } from 'console'
import { useState } from 'react'
import SearchIcon from '../asset/images/SearchIcon.png'

const SearchBox = () => {

  const [isShow, SetHidden] = useState(false);
  const handleClick=()=>
  {   
   SetHidden(!isShow);   
  }
  return (
    <div className="search-box">
     {isShow && <input type="search" name="search-input" id="" />}
      <img onClick={handleClick} src={SearchIcon} alt="search icon" /> 
    </div>
  )
}

export default SearchBox;