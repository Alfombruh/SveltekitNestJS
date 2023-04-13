import type { LayoutLoad } from './$types';
export const ssr=false; //mmakes it so it is an SPAd
export const load = (async () => {
    return {};
}) satisfies LayoutLoad;