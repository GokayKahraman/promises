const axios = require("axios")

function test(id) {
    setTimeout(() =>{
        axios.get("https://api.coincap.io/v2/assets?ids=" + id)
            .then((response) => console.log(response.data.data))
            .catch(()=> console.log("istek atamadım brom sorry"))
    },5000)
}

axios.get("https://api.coincap.io/v2/assets?limit=5")
	.then(function(response) {
        return Promise.all([test(response.data.data[0].id),
                                        test(response.data.data[1].id),
                                        test(response.data.data[2].id),
                                        test(response.data.data[3].id),
                                        test(response.data.data[4].id)])
    })
	.catch(()=>console.log("hataaaaaaaaaaaaaaa"))
