Voici un débrief de ce que j'ai fait pour réaliser cette exercice

Concernant le projet :

J'ai créé un dossier "container" qui contient les pages du site, en l'occurence la page abonnement.
J'ai créé un dossier "components" dans lequel je mets tous mes composants qui vont me servir à différents endroits.

Dans le fichier App.js j'ai intégré mes composants header, sidebar(pour la bar de menu sur le côté) et Abonnements. Avec plus de temps, j'aurai intégré la navigation en créant les différentes routes.
Le fait d'intégrer le header et la sidebar me permet de récupérer ces composants sur toutes mes pages s'il y en a plusieurs.

Sur le header j'ai créé un composant "Icone" pour tous les icone de la barre. Cela me permet de le récupérer son style sur ma page "abonnements"

Sur la page abonnements j'ai créé un composant "Cards" pour les vignettes.
Le code n'est pas DRY car je suis obligé de recopier les datas vue que je ne fais pas d'appels api pour les récupérer.

Sur la Sidebar j'ai également intégré un composant "Menu".

Pour tout ce qui est icônes j'ai fait le choix de les prendre directement sur Fontawsome afin d'aller plus vite plutôt que de les enregistrer.

En ayant un peu plus de temps j'aurais fait l'ouverture des icônes quand on clique dessus. J'aurais également fait la création de pages vierges de manière à être redirigé vers ces pages quand on clique sur le menu.
