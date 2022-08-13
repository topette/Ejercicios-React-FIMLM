// codigo rapido rafc
import React from 'react'
import './bogota.css'

const nombre = [2,5,8,2,"Manzana"]
const arreglo = {
  nombre: "Leonardo",
  apellido: "Osorio"
}

export const Bogota = ({titulo, parrafo}) => {

if(!titulo){
  throw new error('Soy obligatorio')
}

  return (
    <>
    <h1>Titulo de la página en React</h1>
    <div>{4*3}</div>
    <p>{nombre}</p>
    <p>{JSON.stringify(arreglo)}</p>
    <h1>{titulo}</h1>
    <p>{parrafo}</p>
    </>
  )
}

export default Bogota;
