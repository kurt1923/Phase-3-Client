import React, { useEffect } from 'react'

function Itemslist() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch(`http://http://127.0.0.1:9292/items`)
        .then((r) => r.json())
        .then((data) => {
            setItems(data);
        });
    }, []);

   
    return (
    <div>Itemslist</div>
  )
}

export default Itemslist