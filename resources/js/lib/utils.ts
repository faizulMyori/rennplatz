import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str:string){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDateTimeToDate(dateStr:string) {
  const [date,time] = dateStr.split(" ");
  dateStr = `${date}T${time}.000Z`
  return new Date(dateStr);
};