Polecenia <br>
docker build --build-arg VERSION=1.2.3 -f Dockerfile_lab5 -t nginx_proxy:v1 .  <br>
docker run -d -p 8080:80 --name yaynginx nginx_proxy:v1  <br>
