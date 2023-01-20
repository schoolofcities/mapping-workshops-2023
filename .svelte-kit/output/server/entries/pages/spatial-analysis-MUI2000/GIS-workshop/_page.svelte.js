import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { T as TopSofC } from "../../../../chunks/TopSofC.js";
/* empty css                         */const imgOsmCollege = "/mapping-workshops-2023/_app/immutable/assets/osm-college-bf243ca2.png";
const imgDemToronto = "/mapping-workshops-2023/_app/immutable/assets/dem-toronto-c547fdc3.png";
const imgGisLayers = "/mapping-workshops-2023/_app/immutable/assets/gis-layers-479f3a99.png";
const imgQgisBlank = "/mapping-workshops-2023/_app/immutable/assets/qgis-blank-c49863c8.png";
const imgQgisLayers1 = "/mapping-workshops-2023/_app/immutable/assets/qgis-layers1-2075521d.png";
const imgQgisCentre = "/mapping-workshops-2023/_app/immutable/assets/qgis-centre-db6f5d95.png";
const imgQgisBikeshare = "/mapping-workshops-2023/_app/immutable/assets/qgis-bikeshare-2fd27b69.png";
const imgQgisRailct = "/mapping-workshops-2023/_app/immutable/assets/qgis-railct-8ad297f5.png";
const imgQgisChoropleth = "/mapping-workshops-2023/_app/immutable/assets/qgis-choropleth-81a06853.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1xs4wlw_START --><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin><link href="${"https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"}" rel="${"stylesheet"}"><link href="${"https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"}" rel="${"stylesheet"}"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1, minimum-scale=1"}">${$$result.title = `<title>GIS Workshop / MUI2000</title>`, ""}<meta name="${"description"}" content="${"GIS workshop for MUI2000"}"><meta name="${"author"}" content="${"Jeff Allen"}"><!-- HEAD_svelte-1xs4wlw_END -->`, ""}



${validate_component(TopSofC, "Top").$$render($$result, {}, {}, {})}

