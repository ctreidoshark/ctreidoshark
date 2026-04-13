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
    { href: "#contato", label: "Contato" },
  ],
  heroMetrics: [
    { value: "UV50+", label: "Tecido leve" },
    { value: "Secagem rapida", label: "Treino e praia" },
  ],
  heroSpotlight: {
    name: "CAMISA MANGA LONGA PRETO COM DOURADO",
    description:
      "Base preta, grafismos marcantes e manga longa para treino, areia e identidade forte de equipe.",
    price: "R$ 90",
    installment: "",
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
      name: "CAMISA PRETA COM DOURADO MANGA LONGA",
      description: "Peca inspirada no layout enviado, com preto grafite, dourado e manga longa.",
      price: 90,
      visualClass: "reference-piece",
      image: "/products/camisa-shark-gold.png",
      category: "camisa",
      gender: "Masculino",
      sizes: ["P", "M", "G", "GG"],
    },
    {
      id: "court-black",
      tag: "Short",
      name: "REGATA PRETO COM PRATA",
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
      name: "REGATA PRETO COM DOURADO",
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
      name: "Conjunto rosa com azul",
      description: "Sustentacao media com contraste dourado para jogos, treino e uniforme.",
      price: 130,
      visualClass: "gold-pulse",
      image: "/products/feminino-padraoazulerosa.jpeg",
      category: "top",
      gender: "feminino",
      sizes: ["PP", "P", "M", "G"],
    },
    {
      id: "regata-storm-net",
      tag: "Regata",
      name: "CONJUNTO REGATA PRETA COM BRANCA",
      description: "Padrao respiravel para treino no calor, com recortes contrastantes e toque macio.",
      price: 90,
      visualClass: "graphite-wave",
      image: "/products/masculino-padraopreto.jpeg",
      category: "regata",
      gender: "Masculino",
      sizes: ["P", "M", "G", "GG"],
    },
    {
      id: "short-fem-brisa",
      tag: "Feminino",
      name: "SHORT FEMININO PRETO COM PRATA",
      description: "Short feminino de cintura alta com tecido firme e liberdade para salto e defesa.",
      price: 86.9,
      visualClass: "gold-pulse",
      image: "/products/short-feminino.png",
      category: "short",
      gender: "feminino",
      sizes: ["PP", "P", "M", "G"],
    },
    {
      id: "bola-mikasa",
      tag: "Bola",
      name: "BOLA MIKASA",
      description: "Bola para treino e jogo com acabamento resistente, ideal para partidas e rotina na areia.",
      price: 350,
      visualClass: "ocean-burst",
      image: "/products/bolamikasa.png",
      category: "acessorio",
      gender: "unissex",
      sizes: ["Unico"],
    },
  ],
  benefits: [
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
      lines: ["WhatsApp: (83) 9694-5700", "E-mail: contato@reidoshark.com.br"],
    },
    {
      title: "Entrega",
      lines: ["Retirada local mediante combinacao"],
    },
    {
      title: "Pagamento",
      lines: ["Pix"],
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
