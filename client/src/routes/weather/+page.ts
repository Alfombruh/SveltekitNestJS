import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const res = await fetch("https://wttr.in/Urduliz")
    .then((res) => res.text())
    .catch((err) => console.log(err));
  return { res };
}) satisfies PageLoad;
