export function fromPercentage(percentage) {
  return parseFloat(percentage) / 100;
}

export const calculateDamageDifferencePercentageIncrease = (
  damage1,
  damage2
) => {
  const difference = damage2 - damage1;
  const percentage = (difference / damage1) * 100;

  return +percentage.toFixed(0);
};

export const formatNumber = (nm) => {
  const formattedNumber = new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(nm);

  return formattedNumber;
};
