const STORAGE_KEY = "cppTrackerLearnCppProgressV3";
const LEGACY_STORAGE_KEY = "cppTrackerLearnCppProgressV2";
const PROFILE_KEY = "cppTrackerProfileV1";

const syllabusByLevel = [
  {
    level: "Beginner",
    description: "Foundations, syntax, variables, and early program flow.",
    chapters: [
      {
        number: 0,
        title: "Introduction / Getting started with C++",
        lessons: [
          "0.1 -- Introduction to these tutorials",
          "0.2 -- Introduction to programming languages",
          "0.3 -- Introduction to C/C++",
          "0.4 -- Introduction to C++ development",
          "0.x -- Chapter 0 summary and quiz"
        ]
      },
      {
        number: 1,
        title: "C++ Basics",
        lessons: [
          "1.1 -- Statements and the structure of a program",
          "1.2 -- Comments",
          "1.3 -- Introduction to objects and variables",
          "1.4 -- Variable assignment and initialization",
          "1.5 -- Introduction to iostream: cout, cin, and endl",
          "1.6 -- Uninitialized variables and undefined behavior",
          "1.7 -- Keywords and naming identifiers",
          "1.8 -- Whitespace and basic formatting",
          "1.9 -- Introduction to literals and operators",
          "1.10 -- Introduction to expressions",
          "1.11 -- Developing your first program",
          "1.x -- Chapter 1 summary and quiz"
        ]
      },
      {
        number: 2,
        title: "Functions and Files",
        lessons: [
          "2.1 -- Introduction to functions",
          "2.2 -- Function return values",
          "2.3 -- Introduction to function parameters and arguments",
          "2.7 -- Forward declarations and definitions",
          "2.10 -- Introduction to the preprocessor",
          "2.x -- Chapter 2 summary and quiz"
        ]
      },
      {
        number: 3,
        title: "Debugging C++ Programs",
        lessons: [
          "3.1 -- Syntax and semantic errors",
          "3.2 -- The debugging process",
          "3.5 -- More debugging tactics",
          "3.8 -- Finding issues before they become bugs",
          "3.x -- Chapter 3 summary and quiz"
        ]
      },
      {
        number: 4,
        title: "Fundamental Data Types",
        lessons: [
          "4.1 -- Introduction to fundamental data types",
          "4.5 -- Unsigned integers and why to avoid them",
          "4.8 -- Floating point numbers",
          "4.12 -- Introduction to type conversion",
          "4.x -- Chapter 4 summary and quiz"
        ]
      },
      {
        number: 5,
        title: "Operators",
        lessons: [
          "5.1 -- Operator precedence and associativity",
          "5.2 -- Arithmetic operators",
          "5.6 -- Relational operators and floating point comparisons",
          "5.8 -- Logical operators",
          "5.x -- Chapter 5 summary and quiz"
        ]
      },
      {
        number: 6,
        title: "Bit Manipulation",
        lessons: [
          "6.1 -- Bit flags and bit masks",
          "6.2 -- Bitwise operators",
          "6.3 -- Bit manipulation with std::bitset",
          "6.x -- Chapter 6 summary and quiz"
        ]
      },
      {
        number: 7,
        title: "Scope, Duration, and Linkage",
        lessons: [
          "7.1 -- Variable scope and block scope",
          "7.5 -- Variable shadowing and name hiding",
          "7.8 -- Global variables and static local variables",
          "7.10 -- Internal linkage",
          "7.x -- Chapter 7 summary and quiz"
        ]
      }
    ]
  },
  {
    level: "Intermediate",
    description: "Control flow, arrays, pointers, references, and core program structure.",
    chapters: [
      {
        number: 8,
        title: "Control Flow and Error Handling",
        lessons: [
          "8.1 -- Introduction to control flow",
          "8.5 -- if statements",
          "8.8 -- switch statement basics",
          "8.14 -- for loops",
          "8.x -- Chapter 8 summary and quiz"
        ]
      },
      {
        number: 9,
        title: "Type Conversion and Function Overload Resolution",
        lessons: [
          "9.1 -- Implicit type conversion",
          "9.4 -- Numeric conversions",
          "9.6 -- Introduction to type promotion and usual arithmetic conversions",
          "9.9 -- Function overload resolution",
          "9.x -- Chapter 9 summary and quiz"
        ]
      },
      {
        number: 10,
        title: "Compound Types: References and Pointers",
        lessons: [
          "10.1 -- Introduction to compound data types",
          "10.3 -- Lvalue references",
          "10.7 -- Introduction to pointers",
          "10.12 -- Null pointers",
          "10.x -- Chapter 10 summary and quiz"
        ]
      },
      {
        number: 11,
        title: "Arrays, Strings, and Dynamic Allocation",
        lessons: [
          "11.1 -- Arrays and array indexing",
          "11.5 -- C-style strings",
          "11.8 -- Dynamic memory allocation with new and delete",
          "11.14 -- std::string and std::string_view",
          "11.x -- Chapter 11 summary and quiz"
        ]
      },
      {
        number: 12,
        title: "Functions (Advanced)",
        lessons: [
          "12.1 -- Function pointers",
          "12.3 -- Returning references and pointers",
          "12.7 -- Lambda expressions introduction",
          "12.10 -- Function templates basics",
          "12.x -- Chapter 12 summary and quiz"
        ]
      },
      {
        number: 13,
        title: "Basic Object-Oriented Programming",
        lessons: [
          "13.1 -- Welcome to object-oriented programming",
          "13.3 -- Public and private members",
          "13.8 -- Constructors",
          "13.11 -- Class code and header/source split",
          "13.x -- Chapter 13 summary and quiz"
        ]
      },
      {
        number: 14,
        title: "Operator Overloading",
        lessons: [
          "14.1 -- Introduction to operator overloading",
          "14.4 -- Overloading arithmetic operators",
          "14.7 -- Overloading the comparison operators",
          "14.11 -- Overloading typecasts",
          "14.x -- Chapter 14 summary and quiz"
        ]
      },
      {
        number: 15,
        title: "Object Relationships",
        lessons: [
          "15.1 -- Object relationships overview",
          "15.3 -- Composition",
          "15.6 -- Aggregation",
          "15.8 -- Association and dependency",
          "15.x -- Chapter 15 summary and quiz"
        ]
      }
    ]
  },
  {
    level: "Advanced",
    description: "Inheritance, templates, exceptions, STL, and practical C++ architecture.",
    chapters: [
      {
        number: 16,
        title: "Inheritance",
        lessons: [
          "16.1 -- Introduction to inheritance",
          "16.4 -- Access specifiers with inheritance",
          "16.7 -- Constructors and inheritance",
          "16.x -- Chapter 16 summary and quiz"
        ]
      },
      {
        number: 17,
        title: "Virtual Functions",
        lessons: [
          "17.1 -- Polymorphism and virtual functions",
          "17.3 -- The override and final specifiers",
          "17.8 -- Virtual destructors",
          "17.x -- Chapter 17 summary and quiz"
        ]
      },
      {
        number: 18,
        title: "Templates and Classes",
        lessons: [
          "18.1 -- Function templates revisited",
          "18.4 -- Class templates",
          "18.8 -- Template non-type parameters",
          "18.x -- Chapter 18 summary and quiz"
        ]
      },
      {
        number: 19,
        title: "Class Templates and Related Topics",
        lessons: [
          "19.1 -- Template specialization",
          "19.4 -- Partial template specialization",
          "19.7 -- Template metaprogramming basics",
          "19.x -- Chapter 19 summary and quiz"
        ]
      },
      {
        number: 20,
        title: "Exceptions",
        lessons: [
          "20.1 -- The need for exceptions",
          "20.3 -- Throwing and catching exceptions",
          "20.6 -- Exception specifications and best practices",
          "20.x -- Chapter 20 summary and quiz"
        ]
      },
      {
        number: 21,
        title: "Move Semantics and Smart Pointers",
        lessons: [
          "21.1 -- Intro to move semantics",
          "21.4 -- Move constructors and move assignment",
          "21.8 -- std::unique_ptr and std::shared_ptr",
          "21.x -- Chapter 21 summary and quiz"
        ]
      },
      {
        number: 22,
        title: "Move Semantics in Practice / std::move",
        lessons: [
          "22.1 -- std::move and value categories",
          "22.4 -- Move-aware class design",
          "22.7 -- Perfect forwarding basics",
          "22.x -- Chapter 22 summary and quiz"
        ]
      },
      {
        number: 23,
        title: "Input and Output (I/O)",
        lessons: [
          "23.1 -- Input and output streams",
          "23.4 -- Stream states and error handling",
          "23.7 -- Reading and writing files",
          "23.x -- Chapter 23 summary and quiz"
        ]
      },
      {
        number: 24,
        title: "The Standard Library Utilities",
        lessons: [
          "24.1 -- Introduction to std::pair and std::tuple",
          "24.4 -- Utility functions and wrappers",
          "24.7 -- std::optional and std::variant",
          "24.x -- Chapter 24 summary and quiz"
        ]
      },
      {
        number: 25,
        title: "Containers and Iterators",
        lessons: [
          "25.1 -- Sequence containers overview",
          "25.4 -- Associative containers",
          "25.8 -- Iterators and iterator categories",
          "25.x -- Chapter 25 summary and quiz"
        ]
      },
      {
        number: 26,
        title: "Algorithms",
        lessons: [
          "26.1 -- STL algorithms overview",
          "26.4 -- Sorting and searching algorithms",
          "26.7 -- Custom predicates and lambdas in algorithms",
          "26.x -- Chapter 26 summary and quiz"
        ]
      },
      {
        number: 27,
        title: "C++ Architecture and Design Extras",
        lessons: [
          "27.1 -- Design tradeoffs in modern C++",
          "27.3 -- Performance, readability, and maintainability",
          "27.x -- Chapter 27 summary and quiz"
        ]
      }
    ]
  }
];

