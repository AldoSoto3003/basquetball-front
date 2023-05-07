# Primero DEBES CREAR una rama para tu desarrollo
    git checkout -b "el nombre de tu rama"

    este comando solo se ejecuta cuando vas a crear la rama, si la rama
    ya existe y te quires cambiar a ella desde otro rama, debes ejecutar el mismo
    comando pero sin el subfijo "-b"

    git checkout "el nombre de tu rama"

# Antes de empezar a trabajar DEBES OBLIGATORIAMENTE actualizar tu rama
    y como hago eso????

    git pull origin main

# Cuando termines de trabajar y quieras subir cambios (SOLO SUBE CAMBIOS A TU RAMA, NO A MAIN)
    git add .
    git commit -m "nombre del commit"
    git push origin "el nombre de tu rama"  (esto sube el commit al repositorio remoto, si no haces esto solo conoces los cambios TU)



### SI TIENES DUDAS, NO SUBAS NADA, PREGUNTA ANTES DE HACER CUALQUIER CAMBIO EN GIT, POR FAVOR 


## Versiones necesarias:
    NPM: 9.3.1
    Angular CLI: 15.2.4
    NODE: 18.14.0
    error-tailor: 4.0.0