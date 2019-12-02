'use strict';

import { readFileSync, readFile } from 'fs';

let data = readFileSync('./input.json');
let student_json = JSON.parse(data);
console.log(student_json);


readFile('./input.json', (err, data) => {
  if (err) throw err;
  let student = JSON.parse(data);
  console.log(student);
});
