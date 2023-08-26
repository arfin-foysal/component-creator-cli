#!/usr/bin/env node
const fs = require("fs");
if (process.argv.length === 4) {
  const dirName = process.argv[2];
    if (!fs.existsSync(dirName)) {
        fs.mkdir(dirName, (err) => {
            if (err) throw err;
            console.log(`${dirName} created successfully😊.
            `);
        }
        );
    }

    const fileName = process.argv[3].charAt(0).toUpperCase() + process.argv[3].slice(1) ||
    "hello-world.jsx";
  const fileContent = `
    import React from 'react'
    
    export const ${fileName} = () => {
        return (
          <div>${fileName}</div>
        )
      }`;
    
    //if file already exists
    if (fs.existsSync(`${dirName}/${fileName}.jsx`)) {
        console.log(`${fileName}.jsx already exists in ${dirName}😐.
        `);
        return;
    }

  fs.writeFile(`${dirName}/${fileName}.jsx`, fileContent, (err) => {
    if (err) throw err;
    console.log(`${fileName}.jsx created successfully😊.
          `);
  });
    
    
} else {
  const fileName =
    process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1) ||
    "hello-world.jsx";
  const fileContent = `
import React from 'react'

export const ${fileName} = () => {
    return (
      <div>${fileName}</div>
    )
  }`;
    
    //if file already exists
    if (fs.existsSync(`${fileName}.jsx`)) {
        console.log(`${fileName}.jsx already exists😐.
    `);
        return;
    }

  fs.writeFile(`${fileName}.jsx`, fileContent, (err) => {
    if (err) throw err;
    console.log(`${fileName}.jsx created successfully😊.
  `);
  });
}
