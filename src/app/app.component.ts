import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFileName = "Import File...";
  title = 'text-mining-project';

  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.selectedFileName = event.target.files[0].name;
      console.log(event);
    }
    else {
      this.selectedFileName = "Import File...";
      console.log("no file selected");
    }
  }

}
