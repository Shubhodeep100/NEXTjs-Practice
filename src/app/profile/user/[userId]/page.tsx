export default function User({ params }: {
    params: { userId: string }
}) {
    return <h1>Details of the user we have {params.userId}</h1>
}