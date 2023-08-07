export const getTotalPage = (allCount: number, limit: number): number => {
  return Math.ceil(allCount / limit);
};
