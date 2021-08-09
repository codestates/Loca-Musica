#!/bin/bash
cd /home/ubuntu/loca-musica/server/src
npm install
npm install pm2@latest -g
pm2 install typescript
sudo apt-get update
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown ubuntu /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80
