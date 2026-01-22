import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string, offset = 80) {
  const element = document.getElementById(id);
  if (!element) return;

  const y =
    element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}
