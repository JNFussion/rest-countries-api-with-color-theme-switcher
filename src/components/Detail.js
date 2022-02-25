import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const [country, setCountry] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${params.country}`).then(
      (response) => response.json().then((data) => setCountry(data[0]))
    );
    return () => {};
  });

  function handleClick(code) {
    fetch(`https://restcountries.com/v2/alpha/${code}`).then((response) =>
      response.json().then((data) => {
        console.log(data);
        navigate(`/detail/${data.name}`);
      })
    );
  }

  if (country) {
    return (
      <main className="max-w-[1440px] mx-auto dark:text-white">
        <div className="my-16">
          <button
            type="button"
            className="flex items-center gap-4 px-6 py-2 border rounded bg-white dark:bg-gunmetal dark:border-0 shadow"
            onClick={() => navigate(-1)}
          >
            <span>
              <FaArrowLeft />
            </span>
            <span>Back</span>
          </button>
        </div>

        <article className="max-h-[480px] flex gap-20">
          <div className="w-2/4">
            <img src={country.flags.svg} alt="" className="h-full" />
          </div>
          <div className="flex-1">
            <section>
              <h2 className="my-10 text-2xl font-bold">{country.name}</h2>
              <ul className="flex flex-col flex-wrap gap-y-4 gap-x-20 max-h-52 border-black">
                <li>
                  <span className="font-semibold">Native Name: </span>
                  <span className="font-light">{country.nativeName}</span>
                </li>
                <li>
                  <span className="font-semibold">Population: </span>
                  <span className="font-light">
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Region: </span>
                  <span className="font-light">{country.region}</span>
                </li>
                <li>
                  <span className="font-semibold">Sub Region: </span>
                  <span className="font-light">{country.subregion}</span>
                </li>
                <li>
                  <span className="font-semibold">Capital: </span>
                  <span className="font-light">{country.capital}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Top Level Domain:</span>
                  <ul className="flex">
                    {country.topLevelDomain.map((d) => (
                      <li className="font-light">{d}</li>
                    ))}
                  </ul>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Currencies:</span>
                  <ul className="flex">
                    {country.currencies.map((c) => (
                      <li className="font-light">{c.name}</li>
                    ))}
                  </ul>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Languages</span>
                  <ul className="flex gap-4">
                    {country.languages.map((l) => (
                      <li className="font-light">{l.name}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </section>
            <section className="my-16 flex items-center gap-4">
              <h3 className="font-semibold">Border Countries:</h3>
              <ul className="flex flex-wrap gap-3">
                {country.borders &&
                  country.borders.map((c) => (
                    <li className="font-light">
                      <button
                        type="button"
                        className="py-2 px-4 rounded border shadow bg-white dark:bg-gunmetal dark:border-0 "
                        onClick={() => handleClick(c)}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
              </ul>
            </section>
          </div>
        </article>
      </main>
    );
  }
  return (
    <article>
      <p>Loading...</p>
    </article>
  );
}

export default Detail;
