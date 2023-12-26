document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('birthdate').addEventListener('input', function (event) {
      let input = event.target;
      let value = input.value.replace(/\D/g, ''); 
            let formattedValue = '';
  
      if (value.length > 2) {
        formattedValue += value.substring(0, 2) + '/';
        if (value.length > 4) {
          formattedValue += value.substring(2, 4) + '/';
          formattedValue += value.substring(4, 8);
        } else {
          formattedValue += value.substring(2);
        }
      } else {
        formattedValue = value;
      }
  
      input.value = formattedValue;
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('number').addEventListener('input', function (event) {
        let input = event.target;
        let value = input.value.replace(/\D/g, '');
              if (value.length > 16) {
                  value = value.slice(0, 16);
              }
      
              let formattedValue = '';
      
              if (value.length > 2) {
                  formattedValue += '(' + value.substring(0, 2) + ') ';
                  if (value.length > 10) {
                      formattedValue += value.substring(2, 7) + '-';
                      formattedValue += value.substring(7, 11);
                  } else {
                      formattedValue += value.substring(2);
                  }
              } else {
                  formattedValue = value;
              }
      
              input.value = formattedValue;
          });
      });
      
      
