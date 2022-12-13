import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    
    
    const [inputValue, setinputValue] = useState('');

    //Se cambia el valor, desde el regreso del evento, con la propiedad de target y su valor, asi se cambia el estado de inputValue
    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory(inputValue.trim())
        setinputValue('');
    }

    return (
        <>

        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange = { onInputChange }
            />
        </form>
        
        </>
    )
}