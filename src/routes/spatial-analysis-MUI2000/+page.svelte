<script>

	import Top from "../lib/TopSofC.svelte";
	import '../styles.css';

</script>



<svelte:head>

	<link
		href="https://fonts.googleapis.com/css2?family=Roboto&family=Source+Serif+Pro&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/> 

	<link 
		href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;800&display=swap" rel="stylesheet"
	/>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, minimum-scale=1"
	/>


    <!-- <title>Place and Politics in Toronto</title>
    <meta name="description" content="Place and Politics in Toronto">
    <meta name="author" content="Zack Taylor & Jeff Allen">

	<meta property="og:title" content="Place and Politics in Toronto" />
    <meta name="og:description" content="Mapping Toryland and Ford Nation" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://schoolofcities.github.io/place-and-politics-toronto/torontos-two-rights" />
    <meta property="og:image" content="https://raw.githubusercontent.com/schoolofcities/place-and-politics-toronto/sveltekit/src/routes/assets/web-card-2.png" />
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="https://schoolofcities.github.io/place-and-politics-toronto/torontos-two-rights" />
    <meta name="twitter:creator" content="@JeffAllenMaps" />
    <meta name="twitter:title" content="Place and Politics in Toronto" />
    <meta name="twitter:description" content="Mapping Toryland and Ford Nation" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/schoolofcities/place-and-politics-toronto/sveltekit/src/routes/assets/web-card-2.png" /> -->

</svelte:head>



<Top/>

<main>

	<div id="page">
        <iframe class="slides" src="/mapping-workshops-2023/slides/index.html"/>
    </div>

</main>


<style>


    #page {
        background-color: red;
        width: 100vw;
        height: 100vh;
    }

    .slides {
        border: none;
        /* padding: 0px; */
        /* margin: -10px; */
        width: 100vw;
        height: 100vh;
    }

</style>