import { Injectable } from '@angular/core';
import { DaynamicForm } from './shared/daynamic-form.model';

@Injectable({ providedIn: 'root' })
export class DynamicFormService {
  daynamicformControl: DaynamicForm[] = [
    {
      name: 'firstname',
      type: 'text',
      label: 'Text Input',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Please enter valid Text',
      hint: 'Text input',
      value: '',
      options: [],
    },
    {
      name: 'age',
      type: 'number',
      label: 'Number Input',
      isVisible: true,
      isRequired: true,
      errorMessage: 'A number valid number.',
      hint: 'Number input',
      value: '',
      options: [],
    },
    {
      name: 'level',
      type: 'range',
      label: 'Range Input',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Range error message',
      hint: 'Slider input',
      value: 0,
      options: [],
    },
    {
      name: 'cuntry',
      type: 'dropdown',
      label: 'Dropdown Input',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Plase select any country',
      hint: 'Dropdown input',
      value: '',
      options: ['India', 'USA', 'China'],
    },
    {
      name: 'married',
      type: 'checkbox',
      label: 'Cehckbox Input',
      isRequired: true,
      isVisible: true,
      value: true,
      errorMessage: 'please check the checkbox',
    },

    {
      name: 'about',
      type: 'textarea',
      label: 'Text Area Input',
      isVisible: true,
      isRequired: true,
      errorMessage: 'Add Text',
      hint: 'TextArea input',
      value: '',
      options: [],
    },
  ];

  getFormFields() {
    return this.daynamicformControl.slice();
  }
}
