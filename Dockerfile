FROM nginx:1.15
COPY dist/usersrepository-frontend /usr/share/nginx/html
EXPOSE 80
