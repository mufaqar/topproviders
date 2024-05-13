const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
const BaseURL = `${origin}`;
export { BaseURL }