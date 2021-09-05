export interface BaseEntity {
  id: string | null;
}

export interface Widget extends BaseEntity {
  title: string;
  description: string;
}

export interface Item extends BaseEntity {
  title: string;
  description: string;
}
