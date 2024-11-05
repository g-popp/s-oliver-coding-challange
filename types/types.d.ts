type Product = {
  id: number;
  name: string;
  detail: string;
  category: string;
  brand: string;
  price: number;
  tags: {
    new: boolean;
    sustainable: boolean;
    premium: boolean;
  };
  colorVariants: {
    wishList: boolean;
    shoppingCart: boolean;
    color: {
      variant: string;
      group: string;
      value: string;
    };
    pictures: {
      front: string;
      flat: string;
      back: string;
      outfit: string;
    };
  }[];
};
