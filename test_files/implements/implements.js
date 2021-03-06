// test_files/implements/implements.ts(12,1): warning TS0: dropped implements: dropped implements of a type literal: MyRecord
// test_files/implements/implements.ts(18,1): warning TS0: dropped implements: dropped implements of a type literal: RecordAlias
/**
 *
 * @fileoverview Tests various types of 'implements' clauses, e.g. 'implements'
 * of a generic type alias of an underlying interface.
 *
 * Generated from: test_files/implements/implements.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.implements.implements');
var module = module || { id: 'test_files/implements/implements.ts' };
goog.require('tslib');
/** @typedef {{a: string}} */
var MyRecord;
/**
 * tsickle: dropped implements: dropped implements of a type literal: MyRecord
 */
class RecordImpl {
    constructor() {
        this.a = 'a';
    }
}
if (false) {
    /** @type {string} */
    RecordImpl.prototype.a;
}
/** @typedef {{a: string}} */
var RecordAlias;
/**
 * tsickle: dropped implements: dropped implements of a type literal: RecordAlias
 */
class RecordAliasImpl {
    constructor() {
        this.a = 'a';
    }
}
if (false) {
    /** @type {string} */
    RecordAliasImpl.prototype.a;
}
/**
 * @record
 */
function MyInterface() { }
if (false) {
    /** @type {string} */
    MyInterface.prototype.a;
}
/**
 * @implements {MyInterface}
 */
class InterfaceImpl {
    constructor() {
        this.a = 'a';
    }
}
if (false) {
    /** @type {string} */
    InterfaceImpl.prototype.a;
}
/** @typedef {!MyInterface} */
var Alias;
/**
 * @implements {MyInterface}
 */
class InterfaceAliasImpl {
    constructor() {
        this.a = 'a';
    }
}
if (false) {
    /** @type {string} */
    InterfaceAliasImpl.prototype.a;
}
/**
 * @record
 * @template A, B
 */
function Generic() { }
if (false) {
    /** @type {A} */
    Generic.prototype.a;
    /** @type {B} */
    Generic.prototype.b;
}
/**
 * @implements {Generic<string, number>}
 */
class GenericImpl {
    constructor() {
        this.a = 'a';
        this.b = 1;
    }
}
if (false) {
    /** @type {string} */
    GenericImpl.prototype.a;
    /** @type {number} */
    GenericImpl.prototype.b;
}
// GenericPartialImpl is a generic implementing a generic.
// The generic args should still make it.
/**
 * @template T
 * @implements {Generic<string, T>}
 */
class GenericPartialImpl {
    constructor() {
        this.a = 'a';
    }
}
if (false) {
    /** @type {string} */
    GenericPartialImpl.prototype.a;
    /** @type {T} */
    GenericPartialImpl.prototype.b;
}
/** @typedef {!Generic<string, ?>} */
var AliasGeneric;
/**
 * @implements {Generic<string, number>}
 */
class GenericIndirectImpl {
    constructor() {
        this.a = 'a';
        this.b = 1;
    }
}
if (false) {
    /** @type {string} */
    GenericIndirectImpl.prototype.a;
    /** @type {number} */
    GenericIndirectImpl.prototype.b;
}
