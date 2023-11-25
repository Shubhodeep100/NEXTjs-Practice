import { notFound } from "next/navigation"

export default function Reviews({ params }: {
    params: { productId: string; reviewId: string; }
}) {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>Reviews of {params.reviewId} for product {params.productId}</h1>
    )
}