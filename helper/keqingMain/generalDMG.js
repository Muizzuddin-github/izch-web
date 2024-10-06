export const enemyResMult = (res, penurunanRes = 0) => {
  const finalResistance = +(res - penurunanRes).toFixed(2);
  if (finalResistance >= 0.75) {
    return 1 / (4 * finalResistance + 1);
  } else if (finalResistance >= 0) {
    return 1 - finalResistance;
  } else {
    return 1 - finalResistance / 2;
  }
};
