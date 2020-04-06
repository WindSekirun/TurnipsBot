import path from 'path';
import fs from 'fs';

export class ControlResult {
  private indexPathRelative: string = '../../data/result/index.html';
  private basicPath: string = '../../data/result/';

  removeResultFile(uid: string) {
    const filePathRelative = this.basicPath + `${uid}.html`;
    const filePath = path.resolve(__dirname, filePathRelative);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  generateResultFile(uid: string, resultCode: string) {
    const filePathRelative = this.basicPath + `${uid}.html`;
    const filePath = path.resolve(__dirname, filePathRelative);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    const indexPath = path.resolve(__dirname, this.indexPathRelative);
    fs.copyFileSync(indexPath, filePath) // index 파일 복사
    
  }
}
