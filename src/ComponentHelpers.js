import {
    camelCase,
    capitalCase,
    constantCase,
    dotCase,
    headerCase,
    noCase,
    paramCase,
    pascalCase,
    pathCase,
    sentenceCase,
    snakeCase,
} from 'change-case';

class ComponentHelpers {
    constructor() {
        this.componentNameFormat = name => name;
    }

    setComponentNameFormat(format) {
        this.componentNameFormat = format;
    }


    makeComponentClass(componentName, properties, state) {
        let classes = {};
        classes[componentName] = true;

        for (let prop of properties) {
            let value = state[prop];
            let valueTag = '';
            if (value && typeof value === 'string') {
                valueTag = value.charAt(0).toUpperCase() + value.slice(1);
            }
            classes[componentName + '--' + prop + valueTag] = state[prop];
        }

        return classes;
    }

    isNodeOfComponent(node, component) {
        if (!node || !node.componentOptions) {
            return false;
        }

        let nodeComponentTagName = node.componentOptions.tag;
        let componentTagName = this.getComponentName(component.name);

        return nodeComponentTagName === componentTagName;
    }

    getComponentName(polarisName) {
        return this.componentNameFormat(polarisName, {
            camelCase,
            capitalCase,
            constantCase,
            dotCase,
            headerCase,
            noCase,
            paramCase,
            pascalCase,
            pathCase,
            sentenceCase,
            snakeCase,
        });
    }

    wrapNodesWithComponent(createElement, nodes, component, ignoredComponents = []) {
        let children = [];
        for (let node of nodes) {
            if (!node.tag && !node.text.trim()) {
                continue;
            }

            var added = false;
            if (this.isNodeOfComponent(node, component)) {
                added = true;
                children.push(node);
            } else {
                for (let ignored of ignoredComponents) {
                    if (this.isNodeOfComponent(node, ignored)) {
                        added = true;
                        children.push(node);
                        break;
                    }
                }
            }

            if (!added) {
                children.push(createElement(component, {}, [node]));
            }
        }
        return children;
    }

    uuid() {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
}


export default new ComponentHelpers();