/* eslint-disable react/prop-types */
import { SearchContainer, SearchInput } from './style'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = ({ setSearch }) => {
  return (
    <SearchContainer>
      <AiOutlineSearch size={25} className="search-icon" />
      <SearchInput type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
    </SearchContainer>
  )
}

export default Search
