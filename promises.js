// это просто тестовый пример, что бы в промисах разобраться делал
var isMomHappy = false;
if (Math.floor(Math.random() * (100 - 1) + 1) % 2 == 0){
    isMomHappy = true
}

// Promise
const willIGetNewPhone = new Promise(
     (resolve, reject) => {

        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // Всё выполнено
        } else {
            const reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// 2ой промис
async function showOff(phone) {
    return new Promise(
         (resolve, reject) => {
            const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
            resolve(message);
        }
    );
};

// фукция на промисах 
async  function askMomPromise() {
    willIGetNewPhone
    .then(showOff) // связываем
    .then(function (fulfilled) {
            console.log(fulfilled);
         // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

// фукция на Async
async function askMomAsync() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
    }
    catch (error) {
        console.log(error.message);
    }
    console.log('after asking mom');
}

(async () => {
    await askMomPromise();
})();
(async () => {
    await askMomAsync();
})();

// это уже применение промисов для работы со своим .json файлом
async function httpGet(url) {

    return new Promise(function(resolve, reject) {
  
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.send()
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var err = new Error(this.statusText);
          error.code = this.status;
          reject(err);
        }
      }
    })
  }

httpGet('phones.json')
  .then(response => {
    let mobile = JSON.parse(response);
    return mobile;
  })
  .then(mobile => {
      console.log(mobile)
      return mobile;
  })
  .then(mobile =>{
      mobile.forEach(function(mobile) {
      var li = listTest.appendChild(document.createElement('li'));
      li.innerHTML = mobile.name;
      });
  })
  .catch (err => {
      alert(err)
  })



