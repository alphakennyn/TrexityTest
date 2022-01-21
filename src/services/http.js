const initCarList = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: "2021",
    isPrimary: true,
  }, // default first car is primary
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: "2000",
    isPrimary: false,
  },
  {
    id: 3,
    make: "Tesla",
    model: "Pickup",
    year: "2030",
    isPrimary: false,
  },
];

/**
 *
 * @param {string} userId does nothing in demo
 * @returns
 */
export const fetchCar = (userId) => {
  // const carResult = await fetch(`www.mycarlist.com/${userId}`, {
  //     method: 'GET',
  //     headers: {
  //         // ... all the headers required
  //     }
  // });

  // To mock a fetch, we'll wait 500ms and return the initCarList defined from above
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(initCarList);
    }, 500);
  });
};

export const saveCar = async (carId, newParts) => {
  // const carResult = await fetch(`www.mycarlist.com/car/${carId}`, {
  //     method: 'PUT',
  //     headers: {
  //      ... all the headers required
  //     }
  //     body: {
  //      ...updated parts
  //     }
  // });

  // To mock a fetch, we'll wait 500ms and return the initCarList defined from above
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: carId,
        ...newParts,
      });
    }, 500);
  });
};
