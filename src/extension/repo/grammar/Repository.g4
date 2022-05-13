grammar Repository;

query: (findQuery | updateQuery | deleteQuery) LINE_BREAK? EOF?;

findQuery: find fieldExprList;

updateQuery: update fieldExprList;

deleteQuery: delete fieldExprList;

fieldExprList: fieldExpr (fieldExpr+)?;

fieldExpr: logic? identifier operators? literal?;

// include the keywords
identifier: UPPER_CHAR? (CHAR | keywords | literal)+;

find: FIND limitExpr? BY?;

limitExpr: ONE | (topExpr skipExpr?);

topExpr: TOP NUMBER;

skipExpr: K_SKIP NUMBER;

update: UPDATE BY?;

delete: DELETE BY?;

keywords: FIND | DELETE | UPDATE | BY | ONE | TOP | K_SKIP;

literal: NULL | TRUE | FALSE;

logic: AND | OR;

operators:
	IS
	| IS NOT
	| EQUALS
	| NOT EQUALS
	| GREATER
	| GREATER THAN
	| LESS
	| LESS THAN
	| BETWEEN
	| NOT BETWEEN
	| IN
	| NOT IN
	| LIKE
	| NOT LIKE;

WS: [ \n\u000D] -> skip;
LINE_BREAK: ('\r'? '\n') -> skip;
UNDER_SCORE: '_' -> skip;
UPPER_CHAR: [A-Z];
NUMBER: DIGIT+;
CHAR: .;

IS: I S;
NOT: N O T;
EQUALS: E Q U A L S;
LIKE: L I K E; // TODO: startingWith/endingWith/contains
GREATER: G R E A T E R;
LESS: L E S S;
BETWEEN: B E T W E E N;
THAN: T H A N -> skip;
IN: I N;
// TODO: date before/after

NULL: N U L L;
TRUE: T R U E;
FALSE: F A L S E;

FIND: F I N D;
BY: B Y;
UPDATE: U P D A T E;
DELETE: D E L E T E;
ONE: O N E;
TOP: T O P;
K_SKIP: S K I P;

AND: A N D;
OR: O R;

fragment DIGIT: ('0' ..'9');

fragment A: [aA];
// match either an 'a' or 'A'
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
