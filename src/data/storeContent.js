export const defaultStoreContent = {
  admin: {
    password: "admin123",
  },
  store: {
    name: "REIDOSHARK",
    shortName: "reidoshark",
    initials: "RS",
    logo: "/brand/logo-reidoshark.png",
    tagline: "Futevolei Performance",
    heroEyebrow: "",
    heroTitle: "reidoshark colecao azul com pegada forte para treino e jogo.",
    heroText:
      "foco em camisas UV, shorts, regatas e pedidos personalizados pelo WhatsApp.",
    footerTitle: "reidoshark pronta para vender.",
    whatsappNumber: "83 9694-5700",
    whatsappLabel: "WhatsApp: (83) 9694-5700",
  },
  navigationLinks: [
    { href: "#colecao", label: "Colecao" },
    { href: "#destaques", label: "Destaques" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#contato", label: "Contato" },
  ],
  heroMetrics: [
    { value: "UV50+", label: "Tecido leve" },
    { value: "Secagem rapida", label: "Treino e praia" },
    { value: "Edicao limitada", label: "Drop mensal" },
  ],
  heroSpotlight: {
    badge: "Drop 01",
    name: "Camisa Shark Gold UV",
    description:
      "Base preta, grafismos marcantes e manga longa para treino, areia e identidade forte de equipe.",
    price: "R$ 129,90",
    installment: "ou 3x de R$ 43,30",
    visualClass: "reference-piece",
    image: "/products/camisa-shark-gold.png",
  },
  categories: [
    { label: "Linha masculina", value: "Shorts e camisas" },
    { label: "Linha feminina", value: "Top, short e regata" },
    { label: "Drop exclusivo", value: "Pecas com numeracao limitada" },
  ],
  products: [
    {
      id: "shark-gold-uv",
      tag: "Camisa",
      name: "Camisa Shark Gold UV",
      description: "Peca inspirada no layout enviado, com preto grafite, dourado e manga longa.",
      price: 129.9,
      visualClass: "reference-piece",
      image: "/products/camisa-shark-gold.png",
      category: "camisa",
      gender: "feminino",
      sizes: ["PP", "P", "M", "G", "GG"],
    },
    {
      id: "court-black",
      tag: "Short",
      name: "Short Court Black",
      description: "Base preta com detalhes dourados para combinar com a camisa principal.",
      price: 100,
      visualClass: "gold-core",
      image: "/products/masculino-padraopreto.jpeg",
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
      image: "/products/masculino-padraodourado.jpeg",
      category: "regata",
      gender: "masculino",
      sizes: ["P", "M", "G", "GG"],
    },
    {
      id: "brisa-match",
      tag: "Feminino",
      name: "Top Brisa Match",
      description: "Sustentacao media com contraste dourado para jogos, treino e uniforme.",
      price: 130,
      visualClass: "gold-pulse",
      image: "/products/feminino-padraoazulerosa.jpeg",
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
      image: "/products/masculino-padraodourado.jpeg",
      category: "camisa",
      gender: "masculino",
      sizes: ["P", "M", "G", "GG"],
    },
    {
      id: "regata-storm-net",
      tag: "Regata",
      name: "Regata Storm Net",
      description: "Regata respiravel para treino no calor, com recortes contrastantes e toque macio.",
      price: 79.9,
      visualClass: "graphite-wave",
      image: "/products/masculino-padraopreto.jpeg",
      category: "regata",
      gender: "unissex",
      sizes: ["P", "M", "G", "GG"],
    },
    {
      id: "manga-uv-raid",
      tag: "Manga longa",
      name: "Camisa UV Raid",
      description: "Protecao solar, secagem rapida e estampa marcante para uniformes de treino.",
      price: 139.9,
      visualClass: "gold-core",
      image: "/products/masculino-padraodourado.jpeg",
      category: "camisa",
      gender: "unissex",
      sizes: ["P", "M", "G", "GG"],
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
  ],
  benefits: [
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
  ],
  contactItems: [
    {
      title: "Atendimento",
      lines: ["WhatsApp: (83) 000", "E-mail: contato@reidoshark.com.br"],
    },
    {
      title: "Entrega",
      lines: ["Envio para todo o Brasil e retirada local mediante combinacao."],
    },
    {
      title: "Pagamento",
      lines: ["Pix, cartao e pedidos em lote para equipes e escolinhas."],
    },
  ],
};

export const store = defaultStoreContent.store;
export const navigationLinks = defaultStoreContent.navigationLinks;
export const heroMetrics = defaultStoreContent.heroMetrics;
export const heroSpotlight = defaultStoreContent.heroSpotlight;
export const categories = defaultStoreContent.categories;
export const products = defaultStoreContent.products;
export const benefits = defaultStoreContent.benefits;
export const contactItems = defaultStoreContent.contactItems;
