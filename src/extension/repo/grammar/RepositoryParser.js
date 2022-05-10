// Generated from Repository.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from '../../base/vendor/antlr4.js';
import RepositoryListener from './RepositoryListener';
const serializedATN = [4,1,27,119,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,3,0,36,8,0,1,0,3,0,39,8,0,1,0,
3,0,42,8,0,1,1,1,1,3,1,46,8,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,4,
4,58,8,4,11,4,12,4,59,3,4,62,8,4,1,5,3,5,65,8,5,1,5,1,5,4,5,69,8,5,11,5,
12,5,70,3,5,73,8,5,1,5,3,5,76,8,5,1,6,1,6,1,6,1,6,1,6,3,6,83,8,6,3,6,85,
8,6,1,7,3,7,88,8,7,1,7,1,7,1,7,4,7,93,8,7,11,7,12,7,94,1,8,1,8,3,8,99,8,
8,1,9,1,9,3,9,103,8,9,1,10,1,10,3,10,107,8,10,1,11,1,11,1,12,1,12,1,13,1,
13,1,14,1,14,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,0,4,1,0,18,24,1,0,15,17,1,0,25,26,2,0,6,12,14,14,122,0,35,1,0,0,0,
2,43,1,0,0,0,4,49,1,0,0,0,6,52,1,0,0,0,8,55,1,0,0,0,10,64,1,0,0,0,12,84,
1,0,0,0,14,87,1,0,0,0,16,96,1,0,0,0,18,100,1,0,0,0,20,104,1,0,0,0,22,108,
1,0,0,0,24,110,1,0,0,0,26,112,1,0,0,0,28,114,1,0,0,0,30,116,1,0,0,0,32,36,
3,2,1,0,33,36,3,4,2,0,34,36,3,6,3,0,35,32,1,0,0,0,35,33,1,0,0,0,35,34,1,
0,0,0,36,38,1,0,0,0,37,39,5,2,0,0,38,37,1,0,0,0,38,39,1,0,0,0,39,41,1,0,
0,0,40,42,5,0,0,1,41,40,1,0,0,0,41,42,1,0,0,0,42,1,1,0,0,0,43,45,3,16,8,
0,44,46,3,12,6,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,3,8,4,0,
48,3,1,0,0,0,49,50,3,18,9,0,50,51,3,8,4,0,51,5,1,0,0,0,52,53,3,20,10,0,53,
54,3,8,4,0,54,7,1,0,0,0,55,61,3,10,5,0,56,58,3,10,5,0,57,56,1,0,0,0,58,59,
1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,57,1,0,0,0,61,62,1,
0,0,0,62,9,1,0,0,0,63,65,3,26,13,0,64,63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,
0,0,66,72,3,14,7,0,67,69,3,28,14,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,
0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,68,1,0,0,0,72,73,1,0,0,0,73,75,1,0,0,
0,74,76,3,24,12,0,75,74,1,0,0,0,75,76,1,0,0,0,76,11,1,0,0,0,77,85,5,22,0,
0,78,79,5,23,0,0,79,82,5,27,0,0,80,81,5,24,0,0,81,83,5,27,0,0,82,80,1,0,
0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,77,1,0,0,0,84,78,1,0,0,0,85,13,1,0,0,
0,86,88,5,4,0,0,87,86,1,0,0,0,87,88,1,0,0,0,88,92,1,0,0,0,89,93,5,5,0,0,
90,93,3,22,11,0,91,93,3,24,12,0,92,89,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,
0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,15,1,0,0,0,96,98,5,18,0,0,
97,99,5,19,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,17,1,0,0,0,100,102,5,20,0,
0,101,103,5,19,0,0,102,101,1,0,0,0,102,103,1,0,0,0,103,19,1,0,0,0,104,106,
5,21,0,0,105,107,5,19,0,0,106,105,1,0,0,0,106,107,1,0,0,0,107,21,1,0,0,0,
108,109,7,0,0,0,109,23,1,0,0,0,110,111,7,1,0,0,111,25,1,0,0,0,112,113,7,
2,0,0,113,27,1,0,0,0,114,115,7,3,0,0,115,29,1,0,0,0,116,117,5,27,0,0,117,
31,1,0,0,0,18,35,38,41,45,59,61,64,70,72,75,82,84,87,92,94,98,102,106];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RepositoryParser extends antlr4.Parser {

    static grammarFileName = "Repository.g4";
    static literalNames = [ null, null, null, "'_'" ];
    static symbolicNames = [ null, "WS", "LINE_BREAK", "UNDER_SCORE", "UPPER_CHAR", 
                             "CHAR", "IS", "NOT", "EQUALS", "LIKE", "GREATER", 
                             "LESS", "BETWEEN", "THAN", "IN", "NULL", "TRUE", 
                             "FALSE", "FIND", "BY", "UPDATE", "DELETE", 
                             "ONE", "TOP", "K_SKIP", "AND", "OR", "NUMBER" ];
    static ruleNames = [ "query", "findQuery", "updateQuery", "deleteQuery", 
                         "fieldExprList", "fieldExpr", "limitExpr", "identifier", 
                         "find", "update", "delete", "keywords", "literals", 
                         "logic", "operators", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RepositoryParser.ruleNames;
        this.literalNames = RepositoryParser.literalNames;
        this.symbolicNames = RepositoryParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RepositoryParser.RULE_query);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RepositoryParser.FIND:
	            this.state = 32;
	            this.findQuery();
	            break;
	        case RepositoryParser.UPDATE:
	            this.state = 33;
	            this.updateQuery();
	            break;
	        case RepositoryParser.DELETE:
	            this.state = 34;
	            this.deleteQuery();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.LINE_BREAK) {
	            this.state = 37;
	            this.match(RepositoryParser.LINE_BREAK);
	        }

	        this.state = 41;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 40;
	            this.match(RepositoryParser.EOF);

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



	findQuery() {
	    let localctx = new FindQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RepositoryParser.RULE_findQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.find();
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 44;
	            this.limitExpr();

	        }
	        this.state = 47;
	        this.fieldExprList();
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



	updateQuery() {
	    let localctx = new UpdateQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RepositoryParser.RULE_updateQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.update();
	        this.state = 50;
	        this.fieldExprList();
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



	deleteQuery() {
	    let localctx = new DeleteQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RepositoryParser.RULE_deleteQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.delete_();
	        this.state = 53;
	        this.fieldExprList();
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



	fieldExprList() {
	    let localctx = new FieldExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RepositoryParser.RULE_fieldExprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.fieldExpr();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.UPPER_CHAR) | (1 << RepositoryParser.CHAR) | (1 << RepositoryParser.NULL) | (1 << RepositoryParser.TRUE) | (1 << RepositoryParser.FALSE) | (1 << RepositoryParser.FIND) | (1 << RepositoryParser.BY) | (1 << RepositoryParser.UPDATE) | (1 << RepositoryParser.DELETE) | (1 << RepositoryParser.ONE) | (1 << RepositoryParser.TOP) | (1 << RepositoryParser.K_SKIP) | (1 << RepositoryParser.AND) | (1 << RepositoryParser.OR))) !== 0)) {
	            this.state = 57; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 56;
	                this.fieldExpr();
	                this.state = 59; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.UPPER_CHAR) | (1 << RepositoryParser.CHAR) | (1 << RepositoryParser.NULL) | (1 << RepositoryParser.TRUE) | (1 << RepositoryParser.FALSE) | (1 << RepositoryParser.FIND) | (1 << RepositoryParser.BY) | (1 << RepositoryParser.UPDATE) | (1 << RepositoryParser.DELETE) | (1 << RepositoryParser.ONE) | (1 << RepositoryParser.TOP) | (1 << RepositoryParser.K_SKIP) | (1 << RepositoryParser.AND) | (1 << RepositoryParser.OR))) !== 0));
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



	fieldExpr() {
	    let localctx = new FieldExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RepositoryParser.RULE_fieldExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.AND || _la===RepositoryParser.OR) {
	            this.state = 63;
	            this.logic();
	        }

	        this.state = 66;
	        this.identifier();
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.IS) | (1 << RepositoryParser.NOT) | (1 << RepositoryParser.EQUALS) | (1 << RepositoryParser.LIKE) | (1 << RepositoryParser.GREATER) | (1 << RepositoryParser.LESS) | (1 << RepositoryParser.BETWEEN) | (1 << RepositoryParser.IN))) !== 0)) {
	            this.state = 68; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 67;
	                this.operators();
	                this.state = 70; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.IS) | (1 << RepositoryParser.NOT) | (1 << RepositoryParser.EQUALS) | (1 << RepositoryParser.LIKE) | (1 << RepositoryParser.GREATER) | (1 << RepositoryParser.LESS) | (1 << RepositoryParser.BETWEEN) | (1 << RepositoryParser.IN))) !== 0));
	        }

	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 74;
	            this.literals();

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



	limitExpr() {
	    let localctx = new LimitExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RepositoryParser.RULE_limitExpr);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RepositoryParser.ONE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(RepositoryParser.ONE);
	            break;
	        case RepositoryParser.TOP:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.match(RepositoryParser.TOP);
	            this.state = 79;
	            this.match(RepositoryParser.NUMBER);
	            this.state = 82;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            if(la_===1) {
	                this.state = 80;
	                this.match(RepositoryParser.K_SKIP);
	                this.state = 81;
	                this.match(RepositoryParser.NUMBER);

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RepositoryParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.UPPER_CHAR) {
	            this.state = 86;
	            this.match(RepositoryParser.UPPER_CHAR);
	        }

	        this.state = 92; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 92;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case RepositoryParser.CHAR:
	        		    this.state = 89;
	        		    this.match(RepositoryParser.CHAR);
	        		    break;
	        		case RepositoryParser.FIND:
	        		case RepositoryParser.BY:
	        		case RepositoryParser.UPDATE:
	        		case RepositoryParser.DELETE:
	        		case RepositoryParser.ONE:
	        		case RepositoryParser.TOP:
	        		case RepositoryParser.K_SKIP:
	        		    this.state = 90;
	        		    this.keywords();
	        		    break;
	        		case RepositoryParser.NULL:
	        		case RepositoryParser.TRUE:
	        		case RepositoryParser.FALSE:
	        		    this.state = 91;
	        		    this.literals();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 94; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
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



	find() {
	    let localctx = new FindContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RepositoryParser.RULE_find);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(RepositoryParser.FIND);
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 97;
	            this.match(RepositoryParser.BY);

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



	update() {
	    let localctx = new UpdateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RepositoryParser.RULE_update);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(RepositoryParser.UPDATE);
	        this.state = 102;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 101;
	            this.match(RepositoryParser.BY);

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



	delete_() {
	    let localctx = new DeleteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RepositoryParser.RULE_delete);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(RepositoryParser.DELETE);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 105;
	            this.match(RepositoryParser.BY);

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
	    this.enterRule(localctx, 22, RepositoryParser.RULE_keywords);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.FIND) | (1 << RepositoryParser.BY) | (1 << RepositoryParser.UPDATE) | (1 << RepositoryParser.DELETE) | (1 << RepositoryParser.ONE) | (1 << RepositoryParser.TOP) | (1 << RepositoryParser.K_SKIP))) !== 0))) {
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



	literals() {
	    let localctx = new LiteralsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, RepositoryParser.RULE_literals);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.NULL) | (1 << RepositoryParser.TRUE) | (1 << RepositoryParser.FALSE))) !== 0))) {
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



	logic() {
	    let localctx = new LogicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, RepositoryParser.RULE_logic);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!(_la===RepositoryParser.AND || _la===RepositoryParser.OR)) {
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



	operators() {
	    let localctx = new OperatorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, RepositoryParser.RULE_operators);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.IS) | (1 << RepositoryParser.NOT) | (1 << RepositoryParser.EQUALS) | (1 << RepositoryParser.LIKE) | (1 << RepositoryParser.GREATER) | (1 << RepositoryParser.LESS) | (1 << RepositoryParser.BETWEEN) | (1 << RepositoryParser.IN))) !== 0))) {
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, RepositoryParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(RepositoryParser.NUMBER);
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

RepositoryParser.EOF = antlr4.Token.EOF;
RepositoryParser.WS = 1;
RepositoryParser.LINE_BREAK = 2;
RepositoryParser.UNDER_SCORE = 3;
RepositoryParser.UPPER_CHAR = 4;
RepositoryParser.CHAR = 5;
RepositoryParser.IS = 6;
RepositoryParser.NOT = 7;
RepositoryParser.EQUALS = 8;
RepositoryParser.LIKE = 9;
RepositoryParser.GREATER = 10;
RepositoryParser.LESS = 11;
RepositoryParser.BETWEEN = 12;
RepositoryParser.THAN = 13;
RepositoryParser.IN = 14;
RepositoryParser.NULL = 15;
RepositoryParser.TRUE = 16;
RepositoryParser.FALSE = 17;
RepositoryParser.FIND = 18;
RepositoryParser.BY = 19;
RepositoryParser.UPDATE = 20;
RepositoryParser.DELETE = 21;
RepositoryParser.ONE = 22;
RepositoryParser.TOP = 23;
RepositoryParser.K_SKIP = 24;
RepositoryParser.AND = 25;
RepositoryParser.OR = 26;
RepositoryParser.NUMBER = 27;

RepositoryParser.RULE_query = 0;
RepositoryParser.RULE_findQuery = 1;
RepositoryParser.RULE_updateQuery = 2;
RepositoryParser.RULE_deleteQuery = 3;
RepositoryParser.RULE_fieldExprList = 4;
RepositoryParser.RULE_fieldExpr = 5;
RepositoryParser.RULE_limitExpr = 6;
RepositoryParser.RULE_identifier = 7;
RepositoryParser.RULE_find = 8;
RepositoryParser.RULE_update = 9;
RepositoryParser.RULE_delete = 10;
RepositoryParser.RULE_keywords = 11;
RepositoryParser.RULE_literals = 12;
RepositoryParser.RULE_logic = 13;
RepositoryParser.RULE_operators = 14;
RepositoryParser.RULE_number = 15;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_query;
    }

	findQuery() {
	    return this.getTypedRuleContext(FindQueryContext,0);
	};

	updateQuery() {
	    return this.getTypedRuleContext(UpdateQueryContext,0);
	};

	deleteQuery() {
	    return this.getTypedRuleContext(DeleteQueryContext,0);
	};

	LINE_BREAK() {
	    return this.getToken(RepositoryParser.LINE_BREAK, 0);
	};

	EOF() {
	    return this.getToken(RepositoryParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitQuery(this);
		}
	}


}



class FindQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_findQuery;
    }

	find() {
	    return this.getTypedRuleContext(FindContext,0);
	};

	fieldExprList() {
	    return this.getTypedRuleContext(FieldExprListContext,0);
	};

	limitExpr() {
	    return this.getTypedRuleContext(LimitExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterFindQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitFindQuery(this);
		}
	}


}



class UpdateQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_updateQuery;
    }

	update() {
	    return this.getTypedRuleContext(UpdateContext,0);
	};

	fieldExprList() {
	    return this.getTypedRuleContext(FieldExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterUpdateQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitUpdateQuery(this);
		}
	}


}



class DeleteQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_deleteQuery;
    }

	delete_() {
	    return this.getTypedRuleContext(DeleteContext,0);
	};

	fieldExprList() {
	    return this.getTypedRuleContext(FieldExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterDeleteQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitDeleteQuery(this);
		}
	}


}



class FieldExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_fieldExprList;
    }

	fieldExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldExprContext);
	    } else {
	        return this.getTypedRuleContext(FieldExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterFieldExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitFieldExprList(this);
		}
	}


}



class FieldExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_fieldExpr;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
	};

	literals() {
	    return this.getTypedRuleContext(LiteralsContext,0);
	};

	operators = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperatorsContext);
	    } else {
	        return this.getTypedRuleContext(OperatorsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterFieldExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitFieldExpr(this);
		}
	}


}



class LimitExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_limitExpr;
    }

	ONE() {
	    return this.getToken(RepositoryParser.ONE, 0);
	};

	TOP() {
	    return this.getToken(RepositoryParser.TOP, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RepositoryParser.NUMBER);
	    } else {
	        return this.getToken(RepositoryParser.NUMBER, i);
	    }
	};


	K_SKIP() {
	    return this.getToken(RepositoryParser.K_SKIP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterLimitExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitLimitExpr(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_identifier;
    }

	UPPER_CHAR() {
	    return this.getToken(RepositoryParser.UPPER_CHAR, 0);
	};

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RepositoryParser.CHAR);
	    } else {
	        return this.getToken(RepositoryParser.CHAR, i);
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

	literals = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralsContext);
	    } else {
	        return this.getTypedRuleContext(LiteralsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class FindContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_find;
    }

	FIND() {
	    return this.getToken(RepositoryParser.FIND, 0);
	};

	BY() {
	    return this.getToken(RepositoryParser.BY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterFind(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitFind(this);
		}
	}


}



class UpdateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_update;
    }

	UPDATE() {
	    return this.getToken(RepositoryParser.UPDATE, 0);
	};

	BY() {
	    return this.getToken(RepositoryParser.BY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterUpdate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitUpdate(this);
		}
	}


}



class DeleteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_delete;
    }

	DELETE() {
	    return this.getToken(RepositoryParser.DELETE, 0);
	};

	BY() {
	    return this.getToken(RepositoryParser.BY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterDelete(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitDelete(this);
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
        this.ruleIndex = RepositoryParser.RULE_keywords;
    }

	FIND() {
	    return this.getToken(RepositoryParser.FIND, 0);
	};

	DELETE() {
	    return this.getToken(RepositoryParser.DELETE, 0);
	};

	UPDATE() {
	    return this.getToken(RepositoryParser.UPDATE, 0);
	};

	BY() {
	    return this.getToken(RepositoryParser.BY, 0);
	};

	ONE() {
	    return this.getToken(RepositoryParser.ONE, 0);
	};

	TOP() {
	    return this.getToken(RepositoryParser.TOP, 0);
	};

	K_SKIP() {
	    return this.getToken(RepositoryParser.K_SKIP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterKeywords(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitKeywords(this);
		}
	}


}



class LiteralsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_literals;
    }

	NULL() {
	    return this.getToken(RepositoryParser.NULL, 0);
	};

	TRUE() {
	    return this.getToken(RepositoryParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(RepositoryParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterLiterals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitLiterals(this);
		}
	}


}



class LogicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_logic;
    }

	AND() {
	    return this.getToken(RepositoryParser.AND, 0);
	};

	OR() {
	    return this.getToken(RepositoryParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterLogic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitLogic(this);
		}
	}


}



class OperatorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_operators;
    }

	IS() {
	    return this.getToken(RepositoryParser.IS, 0);
	};

	NOT() {
	    return this.getToken(RepositoryParser.NOT, 0);
	};

	EQUALS() {
	    return this.getToken(RepositoryParser.EQUALS, 0);
	};

	GREATER() {
	    return this.getToken(RepositoryParser.GREATER, 0);
	};

	LESS() {
	    return this.getToken(RepositoryParser.LESS, 0);
	};

	BETWEEN() {
	    return this.getToken(RepositoryParser.BETWEEN, 0);
	};

	IN() {
	    return this.getToken(RepositoryParser.IN, 0);
	};

	LIKE() {
	    return this.getToken(RepositoryParser.LIKE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterOperators(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitOperators(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(RepositoryParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitNumber(this);
		}
	}


}




RepositoryParser.QueryContext = QueryContext; 
RepositoryParser.FindQueryContext = FindQueryContext; 
RepositoryParser.UpdateQueryContext = UpdateQueryContext; 
RepositoryParser.DeleteQueryContext = DeleteQueryContext; 
RepositoryParser.FieldExprListContext = FieldExprListContext; 
RepositoryParser.FieldExprContext = FieldExprContext; 
RepositoryParser.LimitExprContext = LimitExprContext; 
RepositoryParser.IdentifierContext = IdentifierContext; 
RepositoryParser.FindContext = FindContext; 
RepositoryParser.UpdateContext = UpdateContext; 
RepositoryParser.DeleteContext = DeleteContext; 
RepositoryParser.KeywordsContext = KeywordsContext; 
RepositoryParser.LiteralsContext = LiteralsContext; 
RepositoryParser.LogicContext = LogicContext; 
RepositoryParser.OperatorsContext = OperatorsContext; 
RepositoryParser.NumberContext = NumberContext; 
