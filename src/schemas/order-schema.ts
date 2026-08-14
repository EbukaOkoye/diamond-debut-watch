import { z } from 'zod';

export const orderSchema = z.object({
  full_name: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  whatsapp: z.string().optional(),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  address: z.string().min(5, 'Delivery address is required'),
  state: z.string().min(1, 'Please select your delivery state'),
  qty: z.enum(['1', '2', '3'], { required_error: 'Select your package' }),
  color: z.string().min(1, 'Select a watch color'),
});

export type OrderSchemaType = z.infer<typeof orderSchema>;
