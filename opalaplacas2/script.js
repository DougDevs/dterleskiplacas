const speed = 80;
const text1 = "OPALA PLACAS\nSoluções em Placas Mercosul";
const text2 = "Entre em contato agora mesmo!!!";
const text3 = "Estamos localizados em Três Barras SC";

let i1 = 0, i2 = 0, i3 = 0;

// Função para text1 (início automático)
function typeWriter1(callback) {
  const el = document.getElementById("typed-text");
  if (i1 < text1.length) {
    const nextChar = text1.charAt(i1) === '\n' ? '<br>' : text1.charAt(i1);
    el.innerHTML = text1.substring(0, i1).replace(/\n/g, '<br>') + nextChar + '<span class="cursor">|</span>';
    i1++;
    setTimeout(() => typeWriter1(callback), speed);
  } else if (callback) {
    el.innerHTML = text1.replace(/\n/g, '<br>') + '<span class="cursor">|</span>';
    callback();
  }
}

// Função para text2
function typeWriter2() {
  const el = document.getElementById("typed-text2");
  if (i2 < text2.length) {
    el.innerHTML = text2.substring(0, i2 + 1) + '<span class="cursor">|</span>';
    i2++;
    setTimeout(typeWriter2, speed);
  } else {
    el.innerHTML = text2 + '<span class="cursor">|</span>';
  }
}

function typeWriter3() {
  const el = document.getElementById("typed-text3");
  if (i3 < text3.length) {
    el.innerHTML = text3.substring(0, i3 + 1) + '<span class="cursor">|</span>';
    i3++;
    setTimeout(typeWriter3, speed);
  } else {
    el.innerHTML = text3 + '<span class="cursor">|</span>';
  }
}


window.onload = () => {
  // inicia o primeiro texto automaticamente
  typeWriter1();

  // observa o segundo texto (contact)
  const target2 = document.getElementById("typed-text2");
  const observer2 = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      typeWriter2();
      obs.disconnect();
    }
  }, { threshold: 0.1 });
  observer2.observe(target2);

  // observa o terceiro texto (maps)
  const target3 = document.getElementById("typed-text3");
  const observer3 = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      typeWriter3();
      obs.disconnect();
    }
  }, { threshold: 0.1 });
  observer3.observe(target3);
};
