export interface Book {
    id: number;
    title: string;
    author: string;
    note: string;
    lastModificationDate: Date;
    img: string;
}

export interface SidebarSection {
    title: string;
    icon: React.ReactNode;
    pannel: React.ReactNode;
}