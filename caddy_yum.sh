#! /bin/sh

yum install yum-plugin-copr
yum copr enable @caddy/caddy
yum install caddy

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