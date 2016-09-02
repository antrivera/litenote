import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import NotebookMiddleware from './notebook_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  NotebookMiddleware
);

export default RootMiddleware;
