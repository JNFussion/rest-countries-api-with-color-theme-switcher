import React from "react";
import PropTypes from "prop-types";

function Item({ flagUrl, name, population, region, capital }) {
  return (
    <article className="h-80 flex flex-col bg-white dark:bg-gunmetal dark:text-white rounded shadow">
      <div className="flex-1 overflow-hidden rounded-t">
        <a href={`/detail/${name}`}>
          <img src={flagUrl} alt="" />
        </a>
      </div>
      <section className="flex-1 p-4">
        <h2 className="my-4 font-bold text-xl">{name}</h2>
        <p className="flex gap-2">
          <span className="font-semibold">Population:</span>
          <span className="font-light">{population}</span>
        </p>
        <p className="flex gap-2">
          <span className="font-semibold">Region:</span>
          <span className="font-light">{region}</span>
        </p>
        <p className="flex gap-2">
          <span className="font-semibold">Capital:</span>
          <span className="font-light">{capital}</span>
        </p>
      </section>
    </article>
  );
}
Item.propTypes = {
  flagUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};
export default Item;
