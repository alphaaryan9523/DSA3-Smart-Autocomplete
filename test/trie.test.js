import test from 'node:test';import assert from 'node:assert/strict';import {Trie,editDistance,corrections} from '../trie.js';
test('ranks prefix results by frequency',()=>{const t=new Trie();t.insert('apple',2);t.insert('application',8);assert.deepEqual(t.complete('app').map(x=>x.word),['application','apple'])});
test('computes Levenshtein distance',()=>assert.equal(editDistance('algoritm','algorithm'),1));
test('returns useful typo corrections',()=>assert.equal(corrections('progrmming',[{word:'programming',frequency:10}])[0].word,'programming'));
