Polecenia <br>
docker build -f Dockerfile_lab5 -t nginx_proxy:v1 .  <br>
docker run -d -p 8080:80 --name yaynginx nginx_proxy:v1  <br>
