import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category, onDeleteCategory }) => {
    
    const { images, isLoading } = useFetchGifs( category );

    const deleteElement = () => {
        onDeleteCategory(category);
    };

    return (
        <>
            <h3>{ category }</h3>
            <button className="btn-delete" onClick={ deleteElement }>Delete</button>
            
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
            </div>        
        </>
    );
};