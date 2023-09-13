const {v4: uuidv4} = require('uuid')
const fs = require('fs')
const path = require('path')

class Data {
    constructor(title, text) {
        this.id = uuidv4();
        this.title = title;
        this.text = text;
    }
    static all() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'db', 'data.json'),
                'utf-8',
                (e, content) => {
                    if (e) {
                        reject(e)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }
}

module.exports = Data