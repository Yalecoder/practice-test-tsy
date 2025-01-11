export const calcularPercentualPorEstado = (
    faturamento: Record<string, number>
  ): { estado: string; percentual: number }[] => {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
  
    return Object.entries(faturamento).map(([estado, valor]) => ({
      estado,
      percentual: parseFloat(((valor / total) * 100).toFixed(2)),
    }));
  };
  