const levelListEl = document.getElementById("levelList");
const levelTemplate = document.getElementById("levelBlockTemplate");
const chapterTemplate = document.getElementById("chapterCardTemplate");
const lessonTemplate = document.getElementById("lessonItemTemplate");

const progressPercentEl = document.getElementById("progressPercent");
const completedCountEl = document.getElementById("completedCount");
const totalCountEl = document.getElementById("totalCount");
const completedLessonsEl = document.getElementById("completedLessons");
const totalLessonsEl = document.getElementById("totalLessons");
const levelBadgeEl = document.getElementById("levelBadge");
const meterBarEl = document.getElementById("meterBar");
const checkAllBtn = document.getElementById("checkAllBtn");
const resetBtn = document.getElementById("resetBtn");
const studentNameInput = document.getElementById("studentNameInput");
const studentNameNote = document.getElementById("studentNameNote");
const certificateSheet = document.getElementById("certificateSheet");
const certStudentName = document.getElementById("certStudentName");
const certProgramName = document.getElementById("certProgramName");
const certLevelCode = document.getElementById("certLevelCode");
const certIssueDate = document.getElementById("certIssueDate");
const certIdLine = document.getElementById("certIdLine");

const chapterViewMap = new Map();
const levelViewMap = new Map();

const allChapters = syllabusByLevel.flatMap((group, levelIndex) =>
  group.chapters.map((chapter) => ({ ...chapter, levelIndex }))
);
const allLessonKeys = allChapters.flatMap((chapter) =>
  chapter.lessons.map((_, lessonIndex) => `c${chapter.number}-l${lessonIndex}`)
);

