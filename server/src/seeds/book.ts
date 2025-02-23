import { BookAttributes } from "../services/database";


const bookSeeds: BookAttributes[] = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        note: 5,
        description: "A classic novel of racism and injustice.",
        last_modification: new Date('2023-01-01'),
        img: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        note: 4.5,
        description: "A dystopian novel about totalitarianism.",
        last_modification: new Date('2023-02-01'),
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png"
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        note: 4,
        description: "A novel about the American dream.",
        last_modification: new Date('2023-03-01'),
        img: "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1"
    },
    {
        id: 4,
        title: "Moby Dick",
        author: "Herman Melville",
        note: 4,
        description: "A novel about the obsession with a white whale.",
        last_modification: new Date('2023-04-01'),
        img: "https://m.media-amazon.com/images/I/610qaD5PskL.jpg"
    },
    {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        note: 4.5,
        description: "A romantic novel about manners and marriage.",
        last_modification: new Date('2023-05-01'),
        img: "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 6,
        title: "War and Peace",
        author: "Leo Tolstoy",
        note: 5,
        description: "A novel about the French invasion of Russia.",
        last_modification: new Date('2023-06-01'),
        img: "https://m.media-amazon.com/images/I/91FXycpulgL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        note: 4,
        description: "A novel about teenage rebellion and angst.",
        last_modification: new Date('2023-07-01'),
        img: "https://m.media-amazon.com/images/I/91fQEUwFMyL.jpg"
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        note: 4.5,
        description: "A fantasy novel about a hobbit's adventure.",
        last_modification: new Date('2023-08-01'),
        img: "https://m.media-amazon.com/images/I/81hylMcxa3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 9,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        note: 4.5,
        description: "A dystopian novel about book burning.",
        last_modification: new Date('2023-09-01'),
        img: "https://m.media-amazon.com/images/I/61wtqek8ONL.jpg"
    },
    {
        id: 10,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        note: 4.5,
        description: "A novel about the experiences of the titular character.",
        last_modification: new Date('2023-10-01'),
        img: "https://m.media-amazon.com/images/I/81pwJjgcwwL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 11,
        title: "Brave New World",
        author: "Aldous Huxley",
        note: 4.5,
        description: "A dystopian novel about a futuristic society.",
        last_modification: new Date('2023-11-01'),
        img: "https://m.media-amazon.com/images/I/81p56WUuDbL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 12,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        note: 4,
        description: "A novel about the intense relationship between Catherine and Heathcliff.",
        last_modification: new Date('2023-12-01'),
        img: "https://m.media-amazon.com/images/I/91WTAm9DPzL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 13,
        title: "The Odyssey",
        author: "Homer",
        note: 5,
        description: "An epic poem about the journey of Odysseus.",
        last_modification: new Date('2024-01-01'),
        img: "https://m.media-amazon.com/images/I/71auePo1a8L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 14,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        note: 4.5,
        description: "A novel about the mental anguish of a young man.",
        last_modification: new Date('2024-02-01'),
        img: "https://m.media-amazon.com/images/I/612KmKeEYEL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 15,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        note: 4.5,
        description: "A novel about the moral struggles of three brothers.",
        last_modification: new Date('2024-03-01'),
        img: "https://m.media-amazon.com/images/I/71seLWtZhtL.jpg"
    },
    {
        id: 16,
        title: "Les Misérables",
        author: "Victor Hugo",
        note: 5,
        description: "A novel about the struggles of ex-convict Jean Valjean.",
        last_modification: new Date('2024-04-01'),
        img: "https://m.media-amazon.com/images/I/91JaGS-evHL._UF1000,1000_QL80_.jpg"
    },
    {
        id: 17,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        note: 4.5,
        description: "A novel about the tragic love affair of Anna Karenina.",
        last_modification: new Date('2024-05-01'),
        img: "https://m.media-amazon.com/images/I/61uTFEcqj6L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 18,
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        note: 5,
        description: "An epic poem about the journey through Hell, Purgatory, and Paradise.",
        last_modification: new Date('2024-06-01'),
        img: "https://m.media-amazon.com/images/I/81-rHfYBAQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 19,
        title: "The Iliad",
        author: "Homer",
        note: 5,
        description: "An epic poem about the Trojan War.",
        last_modification: new Date('2024-07-01'),
        img: "https://m.media-amazon.com/images/I/71f6IxWPdzL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 20,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        note: 4.5,
        description: "A novel about the adventures of a nobleman.",
        last_modification: new Date('2024-08-01'),
        img: "https://m.media-amazon.com/images/I/51KzbusN2VL._AC_UF1000,1000_QL80_.jpg"
    }
];

export default bookSeeds;