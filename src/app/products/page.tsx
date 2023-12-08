import Link from "next/link"

export default function ProductList() {
    const productId = 100
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Products List</h1>
            <h3><Link href="products/0">Product 0</Link></h3>
            <h3><Link href="products/1">Product 1</Link></h3>
            <h3><Link href="products/2">Product 2</Link></h3>
            <h3><Link href="products/3">Product 3</Link></h3>
            <h3><Link href="products/4" replace>Product 4</Link></h3>
            <h3><Link href={`products/${productId}`}>Product {productId}</Link></h3>

        </>
    )
}