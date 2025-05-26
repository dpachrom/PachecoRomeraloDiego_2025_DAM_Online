**************************************************************************************************************************** ENLACE A VIDEO EXPLICATIVO DEL PROYECTO: https://youtu.be/Jz7mnC3kxTk ****************************************************************************************************************************


**************************************************************************************************************************** ENLACE A VIDEO PARA LA DEFENSA DEL PROYECTO: https://www.youtube.com/watch?v=-VxhzUBGYLc ****************************************************************************************************************************

Para el correcto funcionamiento del proyecto será necesario instalar las dependéncias de NodeJS (He utilizado la versión 22.14 LTS) con "npm install".

He adjuntado un pg_dump de la base de datos de Postgres para poder importarla con pg_restore. Adjunto los valores que harán falta del .env

DB_HOST=localhost
DB_PORT=5432
DB_USER=diparo
DB_PASSWORD="diparo"
DB_NAME=backendtask
JWT_SECRET=JwT@token_gen_dunno123712
PORT=5000


Será necesario crear la base de datos y el usuario arriba indicados antes de restaurar la base de datos usando pg_restore.
