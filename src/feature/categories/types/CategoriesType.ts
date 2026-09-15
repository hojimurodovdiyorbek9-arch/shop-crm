export interface CategoryType {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string | null;
  parentId: string | null;
  isActive: boolean;
  sortOrder: number;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  parent: CategoryType | null;
  _count: {
    products: number;
    children: number;
  };
}
export interface CreateCategoryType {
  name: string;
  slug: string;
  description: string;
  image: string | null;
  parentId: string | undefined;
  isActive: boolean;
  sortOrder: number;
}
export interface CreateCategoryType {
  name: string;
  slug: string;
  description: string;
  image: string | null;
  parentId: string | undefined;
  isActive: boolean;
  sortOrder: number;
}
