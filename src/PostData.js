import React, { useState, useEffect } from 'react';

const PostData = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch("http://localhost/database_project/index.php")

        .then( res => res.json() )
        .then( result => {
            console.log(result);
        })
    }, []);

    return(
        <div>
        </div>
    )
}

export default PostData;