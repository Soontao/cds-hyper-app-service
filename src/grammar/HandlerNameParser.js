// Generated from HandlerName.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from '../../vendor/antlr4.js';
import HandlerNameListener from './HandlerNameListener';
const serializedATN = [4,1,15,53,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
3,0,11,8,0,4,0,13,8,0,11,0,12,0,14,1,0,1,0,3,0,19,8,0,4,0,21,8,0,11,0,12,
0,22,3,0,25,8,0,1,0,3,0,28,8,0,1,0,3,0,31,8,0,1,0,3,0,34,8,0,1,0,3,0,37,
8,0,1,1,3,1,40,8,1,1,1,1,1,1,1,4,1,45,8,1,11,1,12,1,46,1,2,1,2,1,3,1,3,1,
3,0,0,4,0,2,4,6,0,2,1,0,7,10,1,0,11,13,61,0,12,1,0,0,0,2,39,1,0,0,0,4,48,
1,0,0,0,6,50,1,0,0,0,8,10,3,6,3,0,9,11,5,4,0,0,10,9,1,0,0,0,10,11,1,0,0,
0,11,13,1,0,0,0,12,8,1,0,0,0,13,14,1,0,0,0,14,12,1,0,0,0,14,15,1,0,0,0,15,
24,1,0,0,0,16,18,3,4,2,0,17,19,5,4,0,0,18,17,1,0,0,0,18,19,1,0,0,0,19,21,
1,0,0,0,20,16,1,0,0,0,21,22,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,1,
0,0,0,24,20,1,0,0,0,24,25,1,0,0,0,25,27,1,0,0,0,26,28,5,4,0,0,27,26,1,0,
0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,31,3,2,1,0,30,29,1,0,0,0,30,31,1,0,0,
0,31,33,1,0,0,0,32,34,5,3,0,0,33,32,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,
35,37,5,0,0,1,36,35,1,0,0,0,36,37,1,0,0,0,37,1,1,0,0,0,38,40,5,5,0,0,39,
38,1,0,0,0,39,40,1,0,0,0,40,44,1,0,0,0,41,45,5,6,0,0,42,45,3,4,2,0,43,45,
3,6,3,0,44,41,1,0,0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,46,1,0,0,0,46,44,1,
0,0,0,46,47,1,0,0,0,47,3,1,0,0,0,48,49,7,0,0,0,49,5,1,0,0,0,50,51,7,1,0,
0,51,7,1,0,0,0,12,10,14,18,22,24,27,30,33,36,39,44,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class HandlerNameParser extends antlr4.Parser {

    static grammarFileName = "HandlerName.g4";
    static literalNames = [ null, null, null, null, "'_'" ];
    static symbolicNames = [ null, "Operator", "WS", "LINEB_REAK", "UNDER_SCORE", 
                             "UPPER_CHAR", "CHAR", "CREATE", "UPDATE", "DELETE", 
                             "READ", "BEFORE", "ON", "AFTER", "AND", "OR" ];
    static ruleNames = [ "name", "entity", "event", "hook" ];

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
	        this.state = 12; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 8;
	        		this.hook();
	        		this.state = 10;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        		if(la_===1) {
	        		    this.state = 9;
	        		    this.match(HandlerNameParser.UNDER_SCORE);

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 14; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 24;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 20; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 16;
	            		this.event();
	            		this.state = 18;
	            		this._errHandler.sync(this);
	            		var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            		if(la_===1) {
	            		    this.state = 17;
	            		    this.match(HandlerNameParser.UNDER_SCORE);

	            		}
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 22; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );

	        }
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.UNDER_SCORE) {
	            this.state = 26;
	            this.match(HandlerNameParser.UNDER_SCORE);
	        }

	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.UPPER_CHAR) | (1 << HandlerNameParser.CHAR) | (1 << HandlerNameParser.CREATE) | (1 << HandlerNameParser.UPDATE) | (1 << HandlerNameParser.DELETE) | (1 << HandlerNameParser.READ) | (1 << HandlerNameParser.BEFORE) | (1 << HandlerNameParser.ON) | (1 << HandlerNameParser.AFTER))) !== 0)) {
	            this.state = 29;
	            this.entity();
	        }

	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.LINEB_REAK) {
	            this.state = 32;
	            this.match(HandlerNameParser.LINEB_REAK);
	        }

	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 35;
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



	entity() {
	    let localctx = new EntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HandlerNameParser.RULE_entity);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===HandlerNameParser.UPPER_CHAR) {
	            this.state = 38;
	            this.match(HandlerNameParser.UPPER_CHAR);
	        }

	        this.state = 44; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 44;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case HandlerNameParser.CHAR:
	                this.state = 41;
	                this.match(HandlerNameParser.CHAR);
	                break;
	            case HandlerNameParser.CREATE:
	            case HandlerNameParser.UPDATE:
	            case HandlerNameParser.DELETE:
	            case HandlerNameParser.READ:
	                this.state = 42;
	                this.event();
	                break;
	            case HandlerNameParser.BEFORE:
	            case HandlerNameParser.ON:
	            case HandlerNameParser.AFTER:
	                this.state = 43;
	                this.hook();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 46; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.CHAR) | (1 << HandlerNameParser.CREATE) | (1 << HandlerNameParser.UPDATE) | (1 << HandlerNameParser.DELETE) | (1 << HandlerNameParser.READ) | (1 << HandlerNameParser.BEFORE) | (1 << HandlerNameParser.ON) | (1 << HandlerNameParser.AFTER))) !== 0));
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
	    this.enterRule(localctx, 4, HandlerNameParser.RULE_event);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << HandlerNameParser.CREATE) | (1 << HandlerNameParser.UPDATE) | (1 << HandlerNameParser.DELETE) | (1 << HandlerNameParser.READ))) !== 0))) {
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
	    this.enterRule(localctx, 6, HandlerNameParser.RULE_hook);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
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
HandlerNameParser.Operator = 1;
HandlerNameParser.WS = 2;
HandlerNameParser.LINEB_REAK = 3;
HandlerNameParser.UNDER_SCORE = 4;
HandlerNameParser.UPPER_CHAR = 5;
HandlerNameParser.CHAR = 6;
HandlerNameParser.CREATE = 7;
HandlerNameParser.UPDATE = 8;
HandlerNameParser.DELETE = 9;
HandlerNameParser.READ = 10;
HandlerNameParser.BEFORE = 11;
HandlerNameParser.ON = 12;
HandlerNameParser.AFTER = 13;
HandlerNameParser.AND = 14;
HandlerNameParser.OR = 15;

HandlerNameParser.RULE_name = 0;
HandlerNameParser.RULE_entity = 1;
HandlerNameParser.RULE_event = 2;
HandlerNameParser.RULE_hook = 3;

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

	UNDER_SCORE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HandlerNameParser.UNDER_SCORE);
	    } else {
	        return this.getToken(HandlerNameParser.UNDER_SCORE, i);
	    }
	};


	entity() {
	    return this.getTypedRuleContext(EntityContext,0);
	};

	LINEB_REAK() {
	    return this.getToken(HandlerNameParser.LINEB_REAK, 0);
	};

	EOF() {
	    return this.getToken(HandlerNameParser.EOF, 0);
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



class EntityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HandlerNameParser.RULE_entity;
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

	enterRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.enterEntity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HandlerNameListener ) {
	        listener.exitEntity(this);
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
HandlerNameParser.EntityContext = EntityContext; 
HandlerNameParser.EventContext = EventContext; 
HandlerNameParser.HookContext = HookContext; 
