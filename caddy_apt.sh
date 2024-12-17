#! /bin/sh

sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
"{
    on_demand_tls {
        ask https://hw.billigerhost.com/links/
    }
}

https:// {
    tls {
        on_demand
    }

    reverse_proxy localhost:8080
    encode gzip
}" > /etc/caddy/Caddyfile
systemctl restart caddy
npm i
npm install pm2@latest -g
pm2 start index.js
pm2 save
pm2 startup