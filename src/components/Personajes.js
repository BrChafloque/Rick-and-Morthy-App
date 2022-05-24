export default function Personajes(props){
    const { personajes } = props;
    return(
        <div>
            <h1>Personajes</h1>
            { personajes.map((personaje, index) => (
                <div key={index}>
                    <img src={personaje.image} placeholder={personaje.name}/>
                    <p>Nombre: { personaje.name }</p>
                    <p>Especie: { personaje.species }</p>
                </div>
            )) } 
        </div>
    )
}