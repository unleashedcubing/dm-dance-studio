export function cleanSingleLine(value, maxLength = 80) {
  return value.replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim().slice(0, maxLength);
}

export function buildTrialMessage(request) {
  const name = cleanSingleLine(request.firstName, 40);
  const preference = cleanSingleLine(request.preference, 80);
  const greeting = name ? `Hi, I'm ${name}.` : 'Hi.';
  const timeLine = preference ? ` My preferred time is ${preference}.` : '';
  return `${greeting} I'm interested in ${request.interest} for an ${request.ageGroup.toLowerCase()} learner.${timeLine} Could you recommend a suitable first class or batch?`;
}

export function buildWhatsAppUrl(phone, request) {
  const normalized = phone.replace(/\D/g, '');
  if (normalized.length < 10 || normalized.length > 15) throw new Error('Invalid WhatsApp number');
  return `https://wa.me/${normalized}?text=${encodeURIComponent(buildTrialMessage(request))}`;
}
