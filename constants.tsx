
import { UGCProject, ModelingShot, BrandLogo } from './types';

export const UGC_PROJECTS: UGCProject[] = [
  {
    id: '1',
    brand: 'La Roche-Posay',
    product: 'Anthelios UV Mune',
    imageUrl: 'https://images.unsplash.com/photo-1594434297575-583848486439?auto=format&fit=crop&q=80&w=400',
    category: 'Beauty',
    socialProof: '1.2M+ Views'
  },
  {
    id: '2',
    brand: 'Vogue Cosmetics',
    product: 'Labial Resist',
    imageUrl: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=400',
    category: 'Beauty',
    socialProof: 'Top Performance 2024'
  },
  {
    id: '3',
    brand: 'Ponds',
    product: 'Rutina Skincare',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400',
    category: 'Beauty',
    socialProof: 'Viral Reach'
  },
  {
    id: '4',
    brand: 'Marca de Moda',
    product: 'Colección Verano',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400',
    category: 'Fashion',
    socialProof: 'Best Seller Campaign'
  },
  {
    id: '5',
    brand: 'Neutrogena',
    product: 'Hydro Boost',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400',
    category: 'Beauty',
    socialProof: '850K+ Impressions'
  },
  {
    id: '6',
    brand: 'Sephora',
    product: 'Night Glow',
    imageUrl: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&q=80&w=400',
    category: 'Beauty',
    socialProof: 'Featured Content'
  }
];

export const MODELING_SHOTS: ModelingShot[] = [
  {
    id: 'm1',
    client: 'Editorial de Moda',
    description: 'Retrato de alta costura con iluminación experimental',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'm2',
    client: 'Campaña Swimwear',
    description: 'Shoot en locación para marca de lujo',
    imageUrl: 'https://images.unsplash.com/photo-1529139513477-323c66b8d515?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'm3',
    client: 'Campaña de Belleza',
    description: 'Modelaje para Miss Universe Colombia',
    imageUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'm4',
    client: 'Vogue Boutique',
    description: 'Sesión de fotos comercial en estudio',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000'
  }
];

export const BRANDS: BrandLogo[] = [
  { name: 'VOGUE', logo: 'Vogue' },
  { name: 'Ponds', logo: 'Ponds' },
  { name: 'La Roche-Posay', logo: 'LRP' },
  { name: 'Vichy', logo: 'Vichy' },
  { name: 'Zara', logo: 'Zara' },
  { name: 'L’Oréal', logo: 'L’Oréal' },
];