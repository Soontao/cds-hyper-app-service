grammar HandlerName;

name: (hook UNDER_SCORE?)+ ((event UNDER_SCORE?)+)? UNDER_SCORE? entity? LINEB_REAK? EOF?;
entity: UPPER_CHAR? (CHAR | event | hook)+;
event: CREATE | UPDATE | DELETE | READ;
hook: (BEFORE | ON | AFTER);

Operator: (AND | OR) -> skip;

// fragment EntityNamePart: [A-Z_][a-z0-9]+;

fragment A: [aA]; // match either an 'a' or 'A'
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];

WS: [ \n\u000D] -> skip;
LINEB_REAK: ('\r'? '\n') -> skip;
UNDER_SCORE: '_';
UPPER_CHAR: [A-Z];
CHAR: .;

CREATE: C R E A T E;
UPDATE: U P D A T E;
DELETE: D E L E T E;
READ: R E A D;

BEFORE: B E F O R E;
ON: O N;
AFTER: A F T E R;

AND: A N D;
OR: O R;
