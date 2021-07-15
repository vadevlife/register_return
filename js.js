 
let cadastrados={}


function getData(){  
 
  let input = document.getElementsByTagName("INPUT"); 

  Array.from(input).map(function(el){

    var DataName = el.name;
    var DataValue = el.value;

    cadastrados[DataName] = DataValue;
    

  }) 
 return console.log(cadastrados)
} 


