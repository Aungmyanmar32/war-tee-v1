interface BaseTypes {
  id?: number;
  name: string;
}

export interface Menu extends BaseTypes {
  price: number;
  asset_url?: string;
  description?: string;
}

export interface MenuCategory {
  id?: number;
  name: string;
}
