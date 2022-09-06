import chalk from 'chalk';
// log width executing time
export default function log(...args: any[]): void {  
  const date = new Date().toLocaleString();
  const content = chalk.hex('#04eB01')(`[${date}]`);
  console.log(content, ...args);
}