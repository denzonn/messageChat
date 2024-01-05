
const Search = () => {
  return (
    <div className='flex flex-row gap-x-2 items-center px-4 py-1 border rounded-md w-full justify-between'>
        <input type="text" placeholder='Search' className='bg-transparent focus:outline-none'/>
        <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default Search