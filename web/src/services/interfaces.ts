export interface Book {
    id: number;
    title: string;
    author: string;
    note: number;
    description: string;
    last_modification: Date;
    img: string;
}

export interface SidebarSection {
    title: string;
    icon: React.ReactNode;
    pannel: React.ReactNode;
}