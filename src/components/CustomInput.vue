<template>
    <div class="group">
        <input
            v-if="format.length"
            v-model="inputValue"
            :class="{ 'not-empty': inputValue,  ...customClasses }"
            :type="inputType"
            :required="isRequired"
            v-mask="format"
        >
        <input
            v-else
            v-model="inputValue"
            :class="{ 'not-empty': inputValue,  ...customClasses }"
            :type="inputType"
            :required="isRequired"
        >
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{{ name }}</label>
    </div>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
    name: 'CustomInput',
    data() {
        return {
            inputValue: this.value,
        };
    },
    directives: {
        mask,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        isRequired: {
            type: Boolean,
            required: false,
            default: () => true,
        },
        inputType: {
            type: String,
            required: false,
            default: () => 'text',
        },
        customClasses: {
            type: Object,
            required: false,
            default: () => {},
        },
        value: {
            required: true,
        },
        format: {
            type: String,
            required: false,
            default: () => '',
        },
    },
    watch: {
        value() {
            this.inputValue = this.value;
        },
        inputValue(val) {
            this.$emit('input', val);
        },
    },
};
</script>

<style scoped>
    .group {
        position: relative;
        margin-bottom: 25px;
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: normal;
        width: 80%;
    }

    input {
        font-size: 16px;
        line-height: 20px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        background-color: var(--bg-color);
        box-sizing: border-box;
        border-bottom: 1px solid #5d5d5d;
    }

    input[type="date"] {
        -webkit-appearance: none;
        appearance: none;
        height: 40px;
    }

    input:focus {
        outline: none;
        border: none;
    }

    input:required ~ labe {
        color: #5d5d5d;
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    label {
        color: #A5B7B8;
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    input:focus ~ label,
    input.not-empty ~ label {
        top: -5px;
        font-size: 12px;
        color: var(--primary-color);
    }

    input.error ~ label {
        top: -5px;
        font-size: 12px;
        color: #FF1133;
    }

    .bar {
        position: relative;
        display: block;
        width: 100%;
    }

    .bar:before,
    .bar:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: var(--primary-color);
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    input.error ~ .bar:before,
    input.error ~ .bar:after {
        background: #FF1133 !important;
    }

    .bar:before {
        left: 50%;
    }

    .bar:after {
        right: 50%;
    }

    input:focus ~ .bar:before {
        width: 50%;
    }

    input:focus ~ .bar:after {
        width: 50%;
    }

    .highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }

    input:focus ~ .highlight {
        -webkit-animation: inputHighlighter 0.3s ease;
        -moz-animation: inputHighlighter 0.3s ease;
        animation: inputHighlighter 0.3s ease;
    }

    @-webkit-keyframes inputHighlighter {
        from {
        background: var(--primary-color);
        } to {
        width: 0;
        background: transparent;
        }
    }

    @-moz-keyframes inputHighlighter {
        from {
        background: var(--primary-color);
        } to {
        width: 0;
        background: transparent;
        }
    }

    @keyframes inputHighlighter {
        from {
        background: var(--primary-color);
        } to {
        width: 0;
        background: transparent;
        }
    }

    ::-webkit-datetime-edit {
        color: transparent;
    }

    .not-empty::-webkit-datetime-edit,
    :focus::-webkit-datetime-edit {
        color: #000;
    }
</style>