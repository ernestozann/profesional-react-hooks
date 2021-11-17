import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const { state,addToBuyer } = useContext(AppContext);
  const form = useRef(null);

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
  }

  return (
    <div className="Information">
      <div className="Infomation-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Infomation-form">
          <form ref={form}>
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
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Proceder al pago</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
