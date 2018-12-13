import { Accounts } from 'meteor/accounts-base';
 //pokazyvat' username tol'ko
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});