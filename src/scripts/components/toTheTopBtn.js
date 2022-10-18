import {MDCRipple} from '@material/ripple';

const iconButtonRipple = new MDCRipple(document.querySelector('#scroll-to-the-top'));
iconButtonRipple.unbounded = true;

iconButtonRipple.listen("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})


export * from "./toTheTopBtn.js"