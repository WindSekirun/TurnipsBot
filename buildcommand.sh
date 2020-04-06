#!/bin/bash
target="src/core/commands.ts"

echo "Preparing TurnipsBot..."

## Remove and generate file
rm -rf "$target"
touch "$target"

## Starting work..
cat >> "$target" <<EOT
// DO NOT MODIFY IT MANUALLY.
// commands.ts file is generated for each run.

import TelegramBot = require('node-telegram-bot-api')
EOT

## Import invidual commands
for file in src/command/*.ts; do

filename=$(basename  "$file" | cut -d. -f1)
nameWithoutExt=$(basename  "$file" | cut -d. -f1)
pascalcase=$(python -c "print '$nameWithoutExt'.decode('utf-8').title()")

cat >> "$target" <<EOT 
import { $pascalcase } from '../command/$filename';
EOT

done

cat >> "$target" <<EOT 
 
export function onText(bot: TelegramBot) {
EOT

## Execute invidiual commands
for file in src/command/*.ts; do
nameWithoutExt=$(basename  "$file" | cut -d. -f1)
pascalcase=$(python -c "print '$nameWithoutExt'.decode('utf-8').title()")
cat >> "$target" <<EOT 
    new $pascalcase().textMatch(bot);
EOT
done

## Finishing work...
cat >> "$target" <<EOT 
}
EOT

echo "TurnipsBot is Ready!"