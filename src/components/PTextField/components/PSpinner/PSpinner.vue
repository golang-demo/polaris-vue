<template>
    <div class="Polaris-TextField__Spinner" aria-hidden="true" @click="onClick">
        <div role="button" class="Polaris-TextField__Segment" tabindex="-1"
             @click="handleStep(1)">
            <div class="Polaris-TextField__SpinnerIcon">
          <span class="Polaris-Icon">
            <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
              <path d="M15 12l-5-5-5 5z"></path>
            </svg>
          </span>
            </div>
        </div>
        <div role="button" class="Polaris-TextField__Segment" tabindex="-1"
             @click="handleStep(-1)">
            <div class="Polaris-TextField__SpinnerIcon">
          <span class="Polaris-Icon">
            <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
              <path d="M5 8l5 5 5-5z" fill-rule="evenodd"></path>
            </svg>
          </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PSpinner',
        methods: {
            onClick() {
                this.$emit('click');
            },
            handleStep(value) {
                this.$emit('change', value);
            },
        },
    }
</script>

<style scoped>

</style>
