const input = process.argv.splice(2);

const alarm = (input) => {
  const mapNum = input.map((arg) => Number(arg)).sort((a, b) => a - b)
  
  for(let i = 0; i < mapNum.length; i++) {
    if(mapNum[i] >= 0 ) {
      setTimeout(() => {
         process.stdout.write('\x07');
       }, mapNum[i] * 1000);
    }   
  }
}

alarm(input);
 