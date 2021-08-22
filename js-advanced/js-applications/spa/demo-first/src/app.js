import printName, { someVariable } from './utils.js' // ES6  // printName is variable(default is taken printName from utils.js)
// const printName = requite('./utils.js')  // common js

import * as constans from './constans.js'
//import { PROJECT_NAME, OTHER_VARIABLE as changedName } from './constans.js' // name import // as is used to change the name of OTHER_VARIABLE to changeName

let rootElement = document.querySelector('.root')

console.log(constans.OTHER_VARIABLE);

printName();

console.log(rootElement);