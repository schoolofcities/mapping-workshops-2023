import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
/* empty css                      */const logo = "/mapping-workshops-2023/_app/immutable/assets/top-logo-ed729436.svg";
const TopSofC_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#bar.svelte-5s79qw{position:fixed;overflow:hidden;top:0px;height:50px;background-color:white;margin-bottom:20px;border-bottom:solid 1px black;width:100%;min-width:200px;padding-left:0px;padding-right:0px;z-index:5;opacity:0.92}#logo.svelte-5s79qw{margin:auto;max-width:142px}a.svelte-5s79qw{color:black}a.svelte-5s79qw:hover{opacity:0.7}img.svelte-5s79qw{color:blue}img.svelte-5s79qw:hover{opacity:0.5;cursor:pointer}",
  map: null
};
const TopSofC = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="${"bar"}" class="${"svelte-5s79qw"}"><div id="${"logo"}" class="${"svelte-5s79qw"}"><a href="${"https://www.schoolofcities.utoronto.ca/"}" class="${"svelte-5s79qw"}"><img${add_attribute("src", logo, 0)} alt="${"School of Cities"}" class="${"svelte-5s79qw"}"></a></div>

</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#page.svelte-dd6713{background-color:red;width:100vw;height:100vh}.slides.svelte-dd6713{border:none;width:100vw;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1svbdg2_START --><link href="${"https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;800&display=swap"}" rel="${"stylesheet"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1"}"><!-- HEAD_svelte-1svbdg2_END -->`, ""}



${validate_component(TopSofC, "Top").$$render($$result, {}, {}, {})}

<main><div id="${"page"}" class="${"svelte-dd6713"}"><iframe class="${"slides svelte-dd6713"}" src="${"/mapping-workshops-2023/slides/index.html"}"></iframe></div>

</main>`;
});
export {
  Page as default
};
