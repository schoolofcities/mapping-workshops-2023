import { c as create_ssr_component, d as add_attribute } from "./index.js";
const logo = "/mapping-workshops-2023/_app/immutable/assets/top-logo-ed729436.svg";
const TopSofC_svelte_svelte_type_style_lang = "";
const css = {
  code: "#bar.svelte-5s79qw{position:fixed;overflow:hidden;top:0px;height:50px;background-color:white;margin-bottom:20px;border-bottom:solid 1px black;width:100%;min-width:200px;padding-left:0px;padding-right:0px;z-index:5;opacity:0.92}#logo.svelte-5s79qw{margin:auto;max-width:142px}a.svelte-5s79qw{color:black}a.svelte-5s79qw:hover{opacity:0.7}img.svelte-5s79qw{color:blue}img.svelte-5s79qw:hover{opacity:0.5;cursor:pointer}",
  map: null
};
const TopSofC = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"bar"}" class="${"svelte-5s79qw"}"><div id="${"logo"}" class="${"svelte-5s79qw"}"><a href="${"https://www.schoolofcities.utoronto.ca/"}" class="${"svelte-5s79qw"}"><img${add_attribute("src", logo, 0)} alt="${"School of Cities"}" class="${"svelte-5s79qw"}"></a></div>

</div>`;
});
export {
  TopSofC as T
};
