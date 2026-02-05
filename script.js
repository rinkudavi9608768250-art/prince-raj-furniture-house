const dictionary = {
  en: {
    languageTitle: "Choose Your Language",
    languageSubtitle: "अपनी पसंद की भाषा चुनें / Select your preferred language",
    ownerLabel: "Owner: Tunni Mistri",
    heroEyebrow: "Luxury Wooden Craftsmanship",
    heroTitle: "Premium Custom Wooden Furniture – Made to Order",
    heroSubtitle:
      "Crafted with quality wood, precision finishing, and custom designs tailored to your space and style.",
    whatsappInquiry: "Send Inquiry on WhatsApp",
    callNow: "Call Now",
    servicesTitle: "Products & Services",
    servicesLead: "Customer can give any design, we make it as required.",
    bed: "Bed",
    sofa: "Sofa",
    wardrobe: "Almari / Wardrobe",
    table: "Table",
    chair: "Chair",
    doorWindow: "Door & Window",
    modular: "Modular Furniture",
    custom: "Custom Wooden Furniture",
    contactPrice: "Contact for Price on WhatsApp",
    galleryTitle: "Gallery",
    galleryLead: "Sample designs – custom designs available.",
    paymentTitle: "Payment Terms",
    paymentAdvance: "50% Advance Payment required",
    paymentBalance: "Remaining payment after delivery",
    hoursTitle: "Working Hours",
    hoursText: "Monday – Saturday: 9:00 AM – 7:00 PM",
    aboutTitle: "About Us",
    aboutText:
      "Prince Raj Furniture House, led by Tunni Mistri, is built on skilled craftsmanship and honest service. We use quality wood and refined finishing to create durable, elegant furniture for homes and businesses. From traditional carpentry to modern modular setups, every project is customized with care, precision, and a promise of customer satisfaction.",
    contactTitle: "Contact Us",
    addressLabel: "Madhopur Chandi, Nalanda, Bihar, India - 803108",
    quickContact: "Quick Contact",
    formName: "Name",
    formPhone: "Phone Number",
    formMessage: "Message",
    sendMessage: "Send Message",
    customAccepted: "All custom furniture designs accepted"
  },
  hi: {
    languageTitle: "अपनी भाषा चुनें",
    languageSubtitle: "अपनी पसंद की भाषा चुनें / Select your preferred language",
    ownerLabel: "मालिक: टुन्नी मिस्त्री",
    heroEyebrow: "लक्ज़री वुडन कारीगरी",
    heroTitle: "प्रीमियम कस्टम लकड़ी का फर्नीचर – ऑर्डर पर तैयार",
    heroSubtitle:
      "उत्तम लकड़ी, बेहतरीन फिनिशिंग और आपकी पसंद के अनुसार कस्टम डिज़ाइन के साथ फर्नीचर तैयार किया जाता है।",
    whatsappInquiry: "व्हाट्सऐप पर पूछताछ भेजें",
    callNow: "अभी कॉल करें",
    servicesTitle: "उत्पाद और सेवाएँ",
    servicesLead: "ग्राहक कोई भी डिज़ाइन दे सकते हैं, हम उसी अनुसार बनाते हैं।",
    bed: "बेड",
    sofa: "सोफा",
    wardrobe: "अलमारी / वार्डरोब",
    table: "टेबल",
    chair: "कुर्सी",
    doorWindow: "दरवाज़ा और खिड़की",
    modular: "मॉड्यूलर फर्नीचर",
    custom: "कस्टम लकड़ी का फर्नीचर",
    contactPrice: "कीमत के लिए व्हाट्सऐप पर संपर्क करें",
    galleryTitle: "गैलरी",
    galleryLead: "नमूना डिज़ाइन – कस्टम डिज़ाइन उपलब्ध।",
    paymentTitle: "भुगतान शर्तें",
    paymentAdvance: "50% अग्रिम भुगतान आवश्यक",
    paymentBalance: "शेष भुगतान डिलीवरी के बाद",
    hoursTitle: "कार्य समय",
    hoursText: "सोमवार – शनिवार: सुबह 9:00 बजे – शाम 7:00 बजे",
    aboutTitle: "हमारे बारे में",
    aboutText:
      "प्रिंस राज फर्नीचर हाउस, टुन्नी मिस्त्री के नेतृत्व में, कुशल कारीगरी और ईमानदार सेवा पर आधारित है। हम घर और व्यवसाय के लिए टिकाऊ, आकर्षक और उच्च गुणवत्ता वाला लकड़ी का फर्नीचर बनाते हैं। पारंपरिक बढ़ईगिरी से लेकर आधुनिक मॉड्यूलर सेटअप तक, हर प्रोजेक्ट को पूरी सावधानी, सटीकता और ग्राहक संतुष्टि के वादे के साथ तैयार किया जाता है।",
    contactTitle: "संपर्क करें",
    addressLabel: "माधोपुर चंडी, नालंदा, बिहार, भारत - 803108",
    quickContact: "त्वरित संपर्क",
    formName: "नाम",
    formPhone: "फोन नंबर",
    formMessage: "संदेश",
    sendMessage: "संदेश भेजें",
    customAccepted: "सभी कस्टम फर्नीचर डिज़ाइन स्वीकार हैं"
  }
};

const whatsappMessage = encodeURIComponent("Hello, I want to inquire about custom wooden furniture.");
const whatsappUrl = `https://wa.me/919472861659?text=${whatsappMessage}`;

const setLanguage = (lang) => {
  const selected = dictionary[lang] ? lang : "en";
  localStorage.setItem("prfh_lang", selected);
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = dictionary[selected][key] || dictionary.en[key] || node.textContent;
  });

  const toggle = document.getElementById("langToggle");
  toggle.textContent = selected === "en" ? "हिंदी" : "English";
};

["whatsappCta", "whatsappPrice", "whatsappContact", "footerWhatsapp", "floatingWhatsApp"].forEach((id) => {
  const anchor = document.getElementById(id);
  if (anchor) anchor.href = whatsappUrl;
});

const overlay = document.getElementById("languageOverlay");
const saved = localStorage.getItem("prfh_lang");

if (saved) {
  setLanguage(saved);
  overlay.classList.add("hidden");
}

overlay.querySelectorAll("button[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    overlay.classList.add("hidden");
  });
});

document.getElementById("langToggle").addEventListener("click", () => {
  const next = document.documentElement.lang === "en" ? "hi" : "en";
  setLanguage(next);
});

if (!saved) setLanguage("en");
