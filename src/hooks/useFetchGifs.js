import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async() => {
        const imagen = await getGifts( category );
        setImages(imagen);
        setIsLoading(false);
        
        
    }

    //En este contexto, se guarda como los demas y solo se cambia cuando es nuevo valor
    useEffect(() => {
      getImages()
    
      
    }, [ ])
  return {
      images,
      isLoading

  }
}
