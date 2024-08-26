import compose from 'compose-function';
import { withQuery } from './with-query';
import { withToast } from './with-toast';
import { withTheme } from './with-theme';

export const withProviders = compose(withQuery, withToast, withTheme);
