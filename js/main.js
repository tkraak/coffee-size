(function () {
  const form = document.querySelector('form');
  const span = document.querySelector('span');

  function serialize (form) {
    const radios = Array.from(form.elements).filter(element => element.type === 'radio');
    const checkedRadio = radios.filter(radio => radio.checked === true);
    return checkedRadio;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    span.innerText = serialize(form)[0].value;
  })
})()
