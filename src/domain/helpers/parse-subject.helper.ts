export function parseSubject(subject: string): string {
  switch (subject.toLowerCase()) {
    case 'contratação de empréstimo':
      return 'LOAN'
    case 'problemas com cartão':
      return 'CARD'
    default:
      return 'OTHERS'
  }
}
