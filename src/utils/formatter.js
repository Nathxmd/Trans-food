// src/utils/formatters.js
export const formatPrice = (price) => {
  if (typeof price === "number") {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
  return price;
};
