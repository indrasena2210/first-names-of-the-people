const namesList = require("../country/state/city/index");

const func = require("../utilities/utils/index");

const getPeopleInCity = (namesList) => {
  return func(namesList);
};

console.log(getPeopleInCity(namesList));

module.exports = getPeopleInCity;
