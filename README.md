# FriendsCount 🤑

### Initialisation du projet 

1.  Récupérer le projet sur Github : git clone https://github.com/AlexisLefoul/FriendsCount.git

2.  Ajouter les dépendances  du Front-End :
```
        - Ouvrez un terminal PowerShell
        - Allez dans le dossier FriendsCount puis Front : cd FriendsCount\Front
        - Ajoutez les dépendances avec :
            yarn install
```       

3.  Ajouter les dépendances  du Back-End :
```   
        - Ouvrez un terminal PowerShell
        - Allez dans le dossier FriendsCount puis API : cd FriendsCount\API
        - Ajoutez les dépendances  :
            yarn add    bcrypt
                        express
                        @supabase/supabase-js
                        swagger-jsdoc
                        swagger-ui-express
                        typescript
        - Puis Ajoutez "supervisor" en global :
            yarn global add supervisor
```   
4.  Lancer le Server :
```   
        - Ouvrez un nouveau terminal GitBash
        - Allez dans le dossier FriendsCount puis API : cd FriendsCount\API
        - Lancez la compilation : sh compile.sh

        - Allez dans le dossier FriendsCount puis API : cd FriendsCount\API
        - Ouvrez un nouveau terminal GitBash
        - Lancez le process node : Supervisor app
```   
5.  Lancer l'app Web :
```   
        - Dans un terminal PowerShell
        - Allez dans le dossier FriendsCount puis Front : cd FriendsCount\Front
        - Lancez l'application : yarn start
        - Cliquez sur le lien qui se trouve dans le terminal
```   


### Documentation de l'api

1. Lancer le server du projet (étape 4)
2. Dans un navigateur mettez cette url : ``` localhost:4000/docs ```


### Choix techniques

En premier pour le front-end, j'ai opté pour React avec le framework Metronic car je l'utilise en entreprise. 
J'ai fait ce choix pour les raisons suivantes :
- Gain de temps et d'efforts : Ce sont les technos que je connais le mieux.
- Performance : React offre de bonnes performances
grâce à son architecture basée sur des composants.

Ensuite, j'ai choisi Axios, une bibliothèque JavaScript populaire pour
effectuer des requêtes HTTP depuis le client vers le serveur. J'ai fait ce
choix pour les raisons suivantes :
- Simplicité d'utilisation : Axios fournit une API simple et facile à
comprendre pour effectuer des requêtes HTTP.
- Support pour les intercepteurs de requêtes et de réponses : Cela me
permet de gérer facilement les erreurs, d'ajouter des en-têtes
personnalisés et de gérer les réponses.
- Compatibilité avec React : Axios fonctionne bien avec React
et s'intègre facilement.

Puis pour le back-end, j'ai choisi Node.js, un environnement
d'exécution JavaScript côté serveur, associé à Express, un
framework minimaliste pour la création d'applications web. J'ai fait ce choix pour 
les raisons suivantes :
- Performance et évolutivité : Node.js utilise une architecture
orientée événements et non bloquante, ce qui permet une
meilleure gestion des requêtes et une meilleure extensibilité.
- Utilisation de JavaScript côté client et serveur : L'utilisation du
même langage (JavaScript) pour le front-end et le back-end
facilite le partage de code et la collaboration entre les
développeurs.
- Écosystème riche : Node.js dispose d'une vaste bibliothèque de
modules prêts à l'emploi, dont Express, qui facilite la création
d'API RESTful et la gestion des routes.

Enfin pour la base de données, j'ai choisi Supabase, qui est du même type que Firebase
en plus simple. J'ai fait ce choix pour les raisons suivantes :
- Facilité d'utilisation  : Supabase est très simple à mettre en place et à utiliser
- Connaissance : j'ai déjà utilisé Supabase pour un autre projet donc je me suis
basé sur mes connaissances.


###### Alexis Lefoul
