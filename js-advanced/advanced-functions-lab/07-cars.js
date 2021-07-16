function cars() {
    let iife = (function() {
        return {
            create(name) {
                let obj = { name }
            },
            create(name, inherit, parentName) {
                obj[name] = parentName
            },
            set(name, key, value) {
                obj[name] = { key: value }
            },
            print(name) {
                console.log(obj.name)
            }
        }
    })
}
// cars([
//     'create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ])