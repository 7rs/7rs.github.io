export const Styles = {
  Default: 'default',
  Reverse: 'reverse',
  Success: 'success',
  Failed: 'failed',
  Warning: 'warning',
};

export type Styles = (typeof Styles)[keyof typeof Styles];
