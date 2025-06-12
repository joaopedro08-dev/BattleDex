import { useState } from "react";
import { useTranslation } from "react-i18next";

function HeaderPokedex({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const { t } = useTranslation(); 

  const handleButtonClick = () => {
    onSearch(inputValue);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <header className="flex flex-col w-full bg-[#2d2f34]">
      <div className="header-search flex flex-col items-center justify-center bg-[#2d2f34]">
        <div className="flex flex-col text-white items-center w-full max-w-md">
          <label
            htmlFor="pokemon-search"
            className="label-search text-xl sm:text-2xl font-medium text-center"
          >
            {t("titlePokedex")}
          </label>

          <div className="flex items-center bg-white h-[38px] w-full rounded shadow-sm mt-2">
            <input
              type="search"
              id="pokemon-search"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={t("searchPlaceholder")}
              className="w-full h-full text-black outline-none text-base rounded-l px-2 focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="w-[40px] h-full bg-[#f26e23] flex items-center justify-center rounded-r transition-colors duration-300 hover:bg-orange-600"
              aria-label={t("searchButtonLabel")}
              onClick={handleButtonClick}
            >
              <i className="fa-solid fa-magnifying-glass text-white text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPokedex;
