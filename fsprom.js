const file = 'fs_prom.txt';
var fs = require('fs');

async function  WriteTextInFile() {
  try{
  await fs.writeFileSync(file, 'always first record')
  await fs.appendFileSync(file, " / The second added ")
  await fs.appendFileSync(file, " / The third added ")
  } catch (error) {
    console.log(error.message);
  }
  console.log("Запись файла завершена. Содержимое файла:")
}

async function  ReadTextInFile() {
  fs.readFile(file, "utf8", (err, text) => {
    if (err) throw err;
    console.log(text)
  })
}


(async () => {
    await WriteTextInFile();
})();

(async () => {
    await ReadTextInFile();
})();