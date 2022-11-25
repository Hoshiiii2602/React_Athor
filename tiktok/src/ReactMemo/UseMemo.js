import { useState, memo, useMemo } from "react";


function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProduct] = useState([])


    const handleSubmit = () => {
        setProduct([...products, {
            name,
            price: +price
        }])

        setName('');
        setPrice('');
    }

    const total = useMemo(() => {
        const result = products.reduce((result, total) => {
            console.log('xem nào');
            return result + total.price
        }, 0)

        return result;
    }, [products])

    return (
        <div>
            <input
                value={name}
                placeholder="Name..."
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button
                onClick={handleSubmit}
            >ADD</button>
            <br />

            Total : {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default memo(UseMemo); 