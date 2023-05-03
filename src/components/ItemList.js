import React from 'react';

const ItemList = () => {
    const items = ['cake', 'juice', 'cookie', 'tea']
    let itemComponents = items.map((item, idx) => {
        return <div key={item+idx}>{item}</div>
    })
    return ( 
        <>
            {itemComponents}
        </>
     );
}
 
export default ItemList;