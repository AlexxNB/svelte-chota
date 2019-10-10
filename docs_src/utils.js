import {Renderer} from 'svelte-preprocess-markdown';

export function renderer() {

    const r = Renderer();

    r.link = function (href, title, text) {
        let target_attr = '';
        let title_attr = '';
    
        if (href.startsWith("http")) {
            target_attr = ' target="_blank"';
        }
    
        if (title !== null) {
            title_attr = ` title="${title}"`;
        }
    
        return `<a href="${href}"${target_attr}${title_attr}>${text}</a>`;
    }

    return r;
}