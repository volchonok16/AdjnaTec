export const generatePDFFile = (content: string) => {
    const binaryString = atob(content);
    const binaryArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        binaryArray[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([binaryArray], { type: "application/pdf" });
    const blobURL = URL.createObjectURL(blob);
    window.open(blobURL, "_blank");
};