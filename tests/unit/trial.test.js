import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTrialMessage, buildWhatsAppUrl, cleanSingleLine } from '../../src/trial.js';

test('normalizes multiline input and caps length', () => {
  assert.equal(cleanSingleLine('  hello\n\tthere  ', 20), 'hello there');
  assert.equal(cleanSingleLine('a'.repeat(90), 10).length, 10);
});

test('builds a clear, non-confirmatory message', () => {
  const message = buildTrialMessage({ firstName: 'Maya', interest: 'Dance classes', ageGroup: 'Adult', preference: 'weekday evenings' });
  assert.match(message, /Hi, I'm Maya/);
  assert.match(message, /adult learner/);
  assert.match(message, /recommend a suitable first class or batch/);
  assert.doesNotMatch(message, /booked|confirmed/);
});

test('encodes content and strips phone punctuation', () => {
  const url = buildWhatsAppUrl('+91 91001 30108', { firstName: '', interest: 'Zumba fitness', ageGroup: 'Adult', preference: '' });
  assert.match(url, /^https:\/\/wa\.me\/919100130108\?text=/);
  assert.match(decodeURIComponent(url), /Zumba fitness/);
});

test('rejects invalid numbers', () => {
  assert.throws(() => buildWhatsAppUrl('123', { firstName: '', interest: 'Not sure yet', ageGroup: 'Adult', preference: '' }), /Invalid WhatsApp number/);
});
