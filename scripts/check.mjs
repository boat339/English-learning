import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script, createContext, runInContext } from 'node:vm';
import assert from 'node:assert/strict';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const html = read('index.html');
assert.match(html, /^<!DOCTYPE html>/i, 'Entry must be a real HTML document');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs');
for (const match of html.matchAll(/(?:src|href)="(assets\/[^"#?]+)"/g)) {
  assert.ok(existsSync(resolve(root, match[1])), `Missing asset: ${match[1]}`);
}
const data = read('assets/js/data.js');
const app = read('assets/js/app.js');
new Script(data);
new Script(app);
for (const match of app.matchAll(/getElementById\('([^']+)'\)/g)) {
  if (!match[1].endsWith('-'))
    assert.ok(ids.includes(match[1]), `Missing ID: ${match[1]}`);
}
const context = createContext({});
runInContext(
  `${data}\nthis.content = { words, questions, dialogues };`,
  context,
);
const { words, questions, dialogues } = context.content;
for (const group of [words, questions, dialogues]) {
  assert.ok(group.length > 0);
  assert.equal(
    new Set(group.map((item) => item.id)).size,
    group.length,
    'Duplicate content IDs',
  );
}
assert.ok(new Set(words.map((word) => word.meaning)).size >= 4);
for (const word of words) {
  for (const key of [
    'word',
    'phonetic',
    'meaning',
    'example',
    'mnemonic',
    'image',
    'difficulty',
    'category',
  ])
    assert.ok(word[key], `Missing word ${key}`);
  assert.ok(['easy', 'medium', 'hard'].includes(word.difficulty));
}
for (const question of questions) {
  assert.ok(question.options.length >= 2);
  assert.ok(
    Number.isInteger(question.answer) &&
      question.answer >= 0 &&
      question.answer < question.options.length,
  );
  assert.ok(question.question && question.explanation);
}
for (const dialogue of dialogues) {
  assert.ok(dialogue.scene && dialogue.lines.length);
  for (const line of dialogue.lines)
    assert.ok(
      ['A', 'B'].includes(line.speaker) && line.text && line.translation,
    );
}
console.log(
  `PASS: HTML, assets, JavaScript, ${words.length} words, ${questions.length} questions, ${dialogues.length} dialogues`,
);
