export default function Reviews({ params }: {
    params: { productId: string; reviewId: string; }
}) {
    return <h1>Reviews of {params.reviewId} for product {params.productId}</h1>
}