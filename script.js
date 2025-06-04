function chunkString(str, length) {
  if (!str) return [];

  const chunks = [];
  for (let i = 0; i < str.length; i += length) {
    chunks.push(str.slice(i, i + length));
  }

  return chunks;
}

function chunkAndDisplay() {
  const inputStr = document.getElementById("inputString").value;
  const chunkSize = parseInt(document.getElementById("chunkLength").value);
  const resultDiv = document.getElementById("result");

  if (!chunkSize || chunkSize <= 0) {
    resultDiv.textContent = "Please enter a valid chunk size (positive integer).";
    return;
  }

  const result = chunkString(inputStr, chunkSize);
  resultDiv.textContent = `Chunks: [${result.map(chunk => `"${chunk}"`).join(', ')}]`;
}
