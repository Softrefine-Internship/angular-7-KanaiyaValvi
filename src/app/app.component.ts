import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from './dynamic-form.service';
import { DaynamicForm } from './shared/daynamic-form.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  formFields!: DaynamicForm[];
  constructor(private dynamicFormService: DynamicFormService) {}
  formData: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formFields = this.dynamicFormService
      .getFormFields()
      .filter((item) => item.isVisible && { ...item });

    let newFormFields = {};
    this.formFields.forEach((field) => {
      let validate = [];

      field.isRequired && validate.push(Validators.required);
      field.isRequired &&
        field.type === 'checkbox' &&
        validate.push(Validators.requiredTrue);

      if (field.isVisible)
        newFormFields = {
          ...newFormFields,
          [field.name]: new FormControl(field.value, validate),
        };
    });
    this.formData = new FormGroup(newFormFields);
  }

  onSubmit() {
    if (this.formData.valid) {
      console.log(this.formData.value);
    } else {
      this.formData.markAllAsTouched();
    }
  }
}
