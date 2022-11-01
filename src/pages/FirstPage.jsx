import {useContador} from "../hooks/useContador"


export const FirstPage = () =>{

const{valor, suma, resta, reset} = useContador(200, 10, 30);

    return (

        <>
            <h1>Contador Melosky</h1>
            <h1>{valor}</h1>
            <button onClick={() => resta()}>Resta</button>
            <button onClick={() => suma()}>Suma</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}