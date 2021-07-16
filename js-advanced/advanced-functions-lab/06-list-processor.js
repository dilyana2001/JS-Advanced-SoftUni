function listProcessor(arr) {
    let modify = (function() {
        let result = []
        return {
            add(str) {
                result.push(str)
            },
            remove(str) {
                while (result.includes(str)) result.splice(result.indexOf(str), 1)
            },
            print() {
                console.log(result.join(','))
            }
        }
    })()
    arr.forEach(line => {
        let [command, str] = line.split(' ')
        modify[command](str)
    })
}

// listProcessor(['add hello', 'add again', 'add again', 'remove again', 'print'])