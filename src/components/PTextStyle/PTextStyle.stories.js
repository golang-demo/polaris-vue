import { PTextStyle } from './index';

export default {
    title: 'Titles & Text / Text Style',
    component: PTextStyle,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        default: {
            table: {
                type: {
                    summary: null,
                },
            },
        },
        variation: {
            options: ['positive', 'negative', 'strong', 'subdued', 'code', null],
            control: {
                type: 'select',
                labels: {
                    null: 'default',
                },
            },
        },
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        PTextStyle,
    },
    template: `
        <PTextStyle
            v-bind="$props"
        >
            No supplier listed
        </PTextStyle>`,
});

export const TextStyle = Template.bind({});
