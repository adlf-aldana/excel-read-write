import { readExcel } from './../read-excel.model';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.css'],
})
export class ReadExcelComponent implements OnInit {
  data: readExcel[];
  // data: [][];
  constructor() {}

  ngOnInit(): void {}

  onFileChange(event: any): void {
    const target: DataTransfer = <DataTransfer>event.target;

    if (target.files.length !== 1)
      throw new Error('No usar archivos multiples');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      console.log('WB: ', wb);
      // CONSEGUIMOS EL NOMBRE DE LA HOJA
      const wsname: string = wb.SheetNames[0];

      // CONSEGUIMOS LOS DATOS DE LA HOJA 0
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log('WS: ', ws);

      this.data = XLSX.utils.sheet_to_json(ws, { header: 0 });

      console.log('DATA: ', this.data);
    };

    reader.readAsBinaryString(target.files[0]);
  }
}
