"use strict";
var fs = require("fs");
var StreamZip = require("node-stream-zip");
var path = require("path");
const unrarp = require("unrar-promise");
const { unrar, list } = require("unrar-promise");

exports.extractRar = async (file) => {
  var newName = file.filename.slice(0, file.filename.length - 4);
  await unrar(`${file.path}`, "./projectStorage/" + newName);
};

exports.extractZip = async (zipFile) => {
  var newName = zipFile.filename.slice(0, zipFile.filename.length - 4);
  var zip = new StreamZip({
    file: `${zipFile.path}`,
    storeEntries: true,
  });

  zip.on("error", function (err) {
    console.error("[ERROR]", err);
  });

  zip.on("ready", function () {
    console.log("All entries read: " + zip.entriesCount);
    //console.log(zip.entries());
  });

  zip.on("entry", function (entry) {
    var pathname = path.resolve("./projectStorage/" + newName, entry.name);
    if (/\.\./.test(path.relative("./projectStorage/" + newName, pathname))) {
      console.warn(
        "[zip warn]: ignoring maliciously crafted paths in zip file:",
        entry.name
      );
      return;
    }

    if ("/" === entry.name[entry.name.length - 1]) {
      console.log("[DIR]", entry.name);
      return;
    }

    console.log("[FILE]", entry.name);
    zip.stream(entry.name, function (err, stream) {
      if (err) {
        console.error("Error:", err.toString());
        return;
      }

      stream.on("error", function (err) {
        console.log("[ERROR]", err);
        return;
      });

      // example: print contents to screen
      //stream.pipe(process.stdout);

      // example: save contents to file
      fs.mkdir(path.dirname(pathname), { recursive: true }, function (err) {
        stream.pipe(fs.createWriteStream(pathname));
      });
    });
  });
};
