<template>
    <v-toolbar color="red"> 
<v-row>
    <v-col cols="6">
            <v-btn-toggle variant="text" color="white" v-model="toggle">
                <v-btn to="/">Главная</v-btn>
                <v-divider
                    :thickness="5"
                    class="border-opacity-100"
                    color="info"
                    vertical
>               </v-divider>
                <v-btn to="/personal">Личная карточка</v-btn>
                <v-divider
                    :thickness="5"
                    class="border-opacity-100"
                    color="info"
                    ertical
>               </v-divider>
                <v-btn to='/jurnal'>журнал</v-btn>
                <v-divider
                    :thickness="5"
                    class="border-opacity-100"
                    color="info"
                     vertical
>               </v-divider>
                <v-btn to='/role'>Роль</v-btn>
                <v-divider
                    :thickness="5"
                    class="border-opacity-100"
                    color="info"
                     vertical
>               </v-divider>
            </v-btn-toggle>
    </v-col>

    <v-col col="2">
    Вход
    </v-col>

</v-row>
    </v-toolbar>
</template>

<script>
export default{
    data(){
        return{
            toggle:null
        }
    }
}
</script>