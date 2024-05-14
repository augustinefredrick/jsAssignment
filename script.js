addEventListener('click', myFunction);
function myFunction() {
  const btn = document.getElementById('btn');
  const request = 'Enter your name';
  const output = prompt(request);
  alert(`Hello ${output}, it's nice to meet you!`);
}
