export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5')];

			export const server_loads = [];

			export const dictionary = {
	"/mapping-census-data": [2],
	"/spatial-analysis-MUI2000": [3],
	"/spatial-analysis-MUI2000/GIS-workshop": [4],
	"/spatial-analysis-MUI2000/intro-spatial-data": [5]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};