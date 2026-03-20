export type ModelCategory = "hytter" | "boliger";

export interface Model {
  id: string;
  name: string;
  category: ModelCategory;
  categoryLabel: string;
  size: number;
  sizeUnit: string;
  price: number | null;
  description: string;
  features: string[];
  imageUrl: string;
  specs: {
    bredde?: string;
    lengde?: string;
    hoyde?: string;
    tek17?: boolean;
  };
}

export const models: Model[] = [
  {
    id: "hagestue-12",
    name: "Hagestue 12",
    category: "hytter",
    categoryLabel: "Hytter & Anneks",
    size: 12,
    sizeUnit: "m²",
    price: 426000,
    description:
      "En sjarmerende hagestue på 12m² som gir deg et perfekt tilfluktssted i hagen. Ideell som ekstra oppholdsrom, hjemmekontor eller gjestehus.",
    features: [
      "Kompakt og funksjonelt design",
      "Store vindusflater for naturlig lys",
      "Ferdig isolert og klar for bruk",
      "Leveres som byggesett eller ferdig montert",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Hagestue12.jpg",
    specs: { tek17: false },
  },
  {
    id: "panorama-12",
    name: "Panorama 12",
    category: "hytter",
    categoryLabel: "Hytter & Anneks",
    size: 12,
    sizeUnit: "m²",
    price: 479000,
    description:
      "Panorama 12 byr på fantastisk utsikt gjennom store glassflater. En moderne hytte som bringer naturen inn i stuen.",
    features: [
      "Panoramavinduer fra gulv til tak",
      "Moderne og stilrent design",
      "Optimalt lysinnslipp",
      "Perfekt for naturskjønne tomter",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Panorama12.jpg",
    specs: { tek17: false },
  },
  {
    id: "hybel-12",
    name: "Hybel 12",
    category: "hytter",
    categoryLabel: "Hytter & Anneks",
    size: 12,
    sizeUnit: "m²",
    price: 675000,
    description:
      "Hybel 12 er en komplett boligløsning på 12m² med alt du trenger. Inkluderer kjøkken, bad og soveområde i et gjennomtenkt planløsning.",
    features: [
      "Komplett med kjøkken og bad",
      "Smart planløsning",
      "Energieffektiv",
      "Perfekt som utleieenhet eller studentbolig",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Hybel12.jpg",
    specs: { tek17: false },
  },
  {
    id: "camping-12",
    name: "Camping 12",
    category: "hytter",
    categoryLabel: "Hytter & Anneks",
    size: 12,
    sizeUnit: "m²",
    price: null,
    description:
      "Camping 12 er den perfekte løsningen for campingplasser og friluftsområder. Robust, funksjonell og enkel å vedlikeholde.",
    features: [
      "Designet for campingbruk",
      "Robust konstruksjon",
      "Enkel vedlikehold",
      "Tilpasset utleievirksomhet",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Camping12.jpg",
    specs: { tek17: false },
  },
  {
    id: "anneks-12",
    name: "Anneks 12",
    category: "hytter",
    categoryLabel: "Hytter & Anneks",
    size: 12,
    sizeUnit: "m²",
    price: null,
    description:
      "Anneks 12 gir deg ekstra plass ved hytta eller boligen. Et fleksibelt tilbygg som kan brukes til overnatting, kontor eller oppbevaring.",
    features: [
      "Fleksibel bruk",
      "Passer til eksisterende bygg",
      "Enkel montering",
      "Godt isolert",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Anneks12.jpg",
    specs: { tek17: false },
  },
  {
    id: "glamping-14",
    name: "Glamping 14",
    category: "hytter",
    categoryLabel: "Hytter & Anneks",
    size: 14,
    sizeUnit: "m²",
    price: null,
    description:
      "Glamping 14 kombinerer naturopplevelse med komfort. En unik og stilfull løsning for glamping-destinasjoner og opplevelsesturisme.",
    features: [
      "Unikt design for glamping",
      "Komfortabel innredning",
      "Naturlig integrert i landskapet",
      "Populær for utleie og turisme",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Glamping14.jpg",
    specs: { tek17: false },
  },
  {
    id: "hybel-15",
    name: "Hybel 15",
    category: "hytter",
    categoryLabel: "Hytter & Anneks",
    size: 15,
    sizeUnit: "m²",
    price: null,
    description:
      "Hybel 15 gir deg litt mer plass enn Hybel 12, med en romsligere planløsning som fortsatt er kompakt og effektiv.",
    features: [
      "Romsligere enn Hybel 12",
      "Komplett med kjøkken og bad",
      "God takhøyde",
      "Fleksibel møblering",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Hybel15.jpg",
    specs: { tek17: false },
  },
  {
    id: "minibolig-21",
    name: "Minibolig 21",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 21,
    sizeUnit: "m²",
    price: 1057000,
    description:
      "Minibolig 21 er en fullverdig bolig på 21m² som oppfyller TEK17-kravene. Perfekt som førstebolig, utleieenhet eller tilleggsbolig.",
    features: [
      "TEK17-godkjent",
      "Komplett bolig med alle fasiliteter",
      "Energieffektiv konstruksjon",
      "Kan plasseres på egen tomt",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Minibolig21.jpg",
    specs: { tek17: true },
  },
  {
    id: "minibolig-30",
    name: "Minibolig 30",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 30,
    sizeUnit: "m²",
    price: 1290000,
    description:
      "Minibolig 30 gir deg en romslig minibolig på 30m² med god plass til stue, kjøkken, soverom og bad. Oppfyller TEK17.",
    features: [
      "TEK17-godkjent",
      "Romslig planløsning",
      "Separat soverom",
      "Moderne kjøkken og bad",
    ],
    imageUrl: "https://funnbo.no/wp-content/uploads/2024/01/Minibolig30.jpg",
    specs: { tek17: true },
  },
  {
    id: "minibolig-50-flatt",
    name: "Minibolig 50 Flatt Tak",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 50,
    sizeUnit: "m²",
    price: 1844000,
    description:
      "Minibolig 50 med flatt tak er en moderne og stilren bolig på 50m². Med to soverom og åpen stue/kjøkken-løsning gir den god plass for en liten familie.",
    features: [
      "TEK17-godkjent",
      "Flatt tak med moderne design",
      "To soverom",
      "Åpen stue og kjøkkenløsning",
    ],
    imageUrl:
      "https://funnbo.no/wp-content/uploads/2024/01/Minibolig50Flatt.jpg",
    specs: { tek17: true },
  },
  {
    id: "minibolig-50-saltak",
    name: "Minibolig 50 Saltak",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 50,
    sizeUnit: "m²",
    price: null,
    description:
      "Minibolig 50 med saltak har et tradisjonelt uttrykk som passer godt inn i norske boligområder. Samme romslige planløsning som flattak-varianten.",
    features: [
      "TEK17-godkjent",
      "Tradisjonelt saltak",
      "To soverom",
      "Passer inn i etablerte boligområder",
    ],
    imageUrl:
      "https://funnbo.no/wp-content/uploads/2024/01/Minibolig50Saltak.jpg",
    specs: { tek17: true },
  },
  {
    id: "tomanns-50-flatt",
    name: "Tomanns Minibolig 50 Flatt",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 101,
    sizeUnit: "m²",
    price: null,
    description:
      "Tomannsbolig med to enheter à 50m² og flatt tak. En smart investering for utleie eller generasjonsbolig. Totalt 101m².",
    features: [
      "TEK17-godkjent",
      "To separate boenheter",
      "Flatt tak med moderne uttrykk",
      "Ideell for utleie eller generasjonsbolig",
    ],
    imageUrl:
      "https://funnbo.no/wp-content/uploads/2024/01/Tomanns50Flatt.jpg",
    specs: { tek17: true },
  },
  {
    id: "tomanns-50-saltak",
    name: "Tomanns Minibolig 50 Saltak",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 101,
    sizeUnit: "m²",
    price: null,
    description:
      "Tomannsbolig med saltak og to enheter à 50m². Tradisjonelt design som passer godt inn i norske nabolag. Totalt 101m².",
    features: [
      "TEK17-godkjent",
      "To separate boenheter",
      "Tradisjonelt saltak",
      "Passer inn i etablerte strøk",
    ],
    imageUrl:
      "https://funnbo.no/wp-content/uploads/2024/01/Tomanns50Saltak.jpg",
    specs: { tek17: true },
  },
];

export function getModelById(id: string): Model | undefined {
  return models.find((m) => m.id === id);
}

export function getModelsByCategory(category: ModelCategory): Model[] {
  return models.filter((m) => m.category === category);
}

export function formatPrice(price: number | null): string {
  if (price === null) return "Ta kontakt for pris";
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