let lessonState = {};
let studentName = "";

const CERTIFICATE_MAP = {
  Beginner: {
    code: "CPE",
    title: "C++ Certified Entry-Level Programmer"
  },
  Intermediate: {
    code: "CPA",
    title: "C++ Certified Associate Programmer"
  },
  Advanced: {
    code: "CPP",
    title: "C++ Certified Professional Programmer"
  }
};

const chapterLessonKeys = (chapter) => chapter.lessons.map((_, lessonIndex) => `c${chapter.number}-l${lessonIndex}`);

const getSavedState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return typeof parsed === "object" && parsed !== null ? parsed : {};
    }

    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!legacyRaw) {
      return {};
    }

    const legacyParsed = JSON.parse(legacyRaw);
    if (typeof legacyParsed === "object" && legacyParsed !== null) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(legacyParsed));
      return legacyParsed;
    }

    return {};
  } catch (error) {
    return {};
  }
};

const getSavedProfile = () => {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) {
      return { studentName: "" };
    }

    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) {
      return { studentName: "" };
    }

    return { studentName: typeof parsed.studentName === "string" ? parsed.studentName : "" };
  } catch (error) {
    return { studentName: "" };
  }
};

const saveState = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lessonState));
};

const saveProfile = () => {
  localStorage.setItem(PROFILE_KEY, JSON.stringify({ studentName }));
};

const normalizeState = (rawState) => {
  const normalized = {};
  allLessonKeys.forEach((key) => {
    normalized[key] = Boolean(rawState[key]);
  });
  return normalized;
};

const isChapterDone = (chapter) => chapterLessonKeys(chapter).every((key) => lessonState[key]);

const isLevelComplete = (levelIndex) => {
  const chapters = syllabusByLevel[levelIndex].chapters;
  return chapters.every((chapter) => isChapterDone(chapter));
};

const isLevelUnlocked = (levelIndex) => {
  if (levelIndex === 0) {
    return true;
  }
  return isLevelComplete(levelIndex - 1);
};

