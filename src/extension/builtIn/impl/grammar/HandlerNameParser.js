// Generated from HandlerName.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from '../../../base/vendor/antlr4.js';
import HandlerNameListener from './HandlerNameListener';
const serializedATN = [4,1,23,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,3,0,23,8,0,1,0,3,0,26,8,
0,1,0,3,0,29,8,0,1,1,1,1,3,1,33,8,1,1,1,3,1,36,8,1,1,1,1,1,3,1,40,8,1,1,
2,1,2,3,2,44,8,2,1,2,1,2,1,2,1,2,3,2,50,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
3,6,59,8,6,1,6,1,6,1,6,1,6,1,6,4,6,66,8,6,11,6,12,6,67,1,7,1,7,1,8,1,8,1,
9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,4,1,0,6,7,1,0,8,18,1,0,19,21,
2,0,6,7,22,23,79,0,22,1,0,0,0,2,30,1,0,0,0,4,41,1,0,0,0,6,51,1,0,0,0,8,53,
1,0,0,0,10,55,1,0,0,0,12,58,1,0,0,0,14,69,1,0,0,0,16,71,1,0,0,0,18,73,1,
0,0,0,20,23,3,4,2,0,21,23,3,2,1,0,22,20,1,0,0,0,22,21,1,0,0,0,23,25,1,0,
0,0,24,26,5,2,0,0,25,24,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,29,5,0,0,
1,28,27,1,0,0,0,28,29,1,0,0,0,29,1,1,0,0,0,30,32,3,16,8,0,31,33,3,10,5,0,
32,31,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,36,3,14,7,0,35,34,1,0,0,0,35,
36,1,0,0,0,36,39,1,0,0,0,37,38,5,22,0,0,38,40,3,6,3,0,39,37,1,0,0,0,39,40,
1,0,0,0,40,3,1,0,0,0,41,43,3,16,8,0,42,44,3,10,5,0,43,42,1,0,0,0,43,44,1,
0,0,0,44,45,1,0,0,0,45,46,7,0,0,0,46,49,3,8,4,0,47,48,5,22,0,0,48,50,3,6,
3,0,49,47,1,0,0,0,49,50,1,0,0,0,50,5,1,0,0,0,51,52,3,12,6,0,52,7,1,0,0,0,
53,54,3,12,6,0,54,9,1,0,0,0,55,56,5,23,0,0,56,11,1,0,0,0,57,59,5,4,0,0,58,
57,1,0,0,0,58,59,1,0,0,0,59,65,1,0,0,0,60,66,5,5,0,0,61,66,3,14,7,0,62,66,
3,16,8,0,63,66,3,18,9,0,64,66,3,10,5,0,65,60,1,0,0,0,65,61,1,0,0,0,65,62,
1,0,0,0,65,63,1,0,0,0,65,64,1,0,0,0,66,67,1,0,0,0,67,65,1,0,0,0,67,68,1,
0,0,0,68,13,1,0,0,0,69,70,7,1,0,0,70,15,1,0,0,0,71,72,7,2,0,0,72,17,1,0,
0,0,73,74,7,3,0,0,74,19,1,0,0,0,11,22,25,28,32,35,39,43,49,58,65,67];


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
                             "FOR", "EACH" ];
    static ruleNames = [ "name", "eventHandler", "actionHandler", "entityName", 
                         "actionName", "each", "freeName", "event", "hook", 
                         "keywords" ];

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
	        this.state = 22;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 20;
	            this.actionHandler();
	            break;

	        case 2:
	            this.state = 21;
	            this.eventHandler();
	            break;

	        }
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.LINE_BREAK) {
	            this.state = 24;
	            this.match(HandlerNameParser.LINE_BREAK);
	        }

	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 27;
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
	        this.state = 30;
	        this.hook();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.EACH) {
	            this.state = 31;
	            this.each();
	        }

	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.CREATE) | (1 << HandlerNameParser.UPDATE) | (1 << HandlerNameParser.DELETE) | (1 << HandlerNameParser.READ) | (1 << HandlerNameParser.POST) | (1 << HandlerNameParser.GET) | (1 << HandlerNameParser.PATCH) | (1 << HandlerNameParser.NEW) | (1 << HandlerNameParser.EDIT) | (1 << HandlerNameParser.SAVE) | (1 << HandlerNameParser.CANCEL))) !== 0)) {
	            this.state = 34;
	            this.event();
	        }

	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.FOR) {
	            this.state = 37;
	            this.match(HandlerNameParser.FOR);
	            this.state = 38;
	            this.entityName();
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
	        this.state = 41;
	        this.hook();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.EACH) {
	            this.state = 42;
	            this.each();
	        }

	        this.state = 45;
	        _la = this._input.LA(1);
	        if(!(_la===HandlerNameParser.ACTION || _la===HandlerNameParser.FUNCTION)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 46;
	        this.actionName();
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.FOR) {
	            this.state = 47;
	            this.match(HandlerNameParser.FOR);
	            this.state = 48;
	            this.entityName();
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



	actionName() {
	    let localctx = new ActionNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HandlerNameParser.RULE_actionName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
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



	each() {
	    let localctx = new EachContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HandlerNameParser.RULE_each);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(HandlerNameParser.EACH);
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
	    this.enterRule(localctx, 12, HandlerNameParser.RULE_freeName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.UPPER_CHAR) {
	            this.state = 57;
	            this.match(HandlerNameParser.UPPER_CHAR);
	        }

	        this.state = 65; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 65;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 60;
	        		    this.match(HandlerNameParser.CHAR);
	        		    break;

	        		case 2:
	        		    this.state = 61;
	        		    this.event();
	        		    break;

	        		case 3:
	        		    this.state = 62;
	        		    this.hook();
	        		    break;

	        		case 4:
	        		    this.state = 63;
	        		    this.keywords();
	        		    break;

	        		case 5:
	        		    this.state = 64;
	        		    this.each();
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 67; 
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
	    this.enterRule(localctx, 14, HandlerNameParser.RULE_event);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
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
	    this.enterRule(localctx, 16, HandlerNameParser.RULE_hook);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
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



	keywords() {
	    let localctx = new KeywordsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HandlerNameParser.RULE_keywords);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.ACTION) | (1 << HandlerNameParser.FUNCTION) | (1 << HandlerNameParser.FOR) | (1 << HandlerNameParser.EACH))) !== 0))) {
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
HandlerNameParser.EACH = 23;

HandlerNameParser.RULE_name = 0;
HandlerNameParser.RULE_eventHandler = 1;
HandlerNameParser.RULE_actionHandler = 2;
HandlerNameParser.RULE_entityName = 3;
HandlerNameParser.RULE_actionName = 4;
HandlerNameParser.RULE_each = 5;
HandlerNameParser.RULE_freeName = 6;
HandlerNameParser.RULE_event = 7;
HandlerNameParser.RULE_hook = 8;
HandlerNameParser.RULE_keywords = 9;

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

	each() {
	    return this.getTypedRuleContext(EachContext,0);
	};

	event() {
	    return this.getTypedRuleContext(EventContext,0);
	};

	FOR() {
	    return this.getToken(HandlerNameParser.FOR, 0);
	};

	entityName() {
	    return this.getTypedRuleContext(EntityNameContext,0);
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

	each() {
	    return this.getTypedRuleContext(EachContext,0);
	};

	FOR() {
	    return this.getToken(HandlerNameParser.FOR, 0);
	};

	entityName() {
	    return this.getTypedRuleContext(EntityNameContext,0);
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



class EachContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_each;
    }

	EACH() {
	    return this.getToken(HandlerNameParser.EACH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterEach(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitEach(this);
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

	keywords = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeywordsContext);
	    } else {
	        return this.getTypedRuleContext(KeywordsContext,i);
	    }
	};

	each = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EachContext);
	    } else {
	        return this.getTypedRuleContext(EachContext,i);
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



class KeywordsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_keywords;
    }

	FOR() {
	    return this.getToken(HandlerNameParser.FOR, 0);
	};

	EACH() {
	    return this.getToken(HandlerNameParser.EACH, 0);
	};

	ACTION() {
	    return this.getToken(HandlerNameParser.ACTION, 0);
	};

	FUNCTION() {
	    return this.getToken(HandlerNameParser.FUNCTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterKeywords(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitKeywords(this);
		}
	}


}




HandlerNameParser.NameContext = NameContext; 
HandlerNameParser.EventHandlerContext = EventHandlerContext; 
HandlerNameParser.ActionHandlerContext = ActionHandlerContext; 
HandlerNameParser.EntityNameContext = EntityNameContext; 
HandlerNameParser.ActionNameContext = ActionNameContext; 
HandlerNameParser.EachContext = EachContext; 
HandlerNameParser.FreeNameContext = FreeNameContext; 
HandlerNameParser.EventContext = EventContext; 
HandlerNameParser.HookContext = HookContext; 
HandlerNameParser.KeywordsContext = KeywordsContext; 
