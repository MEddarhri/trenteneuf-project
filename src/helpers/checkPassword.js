export const checkpassword = (password) => {
  var strength = 0;
  let msg = '';
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;
  }
  if (password.length < 6) {
    msg = 'password cannot be less than 6 characters';
  }

  if (password.length > 12) {
    msg = 'maximum number of characters is 12';
  }

  return strength;
};
