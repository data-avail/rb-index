import {Component, View, EventEmitter} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {ResortsEP} from "../../services/resorts-ep"
 
@Component({
  events: ["created"],
  appInjector: [FormBuilder, ResortsEP],
  selector: 'resort-create-form'
})
@View({
  template: `
    <div  [control-group]="createResortForm">
      <div>
        <input [control]="createResortForm.controls.name" placeholder="new resort name">
      </div>        
      <button (click)="submitForm()">Create</button>
    </div>
  `,
  directives: [formDirectives]
})
export class ResortCreateForm {
  createResortForm: ControlGroup;
  private created: EventEmitter;

  constructor(builder: FormBuilder, private resortsEP: ResortsEP) {
    this.createResortForm = builder.group({
      name: ["", Validators.required]
    });
    
    this.created = new EventEmitter();    
  }
  
  submitForm(): void {
    //TODO: submit form on enter, using standard <form> tag 
    if (this.createResortForm.valid) {
      this.resortsEP.createResort(this.createResortForm.value.name).then((res) => {  
        //TODO : How to set value on controller ???
        this.createResortForm.controls.name.updateValue("");
        this.created.next(res);
      });
    }
   
  }
}