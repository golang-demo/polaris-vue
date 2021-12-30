import { PVisuallyHidden } from './index';

export default {
    title: 'Titles & Text / Visually Hidden',
    component: PVisuallyHidden,
    argTypes: {
        id: {
            control: {
                type: 'text'
            },
            table: {
                type: {
                    summary: 'string | number',
                },
            },
        },
        default: {
            table: {
                type: {
                    summary: null,
                },
            },
        },
    },
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(args),
    components: {
        PVisuallyHidden,
    },
    template: `
      <table>
        <thead>
        <tr>
          <th scope="col">
            <PVisuallyHidden v-bind="$props">Line item</PVisuallyHidden>
          </th>
          <th scope="col">
            <PVisuallyHidden>Value</PVisuallyHidden>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Subtotal</th>
          <td>$184.13</td>
        </tr>
        <tr>
          <th scope="row">Tax</th>
          <td>$0.00</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td>$184.13</td>
        </tr>
        </tbody>
      </table>`,
});

export const VisuallyHidden = Template.bind({});
