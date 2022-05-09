// Generated from HandlerName.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from './vendor/antlr4.js';
import HandlerNameListener from './HandlerNameListener';
const serializedATN = [4,1,22,71,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,3,0,19,8,0,1,0,3,0,22,8,0,1,0,3,0,25,8,0,
1,1,1,1,3,1,29,8,1,1,1,1,1,4,1,33,8,1,11,1,12,1,34,3,1,37,8,1,1,2,1,2,1,
2,1,2,1,2,4,2,44,8,2,11,2,12,2,45,3,2,48,8,2,1,3,1,3,1,4,1,4,1,5,3,5,55,
8,5,1,5,1,5,1,5,1,5,1,5,1,5,4,5,63,8,5,11,5,12,5,64,1,6,1,6,1,7,1,7,1,7,
0,0,8,0,2,4,6,8,10,12,14,0,3,1,0,6,7,1,0,8,18,1,0,19,21,77,0,18,1,0,0,0,
2,26,1,0,0,0,4,38,1,0,0,0,6,49,1,0,0,0,8,51,1,0,0,0,10,54,1,0,0,0,12,66,
1,0,0,0,14,68,1,0,0,0,16,19,3,4,2,0,17,19,3,2,1,0,18,16,1,0,0,0,18,17,1,
0,0,0,19,21,1,0,0,0,20,22,5,2,0,0,21,20,1,0,0,0,21,22,1,0,0,0,22,24,1,0,
0,0,23,25,5,0,0,1,24,23,1,0,0,0,24,25,1,0,0,0,25,1,1,0,0,0,26,28,3,14,7,
0,27,29,3,12,6,0,28,27,1,0,0,0,28,29,1,0,0,0,29,36,1,0,0,0,30,32,5,22,0,
0,31,33,3,6,3,0,32,31,1,0,0,0,33,34,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,
35,37,1,0,0,0,36,30,1,0,0,0,36,37,1,0,0,0,37,3,1,0,0,0,38,39,3,14,7,0,39,
40,7,0,0,0,40,47,3,8,4,0,41,43,5,22,0,0,42,44,3,6,3,0,43,42,1,0,0,0,44,45,
1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,41,1,0,0,0,47,48,1,
0,0,0,48,5,1,0,0,0,49,50,3,10,5,0,50,7,1,0,0,0,51,52,3,10,5,0,52,9,1,0,0,
0,53,55,5,4,0,0,54,53,1,0,0,0,54,55,1,0,0,0,55,62,1,0,0,0,56,63,5,5,0,0,
57,63,3,12,6,0,58,63,3,14,7,0,59,63,5,6,0,0,60,63,5,7,0,0,61,63,5,22,0,0,
62,56,1,0,0,0,62,57,1,0,0,0,62,58,1,0,0,0,62,59,1,0,0,0,62,60,1,0,0,0,62,
61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,11,1,0,0,0,66,67,
7,1,0,0,67,13,1,0,0,0,68,69,7,2,0,0,69,15,1,0,0,0,11,18,21,24,28,34,36,45,
47,54,62,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class HandlerNameParser extends antlr4.Parser {

    static grammarFileName = "HandlerName.g4";
    static literalNames = [ null, null, null, "'_'" ];
    static symbolicNames = [ null, "WS", "LINE_BREAK", "UNDER_SCORE", "UPPER_CHAR", 
                             "CHAR", "ACTION", "FUNCTION", "CREATE", "UPDATE", 
                             "DELETE", "READ", "POST", "GET", "PATCH", "NEW", 
                             "EDIT", "SAVE", "CANCEL", "BEFORE", "ON", "AFTER", 
                             "FOR" ];
    static ruleNames = [ "name", "eventHandler", "actionHandler", "entityName", 
                         "actionName", "freeName", "event", "hook" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HandlerNameParser.ruleNames;
        this.literalNames = HandlerNameParser.literalNames;
        this.symbolicNames = HandlerNameParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HandlerNameParser.RULE_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 16;
	            this.actionHandler();
	            break;

	        case 2:
	            this.state = 17;
	            this.eventHandler();
	            break;

	        }
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.LINE_BREAK) {
	            this.state = 20;
	            this.match(HandlerNameParser.LINE_BREAK);
	        }

	        this.state = 24;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 23;
	            this.match(HandlerNameParser.EOF);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eventHandler() {
	    let localctx = new EventHandlerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HandlerNameParser.RULE_eventHandler);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.hook();
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.CREATE) | (1 << HandlerNameParser.UPDATE) | (1 << HandlerNameParser.DELETE) | (1 << HandlerNameParser.READ) | (1 << HandlerNameParser.POST) | (1 << HandlerNameParser.GET) | (1 << HandlerNameParser.PATCH) | (1 << HandlerNameParser.NEW) | (1 << HandlerNameParser.EDIT) | (1 << HandlerNameParser.SAVE) | (1 << HandlerNameParser.CANCEL))) !== 0)) {
	            this.state = 27;
	            this.event();
	        }

	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.FOR) {
	            this.state = 30;
	            this.match(HandlerNameParser.FOR);
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 31;
	                this.entityName();
	                this.state = 34; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.UPPER_CHAR) | (1 << HandlerNameParser.CHAR) | (1 << HandlerNameParser.ACTION) | (1 << HandlerNameParser.FUNCTION) | (1 << HandlerNameParser.CREATE) | (1 << HandlerNameParser.UPDATE) | (1 << HandlerNameParser.DELETE) | (1 << HandlerNameParser.READ) | (1 << HandlerNameParser.POST) | (1 << HandlerNameParser.GET) | (1 << HandlerNameParser.PATCH) | (1 << HandlerNameParser.NEW) | (1 << HandlerNameParser.EDIT) | (1 << HandlerNameParser.SAVE) | (1 << HandlerNameParser.CANCEL) | (1 << HandlerNameParser.BEFORE) | (1 << HandlerNameParser.ON) | (1 << HandlerNameParser.AFTER) | (1 << HandlerNameParser.FOR))) !== 0));
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actionHandler() {
	    let localctx = new ActionHandlerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HandlerNameParser.RULE_actionHandler);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.hook();
	        this.state = 39;
	        _la = this._input.LA(1);
	        if(!(_la===HandlerNameParser.ACTION || _la===HandlerNameParser.FUNCTION)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 40;
	        this.actionName();
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.FOR) {
	            this.state = 41;
	            this.match(HandlerNameParser.FOR);
	            this.state = 43; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 42;
	                this.entityName();
	                this.state = 45; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.UPPER_CHAR) | (1 << HandlerNameParser.CHAR) | (1 << HandlerNameParser.ACTION) | (1 << HandlerNameParser.FUNCTION) | (1 << HandlerNameParser.CREATE) | (1 << HandlerNameParser.UPDATE) | (1 << HandlerNameParser.DELETE) | (1 << HandlerNameParser.READ) | (1 << HandlerNameParser.POST) | (1 << HandlerNameParser.GET) | (1 << HandlerNameParser.PATCH) | (1 << HandlerNameParser.NEW) | (1 << HandlerNameParser.EDIT) | (1 << HandlerNameParser.SAVE) | (1 << HandlerNameParser.CANCEL) | (1 << HandlerNameParser.BEFORE) | (1 << HandlerNameParser.ON) | (1 << HandlerNameParser.AFTER) | (1 << HandlerNameParser.FOR))) !== 0));
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entityName() {
	    let localctx = new EntityNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HandlerNameParser.RULE_entityName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.freeName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actionName() {
	    let localctx = new ActionNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HandlerNameParser.RULE_actionName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.freeName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	freeName() {
	    let localctx = new FreeNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HandlerNameParser.RULE_freeName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.UPPER_CHAR) {
	            this.state = 53;
	            this.match(HandlerNameParser.UPPER_CHAR);
	        }

	        this.state = 62; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 62;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case HandlerNameParser.CHAR:
	        		    this.state = 56;
	        		    this.match(HandlerNameParser.CHAR);
	        		    break;
	        		case HandlerNameParser.CREATE:
	        		case HandlerNameParser.UPDATE:
	        		case HandlerNameParser.DELETE:
	        		case HandlerNameParser.READ:
	        		case HandlerNameParser.POST:
	        		case HandlerNameParser.GET:
	        		case HandlerNameParser.PATCH:
	        		case HandlerNameParser.NEW:
	        		case HandlerNameParser.EDIT:
	        		case HandlerNameParser.SAVE:
	        		case HandlerNameParser.CANCEL:
	        		    this.state = 57;
	        		    this.event();
	        		    break;
	        		case HandlerNameParser.BEFORE:
	        		case HandlerNameParser.ON:
	        		case HandlerNameParser.AFTER:
	        		    this.state = 58;
	        		    this.hook();
	        		    break;
	        		case HandlerNameParser.ACTION:
	        		    this.state = 59;
	        		    this.match(HandlerNameParser.ACTION);
	        		    break;
	        		case HandlerNameParser.FUNCTION:
	        		    this.state = 60;
	        		    this.match(HandlerNameParser.FUNCTION);
	        		    break;
	        		case HandlerNameParser.FOR:
	        		    this.state = 61;
	        		    this.match(HandlerNameParser.FOR);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 64; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	event() {
	    let localctx = new EventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HandlerNameParser.RULE_event);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.CREATE) | (1 << HandlerNameParser.UPDATE) | (1 << HandlerNameParser.DELETE) | (1 << HandlerNameParser.READ) | (1 << HandlerNameParser.POST) | (1 << HandlerNameParser.GET) | (1 << HandlerNameParser.PATCH) | (1 << HandlerNameParser.NEW) | (1 << HandlerNameParser.EDIT) | (1 << HandlerNameParser.SAVE) | (1 << HandlerNameParser.CANCEL))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hook() {
	    let localctx = new HookContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, HandlerNameParser.RULE_hook);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.BEFORE) | (1 << HandlerNameParser.ON) | (1 << HandlerNameParser.AFTER))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

