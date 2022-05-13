// Generated from Repository.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from '../../base/vendor/antlr4.js';
import RepositoryListener from './RepositoryListener';
const serializedATN = [4,1,27,140,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,3,0,38,8,0,1,0,3,0,41,
8,0,1,0,3,0,44,8,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,4,4,57,8,
4,11,4,12,4,58,3,4,61,8,4,1,5,3,5,64,8,5,1,5,1,5,3,5,68,8,5,1,5,3,5,71,8,
5,1,6,3,6,74,8,6,1,6,1,6,1,6,4,6,79,8,6,11,6,12,6,80,1,7,1,7,3,7,85,8,7,
1,7,3,7,88,8,7,1,8,1,8,1,8,3,8,93,8,8,3,8,95,8,8,1,9,1,9,1,9,1,10,1,10,1,
10,1,11,1,11,3,11,105,8,11,1,12,1,12,3,12,109,8,12,1,13,1,13,1,14,1,14,1,
15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,138,8,16,1,16,0,0,17,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,3,1,0,19,25,1,0,16,18,1,0,26,27,
154,0,37,1,0,0,0,2,45,1,0,0,0,4,48,1,0,0,0,6,51,1,0,0,0,8,54,1,0,0,0,10,
63,1,0,0,0,12,73,1,0,0,0,14,82,1,0,0,0,16,94,1,0,0,0,18,96,1,0,0,0,20,99,
1,0,0,0,22,102,1,0,0,0,24,106,1,0,0,0,26,110,1,0,0,0,28,112,1,0,0,0,30,114,
1,0,0,0,32,137,1,0,0,0,34,38,3,2,1,0,35,38,3,4,2,0,36,38,3,6,3,0,37,34,1,
0,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,40,1,0,0,0,39,41,5,2,0,0,40,39,1,0,
0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,44,5,0,0,1,43,42,1,0,0,0,43,44,1,0,0,
0,44,1,1,0,0,0,45,46,3,14,7,0,46,47,3,8,4,0,47,3,1,0,0,0,48,49,3,22,11,0,
49,50,3,8,4,0,50,5,1,0,0,0,51,52,3,24,12,0,52,53,3,8,4,0,53,7,1,0,0,0,54,
60,3,10,5,0,55,57,3,10,5,0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,
59,1,0,0,0,59,61,1,0,0,0,60,56,1,0,0,0,60,61,1,0,0,0,61,9,1,0,0,0,62,64,
3,30,15,0,63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,67,3,12,6,0,66,68,
3,32,16,0,67,66,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,71,3,28,14,0,70,69,
1,0,0,0,70,71,1,0,0,0,71,11,1,0,0,0,72,74,5,4,0,0,73,72,1,0,0,0,73,74,1,
0,0,0,74,78,1,0,0,0,75,79,5,6,0,0,76,79,3,26,13,0,77,79,3,28,14,0,78,75,
1,0,0,0,78,76,1,0,0,0,78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,
0,0,0,81,13,1,0,0,0,82,84,5,19,0,0,83,85,3,16,8,0,84,83,1,0,0,0,84,85,1,
0,0,0,85,87,1,0,0,0,86,88,5,20,0,0,87,86,1,0,0,0,87,88,1,0,0,0,88,15,1,0,
0,0,89,95,5,23,0,0,90,92,3,18,9,0,91,93,3,20,10,0,92,91,1,0,0,0,92,93,1,
0,0,0,93,95,1,0,0,0,94,89,1,0,0,0,94,90,1,0,0,0,95,17,1,0,0,0,96,97,5,24,
0,0,97,98,5,5,0,0,98,19,1,0,0,0,99,100,5,25,0,0,100,101,5,5,0,0,101,21,1,
0,0,0,102,104,5,21,0,0,103,105,5,20,0,0,104,103,1,0,0,0,104,105,1,0,0,0,
105,23,1,0,0,0,106,108,5,22,0,0,107,109,5,20,0,0,108,107,1,0,0,0,108,109,
1,0,0,0,109,25,1,0,0,0,110,111,7,0,0,0,111,27,1,0,0,0,112,113,7,1,0,0,113,
29,1,0,0,0,114,115,7,2,0,0,115,31,1,0,0,0,116,138,5,7,0,0,117,118,5,7,0,
0,118,138,5,8,0,0,119,138,5,9,0,0,120,121,5,8,0,0,121,138,5,9,0,0,122,138,
5,11,0,0,123,124,5,11,0,0,124,138,5,14,0,0,125,138,5,12,0,0,126,127,5,12,
0,0,127,138,5,14,0,0,128,138,5,13,0,0,129,130,5,8,0,0,130,138,5,13,0,0,131,
138,5,15,0,0,132,133,5,8,0,0,133,138,5,15,0,0,134,138,5,10,0,0,135,136,5,
8,0,0,136,138,5,10,0,0,137,116,1,0,0,0,137,117,1,0,0,0,137,119,1,0,0,0,137,
120,1,0,0,0,137,122,1,0,0,0,137,123,1,0,0,0,137,125,1,0,0,0,137,126,1,0,
0,0,137,128,1,0,0,0,137,129,1,0,0,0,137,131,1,0,0,0,137,132,1,0,0,0,137,
134,1,0,0,0,137,135,1,0,0,0,138,33,1,0,0,0,18,37,40,43,58,60,63,67,70,73,
78,80,84,87,92,94,104,108,137];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RepositoryParser extends antlr4.Parser {

    static grammarFileName = "Repository.g4";
    static literalNames = [ null, null, null, "'_'" ];
    static symbolicNames = [ null, "WS", "LINE_BREAK", "UNDER_SCORE", "UPPER_CHAR", 
                             "NUMBER", "CHAR", "IS", "NOT", "EQUALS", "LIKE", 
                             "GREATER", "LESS", "BETWEEN", "THAN", "IN", 
                             "NULL", "TRUE", "FALSE", "FIND", "BY", "UPDATE", 
                             "DELETE", "ONE", "TOP", "K_SKIP", "AND", "OR" ];
    static ruleNames = [ "query", "findQuery", "updateQuery", "deleteQuery", 
                         "fieldExprList", "fieldExpr", "identifier", "find", 
                         "limitExpr", "topExpr", "skipExpr", "update", "delete", 
                         "keywords", "literal", "logic", "operators" ];

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
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RepositoryParser.FIND:
	            this.state = 34;
	            this.findQuery();
	            break;
	        case RepositoryParser.UPDATE:
	            this.state = 35;
	            this.updateQuery();
	            break;
	        case RepositoryParser.DELETE:
	            this.state = 36;
	            this.deleteQuery();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.LINE_BREAK) {
	            this.state = 39;
	            this.match(RepositoryParser.LINE_BREAK);
	        }

	        this.state = 43;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 42;
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
	        this.state = 45;
	        this.find();
	        this.state = 46;
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
	        this.state = 48;
	        this.update();
	        this.state = 49;
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
	        this.state = 51;
	        this.delete_();
	        this.state = 52;
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
	        this.state = 54;
	        this.fieldExpr();
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.UPPER_CHAR) | (1 << RepositoryParser.CHAR) | (1 << RepositoryParser.NULL) | (1 << RepositoryParser.TRUE) | (1 << RepositoryParser.FALSE) | (1 << RepositoryParser.FIND) | (1 << RepositoryParser.BY) | (1 << RepositoryParser.UPDATE) | (1 << RepositoryParser.DELETE) | (1 << RepositoryParser.ONE) | (1 << RepositoryParser.TOP) | (1 << RepositoryParser.K_SKIP) | (1 << RepositoryParser.AND) | (1 << RepositoryParser.OR))) !== 0)) {
	            this.state = 56; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 55;
	                this.fieldExpr();
	                this.state = 58; 
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.AND || _la===RepositoryParser.OR) {
	            this.state = 62;
	            this.logic();
	        }

	        this.state = 65;
	        this.identifier();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RepositoryParser.IS) | (1 << RepositoryParser.NOT) | (1 << RepositoryParser.EQUALS) | (1 << RepositoryParser.LIKE) | (1 << RepositoryParser.GREATER) | (1 << RepositoryParser.LESS) | (1 << RepositoryParser.BETWEEN) | (1 << RepositoryParser.IN))) !== 0)) {
	            this.state = 66;
	            this.operators();
	        }

	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 69;
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
	    this.enterRule(localctx, 12, RepositoryParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===RepositoryParser.UPPER_CHAR) {
	            this.state = 72;
	            this.match(RepositoryParser.UPPER_CHAR);
	        }

	        this.state = 78; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 78;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case RepositoryParser.CHAR:
	        		    this.state = 75;
	        		    this.match(RepositoryParser.CHAR);
	        		    break;
	        		case RepositoryParser.FIND:
	        		case RepositoryParser.BY:
	        		case RepositoryParser.UPDATE:
	        		case RepositoryParser.DELETE:
	        		case RepositoryParser.ONE:
	        		case RepositoryParser.TOP:
	        		case RepositoryParser.K_SKIP:
	        		    this.state = 76;
	        		    this.keywords();
	        		    break;
	        		case RepositoryParser.NULL:
	        		case RepositoryParser.TRUE:
	        		case RepositoryParser.FALSE:
	        		    this.state = 77;
	        		    this.literal();
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 80; 
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
	    this.enterRule(localctx, 14, RepositoryParser.RULE_find);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(RepositoryParser.FIND);
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 83;
	            this.limitExpr();

	        }
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 86;
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
	    this.enterRule(localctx, 16, RepositoryParser.RULE_limitExpr);
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case RepositoryParser.ONE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.match(RepositoryParser.ONE);
	            break;
	        case RepositoryParser.TOP:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.topExpr();
	            this.state = 92;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            if(la_===1) {
	                this.state = 91;
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
	    this.enterRule(localctx, 18, RepositoryParser.RULE_topExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(RepositoryParser.TOP);
	        this.state = 97;
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
	    this.enterRule(localctx, 20, RepositoryParser.RULE_skipExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(RepositoryParser.K_SKIP);
	        this.state = 100;
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
	    this.enterRule(localctx, 22, RepositoryParser.RULE_update);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(RepositoryParser.UPDATE);
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 103;
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
	    this.enterRule(localctx, 24, RepositoryParser.RULE_delete);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(RepositoryParser.DELETE);
	        this.state = 108;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 107;
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
	    this.enterRule(localctx, 26, RepositoryParser.RULE_keywords);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, RepositoryParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
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
	    this.enterRule(localctx, 30, RepositoryParser.RULE_logic);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
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
	    this.enterRule(localctx, 32, RepositoryParser.RULE_operators);
	    try {
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.match(RepositoryParser.IS);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.match(RepositoryParser.IS);
	            this.state = 118;
	            this.match(RepositoryParser.NOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.match(RepositoryParser.EQUALS);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 120;
	            this.match(RepositoryParser.NOT);
	            this.state = 121;
	            this.match(RepositoryParser.EQUALS);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 122;
	            this.match(RepositoryParser.GREATER);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 123;
	            this.match(RepositoryParser.GREATER);
	            this.state = 124;
	            this.match(RepositoryParser.THAN);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 125;
	            this.match(RepositoryParser.LESS);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 126;
	            this.match(RepositoryParser.LESS);
	            this.state = 127;
	            this.match(RepositoryParser.THAN);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 128;
	            this.match(RepositoryParser.BETWEEN);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 129;
	            this.match(RepositoryParser.NOT);
	            this.state = 130;
	            this.match(RepositoryParser.BETWEEN);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 131;
	            this.match(RepositoryParser.IN);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 132;
	            this.match(RepositoryParser.NOT);
	            this.state = 133;
	            this.match(RepositoryParser.IN);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 134;
	            this.match(RepositoryParser.LIKE);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 135;
	            this.match(RepositoryParser.NOT);
	            this.state = 136;
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
RepositoryParser.BY = 20;
RepositoryParser.UPDATE = 21;
RepositoryParser.DELETE = 22;
RepositoryParser.ONE = 23;
RepositoryParser.TOP = 24;
RepositoryParser.K_SKIP = 25;
RepositoryParser.AND = 26;
RepositoryParser.OR = 27;

RepositoryParser.RULE_query = 0;
RepositoryParser.RULE_findQuery = 1;
RepositoryParser.RULE_updateQuery = 2;
RepositoryParser.RULE_deleteQuery = 3;
RepositoryParser.RULE_fieldExprList = 4;
RepositoryParser.RULE_fieldExpr = 5;
RepositoryParser.RULE_identifier = 6;
RepositoryParser.RULE_find = 7;
RepositoryParser.RULE_limitExpr = 8;
RepositoryParser.RULE_topExpr = 9;
RepositoryParser.RULE_skipExpr = 10;
RepositoryParser.RULE_update = 11;
RepositoryParser.RULE_delete = 12;
RepositoryParser.RULE_keywords = 13;
RepositoryParser.RULE_literal = 14;
RepositoryParser.RULE_logic = 15;
RepositoryParser.RULE_operators = 16;

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
RepositoryParser.UpdateQueryContext = UpdateQueryContext; 
RepositoryParser.DeleteQueryContext = DeleteQueryContext; 
RepositoryParser.FieldExprListContext = FieldExprListContext; 
RepositoryParser.FieldExprContext = FieldExprContext; 
RepositoryParser.IdentifierContext = IdentifierContext; 
RepositoryParser.FindContext = FindContext; 
RepositoryParser.LimitExprContext = LimitExprContext; 
RepositoryParser.TopExprContext = TopExprContext; 
RepositoryParser.SkipExprContext = SkipExprContext; 
RepositoryParser.UpdateContext = UpdateContext; 
RepositoryParser.DeleteContext = DeleteContext; 
RepositoryParser.KeywordsContext = KeywordsContext; 
RepositoryParser.LiteralContext = LiteralContext; 
RepositoryParser.LogicContext = LogicContext; 
RepositoryParser.OperatorsContext = OperatorsContext; 
