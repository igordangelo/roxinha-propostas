const d1RateLabels = [
  "Débito",
  "Crédito",
  "2x",
  "3x",
  "4x",
  "5x",
  "6x",
  "7x",
  "8x",
  "9x",
  "10x",
  "11x",
  "12x",
  "13x",
  "14x",
  "15x",
  "16x",
  "17x",
  "18x",
  "19x",
  "20x",
  "21x",
];

const d30RateLabels = [
  "Débito",
  "Crédito à vista",
  "Crédito 2x a 6x",
  "Crédito 7x a 12x",
  "Crédito 13x a 21x",
];

const d1Examples = {
  main: ["0,81%", "3,00%", "4,83%", "5,58%", "6,31%", "7,04%", "7,77%", "8,61%", "9,32%", "10,01%", "10,70%", "11,39%", "12,07%", "13,04%", "13,70%", "14,36%", "15,00%", "15,65%", "16,28%", "16,91%", "17,54%", "18,15%"],
  other: ["1,60%", "4,61%", "5,46%", "6,20%", "6,94%", "7,67%", "8,39%", "9,28%", "9,98%", "10,68%", "11,37%", "12,05%", "12,72%", "13,39%", "14,05%", "14,70%", "15,35%", "15,99%", "16,62%", "17,25%", "17,87%", "18,48%"],
};

const d30Examples = {
  main: ["0,81%", "2,21%", "2,79%", "3,09%", "3,29%"],
  other: ["1,60%", "3,09%", "3,39%", "3,69%", "3,99%"],
};

const d1Presets = {
  under30: {
    main: ["0,96%", "3,75%", "5,13%", "5,88%", "6,61%", "7,34%", "8,07%", "8,91%", "9,62%", "10,31%", "11,00%", "11,69%", "12,37%", "13,04%", "13,70%", "14,36%", "15,00%", "15,65%", "16,28%", "16,91%", "17,54%", "18,15%"],
    other: ["1,60%", "4,61%", "5,46%", "6,20%", "6,94%", "7,67%", "8,39%", "9,28%", "9,98%", "10,68%", "11,37%", "12,05%", "12,72%", "13,39%", "14,05%", "14,70%", "15,35%", "15,99%", "16,62%", "17,25%", "17,87%", "18,48%"],
  },
  over40: {
    main: ["0,81%", "3,45%", "4,83%", "5,58%", "6,31%", "7,04%", "7,77%", "8,61%", "9,32%", "10,01%", "10,70%", "11,39%", "12,07%", "13,04%", "13,70%", "14,36%", "15,00%", "15,65%", "16,28%", "16,91%", "17,54%", "18,15%"],
    other: ["1,60%", "4,61%", "5,46%", "6,20%", "6,94%", "7,67%", "8,39%", "9,28%", "9,98%", "10,68%", "11,37%", "12,05%", "12,72%", "13,39%", "14,05%", "14,70%", "15,35%", "15,99%", "16,62%", "17,25%", "17,87%", "18,48%"],
  },
  exclusive: {
    main: ["0,81%", "3,00%", "4,83%", "5,58%", "6,31%", "7,04%", "7,77%", "8,61%", "9,32%", "10,01%", "10,70%", "11,39%", "12,07%", "13,04%", "13,70%", "14,36%", "15,00%", "15,65%", "16,28%", "16,91%", "17,54%", "18,15%"],
    other: ["1,60%", "4,61%", "5,46%", "6,20%", "6,94%", "7,67%", "8,39%", "9,28%", "9,98%", "10,68%", "11,37%", "12,05%", "12,72%", "13,39%", "14,05%", "14,70%", "15,35%", "15,99%", "16,62%", "17,25%", "17,87%", "18,48%"],
  },
};

const authConfig = {
  sessionKey: "roxinha-authenticated",
  usernameHash: "cdf7e3fc7913e09bdccb30cca2a81a6f0c333d5e437a64bec108818e656e3bb7",
  passwordHash: "19c1f6fcc12c9d3134a5891d96da28e8d1ef5c452d92c02028d10e540273086f",
};

