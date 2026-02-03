## **MVP v1 — PDF-first Time-Based Learning Loop (English)**

### **One-line promise**

User uploads a Subject’s PDFs → enters total completion time **X hours** → the system generates **modules + Pomodoro sessions** that fit X hours, and enforces a **learn → quiz → confirm → next module** loop.

---
### **MVP v1 Must-have**

#### **1) Subject & PDF Library (Subject container)**

- Create a **Subject**
    
- Upload PDFs into the Subject (multiple PDFs allowed, but keep a limit for MVP)
    
- PDF list management: rename / delete

#### **2) PDF → Structured Course (course generation)**

- Parse PDFs (text extraction + basic segmentation)
    
- Generate:
    
    - **Modules** (Module 1..N)
        
    - **Summary** for each module
    
- Content should be traceable back to the PDF (at least **page range / section range** per module)
    
#### **3) Time-Based Course Generation (key differentiator)**

- User inputs total time **X** (e.g., 2h / 3h)
    
- System auto-adjusts:
    
    - Module granularity (more / fewer modules)
        
    - Summary depth (shallower / deeper)
        
    - Quiz difficulty
        
    - Pomodoro-based session breakdown
    - 
- Output: an executable plan where the whole Subject fits within **X hours**
    
#### **4) Active Learning Loop (mandatory)**

- Study Module 1 → automatic quiz → confirm understanding → unlock Module 2
    
- Later-module quizzes:
    
    - Mostly focus on the current module
        
    - Include some questions from previous modules (built-in revision)
        
#### **5) Minimal Progress View**

- Show: elapsed time / remaining time
    
- Show: completed modules count
    
- Provide clear “continue” flow across sessions/modules

---

### **MVP v1 Won’t-have (cut for v1)**

- YouTube / web links / Docs ingestion
    
- Separate flashcard product experience (can reuse quiz questions later, but no flashcard UI now)
    
- Homework AI / photo solving
    
- Real website blocking / notification blocking (Focus Mode system-level control)
    
- Advanced personalization (diagnostic tests, mastery models, knowledge graph)
    
- Guaranteed support for scanned/image PDFs (OCR)