const getLevelByPercent = (percent) => {
  if (percent >= 70) {
    return "Advanced";
  }
  if (percent >= 35) {
    return "Intermediate";
  }
  return "Beginner";
};

const updateChapterVisual = (chapter) => {
  const refs = chapterViewMap.get(chapter.number);
  if (!refs) {
    return;
  }

  const keys = chapterLessonKeys(chapter);
  const completedLessons = keys.filter((key) => lessonState[key]).length;
  const done = completedLessons === keys.length;

  refs.chapterCheckbox.checked = done;
  refs.chapterProgress.textContent = `${completedLessons}/${keys.length} lessons`;
  refs.card.classList.toggle("done", done);

  refs.lessonCheckboxes.forEach(({ key, checkbox }) => {
    checkbox.checked = Boolean(lessonState[key]);
  });
};

const updateProgress = () => {
  const totalLessons = allLessonKeys.length;
  const completedLessons = allLessonKeys.filter((key) => lessonState[key]).length;
  const completedChapters = allChapters.filter((chapter) => isChapterDone(chapter)).length;
  const totalChapters = allChapters.length;
  const percent = totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);

  totalLessonsEl.textContent = String(totalLessons);
  completedLessonsEl.textContent = String(completedLessons);
  totalCountEl.textContent = String(totalChapters);
  completedCountEl.textContent = String(completedChapters);
  progressPercentEl.textContent = `${percent}%`;
  meterBarEl.style.width = `${percent}%`;
  levelBadgeEl.textContent = getLevelByPercent(percent);
};

const toggleChapterInputs = (chapterNumber, disabled) => {
  const refs = chapterViewMap.get(chapterNumber);
  if (!refs) {
    return;
  }

  refs.chapterCheckbox.disabled = disabled;
  refs.lessonCheckboxes.forEach(({ checkbox }) => {
    checkbox.disabled = disabled;
  });
};

