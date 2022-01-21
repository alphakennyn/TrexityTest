import React from "react";
import './styles.css';

const Datalist = ({ cars, setToPrimary }) => {

    const confirmSetToPrimary = (carId) => {
        if (window.confirm("Are you sure you want to set thisvehicle as Primary?")) {
            setToPrimary(carId)
        }
    }

  return (
    <div className="Datalist">
      <table>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
        {cars.map(({ id, make, model, year, isPrimary }) => (
          <tr key={id} className={`${isPrimary ? 'primary' : ''}`} onClick={() => confirmSetToPrimary(id)}>
            <td>{make}</td>
            <td>{model}</td>
            <td>{year}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Datalist;
