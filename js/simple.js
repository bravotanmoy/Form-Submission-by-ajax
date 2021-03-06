var result_div = document.getElementById("result");
      var volume = document.getElementById("volume");

      function displayErrors(errors) {
        var inputs = document.getElementsByTagName('input');
        for(i=0; i < inputs.length; i++) {
          var input = inputs[i];
          if(errors.indexOf(input.name) >= 0) {
            input.classList.add('error');
          }
        }
      }

      function clearErrors() {
        var inputs = document.getElementsByTagName('input');
        for(i=0; i < inputs.length; i++) {
          inputs[i].classList.remove('error');
        }
      }

      function postResult(value) {
        volume.innerHTML = value;
        result_div.style.display = 'block';
      }

      function clearResult() {
        volume.innerHTML = '';
        result_div.style.display = 'none';
      }

      // omits textareas, select-options, checkboxes, radio buttons
      function gatherFormData(form) {
        var inputs = form.getElementsByTagName('input');
        var array = [];
        for(i=0; i < inputs.length; i++) {
          var inputNameValue = inputs[i].name + '=' + inputs[i].value;
          array.push(inputNameValue);
        }
        return array.join('&');
      }

      function calculateMeasurements() {
        clearResult();
        clearErrors();

        var form = document.getElementById("measurement-form");
        var action = form.getAttribute("action");

        // gather form data
        var form_data = new FormData(form);
        for ([key, value] of form_data.entries()) {
          console.log(key + ': ' + value);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', action, true);
        // do not set content-type with FormData
        //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = function () {
          if(xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            console.log('Result: ' + result);
            var json = JSON.parse(result);
            if(json.hasOwnProperty('errors') && json.errors.length > 0) {
              displayErrors(json.errors);
            } else {
              postResult(json.volume);
            }
          }
        };
        xhr.send(form_data);
      }

      var button = document.getElementById("ajax-submit");
      button.addEventListener("click", calculateMeasurements);