export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}


import {bubble, listen,get_current_component} from 'svelte/internal';
export function getEventsAction() {
    const component = get_current_component();
    return node => {
      const events = Object.keys(component.$$.callbacks);
      const listeners = [];

      events.forEach(
          event => listeners.push(
              listen(node, event, function(e) {
                 bubble.call(this, component, e);
              })
            )
        );
  
      return {
        destroy: () => {
            listeners.forEach(
                listener => listener()
            );
        }
      }
    };
}
