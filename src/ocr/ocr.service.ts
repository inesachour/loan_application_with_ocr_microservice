import { Injectable } from '@nestjs/common';
import Tesseract from 'tesseract.js';
import * as fs from 'fs';

@Injectable()
export class OcrService {
  async extractTextFromImage(imagePath: string): Promise<string> {
    const imageBuffer = fs.readFileSync(imagePath);
    const {
      data: { text },
    } = await Tesseract.recognize(imageBuffer);
    return text;
  }

  async extractTextFromPDF(pdfPath: string): Promise<string> {
    const pdfBuffer = fs.readFileSync(pdfPath);
    const {
      data: { text },
    } = await Tesseract.recognize(pdfBuffer);
    return text;
  }
}
