import { format } from "date-fns";
import { nl } from "date-fns/locale";

export const formatDateTime = (
  input: Date | string | null | undefined
): string => {
  if (!input) return "—"; // handle null/undefined
  const date = input instanceof Date ? input : new Date(input);

  if (isNaN(date.getTime())) {
    return "Invalid date"; // guard against bad input
  }

  return format(date, "dd/MM/yyyy | HH:mm");
};

export const formatDate = (input: Date | string | null | undefined): string => {
  if (!input) return "—"; // handle null/undefined
  const date = input instanceof Date ? input : new Date(input);

  if (isNaN(date.getTime())) {
    return "Invalid date"; // guard against bad input
  }

  return format(date, "dd/MM/yyyy");
};

export const formatTime = (input: Date | string | null | undefined): string => {
  if (!input) return "—"; // handle null/undefined
  const date = input instanceof Date ? input : new Date(input);

  if (isNaN(date.getTime())) {
    return "Invalid date"; // guard against bad input
  }

  return format(date, "HH:mm");
};

export const formatDayAndTime = (
  input: Date | string | null | undefined
): string => {
  if (!input) return "—"; // handle null/undefined
  const date = input instanceof Date ? input : new Date(input);

  if (isNaN(date.getTime())) {
    return "Invalid date"; // guard against bad input
  }

  const result = format(date, "EEEE HH:mm", { locale: nl });

  // Eerste letter hoofdletter maken
  return result.charAt(0).toUpperCase() + result.slice(1);
};
