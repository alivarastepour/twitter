export const toUpper = (phrase: string): string => {
  let ans: string = "";
  for (const word of phrase.split(" ")) {
    ans += word[0].toLocaleUpperCase() + word.slice(1) + " ";
  }
  return ans;
};
