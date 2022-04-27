#!/bin/bash -i
antlr4 -Dlanguage=JavaScript HandlerName.g4
find . -type f -name 'HandlerName*.js' | xargs sed -i "s/import antlr4 from 'antlr4';/import antlr4 from '..\/..\/vendor\/antlr4.js';/g"
sed -i "s/import HandlerNameListener from '.\/HandlerNameListener.js'/import HandlerNameListener from '.\/HandlerNameListener'/g" HandlerNameParser.js
