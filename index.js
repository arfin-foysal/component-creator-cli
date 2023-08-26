#!/usr/bin/env node
const fs = require("fs");
if (fs.existsSync("src")) {
 
} else {
  fs.mkdir("src", (err) => {
    if (err) throw err;
    console.log(` src directory created 😊`);
  });
}

if (fs.existsSync("src/app")) {

} else {
  fs.mkdir("src/app", (err) => {
    if (err) throw err;
    console.log(`app directory created 😊`);
  });
}

const fileName =
  process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1) ||
  "hello-world.js";

const fileContent = `
import React from 'react'

export const ${fileName} = () => {
    return (
      <div>${fileName}</div>
    )
  }`;

fs.writeFile(`src/app/${fileName}.jsx`, fileContent, (err) => {
  if (err) throw err;
  console.log(`${fileName}.jsx created successfully😊.
  
  `);
});
