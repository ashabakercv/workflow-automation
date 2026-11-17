import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as M from '../src/model.mjs';
const data=JSON.parse(readFileSync(new URL('../data/fixtures.json',import.meta.url),'utf8'));
test('invalid amount and missing purpose fail',()=>{assert.equal(M.validate({title:'A',purpose:'',amount:20}),false);assert.equal(M.validate({title:'A',purpose:'B',amount:-1}),false);assert.equal(M.validate({title:'A',purpose:'B',amount:''}),false);});test('zero cost is valid',()=>assert.equal(M.validate({title:'A',purpose:'B',amount:0}),true));test('threshold includes exactly 1000',()=>assert.equal(M.route('Manager review','approve',1000),'Approved'));test('above threshold still needs finance',()=>assert.equal(M.route('Manager review','approve',1000.01),'Finance review'));test('finance rejection is final',()=>assert.equal(M.route('Finance review','reject',1200),'Rejected'));test('cannot skip manager',()=>assert.throws(()=>M.route('Draft','approve',1200)));
