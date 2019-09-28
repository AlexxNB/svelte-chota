import Why_chota from './pages/why_chota.svelte';
import Install from './pages/install.svelte';
import Nav from './pages/nav.svelte';

const document = [
	['Getting Started'],
		['Why chota?','why_chota',Why_chota],
		['Installation','install',Install],
	['Components'],
		['Nav','nav',Nav],
];

export function getSections() {
	return document.map(el => [el[0],(el[1] !== undefined ? el[1] : false)]);
}

export function getComponents() {
	return document.filter(el => el[2] !== undefined).map(el => el[2]);
}