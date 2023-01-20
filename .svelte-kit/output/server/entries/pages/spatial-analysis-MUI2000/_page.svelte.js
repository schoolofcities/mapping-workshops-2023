import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as TopSofC } from "../../../chunks/TopSofC.js";
/* empty css                      */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ih4hus_START --><link href="${"https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;800&display=swap"}" rel="${"stylesheet"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1"}">${$$result.title = `<title>Spatial Analysis &amp; GIS - MUI2000</title>`, ""}<meta name="${"description"}" content="${"Intro to spatial analysis and a GIS workshop for MUI2000"}"><meta name="${"author"}" content="${"Jeff Allen"}"><!-- HEAD_svelte-1ih4hus_END -->`, ""}



${validate_component(TopSofC, "Top").$$render($$result, {}, {}, {})}

<main><div id="${"title"}"><p><i>GIS and Spatial Analysis Teaching Material for MUI2000</i></p>

        <p>Jeff Allen | January 2023</p></div>

    <div id="${"text"}"><p>Introduction to spatial analysis | <a href="${"./spatial-analysis-MUI2000/intro-spatial-data"}">slides</a></p>
        <p>GIS Workshop | <a href="${"./spatial-analysis-MUI2000/GIS-workshop"}">instructions &amp; data</a></p></div>

</main>`;
});
export {
  Page as default
};
