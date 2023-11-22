const SearchCountry = ({ onchange }) => {
    return (
        <form>
        <div>
          search: <input type="text" onChange={onchange}/>
        </div>
      </form>
    )
}

export default SearchCountry
