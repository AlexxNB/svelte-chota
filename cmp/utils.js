export function getClassAttr() {
    let class_attr_ar = [];
    for (let param of arguments) {
        if(param !== undefined && param !== false) {
            class_attr_ar.push(param);
        }
    }

    return class_attr_ar.join(' ');
}

export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}


import {bubble, listen} from 'svelte/internal';
export function getEventsAction(component) {
    return node => {
      const events = Object.keys(component.$$.callbacks);
      const listeners = [];

      events.forEach(
          event => listeners.push(
              listen(node, event, e =>  bubble(component, e))
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