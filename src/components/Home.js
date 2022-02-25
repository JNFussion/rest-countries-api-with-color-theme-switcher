import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import Item from "./item";
import SelectRegion from "./SelectRegion";

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const reg = searchParams.get("reg");
  const navigate = useNavigate();

  useEffect(() => {
    if (reg) {
      fetch(`https://restcountries.com/v3.1/region/${reg.toLowerCase()}`).then(
        (response) =>
          response.json().then((data) => {
            setCountries(data);
          })
      );
    } else {
      fetch("https://restcountries.com/v2/all").then((response) =>
        response.json().then((data) => {
          setCountries(data);
        })
      );
    }

    return () => {};
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/detail/${e.target.country.value}`);
  }

  return (
    <main className="max-w-[1440px] mx-auto py-10 px-4 lg:px-0">
      <div className="lg:flex justify-between">
        <form
          action=""
          className="lg:w-1/3 px-10 py-4 flex items-center shadow-md text-battleship-gray dark:text-white dark:bg-gunmetal"
          onSubmit={handleSubmit}
        >
          <button type="submit" className="px-4">
            <FaSearch />
          </button>
          <input
            type="text"
            name="country"
            placeholder="Search for a country"
            className="w-full focus:outline-none border-b-2  dark:bg-gunmetal border-b-white dark:border-b-battleship-gray focus:dark:border-b-white focus:border-b-battleship-gray"
          />
        </form>
        <div>
          <SelectRegion selected={reg} />
        </div>
      </div>
      <div className="my-10 grid grid-cols-layout gap-x-20 gap-y-14 justify-center lg:justify-start">
        {countries.map(({ flags, name, population, region, capital }) => (
          <Item
            key={name.common || name}
            flagUrl={flags.svg}
            name={name.common || name}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
