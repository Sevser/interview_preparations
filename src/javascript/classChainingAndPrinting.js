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

class FormBuilder {
  attributes = {}
  constructor() {}
  addField(field, type) {
    this.attributes[field] = { type };
    return this;
  }
  printStructure() {
    const makeReplacer = () => {
      let isInitial = true;
    
      return (key, value) => {
        if (isInitial) {
          isInitial = false;
          return value;
        }
        return JSON.stringify(value, (key, value) => {
          if (typeof value === 'string') {
            return `'${value}'`;
          }
          return value;
        }).replace(/{/g, '{ ').replace(/}/g, ' }');
      }
    }
    console.log(JSON.stringify(this.attributes, makeReplacer(), 2).replace(/\\\"|\"/g, ''));
  }
}

new FormBuilder()
  .addField('name', 'text')
  .addField('isActive', 'true')
  .printStructure()
