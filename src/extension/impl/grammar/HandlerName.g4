grammar HandlerName;

name: (actionHandler | eventHandler) LINE_BREAK? EOF?;

eventHandler: hook each? event? (FOR entityName)?;

actionHandler:
	hook each? (ACTION | FUNCTION) actionName (FOR entityName)?;

entityName: freeName;
actionName: freeName;

each: EACH;

// include the keywords
freeName: UPPER_CHAR? ( CHAR | event | hook | keywords | each)+;

event:
	CREATE
	| UPDATE
	| DELETE
	| READ
	| POST
	| PATCH
	| GET
	| NEW
	| EDIT
	| SAVE
	| CANCEL;

hook: (BEFORE | ON | AFTER);

keywords: FOR | EACH | ACTION | FUNCTION;

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
LINE_BREAK: ('\r'? '\n') -> skip;
UNDER_SCORE: '_' -> skip;
UPPER_CHAR: [A-Z];
CHAR: .;

ACTION: A C T I O N;
FUNCTION: F U N C T I O N;

// CRUD
CREATE: C R E A T E;
UPDATE: U P D A T E;
DELETE: D E L E T E;
READ: R E A D;

// HTTP
POST: P O S T;
GET: G E T;
PATCH: P A T C H;

// FIORI DRAFT: https://cap.cloud.sap/docs/node.js/app-services#-draft-related-events
NEW: N E W;
EDIT: E D I T;
SAVE: S A V E;
CANCEL: C A N C E L;

BEFORE: B E F O R E;
ON: O N;
AFTER: A F T E R;

FOR: F O R;
EACH: E A C H;
