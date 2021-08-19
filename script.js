const btns = document.querySelectorAll('.btn');
const btn_switch = document.querySelector('#switch');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if(!e.target.classList.contains('active')) {
            btns.forEach(item => item.classList.remove('active'))
            btn_switch.classList.toggle('active')
            btn.classList.add('active')          
        }        
    })
})