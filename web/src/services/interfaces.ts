export type Book = {
    id: number;
    title: string;
    author: string;
    note: number;
    description: string;
    last_modification: Date;
    img: string;
}

export type SidebarSection = {
    title: string;
    icon: React.ReactNode;
    pannel: React.ReactNode;
}

export type UserLogin = {
    name?: string;
    email?: string;
}