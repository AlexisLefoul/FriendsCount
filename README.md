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


###### Alexis Lefoul
