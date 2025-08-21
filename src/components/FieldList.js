import React from 'react';
import { fields } from '../data/fields';
import FieldCard from './FieldCard';

export default function FieldList() {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Canchas Disponibles</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {fields.map(field => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
}
