// Generated from Repository.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from '../../../base/vendor/antlr4.js';
import RepositoryListener from './RepositoryListener';
const serializedATN = [4,1,28,152,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,
1,0,3,0,43,8,0,1,0,3,0,46,8,0,1,0,3,0,49,8,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,
1,3,1,3,1,4,1,4,1,4,1,5,1,5,4,5,65,8,5,11,5,12,5,66,3,5,69,8,5,1,6,3,6,72,
8,6,1,6,1,6,3,6,76,8,6,1,6,3,6,79,8,6,1,7,3,7,82,8,7,1,7,1,7,1,7,4,7,87,
8,7,11,7,12,7,88,1,8,1,8,3,8,93,8,8,1,8,3,8,96,8,8,1,9,1,9,3,9,100,8,9,1,
10,1,10,1,10,3,10,105,8,10,3,10,107,8,10,1,11,1,11,1,11,1,12,1,12,1,12,1,
13,1,13,3,13,117,8,13,1,14,1,14,3,14,121,8,14,1,15,1,15,1,16,1,16,1,17,1,
17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,150,8,18,1,18,0,0,19,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,0,3,1,0,19,26,1,0,16,18,1,0,27,28,
166,0,42,1,0,0,0,2,50,1,0,0,0,4,53,1,0,0,0,6,56,1,0,0,0,8,59,1,0,0,0,10,
62,1,0,0,0,12,71,1,0,0,0,14,81,1,0,0,0,16,90,1,0,0,0,18,97,1,0,0,0,20,106,
1,0,0,0,22,108,1,0,0,0,24,111,1,0,0,0,26,114,1,0,0,0,28,118,1,0,0,0,30,122,
1,0,0,0,32,124,1,0,0,0,34,126,1,0,0,0,36,149,1,0,0,0,38,43,3,2,1,0,39,43,
3,4,2,0,40,43,3,6,3,0,41,43,3,8,4,0,42,38,1,0,0,0,42,39,1,0,0,0,42,40,1,
0,0,0,42,41,1,0,0,0,43,45,1,0,0,0,44,46,5,2,0,0,45,44,1,0,0,0,45,46,1,0,
0,0,46,48,1,0,0,0,47,49,5,0,0,1,48,47,1,0,0,0,48,49,1,0,0,0,49,1,1,0,0,0,
50,51,3,16,8,0,51,52,3,10,5,0,52,3,1,0,0,0,53,54,3,18,9,0,54,55,3,10,5,0,
55,5,1,0,0,0,56,57,3,26,13,0,57,58,3,10,5,0,58,7,1,0,0,0,59,60,3,28,14,0,
60,61,3,10,5,0,61,9,1,0,0,0,62,68,3,12,6,0,63,65,3,12,6,0,64,63,1,0,0,0,
65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,64,1,0,0,0,68,
69,1,0,0,0,69,11,1,0,0,0,70,72,3,34,17,0,71,70,1,0,0,0,71,72,1,0,0,0,72,
73,1,0,0,0,73,75,3,14,7,0,74,76,3,36,18,0,75,74,1,0,0,0,75,76,1,0,0,0,76,
78,1,0,0,0,77,79,3,32,16,0,78,77,1,0,0,0,78,79,1,0,0,0,79,13,1,0,0,0,80,
82,5,4,0,0,81,80,1,0,0,0,81,82,1,0,0,0,82,86,1,0,0,0,83,87,5,6,0,0,84,87,
3,30,15,0,85,87,3,32,16,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,88,
1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,15,1,0,0,0,90,92,5,19,0,0,91,93,3,
20,10,0,92,91,1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,96,5,21,0,0,95,94,1,
0,0,0,95,96,1,0,0,0,96,17,1,0,0,0,97,99,5,20,0,0,98,100,5,21,0,0,99,98,1,
0,0,0,99,100,1,0,0,0,100,19,1,0,0,0,101,107,5,24,0,0,102,104,3,22,11,0,103,
105,3,24,12,0,104,103,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,101,1,
0,0,0,106,102,1,0,0,0,107,21,1,0,0,0,108,109,5,25,0,0,109,110,5,5,0,0,110,
23,1,0,0,0,111,112,5,26,0,0,112,113,5,5,0,0,113,25,1,0,0,0,114,116,5,22,
0,0,115,117,5,21,0,0,116,115,1,0,0,0,116,117,1,0,0,0,117,27,1,0,0,0,118,
120,5,23,0,0,119,121,5,21,0,0,120,119,1,0,0,0,120,121,1,0,0,0,121,29,1,0,
0,0,122,123,7,0,0,0,123,31,1,0,0,0,124,125,7,1,0,0,125,33,1,0,0,0,126,127,
7,2,0,0,127,35,1,0,0,0,128,150,5,7,0,0,129,130,5,7,0,0,130,150,5,8,0,0,131,
150,5,9,0,0,132,133,5,8,0,0,133,150,5,9,0,0,134,150,5,11,0,0,135,136,5,11,
0,0,136,150,5,14,0,0,137,150,5,12,0,0,138,139,5,12,0,0,139,150,5,14,0,0,
140,150,5,13,0,0,141,142,5,8,0,0,142,150,5,13,0,0,143,150,5,15,0,0,144,145,
5,8,0,0,145,150,5,15,0,0,146,150,5,10,0,0,147,148,5,8,0,0,148,150,5,10,0,
0,149,128,1,0,0,0,149,129,1,0,0,0,149,131,1,0,0,0,149,132,1,0,0,0,149,134,
1,0,0,0,149,135,1,0,0,0,149,137,1,0,0,0,149,138,1,0,0,0,149,140,1,0,0,0,
149,141,1,0,0,0,149,143,1,0,0,0,149,144,1,0,0,0,149,146,1,0,0,0,149,147,
1,0,0,0,150,37,1,0,0,0,19,42,45,48,66,68,71,75,78,81,86,88,92,95,99,104,
106,116,120,149];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RepositoryParser extends antlr4.Parser {

    static grammarFileName = "Repository.g4";
    static literalNames = [ null, null, null, "'_'" ];
    static symbolicNames = [ null, "WS", "LINE_BREAK", "UNDER_SCORE", "UPPER_CHAR", 
                             "NUMBER", "CHAR", "IS", "NOT", "EQUALS", "LIKE", 
                             "GREATER", "LESS", "BETWEEN", "THAN", "IN", 
                             "NULL", "TRUE", "FALSE", "FIND", "COUNT", "BY", 
                             "UPDATE", "DELETE", "ONE", "TOP", "K_SKIP", 
                             "AND", "OR" ];
    static ruleNames = [ "query", "findQuery", "countQuery", "updateQuery", 
                         "deleteQuery", "fieldExprList", "fieldExpr", "identifier", 
                         "find", "count", "limitExpr", "topExpr", "skipExpr", 
                         "update", "delete", "keywords", "literal", "logic", 
                         "operators" ];

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
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RepositoryParser.FIND:
	            this.state = 38;
	            this.findQuery();
	            break;
	        case RepositoryParser.COUNT:
	            this.state = 39;
	            this.countQuery();
	            break;
	        case RepositoryParser.UPDATE:
	            this.state = 40;
	            this.updateQuery();
	            break;
	        case RepositoryParser.DELETE:
	            this.state = 41;
	            this.deleteQuery();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.LINE_BREAK) {
	            this.state = 44;
	            this.match(RepositoryParser.LINE_BREAK);
	        }

	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 47;
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
	        this.state = 50;
	        this.find();
	        this.state = 51;
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



	countQuery() {
	    let localctx = new CountQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RepositoryParser.RULE_countQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.count();
	        this.state = 54;
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
	    this.enterRule(localctx, 6, RepositoryParser.RULE_updateQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.update();
	        this.state = 57;
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
	    this.enterRule(localctx, 8, RepositoryParser.RULE_deleteQuery);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.delete_();
	        this.state = 60;
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
	    this.enterRule(localctx, 10, RepositoryParser.RULE_fieldExprList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.fieldExpr();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.UPPER_CHAR) | (1 << RepositoryParser.CHAR) | (1 << RepositoryParser.NULL) | (1 << RepositoryParser.TRUE) | (1 << RepositoryParser.FALSE) | (1 << RepositoryParser.FIND) | (1 << RepositoryParser.COUNT) | (1 << RepositoryParser.BY) | (1 << RepositoryParser.UPDATE) | (1 << RepositoryParser.DELETE) | (1 << RepositoryParser.ONE) | (1 << RepositoryParser.TOP) | (1 << RepositoryParser.K_SKIP) | (1 << RepositoryParser.AND) | (1 << RepositoryParser.OR))) !== 0)) {
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 63;
	                this.fieldExpr();
	                this.state = 66; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.UPPER_CHAR) | (1 << RepositoryParser.CHAR) | (1 << RepositoryParser.NULL) | (1 << RepositoryParser.TRUE) | (1 << RepositoryParser.FALSE) | (1 << RepositoryParser.FIND) | (1 << RepositoryParser.COUNT) | (1 << RepositoryParser.BY) | (1 << RepositoryParser.UPDATE) | (1 << RepositoryParser.DELETE) | (1 << RepositoryParser.ONE) | (1 << RepositoryParser.TOP) | (1 << RepositoryParser.K_SKIP) | (1 << RepositoryParser.AND) | (1 << RepositoryParser.OR))) !== 0));
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
	    this.enterRule(localctx, 12, RepositoryParser.RULE_fieldExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.AND || _la===RepositoryParser.OR) {
	            this.state = 70;
	            this.logic();
	        }

	        this.state = 73;
	        this.identifier();
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.IS) | (1 << RepositoryParser.NOT) | (1 << RepositoryParser.EQUALS) | (1 << RepositoryParser.LIKE) | (1 << RepositoryParser.GREATER) | (1 << RepositoryParser.LESS) | (1 << RepositoryParser.BETWEEN) | (1 << RepositoryParser.IN))) !== 0)) {
	            this.state = 74;
	            this.operators();
	        }

	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 77;
	            this.literal();

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
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.UPPER_CHAR) {
	            this.state = 80;
	            this.match(RepositoryParser.UPPER_CHAR);
	        }

	        this.state = 86; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 86;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case RepositoryParser.CHAR:
	        		    this.state = 83;
	        		    this.match(RepositoryParser.CHAR);
	        		    break;
	        		case RepositoryParser.FIND:
	        		case RepositoryParser.COUNT:
	        		case RepositoryParser.BY:
	        		case RepositoryParser.UPDATE:
	        		case RepositoryParser.DELETE:
	        		case RepositoryParser.ONE:
	        		case RepositoryParser.TOP:
	        		case RepositoryParser.K_SKIP:
	        		    this.state = 84;
	        		    this.keywords();
	        		    break;
	        		case RepositoryParser.NULL:
	        		case RepositoryParser.TRUE:
	        		case RepositoryParser.FALSE:
	        		    this.state = 85;
	        		    this.literal();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 88; 
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



	find() {
	    let localctx = new FindContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RepositoryParser.RULE_find);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(RepositoryParser.FIND);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 91;
	            this.limitExpr();

	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 94;
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



	count() {
	    let localctx = new CountContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RepositoryParser.RULE_count);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(RepositoryParser.COUNT);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 98;
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



	limitExpr() {
	    let localctx = new LimitExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RepositoryParser.RULE_limitExpr);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RepositoryParser.ONE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.match(RepositoryParser.ONE);
	            break;
	        case RepositoryParser.TOP:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.topExpr();
	            this.state = 104;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            if(la_===1) {
	                this.state = 103;
	                this.skipExpr();

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



	topExpr() {
	    let localctx = new TopExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RepositoryParser.RULE_topExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(RepositoryParser.TOP);
	        this.state = 109;
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



	skipExpr() {
	    let localctx = new SkipExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, RepositoryParser.RULE_skipExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(RepositoryParser.K_SKIP);
	        this.state = 112;
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



	update() {
	    let localctx = new UpdateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, RepositoryParser.RULE_update);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(RepositoryParser.UPDATE);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 115;
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
	    this.enterRule(localctx, 28, RepositoryParser.RULE_delete);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(RepositoryParser.DELETE);
	        this.state = 120;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 119;
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
	    this.enterRule(localctx, 30, RepositoryParser.RULE_keywords);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.FIND) | (1 << RepositoryParser.COUNT) | (1 << RepositoryParser.BY) | (1 << RepositoryParser.UPDATE) | (1 << RepositoryParser.DELETE) | (1 << RepositoryParser.ONE) | (1 << RepositoryParser.TOP) | (1 << RepositoryParser.K_SKIP))) !== 0))) {
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, RepositoryParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
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
	    this.enterRule(localctx, 34, RepositoryParser.RULE_logic);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
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
	    this.enterRule(localctx, 36, RepositoryParser.RULE_operators);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.match(RepositoryParser.IS);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.match(RepositoryParser.IS);
	            this.state = 130;
	            this.match(RepositoryParser.NOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.match(RepositoryParser.EQUALS);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 132;
	            this.match(RepositoryParser.NOT);
	            this.state = 133;
	            this.match(RepositoryParser.EQUALS);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 134;
	            this.match(RepositoryParser.GREATER);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 135;
	            this.match(RepositoryParser.GREATER);
	            this.state = 136;
	            this.match(RepositoryParser.THAN);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 137;
	            this.match(RepositoryParser.LESS);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 138;
	            this.match(RepositoryParser.LESS);
	            this.state = 139;
	            this.match(RepositoryParser.THAN);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 140;
	            this.match(RepositoryParser.BETWEEN);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 141;
	            this.match(RepositoryParser.NOT);
	            this.state = 142;
	            this.match(RepositoryParser.BETWEEN);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 143;
	            this.match(RepositoryParser.IN);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 144;
	            this.match(RepositoryParser.NOT);
	            this.state = 145;
	            this.match(RepositoryParser.IN);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 146;
	            this.match(RepositoryParser.LIKE);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 147;
	            this.match(RepositoryParser.NOT);
	            this.state = 148;
	            this.match(RepositoryParser.LIKE);
	            break;

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

RepositoryParser.EOF = antlr4.Token.EOF;
RepositoryParser.WS = 1;
RepositoryParser.LINE_BREAK = 2;
RepositoryParser.UNDER_SCORE = 3;
RepositoryParser.UPPER_CHAR = 4;
RepositoryParser.NUMBER = 5;
RepositoryParser.CHAR = 6;
RepositoryParser.IS = 7;
RepositoryParser.NOT = 8;
RepositoryParser.EQUALS = 9;
RepositoryParser.LIKE = 10;
RepositoryParser.GREATER = 11;
RepositoryParser.LESS = 12;
RepositoryParser.BETWEEN = 13;
RepositoryParser.THAN = 14;
RepositoryParser.IN = 15;
RepositoryParser.NULL = 16;
RepositoryParser.TRUE = 17;
RepositoryParser.FALSE = 18;
RepositoryParser.FIND = 19;
RepositoryParser.COUNT = 20;
RepositoryParser.BY = 21;
RepositoryParser.UPDATE = 22;
RepositoryParser.DELETE = 23;
RepositoryParser.ONE = 24;
RepositoryParser.TOP = 25;
RepositoryParser.K_SKIP = 26;
RepositoryParser.AND = 27;
RepositoryParser.OR = 28;

RepositoryParser.RULE_query = 0;
RepositoryParser.RULE_findQuery = 1;
RepositoryParser.RULE_countQuery = 2;
RepositoryParser.RULE_updateQuery = 3;
RepositoryParser.RULE_deleteQuery = 4;
RepositoryParser.RULE_fieldExprList = 5;
RepositoryParser.RULE_fieldExpr = 6;
RepositoryParser.RULE_identifier = 7;
RepositoryParser.RULE_find = 8;
RepositoryParser.RULE_count = 9;
RepositoryParser.RULE_limitExpr = 10;
RepositoryParser.RULE_topExpr = 11;
RepositoryParser.RULE_skipExpr = 12;
RepositoryParser.RULE_update = 13;
RepositoryParser.RULE_delete = 14;
RepositoryParser.RULE_keywords = 15;
RepositoryParser.RULE_literal = 16;
RepositoryParser.RULE_logic = 17;
RepositoryParser.RULE_operators = 18;

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

	countQuery() {
	    return this.getTypedRuleContext(CountQueryContext,0);
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



class CountQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_countQuery;
    }

	count() {
	    return this.getTypedRuleContext(CountContext,0);
	};

	fieldExprList() {
	    return this.getTypedRuleContext(FieldExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterCountQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitCountQuery(this);
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

	operators() {
	    return this.getTypedRuleContext(OperatorsContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
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

	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
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

	limitExpr() {
	    return this.getTypedRuleContext(LimitExprContext,0);
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



class CountContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_count;
    }

	COUNT() {
	    return this.getToken(RepositoryParser.COUNT, 0);
	};

	BY() {
	    return this.getToken(RepositoryParser.BY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterCount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitCount(this);
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

	topExpr() {
	    return this.getTypedRuleContext(TopExprContext,0);
	};

	skipExpr() {
	    return this.getTypedRuleContext(SkipExprContext,0);
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



class TopExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_topExpr;
    }

	TOP() {
	    return this.getToken(RepositoryParser.TOP, 0);
	};

	NUMBER() {
	    return this.getToken(RepositoryParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterTopExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitTopExpr(this);
		}
	}


}



class SkipExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_skipExpr;
    }

	K_SKIP() {
	    return this.getToken(RepositoryParser.K_SKIP, 0);
	};

	NUMBER() {
	    return this.getToken(RepositoryParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.enterSkipExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitSkipExpr(this);
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

	COUNT() {
	    return this.getToken(RepositoryParser.COUNT, 0);
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



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RepositoryParser.RULE_literal;
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
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RepositoryListener ) {
	        listener.exitLiteral(this);
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

	THAN() {
	    return this.getToken(RepositoryParser.THAN, 0);
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




RepositoryParser.QueryContext = QueryContext; 
RepositoryParser.FindQueryContext = FindQueryContext; 
RepositoryParser.CountQueryContext = CountQueryContext; 
RepositoryParser.UpdateQueryContext = UpdateQueryContext; 
RepositoryParser.DeleteQueryContext = DeleteQueryContext; 
RepositoryParser.FieldExprListContext = FieldExprListContext; 
RepositoryParser.FieldExprContext = FieldExprContext; 
RepositoryParser.IdentifierContext = IdentifierContext; 
RepositoryParser.FindContext = FindContext; 
RepositoryParser.CountContext = CountContext; 
RepositoryParser.LimitExprContext = LimitExprContext; 
RepositoryParser.TopExprContext = TopExprContext; 
RepositoryParser.SkipExprContext = SkipExprContext; 
RepositoryParser.UpdateContext = UpdateContext; 
RepositoryParser.DeleteContext = DeleteContext; 
RepositoryParser.KeywordsContext = KeywordsContext; 
RepositoryParser.LiteralContext = LiteralContext; 
RepositoryParser.LogicContext = LogicContext; 
RepositoryParser.OperatorsContext = OperatorsContext; 
