import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/swagger/services';
import { saveAs } from 'file-saver';
import { Device } from '@ionic-native/device/ngx';

declare let cordova: any;
@Component({
  selector: 'app-download-apk',
  templateUrl: './download-apk.component.html',
  styleUrls: ['./download-apk.component.scss'],
})
export class DownloadApkComponent implements OnInit {

  constructor(public device: Device, private fileService: FileService) { }

  ngOnInit() { }

  downloadApk() {
    const request = {
      uri: '/assets/apk/despatch.apk',
      title: 'Despatch',
      notificationVisibility: 0
    };

    if (this.device.platform === 'Android') {
      request.uri = location.origin + request.uri,
        cordova.plugins.Downloader.download(request,
          (location) => {
            alert('File is downloaded at' + location);
          },
          (err) => {
            alert(err);
          });
    } else {
      this.fileService.FileDownload(request).subscribe(response => {
        console.log(response);
        saveAs(response);
      });
    }
  }
}
