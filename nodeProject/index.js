const { promises: fs } = require("fs")
const yaml = require('js-yaml');

(async function jsonToYaml() { //Async function

    try { //Surrounded with try catch error due to async code

        let wordsJson = await fs.readFile("./words.json", "utf-8")  //Read from words.json
        let doc = yaml.load(wordsJson) //Why does it change to a Python object?
        let wordsYaml = yaml.dump(doc) //produces the doc as a str object
        await fs.writeFile("./words.yaml", wordsYaml, "utf-8") //Running as synchronous by suspending execution until the returned promise is fulfilled or rejected. Hence try catch


    } catch (error) {
        console.log(error)
    }

})()