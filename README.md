## SIEMPRE QUE VAYAS A EMPEZAR A TRABAJAR DEBES DE EMPAREJARTE A LA RAMA MAIN
## ESTO PARA EVITAR QUE SOBRE ESCRIBAS CODIGO DE ALGUN COMPAÑERO O TENGA DESACTUALIZADA TU RAMA
    git pull origin main




## Versiones necesarias:
    NPM: 9.3.1
    Angular CLI: 15.2.4
    NODE: 18.14.0
    error-tailor: 4.0.0

# Crear guardian
    ng g g guards/<Nombre_del_guard>

    ej. ng g g guards/torneos

##Probar Frontend sin CORS
    Abrir CMD o Powershell y ejecutar dicho comando.
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