const pageSets = {
  d1: [
    "Capa personalizada",
    "O que é a Roxinha",
    "Conheça nossa maquininha",
    "Por que vender com a Roxinha",
    "Tarifas exclusivas D+1",
    "Condições comerciais",
    "Contato do consultor",
  ],
  d30: [
    "Capa personalizada",
    "O que é a Roxinha",
    "Conheça nossa maquininha",
    "Por que vender com a Roxinha",
    "Tarifas reduzidas D+30",
    "Antecipação de recebíveis",
    "Condições comerciais",
    "Contato do consultor",
  ],
};

const pageSize = { width: 1920, height: 1080 };

const assets = {
  d1: [
    "assets/pages/d1/01-cover-clean.jpg",
    "assets/pages/d1/02-page.jpg",
    "assets/pages/d1/03-page.jpg",
    "assets/pages/d1/04-page.jpg",
    "assets/pages/d1/05-rates-clean.png",
    "assets/pages/d1/06-page.jpg",
    "assets/pages/d1/07-contact-clean.jpg",
  ],
  d30: [
    "assets/pages/d30/01-cover-clean.jpg",
    "assets/pages/d30/02-page.jpg",
    "assets/pages/d30/03-page.jpg",
    "assets/pages/d30/04-page.jpg",
    "assets/pages/d30/05-rates-clean.png",
    "assets/pages/d30/06-anticipation-clean.png",
    "assets/pages/d30/07-page.jpg",
    "assets/pages/d30/08-contact-clean.jpg",
  ],
};

const byteCache = new Map();
let resourceWarmupStarted = false;

const boxes = {
  coverName: { x: 114, y: 924, width: 534, height: 37, font: "openSans700", align: "left", color: "white", maxSize: 68, minSize: 28, yOffset: -3 },
  billing: { x: 580, y: 992, width: 185, height: 24, font: "ibmPlex700", align: "center", color: "white", maxSize: 28, minSize: 12, yOffset: -1 },
  pix: { x: 820, y: 992, width: 276, height: 24, font: "ibmPlex700", align: "center", color: "white", maxSize: 26, minSize: 10, yOffset: -1 },
  consultantName: { x: 112, y: 733, width: 228, height: 32, font: "montserrat700", align: "left", color: "white", maxSize: 31, minSize: 16, yOffset: -1 },
  consultantRole: { x: 111, y: 772, width: 323, height: 27, font: "montserrat500", align: "left", color: "orange", maxSize: 24, minSize: 14, yOffset: -1 },
  consultantPhone: { x: 162, y: 815, width: 251, height: 30, font: "montserrat700", align: "left", color: "white", maxSize: 32, minSize: 16, yOffset: -1 },
  anticipationAuto: { x: 173, y: 609, width: 452, height: 117, font: "montserrat800", align: "center", color: "purple", maxSize: 114, minSize: 34, yOffset: 3 },
  anticipationSpot: { x: 1016, y: 609, width: 451, height: 117, font: "montserrat800", align: "center", color: "white", maxSize: 114, minSize: 34, yOffset: 3 },
};

