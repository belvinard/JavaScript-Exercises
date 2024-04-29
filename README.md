A. Examinons la fonction nombreEnLettres pas à pas :

A1. Tableaux de noms de nombres:
Les tableaux unites et dizaines contiennent les noms des chiffres de 0 à 9, ainsi que les dizaines de 10 à 90.
Le tableau exceptions contient les exceptions pour les nombres de 11 à 19.
A2. Fonction convertirChiffreEnLettres:
Cette fonction prend un chiffre (de 0 à 9) et le convertit en son équivalent en lettres.
Elle gère les cas spéciaux pour les nombres de 11 à 19.
Elle calcule le nom de la dizaine et de l'unité en fonction du chiffre passé en paramètre.
A3. Conversion en centaines, dizaines et unités:
La fonction divise le nombre entré en centaines, dizaines et unités à l'aide des opérations de division et de modulo.
A4. Conversion en toutes lettres:
La fonction commence par vérifier si le nombre a des centaines. Si c'est le cas, elle ajoute le nom de la centaine en lettres.
Ensuite, elle appelle convertirChiffreEnLettres pour convertir les dizaines et les unités en lettres.
Elle retourne le résultat de la conversion, en veillant à supprimer les espaces supplémentaires avec trim().
En résumé, cette fonction divise le nombre en centaines, dizaines et unités, puis convertit chaque partie en toutes lettres en utilisant des tableaux de correspondance et des règles spécifiques aux nombres en français.

NB: Le while (true) est utilisé dans ce contexte pour créer une boucle infinie, ce qui signifie que le programme continuera à s'exécuter à l'intérieur de cette boucle jusqu'à ce qu'une condition de sortie soit rencontrée et que la boucle soit explicitement interrompue.


