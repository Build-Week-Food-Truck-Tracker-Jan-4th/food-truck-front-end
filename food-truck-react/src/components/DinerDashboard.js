import React, { useState } from "react";

const DinerDashboard = (props) => {
  const initialResults = props.trucks;
  const [results, setResults] = useState(initialResults);
  const [filteredResults, setFilteredResults] = useState(initialResults);
  const [noResults, setNoResults] = useState(false);
  const [ratingAvgAreVisible, setRatingAvgAreVisible] = useState(false);
  const [cuisineTypesAreVisible, setCuisineTypesAreVisible] = useState(false);

  const toggleRatingAvgIsVisible = (event) => {
    setRatingAvgAreVisible(!ratingAvgAreVisible);
  }

  const toggleCuisineTypeIsVisible = (event) => {
    setCuisineTypesAreVisible(!cuisineTypesAreVisible);
  };

  const handleFilterByAvgRating = (minNumberOfStars, maxNumberOfStars) => {
    console.log(filteredResults);
    let newFilteredResults = filteredResults.filter((res) => {
      return res.customerRatingAvg >= minNumberOfStars && res.customerRatingAvg <= maxNumberOfStars;
    });
    console.log(newFilteredResults);
    setFilteredResults(newFilteredResults);
    console.log(filteredResults);
  }

  const handleFilterByCuisineType = (event, cuisineType) => {
    let newFilteredResults = filteredResults.filter((res) => {
      return res.cuisineType === cuisineType;
    });
    setFilteredResults(newFilteredResults);
  };

  const handleApplyFilters = (event => {
    setResults(filteredResults);
    if(filteredResults.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  })

  const handleUndoFilters = (event) => {
    setResults(initialResults);
    setFilteredResults(initialResults);
    setNoResults(false);
  }

  return (
    <div>
      <h3>All Food Trucks</h3>
      <button>Filter By Location</button>
      <button onClick={toggleRatingAvgIsVisible}>Filter By Rating Average</button>
      <button onClick={toggleCuisineTypeIsVisible}>
        Filter By Cuisine Type
      </button>
      {ratingAvgAreVisible && <div>
        <button onClick={(event) => handleFilterByAvgRating(1, 2)}>1-2 Stars</button>
        <button onClick={(event) => handleFilterByAvgRating(3, 4)}>3-4 Stars</button>
        <button onClick={(event) => handleFilterByAvgRating(5, 5)}>5 Stars</button>
        </div>}
      {cuisineTypesAreVisible && (
        <div>
          {props.trucks.map((truck, index) => {
            return (
              <div key={index}>
                <button
                  onClick={(event) => handleFilterByCuisineType(event, truck.cuisineType)}
                >
                  {truck.cuisineType}
                </button>
              </div>
            );
          })}
          <div>
            <button onClick={handleApplyFilters}>Apply Filters</button>
          </div>
          <div>
            <button onClick={handleUndoFilters}>Undo Filters</button>
          </div>
        </div>
      )}
      <div>
      {noResults && <div>Oops, it looks like there aren't any trucks that match your filter...</div>}
      </div>
      {results.map((truck, index) => {
        return (
          <div key={index}>
            <img src={truck.imageOfTruck} alt="foodtruck" />
            <h3>{truck.truckName}</h3>
            <div>
              <h4>Location</h4>
              <p>
                <strong>Latitude:</strong>{" "}
                {truck.currentLocation.location.latitude}
              </p>
              <p>
                <strong>Longitude:</strong>{" "}
                {truck.currentLocation.location.longitude}
              </p>
            </div>
            <div>
              <h4>Ratings</h4>
              <div>
                <h5>Rating Average</h5>
                <p>{truck.customerRatingAvg}</p>
              </div>
              <div>
                <h5>All Ratings</h5>
                {truck.customerRatings.map((rating, index) => {
                  return <li key={index}>{rating}</li>;
                })}
              </div>
              <div>
                <h5>Menu</h5>
                {truck.menu.map((menuItem, index) => {
                  return (
                    <li key={index}>
                      <strong>${menuItem.itemPrice}</strong> {menuItem.itemName}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DinerDashboard;
