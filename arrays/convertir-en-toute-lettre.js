// Fonction pour convertir un nombre en toutes lettres
function nombreEnLettres(nombre) {
    // Tableaux des noms des nombres
    const unites = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    const dizaines = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
    const exceptions = {
        1: 'onze', 2: 'douze', 3: 'treize', 4: 'quatorze', 5: 'quinze', 6: 'seize',
        7: 'dix-sept', 8: 'dix-huit', 9: 'dix-neuf'
    };

    // Fonction pour convertir un chiffre en toutes lettres
    function convertirChiffreEnLettres(chiffre) {
        if (chiffre in exceptions) {
            return exceptions[chiffre];
        } else {
            let unite = unites[chiffre % 10];
            let dizaine = dizaines[Math.floor(chiffre / 10)];
            if (chiffre >= 70 && chiffre < 80) {
                dizaine = 'soixante-' + unites[chiffre % 10 + 10];
                unite = '';
            } else if (chiffre >= 80) {
                dizaine = dizaines[Math.floor(chiffre / 10) - 1];
                if (chiffre % 10 === 1) {
                    unite = ' et un';
                } else if (chiffre % 10 === 0) {
                    unite = '';
                } else {
                    unite = '-' + unites[chiffre % 10];
                }
            }
            return dizaine + unite;
        }
    }

    // Séparer le nombre en centaines, dizaines et unités
    let centaines = Math.floor(nombre / 100);
    let dizainesEtUnites = nombre % 100;

    // Convertir chaque partie en toutes lettres
    let resultat = '';
    if (centaines > 0) {
        resultat += unites[centaines] + ' cent ';
    }
    if (dizainesEtUnites > 0) {
        resultat += convertirChiffreEnLettres(dizainesEtUnites);
    }
    return resultat.trim();
}

// Fonction pour demander un nombre à l'utilisateur
function demanderNombre() {
    let nombre;
    while (true) {
        nombre = prompt('Entrez un nombre entre 0 et 999 :');
        nombre = parseInt(nombre);
        if (!isNaN(nombre) && nombre >= 0 && nombre <= 999) {
            break;
        } else {
            alert('Nombre invalide. Veuillez entrer un nombre entre 0 et 999.');
        }
    }
    return nombre;
}

// Programme principal
while (true) {
    let nombre = demanderNombre();
    let resultat = nombreEnLettres(nombre);
    alert('Le nombre en toutes lettres est : ' + resultat);
    let continuer = confirm('Voulez-vous entrer un autre nombre ?');
    if (!continuer) {
        break;
    }
}
