const categories = {
  women: {
    id: 1,
    title: "Women",
    items: [
      {
        id: 1,
        title: "FEBEN",
        price: "121",
        images: [
          "https://i.ibb.co/VCwSML3/girl-1-1.webp",
          "https://i.ibb.co/k80vXyP/girl-1-2.webp",
          "https://i.ibb.co/vwCYzck/girl-1-3.webp",
        ],
        colors: ["#1A120C", "#CDCCC8", "#0F6450"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Ugo Paulon Patel 50mm mismatch thong sandals, Juneyen cropped long-sleeve shirt",
      },
      {
        id: 2,
        title: "Versace Medusa corset midi dress",
        price: "833",
        images: [
          "https://i.ibb.co/pZ45BXc/girl-2-1.webp",
          "https://i.ibb.co/wY0tBTK/girl-2-2.webp",
          "https://i.ibb.co/GxrV1Bn/girl-2-3.jpg",
        ],
        colors: ["#D3C55D", "#000000", "#5555"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "Lending a nod to archival atelier styles, this Versace dress is characterised by its V-shaped boning and corsetry-inspired construction. Presented in a rich avocado green hue, it embodies the brand's penchant for high-octane glamour",
      },
      {
        id: 3,
        title: "Kara gem embellished-strap shoulder bag",
        price: "576",
        images: [
          "https://i.ibb.co/FX5rwxR/girl-3-1.webp",
          "https://i.ibb.co/H4ZsqNv/girl-3-2.webp",
          "https://i.ibb.co/tqL6vs3/girl-3-3.jpg",
        ],
        colors: ["#1E1B1C", "#CAC9CA", "#D3C55D"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Alighieri asymmetric two-tone Lia earrings, Versace O-ring detail bodysuit",
      },
      {
        id: 4,
        title: "Retrofete Lex crystal-embellished cropped top",
        price: "423",
        images: [
          "https://i.ibb.co/2gTyn80/girl-4-1.webp",
          "https://i.ibb.co/R9xJDnr/girl-4-2.webp",
          "https://i.ibb.co/G2hrzFf/girl-4-3.jpg",
        ],
        colors: ["#141414", "#1A120C", "#363533"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Amina Muaddi satin crystal-embellished mini bag, Pīferi Divine 100mm pumps",
      },
      {
        id: 5,
        title: "Versace pinstripe corseted wool top",
        price: "155",
        images: [
          "https://i.ibb.co/Ph337yj/girl-5-1.webp",
          "https://i.ibb.co/gMVchKm/girl-5-2.webp",
          "https://i.ibb.co/S77D7Fb/girl-5-3.webp",
        ],
        colors: ["#363533", "#F6F7F4", "#D3C55D"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Alighieri asymmetric two-tone Lia earrings, Versace O-ring detail bodysuit",
      },
      {
        id: 6,
        title: "Thom Browne 4-bar stripe waffle cardigan",
        price: "734",
        images: [
          "https://i.ibb.co/5x3BfMH/girl-6-1.webp",
          "https://i.ibb.co/p1KBKdw/girl-6-2.webp",
          "https://i.ibb.co/7NtD198/girl-6-3.webp",
        ],
        colors: ["#92908C", "#E2BFA9", "#F1F2ED"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "Known for redefining modern tailoring, Thom Browne conveys a sense of true American sensibility. Playing with the idea of uniformity, this cardigan is crafted with a textured waffle finish and boasts the brand's signature 4-bar stripe to the sleeve. ",
      },
    ],
  },
  men: {
    id: 2,
    title: "men",
    items: [
      {
        id: 7,
        title: "Lanvin Curb woven drawstring track pants",
        price: "779",
        images: [
          "https://i.ibb.co/Dw0CYkM/men-1-1.webp",
          "https://i.ibb.co/Ks1x73V/men-1-2.webp",
          "https://i.ibb.co/DQwCjJg/men-1-3.jpg",
        ],
        colors: ["#1F6498", "#2B2B2B", "#C6C5CA"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Alexander McQueen Oversized chunky sneakers, Sunspel oversized fit hoodie",
      },
      {
        id: 8,
        title: "Brunello Cucinelli ribbed-knit roll-neck jumper",
        price: "217",
        images: [
          "https://i.ibb.co/jTYGBnW/men-2-1.webp",
          "https://i.ibb.co/WVFGbBR/men-2-2.jpg",
          "https://i.ibb.co/D4X6qF8/men-2-3.webp",
        ],
        colors: ["#D7624A", "#2B2B2B", "#BEB9AD"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Saint Laurent Rive Gauche shopping bag, Pop Trading Company multiple-pocket straight-leg trousers, Tod's low-top Runner sneakers",
      },
      {
        id: 9,
        title: "Moncler Damavand padded jacket",
        price: "545",
        images: [
          "https://i.ibb.co/HnMmvBb/men-3-1.webp",
          "https://i.ibb.co/8d5NmZS/men-3-2.webp",
          "https://i.ibb.co/C1X0jfk/men-3-3.webp",
        ],
        colors: ["#F76055", "#2B2B2B", "#1F6498"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Canada Goose padded zip-up sneakers, Jacquemus virgin wool straight-leg trousers",
      },
      {
        id: 10,
        title: "Burberry logo-print cotton sweatshirt",
        price: "728",
        images: [
          "https://i.ibb.co/CJGH9xm/men-4-1.webp",
          "https://i.ibb.co/2Y56cTJ/men-4-2.jpg",
          "https://i.ibb.co/x6rhbd2/men-4-3.jpg",
        ],
        colors: ["#7D6461", "#eeeeee", "#2B2B2B"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "Ivy green cotton logo-print cotton sweatshirt from BURBERRY featuring logo print at the chest, crew neck and long sleeves.",
      },
      {
        id: 11,
        title: "Brunello Cucinelli shawl-lapels cashmere cardigan",
        price: "459",
        images: [
          "https://i.ibb.co/W6j15wq/men-5-1.webp",
          "https://i.ibb.co/wz946Lj/men-5-2.webp",
          "https://i.ibb.co/dQ9wMHt/men-5-3.webp",
        ],
        colors: ["#D3D2D5", "#2B2B2B", "#0F6450"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Brunello Cucinelli crew neck T-shirt, Brunello Cucinelli woven leather belt, Brunello Cucinelli pressed-creased multi-pocket straight-leg trousers , Brunello Cucinelli ribbed button-up gilet , Brunello Cucinelli long-sleeve cotton shirt, Brunello Cucinelli suede Oxford shoes",
      },
      {
        id: 12,
        title: "AMI Paris checked button-up shirt jacket",
        price: "688",
        images: [
          "https://i.ibb.co/bNNnh2n/men-6-1.webp",
          "https://i.ibb.co/S3x4PqL/men-6-2.jpg",
          "https://i.ibb.co/3Wx2pwG/men-6-3.jpg",
        ],
        colors: ["#090607", "#2B2B2B", "#788787"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "Crafted from soft wool, this AMI Paris shirt jacket offers a classic look thanks to the black and grey check pattern. The piece's relaxed aesthetic speaks to the brand's essence.",
      },
    ],
  },
  kids: {
    id: 3,
    title: "kids",
    items: [
      {
        id: 13,
        title: "Thom Browne Kids downfilled sleeveless 4-Bar vest",
        price: "156",
        images: [
          "https://i.ibb.co/5rqdt7v/kids-3-1.webp",
          "https://i.ibb.co/FVt2X6j/kids-3-2.webp",
          "https://i.ibb.co/5R1rdXM/kids-3-3.webp",
        ],
        colors: ["#686367", "#2B2B2B", "#0F6450"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Alexander McQueen Oversized chunky sneakers, Sunspel oversized fit hoodie",
      },
      {
        id: 14,
        title: "Il Gufo textured panel shirt jacket",
        price: "220",
        images: [
          "https://i.ibb.co/MnzSqCn/kids-4-1.jpg",
          "https://i.ibb.co/7k2QsxR/kids-4-2.jpg",
          "https://i.ibb.co/GWzF07v/kids-4-3.webp",
        ],
        colors: ["#BE926F", "#2B2B2B", "#000000"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Saint Laurent Rive Gauche shopping bag, Pop Trading Company multiple-pocket straight-leg trousers, Tod's low-top Runner sneakers",
      },
      {
        id: 15,
        title: "Thom Browne varsity piqué pleated jersey skirt",
        price: "910",
        images: [
          "https://i.ibb.co/b5dLPk2/kids-5-1.jpg",
          "https://i.ibb.co/nkH7411/kids-5-2.jpg",
          "https://i.ibb.co/HKbrmd5/kids-5-3.jpg",
        ],
        colors: ["#D3D2D5", "#666366", "#232323"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Canada Goose padded zip-up sneakers, Jacquemus virgin wool straight-leg trousers",
      },
      {
        id: 16,
        title: "Lapin House check-pattern sleeveless dress",
        price: "139",
        images: [
          "https://i.ibb.co/2y7n9Vj/kids-6-1.jpg",
          "https://i.ibb.co/9VH5fBZ/kids-6-2.jpg",
          "https://i.ibb.co/pRygS0f/kids-6-3.webp",
        ],
        colors: ["#D3D2D5", "#000000", "#ff1134"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "Ivy green cotton logo-print cotton sweatshirt from BURBERRY featuring logo print at the chest, crew neck and long sleeves.",
      },
      {
        id: 17,
        title: "Il Gufo panelled hooded jacket",
        price: "349",
        images: [
          "https://i.ibb.co/VNVjP7K/kids-7-1.jpg",
          "https://i.ibb.co/QbjhZyk/kids-7-2.jpg",
          "https://i.ibb.co/mFjs6G9/kids-7-3.jpg",
        ],
        colors: ["#C5BFAF", "#B68B61", "#121221"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "The model is also styled with: Brunello Cucinelli crew neck T-shirt, Brunello Cucinelli woven leather belt, Brunello Cucinelli pressed-creased multi-pocket straight-leg trousers , Brunello Cucinelli ribbed button-up gilet , Brunello Cucinelli long-sleeve cotton shirt, Brunello Cucinelli suede Oxford shoes",
      },
      {
        id: 18,
        title: "Moschino Kids teddy bear-print jumper dress",
        price: "177",
        images: [
          "https://i.ibb.co/XZ2JrSR/kids-8-1.webp",
          "https://i.ibb.co/x71pVcJ/kids-8-2.webp",
          "https://i.ibb.co/xjjQ9pT/kids-8-3.webp",
        ],
        colors: ["#11120F", "#B68B61", "#dddd11"],
        sizes: ["XS", "S", "M", "L"],
        outOfStock: false,
        description:
          "Crafted from soft wool, this AMI Paris shirt jacket offers a classic look thanks to the black and grey check pattern. The piece's relaxed aesthetic speaks to the brand's essence.",
      },
    ],
  },
};

export default categories;
