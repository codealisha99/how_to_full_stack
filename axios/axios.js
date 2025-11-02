const axios = require('axios');



async function main()
{

const response = await axios.post("https://httpdump.app/dumps/284a0fe2-a09a-466a-8915-4a79bfbb228a",
    {
        username : "testuser",
        password : "testpassword"
    },
    {
        headers: {
            'Authorization': 'Bearer 123'
        }
    }
);

}

main();