interface String {
  format(...replacements: string[]): string;
  toBoolean(): boolean;
}

if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };
}

if (!String.prototype.toBoolean) {
  String.prototype.toBoolean = function (): boolean {
    switch (this) {
      case 'true':
      case '1':
      case 'on':
      case 'yes':
        return true;
      default:
        return false;
    }
  };
}
