import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createWhatsAppLink(phone: string, text: string) {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

export const RESTAURANT_PHONE = "919876543210"; // Replace with real number
