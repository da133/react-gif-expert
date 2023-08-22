import PropTypes from 'prop-types';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDeleteCategory }) => {
    
    const { images, isLoading } = useFetchGifs( category );

    //Está función la agregue yo
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    onDeleteCategory: PropTypes.func
}