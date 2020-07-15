<template>
    <div class="alert text-left" v-bind:class="type">

        {{text}}
        <i class="fa fa-times danger" @click="closeAlertBox()"></i>
    </div>    
</template>
<script>
export default {
    props:[
        'text',
        'type'
    ],
    methods:{
        closeAlertBox(){
            this.$destroy();

            this.$el.parentNode.removeChild(this.$el);
        }
    }
}
</script>
