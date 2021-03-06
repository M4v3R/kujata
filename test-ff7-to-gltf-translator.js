const fs = require("fs");
const FF7GltfTranslator = require("./ff7-gltf/ff7-to-gltf.js");

var config = JSON.parse(require("fs").readFileSync("config.json"));


let hrcFileId = "AAAA";
let baseAnimFileId = null;
let animFileIds = null; // don't include any animations
let includeTextures = false;
let isBattleModel = true;

//gltfTranslator.translate_ff7_field_hrc_to_gltf(config, hrcFileId, baseAnimFileId, animFileIds, includeTextures);

for (let prefix of ["rt", "ru", "rv", "rw", "rx", "ry", "rz"]) {
  hrcFileId = prefix + "aa";
  let gltfTranslator = new FF7GltfTranslator();
  gltfTranslator.translate_ff7_field_hrc_to_gltf(config, hrcFileId, baseAnimFileId, animFileIds, includeTextures, isBattleModel);
}

// translate every *.hrc.json file in the skeletons directory
/*
let filenames = fs.readdirSync(config.inputFieldCharDirectory);
for (let i=0; i<filenames.length; i++) {
  let filename = filenames[i];
  if (filename.toLowerCase().endsWith(".hrc")) {
    let hrcFileId = filename.slice(0, 4);
    try {
      gltfTranslator.translate_ff7_field_hrc_to_gltf(config, hrcFileId, null, null, includeTextures);
    } catch (err) {
      console.log('Error while trying to translate: ' + filename + ':', err);
      //break; // uncomment this line to stop on failure
    }
  }
}
*/
