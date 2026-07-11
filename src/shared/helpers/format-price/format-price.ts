export const formatPrice = (valor: number) => {
  return (valor / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
