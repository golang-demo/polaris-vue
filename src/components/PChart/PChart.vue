<template>
    <PCard :title="title">
        <VueApexCharts
            :type="type"
            :width="width"
            :height="height"
            :options="options"
            :series="series"
        />
    </PCard>
</template>

<script>
    import { PCard } from '../../components/PCard';
    import VueApexCharts from 'vue-apexcharts';

    /**
     * <br/>
     * <h4 style="font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue,
     *  sans-serif;">The chart component can be used to create simple graphs, chart.</h4>
     */
    export default {
        name: 'PChart',
        components: {
            VueApexCharts, PCard,
        },
        props: {
            /**
             * Title content for the chart.
             */
            title: {
                type: String,
                default: null,
            },
            /**
             * Type of chart
             */
            type: {
                type: String,
                default: 'bar',
            },
            /**
             * Width for the chart.
             */
            width: {
                type: String,
                default: '100%',
            },
            /**
             * Height for the chart.
             */
            height: {
                type: String,
                default: 'auto',
            },
            /**
             * To get vertical view of chart.
             * @values true | false
             */
            vertical: {
                type: Boolean,
                default: false,
            },
            /**
             * Series for the chart.
             */
            series: {
                type: Array,
                default: () => ([]),
            },
            /**
             * xAxis for the chart.
             */
            xAxis: {
                type: Array,
                default: () => ([]),
            },
            /**
             * Apex Chart Options.
             *
             * Visit this [Documentation](https://apexcharts.com/docs/options/annotations/)
             * to get detailed option values.
             */
            chartOptions: {
                type: Object,
                default: () => ({}),
            },
        },
        data() {
            return {
                options: this.chartObject(),
            };
        },
        methods: {
            chartObject(xAxis = []) {
                let xData;
                if (xAxis.length > 0) {
                    xData = xAxis;
                } else {
                    xData = this.xAxis;
                }

                const object = {
                    chart: {
                        toolbar: {
                            show: false,
                        },
                        animations: {
                            enabled: true,
                            easing: 'linear',
                        },
                    },
                    noData: {
                        text: 'Loading...',
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                position: 'top',
                            },
                            horizontal: this.vertical,
                        },
                    },
                    dataLabels: {
                        enabled: false,
                        offsetY: -20,
                        style: {
                            fontSize: '10px',
                            colors: ['#304758'],
                        },
                    },
                    stroke: {},
                    tooltip: {
                        shared: true,
                        intersect: false,
                    },
                    xaxis: {
                        type: 'category',
                        categories: xData,
                        position: 'bottom',
                        tickAmount: 10,
                        axisBorder: {
                            show: false,
                        },
                        label: {
                            hideOverlappingLabels: true,
                        },
                    },
                    yaxis: {
                        forceNiceScale: true,
                        min: 0,
                        max(max) {
                            if (max < 10) {
                                return 10;
                            } else {
                                return max + 1;
                            }
                        },
                        labels: {
                            show: true,
                        },
                    },
                };

                /**
                 * Method to getChartObject
                 */
                this.$emit('chartObject');
                return Object.assign({}, object, this.chartOptions);
            },
        },
        watch: {
            xAxis(value, oldValue) {
                this.options = this.chartObject(value);
            },
        },
    }
</script>

<style>
    div.apexcharts-tooltip-title {
        font-family: -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Helvetica Neue, sans-serif !important;
    }

    .apexcharts-tooltip.apexcharts-theme-light {
        box-shadow: -1px 0px 20px rgba(23, 24, 24, 0.05), 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 0.8rem;
        border: none !important;
    }
</style>
