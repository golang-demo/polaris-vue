import { PCheckbox } from './index';

export default {
    title: 'Forms / Checkbox',
    component: PCheckbox,
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        helpText: {
            control: {
                type: 'text',
            },
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        id: {
            table: {
                type: {
                    summary: 'string | number',
                },
            },
        },
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        PCheckbox,
    },
    template: `
        <PCheckbox 
            v-bind="$props" 
            @change="handleChange"
        >
        </PCheckbox>`,
    methods: {
        handleChange() {
            alert('Changed');
        },
    },
});

export const Checkbox = Template.bind({});

Checkbox.args = {
    id: 'PCheckbox',
    label: 'Polaris Vue Checkbox',
}
