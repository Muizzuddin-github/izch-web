import levelMultiplier from "../data/levelMultiplier";

export const transformatifReaction = (
  reaction,
  levelCharacter,
  em,
  reactionBonus = 0
) => {
  const reactionMultiplier = {
    Hyperbloom: 3,
    Burgeon: 3,
    Overload: 2,
    Bloom: 2,
    Shattered: 1.5,
    "Electro-Charged": 1.2,
    Swirl: 0.6,
    Superconduct: 0.5,
    Burning: 0.25,
  };

  const resultMultiplier =
    reactionMultiplier[reaction] * levelMultiplier[levelCharacter];

  const result = 1 + (16 * em) / (2000 + em) + reactionBonus;

  return resultMultiplier * result;
};
