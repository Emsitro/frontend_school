<template>
<div>
    <v-row>
      <v-col cols="5">
        <v-card  variant="tonal" style="margin: 20px;" >
        <v-toolbar color="red">
        <v-toolbar-title>
            Сотрудники
        </v-toolbar-title>
        </v-toolbar>
        <v-data-table :items = "items" :header="header"></v-data-table>
        </v-card>
      </v-col>  
      <v-col>
        <v-card  variant="tonal" style="margin: 20px;">
        <v-toolbar color="red">
            <v-toolbar-title>
                Журнал
            </v-toolbar-title>
        </v-toolbar>
        <v-data-table></v-data-table>
        </v-card>
      </v-col>
    </v-row>
</div>
</template>

<script>
 export default{
    data(){
        return{
            header:[
                {
                    title: "Id",
                    key: "id"
                },
                {
                    title: "ФИО",
                    key: "name"
                },
            ],
            items:[
                {
                    id:1,
                    name:"Геогрик рис Саныч"
                }
            ]
        }
    }
 }
</script>