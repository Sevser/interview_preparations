/*
you need to write class that allow you to write this code.

new FormBuilder()
  .addField("name", "text")
  .addField("isActive", "text")
  .printStructure()

function printStructure will print to console this text, I mean exact formatting as showing below.

`
{
  name:  { type: 'text' },
  isActive:  { type: 'boolean' }
}
`
*/


// asnwer

class FormField {
  type = '';
  constructor(type) {
    this.type = type;
  }
  toJSON() {
    return `{ type: '${this.type}' }`;
  }
}

class FormBuilder {
  constructor() {}
  addField(field, type) {
    this[field] = new FormField(type)
    return this;
  }
  printStructure() {
    console.log(JSON.stringify(this, null, 2).replace(/\"|\,/g, ''));
  }
}

new FormBuilder()
  .addField('name', 'text')
  .addField('isActive', 'boolean')
  .printStructure()
