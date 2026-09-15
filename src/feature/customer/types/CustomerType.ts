export interface CustomerType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string | null;
  isActive: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;

  _count: {
    orders: number;
    reviews: number;
  };

  totalOrders: number;
  totalSpent: number;
}
export interface AddressType {
  id: string;
  [key: string]: unknown;
}

export interface ReviewType {
  id: string;
  [key: string]: unknown;
}

export interface WishlistType {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  items: WishlistItemType[];
}

export interface WishlistItemType {
  id: string;
  [key: string]: unknown;
}

export interface ActivityType {
  id: string;
  userId: string;
  type: string;
  metadata: unknown | null;
  createdAt: string;
}

export interface OrderType {
  id: string;
  [key: string]: unknown;
}

export interface ProductType {
  id: string;
  [key: string]: unknown;
}
export interface CustomerDetailType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string | null;
  isActive: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;

  addresses: AddressType[];
  reviews: ReviewType[];

  wishlist: WishlistType;

  activities: ActivityType[];

  orders: OrderType[];

  totalOrders: number;
  deliveredOrders: number;
  totalSpent: number;
  averageOrderValue: number;

  lastOrder: OrderType | null;

  purchasedProducts: ProductType[];
}
