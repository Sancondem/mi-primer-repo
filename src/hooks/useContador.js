import { useState } from "react"

export const useContador = (initialState, initialSuma, initialResta) => {
        const [valor, setValor] = useState(initialState)


        const suma = (num) => {


                setValor(Math.max(valor + initialSuma, 0))
        }

        const resta = (num) => {


                setValor(Math.max(valor - initialResta, 0))
        }

        const reset = () => {


                setValor(initialState)
        }

        return {


                valor,
                suma,
                resta,
                reset
        }
}