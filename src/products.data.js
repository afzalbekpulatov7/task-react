import categories from "./categories.data";

const products = [
  ...categories.women.items,
  ...categories.men.items,
  ...categories.kids.items,
];

export default products;
