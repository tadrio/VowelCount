const phrase = "O Ratô roeu A roupa do rei de romã";
const vogals = 'aAáÁâÂãÃeEéÉêÊiIíÍoOóÓôÔõÕuUúÚ';

let count = 0;

function vowelsCount() {
  for (let i = 0; i < phrase.length; i++) {
    for (let j = 0; j < vogals.length; j++) {
      if (phrase[i] === vogals[j]){
        count++;
      }
    }
  }
  return count;
}

console.log(`The phrase "${phrase}" have ${vowelsCount()} vowels`);
