const axios = require("axios")

const headers = {
    'authorization': 'Bot NzQ0NTc5Nzc0Nzg5NDUxODM3.GGurbU.O0v8YhMT9jWkvJFXg32W7gds26LIJomIeIrCrM'
}

axios.get('https://discord.com/api/users/576470929874616330', {
    withCredentials: true,
    headers: headers
}).then((data) => {
    console.log(data.data.avatar)
    axios.get(`https://cdn.discordapp.com/avatars/576470929874616330/${data.data.avatar}.png?size=256`, {
        withCredentials: true,
        headers: headers
    }).then((dataa) => {
        console.log(dataa)
    })
})



