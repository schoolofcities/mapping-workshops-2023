import { c as create_ssr_component, d as add_attribute } from "./index.js";
const logo = "/mapping-workshops-2023/_app/immutable/assets/top-logo-full-520c6806.svg";
const TopSofC_svelte_svelte_type_style_lang = "";
const css = {
  code: "#bar.svelte-xf3x57{position:fixed;overflow:hidden;top:0px;height:50px;background-color:white;margin-bottom:20px;border-bottom:solid 1px rgb(64, 64, 64);width:100%;min-width:200px;padding-left:0px;padding-right:0px;z-index:5;opacity:0.92}#logo.svelte-xf3x57{margin:auto;max-width:230px;height:50px}a.svelte-xf3x57{color:black}a.svelte-xf3x57:hover{opacity:0.7}img.svelte-xf3x57{height:50px;color:blue}img.svelte-xf3x57:hover{height:50px;opacity:0.5;cursor:pointer}",
  map: null
};
const TopSofC = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"bar"}" class="${"svelte-xf3x57"}"><div id="${"logo"}" class="${"svelte-xf3x57"}"><a href="${"https://www.schoolofcities.utoronto.ca/"}" class="${"svelte-xf3x57"}"><img${add_attribute("src", logo, 0)} alt="${"School of Cities"}" class="${"svelte-xf3x57"}"></a></div>

</div>`;
});
export {
  TopSofC as T
};
