const app = Vue.createApp({
    data() {
        return{ 
            users: [
                {name: "Zharne", age: 24},
                {name: "Jade", age: 25},
                {name: "Tursha", age: 20},
                {name: "Haniah", age: 19},
                {name: "Hannah", age: 21},
                {name: "Zanele", age: 24},
                {name: "Sindile", age: 22},
                {name: "leigh-anne", age: 28},

            ]
        }
    },  
}) 

app.mount('#app')