export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')];

			export const server_loads = [];

			export const dictionary = {
	"/census-intro": [2],
	"/census-intro/about-maps-and-spatial-data": [3],
	"/spatial-analysis-MUI2000": [4],
	"/spatial-analysis-MUI2000/GIS-workshop": [5],
	"/spatial-analysis-MUI2000/intro-spatial-data": [6]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};