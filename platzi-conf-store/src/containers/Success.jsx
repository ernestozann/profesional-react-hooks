import React from 'react';
import '../styles/components/Success.css'

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias Eru, por tu compra</h2>
        <span>Tu pedido llegara de 3 a 5 dias habiles a tu direccion:</span>
        <div className="Success-map">
          Google Maps
        </div>
      </div>
    </div>
  );
};

export default Success;