<main><div id="${"title"}"><h1>(Q)GIS WORKSHOP</h1>

        <p>Jeff Allen</p>

        <p>January 23 &amp; 30, 2023</p></div>

    <div id="${"text"}"><p>We use Geographic Information Systems (GIS) to analyze, manipulate, and visualize spatial information on a computer.</p>
        
        <p>Why is GIS useful?</p>

        <ul class="${"list"}"><li>visualize spatial data</li>
            <li>explore spatial patterns and relationships</li>
            <li>make pretty and useful maps</li>
            <li>generate new data, either &quot;by hand&quot; or via spatial relationships from other data (e.g. through spatial queries)</li>
            <li>perform spatial analysis (i.e. statistical methods applied to spatial data)</li></ul>

        <p>GIS is often thought of as more than just a tool or piece of software. It can refer to all aspects of managing and analyzing digital spatially referenced data.</p>

        <p>The following provides a brief overview of GIS followed by two short tutorials for getting started with GIS, using <a href="${"https://www.qgis.org/en/site/"}">QGIS</a>, a free and open source desktop GIS software. The first tutorial uses data from the City of Toronto&#39;s Open Data portal. The second analyzes demographic data from the Canadian census as well as public transit data for Toronto</p></div>

    <div id="${"text"}"><h2>Spatial Data</h2>

        <p>A spatial dataset is a combination of...</p>

        <ul class="${"list"}"><li>attribute data (the what)</li>
            <li>location data and spatial dimensions (the where)</li></ul>

        <p>Spatial data, this combination of attribute and location data, can be organized and represented in a number of different formts.</p>

        <p>For example, a city can be represented on a map via a single point with a label (e.g. based on latitude and longitude coordinates). Or a city can be represented as a polygon, based on on it&#39;s administrative boundary</p>

        <p>Importantly, there are always uncertainty about the level of accuracy, precision, and resolution of spatial data. Spatial data are representations of reality, and thus have some loss of information when used for visualization and analysis. Any analysis can only be as good as the available data.</p>

        <p>The two most common forms of spatial data are <b>vector</b> data and <b>raster</b> data.</p>

        <h3>Vector Data</h3>

        <p>Vector data uses geographic coordinates, or a series of coordinates, to create points, lines, and polygons representing real-world features.</p>

        <p>e.g. in the map below (a screenshot of <a href="${"https://www.openstreetmap.org/"}">OpenStreetMap</a>) lines are used to represent roads and rail, points for retail, polygons for parks and buildings, etc. </p>

        <img${add_attribute("src", imgOsmCollege, 0)} alt="${"OpenStreetMap"}">

        <p><a href="${"https://en.wikipedia.org/wiki/GeoJSON"}">GeoJSON</a> and the <a href="${"https://en.wikipedia.org/wiki/Shapefile"}">Shapefile</a> are probably the two most common vector data formats.</p>

        <h3>Raster Data</h3>

        <p>Raster data represents space as a continuous grid with equal cell sizes. Each cell contains a value pertaining to the type of feature it represents. These values can be quantitative (e.g. elevation) or categorical (e.g. type of land use). Common examples of raster data include digital elevation models (DEMs), satellite imagery, and scanned images (e.g. historical maps).</p>

        <p>e.g. the map below shows a DEM for Toronto at two different scales. </p>

        <img${add_attribute("src", imgDemToronto, 0)} alt="${"DEM Toronto"}"></div>

    <div id="${"text"}"><h2>GIS</h2>

        <p>The power of GIS software and tools is the ability to work with data stored in different layers (e.g. a layer for roads, another for buildings, and so on) in conjunction with each other. These layers can be visualized and analyzed relative to each other based on their spatial relationships.</p>

        <img width="${"350px"}"${add_attribute("src", imgGisLayers, 0)} alt="${"gis-layers"}">

        <p>GIS software usually links to data stored elsewhere on a computer, rather than in a project file. If the source location of the data (i.e. which folder it&#39;s in) changes, then this will have to be updated in the GIS project. If data are edited in GIS, it will update the data in its source location.</p>

        <h3>Common Tools &amp; Software</h3>

        <p>Desktop GIS software</p>
        <ul class="${"list"}"><li>QGIS (free and open source, can do most tasks, popular in tech and academia and non-profits)</li>
            <li>ArcGIS (proprietary, can do most tasks, used by big organizations)</li></ul>
        <p>Web-based GIS and mapping</p>
        <ul class="${"list"}"><li>MapBox (commercial, free basic accounts)</li>
            <li>CARTO (commercial)</li>
            <li>ArcGIS Online (commercial)</li>
            <li>D3 (free, steeper learning curve)</li>
            <li>Observable (free, steeper learning curve)</li></ul>
        <p>Data management &amp; processing of spatial data</p>
        <ul class="${"list"}"><li>Python, R (for processing data, statistical analysis, making simple maps)</li>
            <li>PostGIS (spatial databases and queries)</li></ul>
        <p>Many more!</p></div>

    <div id="${"text"}"><h2>Tutorial (1)</h2>

        <h3>Loading, Querying, and Visualizing Data</h3>

        <p>First open up QGIS with a blank project. The top bars are various functions/tools. The &quot;Browser&quot; allows for navigating and loading datasets. The &quot;Layers&quot; panel will populate with each dataset that is added to the project. And the big blank square is where your map data will be visualized.
        </p>
        <img${add_attribute("src", imgQgisBlank, 0)} alt="${"qgis-blank"}">
        <p>Let&#39;s begin by grabbing data from the City of Toronto&#39;s Open Data portal and loading it into QGIS. This is the data we&#39;ll be looking at:
        </p>
        <ul><li><a href="${"https://open.toronto.ca/dataset/business-improvement-areas/"}">Business Improvement Areas (BIA)</a>.</li>
            <li><a href="${"https://open.toronto.ca/dataset/toronto-centreline-tcl/"}">Street Centrelines</a>.</li>
            <li><a href="${"https://open.toronto.ca/dataset/bike-share-toronto/"}">Bike Share Stations</a>. This data are a &quot;live&quot; <code>json</code> feed, I&#39;ve scraped it with this <a href="${""}">script</a>, the result can be downloaded from <a href="${""}">here</a>.</li>
            <li><a href="${"https://open.toronto.ca/dataset/web-map-services/"}">Aerial Imagery</a>. We&#39;ll be adding the most recent imagery layer.</li></ul>
        <p>Let&#39;s start by loading in the aerial imagery as a base layer. This is a raster dataset (each cell/pixel has a colour value) stored on the City&#39;s server. It can be loaded into QGIS by right-clicking on <i>WMS/WMTS</i> layer in the browser panel and adding a <i>New Connection</i> or by going to <i>Layer-&gt;Data Source Manager</i> and navigating to <i>WMS/WMTS</i>. Once there, add in this URL <code>https://gis.toronto.ca/arcgis/rest/services/basemap/cot_ortho/MapServer/WMTS</code> and provide a descriptive name for the layer.
        </p>
        <p>Now let&#39;s add BIA and Centreline data. Download these from the links provided above. They can be added into QGIS either by dragging and dropping them from your file manager onto the map or layers panel. Or they can be added by <i>Layer-&gt;Data Source Manager</i> and navigating to <i>Vector&quot;</i>.
        </p>
        <p>Once added, your map should look something like this:
        </p>
        <img${add_attribute("src", imgQgisLayers1, 0)} alt="${"qgis-layers1"}">
        <p>The layers can be toggled on and off. They can also be dragged into different orders, the top layer on the panel will always be the layer that is shown on top on the map. Right-clicking on the layer, going to <i>Properties</i>, then <i>Symbology</i>. In the image above, I changed the colours of the two vector layers, as well as the stroke-width of the Centreline layer.
        </p>
        <p>Let&#39;s explore how we can select and filter data. We&#39;ll use the Centreline layer as an example. Right-clicking they layer allows us to view it&#39;s attribute table. There is a column in here called <code>FEATURE_00</code> which indicates the type of feature. Right-click and open up the <i>Properties</i> of the layer, then click <i>Source</i>, and play with filtering the data. e.g. this is a query for filtering to only show laneways <code>&quot;FEATURE_00&quot; = &#39;Laneway&#39;</code></p>
        <p>We can also visualize data based on values in the attribute table. In the CentreLine <i>Properties</i>, go to <i>Symbology</i>, then at the top, select <i>Categorized</i>. Try selecting <i>FEATURE_00</i> again. We can now quickly visualize where different features are on the map! Each category can also be turned off and on in the layers panel as well.
        </p>
        <img${add_attribute("src", imgQgisCentre, 0)} alt="${"qgis-centre"}">
        <p>Now let&#39;s learn how to visualize data based on numeric data. We can use the bike share station data for this. Download and load this dataset into QGIS. Then go to it&#39;s <i>Properties</i>, <i>Symbology</i>, then at the top, select <i>Graduated</i>. In this menu, we can color the points based on a numeric value in a column. Let&#39;s colour by the <code>capacity</code> column. Notice the options available for classifying data (number of bins, whether to use quantiles or equal intervals, etc.). Different classification schemes can highlight or hide different spatial patterns.
        </p>
        <img${add_attribute("src", imgQgisBikeshare, 0)} alt="${"qgis-bikeshare"}"></div>

    <div id="${"text"}"><h2>Tutorial (2)</h2>

        <h3>Table Joins and Choropleths</h3>

        <p>Start up a new QGIS project and add in the data downloaded from <a href="${"https://github.com/schoolofcities/mapping-workshops-2023/raw/main/data/toronto.zip"}">here</a>.</p>

        <p>First, let&#39;s look at data. We have a polygon layer which represents census tracts. These data are created by Statistics Canada to share aggregated for the Canadian census. They approximately correspond to neighbourhoods. Census tract boundary data were originally downloaded from <a href="${"https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21"}">here</a>, while attribute data were downloaded from <a href="${"https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/index-eng.cfm"}">here</a>.</p>

        <p>We also have a line layer representing major transit lines in Toronto (originally sourced from Metrolinx). We can categorize line data by <code>status</code>, using different colours or line types to display whether the transit route is existing or under construction.</p>

        <img${add_attribute("src", imgQgisRailct, 0)} alt="${"qgis-railct"}">

        <p>Also included is a <code>.csv</code> table which contains data linked to the unique identifier, <code>ctuid</code>, of each census tract. We can use the <code>ctuid</code> to join this tabular data to the spatial boundaries of dissemination areas. Do so by, first adding the table as a layer into QGIS. Then open up the <i>Properties</i> of the dissemination area boundary, and go to <i>Joins</i>. Add a new join, using <code>ctuid</code> as the source and target fields. Once complete, we can open up the attribute table and see these additional columns.</p>

        <p>We can now visualize these polygons as a <a href="${"https://en.wikipedia.org/wiki/Choropleth_map"}">choropleth map</a> (maps where polygons are shaded by numeruc attribute values). Similar to the previous tutorial, open up the layer properties, go to symbology, and style based on graduated symbols.  It&#39;s often preferred to visualize a choropleth as a rate or a density (in terms of people per area) in order not to exaggerate counts in larger areas.</p>

        <p>(Note that a numeric column might be imported as a string. If this is the case, to convert to a number to visualize, click on the epsilon on the top-right, and use the <code>to_real()</code> function to convert to a numeric value).</p>

        <p>For example, the following shows a choropleth map of the percent of people who live in low-income households by neighbourhood relative to major transit lines.</p>

        <img${add_attribute("src", imgQgisChoropleth, 0)} alt="${"qgis-choropleth"}"></div>

</main>`;
});
export {
  Page as default
};
