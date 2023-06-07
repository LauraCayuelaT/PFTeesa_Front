import { NavLink } from 'react-router-dom';


export const SearchBar = () => {

    return (
    <div className="flex items-center w-[30%] justify-evenly">
    <input
      className="w-[60%] h-[50%] outline-none text-black bg-blue-200"
      type="search"
      placeholder="Buscar..."
    />
    <NavLink className="buttonadd" to="/home">
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        <box-icon name="search-alt"></box-icon>
      </button>
    </NavLink>
  </div>
    );
};
