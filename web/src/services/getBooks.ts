
interface Book {
    id: number;
    title: string;
    author: string;
    note: string;
    lastModificationDate: Date;
    img: string;
}

export default async function getBooks() : Promise<Book[]> {
    try {
        const res = await fetch('http://localhost:3001/books');
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
    
}