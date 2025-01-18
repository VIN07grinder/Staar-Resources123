#! /bin/bash

curl -sS https://webi.sh/caddy | sh
sudo mv ~/.local/bin/caddy /usr/local/bin/caddy

touch ./Caddyfile
echo "{
    on_demand_tls {
        ask https://hw.billigerhost.com/links/
    }
}

https:// {
    tls {
        on_demand
    }

    reverse_proxy t
    encode gzip
}" > Caddyfile
caddy start
npm i
npm install pm2@latest -g
pm2 start index.js
pm2 save
pm2 startup