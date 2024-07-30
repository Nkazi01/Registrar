import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
declare var window: { PreviewAnyFile: { previewPath: (arg0: (success: any) => void, arg1: (error: any) => void, arg2: string) => void; }; };

@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.page.html',
  styleUrls: ['./doc-view.page.scss'],
})
export class DocViewPage implements OnInit {

  constructor(private loader:LoadingController) { }

  ngOnInit() {
  }

viewPdf(){
  
  let pdfUrl = "assets/DIRISA.pdf";
  this.loader.create({
    message: "Opening PDF..."
  }).then((ele)=>{
    ele.present();
    window.PreviewAnyFile.previewPath(
      (      success: any) =>{
        ele.dismiss();
      },
      (      error: any) =>{
        ele.dismiss();
        alert(JSON.stringify(error));

      },
      pdfUrl
    )
  })
}

}
