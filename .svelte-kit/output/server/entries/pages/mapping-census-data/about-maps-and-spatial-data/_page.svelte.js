import { c as create_ssr_component } from "../../../../chunks/index.js";
/* empty css                         */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-fn738v{margin:0 auto;width:100%;height:100%;position:relative;overflow:hidden}#page.svelte-fn738v{width:100vw;height:100vh}.slides.svelte-fn738v{border:none;width:100vw;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1"}">

<main class="${"svelte-fn738v"}"><div id="${"page"}" class="${"svelte-fn738v"}"><iframe class="${"slides svelte-fn738v"}" src="${"/mapping-workshops-2023/slides/about-spatial-data-022023.html"}"></iframe></div>

</main>`;
});
export {
  Page as default
};
