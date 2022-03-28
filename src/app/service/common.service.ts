import { Injectable } from '@angular/core';
import { ParagraphComponent } from '../component/paragraph/paragraph.component';
import { ButtonComponent } from '../component/button/button.component';
import { BannerComponent } from '../component/banner/banner.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getComponent() {
    const response = {
      page1: {
        url: "/page1",
        components: [
            {
                component_name: ParagraphComponent,
                data: {
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            },
            {
                component_name: ButtonComponent,
                data: {
                  label: "Go to page 2",
                  link: "/page2"
                }
            }
        ]
      },
      page2: {
          url: "/page2",
          components: [
              {
                  component_name: BannerComponent,
                  data: {
                    image_path: "../../../../assets/images/banner-image.jpg"
                  }
              },           
              {
                  component_name: ButtonComponent,
                  data: {
                    label: "Go to page 1",
                    link: "/page1"
                  }
              }
          ]
      } 
    }

    return response;
  }
}
