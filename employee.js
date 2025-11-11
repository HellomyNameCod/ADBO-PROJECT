// Kelas induk
class Employee {
  calculateSalary() {
    // method akan dioverride oleh subclass
  }
}

// Kelas turunan: FullTimeEmployee
class FullTimeEmployee extends Employee {
  constructor(name, salary = 5000000) {
    super();
    this.name = name;
    this.salary = salary;
  }

  calculateSalary() {
    return this.salary;
  }
}

// Kelas turunan: PartTimeEmployee
class PartTimeEmployee extends Employee {
  constructor(name, hoursWorked, hourlyRate = 50000) {
    super();
    this.name = name;
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }

  calculateSalary() {
    return this.hoursWorked * this.hourlyRate;
  }
}

// Contoh penggunaan
const fulltime = new FullTimeEmployee("Andi");
const parttime = new PartTimeEmployee("Budi", 40);

console.log(`Gaji ${fulltime.name}: Rp${fulltime.calculateSalary().toLocaleString()}`);
console.log(`Gaji ${parttime.name}: Rp${parttime.calculateSalary().toLocaleString()}`);
