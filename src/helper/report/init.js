const fs = require("fs-extra");

try {
    fs.ensureDir("test-results");
    fs.emptyDir("test-results");

} catch {
    console.log("Folder is not created")
}