interface Book {
    id: number;
    title: string;
    author: string;
    note: string;
    last_modification: Date;
    image: string;
}

const bookSeeds: Book[] = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        note: "A classic novel of racism and injustice.",
        last_modification: new Date('2023-01-01'),
        image: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        note: "A dystopian novel about totalitarianism.",
        last_modification: new Date('2023-02-01'),
        image: "https://example.com/images/1984.jpg"
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        note: "A novel about the American dream.",
        last_modification: new Date('2023-03-01'),
        image: "https://example.com/images/the-great-gatsby.jpg"
    },
    {
        id: 4,
        title: "Moby Dick",
        author: "Herman Melville",
        note: "A novel about the obsession with a white whale.",
        last_modification: new Date('2023-04-01'),
        image: "https://example.com/images/moby-dick.jpg"
    },
    {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        note: "A romantic novel about manners and marriage.",
        last_modification: new Date('2023-05-01'),
        image: "https://example.com/images/pride-and-prejudice.jpg"
    },
    {
        id: 6,
        title: "War and Peace",
        author: "Leo Tolstoy",
        note: "A novel about the French invasion of Russia.",
        last_modification: new Date('2023-06-01'),
        image: "https://example.com/images/war-and-peace.jpg"
    },
    {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        note: "A novel about teenage rebellion and angst.",
        last_modification: new Date('2023-07-01'),
        image: "https://example.com/images/the-catcher-in-the-rye.jpg"
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        note: "A fantasy novel about a hobbit's adventure.",
        last_modification: new Date('2023-08-01'),
        image: "https://example.com/images/the-hobbit.jpg"
    },
    {
        id: 9,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        note: "A dystopian novel about book burning.",
        last_modification: new Date('2023-09-01'),
        image: "https://example.com/images/fahrenheit-451.jpg"
    },
    {
        id: 10,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        note: "A novel about the experiences of the titular character.",
        last_modification: new Date('2023-10-01'),
        image: "https://example.com/images/jane-eyre.jpg"
    },
    {
        id: 11,
        title: "Brave New World",
        author: "Aldous Huxley",
        note: "A dystopian novel about a futuristic society.",
        last_modification: new Date('2023-11-01'),
        image: "https://example.com/images/brave-new-world.jpg"
    },
    {
        id: 12,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        note: "A novel about the intense relationship between Catherine and Heathcliff.",
        last_modification: new Date('2023-12-01'),
        image: "https://example.com/images/wuthering-heights.jpg"
    },
    {
        id: 13,
        title: "The Odyssey",
        author: "Homer",
        note: "An epic poem about the journey of Odysseus.",
        last_modification: new Date('2024-01-01'),
        image: "https://example.com/images/the-odyssey.jpg"
    },
    {
        id: 14,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        note: "A novel about the mental anguish of a young man.",
        last_modification: new Date('2024-02-01'),
        image: "https://example.com/images/crime-and-punishment.jpg"
    },
    {
        id: 15,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        note: "A novel about the moral struggles of three brothers.",
        last_modification: new Date('2024-03-01'),
        image: "https://example.com/images/the-brothers-karamazov.jpg"
    },
    {
        id: 16,
        title: "Les Misérables",
        author: "Victor Hugo",
        note: "A novel about the struggles of ex-convict Jean Valjean.",
        last_modification: new Date('2024-04-01'),
        image: "https://example.com/images/les-miserables.jpg"
    },
    {
        id: 17,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        note: "A novel about the tragic love affair of Anna Karenina.",
        last_modification: new Date('2024-05-01'),
        image: "https://example.com/images/anna-karenina.jpg"
    },
    {
        id: 18,
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        note: "An epic poem about the journey through Hell, Purgatory, and Paradise.",
        last_modification: new Date('2024-06-01'),
        image: "https://example.com/images/the-divine-comedy.jpg"
    },
    {
        id: 19,
        title: "The Iliad",
        author: "Homer",
        note: "An epic poem about the Trojan War.",
        last_modification: new Date('2024-07-01'),
        image: "https://example.com/images/the-iliad.jpg"
    },
    {
        id: 20,
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        note: "A novel about the adventures of a nobleman.",
        last_modification: new Date('2024-08-01'),
        image: "https://example.com/images/don-quixote.jpg"
    }
];

export default bookSeeds;