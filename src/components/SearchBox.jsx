import assets from '../assets/images/index';

const SearchBox = () => {
  return (
    <>
        <div className="max-w-[600px] bg-[#f1f3f3] md:p-6 p-4 rounded-md">
            <div className=" p-5 bg-white rounded-md">
                <h2 className="text-[20px]">Find Food</h2>
                <input type="text" placeholder="Search Food" className="w-full border-[3px] my-2 border-[#495E57] rounded-md outline-none p-3" />
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full"><img src={assets.dish1} className="rounded-full w-6" alt="" /><h3>Salad</h3></div>
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full"><img src={assets.dish2} className="rounded-full w-6" alt="" /><h3>Pasta</h3></div>
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full"><img src={assets.dish3} className="rounded-full w-6" alt="" /><h3>Drinks</h3></div>
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full"><img src={assets.dish4} className="rounded-full w-6" alt="" /><h3>Breakfast</h3></div>
                <div className="md:p-2 p-1 px-2 md:px-3 gap-2 flex border border-gray-300 rounded-full"><img src={assets.dish5} className="rounded-full w-6" alt="" /><h3>Beaf</h3></div>
            </div>
        </div>
    </>
  )
}

export default SearchBox