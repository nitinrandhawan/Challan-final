import puppeteer from "puppeteer";

const GeneratePdf = async (req, res) => {
  try {
    const { htmlContent } = req.body;

    if (!htmlContent) {
      return res.status(400).json({ message: "htmlContent is required" });
    }
    const browser = await puppeteer.launch({
      headless: "new", 
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--disable-gpu",
        "--single-process", 
      ],
    });
    const page = await browser.newPage();

    await page.setContent(htmlContent, { waitUntil: "networkidle0" });
    
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();
    let filename = `invoice_${Date.now()}.pdf`;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename=${filename}`);
    return res.end(pdfBuffer);
  } catch (error) {
    console.log("PDF generation error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export { GeneratePdf };
