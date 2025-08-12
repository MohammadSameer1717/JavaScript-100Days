// .ignore
const { execSync } = require("child_process");

const scripts = [
  "Revision/Revision.js",                     
  // "DOM.js/script.js",  // Uncomment if running in browser
  "jsEverythingAboutEverything/script.js",    
  "NamasteJavascript/index.js"
];

scripts.forEach(script => {
  console.log(`\n--- Running ${script} ---`);
  try {
    // Capture the output
    const output = execSync(`node ${script}`, { encoding: "utf8" });
    if (output.trim()) {
      console.log(output.trim()); // Print only if there’s something
    }
  } catch (err) {
    console.error(`Error in ${script}:`, err.message);
  }
});


