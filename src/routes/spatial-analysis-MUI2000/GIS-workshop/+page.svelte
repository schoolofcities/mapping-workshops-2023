<script>

	import Top from "../../lib/TopSofC.svelte";
	import '../../styles.css';

    import imgOsmCollege from './assets/osm-college.png'
    import imgDemToronto from './assets/dem-toronto.png'
    import imgGisLayers from './assets/gis-layers.png'
    import imgQgisBlank from './assets/qgis-blank.png'
    import imgQgisLayers1 from './assets/qgis-layers1.png'

</script>


<svelte:head>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"> 

	<link
		href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"
		rel="stylesheet"
	/>

	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>


    <title>GIS Workshop / MUI2000</title>
    <meta name="description" content="GIS workshop for MUI2000">
    <meta name="author" content="Jeff Allen">

</svelte:head>



<Top/>

<main>

    <div id="title">

        <h1>(Q)GIS WORKSHOP</h1>

        <p>Jeff Allen</p>

        <p>January 23 & 30, 2023</p>

    </div>

    <div id="text">

        <p>We use Geographic Information Systems (GIS) to analyze, manipulate, and visualize spatial information on a computer.</p>
        <p>Why is GIS useful?</p>
            <ul class="list">
            <li>visualize spatial data</li>
            <li>explore spatial patterns and relationships</li>
            <li>make pretty and useful maps</li>
            <li>generate new data, either &quot;by hand&quot; or via spatial relationships from other data (e.g. through spatial queries)</li>
            <li>perform spatial analysis (i.e. statistical methods applied to spatial data)</li>
            </ul>
        <p>GIS is often thought of as more than just a tool or piece of software. It can refer to all aspects of managing and analyzing digital spatially referenced data.</p>
        <p>The following provides a brief overview of GIS followed by two short tutorials for getting started with GIS, using <a href="https://www.qgis.org/en/site/">QGIS</a>, a free and open source desktop GIS software. The first tutorial uses data from QQQQQQQQ. The second analyzes demographic data from the Canadian census as well as public transit data for Toronto.</p>

    </div>

    <div id="text">

        <h2>Spatial Data</h2>

        <p>A spatial dataset is a combination of...</p>

            <ul class="list">
                <li>attribute data (the what)</li>
                <li>location data and spatial dimensions (the where)</li>
            </ul>

        <p>Spatial data, this combination of attribute and location data, can be organized and represented in a number of different formts.</p>

        <p>For example, a city can be represented on a map via a single point with a label (e.g. based on latitude and longitude coordinates). Or a city can be represented as a polygon, based on on it's administrative boundary</p>

        <p>Importantly, there are always uncertainty about the level of accuracy, precision, and resolution of spatial data. Spatial data are representations of reality, and thus have some loss of information when used for visualization and analysis. Any analysis can only be as good as the available data.</p>

        <p>The two most common forms of spatial data are <b>vector</b> data and <b>raster</b> data.</p>

        <h3>Vector Data</h3>

        <p>Vector data uses geographic coordinates, or a series of coordinates, to create points, lines, and polygons representing real-world features.</p>

        <p>e.g. in the map below, a screenshot of <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, lines are used to represent roads and rail, points for retail, polygons for parks and buildings, etc. </p>

        <img src={imgOsmCollege} alt="OpenStreetMap">

        <p><a href="https://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> and the <a href="https://en.wikipedia.org/wiki/Shapefile">Shapefile</a> are probably the two most common vector data formats.</p>

        <h3>Raster Data</h3>

        <p>Raster data represents space as a continuous grid with equal cell sizes. Each cell contains a value pertaining to the type of feature it represents. These values can be quantitative (e.g. elevation) or categorical (e.g. type of land use). Common examples of raster data include digital elevation models (DEMs), satellite imagery, and scanned images (e.g. historical maps).</p>

        <p>e.g. the map below shows a DEM for Toronto at two different scales. </p>

        <img src={imgDemToronto} alt="DEM Toronto">

    </div>

    <div id="text">

        <h2>GIS</h2>

        <p>The power of GIS software and tools is the ability to work with data stored in different layers (e.g. a layer for roads, another for buildings, and so on) in conjunction with each other. These layers can be visualized and analyzed relative to each other based on their spatial relationships.</p>

        <img width=350px src={imgGisLayers} alt="gis-layers">

        <p>GIS software usually links to data stored elsewhere on a computer, rather than in a project file. If the source location of the data (i.e. which folder it's in) changes, then this will have to be updated in the GIS project. If data are edited in GIS, it will update the data in its source location.</p>

        <h3>Common Tools & Software</h3>

        <p>Desktop GIS software</p>
        <ul class="list">
        <li>QGIS (free and open source, can do most tasks, popular in tech and academia and non-profits)</li>
        <li>ArcGIS (proprietary, can do most tasks, used by big organizations)</li>
        </ul>
        <p>Web-based GIS and mapping</p>
        <ul class="list">
        <li>MapBox (commercial, free basic accounts)</li>
        <li>CARTO (commercial)</li>
        <li>ArcGIS Online (commercial)</li>
        <li>D3 (free, steeper learning curve)</li>
        <li>Observable (free, steeper learning curve)</li>
        </ul>
        <p>Data management &amp; processing of spatial data</p>
        <ul class="list">
        <li>Python, R (for processing data, statistical analysis, making simple maps)</li>
        <li>PostGIS (spatial databases and queries)</li>
        </ul>
        <p>Many more!</p>

    </div>

    <div id="text">

        <h2>Tutorial (1)</h2>

        <h3>Loading & Visualizing Data</h3>

        <p>
            First open up QGIS with a blank project. The top bars are various functions/tools. The "browser" allows for navigating and loading datasets. The "layer" panel will include each dataset that is added to the map. And the big blank square is where your map data will be visualized.
        </p>
        <img src={imgQgisBlank} alt="qgis-blank">
        <p>
            Let's begin by grabbing data from the City of Toronto's Open Data portal and loading it into QGIS. This is the data we'll be looking at:
        </p>
        <ul>
            <li><a href="https://open.toronto.ca/dataset/business-improvement-areas/">Business Improvement Areas (BIAs)</a></li>
            <li><a href="https://open.toronto.ca/dataset/toronto-centreline-tcl/">Street Centrelines</a></li>
            <li><a href="https://open.toronto.ca/dataset/bike-share-toronto/">Bike Share Stations</a>. This data are a "live" <code>json</code> feed, I've scraped it with this <a href="">script</a>, the result can be downloaded from <a href="">here</a>.</li>
            <li><a href="https://open.toronto.ca/dataset/web-map-services/">Aerial Imagery</a>. We'll be adding the most recent imagery layer.</li>
        </ul>
        <p>
            Let's start by loading in the aerial imagery as a base layer. This is a raster dataset (each cell/pixel has a colour value) stored on the City's server. It can be loaded into QGIS by right-clicking on "WMS/WMTS" layer in the browser and adding a "New Connection" or by going to Layer->Data Source Manager and navigating to "WMS/WMTS". Once there, add in this URL <code>https://gis.toronto.ca/arcgis/rest/services/basemap/cot_ortho/MapServer/WMTS</code> and provide a descriptive name for the layer.
        </p>
        <p>
            Now let's add BIA and Centreline data. Download these from the links provided above. They can be added into QGIS either by dragging and dropping them from your file manager onto the map or layers panel. Or they can be added by Layer->Data Source Manager and navigating to "Vector".
        </p>
        <p>
            Once added, your map should look something like this:
        </p>
        <img src={imgQgisLayers1} alt="qgis-layers1">
        <p>
            The layers can be toggled on and off. They can also be dragged into different orders, the top layer on the panel will always be the layer that is shown on top on the map. 
        </p>
        




        

    </div>


    

</main>


<style>

</style>