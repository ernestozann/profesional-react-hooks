import React from 'react';
import '../styles/components/Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Infomation-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Infomation-form">
          <form action="">
            <input type="text" placeholder="Full name" name='name' />
            <input type="text" placeholder="Email" name='email' />
            <input type="text" placeholder="Address" name='address' />
            <input type="text" placeholder="Apto" name='apto' />
            <input type="text" placeholder="City" name='city' />
            <input type="text" placeholder="Country" name='country' />
            <input type="text" placeholder="State" name='state' />
            <input type="text" placeholder="Zip code" name='cp' />
            <input type="text" placeholder="Phone" name='phone' />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Regresar
          </div>
          <div className="Information-next">
            Continuar al pago
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
