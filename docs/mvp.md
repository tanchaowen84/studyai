## **MVP v1 — PDF-first Study Plan + PDF Chat (English)**

### **One-line promise**

User uploads PDFs → the system summarizes and generates a **study plan** → user can **chat with the PDF**. That’s enough to launch. Pomodoro, progress bar, and subject folders come after.

---
### **MVP v1 Must-have (Launch Scope)**

#### **1) PDF Upload (single subject for v1)**

- Upload PDFs (multiple PDFs allowed, but keep a limit for MVP)

- PDF list management: rename / delete

#### **2) PDF → Structured Course (study plan generation)**

- Parse PDFs (text extraction + basic segmentation)

- Generate:

    - **Modules** (Module 1..N)

    - **Summary** for each module

- Content should be traceable back to the PDF (at least **page range / section range** per module)

#### **3) PDF Chat (core interaction)**

- Allow user to ask questions about the PDF and get answers grounded in the uploaded content

- Keep responses traceable to source (page/section references if possible)

---

### **Post-MVP (v1.1 / v2)**

- **Separate folder for each Subject** (notes + data library)

- **Pomodoro sessions / time-based plan**

- **Progress bar** showing how much of the PDF is remaining

- **Quizzes or flashcards** after the study stage for memory/revision

- **Active learning loop** (learn → quiz → confirm → unlock next module)

- Interleaved revision questions from previous modules

---
### **MVP v1 Won’t-have (cut for v1)**

- YouTube / web links / Docs ingestion

- Separate flashcard product experience (standalone mode)

- Homework AI / photo solving

- Real website blocking / notification blocking (Focus Mode system-level control)

- Advanced personalization (diagnostic tests, mastery models, knowledge graph)

- Guaranteed support for scanned/image PDFs (OCR)
