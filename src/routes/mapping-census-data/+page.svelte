<script>

	import Top from "../lib/TopSofC.svelte";
	import '../styles.css';
    import imgTorontoDensity from './assets/toronto-density.png';
    import imgOntarioFrench from './assets/ontario-french.png';
    import imgOntarioLanguage from './assets/ontario-language.png';
    import imgCensusBoundaries from './assets/census-boundaries-legend-eg.png';
    import imgSpatialData from "./assets/spatial-data.svg"
    import imgToronto1909 from "./assets/toronto-1909.png";
    import imgTorontoPortuguese from "./assets/portuguese-toronto.png";
    import imgQgisBlank from "./assets/qgis-blank.png";
    import imgQgisChoropleth from "./assets/qgis-choropleth.png";

</script>


<svelte:head>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"> 

	<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap" rel="stylesheet"/>

	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>

    <title>Mapping Canadian Census Data</title>
    <meta name="description" content="An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS">
    <meta name="author" content="Jeff Allen">

    <meta property="og:title" content="Mapping Canadian Census Data"/>
    <meta property="og:description" content="An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/mapping-workshops-2023/mapping-census-data" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/mapping-workshops-2023/main/src/routes/mapping-census-data/assets/census-map-eg.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/mapping-workshops-2023/mapping-census-data" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Mapping Canadian Census Data" />
    <meta name="twitter:description" content="An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/mapping-workshops-2023/main/src/routes/mapping-census-data/assets/census-map-eg.png" />

</svelte:head>



<Top/>

