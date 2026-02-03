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

### **MVP v1 Roadmap (Execution Steps)**

1) **Foundation & Auth**

- Confirm auth flow works (login/register)

- Create the initial “course/project” entry point (single subject for v1)

2) **PDF Upload & Management**

- Upload PDFs (size/count limit)

- Rename / delete PDFs

- Store files to S3/R2

3) **PDF Parsing & Segmentation**

- Extract text from PDF

- Basic segmentation by page/section

- Persist page ranges for traceability

4) **AI Study Plan Generation**

- Generate modules from content

- Generate module summaries

- Store module → page range mapping

5) **PDF Chat**

- Q&A grounded on uploaded content

- Responses include page/section references

6) **Minimal UI & Flow**

- Upload page → course page → chat page

- Clear “continue” flow

- Success/error handling

7) **MVP QA & Launch**

- End‑to‑end test: upload → plan → chat

- Prepare basic docs / onboarding

---

### **Technical Approach (MVP)**

- **PDF parsing**: LangChain JS PDFLoader (or pdf-parse) for text extraction (no OCR).

- **Chunking**: RecursiveCharacterTextSplitter; keep page/section metadata for traceability.

- **Embeddings**: OpenRouter embeddings API (OpenAI-compatible base URL).

- **Vector store**: Supabase Postgres + pgvector (`vector` extension enabled).

- **Retrieval**: Top‑K semantic search + page references in responses.

- **RAG flow**: query → embed → retrieve chunks → compose context → LLM answer.

- **File storage**: PDF files stored in object storage (S3/R2); DB stores metadata + chunks.

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
