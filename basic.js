
// For mobile navigation
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);
  });

  // For time picking 
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.timepicker');
    let options = {
      twelveHour : false,
      autoClose : true
    }
    M.Timepicker.init(elems, options);
  });

// For auto complete
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.autocomplete');
    let options = {
      data : {
        "Kalapuikot ja nakki" : null,
        "Maksalaatikko" : null
      }
    }
    M.Autocomplete.init(elems, options);
  });

// For food type selection
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, null);
  });