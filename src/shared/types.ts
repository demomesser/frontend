export enum SelectedPage {
    NONE = "",
    HOME = "Hjem",
    ABOUTUS = "Om oss",
    SERVICES = "Tjenester",
    CONTACT = "Kontakt oss",
    ARRANGEMENT = "Arrangementer"
}

export enum ExhibitorCategory {
    PARK_HAGE = "PARK/HAGEMASKINER",
    TUNGE_MASKINER = "TRAKTORER/HJULLASTERE/GRAVEMASKINER",
    LADING = "LADING/INFRASTRUKTUR",
    DIVERSE = "DIV MASKINER (FEIING-NYTTEKJØRETØY)"
}

export type Exhibitor = {
    id: number
    name: string
    description: string
    image: string
    link: string
    category: ExhibitorCategory
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
