/*Di questo script non ci capiso niente, l'ho copiato pari pari
dall'Ai Agent (chidendogli un pezzettino di codice che mi muovesse
quel bottone giusto per provare come si integra con HTML e CSS*/

const btn = document.querySelector('button'); // prende il primo bottone
btn.style.position = 'relative';

btn.addEventListener('click', () => {
    const x = Math.floor(Math.random() * 120);
    const y = Math.floor(Math.random() * 40);
    btn.style.transform = `translate(${x}px, ${y}px)`;
});