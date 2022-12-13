
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

    //SIempre se te olvida, usa los hooks como variables de un componente te permite controlar los estados, su valores, efectos, disparos como useEffect, por cada nuevo valor se volvera a disparar, no por toda la lista
    

   const {images, isLoading} = useFetchGifs(category);

   
    return(
        <>
            <h3 >{ category }</h3>
            {
                isLoading && ( <h2> Cargando...</h2>)
            }
            <div className='card-grid'>
                
                {images.map( (image) => (
                    
                    <GifItem key={image.id} 
                    { ...image }
                    />

                ))
                }
            </div>


            
        
     
        </>
    )
}
