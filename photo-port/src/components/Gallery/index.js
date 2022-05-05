import React from 'react';

function Gallery(props) {
    const currentCategory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    }
    return (
        <section>
            <h1>{currentCategory.name}</h1>
        </section>
    )
}
 
    
export default Gallery;