export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo: string;
  isActive: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;

  _count: {
    products: number;
  };
}

export interface BrandsResponse {
  success: boolean;
  data: Brand[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateBrandInput {
  name: string;
  slug: string;
  description: string;
  logo: string;
  isActive: boolean;
}

export interface UpdateBrandInput {
  name: string;
  slug: string;
  description: string;
  logo: string;
  isActive: boolean;
}
