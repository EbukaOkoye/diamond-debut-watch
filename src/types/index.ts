export type PackageQuantity = '1' | '2' | '3';

export type WatchColor = 'green' | 'brown' | 'gold' | 'black' | 'silver';

export interface WatchPackage {
  id: PackageQuantity;
  title: string;
  countLabel: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  description: string;
  isPopular?: boolean;
}

export interface WatchColorOption {
  value: WatchColor;
  label: string;
}

export interface OrderFormInput {
  full_name: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  address: string;
  state: string;
  qty: PackageQuantity;
  color: string;
}

export interface OrderSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  errorMessage: string | null;
  orderSummary: OrderFormInput | null;
  whatsappUrl?: string;
}
