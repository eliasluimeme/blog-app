import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeAgo(timestamp: string) {
  const previous = new Date(timestamp);
  const current = new Date();

  const elapsed = current.getTime() - previous.getTime();

  // Define the intervals in milliseconds
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  // Calculate the difference in time units
  if (elapsed < minute) {
      return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < hour) {
      return Math.round(elapsed / minute) + ' minutes ago';
  } else if (elapsed < day) {
      return Math.round(elapsed / hour) + ' hours ago';
  } else if (elapsed < week) {
      return Math.round(elapsed / day) + ' days ago';
  } else if (elapsed < month) {
      return Math.round(elapsed / week) + ' weeks ago';
  } else if (elapsed < year) {
      return Math.round(elapsed / month) + ' months ago';
  } else {
      return Math.round(elapsed / year) + ' years ago';
  }
}