import { GlobalWorkerOptions, getDocument, PasswordResponses } from "pdfjs-dist/build/pdf.mjs";
import { EventBus, PDFViewer, PDFLinkService, PDFFindController } from "pdfjs-dist/web/pdf_viewer.mjs";

export interface PdfApp {
  eventBus: EventBus;
  pdfViewer: PDFViewer;
  linkService: PDFLinkService;
  findController: PDFFindController;
  document: Awaited<ReturnType<typeof getDocument>["promise"]> | null;
}

export function createPdfApp(container: HTMLDivElement): PdfApp {
  GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("pdfjs/pdf.worker.mjs");
  const eventBus = new EventBus();
  const linkService = new PDFLinkService({ eventBus });
  const findController = new PDFFindController({ eventBus, linkService });
  const pdfViewer = new PDFViewer({ container, eventBus, linkService, findController });
  linkService.setViewer(pdfViewer);
  eventBus.on("pagesinit", () => { pdfViewer.currentScaleValue = "auto"; });
  return { eventBus, pdfViewer, linkService, findController, document: null };
}

/**
 * Loads a PDF. `onPassword`, if given, is invoked for protected PDFs and again
 * (with `incorrect = true`) on a wrong password; it resolves with the password to
 * try. Without it, a protected PDF rejects the returned promise as before.
 */
export async function loadDocument(
  app: PdfApp,
  url: string,
  onPassword?: (incorrect: boolean) => Promise<string>,
) {
  const task = getDocument({
    url,
    cMapUrl: chrome.runtime.getURL("pdfjs/cmaps/"),
    cMapPacked: true,
    standardFontDataUrl: chrome.runtime.getURL("pdfjs/standard_fonts/"),
  });
  if (onPassword) {
    task.onPassword = (updatePassword: (pw: string) => void, reason: number) => {
      void onPassword(reason === PasswordResponses.INCORRECT_PASSWORD).then(updatePassword);
    };
  }
  const doc = await task.promise;
  app.document = doc;
  app.pdfViewer.setDocument(doc);
  app.linkService.setDocument(doc, null);
  return doc;
}