const d1RateBoxes = {
  mainLeft: [
    { x: 458, y: 473, width: 50, height: 16 },
    { x: 453, y: 511, width: 55, height: 16 },
    { x: 454, y: 549, width: 54, height: 16 },
    { x: 455, y: 587, width: 53, height: 16 },
    { x: 460, y: 625, width: 48, height: 16 },
    { x: 453, y: 663, width: 55, height: 14 },
    { x: 455, y: 701, width: 53, height: 14 },
    { x: 458, y: 739, width: 50, height: 16 },
    { x: 456, y: 777, width: 52, height: 16 },
    { x: 450, y: 815, width: 58, height: 16 },
    { x: 446, y: 853, width: 62, height: 16 },
    { x: 452, y: 891, width: 56, height: 16 },
    { x: 447, y: 929, width: 61, height: 16 },
  ],
  mainRight: [
    { x: 862, y: 472, width: 62, height: 16 },
    { x: 863, y: 510, width: 61, height: 16 },
    { x: 863, y: 548, width: 61, height: 16 },
    { x: 862, y: 586, width: 62, height: 16 },
    { x: 864, y: 624, width: 60, height: 16 },
    { x: 863, y: 662, width: 61, height: 16 },
    { x: 867, y: 700, width: 57, height: 16 },
    { x: 863, y: 738, width: 61, height: 16 },
    { x: 868, y: 776, width: 56, height: 16 },
  ],
  otherLeft: [
    { x: 1326, y: 473, width: 50, height: 14 },
    { x: 1326, y: 511, width: 50, height: 16 },
    { x: 1322, y: 549, width: 54, height: 16 },
    { x: 1323, y: 587, width: 53, height: 16 },
    { x: 1321, y: 625, width: 55, height: 16 },
    { x: 1323, y: 663, width: 53, height: 14 },
    { x: 1323, y: 701, width: 53, height: 16 },
    { x: 1323, y: 739, width: 53, height: 16 },
    { x: 1322, y: 777, width: 54, height: 16 },
    { x: 1314, y: 815, width: 62, height: 16 },
    { x: 1320, y: 853, width: 56, height: 16 },
    { x: 1316, y: 891, width: 60, height: 16 },
    { x: 1317, y: 929, width: 59, height: 16 },
  ],
  otherRight: [
    { x: 1733, y: 472, width: 59, height: 16 },
    { x: 1730, y: 510, width: 62, height: 16 },
    { x: 1730, y: 548, width: 62, height: 16 },
    { x: 1733, y: 586, width: 59, height: 16 },
    { x: 1732, y: 624, width: 60, height: 16 },
    { x: 1732, y: 662, width: 60, height: 16 },
    { x: 1733, y: 700, width: 59, height: 16 },
    { x: 1731, y: 738, width: 61, height: 16 },
    { x: 1729, y: 776, width: 63, height: 16 },
  ],
};

const d30RateBoxes = {
  main: [
    { x: 821, y: 598, width: 71, height: 22 },
    { x: 821, y: 663, width: 67, height: 22 },
    { x: 821, y: 732, width: 74, height: 22 },
    { x: 820, y: 803, width: 77, height: 22 },
    { x: 820, y: 870, width: 74, height: 22 },
  ],
  other: [
    { x: 1688, y: 598, width: 71, height: 22 },
    { x: 1688, y: 663, width: 77, height: 22 },
    { x: 1688, y: 732, width: 74, height: 22 },
    { x: 1688, y: 803, width: 76, height: 22 },
    { x: 1688, y: 870, width: 76, height: 22 },
  ],
};

const loginShell = document.querySelector("#loginShell");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const logoutButton = document.querySelector("#logoutButton");
const form = document.querySelector("#proposalForm");
const mainRates = document.querySelector("#mainRates");
const otherRates = document.querySelector("#otherRates");
const anticipationBlock = document.querySelector("#anticipationBlock");
const d1PresetBar = document.querySelector("#d1PresetBar");
const groupFillButtons = document.querySelectorAll("[data-group-fill-button]");
const previewTitle = document.querySelector("#previewTitle");
const previewTitleMobile = document.querySelector("#previewTitleMobile");
const previewClient = document.querySelector("#previewClient");
const previewClientMobile = document.querySelector("#previewClientMobile");
const previewCopy = document.querySelector("#previewCopy");
const previewCopyMobile = document.querySelector("#previewCopyMobile");
const pageList = document.querySelector("#pageList");
const previewTypeChip = document.querySelector("#previewTypeChip");
const previewBilling = document.querySelector("#previewBilling");
const previewPix = document.querySelector("#previewPix");
const previewMainRates = document.querySelector("#previewMainRates");
const previewOtherRates = document.querySelector("#previewOtherRates");
const previewAnticipationGroup = document.querySelector("#previewAnticipationGroup");
const previewAuto = document.querySelector("#previewAuto");
const previewSpot = document.querySelector("#previewSpot");
const previewConsultant = document.querySelector("#previewConsultant");
const previewPhone = document.querySelector("#previewPhone");
const pageCount = document.querySelector("#pageCount");
const structureText = document.querySelector("#structureText");
const summaryStripMobile = document.querySelector("#summaryStripMobile");
const actionNote = document.querySelector("#actionNote");

