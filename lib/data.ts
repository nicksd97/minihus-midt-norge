export type ModelCategory = "smahus" | "boliger";

export interface Model {
  id: string;
  name: string;
  category: ModelCategory;
  categoryLabel: string;
  size: number;
  sizeUnit: string;
  description: string;
  features: string[];
  images: string[];
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
    category: "smahus",
    categoryLabel: "Småhus",
    size: 12,
    sizeUnit: "m²",
    description:
      "Et sjarmerende minihus på 12m² som gir deg et perfekt tilfluktssted i hagen. Ideell som ekstra oppholdsrom, hjemmekontor eller gjestehus.",
    features: [
      "Kompakt og funksjonelt design",
      "Store vindusflater for naturlig lys",
      "Ferdig isolert og klar for bruk",
      "Leveres som byggesett eller ferdig montert",
    ],
    images: [
      "/images/hagestue-12/hero.jpg",
      "/images/hagestue-12/1.jpg",
      "/images/hagestue-12/2.jpg",
      "/images/hagestue-12/3.jpg",
      "/images/hagestue-12/4.jpg",
    ],
    specs: { tek17: false },
  },
  {
    id: "panorama-12",
    name: "Panorama 12",
    category: "smahus",
    categoryLabel: "Småhus",
    size: 12,
    sizeUnit: "m²",
    description:
      "Panorama 12 byr på fantastisk utsikt gjennom store glassflater. Et moderne minihus som bringer naturen inn i stuen.",
    features: [
      "Panoramavinduer fra gulv til tak",
      "Moderne og stilrent design",
      "Optimalt lysinnslipp",
      "Perfekt for naturskjønne tomter",
    ],
    images: [
      "/images/panorama-12/hero.jpg",
      "/images/panorama-12/1.jpg",
      "/images/panorama-12/2.jpg",
      "/images/panorama-12/3.jpg",
      "/images/panorama-12/4.jpg",
      "/images/panorama-12/5.jpg",
    ],
    specs: { tek17: false },
  },
  {
    id: "hybel-12",
    name: "Hybel 12",
    category: "smahus",
    categoryLabel: "Småhus",
    size: 12,
    sizeUnit: "m²",
    description:
      "Hybel 12 er en komplett boligløsning på 12m² med alt du trenger. Inkluderer kjøkken, bad og soveområde i en gjennomtenkt planløsning.",
    features: [
      "Komplett med kjøkken og bad",
      "Smart planløsning",
      "Energieffektiv",
      "Perfekt som utleieenhet eller studentbolig",
    ],
    images: [
      "/images/hybel-12/hero.jpg",
      "/images/hybel-12/1.jpg",
      "/images/hybel-12/2.jpg",
      "/images/hybel-12/3.jpg",
      "/images/hybel-12/4.jpg",
    ],
    specs: { tek17: false },
  },
  {
    id: "camping-12",
    name: "Camping 12",
    category: "smahus",
    categoryLabel: "Småhus",
    size: 12,
    sizeUnit: "m²",
    description:
      "Camping 12 er den perfekte løsningen for campingplasser og friluftsområder. Robust, funksjonell og enkel å vedlikeholde.",
    features: [
      "Designet for campingbruk",
      "Robust konstruksjon",
      "Enkel vedlikehold",
      "Tilpasset utleievirksomhet",
    ],
    images: [
      "/images/camping-12/hero.jpg",
      "/images/camping-12/1.jpg",
      "/images/camping-12/2.jpg",
      "/images/camping-12/3.jpg",
      "/images/camping-12/4.jpg",
      "/images/camping-12/5.jpg",
    ],
    specs: { tek17: false },
  },
  {
    id: "anneks-12",
    name: "Anneks 12",
    category: "smahus",
    categoryLabel: "Småhus",
    size: 12,
    sizeUnit: "m²",
    description:
      "Anneks 12 gir deg ekstra plass ved boligen. Et fleksibelt minihus som kan brukes til overnatting, kontor eller oppbevaring.",
    features: [
      "Fleksibel bruk",
      "Passer til eksisterende bygg",
      "Enkel montering",
      "Godt isolert",
    ],
    images: [
      "/images/anneks-12/hero.jpg",
      "/images/anneks-12/1.jpg",
      "/images/anneks-12/2.jpg",
      "/images/anneks-12/3.jpg",
      "/images/anneks-12/4.jpg",
      "/images/anneks-12/5.jpg",
      "/images/anneks-12/6.jpg",
    ],
    specs: { tek17: false },
  },
  {
    id: "glamping-14",
    name: "Glamping 14",
    category: "smahus",
    categoryLabel: "Småhus",
    size: 14,
    sizeUnit: "m²",
    description:
      "Glamping 14 kombinerer naturopplevelse med komfort. En unik og stilfull løsning for glamping-destinasjoner og opplevelsesturisme.",
    features: [
      "Unikt design for glamping",
      "Komfortabel innredning",
      "Naturlig integrert i landskapet",
      "Populær for utleie og turisme",
    ],
    images: [
      "/images/glamping-14/hero.jpg",
      "/images/glamping-14/1.jpg",
      "/images/glamping-14/2.jpg",
      "/images/glamping-14/3.jpg",
    ],
    specs: { tek17: false },
  },
  {
    id: "hybel-15",
    name: "Hybel 15",
    category: "smahus",
    categoryLabel: "Småhus",
    size: 15,
    sizeUnit: "m²",
    description:
      "Hybel 15 gir deg litt mer plass enn Hybel 12, med en romsligere planløsning som fortsatt er kompakt og effektiv.",
    features: [
      "Romsligere enn Hybel 12",
      "Komplett med kjøkken og bad",
      "God takhøyde",
      "Fleksibel møblering",
    ],
    images: [
      "/images/hybel-15/hero.jpg",
      "/images/hybel-15/1.jpg",
      "/images/hybel-15/2.jpg",
      "/images/hybel-15/3.jpg",
    ],
    specs: { tek17: false },
  },
  {
    id: "minibolig-21",
    name: "Minibolig 21",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 21,
    sizeUnit: "m²",
    description:
      "Minibolig 21 er en fullverdig bolig på 21m² som oppfyller TEK17-kravene. Perfekt som førstebolig, utleieenhet eller tilleggsbolig.",
    features: [
      "TEK17-godkjent",
      "Komplett bolig med alle fasiliteter",
      "Energieffektiv konstruksjon",
      "Kan plasseres på egen tomt",
    ],
    images: [
      "/images/minibolig-21/hero.jpg",
      "/images/minibolig-21/1.jpg",
      "/images/minibolig-21/2.jpg",
      "/images/minibolig-21/3.jpg",
      "/images/minibolig-21/4.jpg",
      "/images/minibolig-21/5.jpg",
      "/images/minibolig-21/6.jpg",
    ],
    specs: { tek17: true },
  },
  {
    id: "minibolig-30",
    name: "Minibolig 30",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 30,
    sizeUnit: "m²",
    description:
      "Minibolig 30 gir deg en romslig minibolig på 30m² med god plass til stue, kjøkken, soverom og bad. Oppfyller TEK17.",
    features: [
      "TEK17-godkjent",
      "Romslig planløsning",
      "Separat soverom",
      "Moderne kjøkken og bad",
    ],
    images: [
      "/images/minibolig-30/hero.jpg",
      "/images/minibolig-30/1.jpg",
      "/images/minibolig-30/2.jpg",
      "/images/minibolig-30/3.jpg",
      "/images/minibolig-30/4.jpg",
      "/images/minibolig-30/5.jpg",
    ],
    specs: { tek17: true },
  },
  {
    id: "minibolig-50-flatt",
    name: "Minibolig 50 Flatt Tak",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 50,
    sizeUnit: "m²",
    description:
      "Minibolig 50 med flatt tak er en moderne og stilren bolig på 50m². Med to soverom og åpen stue/kjøkken-løsning gir den god plass for en liten familie.",
    features: [
      "TEK17-godkjent",
      "Flatt tak med moderne design",
      "To soverom",
      "Åpen stue og kjøkkenløsning",
    ],
    images: [
      "/images/minibolig-50-flatt/hero.jpg",
      "/images/minibolig-50-flatt/1.jpg",
      "/images/minibolig-50-flatt/2.jpg",
      "/images/minibolig-50-flatt/3.jpg",
      "/images/minibolig-50-flatt/4.jpg",
    ],
    specs: { tek17: true },
  },
  {
    id: "minibolig-50-saltak",
    name: "Minibolig 50 Saltak",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 50,
    sizeUnit: "m²",
    description:
      "Minibolig 50 med saltak har et tradisjonelt uttrykk som passer godt inn i norske boligområder. Samme romslige planløsning som flattak-varianten.",
    features: [
      "TEK17-godkjent",
      "Tradisjonelt saltak",
      "To soverom",
      "Passer inn i etablerte boligområder",
    ],
    images: [
      "/images/minibolig-50-saltak/hero.jpg",
      "/images/minibolig-50-saltak/1.jpg",
      "/images/minibolig-50-saltak/2.jpg",
      "/images/minibolig-50-saltak/3.jpg",
      "/images/minibolig-50-saltak/4.jpg",
      "/images/minibolig-50-saltak/5.jpg",
    ],
    specs: { tek17: true },
  },
  {
    id: "tomanns-50-flatt",
    name: "Tomanns Minibolig 50 Flatt",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 101,
    sizeUnit: "m²",
    description:
      "Tomannsbolig med to enheter à 50m² og flatt tak. En smart investering for utleie eller generasjonsbolig. Totalt 101m².",
    features: [
      "TEK17-godkjent",
      "To separate boenheter",
      "Flatt tak med moderne uttrykk",
      "Ideell for utleie eller generasjonsbolig",
    ],
    images: [
      "/images/tomanns-50-flatt/hero.jpg",
      "/images/tomanns-50-flatt/1.jpg",
      "/images/tomanns-50-flatt/2.jpg",
      "/images/tomanns-50-flatt/3.jpg",
      "/images/tomanns-50-flatt/4.jpg",
    ],
    specs: { tek17: true },
  },
  {
    id: "tomanns-50-saltak",
    name: "Tomanns Minibolig 50 Saltak",
    category: "boliger",
    categoryLabel: "Boliger TEK17",
    size: 101,
    sizeUnit: "m²",
    description:
      "Tomannsbolig med saltak og to enheter à 50m². Tradisjonelt design som passer godt inn i norske nabolag. Totalt 101m².",
    features: [
      "TEK17-godkjent",
      "To separate boenheter",
      "Tradisjonelt saltak",
      "Passer inn i etablerte strøk",
    ],
    images: [
      "/images/tomanns-50-saltak/hero.jpg",
      "/images/tomanns-50-saltak/1.jpg",
      "/images/tomanns-50-saltak/2.jpg",
      "/images/tomanns-50-saltak/3.jpg",
      "/images/tomanns-50-saltak/4.jpg",
    ],
    specs: { tek17: true },
  },
];

export function getModelById(id: string): Model | undefined {
  return models.find((m) => m.id === id);
}

export function getModelsByCategory(category: ModelCategory): Model[] {
  return models.filter((m) => m.category === category);
}
