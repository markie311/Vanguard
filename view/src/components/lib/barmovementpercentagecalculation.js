

export default function barmovementpercentagecalculation(_barpercentage, _pectagageindication, _barpercentagemovementinterval, claimed, overallcount) {
   
      var initialvalue = null;
      var width = 0;
    
     
      const _percentage = claimed / overallcount * 100;
    
      _pectagageindication.innerText = `${_percentage}%`
     _barpercentagemovementinterval = setInterval(move,1000);
    
    
     function move() {
         if ( width > _percentage ) {
            clearInterval(_barpercentagemovementinterval);
            _barpercentagemovementinterval = setInterval(moveout,10);
         } else  {
             initialvalue = width++
            _barpercentage.style.width = width + '%';
         }
      }

     
    
     function moveout() {
        if ( width === 0 ) {
            clearInterval(_barpercentagemovementinterval);
            _barpercentagemovementinterval = setInterval(move,1000);
         } else  {
            initialvalue = width--
           _barpercentage.style.width = width + '%';
         }
       }
} 


