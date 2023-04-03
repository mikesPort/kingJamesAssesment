const axios = require("axios");

module.exports.getFunction = async function getFunction() {
    const dataUrl = `https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws`

    const returnedData = await axios.get(`${dataUrl}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return returnedData.data
}