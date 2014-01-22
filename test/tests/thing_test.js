/*global test, ok, equal */

import Thing from '../../lib/thing';
import That from '../../lib/thing/that';

QUnit.module('bro face');

test('exists', function(){
  ok(Thing, 'expected thing');
  ok(That, 'expected that');
  equal(2,3, 'noop');
});

QUnit.module('bro face 2');
