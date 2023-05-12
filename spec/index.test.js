import { marked } from 'marked';
import { markedSmartypants } from '../lib/index.js';
import { runTests } from './run-tests.cjs';

runTests(marked, markedSmartypants);
