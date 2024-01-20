<template>
    <div>
        <v-row>
          <v-col cols="5">
            <v-card  variant="tonal" style="margin: 20px;" >
            <v-toolbar color="red">
            <v-toolbar-title>
                Роль
            </v-toolbar-title>
            </v-toolbar>
            <v-data-table :items = "items" :header="header"></v-data-table>
            </v-card>
          </v-col>  
          <v-col>
            <v-card  variant="tonal" style="margin: 20px;">
            <v-toolbar color="red">
                <v-toolbar-title>
                    Дата
                </v-toolbar-title>
            </v-toolbar>
            <v-data-table :items = "itemsdate" :header="headerdate"></v-data-table>
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
                        title: "Роль",
                        key: "role"
                    },
                ],
                items:[
                    {
                        id:1,
                        name:"Менеджер"
                    }
                ],
                headerdate:[
                    {
                        title: "Id",
                        key: "id"
                    },
                    {
                        title: "Дата",
                        key: "date"
                    },
                ],
                itemsdate:[
                    {
                        id:1,
                        name:"12.02.2004"
                    }
                ]
            }
        }
     }
    </script>