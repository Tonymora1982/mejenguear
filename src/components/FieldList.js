import React,
{
  useState,
  useMemo
} from 'react';
import {
  fields
} from '../data/fields';
import FieldCard from './FieldCard';

export default function FieldList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');

  const uniqueSizes = useMemo(() => {
    const sizes = new Set(fields.map(field => field.size));
    return ['Todos', ...sizes];
  }, []);

  const filteredFields = useMemo(() => {
    return fields.filter(field => {
      const matchesSearchTerm = field.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSize = sizeFilter === '' || sizeFilter === 'Todos' || field.size === sizeFilter;
      return matchesSearchTerm && matchesSize;
    });
  }, [searchTerm, sizeFilter]);

  return ( <
    div className = "container py-5" >
    <
    h2 className = "mb-4" > Canchas Disponibles < /h2> <
    div className = "row mb-4" >
    <
    div className = "col-md-8" >
    <
    input type = "text"
    className = "form-control"
    placeholder = "Buscar por nombre..."
    value = {
      searchTerm
    }
    onChange = {
      e => setSearchTerm(e.target.value)
    }
    /> <
    /div> <
    div className = "col-md-4" >
    <
    select className = "form-select"
    value = {
      sizeFilter
    }
    onChange = {
      e => setSizeFilter(e.target.value)
    } >
    {
      uniqueSizes.map(size => ( <
        option key = {
          size
        }
        value = {
          size
        } > {
          size
        } < /option>
      ))
    } <
    /select> <
    /div> <
    /div> <
    div className = "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" > {
      filteredFields.length > 0 ? (
        filteredFields.map(field => ( <
          FieldCard key = {
            field.id
          }
          field = {
            field
          }
          />
        ))
      ) : ( <
        div className = "col" >
        <
        p > No se encontraron canchas con los criterios seleccionados. < /p> <
        /div>
      )
    } <
    /div> <
    /div>
  );
}
