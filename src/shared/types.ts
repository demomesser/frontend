export enum ExhibitorCategory {
    TITLE = "TITLE",
    PARK_HAGE = "PARK OG HAGEMASKINER",
    TUNGE_MASKINER = "TRAKTORER/HJULLASTERE/GRAVEMASKINER",
    LADING = "LADING OG INFRASTRUKTUR",
    DIVERSE = "DIV MASKINER (FEIING-NYTTEKJØRETØY)"
}

export enum SelectedPage {
    NONE = "",
    HOME = "Hjem",
    ABOUTUS = "Om oss",
    SERVICES = "Tjenester",
    CONTACT = "Kontakt oss",
    ARRANGEMENT = "Arrangementer",
    TITLE = ExhibitorCategory.TITLE,
    PARK_HAGE = "Hagemaskiner",
    TUNGE_MASKINER = "Tunge maskiner",
    LADING = "Lading og Infrastuktur",
    DIVERSE = "Diverse" 
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
