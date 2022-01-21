import './App.css';
import { useEffect, useState } from 'react';
import { fetchCar, saveCar } from './services/http';
import Datalist from './components/DataList/Datalist';

function App() {
  const [carList, setCarList] = useState([])

  useEffect(() => {
    async function getCars() {
      const cars = await fetchCar();
      setCarList(cars);
    }
    getCars();
  }, [])

  /**
   * Send request to update car to primary + update car status in local state
   * @param {number} carId 
   */
  const setPrimary = async (carId) => {
    try {
      const newUpdatedCar = carList.find(({id}) => id === carId)
      await saveCar(carId, newUpdatedCar)

      const updatedCarList = carList.map(car => {
          car.isPrimary = car.id === carId
          return car;
      });
      
      setCarList(updatedCarList)
    } catch (error) {
      alert('Something went wrong :( Please try again');
    }
}
  return (
    <div className="App">
      <header className="App-header">
        Car Management System
        <span>Welcome</span>
      </header>
      {
        carList.length === 0 ? 'No cars available' : <Datalist cars={carList} setToPrimary={setPrimary}/>
      }
    </div>
  );
}

export default App;
