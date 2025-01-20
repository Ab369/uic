export default function validate(email) {
    if (typeof email !== 'string') {
      return false;
    }
  
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isEmail) {
      return true;
    }
    return false;
  }
  