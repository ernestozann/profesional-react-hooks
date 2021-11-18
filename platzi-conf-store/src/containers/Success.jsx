import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.css'

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address)

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`Gracias ${buyer.name}, por tu compra`}</h2>
        <span>Tu pedido llegara de 3 a 5 dias habiles a tu direccion:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
