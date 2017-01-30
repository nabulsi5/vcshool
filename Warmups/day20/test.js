var student = [ { name: " bilal" , datass: [ 100 ,50 ,40 ,30 ]}  ,  { name: " Tareq" , datass: [ 100 ,90 ,08 ,90 ]}   ];

function getTotal(student){ 

    var sum = 0 ;
    
    for(var i=0 ; i < student.length ; i++) {
        
        for(var j=0 ; j< student[i].datass.length ; j++){
             
              sum += student[i].datass[j];  
           
       
    
        
        }
          var total = sum; 

          console.log(total)
      
      ;
        
    
          
        if(total / 4 > 60){
        
        console.log(student[i].name + " pass ");
    }
    else{
        
        console.log(student[i].name + " failed ");
    }
       
            sum = 0 ;
    }
  

      
}


getTotal(student);


        
 
