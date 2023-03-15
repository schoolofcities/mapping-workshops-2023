import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as TopSofC } from "../../../chunks/TopSofC.js";
/* empty css                      */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-17c09x5_START --><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin><link href="${"https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"}" rel="${"stylesheet"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1"}"><!-- HEAD_svelte-17c09x5_END -->`, ""}



${validate_component(TopSofC, "Top").$$render($$result, {}, {}, {})}

<main><div id="${"title"}"><h1>Bivariate Choropleth Maps</h1>

        <p>A tutorial on creating bivariate choropleth maps with Python and QGIS</p>

        <p><a href="${"https://jamaps.github.io/"}" target="${"_blank"}">Jeff Allen</a></p>

        <p>April, 2023</p></div>

    <div id="${"text"}"><p>Bivariate maps are pretty aweseome. They
        </p>

        <p></p>

        <code>df = pd.read_csv(&quot;meow.csv&quot;)
            <br>
            df.groupby()

        </code></div>

</main>`;
});
export {
  Page as default
};
