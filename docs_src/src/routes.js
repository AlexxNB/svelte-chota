import Why_chota from './pages/why_chota.svelte';
import Install from './pages/install.svelte';
import Usage from './pages/usage.svelte';
import Customization from './pages/customization.svelte';
import Utilites from './pages/utilites.svelte';
import Elements from './pages/elements.svelte';
import Nav from './pages/nav.svelte';
import Grid from './pages/grid.svelte';
import Container from './pages/container.svelte';
import Buttons from './pages/buttons.svelte';
import Tabs from './pages/tabs.svelte';
import Card from './pages/card.svelte';
import Tag from './pages/tag.svelte';
import Details from './pages/details.svelte';
import Form from './pages/form.svelte';
import Modal from './pages/modal.svelte';
import Icon from './pages/icon.svelte';

export const routes = [
	['Getting Started'],
		['Why chota?','why_chota',Why_chota],
		['Installation','install',Install],
		['Usage','usage',Usage],
	['chota'],
		['Customization','customization',Customization],
		['Utilites','utilites',Utilites],
		['Elements','elements',Elements],
	['Components'],
		['Container','container',Container],
		['Grid','grid',Grid],
		['Buttons','buttons',Buttons],
		['Form','form',Form],
		['Nav','nav',Nav],
		['Tabs','tabs',Tabs],
		['Card','card',Card],
		['Tag','tag',Tag],
		['Details','details',Details],
		['Modal','modal',Modal],
		['Icon','icon',Icon],
];