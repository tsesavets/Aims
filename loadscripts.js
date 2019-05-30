function loadPhones(callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'phones.json', true); 
  xhr.send()
  xhr.onreadystatechange = function() {
      // (3)
    if (xhr.readyState != 4) return;

    buttonID.innerHTML = 'Готово! Загрузить еще раз?';
    buttonID.disabled = false;

    if (xhr.status != 200) {
      alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } else {
      alert(xhr.responseText);
      callback(xhr.responseText);
    }
  }
  buttonID.innerHTML = 'Загружаю...'; // (2)
  buttonID.disabled = true;
}

function OnlyPhoneNames(responseText) {

var phones = JSON.parse(responseText);
showPhonesName(phones);
buttonTest2.innerHTML = 'Зaгрузить PhoneNames еще раз...'; // (2)
buttonTest2.disabled = false;
}

function showPhonesName(phones){

  phones.forEach(function(phone) {
  var li = listTest.appendChild(document.createElement('li'));
  li.innerHTML = phone.name;
  });
}

function OnlyPhoneIDs(responseText) {

var phones = JSON.parse(responseText);
showPhonesID(phones);
}

function showPhonesID(phones){

  phones.forEach(function(phone) {
  var li = listTest.appendChild(document.createElement('li'));
  li.innerHTML = phone.id;
  });

  buttonTest3.innerHTML = 'Зaгрузить PhoneIDs еще раз...'; // (2)
  buttonTest3.disabled = false;

}