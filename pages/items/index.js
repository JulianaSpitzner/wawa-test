import items from "../../public/items.json"
import Link from "next/link";


export default function ItemsList() {

    return (
        <>
            <h1>Food & Beverages</h1>
            <Link href={`items/${items[0]}`}>{items[0]}</Link>
            <br></br>
            <Link href={`items/${items[1]}`}>{items[1]}</Link>
            <br></br>
            <Link href={`/items/${items[2]}`}>{items[2]}</Link>
        </>
    )
}