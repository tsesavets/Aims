const file = 'fs_commands.txt';
var fs = require('fs');


fs.writeFileSync(file, 'always first record',(err) => {
  if (err) throw err;
})

fs.appendFileSync(file, " / The second added ", (err) =>{
  if(err) throw err;
})

fs.appendFileSync(file, " / The third added ", (err) =>{
  if(err) throw err;
})
console.log("Запись файла завершена. Содержимое файла:");
let final_doc = fs.readFileSync(file, "utf8");
console.log(final_doc);

/*fs.unlinkSync(file, function (err) {
  if (err) throw err;
  console.log('File deleted!');
});*/