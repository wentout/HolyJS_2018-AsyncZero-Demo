#!/bin/bash

if [ $1!="--init" ]; then
    kill `cat bin/pid`;
fi

NODE_ENV=development NODE_PATH=. ./node_modules/supervisor/lib/cli-wrapper.js -e js,json -w app.js,model,routes ./app.js >> log/dev.log 2>&1 &
echo $! > bin/pid
tail -f log/dev.log
