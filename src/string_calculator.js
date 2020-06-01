function Add(string){
   let sum = 0;
   let numbers = string.match(this.regex)
   if(string == ""){
      return 0;
   }

   let negative = this.negatives(string);

   if(string.includes("-")) throw new Error("ERROR!\n negative " + negative + " not allowed");

   for(let i = 0; i < numbers.length; i++) {
      let number = parseInt(numbers[i]);
      if(number > 1000){
         continue;
      } else {
         sum += number;
      }
      this.regex = /\d{1,}/gm;

      this.negatives = (string) => {
         let str = '';
   
         for(let k = 0; k < string.length; k++) {
            if(string[k] === '-' && !isNaN(string[k+1])) {
               str += '-'+string[k+1] + ',';
            }
         }
   
         return str;
      };

   } 
   const delimiters = [];
   const multipleDeliterRegexp = /(?:^\/\/)?\[({^\[\]}+)\]\n?/g;
   let matches = multipleDeliterRegexp.exec(input);
   while(matches !== null){
      delimiters.push(matches[1]);
      matches = multipleDeliterRegexp.exec(input)
   }
   if(delimiters.length > 0){
      return new RegExp('{'+ delimiters.join('|')+ '|');
   }
   matches = /^\/\/(.")\n/.exec(input)
   if(matches && matches[1]){
      return matches[1];
   }
   return /{\n,}/;
   }
   getNumbers(string, delimiters)
      return string.split(delimiter)
      .filter(n => n !==  '' )
      .map(n => parseInt(n))
   
 CalculateSum(numbers)
    const isNegative = []
    const finalSum = numbers.reduce((sum, n) =>{
       if(n > 1000){
          return sum;
       }
       if(n < 0){
          isNegative.push(n)
          return 0;
       }
       return sum + n;
    })
    if(isNegative.length > 0){
       throw new Error()
    }
    return finalSum; 

    module.exports = {
       string_calculator
    }