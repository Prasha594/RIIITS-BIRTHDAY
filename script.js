document.getElementById('surpriseButton').addEventListener('click', function () {
  const surpriseMessage = document.getElementById('surpriseMessage');
  if (surpriseMessage.classList.contains('hidden')) {
    surpriseMessage.classList.remove('hidden');
  } else {
    surpriseMessage.classList.add('hidden');
  }
});
