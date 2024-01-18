<template>
<v-app>
    <v-main>
        <HeaderComponets/>
        <RouterView></RouterView>
    </v-main>
</v-app>
</template>

<script>
import HeaderComponets from './components/HeaderComponents.vue';

export default {
    components:{
        HeaderComponets,
    }
}
</script>