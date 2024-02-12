// When i mark the check box, hero image change to new one and when i unmark the checkbox hero image change old image 
const checkbox = document.getElementById('checkbox');
const heroImg = document.querySelector('.hero__img img');
const onSwitch = document.querySelector('.on__switch');
const offSwitch = document.querySelector('.off__switch');
const onSwitchText = document.querySelector('.on__switch__text');
const offSwitchText = document.querySelector('.off__switch__text');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        heroImg.src = 'img/hero/hero-on.png';
        onSwitch.style.display = 'block';
        offSwitch.style.display = 'none';
        offSwitchText.style.display = 'none';
        onSwitchText.style.display = 'block';
    } else {
        heroImg.src = 'img/hero/hero-off.png';
        onSwitch.style.display = 'none';
        offSwitch.style.display = 'block';
        offSwitchText.style.display = 'block';
        onSwitchText.style.display = 'none';
    }
});