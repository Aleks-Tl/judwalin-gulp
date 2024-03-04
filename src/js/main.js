import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

// Transform join element ========================================================================================================================================================

if (document.querySelectorAll('.header').length > 0) {
  new TransferElements(
    {
      sourceElement: document.querySelector('.header__btn'),
      breakpoints: {
        768: {
          targetElement: document.querySelector('.nav'),
          targetPosition: 1
        }
      }
    }
  );
}

// Choice tariff ========================================================================================================================================================

if (document.querySelectorAll('.price').length > 0) {
  const btnMonthly = document.querySelector('.price__btn #monthly');
  const btnYearly = document.querySelector('.price__btn #yearly');
  const listMonthly = document.querySelector('.price__list-month');
  const listYearly = document.querySelector('.price__list-year');

  btnMonthly.addEventListener('click', () => {
      listMonthly.classList.remove('hidden');
      listYearly.classList.add('hidden');
  })

  btnYearly.addEventListener('click', () => {
    listYearly.classList.remove('hidden');
    listMonthly.classList.add('hidden');
  })
}
