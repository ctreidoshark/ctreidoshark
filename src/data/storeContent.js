export const store = {
  name: "REIDOSHARK",
  shortName: "reidoshark",
  initials: "RS",
  logo: "/brand/logo-reidoshark.png",
  tagline: "Futevolei Performance",
  heroEyebrow: "A marca da areia",
  heroTitle: "reidoshark: colecao preta e dourada com presenca forte na areia.",
  heroText:
    "Uma vitrine inspirada na peca enviada, com leitura premium, contraste alto e foco em camisa UV, conjuntos de treino e pedidos personalizados pelo WhatsApp.",
  footerTitle: "reidoshark pronta para vender.",
  whatsappNumber: "5521999999999",
  whatsappLabel: "WhatsApp: (21) 99999-9999",
  email: "contato@reidoshark.com.br",
};

export const navigationLinks = [
  { href: "#colecao", label: "Colecao" },
  { href: "#destaques", label: "Destaques" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#contato", label: "Contato" },
];

export const heroMetrics = [
  { value: "UV50+", label: "Tecido leve" },
  { value: "Secagem rapida", label: "Treino e praia" },
  { value: "Edicao limitada", label: "Drop mensal" },
];

export const heroSpotlight = {
  badge: "Drop 01",
  name: "Camisa Shark Gold UV",
  description:
    "Base preta, grafismos marcantes e manga longa para treino, areia e identidade forte de equipe.",
  price: "R$ 129,90",
  installment: "ou 3x de R$ 43,30",
  visualClass: "reference-piece",
  image: "/products/camisa-manga-feminino.png",
};

export const categories = [
  { label: "Linha masculina", value: "Shorts e camisas" },
  { label: "Linha feminina", value: "Top, short e regata" },
  { label: "Acessorios", value: "Bone, munhequeira e bolsa" },
  { label: "Drop exclusivo", value: "Pecas com numeracao limitada" },
];

export const products = [
  {
    id: "shark-gold-uv",
    tag: "Camisa",
    name: "Camisa Shark Gold UV",
    description: "Peca inspirada no layout enviado, com preto grafite, dourado e manga longa.",
    price: 129.9,
    visualClass: "reference-piece",
    image: "/products/camisa-manga-feminino.png",
    category: "camisa",
    gender: "feminino",
    sizes: ["PP", "P", "M", "G", "GG"],
  },
  {
    id: "court-black",
    tag: "Short",
    name: "Short Court Black",
    description: "Base preta com detalhes dourados para combinar com a camisa principal.",
    price: 99.9,
    visualClass: "gold-core",
    image: "/products/short-masculino.png",
    category: "short",
    gender: "masculino",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "ventania",
    tag: "Regata",
    name: "Regata Training Gold",
    description: "Leve, respiravel e pensada para manter a mesma linguagem visual da colecao.",
    price: 89.9,
    visualClass: "graphite-wave",
    image: "/products/camisa-regata-masculino.png",
    category: "regata",
    gender: "masculino",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "brisa-match",
    tag: "Feminino",
    name: "Top Brisa Match",
    description: "Sustentacao media com contraste dourado para jogos, treino e uniforme.",
    price: 84.9,
    visualClass: "gold-pulse",
    image: "/products/regata-feminina.png",
    category: "top",
    gender: "feminino",
    sizes: ["PP", "P", "M", "G"],
  },
  {
    id: "camisa-sand-rush",
    tag: "Camisa",
    name: "Camisa Sand Rush",
    description: "Modelo dry fit com visual de treino intenso e acabamento premium para areia.",
    price: 119.9,
    visualClass: "sunset-drive",
    image: "/products/camisa-manga-masculina.png",
    category: "camisa",
    gender: "masculino",
    sizes: ["P", "M", "G", "GG", "XG"],
  },
  {
    id: "regata-storm-net",
    tag: "Regata",
    name: "Regata Storm Net",
    description: "Regata respiravel para treino no calor, com recortes contrastantes e toque macio.",
    price: 79.9,
    visualClass: "graphite-wave",
    image: "/products/camisa-regata-masculino.png",
    category: "regata",
    gender: "unissex",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "top-areia-elite",
    tag: "Top",
    name: "Top Areia Elite",
    description: "Top de media sustentacao com forro confortavel e leitura visual de competicao.",
    price: 89.9,
    visualClass: "gold-pulse",
    image: "/products/regata-feminina.png",
    category: "top",
    gender: "feminino",
    sizes: ["PP", "P", "M", "G"],
  },
  {
    id: "manga-uv-raid",
    tag: "Manga longa",
    name: "Camisa UV Raid",
    description: "Protecao solar, secagem rapida e estampa marcante para uniformes de treino.",
    price: 139.9,
    visualClass: "gold-core",
    image: "/products/camisa-manga-masculina.png",
    category: "camisa",
    gender: "unissex",
    sizes: ["P", "M", "G", "GG", "XG"],
  },
  {
    id: "viseira-solar",
    tag: "Acessorio",
    name: "Viseira Solar Club",
    description: "Viseira leve para treino e praia, com aba curva e regulagem traseira.",
    price: 49.9,
    visualClass: "sunset-drive",
    category: "acessorio",
    gender: "unissex",
    sizes: ["Unico"],
  },
  {
    id: "bolsa-arena-pack",
    tag: "Acessorio",
    name: "Bolsa Arena Pack",
    description: "Bolsa utilitaria para levar kit de treino, toalha e itens de jogo.",
    price: 109.9,
    visualClass: "ocean-burst",
    category: "acessorio",
    gender: "unissex",
    sizes: ["Unico"],
  },
  {
    id: "short-fem-brisa",
    tag: "Feminino",
    name: "Short Brisa Court",
    description: "Short feminino de cintura alta com tecido firme e liberdade para salto e defesa.",
    price: 86.9,
    visualClass: "gold-pulse",
    image: "/products/short-feminino.png",
    category: "short",
    gender: "feminino",
    sizes: ["PP", "P", "M", "G"],
  },
];

export const benefits = [
  {
    title: "Visual de marca",
    text: "A vitrine conversa com a referencia da peca, trazendo preto, dourado e leitura premium.",
  },
  {
    title: "Compra simples",
    text: "Produtos destacados, preco visivel e carrinho rapido para nao perder conversao.",
  },
  {
    title: "Canal direto",
    text: "WhatsApp em destaque para fechar pedido, tirar duvida de tamanho e vender personalizado.",
  },
];

export const contactItems = [
  {
    title: "Atendimento",
    lines: [store.whatsappLabel, `E-mail: ${store.email}`],
  },
  {
    title: "Entrega",
    lines: ["Envio para todo o Brasil e retirada local mediante combinacao."],
  },
  {
    title: "Pagamento",
    lines: ["Pix, cartao e pedidos em lote para equipes e escolinhas."],
  },
];
