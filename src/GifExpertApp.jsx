import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Greys Anatomy' ]);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
        //setCategories( cat => [...cat, 'The Office']);
    }

    const onDeleteCategory = (deleteCategory) => {
        const newArray = categories.filter((category) => category !== deleteCategory);
        setCategories([ ...newArray ]);
    }

    return (
        <>

            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value)}
            />

            { 
                categories.map( category => 
                    <GifGrid 
                        key={ category } 
                        category={ category }
                        onDeleteCategory={ (value) => onDeleteCategory(value)}
                    />
                )
            }
       
        </>
    );
};