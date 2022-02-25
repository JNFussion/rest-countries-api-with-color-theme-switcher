import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";

function SelectRegion({ selected }) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-fit">
      <div className="mt-1 relative">
        <button
          type="button"
          className="relative w-full text-eerie-black dark:text-white bg-white dark:bg-gunmetal border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1  sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded={show}
          aria-labelledby="listbox-label"
          onClick={() => setShow((prevState) => !prevState)}
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">
              {" "}
              {selected || "Filter By Region"}
            </span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <FaChevronDown />
          </span>
        </button>
        <ul
          className={`${
            show ? "" : "hidden"
          } absolute z-10 mt-1 w-full text-eerie-black dark:text-white bg-white dark:bg-gunmetal shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
          tabIndex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li className=" cursor-default select-none relative py-2 pl-3 pr-9">
            <div className="flex items-center">
              <a
                href="/"
                onClick={() => {
                  setShow(false);
                }}
              >
                <span className="font-normal ml-3 block truncate">
                  Reset filter
                </span>
              </a>
            </div>
          </li>
          {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((reg) => (
            <li className="cursor-default select-none relative py-2 pl-3 pr-9">
              <div className="flex items-center">
                <a
                  href={`/?reg=${reg}`}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <span className="font-normal ml-3 block truncate">{reg}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SelectRegion.propTypes = {
  selected: PropTypes.string,
};

SelectRegion.defaultProps = {
  selected: "Filter By Region",
};

export default SelectRegion;
