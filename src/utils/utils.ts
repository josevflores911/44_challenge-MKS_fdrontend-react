export function formatCurrency(amount: string): string {
    const value = parseInt(amount);
    const formattedAmount = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
    });
  
    return formattedAmount;
  }