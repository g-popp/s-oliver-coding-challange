type Color = {
  variant: string;
  group: string;
  value: string;
};

type ColorVariant = {
  wishList: boolean;
  shoppingCart: boolean;
  color: Color;
  pictures: {
    front: string;
    flat: string;
    back: string;
    outfit: string;
  };
};

type Product = {
  id: string;
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
  colorVariants: ColorVariant[];
};
