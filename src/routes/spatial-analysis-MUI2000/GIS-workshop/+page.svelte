<script>

	import Top from "../../lib/TopSofC.svelte";
	import '../../styles.css';

    import imgCoords from './assets/coords.png';
    import imgOsmCollege from './assets/osm-college.png';
    import imgDemToronto from './assets/dem-toronto.png';
    import imgGisLayers from './assets/gis-layers.png';
    import imgQgisBlank from './assets/qgis-blank.png';
    import imgQgisLayers1 from './assets/qgis-layers1.png';
    import imgQgisCentre from './assets/qgis-centre.png';
    import imgQgisBikeshare from './assets/qgis-bikeshare.png';
    import imgQgisRailct from './assets/qgis-railct.png';
    import imgQgisChoropleth from './assets/qgis-choropleth.png'
    import imgQgisBuffer from './assets/qgis-buffer.png'
    import imgQgisBufferSelect from './assets/qgis-bufferselect.png'

</script>


<svelte:head>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"> 

	<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap" rel="stylesheet"/>

	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>

    <title>GIS Workshop / MUI2000</title>
    <meta name="description" content="GIS workshop for MUI2000">
    <meta name="author" content="Jeff Allen">

</svelte:head>



<Top/>

<main>

    <div id="title">

        <h1>(Q)GIS WORKSHOP</h1>

        <p>For MUI2000</p>

        <p>By Jeff Allen</p>

        <p>On January 23 & 30, 2023</p>

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

        <p>The following provides a brief overview of GIS followed by two short tutorials for getting started with GIS, using <a href="https://www.qgis.org/en/site/" target="_blank">QGIS</a>, a free and open source desktop GIS software. The first tutorial uses data from the City of Toronto's Open Data portal. The second analyzes demographic data from the Canadian census as well as public transit data for Toronto</p>

    </div>

    <div id="text">

        <h2>Spatial Data</h2>

        <p>A spatial dataset is a combination of...</p>

        <ul class="list">
            <li>attribute data (the what)</li>
            <li>location data and spatial dimensions (the where)</li>
        </ul>

        <p>Spatial data, this combination of attribute and location data, can be organized and represented in a number of different formats.</p>

        <p>For example, a city can be represented on a map via a single point with a label (e.g. based on latitude and longitude coordinates). Or a city can be represented as a polygon, based on on it's administrative boundary</p>

        <p>Importantly, there are always uncertainty about the level of accuracy, precision, and resolution of spatial data. Spatial data are abstractions of reality, and thus have some loss of information when used for visualization and analysis. Any analysis can only be as good as the available data.</p>

        <p>The two most common forms of spatial data are <b>vector</b> data and <b>raster</b> data.</p>

        <h3>Vector Data</h3>

        <p>Vector data uses geographic coordinates, or a series of coordinates, to create points, lines, and polygons representing real-world features.</p>

        <img width=400 src={imgCoords} alt="coords">

        <p>e.g. in the map below (a screenshot of <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>) lines are used to represent roads and rail, points for retail, polygons for parks and buildings, etc. </p>

        <img width="" src={imgOsmCollege} alt="OpenStreetMap">

        <p><a href="https://en.wikipedia.org/wiki/GeoJSON"  target="_blank">GeoJSON</a> and the <a href="https://en.wikipedia.org/wiki/Shapefile" target="_blank">Shapefile</a> are probably the two most common vector data formats.</p>

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
        <p>GIS & Spatial analysis using code</p>
        <ul class="list">
            <li>Python, R (for processing data, statistical analysis, making simple maps)</li>
            <li>PostGIS (spatial databases and queries)</li>
        </ul>
        <p>Many more!</p>

    </div>

    <div id="text">

        <h2>Tutorial (1)</h2>

        <h3>Loading, Querying, and Visualizing Data</h3>

        <p>
            Let's open up QGIS with a blank project. The top bars are various functions/tools for working with data. The "Browser" allows for navigating and loading datasets. The "Layers" panel will populate with each dataset that is added to the project. And the big blank square is where your map data will be visualized.
        </p>
        <img src={imgQgisBlank} alt="qgis-blank">
        <p>
            Let's begin by finding data from the City of Toronto's Open Data portal and loading it into QGIS. This is the data we'll be looking at:
        </p>
        <ul>
            <li><a href="https://open.toronto.ca/dataset/business-improvement-areas/" target="_blank">Business Improvement Areas (BIA)</a>.</li>
            <li><a href="https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/1d079757-377b-4564-82df-eb5638583bfb/resource/d86bdca4-ab2c-470d-80fb-34647ea0e87f/download/Centreline%20-%20Version%202%20-%204326.zip" target="_blank">Street Centrelines</a> (streets, railways, trails, etc.).</li>
            <li><a href="https://open.toronto.ca/dataset/web-map-services/" target="_blank">Aerial Imagery</a>. We'll be adding the most recent imagery layer.</li>
            <li><a href="https://open.toronto.ca/dataset/bike-share-toronto/" target="_blank">Bike Share Stations</a>. This data are a "live" <code>json</code> feed, I've scraped it with this <a href="https://github.com/schoolofcities/mapping-workshops-2023/blob/main/data/download-bike-share.py" target="_blank">script</a>, the result can be downloaded from <a href="https://raw.githubusercontent.com/schoolofcities/mapping-workshops-2023/main/data/bikeshare-stations.geojson" target="_blank" download="">here</a> (if this link doesn't download directly, you can copy and paste the content into a text editor, or just "save as" the web page).</li>
        </ul>
        <p>
            Let's start by loading in the aerial imagery as a base layer. This is a raster dataset (each cell/pixel has a colour value) stored on the City's server. It can be loaded into QGIS by right-clicking on <i>WMS/WMTS</i> layer in the browser panel and adding a <i>New Connection</i> or by going to <i>Layer</i>, then <i>Data Source Manager</i> and navigating to <i>WMS/WMTS</i>. Once there, add in this URL <code>https://gis.toronto.ca/arcgis/rest/services/basemap/cot_ortho/MapServer/WMTS</code> and provide a descriptive name for the layer..
        </p>
        <p>
            Now let's add the BIA and CentreLine data. Download these from the links provided above. They can be added into QGIS either by dragging and dropping them from your file manager onto the map or layers panel. Or they can be added by <i>Layer</i>, then <i>Data Source Manager</i>, and navigating to <i>Vector"</i>.
        </p>
        <p>
            Once added, your map should look something like this:
        </p>
        <img src={imgQgisLayers1} alt="qgis-layers1">
        <p>
            The layers can be toggled on and off. They can also be dragged into different orders, the top layer on the panel will always be the layer that is shown on top on the map. 
        </p>
        <p>
            We can change the colours and style of each layer by right-clicking on a layer, going to <i>Properties</i>, and then <i>Symbology</i>. In the image above, I changed the colours of the two vector layers, as well as the stroke-width of the Centreline layer.
        </p>
        <p> 
            Let's explore how we can select and filter data. We'll use the Centreline layer as an example. Right-clicking they layer allows us to view it's attribute table. There is a column in here called <code>FEATURE_00</code> which indicates the type of feature. Right-click and open up the <i>Properties</i> of the layer, then click <i>Source</i>, and play with filtering the data. e.g. this is a query for filtering to only show laneways <code>"FEATURE_00" = 'Laneway'</code>
        </p>
        <p>
            We can also visualize data based on values in the attribute table. First clear the above query. Then in the CentreLine <i>Properties</i>, go to <i>Symbology</i>, then at the top, select <i>Categorized</i>. Try selecting <i>FEATURE_00</i> again. Click <i>Classify</i> at the bottom of the window. We can now quickly visualize where different features are on the map! Each category can also be styled individually be turned off and on in the layers panel.
        </p>
        <img src={imgQgisCentre} alt="qgis-centre">
        <p>
            Now let's learn how to visualize data based on numeric data. We can use the bike share station data for this. Download and load this dataset into QGIS. Then go to it's <i>Properties</i>, <i>Symbology</i>, then at the top, select <i>Graduated</i>. In this menu, we can color the points based on a numeric value in a column. Let's colour by the <code>capacity</code> column (this is the number of bikes that can be stored at each docking station). Notice the options available for classifying data (number of bins, whether to use quantiles or equal intervals, etc.). Hit <i>Classify</i> to update the map. Note how different classification schemes can highlight or hide different spatial patterns.
        </p>
        <img src={imgQgisBikeshare} alt="qgis-bikeshare">
        
    </div>

    <div id="text">

        <h2>Tutorial (2)</h2>

        <h3>Table Joins and Choropleths</h3>

        <p>Start up a new QGIS project and add in the data downloaded from <a href="https://github.com/schoolofcities/mapping-workshops-2023/raw/main/data/toronto.zip" target="_blank">here</a>.</p>

        <p>First, let's look at data. We have a polygon layer which represents census tracts. These data are created by Statistics Canada to share aggregated for the Canadian census. They approximately correspond to neighbourhoods. Census tract boundary data were originally downloaded from <a href="https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21" target="_blank">here</a>, while attribute data were downloaded from <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/index-eng.cfm" target="_blank">here</a>.</p>

        <p>We also have a line layer representing major transit lines in Toronto (originally sourced from Metrolinx). We can categorize line data by <code>status</code>, using different colours or line types to display whether the transit route is existing or under construction. The screenshot below shows the result. (Also note how the map has been rotated 17.7 degrees, to horizontally align some of the features and reduce empty white space).</p>

        <img src={imgQgisRailct} alt="qgis-railct">

        <p>Also included is a <code>.csv</code> table which contains data linked to the unique identifier, <code>ctuid</code>, of each census tract. We can use the <code>ctuid</code> to join this tabular data to the spatial boundaries of census tracts. Do so by, first adding the table as a layer into QGIS. Then open up the <i>Properties</i> of the censust tract polygon layer, and go to <i>Joins</i>. Add a new join, using <code>ctuid</code> as the source and target fields. Once complete, we can open up the attribute table and see these additional columns.</p>

        <p>We can now visualize these polygons as a <a href="https://en.wikipedia.org/wiki/Choropleth_map" target="_blank">choropleth map</a> (maps where polygons are shaded by numeric attribute values). Similar to the previous tutorial, open up the layer properties, go to symbology, and style based on graduated symbols.  It's often preferred to visualize a choropleth as a rate or a density (in terms of people per area) in order not to exaggerate counts in larger areas.</p>

        <p>(Note that a numeric column might be imported as a string. If this is the case, to convert to a number to visualize, click on the epsilon on the top-right, and use the <code>to_real()</code> function to convert to a numeric value).</p>

        <p>For example, the following shows a choropleth map of the percent of people who live in low-income households by neighbourhood relative to major transit lines.</p>

        <img src={imgQgisChoropleth} alt="qgis-choropleth">

        <p>This map was exported by going to <i>Project</i>, selecting <i>New Print Layout</i>, and then adding in a map view, legend, and scale bar to the blank page.</p>
        
    </div>

    <div id="text">

        <h2>Tutorial (3)</h2>

        <h3>Geoprocessing</h3>

        <p>Next, we're going to learn a few commonly used geoprocessing tasks, using the following data:</p>

        <ul>
            <li><a href="https://open.toronto.ca/dataset/toronto-centreline-tcl/" target="_blank">Street Centrelines</a> (same as in tutorial 1).</li>
            <li><a href="https://open.toronto.ca/dataset/toronto-public-library-branch-locations/" target="_blank">Public Libraries</a>.</li>
            <li><a href="https://github.com/schoolofcities/mapping-workshops-2023/raw/main/data/toronto-apartments.geojson" target="_blank">Apartment Buildings</a> (originally geocoded from the City's apartment building registration and evaluation data on <a href="https://open.toronto.ca/catalogue/?search=apartment%20buildings&sort=score%20desc" target="_blank">Open Data Toronto</a>).</li>
        </ul>

        <h4>Projections and re-projecting data</h4>

        <p>
            All spatial data include location data, typically in the form of coordinates. A <a href="https://en.wikipedia.org/wiki/Spatial_reference_system">Coordinate Reference System (CRS)</a> is a schema for referencing where features are on the earth's surface. Each CRS has specified units (e.g. degrees, metres, etc.). When working with urban data, we often want to have data in a CRS that does not distort local areas or distances, and has intuitive units (e.g. working with distances in metres rather than in degrees).
        </p>
        <p>
            To change the CRS of a vector layer, go to <i>Vector</i>, <i>Data Management Tools</i>, then click <i>Reproject Layer</i>. Try converting the public libraries dataset into <code>NAD83 / UTM zone 17N - EPSG:26917</code>. This is a commonly used CRS for the Toronto region with units in metres.
        </p>

        <h4>Buffers</h4>
        <p>
            Using our reprojected layer, try creating 1km buffers around the location of public libraries. At the top of the QGIS menu, go to <i>Vector</i>, <i>Geoprocessing Tools</i>, then click <i>Buffer</i>. Select the public libraries as the input layer, and <code>1000</code> metres as the distance. We can quickly see where people have easy access to public libraries in the city.
        </p>
        <img src={imgQgisBuffer} alt="qgis-buffer">

        <h4>Select by Location</h4>

        <p>
            This can become more useful when we compare it to other layers. Let's try to find the public housing apartment buildings in Toronto that are not within 1km to a public library. We can do this first by filtering the apartment buildings dataset by their property type <code>"A_PROPERTY_TYPE"='SOCIAL HOUSING' OR "A_PROPERTY_TYPE"='TCHC'</code>. Then go to <i>Vector</i>, <i>Research Tools</i>, then click <i>Select by Location</i>. Here we can select the apartments that intersect the buffers. Inverting this selection will highlight the apartment buildings that are NOT within a 1km from a public library, 144 in total.
        </p>
        <img src={imgQgisBufferSelect} alt="qgis-bufferselect">
        
        <h4>Spatial Join</h4>

        <p></p>


        
        
        <!-- "FEATURE_00" = 'Major Arterial' OR "FEATURE_00" = 'Minor Arterial' -->

    </div>

    <!-- getting data from OSM -->

    <!-- geocoding -->

    <!-- buffering / dissolving -->

    <!-- network analysis / buffers -->

    <!-- spatial joins -->


</main>


<style>

/* all coming from style css */

</style>