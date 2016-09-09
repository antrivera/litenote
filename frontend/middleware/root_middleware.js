import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import NotebookMiddleware from './notebook_middleware';
import NoteMiddleware from './note_middleware';
import TagMiddleware from './tag_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  NotebookMiddleware,
  NoteMiddleware,
  TagMiddleware
);

export default RootMiddleware;
