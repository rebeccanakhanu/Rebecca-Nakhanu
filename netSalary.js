
function calculatePayee(grossSalary) {
  const personalRelief = 2800;
  const taxableIncome = grossSalary - personalRelief;
  let payee = 0;

  if (taxableIncome <= 12298) {
    payee = 0.1 * taxableIncome;
  } else if (taxableIncome > 12298 && taxableIncome <= 23885) {
    payee = 1229.80 + 0.15 * (taxableIncome - 12298);
  } else if (taxableIncome > 23885 && taxableIncome <= 35472) {
    payee = 3064.25 + 0.20 * (taxableIncome - 23885);
  } else if (taxableIncome > 35472 && taxableIncome <= 47059) {
    payee = 5409.60 + 0.25 * (taxableIncome - 35472);
  } else if (taxableIncome > 47059) {
    payee = 8444.95 + 0.3 * (taxableIncome - 47059);
  }

  const nhifDeductions = calculateNhifDeductions(grossSalary);
  const nssfDeductions = calculateNssfDeductions(grossSalary);
  const grossSalary = grossSalary + nhifDeductions + nssfDeductions;

  const netSalary = grossSalary - payee;
  return {
    basicSalary: grossSalary - nhifDeductions - nssfDeductions,
    grossSalary,
    payee,
    nhifDeductions,
    nssfDeductions,
    netSalary
  };
}

function calculateNhifDeductions(grossSalary) {
  let nhifDeductions = 0;

  if (grossSalary <= 5999) {
    nhifDeductions = 150;
  } else if (grossSalary > 5999 && grossSalary <= 7999) {
    nhifDeductions = 300;
  } else if (grossSalary > 7999 && grossSalary <= 11999) {
    nhifDeductions = 400;
  } else if (grossSalary > 11999 && grossSalary <= 14999) {
    nhifDeductions = 500;
  } else if (grossSalary > 14999 && grossSalary <= 19999) {
    nhifDeductions = 600;
  } else if (grossSalary > 19999 && grossSalary <= 24999) {
    nhifDeductions = 750;
  } else if (grossSalary > 24999 && grossSalary <= 29999) {
    nhifDeductions = 850;
  } else if (grossSalary > 29999 && grossSalary <= 34999) {
    nhifDeductions = 900;
  } else if (grossSalary > 34999 && grossSalary <= 39999) {
    nhifDeductions = 950;
  } else if (grossSalary > 39999 && grossSalary <= 44999) {
    nhifDeductions = 1000;
  } else if (grossSalary > 44999 && grossSalary <= 49999) {
    nhifDeductions = 1100;
  } else if (grossSalary > 49999 && grossSalary <= 59999) {
    nhifDeductions = 1200;