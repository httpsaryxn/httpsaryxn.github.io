// Section tab click handler
const tabs = document.querySelectorAll('.section-tabs .tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('selected'));
    tab.classList.add('selected');
  });
});
// Palette & answer logic
const options = document.querySelectorAll('.option-checkbox');
const paletteNums = document.querySelectorAll('.palette-num');
options.forEach(opt => {
  opt.addEventListener('change', () => {
    if ([...options].some(o => o.checked)) {
      paletteNums[0].classList.remove('notanswered');
      paletteNums[0].classList.remove('notvisited');
      paletteNums[0].classList.add('answered');
    } else {
      paletteNums[0].classList.remove('answered');
      paletteNums[0].classList.add('notanswered');
    }
  });
});
// Palette number select highlight
paletteNums.forEach((num, idx) => {
  num.addEventListener('click', () => {
    paletteNums.forEach(n => n.classList.remove('selected'));
    num.classList.add('selected');
  });
});
// Bottom action feedback
function flashBtn(btn) {
  btn.style.opacity = '0.5';
  setTimeout(() => btn.style.opacity = '', 180);
}
document.getElementById('mark-review').onclick = function(){ flashBtn(this); paletteNums[0].classList.remove('answered','notvisited'); paletteNums[0].classList.add('review'); };
document.getElementById('clear-response').onclick = function(){ flashBtn(this); options.forEach(o=>o.checked=false); paletteNums[0].classList.remove('answered'); paletteNums[0].classList.add('notanswered'); };
document.getElementById('save-next').onclick = function(){ flashBtn(this); };
document.getElementById('submit-btn').onclick = function(){ flashBtn(this); alert('Test submitted!'); };
