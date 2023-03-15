export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7')];

			export const server_loads = [];

			export const dictionary = {
	"/bivariate-maps": [2],
	"/mapping-census-data": [3],
	"/qgis-intro": [4],
	"/spatial-analysis-MUI2000": [5],
	"/spatial-analysis-MUI2000/GIS-workshop": [6],
	"/spatial-analysis-MUI2000/intro-spatial-data": [7]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};