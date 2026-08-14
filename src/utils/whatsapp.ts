import { OrderSchemaType } from '../schemas/order-schema';
import { WHATSAPP_NUMBER } from '../lib/constants';

export const buildWhatsAppOrderUrl = (
  data: OrderSchemaType,
  packageLabel: string,
  price: number
): string => {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');

  const lines = [
    `*NEW DENVOSI WRIST WATCH ORDER* 🛍️`,
    ``,
    `👤 *Name:* ${data.full_name}`,
    `📞 *Phone:* ${data.phone}`,
    data.whatsapp ? `💬 *WhatsApp:* ${data.whatsapp}` : null,
    data.email ? `📧 *Email:* ${data.email}` : null,
    `📍 *Address:* ${data.address}`,
    `🗺️ *State:* ${data.state}`,
    `📦 *Package:* ${packageLabel}`,
    `🎨 *Color:* ${data.color}`,
    `💰 *Total Amount:* ₦${price.toLocaleString()}`,
    `🚚 *Payment Method:* Pay on Delivery`,
    ``,
    `Please confirm my order for processing. Thank you!`,
  ];

  const message = lines.filter((line) => line !== null).join('\n');

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};
