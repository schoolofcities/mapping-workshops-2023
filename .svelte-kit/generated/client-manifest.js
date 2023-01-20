export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4')];

			export const server_loads = [];

			export const dictionary = {
	"/spatial-analysis-MUI2000": [2],
	"/spatial-analysis-MUI2000/GIS-workshop": [3],
	"/spatial-analysis-MUI2000/intro-spatial-data": [4]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};