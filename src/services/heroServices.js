
export const getAll = async () => {
  let res = await fetch("https://akabab.github.io/starwars-api/api/all.json")

  let data = await res.json();

  let result = data.slice(0, 16);

  return result

}