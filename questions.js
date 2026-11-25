const QUESTIONS = [
  {
    id: 1,
    source: "Matura Maj 2026, zad. 1",
    topic: "Liczby rzeczywiste (potęgi i pierwiastki)",
    question: "Liczba $\\sqrt{\\frac{25}{8}} \\cdot \\sqrt{2} + 2^{-1}$ jest równa",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctIndex: 2,
    explanation: "Korzystamy z własności pierwiastków oraz potęg o wykładniku ujemnym: $\\sqrt{\\frac{25}{8}} \\cdot \\sqrt{2} + 2^{-1} = \\sqrt{\\frac{25}{8} \\cdot 2} + \\frac{1}{2} = \\sqrt{\\frac{25}{4}} + \\frac{1}{2} = \\frac{5}{2} + \\frac{1}{2} = \\frac{6}{2} = 3$."
  },
  {
    id: 2,
    source: "Matura Maj 2026, zad. 2",
    topic: "Procent składany",
    question: "Klient wpłacił do banku $10\\,000\\text{ zł}$ na lokatę dwuletnią. Po każdym rocznym okresie oszczędzania bank dolicza odsetki w wysokości $6\\%$ od kwoty bieżącego kapitału znajdującego się na lokacie – zgodnie z procentem składanym. Po dwóch latach oszczędzania łączna wartość doliczonych odsetek na tej lokacie (bez uwzględniania podatków) jest równa",
    options: ["$1200\\text{ zł}$", "$1236\\text{ zł}$", "$1836\\text{ zł}$", "$3600\\text{ zł}$"],
    correctIndex: 1,
    explanation: "Kapitał po 2 latach wynosi $K_2 = 10\\,000 \\cdot (1 + 0{,}06)^2 = 10\\,000 \\cdot 1{,}06^2 = 10\\,000 \\cdot 1{,}1236 = 11\\,236\\text{ zł}$. Odejmując kapitał początkowy, otrzymujemy łączną wartość odsetek: $11\\,236\\text{ zł} - 10\\,000\\text{ zł} = 1236\\text{ zł}$."
  },
  {
    id: 3,
    source: "Matura Maj 2026, zad. 3",
    topic: "Liczby rzeczywiste (potęgi i pierwiastki)",
    question: "Liczba $\\sqrt{5\\sqrt{5}}$ jest równa",
    options: [
      "$5^{\\frac{1}{4}}$",
      "$5^{\\frac{1}{2}}$",
      "$5^{\\frac{3}{4}}$",
      "$5$"
    ],
    correctIndex: 2,
    explanation: "Zamieniamy pierwiastki na potęgi o wykładniku wymiernym: $\\sqrt{5\\sqrt{5}} = (5 \\cdot 5^{\\frac{1}{2}})^{\\frac{1}{2}} = (5^{1 + \\frac{1}{2}})^{\\frac{1}{2}} = (5^{\\frac{3}{2}})^{\\frac{1}{2}} = 5^{\\frac{3}{2} \\cdot \\frac{1}{2}} = 5^{\\frac{3}{4}}$."
  },
  {
    id: 4,
    source: "Matura Maj 2026, zad. 4",
    topic: "Logarytmy",
    question: "Liczba $\\log_8 4 - \\log_8 32$ jest równa",
    options: [
      "$(-2)$",
      "$(-1)$",
      "$1$",
      "$2$"
    ],
    correctIndex: 1,
    explanation: "Stosujemy wzór na różnicę logarytmów o tej samej podstawie: $\\log_8 4 - \\log_8 32 = \\log_8 \\frac{4}{32} = \\log_8 \\frac{1}{8} = \\log_8 8^{-1} = -1$."
  },
  {
    id: 5,
    source: "Matura Maj 2026, zad. 5",
    topic: "Liczby rzeczywiste (podzielność i zapis dziesiętny)",
    question: "Oceń prawdziwość poniższych stwierdzeń (P – prawda, F – fałsz):\n1. Liczba naturalna $4^{12} \\cdot 5^{24}$ jest podzielna przez $20$.\n2. Liczba naturalna $4^{12} \\cdot 5^{24}$ jest w zapisie dziesiętnym liczbą 25-cyfrową.",
    options: [
      "PP",
      "PF",
      "FP",
      "FF"
    ],
    correctIndex: 0,
    explanation: "Przekształcamy liczbę: $4^{12} \\cdot 5^{24} = (2^2)^{12} \\cdot 5^{24} = 2^{24} \\cdot 5^{24} = (2 \\cdot 5)^{24} = 10^{24}$.\n1. Liczba $10^{24} = 10 \\cdot 10^{23} = 20 \\cdot 5 \\cdot 10^{23}$ jest wielokrotnością $20$, więc jest podzielna przez $20$ (Prawda).\n2. Liczba $10^{24}$ ma w zapisie dziesiętnym jedynkę i $24$ zera, co daje łącznie $25$ cyfr (Prawda)."
  },
  {
    id: 6,
    source: "Matura Maj 2026, zad. 6",
    topic: "Wyrażenia algebraiczne (wzory skróconego mnożenia)",
    question: "Wartość wyrażenia $x^2 + 10x + 25$ dla $x = \\sqrt{2} - 5$ jest równa",
    options: [
      "$2$",
      "$\\sqrt{2}$",
      "$2 - 20\\sqrt{2}$",
      "$62 - 10\\sqrt{2}$"
    ],
    correctIndex: 0,
    explanation: "Zwijamy wyrażenie ze wzoru skróconego mnożenia: $x^2 + 10x + 25 = (x + 5)^2$. Podstawiamy $x = \\sqrt{2} - 5$: $(\\sqrt{2} - 5 + 5)^2 = (\\sqrt{2})^2 = 2$."
  }

];