HandlerNameParser.EOF = antlr4.Token.EOF;
HandlerNameParser.WS = 1;
HandlerNameParser.LINE_BREAK = 2;
HandlerNameParser.UNDER_SCORE = 3;
HandlerNameParser.UPPER_CHAR = 4;
HandlerNameParser.CHAR = 5;
HandlerNameParser.ACTION = 6;
HandlerNameParser.FUNCTION = 7;
HandlerNameParser.CREATE = 8;
HandlerNameParser.UPDATE = 9;
HandlerNameParser.DELETE = 10;
HandlerNameParser.READ = 11;
HandlerNameParser.POST = 12;
HandlerNameParser.GET = 13;
HandlerNameParser.PATCH = 14;
HandlerNameParser.NEW = 15;
HandlerNameParser.EDIT = 16;
HandlerNameParser.SAVE = 17;
HandlerNameParser.CANCEL = 18;
HandlerNameParser.BEFORE = 19;
HandlerNameParser.ON = 20;
HandlerNameParser.AFTER = 21;
HandlerNameParser.FOR = 22;

HandlerNameParser.RULE_name = 0;
HandlerNameParser.RULE_eventHandler = 1;
HandlerNameParser.RULE_actionHandler = 2;
HandlerNameParser.RULE_entityName = 3;
HandlerNameParser.RULE_actionName = 4;
HandlerNameParser.RULE_freeName = 5;
HandlerNameParser.RULE_event = 6;
HandlerNameParser.RULE_hook = 7;

