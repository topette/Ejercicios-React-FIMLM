import PropTypes from 'prop-types'

function App(props){
    //console.log(props)
    return (
    <>
    <h1>{props.titulo}</h1>
    <p>{props.parrafo}</p>
    <p>{props.descripcion}</p>
    </>
    )
}

export default App;

App.propTypes = {// este va con p minuscula
    titulo: PropTypes.string.isRequired,
    parrafo: PropTypes.number.isRequired
}

//se definen asi:

App.defaultProps = {
    titulo: 'Soy un título',
    parrafo: 80,
    descripcion: 'una descripcion'
}


// forma de exportar 2
/*
export function App(){
    return <h1>Forma de exportar 2</h1>
}
*/