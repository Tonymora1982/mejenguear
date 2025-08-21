import React from 'react';
import { useParams } from 'react-router-dom';
import { fields } from '../data/fields';

export default function FieldDetails() {
  const { id } = useParams();
  const field = fields.find(f => f.id === parseInt(id));

  if (!field) {
    return (
      <div className="container py-5">
        <h2>Cancha no encontrada</h2>
        <p>La cancha que buscas no existe o fue removida.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <img src={field.image} className="img-fluid rounded mb-4" alt={`Foto de ${field.name}`} />
          <h1>{field.name}</h1>
          <p className="lead">{field.location}</p>
          <p>{field.description}</p>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reservar</h5>
              <p className="card-text"><strong>Precio:</strong> {field.price}</p>
              <p className="card-text"><strong>Tamaño:</strong> {field.size}</p>
              <h6 className="mt-4">Servicios Incluidos:</h6>
              <ul className="list-group list-group-flush">
                {field.amenities.map(amenity => (
                  <li key={amenity} className="list-group-item">{amenity}</li>
                ))}
              </ul>
              <button className="btn btn-success w-100 mt-3">Reservar Ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
