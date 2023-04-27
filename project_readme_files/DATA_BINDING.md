## Data Binding
Data binding deals with how to bind your data from component to HTML DOM elements (Templates).
We can easily interact with application without worrying about how to insert your data.
We can make connections in two different ways one way and two-way binding.

### Categories of Data Binding

**One Way Data Binding**  
One-way data binding is a one-way interaction between component and its template. If you perform any changes in your component, then it will reflect the HTML elements.

**Two Way Data Binding**  
Two-way data binding is a two-way interaction, data flows in both ways (from component to views and views to component). Simple example is ngModel. If you do any changes in your property (or model) then, it reflects in your view and vice versa. It is the combination of property and event binding.

**Types of one-way data binding**  
(i) String interpolation  
(ii) Event binding  
(iii) Component to view binding  
(iv) Property binding  
(v) Attribute binding  
(vi) Class binding  
(vii) Style binding

**Types of two-way binding**  
(i) NgModel

************************************************************************************

# Code Examples
## 1. String interpolation
### .ts file
```
export class DataBindingComponent {
  public interpolatedString: string = 'This string is interpolated.';
}
```


### .html file
```
<p>{{ interpolatedString }}</p>
```
-----------------------------------------------------------------------

## 2. Event Binding
### .ts file
```
export class DataBindingComponent {
  getEventDetails($event: any) {
    console.log(`You clicked a button!`)
    if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
```


### .html file
```
<button class="btn btn-secondary btn-sm" (click)="getEventDetails($event)">Click me & get my value!</button>
```
-----------------------------------------------------------------------

## 3. Property Binding
### .ts file
```
export class DataBindingComponent {
  public companyName:string = "Turnkey Africa";
}
```


### .html file
```
<input type="text" [value]="companyName">
```
-----------------------------------------------------------------------

## 4. Attribute Binding
### .ts file
```
export class DataBindingComponent {
  public columnSpan: number = 3;
}
```


### .html file
```
<table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th [attr.colspan]="columnSpan">1, 2, and 3</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>col 4</td>
        <td>col 5</td>
        <td>col 6</td>
      </tr>
      </tbody>
    </table>
```
-----------------------------------------------------------------------

## 5. Class Binding
### .ts file
```
export class DataBindingComponent {
  public boxStyle: string = 'default-box';
  
  paintBox(buttonClass: string): void {
    this.boxStyle = buttonClass ==='green' ? 'green' : 'blue';
  }
}
```


### .html file
```
<button class="btn btn-success btn-sm mr-2" (click)="paintBox('green')">Make me green</button>
<button class="btn btn-primary btn-sm mr-2" (click)="paintBox('blue')">Make me blue</button>
<div [class]="boxStyle"></div>
```

### .css file
```
.default-box {
  height: 100px;
  width: 100px;
  background: orange;
  margin: 10px;
}

.green {
  height: 100px;
  width: 100px;
  background: green;
  margin: 10px;
}

.blue {
  height: 100px;
  width: 100px;
  background: blue;
  margin: 10px;
}
```
-----------------------------------------------------------------------

## 6. Style Binding
### .ts file
```
export class DataBindingComponent {
  public fontColor: string = 'blue'; // 6
  public backgroundColor: string = 'yellow'; //6. Style Binding
}
```


### .html file
```
<p [style.color]="fontColor">The quick brown fox jumps over a lazy dog.</p>
<p [style.background]="backgroundColor">My father once told me the above sentence contains all the 26 letters of the alphabet. I checked and found out it is true</p>
```
-----------------------------------------------------------------------

## 7. TWO-WAY BINDING
### app.module.ts
```
// you need to import the FormsModule to configure forms module for two-way binding
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
```

### .ts file
```
export class DataBindingComponent {
  public userInput: string = '';
}
```


### .html file
```
<input type="text" [(ngModel)]="userInput" />
<p> {{ userInput }}</p>
```
-----------------------------------------------------------------------
