export const calculatePasswordStrength = (password: string) => {
  const weakRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const mediumRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{12,}$/;

  if (strongRegex.test(password)) {
    return 4; // Strong
  } else if (mediumRegex.test(password)) {
    return 3; // Good
  } else if (weakRegex.test(password)) {
    return 2; // Weak
  } else {
    return 1; // Very Weak
  }
};
