export interface ProductType {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
}
export interface ProductCartType {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

export interface stateType {
  store: {
    cart: {
      cartProducts: ProductCartType[];
      allProducts: [];
    };
    favorite: { favoriteData: ProductType[] };
    user: { userInfo: null | string };
    // cart:{},
  };
}
