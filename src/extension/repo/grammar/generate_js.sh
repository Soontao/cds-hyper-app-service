#!/bin/bash -i
antlr4 -Dlanguage=JavaScript Repository.g4
find . -type f -name 'Repository*.js' | xargs sed -i "s/import antlr4 from 'antlr4';/import antlr4 from '..\/..\/base\/vendor\/antlr4.js';/g"
sed -i "s/import RepositoryListener from '.\/RepositoryListener.js'/import RepositoryListener from '.\/RepositoryListener'/g" RepositoryParser.js
