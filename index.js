const phrase = "o rato roeu a roupa do rei de roma";

let count = 0;

function vowelsCount() {
  for (let i = 0; i < phrase.length; i++) {
    if (
      phrase[i] === "a" ||
      phrase[i] === "e" ||
      phrase[i] === "i" ||
      phrase[i] === "o" ||
      phrase[i] === "u"
    )
      count++;
  }
  return count;
}

console.log(vowelsCount());