const fillCertificateTemplate = (targetLevel) => {
  const meta = CERTIFICATE_MAP[targetLevel];
  if (!meta) {
    return null;
  }

  const now = new Date();
  const dateText = now.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const certId = `CPP-${meta.code}-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const programLabel = `${meta.code} - ${meta.title}`;

  certStudentName.textContent = studentName.trim();
  certProgramName.textContent = programLabel;
  certProgramName.classList.toggle("compact", programLabel.length > 36);
  certLevelCode.textContent = meta.code;
  certIssueDate.textContent = `Issued: ${dateText}`;
  certIdLine.textContent = `Certificate ID: ${certId}`;
  certificateSheet.dataset.level = targetLevel.toLowerCase();

  return { code: meta.code, certId };
};

const downloadCertificate = async (targetLevel) => {
  if (!studentName.trim()) {
    studentNameNote.textContent = "Please enter your full name to enable certificate downloads.";
    studentNameInput.focus();
    return;
  }

  const levelIndex = syllabusByLevel.findIndex((group) => group.level === targetLevel);
  if (levelIndex < 0 || !isLevelComplete(levelIndex)) {
    return;
  }

  if (!window.html2canvas || !window.jspdf || !window.jspdf.jsPDF) {
    studentNameNote.textContent = "PDF engine failed to load. Refresh page and try again.";
    return;
  }

  const certData = fillCertificateTemplate(targetLevel);
  if (!certData) {
    return;
  }

  certificateSheet.classList.add("exporting");

  try {
    const canvas = await window.html2canvas(certificateSheet, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true
    });

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width, canvas.height);

    const safeName = studentName.trim().replace(/\s+/g, "_");
    pdf.save(`${safeName}_${certData.code}_Certificate.pdf`);
  } catch (error) {
    studentNameNote.textContent = "Failed to generate certificate. Please try again.";
  } finally {
    certificateSheet.classList.remove("exporting");
  }
};

const refreshLocksAndCertificates = () => {
  syllabusByLevel.forEach((group, levelIndex) => {
    const refs = levelViewMap.get(levelIndex);
    if (!refs) {
      return;
    }

    const unlocked = isLevelUnlocked(levelIndex);
    const completed = isLevelComplete(levelIndex);
    refs.levelBlock.classList.toggle("locked", !unlocked);
    refs.status.textContent = unlocked ? (completed ? "Completed" : "Unlocked") : "Locked";
    refs.lockMsg.textContent = unlocked
      ? ""
      : `Locked: complete all ${syllabusByLevel[levelIndex - 1].level} chapters to unlock this level.`;

    const certMeta = CERTIFICATE_MAP[group.level];
    refs.certButton.disabled = !(completed && studentName.trim() && certMeta);
    refs.certButton.textContent = certMeta
      ? `Download ${certMeta.code} Certificate`
      : `Download ${group.level} Certificate`;

    group.chapters.forEach((chapter) => {
      toggleChapterInputs(chapter.number, !unlocked);
    });
  });
};

const refreshUi = () => {
  allChapters.forEach((chapter) => {
    updateChapterVisual(chapter);
  });
  updateProgress();
  refreshLocksAndCertificates();
};

const renderSyllabus = () => {
  const frag = document.createDocumentFragment();

  syllabusByLevel.forEach((group, levelIndex) => {
    const levelClone = levelTemplate.content.cloneNode(true);
    const levelBlock = levelClone.querySelector(".level-block");
    const levelTitle = levelClone.querySelector(".level-title");
    const levelSubtitle = levelClone.querySelector(".level-subtitle");
    const levelStatus = levelClone.querySelector(".level-status");
    const levelLockMsg = levelClone.querySelector(".level-lock-msg");
    const certButton = levelClone.querySelector(".cert-btn");
    const chapterList = levelClone.querySelector(".chapter-list");

    levelTitle.textContent = `${group.level} Chapters`;
    levelSubtitle.textContent = group.description;
    levelStatus.textContent = "Unlocked";
    levelLockMsg.textContent = "";

    certButton.addEventListener("click", () => {
      downloadCertificate(group.level);
    });

    group.chapters.forEach((chapter) => {
      const chapterClone = chapterTemplate.content.cloneNode(true);
      const chapterCard = chapterClone.querySelector(".chapter-item");
      const chapterId = chapterClone.querySelector(".chapter-id");
      const chapterTitle = chapterClone.querySelector(".chapter-title");
      const chapterCheckbox = chapterClone.querySelector(".chapter-checkbox");
      const chapterProgress = chapterClone.querySelector(".chapter-progress");
      const lessonList = chapterClone.querySelector(".lesson-list");

      chapterId.textContent = `Chapter ${chapter.number}`;
      chapterTitle.textContent = chapter.title;

      const lessonCheckboxes = [];

      chapter.lessons.forEach((lessonName, lessonIndex) => {
        const lessonClone = lessonTemplate.content.cloneNode(true);
        const lessonCheckbox = lessonClone.querySelector(".lesson-checkbox");
        const lessonText = lessonClone.querySelector(".lesson-text");
        const key = `c${chapter.number}-l${lessonIndex}`;

        lessonText.textContent = lessonName;
        lessonCheckbox.checked = Boolean(lessonState[key]);

        lessonCheckbox.addEventListener("change", () => {
          lessonState[key] = lessonCheckbox.checked;
          saveState();
          refreshUi();
        });

        lessonCheckboxes.push({ key, checkbox: lessonCheckbox });
        lessonList.appendChild(lessonClone);
      });

      chapterCheckbox.addEventListener("change", () => {
        const next = chapterCheckbox.checked;
        chapterLessonKeys(chapter).forEach((key) => {
          lessonState[key] = next;
        });
        saveState();
        refreshUi();
      });

      chapterList.appendChild(chapterClone);

      chapterViewMap.set(chapter.number, {
        card: chapterCard,
        chapterCheckbox,
        chapterProgress,
        lessonCheckboxes,
        levelIndex
      });
    });

    frag.appendChild(levelBlock);

    levelViewMap.set(levelIndex, {
      levelBlock,
      status: levelStatus,
      lockMsg: levelLockMsg,
      certButton
    });
  });

  levelListEl.innerHTML = "";
  levelListEl.appendChild(frag);
};

const setAllLessons = (checked) => {
  allChapters.forEach((chapter) => {
    if (!isLevelUnlocked(chapter.levelIndex)) {
      return;
    }

    chapterLessonKeys(chapter).forEach((key) => {
      lessonState[key] = checked;
    });
  });

  saveState();
  refreshUi();
};

checkAllBtn.addEventListener("click", () => setAllLessons(true));
resetBtn.addEventListener("click", () => {
  allLessonKeys.forEach((key) => {
    lessonState[key] = false;
  });
  saveState();
  refreshUi();
});

studentNameInput.addEventListener("input", () => {
  studentName = studentNameInput.value.trimStart();
  studentNameNote.textContent = "Your name is saved in this browser and used for certificates.";
  saveProfile();
  refreshLocksAndCertificates();
});

lessonState = normalizeState(getSavedState());
studentName = getSavedProfile().studentName;
studentNameInput.value = studentName;

renderSyllabus();
refreshUi();
