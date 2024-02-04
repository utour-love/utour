/**
 * 生成随机百分比值。
 * @returns 表示随机百分比值的字符串。
 */
export const getRation = () => {
  return Math.floor(Math.random() * 100) + "%";
};

/**
 * 生成指定最小值和最大值（含）之间的随机数。
 * @param min 范围的最小值。
 * @param max 范围的最大值。
 * @returns 最小值和最大值之间的随机数。
 */
export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
