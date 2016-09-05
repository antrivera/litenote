import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import NotebookMiddleware from './notebook_middleware';
import NoteMiddleware from './note_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  NotebookMiddleware,
  NoteMiddleware
);

export default RootMiddleware;
