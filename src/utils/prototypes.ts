interface String {
    capitalize(): string;
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

interface Number {
  preiodicFormat(): string;
}

Number.prototype.preiodicFormat = function () {
  return this.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}