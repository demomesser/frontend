export enum SelectedPage {
    HOME = "Hjem",
    ABOUTUS = "Om oss",
    SERVICES = "Tjenester",
    CONTACT = "Kontakt oss",
    ARRANGEMENT = "Arrangementer"
}

export type Exhibitor = {
    id: number
    name: string
    description: string
    image: string
}

export type NavItem =
    | {
        type: "page";
        page: SelectedPage;
    }
    | {
        type: "route";
        label: string;
        to: string;
    };