class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_name;
    }

	actionHandler() {
	    return this.getTypedRuleContext(ActionHandlerContext,0);
	};

	eventHandler() {
	    return this.getTypedRuleContext(EventHandlerContext,0);
	};

	LINE_BREAK() {
	    return this.getToken(HandlerNameParser.LINE_BREAK, 0);
	};

	EOF() {
	    return this.getToken(HandlerNameParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitName(this);
		}
	}


}



class EventHandlerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_eventHandler;
    }

	hook() {
	    return this.getTypedRuleContext(HookContext,0);
	};

	event() {
	    return this.getTypedRuleContext(EventContext,0);
	};

	FOR() {
	    return this.getToken(HandlerNameParser.FOR, 0);
	};

	entityName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntityNameContext);
	    } else {
	        return this.getTypedRuleContext(EntityNameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterEventHandler(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitEventHandler(this);
		}
	}


}



class ActionHandlerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_actionHandler;
    }

	hook() {
	    return this.getTypedRuleContext(HookContext,0);
	};

	actionName() {
	    return this.getTypedRuleContext(ActionNameContext,0);
	};

	ACTION() {
	    return this.getToken(HandlerNameParser.ACTION, 0);
	};

	FUNCTION() {
	    return this.getToken(HandlerNameParser.FUNCTION, 0);
	};

	FOR() {
	    return this.getToken(HandlerNameParser.FOR, 0);
	};

	entityName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntityNameContext);
	    } else {
	        return this.getTypedRuleContext(EntityNameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterActionHandler(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitActionHandler(this);
		}
	}


}



class EntityNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_entityName;
    }

	freeName() {
	    return this.getTypedRuleContext(FreeNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterEntityName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitEntityName(this);
		}
	}


}



class ActionNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_actionName;
    }

	freeName() {
	    return this.getTypedRuleContext(FreeNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterActionName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitActionName(this);
		}
	}


}



class FreeNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_freeName;
    }

	UPPER_CHAR() {
	    return this.getToken(HandlerNameParser.UPPER_CHAR, 0);
	};

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HandlerNameParser.CHAR);
	    } else {
	        return this.getToken(HandlerNameParser.CHAR, i);
	    }
	};


	event = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EventContext);
	    } else {
	        return this.getTypedRuleContext(EventContext,i);
	    }
	};

	hook = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HookContext);
	    } else {
	        return this.getTypedRuleContext(HookContext,i);
	    }
	};

	ACTION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HandlerNameParser.ACTION);
	    } else {
	        return this.getToken(HandlerNameParser.ACTION, i);
	    }
	};


	FUNCTION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HandlerNameParser.FUNCTION);
	    } else {
	        return this.getToken(HandlerNameParser.FUNCTION, i);
	    }
	};


	FOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HandlerNameParser.FOR);
	    } else {
	        return this.getToken(HandlerNameParser.FOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterFreeName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitFreeName(this);
		}
	}


}



class EventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_event;
    }

	CREATE() {
	    return this.getToken(HandlerNameParser.CREATE, 0);
	};

	UPDATE() {
	    return this.getToken(HandlerNameParser.UPDATE, 0);
	};

	DELETE() {
	    return this.getToken(HandlerNameParser.DELETE, 0);
	};

	READ() {
	    return this.getToken(HandlerNameParser.READ, 0);
	};

	POST() {
	    return this.getToken(HandlerNameParser.POST, 0);
	};

	PATCH() {
	    return this.getToken(HandlerNameParser.PATCH, 0);
	};

	GET() {
	    return this.getToken(HandlerNameParser.GET, 0);
	};

	NEW() {
	    return this.getToken(HandlerNameParser.NEW, 0);
	};

	EDIT() {
	    return this.getToken(HandlerNameParser.EDIT, 0);
	};

	SAVE() {
	    return this.getToken(HandlerNameParser.SAVE, 0);
	};

	CANCEL() {
	    return this.getToken(HandlerNameParser.CANCEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterEvent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitEvent(this);
		}
	}


}



class HookContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_hook;
    }

	BEFORE() {
	    return this.getToken(HandlerNameParser.BEFORE, 0);
	};

	ON() {
	    return this.getToken(HandlerNameParser.ON, 0);
	};

	AFTER() {
	    return this.getToken(HandlerNameParser.AFTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterHook(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitHook(this);
		}
	}


}




HandlerNameParser.NameContext = NameContext; 
HandlerNameParser.EventHandlerContext = EventHandlerContext; 
HandlerNameParser.ActionHandlerContext = ActionHandlerContext; 
HandlerNameParser.EntityNameContext = EntityNameContext; 
HandlerNameParser.ActionNameContext = ActionNameContext; 
HandlerNameParser.FreeNameContext = FreeNameContext; 
HandlerNameParser.EventContext = EventContext; 
HandlerNameParser.HookContext = HookContext; 
