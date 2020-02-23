import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  color: string;
  title = 'ng-chrome-extension';

  colorize() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.body.style.backgroundColor = "' + this.color + '";' }
      );
    });
  }

  public updateColor(color: string) {
    chrome.storage.sync.set({ color});
  }

  ngOnInit(): void {
    chrome.storage.sync.get('color', ({ color }) => {
      this.color = color;
      console.log('color')
    });
  }
}
