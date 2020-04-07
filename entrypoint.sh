#!/bin/bash
set -x #echo on

nginx -c /etc/nginx/nginx.conf > /dev/null
node built/index.js