<script>
	import logo from '../assets/top-logo-full.svg';
</script>

<div id="bar">

	<div id="logo">
		<a href="https://www.schoolofcities.utoronto.ca/"><img src={logo} alt="School of Cities"></a>
	</div>

</div>

<style>
	#bar {
		position: fixed;
		overflow: hidden;
   		top: 0px;
		height: 50px;
		background-color: white;
		margin-bottom: 20px;
		border-bottom: solid 1px rgb(64, 64, 64);
		width: 100%;
		min-width: 200px;
		padding-left: 0px;
		padding-right: 0px;
		z-index: 5;
		opacity: 0.92;
	}

	#logo {
		margin: auto;
		max-width: 230px;
		height: 50px;
		/* background-color: aquamarine; */
	}

	a {
		color: black;
	}
	a:hover {
		opacity: 0.7;
	}

	img {
		height: 50px;
		color: blue;
	}
	img:hover {
		height: 50px;
		opacity: 0.5;
		cursor: pointer;
	}
</style>