function setAuthenticatedState(isAuthenticated) {
  loginShell.classList.toggle("hidden", isAuthenticated);
  appShell.classList.toggle("hidden", !isAuthenticated);
  if (isAuthenticated) warmResourceCache();
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function saveSession() {
  localStorage.setItem(authConfig.sessionKey, "1");
}

function clearSession() {
  localStorage.removeItem(authConfig.sessionKey);
}

function hasSession() {
  return localStorage.getItem(authConfig.sessionKey) === "1";
}

async function handleLogin(event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const username = formData.get("username")?.trim() || "";
  const password = formData.get("password")?.trim() || "";
  const [usernameHash, passwordHash] = await Promise.all([sha256(username), sha256(password)]);
  const isValid = usernameHash === authConfig.usernameHash && passwordHash === authConfig.passwordHash;

  loginError.textContent = "Usuario ou senha invalidos.";
  loginError.classList.toggle("hidden", isValid);

  if (!isValid) return;

  saveSession();
  loginForm.reset();
  setAuthenticatedState(true);
}

function handleLogout() {
  clearSession();
  setAuthenticatedState(false);
  loginError.classList.add("hidden");
}

function getProposalType() {
  return new FormData(form).get("proposalType") || "d1";
}

function makeRateInput(group, label, index) {
  const wrapper = document.createElement("label");
  wrapper.textContent = label;

  const input = document.createElement("input");
  input.name = `${group}_${index}`;
  input.type = "text";
  input.inputMode = "decimal";
  input.placeholder = "0,00%";
  input.required = true;

  wrapper.append(input);
  return wrapper;
}

function renderRates() {
  const type = getProposalType();
  const labels = type === "d1" ? d1RateLabels : d30RateLabels;
  const anticipationInputs = anticipationBlock.querySelectorAll("input");
  const isD30 = type === "d30";
  const isD1 = type === "d1";

  mainRates.replaceChildren(...labels.map((label, index) => makeRateInput("main", label, index)));
  otherRates.replaceChildren(...labels.map((label, index) => makeRateInput("other", label, index)));
  anticipationBlock.classList.toggle("hidden", !isD30);
  d1PresetBar.classList.toggle("hidden", !isD1);
  groupFillButtons.forEach((button) => button.classList.toggle("hidden", isD1));
  anticipationInputs.forEach((input) => {
    input.disabled = !isD30;
    input.required = isD30;
    if (!isD30) input.setCustomValidity("");
  });
  updatePreview();
}

function updatePreview() {
  const type = getProposalType();
  const data = getFormData();
  const client = data.clientName;
  const pages = pageSets[type];
  const isD30 = type === "d30";
  const pdfTitle = isD30 ? "Proposta D+30" : "Proposta D+1";
  const pdfCopy = isD30 ? "PDF com 8 páginas no layout oficial." : "PDF com 7 páginas no layout oficial.";
  const pageCountText = isD30 ? "8" : "7";
  const billingText = data.billingAverage || "Não informado";
  const pixText = data.pixRate || "ISENTO";
  const mainSummary = data.mainRates.filter((rate) => rate.value).slice(0, 5);
  const otherSummary = data.otherRates.filter((rate) => rate.value).slice(0, 5);

  previewTitle.textContent = pdfTitle;
  previewTitleMobile.textContent = pdfTitle;
  previewClient.textContent = client || "Informe o cliente";
  previewClientMobile.textContent = client || "Informe o cliente";
  previewCopy.textContent = pdfCopy;
  previewCopyMobile.textContent = pdfCopy;
  previewTypeChip.textContent = isD30 ? "D+30" : "D+1";
  previewBilling.textContent = billingText;
  previewPix.textContent = pixText;
  previewConsultant.textContent = data.consultantName || "Não informado";
  previewPhone.textContent = data.consultantPhone || "-";
  previewAuto.textContent = data.autoAnticipation || "-";
  previewSpot.textContent = data.spotAnticipation || "-";
  previewAnticipationGroup.classList.toggle("hidden", !isD30);
  pageCount.textContent = pageCountText;
  structureText.textContent = isD30 ? "Capa personalizada + 7 páginas" : "Capa personalizada + 6 páginas";
  actionNote.textContent = `PDF com ${pageCountText} páginas`;

  pageList.replaceChildren(
    ...pages.map((page, index) => {
      const item = document.createElement("div");
      item.className = "page-pill";
      item.innerHTML = `<span>${index + 1}</span>${page}`;
      return item;
    }),
  );

  previewMainRates.replaceChildren(
    ...mainSummary.map((rate) => {
      const item = document.createElement("div");
      item.className = "mini-rate-item";
      item.innerHTML = `<span>${rate.label}</span><strong>${rate.value}</strong>`;
      return item;
    }),
  );

  previewOtherRates.replaceChildren(
    ...otherSummary.map((rate) => {
      const item = document.createElement("div");
      item.className = "mini-rate-item";
      item.innerHTML = `<span>${rate.label}</span><strong>${rate.value}</strong>`;
      return item;
    }),
  );

  const chips = [
    { label: "Proposta", value: isD30 ? "D+30" : "D+1" },
    { label: "Faturamento", value: billingText },
    { label: "PIX", value: pixText },
    { label: "Antecipação", value: isD30 ? data.autoAnticipation || "-" : "Não se aplica" },
  ];

  summaryStripMobile.replaceChildren(
    ...chips.map((chip) => {
      const item = document.createElement("div");
      item.className = "summary-chip";
      item.innerHTML = `<span>${chip.label}</span><strong>${chip.value}</strong>`;
      return item;
    }),
  );
}

function fillExamples(group) {
  const type = getProposalType();
  const values = type === "d1" ? d1Examples[group] : d30Examples[group];
  values.forEach((value, index) => {
    const input = form.elements[`${group}_${index}`];
    if (input) input.value = value;
  });
  updatePreview();
}

function fillD1Preset(presetName) {
  const preset = d1Presets[presetName];
  if (!preset || getProposalType() !== "d1") return;

  ["main", "other"].forEach((group) => {
    preset[group].forEach((value, index) => {
      const input = form.elements[`${group}_${index}`];
      if (input) input.value = value;
    });
  });

  updatePreview();
}

function digitsOnly(value) {
  return String(value || "").replace(/\D/g, "");
}

function formatBillingAverage(value) {
  const digits = digitsOnly(value);
  if (!digits) return "";
  return `R$ ${Number(digits).toLocaleString("pt-BR")}`;
}

function formatPercent(value) {
  const digits = digitsOnly(value);
  if (!digits) return "";
  const padded = digits.padStart(3, "0");
  const integerPart = String(Number(padded.slice(0, -2)));
  const decimalPart = padded.slice(-2);
  return `${integerPart},${decimalPart}%`;
}

function readRates(group) {
  const type = getProposalType();
  const labels = type === "d1" ? d1RateLabels : d30RateLabels;
  return labels.map((label, index) => ({
    label,
    value: form.elements[`${group}_${index}`]?.value.trim() || "",
  }));
}

function getFormData() {
  const formData = new FormData(form);
  return {
    type: formData.get("proposalType"),
    clientName: formData.get("clientName")?.trim() || "",
    billingAverage: formData.get("billingAverage")?.trim() || "",
    pixRate: formData.get("pixRate") || "",
    consultantName: formData.get("consultantName")?.trim() || "",
    consultantRole: formData.get("consultantRole")?.trim() || "",
    consultantPhone: formData.get("consultantPhone")?.trim() || "",
    autoAnticipation: formData.get("autoAnticipation")?.trim() || "",
    spotAnticipation: formData.get("spotAnticipation")?.trim() || "",
    mainRates: readRates("main"),
    otherRates: readRates("other"),
  };
}

function downloadBytes(bytes, filename) {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function imageBoxToPdf(box, size, pageHeight) {
  return {
    x: box.x,
    y: pageHeight - box.y - box.height + (box.yOffset || 0),
    width: box.width,
    height: box.height,
    size,
  };
}

function fitFontSize(font, text, width, height, maxSize, minSize = 10) {
  let size = maxSize;
  while (size > minSize) {
    const textWidth = font.widthOfTextAtSize(text, size);
    const textHeight = font.heightAtSize(size, { descender: true });
    if (textWidth <= width && textHeight <= height * 1.2) {
      return size;
    }
    size -= 0.5;
  }
  return minSize;
}

function colorFromName(rgb, name) {
  if (name === "white") return rgb(1, 1, 1);
  if (name === "orange") return rgb(1, 0.66, 0);
  return rgb(0.44, 0.13, 0.8);
}

function drawTextInBox(page, fonts, rgb, text, box) {
  if (!text) return;

  const font = fonts[box.font];
  const color = colorFromName(rgb, box.color);
  const size = fitFontSize(font, text, box.width, box.height, box.maxSize, box.minSize);
  const pdfBox = imageBoxToPdf(box, size, page.getHeight());
  const textWidth = font.widthOfTextAtSize(text, size);
  const textHeight = font.heightAtSize(size, { descender: true });

  let x = pdfBox.x;
  if (box.align === "center") {
    x += Math.max(0, (box.width - textWidth) / 2);
  } else if (box.align === "right") {
    x += Math.max(0, box.width - textWidth);
  }

  const y = pdfBox.y + Math.max(0, (box.height - textHeight) / 2);

  page.drawText(text, {
    x,
    y,
    size,
    font,
    color,
  });
}

async function fetchBytes(path) {
  if (byteCache.has(path)) return byteCache.get(path);

  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Nao foi possivel carregar ${path}.`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  byteCache.set(path, bytes);
  return bytes;
}

async function embedImage(doc, path, bytes) {
  const normalizedPath = path.toLowerCase();
  if (normalizedPath.endsWith(".jpg") || normalizedPath.endsWith(".jpeg")) {
    return doc.embedJpg(bytes);
  }
  return doc.embedPng(bytes);
}

function getResourcePaths() {
  return [
    "assets/fonts/Montserrat-500.ttf",
    "assets/fonts/Montserrat-700.ttf",
    "assets/fonts/Montserrat-800.ttf",
    "assets/fonts/OpenSans-700.ttf",
    "assets/fonts/IBMPlexSans-700.ttf",
    ...assets.d1,
    ...assets.d30,
  ];
}

function warmResourceCache() {
  if (resourceWarmupStarted) return;
  resourceWarmupStarted = true;
  Promise.allSettled(getResourcePaths().map((path) => fetchBytes(path))).catch(() => {});
}

async function loadFonts(doc) {
  const { StandardFonts } = window.PDFLib;
  const fallbackRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fallbackBold = await doc.embedFont(StandardFonts.HelveticaBold);

  const fonts = {
    montserrat500: fallbackRegular,
    montserrat700: fallbackBold,
    montserrat800: fallbackBold,
    openSans700: fallbackBold,
    ibmPlex700: fallbackBold,
  };

  if (!window.fontkit) return fonts;

  doc.registerFontkit(window.fontkit);

  const [m500, m700, m800, open700, ibm700] = await Promise.all([
    fetchBytes("assets/fonts/Montserrat-500.ttf"),
    fetchBytes("assets/fonts/Montserrat-700.ttf"),
    fetchBytes("assets/fonts/Montserrat-800.ttf"),
    fetchBytes("assets/fonts/OpenSans-700.ttf"),
    fetchBytes("assets/fonts/IBMPlexSans-700.ttf"),
  ]);

  if (m500) fonts.montserrat500 = await doc.embedFont(m500);
  if (m700) fonts.montserrat700 = await doc.embedFont(m700);
  if (m800) fonts.montserrat800 = await doc.embedFont(m800);
  if (open700) fonts.openSans700 = await doc.embedFont(open700);
  if (ibm700) fonts.ibmPlex700 = await doc.embedFont(ibm700);

  return fonts;
}

function drawD1Rates(page, fonts, rgb, data) {
  const rateStyle = { font: "montserrat700", align: "right", color: "purple", maxSize: 33, minSize: 14 };
  const leftValues = data.mainRates.slice(0, 13);
  const rightValues = data.mainRates.slice(13);
  const otherLeftValues = data.otherRates.slice(0, 13);
  const otherRightValues = data.otherRates.slice(13);

  leftValues.forEach((rate, index) => drawTextInBox(page, fonts, rgb, rate.value, { ...d1RateBoxes.mainLeft[index], ...rateStyle }));
  rightValues.forEach((rate, index) => drawTextInBox(page, fonts, rgb, rate.value, { ...d1RateBoxes.mainRight[index], ...rateStyle }));
  otherLeftValues.forEach((rate, index) => drawTextInBox(page, fonts, rgb, rate.value, { ...d1RateBoxes.otherLeft[index], ...rateStyle }));
  otherRightValues.forEach((rate, index) => drawTextInBox(page, fonts, rgb, rate.value, { ...d1RateBoxes.otherRight[index], ...rateStyle }));

  drawTextInBox(page, fonts, rgb, data.billingAverage, boxes.billing);
  drawTextInBox(page, fonts, rgb, `TAXA DO PIX: ${data.pixRate}`, boxes.pix);
}

function drawD30Rates(page, fonts, rgb, data) {
  const rateStyle = { font: "montserrat700", align: "right", color: "purple", maxSize: 40, minSize: 16, yOffset: -1 };
  data.mainRates.forEach((rate, index) => drawTextInBox(page, fonts, rgb, rate.value, { ...d30RateBoxes.main[index], ...rateStyle }));
  data.otherRates.forEach((rate, index) => drawTextInBox(page, fonts, rgb, rate.value, { ...d30RateBoxes.other[index], ...rateStyle }));

  drawTextInBox(page, fonts, rgb, data.billingAverage, boxes.billing);
  drawTextInBox(page, fonts, rgb, `TAXA DO PIX: ${data.pixRate}`, boxes.pix);
}

function drawConsultant(page, fonts, rgb, data) {
  drawTextInBox(page, fonts, rgb, data.consultantName, boxes.consultantName);
  drawTextInBox(page, fonts, rgb, data.consultantRole, boxes.consultantRole);
  drawTextInBox(page, fonts, rgb, data.consultantPhone, boxes.consultantPhone);
}

async function generatePdf(data) {
  const { PDFDocument, rgb } = window.PDFLib;
  const doc = await PDFDocument.create();
  const fonts = await loadFonts(doc);

  const imagePaths = assets[data.type];
  const imageBytes = await Promise.all(imagePaths.map((path) => fetchBytes(path)));
  const embeddedImages = await Promise.all(imageBytes.map((bytes, index) => embedImage(doc, imagePaths[index], bytes)));

  embeddedImages.forEach((image) => {
    const page = doc.addPage([pageSize.width, pageSize.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: pageSize.width,
      height: pageSize.height,
    });
  });

  const pages = doc.getPages();
  drawTextInBox(pages[0], fonts, rgb, data.clientName, boxes.coverName);

  if (data.type === "d1") {
    drawD1Rates(pages[4], fonts, rgb, data);
    drawConsultant(pages[6], fonts, rgb, data);
  } else {
    drawD30Rates(pages[4], fonts, rgb, data);
    drawTextInBox(pages[5], fonts, rgb, data.autoAnticipation, boxes.anticipationAuto);
    drawTextInBox(pages[5], fonts, rgb, data.spotAnticipation, boxes.anticipationSpot);
    drawConsultant(pages[7], fonts, rgb, data);
  }

  const pdfBytes = await doc.save();
  const safeClient = (data.clientName || "cliente").replace(/[^\wÀ-ÿ-]+/g, "_");
  downloadBytes(pdfBytes, `proposta-roxinha-${safeClient}.pdf`);
}

form.addEventListener("input", (event) => {
  const target = event.target;

  if (target instanceof HTMLInputElement) {
    if (target.name === "billingAverage") {
      target.value = formatBillingAverage(target.value);
    }

    if (
      target.name === "autoAnticipation" ||
      target.name === "spotAnticipation" ||
      target.name.startsWith("main_") ||
      target.name.startsWith("other_")
    ) {
      target.value = formatPercent(target.value);
    }
  }

  updatePreview();
});

form.addEventListener("change", (event) => {
  if (event.target.name === "proposalType") renderRates();
  updatePreview();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!window.PDFLib) {
    alert("A biblioteca de PDF ainda nao carregou. Aguarde alguns segundos e tente novamente.");
    return;
  }

  generatePdf(getFormData()).catch((error) => {
    console.error(error);
    alert("Nao foi possivel gerar o PDF.");
  });
});

document.querySelectorAll("[data-fill-group]").forEach((button) => {
  button.addEventListener("click", () => fillExamples(button.dataset.fillGroup));
});

document.querySelectorAll("[data-fill-preset]").forEach((button) => {
  button.addEventListener("click", () => fillD1Preset(button.dataset.fillPreset));
});

document.querySelector("#clearForm").addEventListener("click", () => {
  form.reset();
  renderRates();
});

loginForm.addEventListener("submit", (event) => {
  handleLogin(event).catch((error) => {
    console.error(error);
    loginError.textContent = "Nao foi possivel validar o acesso agora.";
    loginError.classList.remove("hidden");
  });
});

logoutButton.addEventListener("click", handleLogout);

renderRates();
setAuthenticatedState(hasSession());
