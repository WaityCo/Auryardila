
export interface UGCProject {
  id: string;
  brand: string;
  product: string;
  videoUrl?: string;
  imageUrl: string;
  category: 'Beauty' | 'Fashion' | 'Lifestyle';
  socialProof?: string;
}

export interface ModelingShot {
  id: string;
  imageUrl: string;
  client: string;
  description: string;
}

export interface BrandLogo {
  name: string;
  logo: string;
}