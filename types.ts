
export interface ServicePlan {
  id: string;
  name: string;
  stations: string;
  benefits: string[];
  price: string;
  isPopular?: boolean;
  targetAudience: string;
  technicalHighlights: string;
}

export interface NavItem {
  label: string;
  href: string;
}
