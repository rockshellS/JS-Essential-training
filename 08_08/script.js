/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

const tipCalculator = (sum, percentage, currency, prefix) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  if (prefix) {
  console.log(`
      Sum before tip: ${currency} ${sum}
      Tip percentage: ${currency} ${percentage}%
      Tip:            ${currency} ${tip.toFixed(2)}
      Total:          ${currency} ${total.toFixed(2)}
    `);
  
} else {
  console.log(`
  Sum before tip:  ${sum}${currency}
  Tip percentage:  ${percentage}% ${currency} 
  Tip:             ${tip.toFixed(2)} ${currency}
  Total:          ${total.toFixed(2)} ${currency}
`);
}

}
tipCalculator(29.95, 18, "kr", false);
