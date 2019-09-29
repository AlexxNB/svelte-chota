import Why_chota from './pages/why_chota.svelte';
import Install from './pages/install.svelte';
import Nav from './pages/nav.svelte';
import Grid from './pages/grid.svelte';
import Buttons from './pages/buttons.svelte';
import Tabs from './pages/tabs.svelte';
import Card from './pages/card.svelte';
import Tag from './pages/tag.svelte';
import Details from './pages/details.svelte';
import Form from './pages/form.svelte';

const document = [
	['Getting Started'],
		['Why chota?','why_chota',Why_chota],
		['Installation','install',Install],
	['Components'],
		['Nav','nav',Nav],
		['Grid','grid',Grid],
		['Buttons','buttons',Buttons],
		['Tabs','tabs',Tabs],
		['Card','card',Card],
		['Tag','tag',Tag],
		['Details','details',Details],
		['Form','form',Form],
];

export function getSections() {
	return document.map(el => [el[0],(el[1] !== undefined ? el[1] : false)]);
}

export function getComponents() {
	return document.filter(el => el[2] !== undefined).map(el => el[2]);
}