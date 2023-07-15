import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../components/Context/DataContext'
import './productos.css'

const Productos = () => {
  const { data } = useContext(dataContext);

  return data.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.imagen} alt="img" className="product-image" />
      <h1 className="product-title">{product.nombre}</h1>
      <p className="product-price">{product.precio}$</p>
      <p className="product-description">{product.descripcion}</p>
    </div>
  ));
};

export default Productos