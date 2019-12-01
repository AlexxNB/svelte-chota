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


export function getAttributesAction(component) {

    const isSet = (value) => {
        return ( 
            value !== undefined && 
            value !== false &&
            value !== null
        )
    }

    const getArrayFromString = (value) => {
        if(typeof value != 'string') return [];
        return value.replace(/\s+/g, ' ').trim().split(' ');
    }

    return (node,mixed) => {
        const props = component.$$.props;

        const attributes = Object.keys(mixed).filter(name => props.name);

        
        let lastClasslist = [];
        const updateClasses = (list) => {
            let currentClasslist = [];
            if( isSet(list['class'])) currentClasslist = currentClasslist.concat(getArrayFromString(list['class']));

            for(let i in lastClasslist) {
                if(currentClasslist.indexOf(lastClasslist[i]) === -1) node.classList.remove(lastClasslist[i]);
            }

            for(let i in currentClasslist) {
                if(lastClasslist.indexOf(currentClasslist[i]) === -1) node.classList.add(currentClasslist[i]);
            }
            
            lastClasslist = currentClasslist;
        }

        const updateAttr = (list) => {
            attributes.forEach(name => {
                const value = list[name];
                if(name === 'class') {
                    updateClasses(list);
                } else {
                    if( isSet(value) )
                        node.setAttribute(name, value);
                    else
                        node.removeAttribute(name);
                }
            });
        }

        updateAttr(mixed);

        return {
            update: (mixed) => updateAttr(mixed),
            destroy: () => {
                attributes.forEach(name => {
                    node.removeAttribute(name);
                });
            }
        }
    };
}