<main>

    <div id="title">

        <h1>Mapping Canadian Census Data</h1>

        <p>An introductory tutorial for creating maps of Canadian Census data using CensusMapper and QGIS</p>

        <p><a href="https://jamaps.github.io/" target="_blank">Jeff Allen</a></p>

        <p>February, 2023</p>

    </div>

    <div id="text">

        <p>
            <a href="https://www12.statcan.gc.ca/census-recensement/index-eng.cfm" target="_blank">Statistics Canada</a> conducts a national census of the population every five years, asking a range of demographic and socio-economic questions. The most recent census was in 2021. 
        </p>

        <p>
            Lots of census data are publicly available for download. Most data are pre-aggregated to a variety of geographic boundaries (e.g. provinces, cities, neighbourhoods, blocks, etc.), which allow for making a range of maps.
        </p>

        <p>
            For example, here's a map of population density in the Greater Toronto Area (GTA), clearly showing where people are clustered throughout the region. (Click the image to expand).
        </p>

        <a href={imgTorontoDensity} target="_blank"><img src={imgTorontoDensity} alt="toronto-density"></a>

        <p>
            And here's a simple map of French speakers in Ontario.
        </p>

        <a href={imgOntarioFrench} target="_blank"><img src={imgOntarioFrench} alt="toronto-french"></a>

        <p>
            Maps like these are pretty easy to make! Let's learn how.
        </p>
        <p>
            Specifically, this tutorial covers:
        </p>
        <ul class="list">
            <li>an overview of Canadian Census data</li>
            <li>an overview of maps and spatial data</li>
            <li>how to explore census data using <a href="https://censusmapper.ca/" target="_blank">CensusMapper</a></li>
            <li>how to download census data and make custom maps in <a href="https://www.qgis.org/en/site/" target="_blank">QGIS</a></li>
        </ul>
    
    </div>

    <div id="text">
        <h2>Canadian Census Data</h2>
        <p>
            There are two parts to the census, the short-form survey and the long-form survey. The short-form survey asks a set of basic household and demographic questions (e.g. address, age, marital status, etc.) and is sent to all households in Canada. The long-from survey is sent to 25% of households in Canada. It asks additional questions pertaining to a broader range of demographic, social, and economic topics (e.g. religion, education, journey to work, etc.). Statistics Canada also augments collected census survey data by joining in data from other administrative sources, including income data collected by the Canadian Revenue Agency (CRA). 
        </p>
        <p>
            Census data are collected primarily on a household-by-household basis (one adult member in each household usually fills out the census on behalf of everyone in the household). Data of individual responses from the census are often called census "micro-data". Because of personal identification concerns, this data is only accessible by accredited researchers. (A public use microdata file called the PUMF is available thought. It is a random sample of the overall population, with several of the identifying variables removed, such as home addresses and postal code).
        </p>
        <p>
            Summaries (i.e. aggregations) of census data to a range of geographic units are publicly available to view online or download. These are super useful for understanding the demographics of a place. For example, the total population in a province, the number of people who speak Spanish in Toronto, or the average income in a specific neighbourhood. The <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm?Lang=E" target="_blank">Census Profile</a> tables on Statistics Canada's website allows for searching for census data for specific variables and geographic areas. For example, here's an output of "Knowledge of Official Languages" in Ontario.
        </p>
        <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?LANG=E&GENDERlist=1,2,3&STATISTIClist=1&DGUIDlist=2021A000235&HEADERlist=,15,13,18,12,16,14,17&SearchText=Ontario" target="_blank"><img src={imgOntarioLanguage} alt="ontario-language"></a>
        <p>
            The are a number of <a href="https://www12.statcan.gc.ca/census-recensement/2021/geo/ref/index-eng.cfm" target="_blank">geographic boundaries</a> available, ranging in scale from city blocks to the entire country. Below is an example of commonly used boundaries for urban-scale maps and analysis.
        </p>
        <p>
            Each polygon on this map has associated summary census data. Joining this tabular data to these spatial boundaries allows for making a wide range of maps showing the distribution demographics and socio-economic variables.
        </p>
        <a href={imgCensusBoundaries} target="_blank"><img src={imgCensusBoundaries} alt="census-boundaries"></a>

    </div>
    <div id="text">
        <h2>Spatial Data, GIS, and Cartography</h2>

        <p>
            Before moving on to how we can make maps of census data, let's first briefly cover the basics of spatial data and map making.
        </p>
        <p>
            Spatial data are any data that are a combination of attribute data (i.e. the what) and location data (i.e. the where). When working with census and other urban data, location data are based on reference to the Earth's surface. Common ways of representing spatial features are as single points, as lines of connected points, as polygons of enclosed lines, or grids of equal size and spacing.
        </p>
        <a href={imgSpatialData} target="_blank"><img src={imgSpatialData} alt="spatial-data-types"></a>
        <p>
            Spatial data can be symbolized based on its attribute data. This can be based on categorical data (e.g. in the map above, three different colours of lines are used to represent three different types of census boundaries), or this can be based on numeric data (e.g. the map showed at the top of this page shades polygons based on their population density).
        </p>
        <p>
            Cartography is the art and science of creating maps. Maps are a combination of spatial data layered on top of each other. Good cartography requires careful thought about how to symbolize each layer, to aid communication, and to be in harmony with other layers on the map. Check out historical map below of the Toronto Harbour from 1909, each type of feature (water, railways, etc.) has its own carefully chosen symbology.
        </p>
        <a href={imgToronto1909} target="_blank"><img src={imgToronto1909} alt="toronto-1909"></a>
        <p>
            Geographic Information System (GIS) are tools and software for working with spatial data. We can use GIS to make maps and visualize spatial data, but also for a number of data processing and analytical tasks (e.g. we can count how many people live within 1km of a public library). There is a wide range of GIS software available, some cost money, others are free. The mostly widely used free and open-source desktop GIS software is <a href="https://www.qgis.org/en/site/" target="_blank">QGIS</a>. 
        </p>
        <p>
            There are also an increasing number of interactive maps and web-GIS tools available online that are built for specific use-cases. One of which is <a href="https://censusmapper.ca/" target="_blank">CensusMapper</a>, built for visualizing and downloading Canadian census data.
        </p>
        
    </div>

    <div id="text">
        <h2>Using CensusMapper</h2>
        <p>
            <a href="https://censusmapper.ca/" target="_blank">CensusMapper</a> is a website for exploring and downloading census data across Canada. When we first land on the website, it defaults to a map of Population Density in Vancouver and it shares a number of preset options for making maps.
        </p>
        <p>
            If we want to search for a specific census variable, we can click <i>Make a map</i> in the top right, and then select the year (e.g. 2021). Here we can search and explore all available data. Using the search icon at the top-left or by clicking inset Canada map can help us to navigate elsewhere in the country. Just through a few clicks, I was able to create this map of knowledge of Portuguese in Toronto. 
        </p>
        <a href={imgTorontoPortuguese} target="_blank"><img src={imgTorontoPortuguese} alt="toronto-portuguese"></a>
        <p>
            When working with census data, it's often advisable to use the <a href="https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/index-eng.cfm" target="_blank">Census Dictionary</a>, the main reference guidebook, to understand what different data variables and geographies in the census represent. For example, here's the entry for <a href="https://www12.statcan.gc.ca/census-recensement/2021/ref/dict/az/Definition-eng.cfm?ID=pop054" target="_blank">Knowledge of non-official languages</a>.
        </p>
        <p>
            We can also use CensusMapper to download census data for specified geographic boundaries. To do so, click on <i>API</i> on the top right. First select the census year. <i>Variable Selection</i> is used for searching for and selecting the variables (i.e. attribute data such as knowledge of a particular language) to download. <i>Region Selection</i> is the geographic area that we want download data for (e.g. for Toronto). In the <i>Overview</i> panel, we can view what we've selected as well as pick the geographic aggregation level (e.g. Census Tracts, Dissemination Areas, etc.). Once selected, we can then download the attribute table and/or geographic boundaries.
        </p>
    </div>

    <div id="text">

        <h2>Making Census Maps in QGIS</h2>
        <p>
            While CensusMapper (and other online tools like it) are great for exploring and downloading data, we often want to make more customized maps (e.g. for a report, a paper, a website, etc.) or analyze census data in conjunction with other data sources (e.g. comparing  demographic data to the location of libraries, public transit, or grocery stores, etc.). We can do this in desktop GIS software like <a href="https://www.qgis.org/en/site/" target="_blank">QGIS</a>.
        </p>
        <p>
            Let's open up QGIS and add in some example data that can be downloaded from <a href="https://github.com/schoolofcities/mapping-workshops-2023/raw/main/data/toronto.zip" target="_blank">here</a>. 
        </p>
        <p>
            This is the 'empty' view of QGIS when it's first opened. The "Browser" on the left allows for navigating and loading datasets. The "Layers" panel will populate with each dataset that is added to the project. And the big blank square is where your map data will be visualized.
        </p>
        <img src={imgQgisBlank} alt="qgis-blank">
        <p>
            In the download link above, we have a line layer representing major transit lines in Toronto (<code>ttc_routes.geojson</code>) and a point layer representing transit stations (<code>ttc_stops.geojson</code>). Vector data like this can be added into QGIS either by dragging and dropping them from your file manager onto the map or layers panel. Or they can be added by <i>Layer</i>, then <i>Data Source Manager</i>, and navigating to <i>Vector</i>.
        </p>
        <p> 
            There are a number of ways we can symbolize this data. If we right click a layer in the layers panel, go to <i>Properties</i>, and then <i>Symbology</i>, there are lots of options to choose from.
        </p>
        <p>
            In the download link above, there is also a polygon layer that represents neighbourhood Census Tract polygons (<code>toronto_census_tract_2021.shp</code>). Also included is a <code>.csv</code> table which contains data linked to the unique identifier, <code>ctuid</code>, of each Census Tract. (This data and others like it can also be queried and downloaded from CensusMapper or directly form Statistics Canada).
        </p>
        <p> 
            We can use the <code>ctuid</code> to join the tabular data to the spatial boundaries of Census Tracts. Do so by first adding the table as a layer into QGIS. Then open up the <i>Properties</i> of the Census Tract polygon layer, and go to <i>Joins</i>. Add a new join, using <code>ctuid</code> as the source and target fields. Once complete, we can open up the attribute table and see these additional columns.
        </p>
        <p>
            We can now visualize these polygons as a <a href="https://en.wikipedia.org/wiki/Choropleth_map" target="_blank">choropleth map</a> (maps where polygons are shaded by numeric attribute values). Open up the layer <i>Properties</i>, go to <i>Symbology</i>, and style based on <i>Graduated symbols</i>. It's often preferred to visualize a choropleth as a percent or a density (in terms of people per area) in order not to exaggerate counts in larger areas.
        </p>
        <p>
            (Note that a numeric column like population or median income might be imported as a string. If this is the case, to convert to a number to visualize, click on the epsilon on the top-right, and use the <code>to_real()</code> function to convert to a numeric value).
        </p>
        <p>
            For example, the following shows a choropleth map of the percent of people who live in low-income households by neighbourhood relative to major transit lines.
        </p>

        <img src={imgQgisChoropleth} alt="qgis-choropleth">

        <p>
            The legend and scale bar were added by going to <i>Project</i>, selecting <i>New Print Layout</i>, and then adding in a map view, legend, and scale bar to the blank page.
        </p>
        
    </div>

</main>


<style>

/* all coming from style css */

</style>