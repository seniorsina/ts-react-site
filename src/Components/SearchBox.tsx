import SearchIcon from '../asset/images/SearchIcon.png'
const SearchBox = () => {

  return (
    <div className="search-box">
      <input type="search" name="search-input" id="" />
      <img src={SearchIcon} alt="search icon" /> 
    </div>
  )
}

export default SearchBox;