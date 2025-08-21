import React from 'react';
import { Link } from 'react-router-dom';

export default function FieldCard({ field }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={field.image} className="card-img-top" alt={`Foto de ${field.name}`} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{field.name}</h5>
          <p className="card-text">{field.location}</p>
          <p className="card-text"><strong>{field.price}</strong></p>
        </div>
        <div className="card-footer">
          <Link to={`/cancha/${field.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
