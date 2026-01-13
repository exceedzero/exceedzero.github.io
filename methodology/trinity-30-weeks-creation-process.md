# The Trinity: 15,000-Line Prompt Creation Process

## 🎯 Executive Summary

How a non-developer built enterprise regulatory intelligence for $18.42 vs $60,000-75,000.

### The Journey
- **Duration**: 30 weeks (May 2025 - December 2025)
- **System**: Custom Search API (source acquisition) + Gemini Pro (AI judgment) + Python (additional verification)
- **Architecture**: Claude (planning) + Gemini (execution) + Python (control)
- **Completion**: December 24, 2025

### The Results
- **Cost**: $18.42 (Gemini Pro $15.83 + Custom Search API $2.59)
- **vs Traditional**: $60,000-$75,000 (approximately 1/3,000 = 3,257x reduction)
- **Average cost per document**: $0.003
- **Time Savings**: 7 hours vs 1 week (99% faster)
- **Transparency**: 125,332 lines of verified logs
- **Execution**: 959 searches → 5,755 documents analyzed → 245 policies selected
- **Sources**: 100% .gov domains (Federal Register, USTR, Treasury, BIS)

### Scalability: 8 Regulated Industries
1. **Financial Sanctions & Regulation** (OFAC, Treasury, SEC, BIS)
2. **Trade/Export Control/Supply Chain** (USTR, Commerce, BIS, IEEPA)
3. **Energy/Climate/Industrial Policy** (IRA, DOE, EPA, Manufacturing)
4. **Pharma/Medical/Healthcare** (FDA, EMA, HHS, MHRA)
5. **Legal/Regulatory Affairs** (Federal Register monitoring, Compliance)
6. **Consulting** (Policy analysis, Due diligence)
7. **Accounting/Tax** (IRA credits, Tariff impacts)
8. **Supply Chain Management** (HTS codes, Trade compliance)

### The Challenge That Started It All
**Traditional approach**:
- **Experts needed**: 20-25 Federal Register specialists
- **Time required**: 1 week (800+ hours)
- **Cost**: $60,000-$75,000 per execution
- **Setup time**: 1 month (recruitment, onboarding)
- **Quality risk**: Human fatigue across 5,755 documents
- **Sustainability**: Unsustainable for weekly updates

**Trinity solution**:
- **Experts needed**: 0 (fully automated)
- **Time required**: 7 hours
- **Cost**: $18.42
- **Setup time**: 0 (instant execution)
- **Quality**: Consistent AI performance with dual verification
- **Sustainability**: $2,600/year for weekly updates (52 weeks × $50)

### Key Insight: Making the Impossible Possible

"What was impossible became possible. Not because AI is perfect, but because the task itself—requiring 20-25 experts for $60K-75K weekly—was already impossible. The Trinity proves you don't need perfection; you need transparency, verification, and a system that works."

---

## 📚 Table of Contents

### Phase 1: Foundation (Week 1-6)
- [Week 1: Why You Need Both AIs](#week-1)
- [Week 2: AI Limitations and Verification](#week-2)
- [Week 3: US Government Agency Information Types](#week-3)
- [Week 4: Top-Down Information Mapping](#week-4)
- [Week 5: Defining Strategic Categories](#week-5)
- [Week 6: Strategy Classification Prompt Structure](#week-6)

### Phase 2: 6-Category Framework (Week 7-20)
- [Week 7: Strategy Classification Collection Planning](#week-7)
- [Week 8: Logic of Target Item Selection](#week-8)
- [Week 9: Target Product Prompt Structure](#week-9)
- [Week 10: Target Product Methodology Design](#week-10)
- [Week 11: The Role of Economic Scale](#week-11)
- [Week 12: Economic Scale Prompt](#week-12)
- [Week 12.5: Improving Data Accuracy with Google Infrastructure](#week-12-5)
- [Week 13: Structure of HTS Codes](#week-13)
- [Week 14: HTS Code Extraction Prompt](#week-14)
- [Week 15: HTS Code Methodology Design](#week-15)
- [Week 16: Tariff Rate Data Sources](#week-16)
- [Week 17: Tariff Rate Search Strategy](#week-17)
- [Week 18: Tariff Rate Integration Methodology](#week-18)
- [Week 19: Timeline Structure](#week-19)
- [Week 20: Timeline Extraction Prompt](#week-20)

### Phase 3: Execution + Integration (Week 21-26)
- [Week 21: The Necessity of Execution Prompts](#week-21)
- [Week 22: Product Manager Structure](#week-22)
- [Week 23: Strategy and Economic Manager](#week-23)
- [Week 24: HTS and TariffRate Manager](#week-24)
- [Week 25: Timeline Manager](#week-25)
- [Week 26: Integration Manager](#week-26)

### Phase 4: The Trinity Completion (Week 27-30)
- [Week 27: Claude + Gemini + Python = Trinity](#week-27)
- [Week 28: Non-Developer's Python Code Completion](#week-28)
- [Week 29: Why Perfect Filtering is Impossible](#week-29)
- [Week 30: Go Further with AI](#week-30)

---

# Week 0: 30-Week Timeline

### What's Provided

Over 7 months, this methodology for creating prompts (planned with Claude) and executing (executed with Gemini API, controlled and cross-verified with Python) to select policies with future implementation potential from AI-based US-China semiconductor tariff policies will be delivered over 30 weeks, helping to strengthen your company's AI utilization capabilities.

## 30-Week Timeline

### Week 1: Why You Need Both AIs

- Planning a 15,000-line prompt using Claude's MCP Sequential thinking and text-editor
- Executing selection of policies with future implementation potential with Gemini API
- Control and cross-verification with Python, log recording

### Week 2: The Limitations of AI and the Need for Verification

- 5 fundamental incompleteness of AI
- User's continuous verification and planning ability that determines the completeness of AI output

### Week 3: Types of Information Handled by Various US Government Agencies

- Diversity of content published by multiple government agencies including Federal Register, CBP, USITC, USTR, etc.

### Week 4: Top-Down Information Mapping

- 3 relationships of 6 information types - 1. Inclusion relationship, 2. Intertwined relationship, 3. Set relationship

### Week 5: Defining Strategic Categories

- Reason for identifying various strategies first, including National Security Strategy (Section 232), Economic Security Strategy (IEEPA), General Trade Strategy (Section 301), etc.

### Week 6: Strategy Classification Prompt Structure

- Search strategy for selecting policies under review or scheduled for implementation, not past policies

### Week 7: Strategy Classification Collection Planning

- Collaborative work between Sequential thinking and text-editor MCP executing prompts over 1,000 lines
- Powerful search functionality provided by Claude, web_search.

### Week 8: Logic of Target Item Selection

- Top-down mapping from strategy classification to specific industries
- Product as the integration reference point for all information types

### Week 9: Target Product Prompt Structure

- Strategy for securing list documents in bulk such as Annex, Product List, rather than individual product searches
- Future implementation filtering structure by document status: Proposed/Investigation/Final

### Week 10: Target Product Methodology Design

- Sequential search workflow for 5 sources (Federal Register, USITC, CBP, USTR, Commerce/BIS)
- Goal of securing 95-100% of 50~75 future implementation products with 75-100 searches

### Week 11: The Role of Economic Scale

- Intertwined relationship (↔) with target products, an attribute rather than a subordinate concept of products
- Relationship between economic scale and tariff policy - basis of policy

### Week 12: Economic Scale Prompt

- Starting with Semiconductor_Product_Article.md as reference
- Mapping in Product order, 55~80 searches

### Week 12.5: Improving Data Accuracy with Google Infrastructure

- Direct search of original text with Custom Search API
- Execution of future implementation potential determination with Gemini API
- Control and cross-verification with Python

### Week 13: Structure of HTS Codes

- Segmentation from target products to specific products
- Reason why HTS cannot become a reference instead of target products

### Week 14: HTS code extraction prompt

- Starting with Semiconductor_Product_Article.md as reference, same as economic scale
- Expanding 6-digit codes to 10 digits

### Week 15: HTS Code Methodology Design

- Mapping HTS codes to all products in Product

### Week 16: Tariff Rate Data Sources

- Set relationship with HTS codes

### Week 17: Tariff Rate Search Strategy

- Reason for tracking changes since 2018

### Week 18: Tariff Rate Integration Methodology

- Collecting tariff rate changes based on Product
- 75-105 searches. Goal of 98-99.5% mapping rate

### Week 19: Timeline Structure

- Reason for differences in implementation dates
- Set relationship with HTS codes and tariff rates

### Week 20: Timeline Extraction Prompt

- Starting with Semiconductor_Product_Article.md as reference
- Reason for inability to sort by implementation timing

### Week 21: The Necessity of Execution Prompts

- Different search keywords, different judgment criteria, different sorting methods applied each time even with the same question
- Common structure: Read Checklist → Understand progress with Sequential Thinking → Report current status

### Week 22: Product Manager Structure

- Reason for designing structure starting with target products instead of strategy classification
- Workflow: Proposal → User approval → Execution → Checklist update → Next task proposal

### Week 23: Strategy and Economic Manager

- Accumulation and order maintenance based on Product, not their own criteria
- Items added to Product execution prompt

### Week 24: HTS and TariffRate Manager

- HTS codes: Accumulation and order maintenance based on Product, prohibition of sorting by implementation date and HTS order, 99% mapping goal
- Tariff rates: Accumulation and order maintenance based on Product, cumulative calculation of historical+current+future tariff rates

### Week 25: Timeline Manager

- Accumulation and order maintenance based on Product
- Basis for timeline sorting

### Week 26: Integration Manager

- Information integration based on Product
- Sequential information accumulation (Strategy → Economic → HTS → Tariff Rate → Timeline)

### Week 27: Claude + Gemini + Python = Trinity

- Opportunity mentioned in Week 12.5
- Planning with Claude, execution with Gemini Pro, control with Python
- Collaboration between Python and AI taking place in Google Colab

### Week 28: The Secret to How a Non-Developer Completed Python Code

- Prompts executed by Python code
- Commonalities between Python code and AI prompts
- Various functions that must be included in Python code

### Week 29: Why Perfect Filtering is Impossible

- Publication format of US government agencies
- Information collection where completeness is important

### Week 30: Go Further with AI

- Reason why manual human review is essential
- Examples of AI utilization in other industries and purposes
- Reason why AI is not a bubble

## 👑 Mandatory Pre-Use Acknowledgment (Required Reading) - Final Separation of Liability and Disclaimer of Warranties

### 🚨 1. Nature of Service and Absolute Disclaimer of Warranties

This program is strictly limited to sharing the prompt planning process and methodology (IP). This is a knowledge-based contribution intended to strengthen clients' AI workflow design capabilities, not a role as an information provider. This entire 30-week program is provided 100% free of charge (Gratis).

Accordingly, we provide absolutely no express or implied warranties whatsoever regarding the methodology provided and any outputs obtained by users through it, including but not limited to warranties of merchantability or fitness for a particular purpose. This material is provided "As Is," and all express warranties and implied warranties under law (including implied warranties of merchantability and fitness for a particular purpose) are excluded to the maximum extent permitted by law.

### 🛑 2. Legal Usage Restrictions and Final Liability

This program does not address policy prediction or analysis methodologies whatsoever, and focuses solely on technical methodologies for collecting and structuring official U.S. government announcements. The IP and methodology learning outputs provided cannot exceed the role of raw reference data, and cannot be directly used for the purpose of legal or business decision-making (e.g., supply chain changes, investments, legal decisions, trade contracts).

All legal effect and liability for decisions are completed solely through the user's independent professional advice, and all information cannot replace professional advice.

### ✅ 3. Required Technical Environment and Prerequisites

This system is designed using Claude models with Google Colab as its core infrastructure. Therefore, both Claude paid subscription and Google Colab environment setup are required as essential prerequisites for system construction and execution methodology learning.

### ❌ 4. Accuracy Limitations Notice and Serious Residual Risks

Despite external verification processes, 100% accuracy is impossible due to the inherent limitations of AI data, and serious residual risks remain. Execution results obtained by users through the provided methodology cannot guarantee information accuracy, and errors and omissions may occur during the AI collection process.

### ✋ 5. User's Absolute Verification Obligations (The Sole Condition for Liability Separation)

The realization of this program's value and all legal liability separation depends solely on the user's fulfillment of final verification. Specific verification methods are as follows:

### 5-1. Original Source Verification (Mandatory)

Users must directly search official sites such as [federalregister.gov](http://federalregister.gov/) for Federal Register numbers, URLs, and document names provided by AI to verify actual existence and content consistency.

### 5-2. Cross-Verification (Mandatory)

All critical data points (HTS codes, tariff rates, effective dates, etc.) must be directly cross-verified with at least 3 or more original official documents. Confirmation of 2 or fewer sources is legally insufficient and will be considered failure to fulfill verification obligations.

### 5-3. Expert Consultation (Mandatory)

Users must obtain written review and approval from experts in legal, trade, and customs fields before business decision-making. Failure to do so will be considered gross negligence.

### 5-4. Verification Time (Absolute Obligation)

It is an absolute mandatory condition to invest at least 10 times the independent verification time compared to AI output review time. This is a non-negotiable minimum standard, and if you judge this obligation to be excessive, you must immediately cease viewing according to Article 6-1.

### ⛔ 6. Legal Consequences of Obligation Non-Fulfillment and Absolute Transfer of Liability

If the user fails to fulfill even one of the verification obligation conditions from 5-1 to 5-4 above and utilizes this material:

6-1. Legal Status of Data and Complete Attribution of Liability
The results of utilizing the methodology will immediately be legally considered as "unreliable and worthless execution originals," and 100% of all responsibility for all types of direct, indirect, incidental, special, consequential, and punitive losses, damages, costs, expenses, claims, lawsuits, and legal liabilities arising therefrom is entirely attributed to the user. Given that this program is provided free of charge, we do not bear even 0.01% of liability and have absolutely no obligation for any compensation, reimbursement, restitution, refund, or damages.

6-2. Exercise of Defense Rights in Litigation
The fact that users failed to fulfill this verification obligation becomes our complete and decisive defense grounds, and we will exercise all defense rights based on the user's choice to use after agreeing to this warning. Courts or arbitration bodies will regard verification obligation non-fulfillment as the user's gross negligence or willful disregard.

6-3. Reversal of Burden of Proof (Final Line of Defense)
If a user files any claim, lawsuit, or complaint against us regarding this program, the user bears the sole responsibility to prove with clear and convincing evidence that all verification obligations from 5-1 to 5-4 above were perfectly fulfilled, and if unable to prove this, the claim will be automatically dismissed or rejected.

6-4. Independence of Disclaimer Clauses (Severability)
Even if any provision of this document is invalidated by court judgment, this does not affect the validity, legality, or enforceability of the remaining provisions. Invalidated provisions will be interpreted and modified as closely as possible to their original intent and enforced to the maximum extent.

### 🛑 7. Final Warning, Presumption of Explicit Consent, and Waiver of Rights

**7-1. Demand for Immediate Cessation**
If you do not agree with the above disclaimer clauses, warranty disclaimers, and verification obligation conditions from 5-1 to 5-4, or if you are unwilling to invest 10 times verification time, or if you consider these conditions excessive or unacceptable, please immediately cease viewing this page and close your browser now. Not closing the page will be considered explicit consent to all conditions.

7-2. Legal Meaning of Continuing and Waiver of Rights
The act of continuing after confirming this warning without closing the page is legally presumed to mean that you fully understand, unconditionally accept, and explicitly and irrevocably consent to all the above conditions. This means consenting to bearing sole responsibility for all legal and financial consequences, and voluntarily and permanently waiving all claims, litigation rights, and rights to damages against us. You cannot later claim that you "did not properly read the warning" or "did not understand the conditions."

---

# Week 1: Why You Need Both AIs

⚠️ This column **shares the process of creating prompts for free educational purposes** and does not constitute investment, legal, or financial advice.** AI execution results may contain errors, so independent verification is essential. **All responsibility for their use lies solely with the user.** They cannot be directly used for business decisions. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**See all essential checklists below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### 50 Months of Trading and Automation Using AI

I majored in economics at a late age, aiming to become a full-time investor. Before graduation, I read and analyzed nearly 300 investment-related books to find the best investment strategy. For roughly 50 months after graduation, I traded in international futures markets, including the S&P 500, crude oil, and U.S. Treasury bonds, making thousands of adjustments to my strategy.

Every morning, before the market opened, I checked international news and analyzed risks. A single tariff policy or central bank announcement could shake the market, and I had to adjust my positions accordingly. However, this entire process was manual.

I checked the news every day, verified my investment strategy, adjusted it, and measured my returns. I spent an average of five hours a day on risk management, but I was constantly anxious. "Have I checked all the important news?" This question kept running through my head. "What if I missed something?" I never felt a moment of peace.

There was always a demand for automation. However, I wasn't a developer and had no knowledge of code. I attempted automation several times, but I couldn't solve various problems, such as the security of my trading strategy and the cost of development, and continued to do so manually.

Then, around June 2025, witnessing the advancement of AI technology, I began my journey to automation in earnest. Claude's Model Context Protocol (MCP) was the starting point.

The era had finally arrived where AI could go beyond simply answering questions and automatically handle complex tasks. Seeing AI execute requests in natural language instead of writing complex and difficult code, I felt I could finally live with peace of mind.

### I had two goals.

First, I wanted to free myself from the 23-hour grind of overseas futures trading by building an automated trading system. Second, I wanted to develop a program to verify profitability. Having read hundreds of books and tested numerous strategies, and even revised them more than I tested during actual trading, I longed to see AI calculate profitability just like I did.

However, I wanted to reduce the time spent on information gathering, so I started by automating my daily analysis of international political trends. For several weeks, I designed prompts that would allow the AI to analyze and verify my insights, along with examples, just like I did. This process gradually evolved, with file size segmentation and seven hub systems, operating almost like a single program.

Over time, my insights grew stronger, my information selection ability improved, and when I delivered articles, the AI analyzed them, extracted the necessary keywords, and verified the information. Ultimately, I successfully utilized AI to analyze international political trends. Processing all this in under an hour significantly increased efficiency, and I realized I needed to leverage AI more fully.

Until now, due to time constraints, my best approach was to analyze the statements and trends of key figures in international politics. Now, I plan to expand that approach to gathering policy information. Especially since I'd already established a cross-verification method with media outlets to understand international political trends, I thought gathering policy information would be a breeze.

### Politics and Policy Are Different

As I'll discuss repeatedly over the next 30 weeks, verifying the statements of specific political figures and gathering policy information from US government agencies were completely separate things. While news was quick and well-organized, policy documents were released by various government agencies, covering a wide range of information, making it difficult to know where to look and what to look for.

The content was so vast that every time I searched for something with AI, results came from various government agencies, and the complexity made interpretation impossible. Solving this problem for six months was incredibly challenging. It was so overwhelming that I wondered if anyone had ever solved this problem before. How were people like me doing it? While thinking about this, I really thought about how difficult it would be for import/export trade companies in particular.

Honestly, it's okay if the investment portfolio doesn't expand, but what if this kind of policy information is absolutely necessary? What if an import/export trade company needs to check tariff rate changes tomorrow? This challenge naturally occurred to me, not just for me, but for import/export companies as well.

At first, I started with a very casual thought: let's automatically collect US tariff policies before completing the automated trading program! But ultimately, I spent over 12 hours a day, six months, solving the problem.

### Completing the Prompt Design with Claude

In the end, collecting US semiconductor tariff policies on China required a total of 14 prompts, including seven different types of prompts and individual execution prompts, totaling approximately 15,000 lines.

While I was very satisfied with the finalized prompts, it was also challenging. Not only did I not realize the sheer volume of output they would generate, but Claude also has a weekly usage limit and a session limit that refreshes every few hours. The problem was that I had almost reached my weekly usage limit when I completed the prompt, and I was very flustered because I needed the results urgently.

### Exploring High-Capacity Execution: Discovering Gemini Pro on Google Colab

In a state of confusion, I began searching for a solution. "Is there a way to complete a massive number of prompts in a short period of time?" While exploring various methods, I remembered AIs capable of large-scale tasks introduced on YouTube, a channel dedicated to AI news. I immediately logged onto that channel and browsed through the various AIs I'd previously seen. By chance, I stumbled upon Google Colab through a different channel, and ended up using Gemini Pro.

Gemini Pro on Google Colab operated in a completely different way than Claude. While Claude interacted with a conversational interface like a typical AI, Gemini Pro on Google Colab ran via an API (program linking, called using the programming language Python). Simply put, both a Gemini Pro-specific natural language prompt and Python execution code are required. Details are covered in Week 12.5, 27, 28, 29, 30.

It operated through code, not conversation, and could handle large requests without interruption. While I didn't process the 15,000 lines all at once, but instead split the execution into seven parts, the results were still produced quickly. I studied Python a bit, especially to develop an automated trading program, but even with my limited skills, I was able to handle it without any problems. Both the EXceedZero website and the API call code were all generated by AI requests.

Note that one constant, regardless of the AI used, is the need for manual verification. As we'll discuss in detail in Week 2, no matter how advanced AI becomes, there are inherent limitations in executing human requests.

Therefore, both the Claude-specific prompt and the Gemini Pro-specific prompt from the converted Google Colab were designed to ensure that no process proceeds without user verification at any time. Especially for large-scale projects, verification and judgment at every step are essential. If data is collected in the wrong direction without verification, it wastes time and ultimately requires starting over.

### Gemini Pro's Role: 7-Step Execution and Essential Verification

There were several issues during the conversion process. First, the Claude-specific prompt couldn't be used directly in Gemini Pro. The execution environment is different, and the Claude-specific prompt, in particular, is full of Claude-specific tools such as Sequential Thinking, the text editor MCP, web_search, and web_fetch, leading to compatibility issues.

As expected, converting the Claude-specific prompt to the Gemini Pro version of the Google Colab involved considerable trial and error, and the differences in the two AI environments lead to some differences in the results. However, the goals of the prompt, adapted to the Gemini Pro model of Google Colab, are identical to those of the Claude-specific prompt, and the structure is largely the same.

### What to Reveal and What Not to Reveal for 30 Weeks

An important notice is in order. The prompt running on the Gemini Pro version of Google Colab will not be disclosed. This content is already available in three languages: English, Korean, and Traditional Chinese (Taiwan). We are currently discussing various options and serialization with institutions and channels in various countries, including the United States, Korea, Taiwan, the Netherlands, Singapore, and Canada, so disclosure is limited.

Nevertheless, we decided to disclose the core content of the 15,000-line prompt over a 30-week period. There are several reasons, but the primary one is that over the past six months, we've observed that many companies around the world are struggling to gather policy information and have felt a growing gap in AI capabilities.

While disclosing the core methodology may reduce business opportunities, we believe that strengthening AI capabilities for many companies will ultimately lead to shared growth for the entire industry, including our own.

### Key Content Disclosure

While all 15,000 prompt lines are necessary, I believe that disclosing all 14 types of prompts, including the seven prompts and their respective execution prompts, would be overwhelming and overwhelming, leading many to overlook them altogether.

We hope to be of help to as many people as possible, so rather than focusing on specific details specific to the US China tariff policy, we will focus on sharing core AI application methodologies applicable to any industry. We will transparently disclose the US's China semiconductor tariff policy collection method over the next 30 weeks, using examples from the process.

---

### Week 2 Preview: The Limitations of AI and the Need for Validation

The content we will cover over the next 30 weeks is the prompt planning process, which relies solely on Claude. Despite the fact that I've unintentionally converted the prompts to work with Google Colab Gemini Pro and am now using it, I'm still using Claude. This is because I've repeatedly demonstrated over the past six months that it's particularly effective for planning larger projects. This has also led me to understand the fundamental limitations of AI itself.

To strengthen your AI capabilities, it's helpful to understand not only how to use it but also its limitations. Therefore, I'd like to address these limitations first before diving into the main content.

In Week 2, I'll cover "**AI's Limitations and the Need for Verification**." Specifically, I'll share five limitations of AI that I've encountered, including how I increased work efficiency using Sequential Thinking MCP, a key tool that compels me to continue using Claude, as well as how to overcome them.

See you in Week 2.

---

# Week 2: The Limitations of AI and the Need for Verification

⚠️ This column **shares the process of creating prompts for free educational purposes** and does not constitute investment, legal, or financial advice.** AI execution results may contain errors, so independent verification is essential. **All responsibility for their use lies solely with the user.** It cannot be directly used for business decisions. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**See all essential checklist below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Exploring AI's Mindset through Sequential Thinking

As mentioned in Week 1, the following section will cover the process of planning a 15,000-line prompt that collects information about the US-China semiconductor tariff policy using Claude and organizes it into a timeline. However, I didn't actually use Claude from the beginning. While researching various AIs to build an automated trading system and develop a profitability verification program, I discovered Claude through a recommendation from a developer friend.

Then, around June 2025, I happened to see a YouTube video praising Claude's Model Context Protocol (MCP). I learned that various features could be added with simple configuration.

I began using Claude in earnest the moment I discovered its various free features, such as searching the internet for the latest information and accessing my computer to create and edit folders and files. Initially, I tried out all the popular MCPs available, and one of them was Sequential Thinking.

The first time I used Sequential Thinking, I was shocked. "Can you see how AI thinks?" When you ask a complex question, AI doesn't immediately answer. Instead, it goes through a multi-step process of thinking and reviewing.

"First thought: What is the essence of this question?”

"Second thought: Is this the best way to do it? Is there another way?”

"Third thought: This seems like the best approach in this situation. Let's check the actual content through search!”

Some complex questions even required over 30 reflections. This feature is the reason I still can't escape Claude, and it has two particularly crucial advantages.

### Two Benefits of Sequential Thinking

The first benefit is quick fixes. I've been paying for the Max plan for several months, so I rarely have to worry about usage limits. But another benefit is that if Claude misunderstands what I wanted to ask, I don't have to wait for him to finish his response.

Sequential Thinking allows me to check this. If I see the AI thinking in a different direction, I can immediately press the stop button and explain the details. This allows Claude to better understand my intentions and fulfill my request much more efficiently.

The second benefit is even more powerful. By observing the AI's thinking process, I can learn things I didn't know before, get ideas for solutions, and then make further requests with more clarity. This is particularly different from simply obtaining information by observing AI's responses.

When posed a problem using Sequential Thinking, instead of giving a fragmented answer like "A = B," they organize their thoughts and answer questions like, "To understand A, I need to know B, and to understand B, I need to know C and D, but how can I know C? Since there are realistic limitations in verifying D, I'll start by researching C first!" This process is what allows them to act and respond.

When solving complex problems like this, Claude's structural approach using Sequential Thinking often yielded ideas and provided a three-dimensional understanding of previously unknown aspects. By observing the AI's thinking process, they learned what they didn't know, and at the same time, they learned how to issue commands clearly, creating a virtuous cycle where the quality of both questions and answers improved. This, along with the text editor, was a key tool that allowed me to design 15,000 lines of code over six months.

Of course, AI has its limitations, but let me reiterate: these limitations don't necessarily mean AI is problematic or bad. The reason I mention this is because, as I mentioned at the end of Week 1, understanding both the strengths and limitations of AI is essential for more efficient use of AI.

### First Realization: The Longer the Request, the More You Need to Specify the Order

The 15,000-line prompt consists of 14 different types of prompts, each with its own execution prompt, averaging 1,000 to 2,000 lines. They're written in a Markdown file, and the request involves pasting the Markdown itself or referencing the file's location.

When you read such lengthy prompts and ask for them to be executed, the results may vary. This isn't the AI's fault; it's the sheer number of possible scenarios.

The prompt contained dozens of requirements and considerations. Sources to be verified were limited to US government agencies, the implementation date filter was set to after 2025, and in some cases, after 2018. Some requests were organized by timeline, and some were left untouched. All of these are included, including prohibiting omissions or omissions during the mapping process, using only text editors, prohibiting create commands, and achieving a 95% mapping rate target.

While the prompts are structured according to the task sequence, various situations arise during the process, making it impossible to record action instructions for every possible scenario from the outset.

Therefore, before immediately requesting a task, it's crucial to first confirm whether Claude understands the user's intent. This is especially crucial when restarting a task after it has been interrupted, which is why a separate execution prompt was created. After reading the execution prompt first, Claude consistently checked the tasks and executed the requests.

### Second Realization: Incorrect User Commands Halt Progress

Each AI has different characteristics and designs. Some AIs might not proceed with an incorrect request, but instead point out the error and halt the task. Others, on the other hand, might respond to the user's assertion that the error is correct and proceed accordingly.

In other words, if an incorrect command is issued, regardless of the AI's performance or type, the task will not proceed as originally intended. In fact, I believe this isn't a limitation of AI, but rather evidence of its development in the right direction. Since AI is a tool used to fulfill user requests, I believe it performs its role well when it follows the user's instructions, even if it's incorrect, rather than deviating from the user's intent.

Ultimately, even as AI advances, the correct answer will only be produced if a person makes the correct request. The clarity of the request, rather than the AI's performance or type, determines the quality of AI's output.

### Third Realization: Explain the situation and request in as much detail as possible.

Sometimes, AI understands what's being said without proper explanation, but conversely, it may think differently from the user in areas where it hasn't even considered them. This stems from the fundamental structure of AI. Generative AI operates on statistical probability based on extensive learning. Rather than knowing "facts," it generates the most likely next word (next token) based on statistical probability, based on vast training data.

Even if you ask for US-China tariff policy, it might find semiconductor policy or automobile policy. Even if you ask for semiconductors, it might find tariff rates or tariff items. Even if you ask for tariff rates, it might find data from 2018 or 2025.

Even for simple requests, the more data and judgments required to execute them, the more voluminous the task. If you want AI to produce the desired results, it's essential to explain your situation and thoughts as specifically as possible from the beginning.

### Fourth Realization: AI prioritizes completing requests.

Since the original purpose of using AI was to develop automated trading programs and profit verification programs, we utilized AI in various areas beyond tariff policy. Through this, we realized that efficiency was ultimately paramount, regardless of whether the AI could handle large conversations simultaneously due to a large token pool or a small token pool.

What would an AI do if it were to request something vastly exceeding the chat window's token capacity? Naturally, it would continue the task. However, due to token limitations, it would either halt the output or only complete a portion of the request. This is because it processes requests with a limited capacity from the start.

Conversely, even if an AI were to provide a large token pool, the company that developed it would have no choice but to efficiently distribute its limited power and other resources to provide a large number of tokens to a large number of users. In other words, to ensure the continued provision of large token pools, I believe the AI was designed to prioritize efficiency over completeness.

Of course, this structure isn't a problem; it's inevitable. Even when developing AI, my top priority is ensuring that it can be used by a large number of people. That's why I believe it's not a bad idea for large-scale projects to be planned by humans, focusing on purpose rather than efficiency.

Of course, like in the past when developing automated trading programs, you could request AI to create a development request from the beginning. However, it's ultimately humans who can verify various aspects, such as the scale and detailed processing.

After planning is complete, I break down the massive task into smaller pieces and have AI handle parts of it. After AI confirms completed and remaining tasks, it continues to iterate through the process. This is my current approach. Since AI remembers and considers previous conversations, it's especially efficient to open a new dialog box when working on similar but different tasks, rather than completely different ones.

For example, tariff rates and HTS codes are related. Imagine working on tariff rates, collecting HTS codes, and then needing to collect additional HTS code information. If you simply ask Claude to find information A, Claude won't be able to distinguish whether the user needs that information for the tariff rate or the HTS code.

In particular, if information A can be found by government agencies with a deeper connection to tariff rates than HTS codes, the search may be completely different from the user's intent. However, this is by no means the AI's fault; it's simply a result of the user's failure to specify the information clearly. Therefore, we've been planning this project from the beginning, keeping this in mind and implementing a process that separates and combines all tasks that should not be mixed.

### Fifth Realization: Ultimately, User Capabilities Matter Most

The original goal wasn't to collect US-China semiconductor tariff policies, but rather Chinese tariff policies. While the request was much simpler and more straightforward, the scope and content required were so vast that we adjusted the goal to collect US-China semiconductor tariff policies. However, we also had to break it down further into specific areas, such as tariff rates, policies, tariff items, HTS codes, implementation periods, and economic policies. Even within these subdivided objectives, we had to further subdivide and implement specific tasks.

Ultimately, the most important factor is not the AI's performance or type, but the user's goals. And the entity that knows best is the user, not the AI. I believe a user's ability lies in expressing and implementing their own desires. Regardless of AI's capabilities, I believe only the user can clearly explain and convey their wishes.

AI's greatest strength lies in its ability to communicate with users in natural language. In other words, accurately understanding the user's intent is the future direction for AI. Therefore, if the user suggests a different perspective, arguing that a response from the AI wasn't intended, the AI has no choice but to reconsider its perspective and follow the user's wishes.

### Most time is inevitably spent on planning and verification

I spent over 12 hours a day, almost every day, for six months, for various purposes. At least half of that time was spent on verification. Of course, since we also use AI for additional searches, it's difficult to clearly distinguish between verification time and AI usage time. However, the important point is that while the AI executes, the user is the one performing the verification. In other words, I believe the human role is shifting from creation to planning and verification.

Especially after planning is complete, verification is a constant task. In fact, excluding the small amount of time spent typing to request AI, it's more accurate to say I spend over 10 hours a day solely verifying. While AI is certainly used for verification, human review often involves detailed improvements, making manual verification unavoidable.

While I've highlighted the various limitations of AI, I'm by no means suggesting we abandon its use. Rather, as I mentioned in Week 1, I'm encouraging a deeper understanding and more efficient use of AI. I've become so immersed in it that I can't do anything without it.

By leveraging AI, I've discovered ways to handle tasks like searching thousands of policy documents and articles every week, determining and organizing complex information relationships, and more. AI collects and processes vast amounts of information at a speed unattainable by humans. It's a tool that goes beyond mere efficiency and elevates goals, enabling me to reach previously unattainable heights.

Ride AI and go further.

---

### Week 3 Preview: Lost in the Diverse Information from Government Agencies

As mentioned in Week 1, my initial goal with AI was to develop automated trading and profit verification programs. During this process, I designed a prompt that would automatically collect international political trends, previously collected manually, using AI.

The content, keywords, and search sources were all clear and familiar, so I completed it quickly. I assumed policy information would be similar, so I took it lightly.

However, once I started, I discovered that the content and format of the information provided by each agency varied. I'll share how difficult it was to integrate the various pieces of information, and how I solved them.

See you in Week 3.

---

# Week 3: Types of Information Handled by Various US Government Agencies

⚠️ This column **shares the process of creating prompts for free educational purposes** and does not constitute investment, legal, or financial advice.** AI execution results may contain errors, so independent verification is essential. **All risks associated with their use lie solely with the user.** They cannot be directly used for business decisions. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**See all essential checklists below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Policy Information Collection Separate from Understanding International Political Trends

In Week 2, we learned about the limitations of AI and the importance of verification. However, as I mentioned, when we started collecting policy information, we knew nothing about it and didn't even know what to collect. In particular, the statements made by key figures in international politics and the policy information from government agencies I had previously collected differed significantly in terms of their sources and scope, making it even more difficult to grasp the methods for collecting policy information.

Before discussing the various government agencies announcing tariff policies, I'd like to first explain how I monitor international political trends, compare them, and explain the differences.

During my 50 months of overseas futures trading, I've closely observed international political trends. I believe international politics is the most important investment tool, so information like Trump's remarks, interviews with key politicians, and White House briefings move the market, making it essential to quickly grasp this information.

When I decided to utilize AI, my first priority was to automate this process of monitoring international political trends. While I could have connected to platforms like X (Twitter) and APIs to quickly identify statements from key politicians, I'm not a developer, so I wanted to proceed with the simplest approach. Therefore, I decided to utilize web_search, a search tool already provided by Claude, as a simpler approach.

When I request a search, Claude instantly selects appropriate keywords, searches various sites, and summarizes the results. Typically, it reviews the titles and content of 10 articles at a time and organizes them. If there's no significant content, it might check fewer than 10 articles. However, at peak times, it might perform five searches of 10 articles each, for a total of 50 articles.

This method was perfect. Specifically, the combination of Sequential Thinking and web_search allowed Claude to automatically research the information I needed, performing additional searches if necessary. Simple search commands were sufficient, without complex technology, and I was extremely satisfied.

As mentioned in Week 2, I gradually developed the system, analyzing the summarized content into seven hubs, strengthening the insights, and even generating and validating predictions. Having successfully utilized AI to understand international political trends, I was confident that policy information collection would also be easy, and I was ready to move on to the next step.

### Expanding Investment Opportunities and the New World of Policy

After successfully understanding international political trends, I decided to expand my investment horizons. Until now, I'd traded indices like the S&P 500, crude oil, and US Treasury bonds, as well as commodities, but expanding into a wider range of assets required detailed policy information. Policy is an extension of international politics, and I began a casual search, intending to further develop my existing method of understanding international political trends.

I asked Claude to look up US semiconductor tariffs on China, and several media articles came up. They included news articles about increased tariffs on Chinese semiconductors, but they were literally just summaries of tariff increases. Since I needed specific policy information, I decided it would be best to search for information directly from government agencies.

I asked Claude again, "Where do you get the original information directly from the US government?" He began Sequential Thinking. "US government policy announcements are made by various agencies. I think we should search the Federal Register, CBP, USITC, and USTR." I approved, and Claude began his search.

### International Political Trends vs. Policy Information: A Completely Different World

Unfamiliar documents, fragmented information... The moment I first encountered them, I quickly realized that understanding international political trends and gathering policy information were completely different worlds. Understanding international political trends was simple. Targeting a few media outlets, searching for specific keywords and events yielded neatly organized articles, and cross-checking across various media outlets was easy.

However, gathering policy information was a completely different story. There were so many government agencies, each covering different topics, and the sheer number of categories was confusing. I didn't even know what to search for, let alone what I needed to know. A different approach was needed.

### Back to the Beginning

After several web searches, I gave up on gathering policy information and decided to start by identifying the government agencies that issued the policy announcements. The following query came up: "Using Sequential Thinking, list all government agencies that announce U.S. tariff policies on China.”

Federal Register, White House Presidential Actions, USTR Section 301 Exclusion Process, Department of Commerce Section 232, CBP Cargo Systems Messaging Service, CFIUS Annual Reports, Presidential Memoranda, [Regulations.gov](http://regulations.gov/), America First Trade Policy Document, USTR National Trade Estimate Report, Pentagon 1260H Report, Restoring Trade Fairness Act, House Select Committee on CCP, Congressional Hearing Records, Section 232 Investigations, US-China Economic and Security Review Commission, Section 421 Investigation Reports, AD/CVD Investigation Database, State and Local Government Reports, Industry Trade Associations, Think Tanks, Academic Institutions, Steel Industry Association, Auto Parts Council, Various Sector-Specific Sources…. There were 25 in total.

For international political trends, I only had to consult a few media outlets. However, for policy, 25 organizations and platforms published their own information. In other words, media outlets could have covered the same content by selecting just a few, and that was more efficient. However, policies covered different topics, so it felt like I had to cover everything. I was truly lost and confused. "Do I really need to read all of this? Is it right to read all of this?”

### First Filter: Let's Focus on Semiconductors

I requested Sequential Thinking. "I only need semiconductor tariffs. Are there any sources I can exclude from these 25? Think about it." Claude excluded two sources specific to industries other than semiconductors, but I felt this wasn't enough and needed to filter a bit more. I needed a different standard.

### Second Filter: Only Facts

"Think again with Sequential Thinking. I only need official government announcements. I don't need private analysis or interpretation.”

Claude categorized the 23 announcements into government agencies and private organizations, and selected private industry groups, private research institutes, and academic institutions. These organizations provide "analysis" but not "publication." While it would be nice to include analysis, I decided to boldly exclude too many sources because I felt it was a top priority to eliminate duplication.

I narrowed it down to 20, all government agencies. However, 20 was still too many. At that point, I decided to investigate all sources, even if they were numerous, if necessary, so I conducted a small test for a mid-term review. I requested, "Use web_search to search the Federal Register for semiconductor tariffs." The results were as follows:

However, the results were a mix of [federalregister.gov/…](http://federalregister.gov/documents) (government official), [...com/.../federal-register](http://cnn.com/.../federal-register) (media reports), [...lawfirm.com/analysis](http://lawfirm.com/analysis) (law firm analysis), and [...blog.com/my-opinion](http://blog.com/my-opinion) (personal blog). Even though the content was similar, the sources were mixed, not government agencies, so I filtered out only government agency sources.

"Wait a minute. Which of these were published directly by the government?" I asked again. "Search only on [federalregister.gov](http://federalregister.gov/)." This time, only government sites were returned, but the problem persisted.

Proposed Rule on Semiconductor Tariffs, Final Rule: Section 232 Investigation, Notice: Section 301 Initiation, Amendment: HTS Classification, Correction: Technical Amendment... The sheer number of documents I received left me with no clue what to look for. It felt like things were starting to clear up, but I was still lost. I was missing a more fundamental problem.

### Third Filter: Only those that publish policies

"Twenty is still a lot. Think sequentially. Are there any agencies among these that 'don't publish policies'?”

Claude thought. Among them, some were statistical releases rather than policy announcements, some departments were producing reports, and some were discussion records that hadn't yet been officially released. Furthermore, it included a collection of past cases. In fact, none of the 25 agencies Claude recommended were irrelevant or unnecessary, but I wanted to focus and find the core.

In the end, starting with 25, I filtered them three times and narrowed them down to 14. The remaining sources were White House Presidential Actions, Presidential Memoranda, USTR Section 301, Commerce Section 232, CBP CSMS, Federal Register, [Regulations.gov](http://regulations.gov/), America First Trade Policy, USTR NTE Report, Pentagon 1260H, Restoring Trade Fairness Act, House CCP Committee, Section 421, and the AD/CVD Database.

### Sources alone weren't enough.

I thought I was done. "Now I can just search the Federal Register for semiconductor tariffs!" But when I actually did it, I ran into a problem. "What should I search for in the Federal Register? Semiconductor tariffs? Section 232? HTS 8542? Proposed Rule? Final Rule?”

I asked for Sequential Thinking. Claude thought. The Federal Register publishes countless documents. The results vary greatly depending on the search keyword. A search for "semiconductor tariff" yields countless results. Ultimately, knowing the source alone won't do anything. You have to define what you're looking for. Ultimately, the problem wasn't finding the source. The problem was not knowing what I was looking for. I had to start over.

---

### Week 4 Preview: Narrowing 140 Sources to 6

I found 14 sources, but a new problem awaited me. Each source published more than 10 pieces of information.

"Searching 14 × 10 = 140 is impossible." I changed the question. Instead of "What does each source publish?", I asked, "What do I need to know to predict the next tariff target?" Through Sequential Thinking, we've identified six types of information and completely shifted from a source-centric to an information-centric approach. In Week 4, we'll reveal this transition process.

See you in Week 4.

---

# Week 4: Top-Down Information Mapping

⚠️ This column **shares the prompt creation process for free educational purposes** and does not constitute investment, legal, or financial advice.** AI execution results may contain errors, so independent verification is essential. **All responsibility for their use lies solely with the user.** It cannot be directly used for business decisions. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**See all essential checklists below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### More Important Than 14 Sources

In Week 3, we narrowed 25 sources down to 14 through a four-step filtering process. However, we were missing something crucial. Defining the information (content) was the priority, not finding the source (source). Since each source published a wide variety of information, I calculated that even if I only searched 10 items from each source, I would have to search 14 × 10 = 140 times.

140 web_searches would mean checking and summarizing approximately 1,400 articles. The problem was that there was no standard or method for mapping and organizing all 140 pieces of information. I reconsidered, "Why did I even bother collecting policy information?”

My goal was to predict the next tariff item to expand my investment portfolio. So, the question was wrong. "What information does each source release?" is a source-focused question. "What information is needed to predict the next tariff item?" is a goal-focused question. From then on, I changed my thinking and redefined my goals.

### Using the Method for Validating Investment Strategies

I decided to focus on my true goal of predicting tariff items, and I began organizing the information before even gathering it. While studying investment, I wanted to find the best investment strategy, and to achieve this, I followed the same approach of comparing each book I read to the strategies covered in previous books.

The key is simple: understanding the structure first. After reading nearly 300 investment books, I realized that investment strategies can be broadly divided into two categories: trading and investing. However, when broken down into specifics, no single successful investor's strategy was identical to another's. However, their strategies could all be explained by returns, entry points, win rates, take-profit margins, and stop-loss margins.

Based on this, I was able to measure the past returns of every investment strategy in the world, and the most important factor, of course, was return. While policy information is complex and government agencies are diverse, what ultimately matters to me is predicting the next tariff item. I organized my thoughts by clarifying that I was gathering information for my own goals.

In other words, rather than simply collecting policy information released by government agencies, I shifted my focus to proactively searching government agencies to gather additional information, such as tariff rates and tariff periods, based on tariff items.

### Beginning Systematic Mapping

First, I decided on my search targets. It's impossible to examine all tariff policies, so I focused on semiconductors, a representative industry, to establish a system. I believed that if I could learn how to collect policies using semiconductors as an example, I could apply the same approach to other industries. Since my goals had changed, I forgot all 14 existing sources and started anew.

When I asked Claude to list all the government agencies that issue US tariff policies, he provided the following: Federal Register, Customs and Border Protection (CBP), International Trade Commission (USITC), United States Trade Representative (USTR), Department of Commerce, and White House (Executive Orders).

### Focus on Types, Not Sources

Since the purpose is more important than the information itself, I began to explore the types of information available from which government agencies. Instead of thinking about what information I'm looking for, I began to explore the data by thinking about my approach and finding the right information.

Using Sequential Thinking, I began asking Claude questions about various aspects, such as which government agencies announce tariff-tariff items and which agencies issue tariff rates. By asking questions one by one, tailored to my goals, I finally began to get the hang of it.

I noticed overlapping government agencies, and at the same time, I realized that rather than collecting all the policy information released by each agency, it would be more efficient to search and identify the relevant government agency to obtain the information I needed.

In fact, I initially planned to design a structure that would collect only information on tariff rates and implementation periods, then map them to target items and collect policy information. However, I felt it was too simplistic, so I used Sequential Thinking to ask if there were any other information types besides tariff items, tariff rates, and tariff periods. The results revealed the information types I currently use: strategy, target items, economic scale, HTS codes, tariff rates, and implementation periods.

There were several other information types, but I determined that the six previously mentioned were the most heterogeneous, so I explored the relationships between these six and the other information types. I wanted to see if these six types could be combined with other information types and explore their relationships. Using Sequential Thinking to map the six information types to other information types through various questions, we concluded that the six government types can all encompass core information.

### Structure the Six Information Types into Three Relationships

Of course, although the six information types were heterogeneous, they were interrelated. I distinguished them because their sources and purposes of information collection differed. Ultimately, I believed they were all necessary information, simply playing different roles within the larger framework of the US-China semiconductor tariff policy. Therefore, I decided to begin by understanding the relationships among the six information types.

When testing previous investment strategies, my favorite way to determine relationships was to determine whether they were included. For example, there's the question, "Which came first, the chicken or the egg?" I believe the chicken came first. A chicken might not lay an egg, but an egg inevitably becomes a chicken. Thus, for the six information types, I excluded the target items as the standard and began examining tariff rates, implementation dates, and legal grounds.

### The first relationship was an inclusion relationship.

The strategic classification explained the purpose of the tariff policy, specified the target product, and the economic size explained the basis for the policy. The HTS code specified the exact product number, the tariff rate specified the tariff rate, and the implementation date indicated when the policy would take effect.

The strategic classification determined the target product, and similarly, the target product determined the HTS code. When the strategic classification changed, the target product also changed, and when the target product changed, the HTS code also changed. Because all changes were related, when the strategic classification changed, all sub-information types changed accordingly.

### The second relationship was a binding relationship.

This relationship goes beyond simply evaluating data; it serves to justify policy decisions. For example, when imposing a tariff under US trade law (e.g., Section 301), the extent of the damage to the US economy or the strategic importance of the product must be demonstrated. This economic size figure is presented as an explicit justification for imposing the tariff and serves as a core basis for policy decisions.

For example, "semiconductor imports of $60 billion" isn't simply data; it provides policy justification for imposing tariffs on this item, stating, "Imposing tariffs on this item is the most urgent and critical measure in the national interest." Even if the import amount changes from $60 billion to $50 billion, the "semiconductor industry (target item)" itself remains intact. What changes is the policy importance of this item, or its priority. This is a "tie-in" relationship, where specific figures for the target item and its economic scale are linked to the policy's basis and prioritization mechanism.

### The third relationship is the set relationship.

The HTS code, tariff rate, and implementation period do not evaluate each other. Rather, they form a "set relationship" as the minimum components necessary for the policy to be legally implemented. For a tariff policy to be legally enforced, the subject, object, and timing of the taxation must be clear. Since tariffs are a taxation act, customs officials must be clear about who will collect the tax, how much, and when.

Without an HTS code, Customs cannot know which goods will be subject to tariffs. Without a tariff rate, Customs cannot know how much to collect. Furthermore, without an implementation date, it is impossible to know when the law will take effect. These three items are listed on a single line in the Annex to the Federal Register because they constitute a single legal mandate.

As discussed later, the criterion for integrating and unifying these six information types is item number 2, the target product. This is because it is related to strategic classification (1), is intertwined with economic size (3), and is organized by including HTS code (4), tariff rate (5), and implementation date (6).

Item number 2 relates to all information types, so it was inadvertently deemed appropriate to collect policy information based on the original target product. However, there was a problem. If item number 2 were the highest-level criterion, it would not be possible to use item number 2 as the highest-level criterion because it was included in strategic classification (1).

However, since the strategic classification isn't directly related to any of the other information types, I debated whether to cleanly exclude it. However, Claude insisted on including it. My conclusion was that since the goal was information gathering and analysis and forecasting weren't necessary, it was acceptable to cover item 1 based on item 2. Since we were gathering information on the US semiconductor tariff policy on China, I decided it would be more appropriate to focus on the product rather than the type of strategy.

For your information, this series only covers "information gathering." While I developed a prediction prompt, it includes my personal investment strategy and international political analysis, making it dozens of times more extensive than the current one. The 30-week column will focus on AI-based fact-gathering methodology and will not cover analysis or forecasting at all.

---

### Week 5 Preview: Beginning Prompt Design - Strategy Classification

The process was simple. While item 2 is the baseline, I thought it would be simpler to simply collect facts without analysis or forecasting during the policy information gathering process for each information type, and then proceed with the integration process based on item 2.

In other words, if we collected the six information types sequentially, then integrated all information based on the second target item at the end, and then organized it based on the sixth implementation date, we thought we could organize it chronologically, including all policies scheduled for implementation or under review.

Actually, the original plan was to list everything by implementation date rather than by target item. However, this would have disrupted the relationships among the six information types or resulted in too much duplication, so we decided it would be better to leave the target item as the criterion.

### Now that all the planning is complete, all that remains is execution.

The complex organization is over. We now have a clearer set of criteria for the six information types, and we know which government agencies to target for our searches.

Next week, we'll share a three-week prompt planning process using Claude's text-editor, web_search, web_fetch, and sequential thinking to collect the first information type, the strategic classification.

See you in Week 5.

---

# Week 5: Defining Strategic Categories

⚠️ This column **shares the process of creating prompts for free educational purposes** and does not constitute investment, legal, or financial advice.** AI execution results may contain errors, so independent verification is required. **All responsibility for their use lies solely with the user.** It cannot be directly used for business decisions. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**See all essential checklists below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Six information types were established, but

In Week 4, we established three relationships between the six information types. We structured how strategic categories, target products, economic size, HTS codes, tariff rates, and implementation periods were interconnected. Now, it was time to actually collect the information.

We decided to start by collecting strategic categories. This is because strategic classification is a superordinate concept that encompasses target items, and the tariff rate range is determined by the strategy. I asked Claude, "Find the strategies used in the US semiconductor tariff policy on China.”

The search results came back, but there was a problem. Past data was mixed in, including policies implemented in 2018, investigations published in 2019, and reviews completed in 2024. I needed policies that will be implemented in the future. I didn't need past policies that had already been implemented.

### How to Define the Future

I pondered how to find "future implementation policies." The simplest approach was to filter by date. "Why not just find documents published in the last few months?”

I added a time filter to web_search. I included "after:2025-09-01" in the search query, meaning I wanted to find only documents published after September 2025. The results came back, and the most recent documents were returned.

Note that search engines apply filters differently depending on the search scope. When searching broadly ('AI'), relevance is prioritized, while when searching specifically ('site:federalregister.gov Section 232'), the date filter is strictly applied. For precise filtering, using search commands like site: or more detailed search terms enclosed in quotes is effective.

However, even after filtering as specifically as possible, I felt something was missing. "Is this all there is?" I wondered, "What if there's a survey launched in April 2025? If that survey is scheduled to be conducted in 2026, it's clearly a future implementation policy. However, since the announcement date is before September, it will be missed in my search.

Announcement date and implementation date are different things. Just because an investigation was launched in April 2025 doesn't mean it will be implemented in April. The implementation date is determined after the investigation and a decision is made, but I overlooked this. I decided that date filtering alone wasn't enough, so I considered other criteria.

### Checking Your Thought Process with Sequential Thinking

I asked Claude to conduct a Sequential Thinking study. "Think about it using Sequential Thinking. How can we find future implementation policies?”

"1st thought: To find future implementation policies, we need to find documents with implementation dates in the future.", "2nd thought: But not all documents specify implementation dates.", "3rd thought: What if we filter by announcement date? But we might miss documents with implementation dates in 2026, which were announced in April.", "5th thought: Documents have statuses. Investigation means the investigation is in progress, Proposed means the proposal stage, and Final means the decision has already been made.”

"8th thought: Documents in the Investigation or Proposed status haven't been implemented yet because they're in the investigation or proposal stage.", "12th thought: Then we should judge them by document status, not announcement date. Investigation and Proposed are always future implementations.", "15th thought: Documents in the Final status have already been decided, so we need to check the implementation date. If the implementation date is in the future, we track it, and if it's in the past, we exclude it.”

After over 20 reflections, Claude found the answer. The key is to judge by "document status," not the date of publication. I gained this insight while examining Claude's thought process using Sequential Thinking.

### Filtering Based on Document Status

Now I needed to understand the document status. I learned that policy documents published by U.S. government agencies are broadly categorized into three statuses:

Investigation is a notice that an investigation has been initiated. No decision has been made yet. The investigation will proceed and the results will be announced in a few months. This is always a future implementation, because the investigation is not yet complete, and therefore, not yet implemented.

Proposed Rule is a policy proposal and is in the public comment phase. It is not yet a final decision. It will be revised or finalized after receiving public comment. This is also always a future implementation. Because it is in the proposal phase, it has not yet been implemented.

Final Rule means the policy has been finalized. Now, all we need to do is check the effective date. Final Rule documents specify an "effective date." If the effective date is in the future, we track it; if it is in the past, we ignore it.

Once I understood this structure, it became clear. It's effective to unconditionally track Investigation and Proposed, regardless of their announcement date. For Final, the effective date must be checked. (This is a document status classification for information gathering purposes, not a legal definition or advice.)

### Start Writing Prompts

Now, I needed to incorporate this insight into the prompts. I started recording the handling methods for each status in the prompts and established rules for selecting future enforcement policies.

Documents containing the keyword Investigation are unconditionally tracked, and checking the effective date is unnecessary. This is because the investigation is ongoing, so it's always in the future. Documents containing the keyword Proposed Rule are also unconditionally tracked, and checking the effective date is unnecessary. This is because they're in the proposal stage, so they're always in the future. For documents containing the keyword Final Rule, checking the effective date is essential. Search the document for "effective date" and track if the effective date is after December 2025; exclude if it's before December 2025.

These were simple but clear rules. This rule was written into a prompt, which grew to about 100 lines, including descriptions, processing methods, and examples for each status. For example, if Claude found a document with "Investigation" in the title, he would immediately add it to the tracking list without checking the effective date. If it was a "Final Rule," he would search the document for "effective date" and check the date before making a decision.

By specifying specific keywords and processing procedures in the prompt, Claude could perform his tasks consistently. Instead of a vague request like, "Find a future policy," he could clearly instruct, "If the keyword "Investigation" is present, track it. If it's a Final Rule, check the effective date.”

### The Need for a Checklist

However, as the prompt grew to around 100 lines, I realized a new problem: I couldn't explain these rules every time.

I couldn't repeatedly explain to Claude, "Track Investigations, track Proposeds, check the effective date for Finals..." every time. Especially if the task spanned multiple days, I would have to explain all the rules from scratch every day.

Furthermore, web_search consumes a lot of tokens. Tokens are units of text processed by the AI, and even with just a few searches, the tokens in the chat window are quickly depleted. This forces a new chat window to be opened, but the new chat window doesn't remember the previous conversation.

Ultimately, since many tasks can't be completed in one go, splitting the chat window into separate tasks was ideal for task connectivity. Since I had to reconfigure the same settings frequently, I started thinking that a checklist would be helpful.

What if I saved the rules in a file and had Claude read it every time I opened a new chat window? However, I still didn't know the specifics. How would I create the file, and how would I have Claude read it? How would I manage the longer prompts? These were the kinds of concerns I began to have.

---

### Week 6 Preview: How to Organize Repetitive Tasks

I knew about state-based filtering, but a new problem awaited me. How many searches should I perform? What should I search for in each search? How can I ensure a complete search without missing anything?

Blindly repeating individual searches was inefficient. A systematic search strategy was needed, and I had to figure out how to document that strategy in prompts.

Week 6 will cover the process of organizing repetitive tasks into prompts. We'll understand the characteristics of web_search, break down 60-75 searches into steps, and share the process of expanding the prompts to 400-600 lines.

See you in Week 6.

---

# Week 6: Strategy Classification Prompt Structure

⚠️ This column **shares the prompt creation process for free educational purposes** and does not constitute investment, legal, or financial advice.** AI execution results may contain errors, so independent verification is required. **All responsibility for their use lies solely with the user.** They cannot be directly used for business decisions. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**See all essential checklists below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### I knew how to filter by status,

but in Week 5, I learned how to filter future implementation policies by document status. I wrote a rule in the prompt to unconditionally track Investigations and Proposeds, and to check the implementation date for Finals. With about 100 lines of prompts complete, it was time to start the actual search.

I asked Claude. "Find documents containing the keyword 'Investigation'." The search returned two or three documents. "Keep searching." Another two or three more came up. "There must be more, keep searching." Several more came up.

How long should I keep doing this? How many times would it take to complete the search? This method was inefficient. I had to plan the number of searches.

### Limitations of Individual Searches

At first, I tried requesting searches one by one. I'd say, "Search with the keyword 'Investigation'," and Claude would search and return the results. Usually, two or three documents would appear.

"There must be more, right?" So I'd ask, "Search again with the same keyword." Another two or three results would appear. But this time, some of them were duplicates. How many times would I have to repeat "Keep searching"? Five times? Ten times? I couldn't tell when it was over. If no new results appeared, was it over? But changing the keyword might produce new results.

This method was unsystematic. Simply repeating "Continue searching" was time-consuming, and I couldn't be sure I'd found everything. A systematic plan was needed.

### Understanding the Characteristics of Web Search

I needed to understand how Claude's web search worked. Here are the characteristics I identified:

First, Claude checks about 10 articles per search. This is because he retrieves the top results from search engines. Therefore, a single search won't find everything.

Second, different keywords produce completely different results. While there may be some overlap between results for "Investigation" and "Section 232 Investigation," each produces unique results. Diverse keyword combinations can help reduce omissions.

Third, the site: operator allows you to search only specific websites. For example, "site:ustr.gov Investigation" searches only the USTR website for the keyword "Investigation." By specifying specific government agency websites, you can reduce noise.

Fourth, dividing your search into stages can reduce omissions. Rather than entering all keywords at once, dividing your search into stages—searching for keyword A in Stage 1, keyword B in Stage 2, etc.—will ensure you get results for each keyword.

Once you understood these characteristics, I realized i could develop a systematic search strategy.

### Understanding the Role of Each Source

US government trade policy is announced by multiple agencies. Each agency has a different role and releases different types of information. I identified five primary sources. (This is a source classification for information gathering purposes and is not an official government organizational chart.)

For example, one source primarily issues investigation initiation notices. Another source announces final decisions. Another source announces regulatory changes. Understanding the role of each source will help you know where and what to look for.

Each source also has a different website structure. Some release press releases, others official documents. The search method also had to be slightly different for each source.

I identified what information each of the five sources publishes, what keywords are effective, and what their website structure is like. Based on this information, I began developing a search strategy for each source.

### Designing a Search Strategy

Now, I've designed a detailed search strategy. I planned a four-stage search for each of the five sources.

**Step 1: Proposed Rule Search**

Find documents in the proposal stage. Use the keyword "Proposed Rule" and specify the source's website with the site: operator. For example, for Source 1, I would search "site:source1.gov Proposed Rule semiconductor." I planned to perform three to five searches in this stage.

**Step 2: Investigation Search**

Find documents under ongoing investigation. Use keywords like "Investigation" or "Section 232 Investigation." Depending on the source, I might also use variations like "Section 301 Investigation." I planned to perform three to five searches in this stage.

**Step 3: Determination Search**
Find documents nearing a decision. Use the keyword "Determination." Plan to search 2-3 times in this step.

**Step 4: Search for Final Rule**

Find the final rule document. Search for the keyword "Final Rule" along with a future date, such as "effective date 2026." This excludes Final Rules that have been implemented in the past and only searches for those that will be implemented in the future. Plan to search 3-5 times in this step.

Slightly vary the keywords in each step. For example, in Step 1, use "Proposed Rule semiconductor" in the first search, and "Proposed Rule tariff China" in the second search.

### Plan the number of searches

I calculated how many searches would be required if I were to perform four levels of searches for each of the five sources.

Source 1, with its wealth of information, would require five searches for level 1, five for level 2, three for level 3, and five for level 4, for a total of 18 searches.

Source 2, with its moderate amount of information, would require four searches for level 1, four for level 2, two for level 3, and four for level 4, for a total of 14 searches.

Source 3, with the most information, would require six searches for level 1, six for level 2, four for level 3, and six for level 4, for a total of 22 searches.

Source 4, with its limited information, would require three searches for level 1, three for level 2, two for level 3, and three for level 4, for a total of 11 searches.

Source 5 was a supplementary source, so I figured I'd search it twice in Step 1, twice in Step 2, once in Step 3, and twice in Step 4, for a total of seven searches.

Totaling this would be 18 + 14 + 22 + 11 + 7 = 72 searches. I planned to search 60-75 times to allow for flexibility. I set the range to ensure I had as much information as possible for each source and step, allowing for flexibility as needed.

### Recording the Prompt Systematically

Now I had to document all these strategies in a prompt. I started adding this plan to the 100-line prompt I created in Week 5.

First, I added descriptions for each source. For Source 1, I wrote down what organization it was, what information it published, and its website address. Adding these descriptions to all five sources added about 100 lines to the total.

Next, I documented the search strategy for each source. Step 1 of Source 1 specified what to search for, what keywords to use, and how many times to search. Documenting all four steps required approximately 50 lines per source. With five sources, this added up to 250 lines.

We also recorded the expected results for each step: "In Step 1, we expect to find 5-10 documents at the proposal stage. If there are fewer than 5, use Sequential Thinking to determine the number, then change the keywords and search again.”

We also added search precautions: "Check for duplicate documents by title and exclude them. Documents with a publication date before 2024 will be excluded from review.”

The prompts gradually grew longer. Starting with 100 lines in Week 5, we added 100 lines for source descriptions and 250 lines for search strategies, for a total of approximately 450 lines. With 450 lines for a single prompt, I thought it would be difficult to manage.

### Adding Evaluation Criteria

Once the search was complete, I needed a criterion to determine whether I had found a good result. I had performed 60-75 searches. How would I know if that was enough?

I decided to add evaluation criteria to the prompt. I set the capture rate target at 95-100%. This is the ratio of the actual number of documents found to the total number of expected documents.

I also created evaluation criteria for each source. Source 1 should have at least 10 documents found, Source 2 should have at least 8, and Source 3 should have at least 15. If these criteria were not met, additional searches would be performed in that source.

I also created criteria for each stage. Stage 1 (Proposed) should have at least 5 documents found, Stage 2 (Investigation) should have at least 3, and Stage 4 (Final) should have at least 5.

Incorporating these evaluation criteria and the additional search plan into the prompt increased the length by approximately 100 lines. The prompt now has 550 lines.

Finally, we added validation procedures. "Check the original link for all discovered documents. If an implementation date is specified, double-check. AI results must be verified by a human." We added about 50 lines of validation rules.

Finally, the prompt grew to about 600 lines. This was a sixfold increase from the 100 lines we started with in Week 5.

### Recognizing the Management Challenge

Managing a 600-line prompt in the chat window was difficult. It required a lot of scrolling, and finding specific parts required using Ctrl+F.

A bigger problem was editing. For example, if you wanted to change the number of searches in Step 2 of Source 1 from 5 to 7, you had to find the location and change the number. However, copying and pasting the prompt could accidentally change something else.

Maintaining consistency was also challenging. The prompt initially stated "18 searches in Source 1," but later in the detailed plan, it read "5+5+3+5=18." If the detailed plan were revised to "5+7+3+5=20 times," the first 18 times would also have to be changed to 20. There were multiple dependencies like this.

Version control was also a problem. Today's version, tomorrow's revised version, the day after tomorrow's revised version... I couldn't figure out which was the most recent. I became convinced that I needed to manage the prompts as files. But how? What tool should I use? These were the questions I began to ponder.

---

### Week 7 Preview: Managing Prompts as Files

Managing a 600-line prompt in the chat window had its limitations. Every edit carried the risk of error, and version control was difficult. I needed a way to manage it in files. Then, by chance, I discovered Claude's text editor, MCP. In fact, I was developing an automated trading program using Claude, and I installed it after developers recommended it on YouTube.

I found it effective for document editing, so I gave it a try. Thanks to it, I can create prompts as files and edit only the necessary parts. In particular, the str_replace command precisely finds and replaces specific strings, eliminating the risk of accidentally altering other parts.

In Week 7, we'll create a checklist with text-editor and systematically manage over 1,000 lines of prompts using the create, view, str_replace, and insert commands. We'll also share how to combine Sequential Thinking with text-editor to automate your workflow and maintain consistency across interrupts and restarts.

See you in Week 7.

---

# Week 7: Strategy Classification Collection Planning

⚠️ This column is **a sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice.** AI execution results may contain errors and independent verification is essential, and **all responsibility from utilization is entirely attributed to the user themselves.** Cannot be directly used for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all required confirmations below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Completed a 600-line prompt but

In Week 6, I divided 60-75 searches by stages, designed source-specific strategies, and completed a prompt of approximately 600 lines. It was a systematic prompt that included descriptions of each source, 4-stage search strategy, search frequency plan, and evaluation criteria.

However, there was a problem. Managing 600 lines in the chat window was not easy. To check the prompt once, I had to scroll for a while, and to find a specific part, I had to use Ctrl+F. A bigger problem was modification, during which I could mistakenly touch other parts. I needed a way to manage it as a file.

### Specific difficulties of management

I organized the problems of managing a 600-line prompt in the chat window specifically.

First, it is difficult to grasp visually. 600 lines cannot all be seen on one screen. To see the front part of the prompt, I had to scroll up, and to see the back part, I had to scroll down. I could not grasp the overall structure at a glance.

Second, it is difficult to find specific parts. If I wanted to modify "source 3's 2-stage search strategy", I had to search for "source 3" with Ctrl+F. However, because the word "source 3" appears in multiple places, I had to search multiple times until I found the desired position.

Third, mistakes can occur during the modification process. During the process of copy-pasting the prompt, parts could be cut off, or I could mistakenly delete other parts. Because it is difficult to review all 600 lines every time, I might not immediately discover such mistakes.

Fourth, it is difficult to maintain consistency. If I specified "source 1: 18 searches" in the front part of the prompt, but modified the search count in the detailed plan in the back part, I had to modify the front part together. Because there are multiple such dependencies, when I modified one place, I had to find all related places and modify them.

Fifth, version control is not possible. Today's created version, tomorrow's modified version, the day after tomorrow's modified version again... Even if I saved each as a text file, I was confused about which was the latest. When I wanted to revert to a previous version, it was also difficult.

### Discovered text-editor

Among Claude's features, I learned about something called text-editor. This is one of MCP (Model Context Protocol), a feature that allows Claude to directly create and modify files. Using text-editor, I can make the prompt into a file. Instead of pasting 600 lines into the chat window, I can save it as a file and have Claude read that file when needed.

What was more important was the modification feature. I can precisely modify only specific parts of the file. Without needing to copy-paste the whole thing, I could specify and change only the parts I wanted to modify. I decided to use text-editor. As a first attempt, I decided to make a checklist file.

### Started utilizing commands

text-editor has four main commands. create, view, str_replace, insert.

The create command creates a new file. I created a file with the name "Semiconductor_Strategy_Checklist.md". I entered the 600-line prompt written in Week 6 into this file. Now the prompt exists as a file.

The view command reads the file. I can read the whole thing, or I can read only specific parts. For example, if I say "show only PART B", it finds and shows only the PART B part. Without needing to scroll through all 600 lines, I could check only the needed parts.

The insert command adds new content after a specific line of the file. Because existing content remains as is and only new lines are added, it is convenient when adding items one by one to a list without worry of modification.

The str_replace command was important. This finds a specific string in the file and replaces it with another string.

### The effect of str_replace

I will explain with a specific example why the str_replace command is important. Assume there is an expression "USTR search 15 times" in the prompt. I want to change this to "USTR search 20 times".

If it's the chat window management method, I would have to copy all 600 lines and paste them into a text editor, find "USTR search 15 times" with Ctrl+F and modify it to "USTR search 20 times", then copy all 600 lines again and deliver them to Claude. During this process, copy-paste mistakes can occur, and I could mistakenly touch other parts.

The reason this is important is consistency. It prevents mistakenly touching other places. If I precisely specify the part to change, only that part changes and other parts do not change. As another example, suppose there is a long sentence "source 1 search count: 18 times (stage 1: 5 times, stage 2: 5 times, stage 3: 3 times, stage 4: 5 times)". I need to change stage 2 from 5 times to 7 times, and also change the total from 18 times to 20 times.

With the chat window method, I would have to find and modify two places each, and could miss one of the two. Using str_replace, I put the entire sentence in old_str and put the modified entire sentence in new_str. Then it finds and changes that sentence. str_replace was the core tool for maintaining consistency in prompt management.

### Structured the checklist

Now I structured the 600-line prompt into a checklist. Going beyond simply making it into a file, I organized it into a systematic structure.

**PART A: Project Information and Rules**

Here I put the project's objectives, strategy classification definitions, document status rules, and other basic information that does not change every time. Rules like "Investigation unconditionally track", "Final confirm implementation date". This part was approximately 150 lines.

Why I separated this separately is because these rules do not change during work. Whether searching 10 times or 100 times, these rules are the same. When Claude starts work and reads this part, it can know what it should do.

**PART B: Source-specific Search Strategy**

Here I put descriptions of each of the 5 sources and 4-stage search strategy. I recorded in detail what kind of organization source 1 is, what to search in stage 1, and how many times to search. This part was the longest at approximately 400 lines.

The reason I separated this is because the search strategy can be modified frequently. After doing searches, if I judge "stage 2 of source 1 is insufficient at 5 times, need to increase to 7 times", I find and modify only that part in PART B.

**PART C: Search Results Record**

Here I made space to record actually discovered documents. I record which documents were discovered by each source, by each stage. This part is initially empty and gets filled while progressing with searches. I prepared approximately 300 lines of space.

The reason I separated this is to track progress. If I record like "source 1's stage 1: 3 out of 5 times completed, 8 documents discovered", I can clearly know how far I've gone.

**PART D: Evaluation and Next Tasks**

Here I record evaluation criteria and what to do next. I record judgments like "target acquisition rate 95%, currently achieved 70%. Need additional search in source 1". It was approximately 150 lines.

The reason I separated this is to judge the completeness of the work. It's not finished just because I completed 60 searches, I need to evaluate whether I achieved the goal.

Dividing into PART A, B, C, D like this resulted in approximately 1,000 lines total. What started with 100 lines in Week 5 increased 10 times.

### Combined with Sequential Thinking

Having made the checklist, I had to decide how Claude would utilize this. I decided to combine it with Sequential Thinking. I designed the workflow like this. First, Claude reads the checklist with the view command. It reads PART A to check the rules, reads PART B to grasp the search strategy, and reads PART C to confirm progress up to now.

Next, it analyzes the situation with Sequential Thinking. "Source 1: stage 1 3 out of 5 times completed, stage 2 not yet started. Source 2: not started. What needs to be done next is source 1's stage 1 4th search." Like this, Claude thinks and grasps the current situation.

Then it proposes the next task. "Will perform source 1, stage 1, 4th search. Will use keyword 'Proposed Rule tariff'. Will start if you approve.", When I approve, Claude executes the search. It analyzes the search results and organizes the discovered documents.

Finally, it updates the checklist with str_replace. In PART C, it changes "source 1, stage 1: 3/5 completed" to "source 1, stage 1: 4/5 completed". It also adds the discovered document list. This flow is one cycle. And then it returns to the beginning, reads the checklist with view, grasps the situation with Sequential Thinking, and proposes the next task.

### Established the workflow

I specified the specific workflow in the prompt.

Stage 1: Read the checklist with the view command. No need to read the whole thing, only read the parts needed for current work. For example, if working on source 1, only read "PART A and PART B's source 1 part, PART C's source 1 progress".

Stage 2: Grasp the situation with Sequential Thinking. Think "what has been done up to now, what should be done next". During this process, check the checklist's rules and analyze the progress.

Stage 3: Clearly propose the next task. "Will perform source 1, stage 1, 5th search. Keyword is 'Investigation semiconductor China'." It is a specific and clear proposal.

Stage 4: Get the user's approval. I review the proposal, and if there's no problem, I approve saying "okay, start". If I want to change the keyword, I request modification saying "change keyword to 'Section 232 Investigation'".

Stage 5: Execute the task. Search with web_search, analyze results, and organize discovered documents.

Stage 6: Update the checklist with str_replace. Change the progress from "4/5" to "5/5", and add discovered documents to PART C. Precisely modify only that part.

Stage 7: Return to stage 1 again. Read the updated checklist with view, and grasp the next task with Sequential Thinking.

I specified this 7-stage flow in the prompt. Claude follows this flow and automatically proceeds with work. I don't need to command "what's next" every time. Claude looks at the checklist and proposes the next task by itself.

### Maintained consistency

The biggest advantage of this system was maintaining consistency. It was okay to interrupt work. For example, if I complete source 1's stage 1 5 times today, the checklist records "source 1, stage 1: 5/5 completed, 12 documents discovered". And then I stop work and leave work.

When starting again the next day, I open a new conversation window. There is no previous conversation content. However, the checklist file remains as is. I request Claude "read the checklist and propose the next task". Claude reads the checklist with view and checks "source 1, stage 1: 5/5 completed" in PART C.

With Sequential Thinking, it judges "source 1's stage 1 is completed, so next is stage 2". And it proposes "will start source 1, stage 2, 1st search". I don't need to explain how far I got yesterday. The checklist remembers everything.

Rules are likewise. If "Investigation unconditionally track" is specified in PART A, even if I open a new conversation window, Claude reads the checklist and follows that rule. I don't need to explain "Investigation must be unconditionally tracked" every time. Consistency is automatically maintained. Because there is the checklist, an "external memory".

### Importance of verification

Although the checklist automatically updates, human verification was essential. When Claude updated the checklist with str_replace, I always checked. If it changed "source 1, stage 1: 3/5 completed" to "source 1, stage 1: 4/5 completed", I checked whether the 4th search really completed. I also checked whether discovered documents were correctly recorded in the checklist.

Although the possibility of str_replace mistakenly changing the wrong part is low, humans had to do the final check. It was a structure where AI proposes and executes, but humans approve and verify. Especially as mentioned in week 2, because regardless of errors, when humans review, parts that can be further developed are always discovered, so verification no matter how much emphasized is not excessive.

### Final completion

Thus a checklist of 1,000 lines or more was completed. PART A has 150 lines of rules, PART B has 400 lines of search strategy, PART C has 300 lines of results record space, PART D has 150 lines of evaluation.

Managed with text-editor's create, view, str_replace, insert commands. Grasp the situation and propose next tasks with Sequential Thinking. The 7-stage workflow automatically repeats. Consistency is maintained even with interrupt-restart. Because the checklist remembers all progress and rules.

The prompt that started with 100 lines in Week 5 increased to 600 lines in Week 6, and was completed as a systematic checklist of 1,000 lines or more in Week 7. Now ready to systematically collect strategy classifications.

---

### Week 8 Preview: Target Item Collection

The checklist for strategy classification collection is completed. Now it's the turn to collect the second information type, target items. However, target items are more complex than strategy classifications. One strategy can include hundreds of items, and each item has different descriptions. How can I find all items without omission? How should the prompt become more sophisticated?

Week 8 handles new strategies for target item collection, and increasingly complex prompt management methods. Will share how the checklist evolves, and methods for simultaneously managing multiple information types.

Will meet in Week 8.

---

# Week 8: Logic of Target Item Selection

⚠️ This column is **a sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice.** AI execution results may contain errors and independent verification is essential, and **all responsibility from utilization is entirely attributed to the user themselves.** Cannot be directly used for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all required confirmations below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Completed the strategy classification checklist but

In Week 7, I completed Strategy_Checklist.md. It was a systematic checklist of 1,000 lines or more, containing rules in PART A, search strategy in PART B, results record in PART C, and evaluation criteria in PART D. I managed it with text-editor's create, view, str_replace, insert commands, and automated the workflow by combining it with Sequential Thinking.

Now it was the turn to collect the second information type, target items. Among the 6 information types identified in Week 4, target items came after strategy classification. Strategy classification was the framework of the policy, and target items were the specific products within it.

However, I had a concern. Should I create a checklist for target item collection from scratch? Or could I refer to Strategy_Checklist.md?

### Referred to Strategy_Checklist.md

I decided to refer to Strategy_Checklist.md. I opened the file with text-editor's view command and requested structure identification using Sequential Thinking. Claude instantly grasped the structure and characteristics, especially the PART A, B, C, D structure was clear. PART A was project information and rules, PART B was source-specific search strategy, PART C was results record, PART D was evaluation criteria.

The reason this structure was effective was because it matched the work order. First read the rules, check the search strategy, record the results, and finally evaluate. The order was clear.

I decided to use the same structure for Product_Checklist.md as well. Create PART A, B, C, D, but change the content to fit target items. I created an empty file with text-editor create command and saved it with the name "Product_Checklist.md", and started filling the content.

### Discovered difference: What to find

While writing PART A, I discovered the first difference. Strategy and Product had different search targets. Strategy_Checklist.md found the documents themselves. "Is this document Investigation, Proposed, or Final?" One document was one search result. I checked document title, publication date, status, and it was relatively simple. Completed when finding 60-75 documents.

Then what should Product_Checklist.md find? I had to find the product list inside documents. "What products are listed in this document?" One document could have 10, 50, 100 products. Not finding documents, but extracting lists inside documents.

For example, at the end of a document published by some government agency, there is an appendix, and 60 products are listed in table format. Memory chips, Processors, Amplifiers... Each product also had descriptions, and at this time I had to decompose the composition and grasp the structure.

At this time, a strategy to find list documents was needed. Not all documents had product lists, some documents only had policy explanations and no specific product lists. Some documents had lists in table format in appendices, some documents had product names scattered in the main text.

First, I had to select and find only documents with lists. It was efficient to find documents with appendices, documents with table formats. I recorded this strategy in Product_Checklist.md. I added it to PART A with str_replace command. I specified rules like "priority securing of list documents", "check appendices and table formats".

### Discovered difference: How to save

While writing PART B, I discovered the second difference. Strategy and Product used different commands.

What command did Strategy_Checklist.md use? Only str_replace was used. It was updating checkboxes. Changed "[ ] source 1 search (0/25)" to "[x] source 1 search (25/25)". It was changing existing content. str_replace was suitable. There was no need to separately save results. I only needed to indicate whether documents were found or not.

What command would Product_Checklist.md need? Search results had to be accumulated. Found 10 products in the first search. Found 15 more products in the second search. Found 12 more products in the third search. A total of 37 had to be accumulated.

Accumulation was impossible with str_replace. If I changed "10 products" to "15 products", the first result disappeared. It was replacement, not accumulation. I needed a way to preserve 10 and add 15.

At this time, the insert command was needed. insert was a command to add content at the end of the file. It added at the end without touching existing content. If I saved the first 10, added 15 at the end, and added 12 at the end, all 37 were preserved.

But where to use insert? If I accumulated search results in Product_Checklist.md, the checklist became too long and plans and results mixed. If 500 lines of search results attached after 100 lines of search plan, I had to scroll for a while to check the plan again.

Eventually I decided to additionally create and manage a separate file called Product_Article.md. Accumulate only search results in this file, Product_Checklist.md managed only plans, Product_Article.md managed only results. Roles were separated.

I recorded this rule in Product_Checklist.md. I added an "insert command usage rules" section with str_replace. I specified rules like "use insert only in [Article.md](http://article.md/)", "use only str_replace in [Checklist.md](http://checklist.md/)".

### Discovered difference: How many files to use

A two-file structure was confirmed. It was the third difference between Strategy and Product.

Strategy_Checklist.md was 1 file. Both plan and progress were in this file. "[ ] source 1 search" was the plan, and "[x] source 1 search" was the progress. Because I only needed to change checkboxes, 1 file was sufficient.

Product needed 2 files. Product_Checklist.md and Product_Article.md. Product_Checklist.md was a plan file, recording what to search, in what order to search, how many times to search. Especially progress was managed with checkboxes, updated with str_replace. Changed "[ ] source 1 search (0/30)" to "[x] source 1 search (30/30)".

Product_Article.md was a results file. Search results were accumulated in chronological order, first search results, second search results, third search results all accumulated. Only added with insert. Did not modify. Did not delete. Only accumulated.

Why separated into 2? Because roles were different. Plans can change. Can adjust "25 searches in source 1" plan to "30 searches". As the goal is to collect information as much as possible without omission, if insufficient while searching, I flexibly increased the count.

However, results should not change. The 10 products found in the first search must be preserved as is to be able to check again later. While progressing with work, there are cases where I need to check "did this product really come from the first search?", and if I modify results, I lose the original.

I specified this file role in Product_Checklist.md. I added a "file structure" section to PART A with str_replace and wrote explanations like "[Checklist.md](http://checklist.md/) = plan and progress", "[Article.md](http://article.md/) = search results accumulation", "reason for separating 2 files".

### New concept: Original preservation

A new concept was added while designing the 2-file structure. It was original preservation. It was a concept that didn't exist in Strategy_Checklist.md.

Why didn't Strategy need original preservation? Because I didn't save search results, I only checked document status. Only judged whether Investigation, Proposed, or Final. Indicated the judgment result with checkboxes, there was no original data, I didn't separately save document links. If needed, it was sufficient to search again.

However, Product was different. Search results were original data, the 10 products found in the first search, the 15 products found in the second search were all originals. I might need to check again later. When asking questions like "did this product really come from which source?", "is the product description accurate?", "is the HTS code correct?", I had to look at the original again.

If I deleted search results, I couldn't recover them and had to search again. There was no guarantee I could get the same results. The policy might have been updated, or the document might have been modified. Losing the original was a big problem.

I established a no-deletion principle. Product_Article.md was modification prohibited, only add with insert, absolutely do not touch existing content. str_replace prohibited, delete prohibited. Create first with create, only keep adding with insert.

What if I mistakenly added wrong content? Still didn't delete. Added a note like "above content error, ignore" with insert. It was a method of leaving the original as is and only adding notes.

I recorded this principle in Product_Checklist.md. I added an "original preservation rules" section to PART A with str_replace. I specified rules like "[Article.md](http://article.md/) is modification prohibited", "use only insert", "str_replace/delete absolutely prohibited", "handle with note addition when error discovered".

For reference, I later modified all strategy classifications completed in week 5, 6, 7 to the same format as well.

### Completed PART A

Now PART A was almost completed. I recorded project information, core strategy, document status filtering, file structure, insert rules, original preservation rules all. In the project information section, I specified the goal. Content like "maximum securing of future implementation target items (95-100%)", "50-75 products expected", "utilize 5 sources".

In the core strategy section, I specified 2 things. First, securing lists not individual collection. Not searching one by one with product names, but finding documents with product lists. Second, track only future implementation. The rule was to unconditionally track Investigation and Proposed, track Final after checking implementation date.

In the document status filtering section, I brought the rules used in Strategy as is. Investigation = always include, Proposed = always include, Final = check implementation date. These rules applied to both Strategy and Product.

In the file structure section, I specified 2-file roles. [Checklist.md](http://checklist.md/) is plan, [Article.md](http://article.md/) is results, also specified usage rules for str_replace and insert. In the original preservation section, I emphasized the [Article.md](http://article.md/) modification prohibition principle. Repeatedly specified use only insert, str_replace/delete prohibited.

PART A became approximately 450 lines. Strategy_Checklist.md's PART A was 150 lines, but Product was 3 times. Because many new rules were added.

### Started PART B

Now I had to write PART B, it was source-specific search strategy. I referred to Strategy_Checklist.md's PART B. It recorded what information each of the 5 sources publishes, what search strategy to use. First I decided to make Product_Checklist.md's PART B with the same structure as well. I divided sections by 5 sources, and recorded role, search strategy, expected results for each source.

The first source had many policy publication documents. There were often product lists in appendices, the search strategy was "priority search for documents with appendices". The second source provided product classification criteria. There were 18,000 product descriptions, the search strategy was "download classification criteria file". The third source provided precedents by product. There were precedents like "what code is this product classified as". The search strategy was "search precedents with product name".

The fourth source provided product lists for specific policies. The search strategy was "check lists by policy". The fifth source provided sensitive product lists. The search strategy was "check sensitive product list". I also planned search counts by each source. First source 25-30 times, second source 5 times, third source 20-25 times, fourth source 10-15 times, fifth source 5-10 times. Expected approximately 65-85 times total.

PART B draft became approximately 550 lines. Strategy_Checklist.md's PART B was 400 lines, but Product was slightly longer. Because explanations by source were more detailed.

### Completed first version

I completed PART A 450 lines, PART B 550 lines. Approximately 1,000 lines total. Product_Checklist.md's first version was completed. I utilized Strategy_Checklist.md experience a lot. I borrowed the PART A, B, C, D structure. I utilized text-editor commands. The method of combining with Sequential Thinking was also the same.

However, I also added many new rules. insert command usage, Product_Article.md file separation, original preservation principle were added. Things that didn't exist in Strategy. The strategy of priority securing of list documents was also new.

But I felt something insufficient. Source-specific strategies in PART B seemed too simple. It only said "priority search for documents with appendices", but specifically how to check appendices? Is web_search alone sufficient?

It seemed I would discover more problems when actually starting searches. PART B seemed to need to expand more. The first version was a framework, I created the basic structure. Now I had to add flesh while actually searching.

---

### Week 9 Preview: Expand while actually searching

I completed the basic framework of Product_Checklist.md. It was approximately 1,000 lines. I contained rules in PART A, source-specific strategies in PART B. However, when actually starting searches, insufficient parts appeared.

web_search alone was insufficient. Search results only showed summaries. I couldn't check the entire content of appendices. I needed a way to get the entire document.

I also discovered another problem. Some documents referenced other documents. There were expressions like "This modifies 89 FR 12345". Should I also track referenced documents? Is there a way to track automatically?

Week 9 handles the process of Product_Checklist.md expanding from 1,000 lines to 1,400 lines while solving these problems. web_fetch usage rules, referenced document automatic tracking logic, source-specific strategy detailing are added.

Will meet in Week 9.

---

# Week 9: Target Product Prompt Structure

⚠️ This column is a **free educational sharing of the prompt creation process**, and is not any investment, legal, or financial **advice.** AI execution results may contain errors and independent verification is essential, and **all responsibility for usage is entirely attributed to the user themselves.** It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Started searching with the first version

In Week 8, we completed the first version of Product_Checklist.md. It was about 1,000 lines, with 450 lines of rules in PART A and 550 lines of source-specific strategies in PART B. We referenced the Strategy_Checklist.md structure and added the insert command and original preservation concept.

Now it was time to actually start searching. We requested Claude, "Read Product_Checklist.md and start searching." Claude read the checklist with view and identified the first task with Sequential Thinking. "I will start searching the first source, Proposed Rule.”

It searched with web_search and results appeared. 2-3 documents appeared and Claude showed a summary. "This document is a Proposed Rule. It contains semiconductor-related content." But there was a problem.

### web_search alone is not enough

Looking at the search results, only summaries appeared. "This document proposes tariffs on semiconductor Memory chips, Processors, detailed product list is in the appendix.", we knew there was a list in the appendix, but the problem was we couldn't see the entire list.

web_search was getting a summary of the search results. It wasn't the entire content of the document, only the title, date, and brief description. It said "60 product list in appendix" but we couldn't know what the 60 items were.

Eventually we had to check the entire document. We had to look directly at the appendix to see what was there besides Memory chips, what each product description was, and what the HTS codes were. It was impossible with web_search.

That's when we had to use web_fetch. Unlike web_search, it's a command that brings most of the web page content without summarizing, bringing all text content of the page including the appendix. Table formats have HTML tags removed but the data comes as is, so we could see the entire product list. However, since it consumes many tokens at once, it couldn't be used for all documents, so it had to be used selectively.

### Creating web_fetch usage rules

We needed criteria for when to use web_fetch. If used for all documents, we would run out of tokens and stop in the middle of progress, so it had to be used only for necessary documents.

The first criterion was document status. Investigation documents didn't need web_fetch. It was just an investigation initiation notice, with no specific product list. Since it only had a notice saying "We initiate an investigation on semiconductor products," web_search was sufficient.

Proposed Rule and Final Rule needed web_fetch. Proposal or final decision documents had specific product lists, listed in table format in the appendix. We had to classify the composition and understand the structure. At this time, we had to get the entire document with web_fetch and check the appendix.

The second criterion was the presence of an appendix. If words like "Annex", "Appendix", "Schedule" appeared in web_search results, it meant there was an appendix. If there was an appendix, we used web_fetch. If there was no appendix, web_search alone was sufficient.

The third criterion was future implementation status. Already implemented past policies didn't need web_fetch. Since we only track future implementation policies, even if it was a Final Rule, if the implementation date was in the past, we skipped web_fetch.

We had to add this rule to Product_Checklist.md. We added a "web_fetch usage rules" section to PART B with str_replace. We specified rules like "Proposed/Final + has appendix + future implementation = use web_fetch", "Investigation = web_search only", "past implementation = skip".

Now searching became 2 stages. Stage 1: Discover documents with web_search, Stage 2: Check entire content with web_fetch when conditions are met, Claude automatically performed these 2 stages. It judged with Sequential Thinking "This document is Proposed and has an appendix, so I will use web_fetch.”

### Documents reference other documents

As we continued searching, we discovered another characteristic: some documents were referencing other documents.

When we checked a Final Rule document with web_fetch, there was an expression like this in the text. "This rule modifies 89 FR 12345." What did this mean? It meant this document modifies another document. 89 FR 12345 was a document number. It pointed to a document on page 12345 of Federal Register volume 89.

Why reference other documents? It was because policies get updated. A policy was announced in 2023, and that policy had a list of 30 products. Later in 2025, while updating that policy, maintaining the existing 30 products and adding 20 products, finally becoming 50 products.

Looking only at the 2025 document, you only see 20 products. It says "20 products being added this time." The existing 30 products only say "refer to 89 FR 12345", so to understand all 50 products, we had to check the 2023 document as well.

Referenced documents also had to be tracked. If we found "89 FR 12345" in the 2025 document, we had to search for that document too. We had to check the 30 products in that document. Only then could we understand all 50 products.

Manual tracking could miss items. We thought it would be good if Claude automatically found and tracked references, so we spoke our concerns using Sequential Thinking, and Claude designed the reference tracking logic.

### Adding reference tracking logic

The reference tracking automation logic was for Claude to find reference expressions while reading documents and automatically search for those documents. Reference expressions had patterns. Forms like "89 FR 12345", "88 Federal Register 67890", "This modifies 87 FR 54321", where FR was an abbreviation for Federal Register, and 89, 88, 87 were volume numbers. 12345, 67890, 54321 were page numbers.

At this time, patterns could be extracted with regular expressions. When we requested Claude "Find 'XX FR XXXXX' patterns in the document," Claude extracted them with regular expressions. It found all references like "89 FR 12345", "87 FR 54321".

When references were found, searches proceeded automatically. If "89 FR 12345" was found, we searched "Federal Register 89 FR 12345" with web_search. When the corresponding document was found, we immediately checked the entire content with web_fetch, and as a result found the list of 30 products.

We named this STEP 1.5. The existing STEP 1 was discovering documents with web_search. STEP 2 was checking the entire content with web_fetch, and STEP 1.5 was automatic tracking when references were found. We inserted it between STEP 1 and 2.

The workflow changed like this. STEP 1: Discover documents with web_search → STEP 1.5: Automatic tracking if there are references → STEP 2: Check entire content with web_fetch → STEP 3: Extract product list → STEP 4: insert into Product_Article.md.

We added this logic to Product_Checklist.md. We added a "Reference tracking STEP 1.5" section to PART B with str_replace. We recorded procedures in detail like "Extract 'XX FR XXXXX' with regular expression", "Automatically search for corresponding document", "Check entire content with web_fetch", "Extract additional product list".

About 80 lines were added. PART B increased from 550 lines to 630 lines.

### Making source-specific strategies more detailed

As we continued searching, we learned that more specific strategies were needed for each source. In Week 8, we simply wrote "Prioritize searching documents with appendix" which was too vague. We had to record more details about what keywords to search with, in what order to search, and how many searches to conduct.

The first source had many policy announcement documents, so we further subdivided the search strategy. And we also recorded expected results to judge the need for additional searches at each stage. Stage 1 expected to discover 3-5 Proposed Rules, Stage 2 expected to discover 2-4 future implementation Final Rules, Stage 3 expected to discover 1-3 related documents, Stage 4 expected to discover 5-10 referenced documents, so total search count increased from 25-30 times to 35-40 times. This was because reference tracking was added.

The second source provided product classification criteria. In Week 8, we only wrote "Download file", but we specified what file specifically and where to download it. We added detailed procedures like "Download HTS Schedule Description file", "Filter only HTS 8541 and 8542 sections", "Extract only semiconductor-related products", "Expected about 200-300 products". The number of searches remained 5 times, but the explanation became much more detailed.

The third source provided case law by product. We refined the search strategy. Stage 1: Search with major product names 10 times (Memory chip, Processor, Amplifier, etc.), Stage 2: Search with HTS codes 10 times (8541, 8542, etc.), Stage 3: Search with manufacturer names 5 times, and we also specified what information to extract from each search. We recorded items like "Product name, HTS code, classification basis, case law number".

The fourth source provided product lists for specific policies. We clarified the search strategy. "Check Section 301 List 1, 2, 3, 4 each", "Filter only HTS 8541-8542 related products for each list", "Expected total 10-15 searches", The fifth source provided sensitive product lists. "Check Entity List", "Extract only semiconductor-related items", "Expected 5-10 searches".

The explanation became much more detailed for each source. In Week 8, it was about 50 lines per source, but now it increased to 80-100 lines. Since there are 5 sources, that's 400-500 lines total.

### Readjusting search counts

As source-specific strategies became more detailed, search counts were also readjusted. In Week 8, we expected 65-85 times total. However, as reference tracking was added, strategies for each source became more concrete, and reference tracking was added, the count increased, so the total search count for 5 sources increased from 65-85 times to 75-95 times.

We reflected this change in Product_Checklist.md. We updated the search count for each source with str_replace. We changed "Total search count: 65-85 times" to "Total search count: 75-95 times".

### PART B expanded greatly

Now PART B expanded greatly. It was 550 lines in Week 8, and became 950 lines in Week 9. 400 lines were added. Organizing the added content into 3 categories: 1. web_fetch usage rules about 80 lines, 2. Reference tracking STEP 1.5 about 80 lines, 3. Source-specific strategy detailing about 240 lines (50 line increase per source × 5 = 250 lines, 240 lines after removing some duplicates) were added.

PART A remained at 450 lines. Only PART B increased from 550 lines to 950 lines. It became 1,400 lines total, and we used str_replace to find and change existing content precisely. We changed "Source 1: 25-30 times" to "Source 1: 35-40 times (including reference tracking)". We detailed "Stage 1: Proposed Rule search" to "Stage 1: Proposed Rule search (keyword: 'Proposed Rule semiconductor Annex', 5 times)".

### Completing Week 9

Product_Checklist.md became 1,400 lines. It increased by 400 lines from Week 8's 1,000 lines. PART A remained at 450 lines, PART B expanded from 550 lines to 950 lines.

The added content is 3 categories: 1. web_fetch usage rules (80 lines), 2. Reference tracking STEP 1.5 (80 lines), 3. Source-specific strategy detailing (240 lines). While conducting actual searches, we discovered necessary rules and immediately added them to the checklist, and precisely updated existing content with str_replace. Thanks to text-editor, we could safely manage 1,400 lines.

However, another problem was waiting: we had to remove duplicates. Since we collected as many tariff target products as possible without omission, we judged that duplicates would inevitably occur. We had to sort by implementation date and create a final list.

---

### Week 10 Preview: Final Integration Work

We completed the search methodology. We put all 75-95 search rules, web_fetch usage methods, and reference tracking logic into the checklist. Product_Checklist.md became 1,400 lines.

But what should we do after searching? Integration work such as duplicate removal, sorting by implementation date, and creating the final list was also needed. But how do we maintain the original preservation principle? Can we remove duplicates and sort while using only insert?

In Week 10, we design the integration work methodology. We will add procedures for removing duplicates and sorting while preserving the original, and work completion criteria to the checklist, and Product_Checklist.md is expected to expand from 1,400 lines to over 1,800 lines.

In Week 10, we design the final integration work and cover the process of creating a clean final list while maintaining the original preservation principle. We will share the integration strategy using only insert and criteria for judging work completion.

See you in Week 10.

---

# Week 10: Target Product Methodology Design

⚠️ This column is **prompt creation process sharing for free educational purposes**, and is not any investment, legal, or financial **advice.** AI execution results may contain errors, so independent verification is essential, and **all responsibility for use is entirely attributed to the user.** It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all required confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Contemplating the Need for Integration Work

In Week 9, we completed the search methodology. Product_Checklist.md reached 1,400 lines. PART A 450 lines, PART B 950 lines contained 75-95 search rules, web_fetch usage methods, and reference tracking logic.

Now the search methodology was completed. However, we discovered a new problem. What should we do after searching? We requested Sequential Thinking. 'Do you think we can collect tariff target products without omission to the maximum extent with this? Is there anything we missed? What parts can be further developed? What should we do after searching?’

### Analyzing Potential Problems

We analyzed the post-search situation with Sequential Thinking.

"1st thought: When search is executed, products will be added to Product_Article.md with insert and will accumulate in search order.", "4th thought: There may be duplicates. The same product may be repeated from multiple sources.", "7th thought: The order is not by effective date. Products from sources searched first will accumulate first.", "10th thought: Information will be scattered. Some sources will have very detailed product descriptions, while other sources will have only brief product names.", "15th thought: It seems we need to create a final list. Deduplication, sorting by effective date, and information integration are necessary.”

We clearly identified the problems. First, the same product could appear from multiple sources. For example, the same product could appear in Federal Register Proposed Rule, and also in Final Rule, and also in CBP documents. Second, products would stack in search order. Not in effective date order. Products with later effective dates could stack first, and products with earlier effective dates could stack later. Third, some sources might have very detailed product descriptions, while other sources might have only brief product names.

It seemed we needed to create a final list. We needed to remove duplicates, sort by effective date, and integrate information to create one clean list.

### Conflict with Original Preservation Principle

We knew integration was necessary. But how should we maintain the original preservation principle? We checked the principle created in Week 8 again. "Product_Article.md modification prohibited. Use only insert. Absolutely prohibit str_replace/delete." Could we integrate while maintaining this principle?

Wouldn't we need to delete from the original to remove duplicates? Wouldn't we need to rearrange the original to change the order? Then it would be a principle violation. After contemplating, we requested a solution using Sequential Thinking. 'How can we integrate without touching the original? Can we remove duplicates and sort while using only insert?’

Claude suggested a solution. "1st thought: We can leave the original file as is and add a new section.", "3rd thought: We can add a final list section at the end of the file with insert.", "5th thought: The original data stays at the top as is, and the integration result is added at the bottom.", "8th thought: It would be good to clearly divide sections with separators. With titles like '=== Original Data ===' and '=== Final List ==='.”

The solution was to divide Product_Article.md into 2 sections by adding a final list at the end without deleting the original. The upper section preserves original data as is with products stacked in search order, including duplicates, mixed order, scattered information, and the lower section is a clean final list with deduplication, sorting by effective date, and integrated information, added with insert.

This method seemed right. Leave the original as is and add a new section. We could maintain the principle because we only used insert.

### Designing Integration Work Procedure

Now we designed a specific integration procedure. To clarify what to do step by step, we created a 7-step procedure and recorded it in Product_Checklist.md.

Step 1: After executing the search, comprehensively check the products that will be stacked in Product_Article.md. Identify the name, description, source, and effective date of each product to comprehensively understand the original data. Step 2: The same product name may appear multiple times. Find duplicates with Sequential Thinking and judge as duplicates if they have the same product name.

Step 3: Among duplicated products, select the one with the most abundant information. Or combine information from multiple sources, and prioritize the most detailed product description. Step 4: Sort deduplicated products by effective date. Place products with earlier effective dates first, and products with later effective dates later. If the same effective date, sort alphabetically.

Step 5: If the same product is confirmed from multiple sources, mark as "Verified". If there is only one source, mark as "Reconfirmation needed" while recording the source. Step 6: Write the sorted and verified list as a document. Write a final list including product name, description, effective date, source, and verification status. Step 7: Add the written final list to the end of Product_Article.md with insert. First put the separator "=== Final List ===", then put the list.

### Adding Final Integration Section

We added the integration work procedure to Product_Checklist.md. We created a new section after PART B with str_replace and put the title in the form "=== PART C: Final Integration Work ===". We recorded the 4-step procedure in detail below and also added precautions for each step.

"Step 1 precaution: When reading the entire file with view, consider token limits. If the file is too large, read it in multiple parts.", "Step 2 precaution: Product names may be slightly different when judging duplicates. Products with slightly different notations may be the same product, so be careful.", "Step 3 precaution: Record all sources when combining information.", "Step 4 precaution: Clearly mark verification status. If not certain, mark as 'Reconfirmation needed'.”

About 50 lines of detailed integration procedure, about 20 lines of insert command emphasis, about 15 lines of separator usage rules, and about 35 lines of Sequential Thinking utilization were added, increasing by about 120 lines. Product_Checklist.md became 1,520 lines.

### Adding Final List Template

We added the integration procedure, but it was not clear what form the final list should take. We requested a solution using Sequential Thinking. 'What information should be included in the final list? What content should be organized?’

"1st thought: We need to clarify what information to organize.", "3rd thought: Product name and product description are essential.", "5th thought: Effective date, main source, and verification status are important information. Effective date is necessary for future implementation judgment, so it should be included if possible.", "8th thought: It would be good to record special circumstances or exception conditions in the remarks column.", "10th thought: Including a sample format will make it easy for Claude to understand.”

We clarified the content to organize. Product name, product description. These 2 are essential and must be present.

Important information is effective date, main source, and verification status. Effective date is naturally extracted together during the search process. It is necessary for future implementation judgment, so it should be included if possible. Sources are things like Federal Register, CBP, USTR. Verification status is things like "Verified", "Reconfirmation needed".

Optional information is additional description, exception conditions, and reference document number. Information that is good to have but not necessary. Special circumstances are things like "This product excludes specific countries", "Temporary exemption target".

We created a format example. Number each product sequentially, and write the product name and classification on the first line. Below that, list description, effective date, source, and verification status in order with indentation.

About 60 lines of sorting format by effective date, about 50 lines of information format by product, about 40 lines of completeness checklist, and about 40 lines of statistics summary format were added.

The completeness checklist was items like "[ ] Deduplication completed", "[ ] Sorting by effective date completed", "[ ] Product description sufficient completed", "[ ] 50-75 products secured", "[ ] Source specification completed".

The statistics summary format was to put a statistics summary at the very top of the final list. Information like total product count, effective date range, main source distribution.

A total of about 230 lines were added. Product_Checklist.md became 1,750 lines.

### Adding Work Completion Criteria

Creating the final list was not the end. We needed criteria to judge whether it was truly completed. What conditions must be satisfied to say "completed"?

We requested Sequential Thinking. 'How do we judge if integration is finished? What criteria should there be?’

"1st thought: We need to check if the target quantity was achieved.", "3rd thought: We need to check if duplicates were completely removed.", "5th thought: We need to check if product descriptions are sufficiently detailed.", "8th thought: We need to check if sources are diverse. We should not rely on only one source.”

We added a work completion report section. We added it after the template section with str_replace. We created 4 completion judgment criteria. 1) Target quantity achievement: Secure 30-50 unique products, 2) Duplicate rate tolerance: 0% duplicates in final list, 3) Description detail level: Include detailed descriptions in 90% or more, 4) Source diversity: Secure products from at least 4 out of 5 sources.

We specified evaluation indicators. Total product count (target: 50-75), Deduplication rate (target: 100%), Description detail level (target: 90%+), Contribution by source (Source1: 40-50%, Source2: 20-30%, Source3: 15-25%, Source4: 5-10%, Source5: 5-10%).

We created a report format. Title: "Semiconductor Target Product Securing Completion Report", Sections: 1) Summary, 2) Statistics, 3) Evaluation, 4) Issues. After evaluation with Sequential Thinking, write a report according to this format. A total of about 70 lines were added. Product_Checklist.md increased from 1,750 lines to 1,820 lines.

### Completing Target Product Collection Prompt

Now Product_Checklist.md became 1,820 lines. Starting from 1,000 lines in Week 8, through 1,400 lines in Week 9, it was completed with 1,820 lines in Week 10. All additional work was performed precisely with str_replace. We found existing content and added new content after it. Thanks to text-editor, we could safely manage 1,820 lines.

In Week 8, we created the basic framework of the search methodology. In Week 9, we added the detailed functions actually needed. In Week 10, we completed the integration methodology. We utilized what we learned from Strategy_Checklist.md.

However, Product was more complex than Strategy. List document securing, insert accumulation, 2-file structure, original preservation, reference tracking, and final integration were added. Now we are ready to systematically collect and integrate target products.

---

### Week 11 Preview: Economic Scale Estimation

We have only completed 2 out of 6 information types. Strategy classification (Strategy), Target products (Product). Next is the third information type, Economic Scale. It provides the basis for policy and grants legitimacy.

Economic Scale was not simple statistics. It was evidence proving that "imposing tariffs on this product is urgent and critical to national interest". So how do we find these numbers?

In Week 11, we will design the economic scale collection methodology. We will cover strategies for finding quantitative data, procedures for securing "basis" and "legitimacy", and the process of creating a new checklist.

See you in Week 11.

---

# Week 11: The Role of Economic Scale

⚠️ This column is **free educational content sharing the prompt creation process**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use rests entirely with the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Completed the Product Methodology, But

In Week 10, we completed 1,820 lines of Product_Checklist.md. We managed it with text-editor's create, view, str_replace, insert commands, and the target product list accumulated in Product_Article.md, and the principle of preserving the original was also established. Duplicate removal, sorting by enforcement date, and final integration procedures were all included in the checklist.

Now we had to create the third checklist. Among the 6 information types identified in Week 4, after strategy classification and target products came economic scale. Strategy classification was the framework of policy, and target products were the specific products within it. Then what was economic scale? It was the basis and justification of policy.

### Referencing Product_Checklist.md

We had to create the third checklist. Should we create it from scratch? Could we refer to Product_Checklist.md? Like we did in Week 8, it seemed efficient to utilize the existing structure.

We read Product_Checklist.md with text-editor view. It was 1,820 lines. We requested structure analysis with Sequential Thinking. Claude analyzed the structure instantly, and PART A was project information of about 450 lines containing goals, core strategies, and execution rules. PART B was work checklist of about 1,370 lines, from STEP 1 to STEP 7, including web_search and web_fetch strategies for each STEP, search plans by source, reference tracking logic, and integration procedures.

Product_Checklist.md started directly from STEP 1. It searched for documents published by specific government agencies with web_search, checked the full text with web_fetch, and extracted product lists. It was about finding products listed in table format in appendices.

The 2-file structure was also distinctive. Product_Checklist.md was the plan file, Product_Article.md was the result file, separated. str_replace was only used for the plan file, insert only for the result file. The principle of preserving the original was thorough.

At first, we thought Economic_Checklist.md could be designed in the same way. Borrowing the PART A, B structure, separating into 2 files, and applying the principle of preserving the original. Starting from STEP 1 with web_search, searching for economic scale data from various statistical sources, using comprehensive keywords like market size or economic impact, and accumulating with insert in Economic_Article.md.

But before executing, we wanted to check one thing with Sequential Thinking. Would this plan really be effective? Were there any parts we were missing?

### Problem Discovery: 30-40% Mapping Rate

What problems would there be if we proceeded with this plan? We wanted to check before executing. We requested Sequential Thinking. 'If we collect economic scale data according to this plan, how much do you think it will map with Product?’

Claude analyzed. "This plan is a comprehensive approach. It will search targeting the entire semiconductor industry and collect macroscopic data like market size or economic impact." The problem was that Product was specific products, and what we secured in Week 8-10 was information at the individual product level.

According to Claude's claim, comprehensive data would likely only connect with some representative products. From overall industry statistics, we could infer a few major products, but it would be difficult to find data that could be mapped for the remaining products. This plan was comprehensive but Product was specific. Therefore, the expected mapping rate was only about 30-40%. We could find data for a few major product categories, but the rest would likely not be mapped.

30-40% mapping rate was too low. It meant more than half would be missing. This was a serious problem, as economic scale data is the basis and justification of policy. If only some products have a basis and the rest don't, it would be an incomplete analysis.

### Concern: How to Get to 100%?

A 30-40% mapping rate was too low. How could we raise it to 100%? We used Sequential Thinking again. 'How can we achieve 100% mapping? Should we find more statistical sources?’

Claude answered. "Finding more sources alone is not a fundamental solution. The fundamental problem with this plan is that the search keywords are general." In other words, we were searching with comprehensive keywords like semiconductors, economic scale, and only collecting comprehensive data, so it didn't match the specific targets of Product.

"Even if we find more sources, we will only get more data at the same level. Things like overall industry statistics, entire national market size, and individual product data will still be insufficient." Then should we change the keywords to be more specific? We asked again with Sequential Thinking. Claude answered. "Without first checking what products are in Product_Article.md, the mapping rate could not be improved.”

Eventually, it seemed we needed to change the search order and make Product the standard. First check what Product is, then search for economic data for each product. The current plan was "search first, map later," so the mapping rate had to be low. Because the search keywords and Product didn't match.

### Realization: Must Read Product_Article.md First

What would happen if we changed the order? If we checked Product first and searched for economic data later? We asked again with Sequential Thinking. 'What exactly do you mean the order is wrong? How should we change it?’

Claude compared the current plan with the correct method. The wrong plan is this: first search for economic data, collect it, then try to map with Product, only 30-40% succeeds. This is a data-centered approach, finding what data exists first and matching it with Product later. So there's a high probability that data and Product won't match.

The correct method is this. First read Product_Article.md. Secure the product list, then search for economic data for each product. Mapping in Product order makes 100% possible. This is a Product-centered approach. First identify what Product is, then find data that fits each product. This way, we can secure data for all products.

Product had to be the standard. Product_Article.md tells us "what to look for." Securing the product list first and searching based on that list makes 100% mapping possible. Finding economic data one by one for each product.

We defined this process as STEP 0. Product_Checklist.md started from STEP 1. It started searching right away, but Economic_Checklist.md had to start from STEP 0. Reading Product_Article.md first. This was the fundamental difference.

Without STEP 0, 100% mapping is impossible. Product_Checklist.md was a checklist that "creates" the product list. It was about extracting products from government agency documents to generate a list. But Economic_Checklist.md is a checklist that "uses" an already created product list. Finding economic data for each product secured from Product.

This is the fundamental difference, and that's why STEP 0 was necessary.

### Establishing the STEP 0 Concept

We organized the specific procedures for STEP 0. We had to clarify how to read Product_Article.md, what information to extract, and how to use it.

First, we had to read Product_Article.md. Check the entire contents with text-editor view command. Products collected in Week 8-10 are accumulated, and integrated as a final list at the end. We had to read this final list section.

Next, we had to extract product information. Each product has a product name and may have category information. The order in which products are listed was also important. They are sorted by enforcement date, so this order must be maintained.

Then copy to Economic_Article.md. Add to the beginning of the file with insert command, which was copying the final list from Product_Article.md as is. Preserve product information and order. Only copy without modifying the original.

Next, create space to record economic data under each product. Add checkboxes so data collection status can be indicated. Initially, the economic data fields are empty. They will be filled in as we proceed with the search. Following this procedure, we can maintain the Product order as is, and economic data is attached in the same order to the product list sorted by enforcement date.

This is the starting point for all searches. Without STEP 0, we cannot start searching. Because we don't know what to search for. The Product list tells us what to search for, and STEP 0 becomes the foundation for 100% mapping. All products are listed in Economic_Article.md, so we just need to find data for each product.

Starting with Product as the standard, we can miss nothing. Economic follows Product, Product is completed first, then Economic is attached to it. We named this 'Product-based accumulation'.

Especially, this principle applies not only to Economic. All checklists we will create in the future will follow this principle. The HTS code checklist to be created in Week 13-15, the tariff rate checklist in Week 16-18, and the enforcement date checklist in Week 19-20 will all read Product_Article.md in STEP 0.

Product is the standard, and other information is attached to Product. HTS codes in Product order, tariff rates in Product order, enforcement dates in Product order. This is the 'Product-based accumulation' principle. The HTS code checklist, tariff rate checklist, and enforcement date checklist to be created in the future all follow the same principle, with the starting point and standard being Product.

---

### Week 12 Preview: Economic Scale Prompt Structure

As mentioned in Week 3, the goal is to identify tariff rates, enforcement dates, and HTS codes of tariff goods together. Therefore, the mapping of information types was most important, and in the process of checking using Sequential Thinking, we discovered the necessity of STEP 0 and began designing Economic_Checklist.md.

We learned that reading Product_Article.md first makes 100% mapping possible, and we also established the 'Product-based accumulation' principle for including economic scale and remaining information types in the future.

But how do we create the specific checklist? We had to detail the STEP 0 procedure. From which statistical sources will we find economic data? What search strategy will we use for each source? What data should we collect for each product?

In Week 12, we will design Economic_Checklist.md. We will detail the STEP 0 procedure, add search strategies for each product, create mapping verification procedures, and complete a checklist of about 800 lines.

See you in Week 12.

---

# Week 12: Economic Scale Prompt

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### We Established the STEP 0 Concept, But

In Week 11, we established the STEP 0 concept. We learned that Product_Article.md must be read first to enable 100% mapping. Product was the standard, and Economic was a structure that followed Product.

Now we had to create a concrete checklist. At first, we thought we could just take the Product_Checklist.md structure as is. We thought borrowing only PART A and B would be sufficient.

First, we needed to clarify which statistical sources to find economic data from and what search strategy to use for each source. Product extracted product lists from government agency documents, but Economic had to collect economic data from statistical agencies, so we started by organizing the sources.

### We Designed the 5 Source Strategies and Verification Procedures

While writing PART A, we also had to design source-specific strategies for PART B. "Which statistical sources should we find economic data from?" We reviewed with Sequential Thinking. 'How many sources provide economic data? What strategy is needed for each source?’

Claude analyzed. "We need 5 sources that provide trade statistics, import data, GDP contribution, market size, and employment data. We need to use different search strategies for each source.”

The first source was an agency that provides trade statistics. It provides export-import data by item. The search strategy was to search by product name. We search one by one with product names secured from Product_Article.md. We expected about 15-20 searches.

The second source was an agency that provides import data. It provides import amounts for items subject to tariffs. The search strategy was to search by HTS code. However, since we don't have HTS codes yet, we decided to search by product name for now. We expected about 15-20 times.

The third source was an agency that provides GDP contribution. It provides GDP contribution by industry. The search strategy was to search by industry classification. We search by classifications like semiconductor industry, electronics industry. We expected about 10-15 times.

The fourth source was an agency that provides market size data. It provides an economic indicator database. The search strategy was keyword combinations. We search with combinations like "semiconductor + market size", "product name + economic impact". We expected about 10-15 times.

The fifth source was an agency that provides employment data. It provides employment statistics by industry. The search strategy was to search by industry classification. About 5-10 times seemed sufficient.

We designed strategies for each source. But how many total searches would be needed? We calculated with Sequential Thinking. 'If we combine the expected times for each source, how many times will it be? Is it appropriate compared to Product's 75-95 times?’

Claude calculated. 'Trade statistics 15-20 times, import data 15-20 times, GDP contribution 10-15 times, market size 10-15 times, employment data 5-10 times. Total 55-80 times. It's slightly less than Product, but it's appropriate because economic data has fewer sources.’

The total number of searches was about 55-80 times. It was slightly less than Product's 75-95 times. This was because economic data had fewer sources than the product list.

We created a section for each source. We specified the source role, provided data, search strategy, and expected times. We included all this content in PART A. From STEP 1 to STEP 5, we made each STEP responsible for one source. It was about 140 lines.

### We Added Verification Procedures

While creating source-specific strategies, we also realized that verification procedures were necessary. How do we verify that we really achieved 100% mapping? We asked with Sequential Thinking. 'How do we verify that all products have data?’

Claude answered. "We need to create STEP 6. It's a mapping verification stage. We read Economic_Article.md again, check each product one by one, and use checkboxes.”

So we created STEP 6. As a mapping verification stage, after all searches are complete, we read Economic_Article.md again. We check each product one by one. We check if economic data exists.

We used checkboxes where each product has a checkbox and we check it if data exists. If there's no data, we don't check it and proceed, and ultimately all checkboxes must be checked for 100%.

What if there's a product without data? We do additional searches. We try different keywords and find different sources. If we still can't find it, we record "No data" and don't leave it blank.

We added this procedure to PART A as a "STEP 6: Mapping Verification" section. We specified verification methods, checkbox usage, and actions when missing. It was about 80 lines.

### We Wrote PART A and B

Now PART A was almost complete. We recorded everything including project information, STEP 0 procedures, Product standard accumulation rules, and pure collection rules.

In the project information section, we specified the goals. Content like "Secure economic data for all products (100% mapping)", "Use 5 sources", "Expected 55-80 searches".

We also specified the types of economic data to collect. There were 5 types: trade amount, import amount, GDP contribution, market size, and employment data. We explained what each data is and why it's needed.

We also specified the file structure. Economic_Checklist.md is the plan file, Economic_Article.md is the result file. It was the same 2-file structure as Product. The original preservation principle was applied identically.

PART A was about 500 lines. Product's PART A was 450 lines, but Economic was actually slightly longer. This was because it included all detailed execution procedures for STEP 0-7. In particular, we recorded specific commands, confirmation items, and precautions for each STEP.

We wrote checklists for 5 sources in PART B. We made it possible to record search progress for each source. We included checkboxes and counters.

We also added a STEP 6 mapping verification checklist. We also created an overall completion condition checklist. Finally, we added a work completion report template of about 100 lines.

PART B was about 350 lines. Product's PART B was 950 lines, but Economic was less than half. There was no reference tracking logic, and instead we added a work completion report template of about 100 lines.

Both PART A and B were written. We verified with Sequential Thinking. 'Is Economic_Checklist.md really executable? Are all procedures clear?’

Claude confirmed. 'STEP 0 procedures are clear. The 5 source strategies are also specific. Verification procedures exist. However, the final integration procedure is brief.’

We judged that it was sufficient for now since we planned to detail it in Week 13. PART A about 500 lines, PART B about 350 lines, total about 850 lines.

### We Completed the Economic_Checklist.md Framework

Now Economic_Checklist.md was complete. PART A about 500 lines, PART B about 350 lines, total about 850 lines.

In Week 11, we expected about 800 lines, but it actually became about 850 lines. This was because we recorded all procedures for STEP 0-7 in detail and included the work completion report template. The Week 11 prediction was very accurate.

Compared to Product_Checklist.md's 1,820 lines, it was about half. Product was a checklist for 'creating' a product list, but Economic was a checklist for 'using' an already created list. Also, Product had reference tracking logic, but Economic didn't need it. However, we included all necessary content.

We clarified STEP 0 procedures, Product standard accumulation rules, and pure collection rules. We recorded detailed strategies for 5 sources. We also created 100% mapping verification procedures. The framework of the economic data collection methodology was complete.

---

### Week 13 Preview: The Structure of HTS Codes

We completed the Economic_Checklist.md framework. With about 850 lines, we included all STEP 0 procedures, pure collection principles, and search strategies for 5 sources. We also completed the 100% mapping verification procedure.

Now we completed 3 out of 6 information types. They were strategic classification (Strategy), target items (Product), and economic scale (Economic). We were proceeding according to the plan established in Week 4. The next was the fourth information type, HTS codes (HTS Code).

The reason why HTS codes are needed was clear. It's because they are the actual unit of tariff imposition. If Product is a general category like "semiconductor chip", then an HTS code is a specific 10-digit code like "8542.31.0000". But if the international standard is 6 digits, why do we need to expand to 10 digits instead of 6?

There was a bigger question. Since HTS codes are the most specific, why can't they be the standard instead of Product? Wouldn't it be more accurate to start with HTS? Do Product and HTS map 1:1, or does one Product have multiple HTS? We had many concerns about these issues before fixing Product as the standard.

In Week 13, we will analyze the structure of HTS codes. We will cover the reason for expanding from 6 digits to 10 digits, the fundamental limitations of why HTS cannot be the standard, and the mapping relationship between Product and HTS.

See you in Week 13.

---

# **Week 12.5: Improving Data Accuracy with Google Infrastructure**

⚠️ This column is **a free educational sharing of the prompt creation process** and is not any investment, legal, or financial **advice**. AI execution results may contain errors, and independent verification is essential. **All responsibility for use is entirely attributed to the user themselves.** It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all required confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### The Prompt Execution Process That Must Be Addressed Once

Before moving on to Week 13, there is something I need to tell you.

As I mentioned in Week 1, this series covers only the 30-week process of planning prompts to collect and select policy information with future implementation possibilities among US-China semiconductor tariff policies based on a specific search date using Claude, but the actual execution was done using Gemini API (Paid Tier) in Google Colab.

Since we only cover the prompt design process until Week 30, I felt that if not now, there would be no opportunity to tell you how much Google Infrastructure helped with data accuracy, so I prepared this break corner.

As I mentioned, I originally intended to use Claude for execution as well, but after using it nearly 12 hours a day, even with the Max Plan subscription, I reached the weekly limit around the time the planning was completed.

At that time, I urgently needed results, so while looking for a solution, I discovered Google's Vertex AI. It is Google's enterprise AI platform that operates with Python code and seemed capable of large-scale work, so I converted the 15,000-line prompt to fit Gemini 3 Pro, and after conversion, I requested AI to convert the converted prompt into Vertex AI Python code.

However, when I requested Vertex AI Python code from Gemini 3 Pro (Paid Tier), it first completed and provided me with Gemini API-specific Python code optimized for fast execution.

When it said I could convert this to Vertex AI, I asked why it didn't make Vertex AI-specific code from the beginning, and it recommended testing with the completed Python code first, warning that converting to Vertex AI-specific Python code would become more complex, and even using itself, Gemini 3 Pro, would require more considerations and work time.

If converted to Vertex AI, execution time would be shortened, but I would have to write and test code for longer than the time saved,

The problem was that repeating 7 different tasks for 7 files - Strategy, Product, Economic, HTS code, Tariff rate, Timeline, Integration - was judged impossible for additional work in a situation where results were urgently needed, so I decided to first use Gemini API in Google Colab, an environment where the completed Python code could be executed.

### The Great Advantage of Google Infrastructure Discovered in Crisis

Originally, I studied Python slightly for developing an overseas futures automated trading program, but as a complete non-developer who had never actually typed even [Hello World] once, converting a 15,000-line natural language prompt into Python code was very burdensome.

However, since I also completed my homepage by requesting requirements from AI 100% in natural language, I judged that it would be possible to have AI read the prompt and convert it to Python code, so I requested Python code.

And while modifying and testing the completed code, what I learned was that Google Infrastructure tremendously helps improve data accuracy.

If I had to pick two important parts for collecting US-China semiconductor tariff policies, the first would be to completely bring search results from hundreds of times including URL and content, and the second would be to select only policy information with future implementation possibilities from an enormous amount of search results with consistent standards.

But Google Infrastructure supports an efficient and inexpensive method. It's Google Custom Search API, which has the function of bringing the title, URL, and content (snippet) of search results simultaneously, so there was no need to request, search, and summarize and organize results again using AI.

Since data is better the closer it is to the original text for accuracy anyway, I judged there was no reason to add AI in the middle for searching.

Especially in Google Console, you can check the usage fee per API, and I could confirm very low cost expenditure compared to the enormous search results.

Another advantage is that it can maintain consistency when judging whether search results are already implemented in the past or have the possibility of future implementation.

Even for just the Product file, government agency searches are conducted more than 180 times, and when results come out several at a time, there are ultimately hundreds of contents to verify.

At this time, when executing code with Python in Google Colab, it repeats calling and checking independently every time it verifies the enormous amount of prompt content I created hundreds of times.

As a result, on average, I could thoroughly conduct hundreds of verifications for 30 minutes to 1 hour. All of this was possible because it was executed as Python code, calling Google Custom Search API, Gemini API, etc., and especially applying the prompt content written in natural language consistently hundreds of times.

### Functions Other Than AI Available for Data Accuracy

The place where Python code is executed is an environment called Google Colab, and when you first access it, nearly 20GB of content is already installed. This is Google installing and supporting various functions for users in advance, in other words, borrowing and using Google's computer.

Especially, various Python functions were already installed, so no additional installation work was needed, so Python code didn't have to become very long or complex, making it possible for a non-developer like me who knows nothing about code to easily modify and improve,

And ultimately it felt like using another AI besides Gemini Pro. Especially when collecting data, since various policy materials from government agencies are collected first through searching, the results are not classified as Strategy, Product, Economic, HTS, Tariffrate, Timeline.

So below the collected policy information, content mapped to categories by information type is additionally added, and at this time, not only Gemini Pro but also Python cross-verifies together.

In addition, since additional requirements such as report generation based on that can all be implemented with verified Python functions, I could just request Python code in natural language and it would be added to the existing code to get the desired output.

Besides that, most of the functions written in the original prompt were implemented not only with AI but also with various Python functions already prepared in Google Colab. Of course, not everything was easy, and I repeated code modifications dozens of times.

However, what was fortunate was that even though I didn't know Python code at all after handling AI for more than 6 months 12 hours a day, I requested various safety devices from the beginning in natural language with concerns that similar problems that occurred in AI might also appear in Python, and as a result, when I pressed Python code execution, consistent results were output within 1 hour.

In other words, all processes proceeded automatically to the end without me having to keep watching and modifying the intermediate process, and it was sufficient to review the content by directly clicking URLs after the results came out and cross-verify through AI.

Human verification is always necessary, and although humans cannot manually check tens of thousands of lines of data, it was possible to directly click URLs and judge the content for the dozens of filtered result data.

Especially since they are not yet confirmed tariff policies but policy information scheduled for implementation or under review, there are cases where they become meaningless because they are not implemented later, and since not all parts of the policy are completed but only some disclosed fragments are searched, the data is fundamentally incomplete.

So even though I collect only simple facts, not interpretation or prediction, when reviewing, since AI have different opinions about fragmented data depending on context, expert review in the relevant field is essential when using AI in any field, not just tariffs.

### The Effect of Using Python and AI Simultaneously

If Claude has MCP, Gemini Pro can expand AI functions with various Python functions and simultaneously improve data accuracy.

The reason I say Google Infrastructure is good instead of simply Gemini Pro is because it is Google Infrastructure that makes collaboration with Python possible without being limited to just AI.

Especially since Python is verified, I thought about removing Gemini Pro altogether and using only Python, but I learned that AI is also essential for various reasons such as judgment and knowledge that AI has, and the ability to understand the original prompt composed in natural language.

For reference, Gemini API is pay-as-you-go, and even when used together with various Python functions like this, the cost of executing all planned work is very cheap at about $20. Especially, government agency searches were conducted nearly 1,000 times including tests, but the search cost was about $5.

Therefore, when large-scale results are needed in a short time, it is more efficient to use Python functions and Gemini API simultaneously through Google Colab rather than simply using only one specific AI.

Especially, I learned later that Google Colab that executes Python also has a paid version, because I never once hit a usage limit during the execution process. It turned out that even with about 800 searches and thousands of AI verifications in just one day, there were no problems because AI configured Python code efficiently.

Heavy calculations were passed to AI with Gemini API, data was processed in real-time (Streaming) without accumulation, and API call speed was precisely controlled (Throttling) to avoid call limits, allowing all work to be completed in just one day.

### Google Colab Where Progress Can Be Checked in Natural Language

There are many functions implemented with AI and Python, but to summarize the representative common functions, there were date extraction function, error handling function, API call function, data verification function, logging function, retry mechanism (retry + Resume), number extraction, percent calculation, keyword identification, cross-verification (AI + Python), termination within 5 times when error occurs, Google search direct access function, etc.

It cannot be implemented with simple AI, and if it weren't for the more than 20GB of content already installed in Google Colab, the code would have been too complex and there would have been many parts to install, making it difficult to execute.

Especially, what was best about Google Colab was that the progress was displayed in natural language so that even I, a non-developer, could easily check it. Especially since the content of the prompt composed in natural language appeared as progress status, I could check immediately when problems occurred.

If the progress had been displayed in Python code, it would have been difficult to confirm whether it was progressing well, and I would have requested AI to interpret the content for each progress status, but since it proceeded while briefing on the natural language requests I had created myself, there was no burden in checking the process.

---

### Low Cost and $300 Free Credit Support

The US-China semiconductor tariff policy collection prompt was planned 100% with Claude, but execution was conducted 100% with Gemini API in Google Colab, and the prompt was converted first.

Especially while converting content specialized for Claude MCP to fit Gemini Pro, I properly learned about Google Infrastructure, so various content that didn't exist before was added in the form of natural language and Python code.

Government agencies are searched an average of 130-180 times per 6 files, and usually searching at a rate of once per second, after perfectly completing searches without missing anything in an average of 2-3 minutes, Python and AI simultaneously cross-verifying the content was added,

And what was best was that the future implementation policy filtering method composed in natural language for each 6 files was applied and verified independently each time by calling Gemini Pro every time hundreds of search results were verified.

The total cost incurred so far is about $35 as of December 16, 2025 (reflecting exchange rate), but if excluding tests and selecting only actual execution costs, it is about $20.

Within $20, all usage fees are included, including the cost of about 800 searches (original URL, content confirmable), the cost of calling Gemini API for thousands of AI verifications, Google Colab usage fee (Free tier), and since Google Cloud Platform provided $300 free credit for 3 months to new users, I could freely test even when Python code was unfamiliar in the beginning and obtain the desired results.

Looking back, various Google Infrastructure such as Gemini 3 Pro, Gemini API, Google Cloud Platform, Google Colab, Google Custom Search API were needed while working, but I leave thanks to Google officials who built the system to be available for free initially and to be usable at a very cheap pay-as-you-go price even after converting to paid later.

For non-developers like me, the biggest barrier was initial setup and Python code writing, but there is no need to worry. If you ask Gemini 3 Pro, it kindly answers the initial setup method of Google Infrastructure, so I could do both setup and first test within a few hours.

If you need to do large-scale work like me, I recommend trying to use various functions of Google Infrastructure for free.

See you in Week 13.

---

# **Week 13: Structure of HTS Codes**

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Why HTS is Needed

Before starting, I inform you. All HTS codes used in this article are hypothetical examples for understanding the structure and have no relation to actual HTS classifications. In actual business, you must check the current official HTS.

HTS was an abbreviation for Harmonized Tariff Schedule. As the U.S. tariff classification system, each imported product receives a unique HTS code. Because the tariff rate is determined by this code, in other words, tariffs cannot be imposed without an HTS code.

However, before starting to design the HTS_Checklist.md file, one question arose. Since the HTS code is the most specific, why can't it be the standard instead of Product? Wouldn't it be more accurate to start with HTS?

### What If HTS Becomes the Standard?

Product is a general category like "Memory chips," and HTS was a specific 10-digit code like "8542.31.0010.”

I asked this question to Claude. "The HTS code is much more specific, what if we collect information based on this?" I asked using Sequential Thinking.

Claude started thinking. "1st thought: HTS codes are very specific. For example, 8542.31.0010 specifies exactly what product it is.", "2nd thought: There is no ambiguity compared to Product, and HTS codes clearly point to one product.",

"5th thought: However, the problem is that even just Memory chips alone can have multiple HTS codes.", "7th thought: For example, certain products receive different HTS based on capacity. 1GB or more, 4GB or more, 16GB or more each have different codes.”

"10th thought: If Product is the standard, we might handle only 50, but if we use HTS codes as the standard, we might have to handle 500.", "12th thought: Moreover, we would have to reverse-map them back to Product.”

### Expanding from 6 Digits to 10 Digits

I read this analysis and realized. HTS is a subordinate concept of Product and cannot be the standard for Product. And I asked Claude various additional questions.

It turned out that the international standard is HS Code, a 6-digit abbreviation for Harmonized System, which was a product classification code used worldwide. Most products could be classified with 6 digits, and as a standard in international trade, all countries commonly used this 6-digit code.

However, the United States added 4 more digits here. HTS was 10 digits. I asked again using Sequential Thinking. "Why does the United States use 10 digits instead of 6 digits?”

Claude thought. "1st thought: 6 digits are insufficient in some cases.", "3rd thought: There are products that belong to the same 6-digit HTS code but require more detailed classification.", "5th thought: For example, certain products have different strategic importance depending on capacity.”

"7th thought: For example, low-capacity DRAM and high-capacity DRAM (e.g., less than 1GB vs. 16GB or more) may belong to the same upper classification (e.g., 854231), but there may be cases where different tariff rates need to be applied.", "10th thought: So the HTS code was expanded from 6 digits to 10 digits. With the last 4 digits, even the same product can be finely classified.”

Ultimately, multiple HTS can exist for one Product, and Product and HTS codes had a 1:N relationship. This was the main reason for deciding to use Product as the standard.

### Deciding to Stick with the Product Standard

I decided. I will design HTS_Checklist also based on Product. In Week 11, I established the Product-based accumulation principle. I created STEP 0 in Economic_Checklist. It was a method of first reading Product_Article.md and mapping economic scale to those products.

HTS should be the same way. In STEP 0, reading Product_Article.md, getting the product list, searching HTS for each product, and 100% mapping. This structure was clear.

I started writing PART A in HTS_Checklist.md. I created a file with text-editor create and added content with insert. I specified project information. Contents like "Securing HTS codes for all products (100% mapping)," "Product-based accumulation method," "STEP 0 required.”

I also specified core strategies. First, read Product_Article.md first. Second, search HTS for each product. Third, secure 10 digits, not 6 digits. Fourth, maintain Product order.

Especially maintaining order was important. If we sort HTS by implementation date, the Product order breaks. We need the Product order later when mapping tariff rates or implementation dates. If the Product order breaks, mapping becomes complicated.

Therefore, HTS should be listed in the same order as Product. Do not sort. Record as is. I decided to emphasize this in PART A. I decided to specify rules like "Absolutely prohibit sorting by implementation date," "Absolutely prohibit sorting by HTS code order," "Only in Product order as is.”

Especially do not sort based on HTS codes. Because the Product order is needed later when mapping tariff rates or implementation dates, I was careful to continue not using HTS code-related content as a standard.

I decided to emphasize this repeatedly in PART A. I decided to add a "Pure Collection Principle" section. I decided to specify rules like "No analysis," "No prediction," "No judgment," "No sorting," "Maintain Product order.”

Now PART A was almost complete and I had to write PART B. But before that, I wanted to check one more thing.

How to expand from 6 digits to 10 digits? Is it simply appending 0000 to the end? Or is there a systematic method?

---

### Week 14 Preview: HTS Code Extraction Prompt

In this Week 13, we understood the structure of HTS codes. We grasped all the reasons for expanding from 6 digits to 10 digits, the 1:N relationship between Product and HTS, and the pure collection principle. Now we had to design the actual prompt.

How do we design STEP 0? What are the specific procedures for reading Product_Article.md? How do we divide the 5 sources? What is the method for expanding from 6 digits to 10 digits? How do we guarantee 100% mapping?

In Week 14, we design the HTS code extraction prompt. We will cover STEP 0 procedure detailing, search strategy by source, expansion methodology, and mapping verification procedures. HTS_Checklist.md is expected to expand from 350 lines to over 800 lines.

We will meet in Week 14.

---

# Week 14: HTS code extraction prompt

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Referring to Economic_Checklist.md

To create a new checklist by referring to Economic_Checklist.md, I requested structure identification with Sequential Thinking.

Economic_Checklist.md had a clear structure. It was divided into PART A and B, and each STEP was arranged sequentially. I thought I could apply this structure to HTS_Checklist.md as well.

STEP 1 is searching policy documents. It searches for classification codes and retrieves related documents, but when I actually tried to think of search keywords, there was a problem.

Should I search for specific codes? It seemed too broad. Should I search for product fields and codes together? This is also too wide. I don't know specifically which product's classification code I need to find.

I requested Sequential Thinking. 'What do I need to do first to search for HTS classification codes?’

### Finding a Solution with Sequential Thinking

Claude started thinking. "1st thought: To search for classification codes, I need to know what Product is first.", "2nd thought: Product_Article.md has a product list.", "3rd thought: Economic also read Product first, read Product_Article.md and searched for economic data for each product."

"7th thought: Classification codes also need the same approach. Product must be read first.", "10th thought: I will define this as STEP 0.”

I realized this. The checklist had to start from STEP 0. It was reading Product_Article.md first. It was a lesson learned when collecting Economic information in Week 11.

Economic_Checklist.md also read Product_Article.md in STEP 0, secured the product list first, and then searched for economic data for each product. I applied the same approach to classification codes.

### Designing the STEP 0 Procedure

I designed the method of reading Product_Article.md first in STEP 0. Products collected in Week 8-10 are accumulated, and will be integrated into a final list at the end.

I decided on a method to find the final list section. At the very end of the file, product name, description, and implementation date will be recorded for each product. It's a method of taking this list as is.

I also designed the method of extracting product information. Record the name of each product, identify how many products there are, and maintain order. It's in the same order as Product_Article.md. This was important.

I also decided on a method of copying to a new file. By copying the Product list as is, preserve product information and order. Only copy without modifying the original.

I also designed a method of creating space to record classification codes below each product. Add checkboxes to indicate whether data has been collected. Initially, fields are empty, but will be filled in as searches proceed.

I decided to put this procedure in the prompt. I decided to add it to PART A as a "STEP 0: Reading Product_Article.md" section. It was about 150 lines. I decided to specify commands, confirmation items, and precautions for each step.

### Second Problem: 6-digit HTS Code, How to Expand to 10 Digits

Now I had to write STEP 1, but there was a problem. Some policy documents may only provide upper classification codes. There may only be 6-digit international codes, and the last 4-digit U.S. detailed codes may not be present. I learned in Week 13 that I need to expand from 6 digits to 10 digits, but where do I find the detailed codes?

I requested Sequential Thinking again. 'Where can I find detailed classification codes?’

Claude answered. "1st thought: If there are only upper codes, materials that provide detailed codes are needed.", "3rd thought: There will be documents that organize the classification system in detail. All 10-digit codes will be listed.", "5th thought: There will also be materials that provide classification precedents by product.”

"8th thought: Using these two materials, I can expand from 6 digits to 10 digits.", "10th thought: It's a strategy of finding upper codes in policy documents, and finding detailed codes in classification system documents and precedent materials.", "12th thought: I need to additionally search for institutions that provide detailed classification information.”

I understood this method. I cannot find everything in one place. I need to combine multiple materials. Policy documents may only provide a general classification.

Classification system documents and precedent materials will provide detailed 10-digit codes. Since detailed classification information was needed, I decided to additionally search for institutions that provide such materials.

### Designing Strategies by 5 Sources

Now the sources have increased. I added institutions that provide detailed classification information. Are there more materials needed? I asked with Sequential Thinking. 'Are there more materials needed to secure classification codes?’

Claude analyzed. "1st thought: There will also be official lists by policy.", "3rd thought: Classification codes will be included in lists that enumerate target products.", "5th thought: There will also be materials related to specific programs. Related classification codes will be listed.", "8th thought: A total of 5 sources should be sufficient.”

I organized roles for each of the 5 sources. The first source was policy announcement materials. The role is to secure product-specific classification code lists. Find classification codes included in policy announcement documents. I expected the number of searches to be about 20-25 times.

The second source was classification system materials. The role is to expand upper codes to detailed codes. The main purpose was to expand from 6 digits to 10 digits. The number of searches was about 15-20 times.

The third source was classification precedent materials. The role is to confirm product-specific classification cases. Find and refer to past classification cases. The number of searches was about 10-15 times.

The fourth source was official lists by policy. The role is to confirm target products and classification codes. Check codes in product lists by policy. The number of searches was about 5-10 times.

The fifth source was specific program materials. The role is to confirm related classification codes. Check codes included in specific lists. The number of searches was about 5-10 times.

I calculated the total number of searches. Adding 20-25 times, 15-20 times, 10-15 times, 5-10 times, 5-10 times equals 55-80 times. It was slightly less than Product's 75-95 times. This was because classification code materials were relatively clear.

### Detailing Strategies by Source

I identified 5 sources. Now I had to design specific search strategies for each source. Like when collecting Product in Week 9, I had to specify what materials to find for each source and why those materials are needed.

I designed the strategy for the first source. The materials needed were policy attachment documents. These are classification code lists attached when policies are announced. What products are policy targets, which classification codes they correspond to will be listed. I had to find these documents to secure product-specific classification codes.

I decided on search procedures. First find related documents, check classification code-related content, and secure the entire document.

The strategy for the second source was a bit different. The materials needed were classification system documents. Documents that systematically organize all classification codes, needed when expanding 6-digit international codes to 10-digit U.S. codes. If I found upper codes in the first source, I had to check detailed 10-digit codes in the second source.

Classification system documents would be massive files. Rather than searching by product name, I decided on a method of searching by upper code. If I input the 6-digit code found in the first source, I would be able to check all 10-digit expansions of that code.

The materials needed in the third source were classification precedent materials. A database that provides product classification precedents, where I can refer to what classification codes similar products were assigned in the past. I designed a method of referring to precedents when determining classification of ambiguous products.

Classification precedent materials would allow checking past classification cases by searching with product names. It would be reference material for what products were classified with what codes.

The materials needed in the fourth source were official lists by policy. Lists that enumerate target products by policy, where classification codes will be included for each product. I decided on a method of confirming whether it's a target of a specific policy and recording the corresponding code.

Policy-specific lists are confirmed by securing documents. It's a procedure of finding the corresponding product in them and checking the classification code.

The materials needed in the fifth source were specific program lists. Documents that list products included in specific lists and related classification codes. I designed a method of confirming whether the product is in the list and recording related codes.

I decided to put strategies for each source in the prompt. I decided to add "STEP 1-5: Search Strategies by Source" sections to PART A. I decided to specify role, needed materials, search method, and expected number for each source. About 250 lines would be added.

### Adding Sequential Thinking Evaluation

Evaluation was needed when each source's search was completed. When collecting Economic in Week 12, I also did Sequential Thinking evaluation. It was confirming how much was secured from each source and whether there were any omissions.

I decided to apply the same approach to classification codes. When each source's search is completed, it's a method of evaluating with Sequential Thinking. It's a method of asking questions like "How many products' classification codes were secured from this source?", "How many products are missing?", "Can it be supplemented in the next source?”

I designed a method of recording evaluation results in the checklist. It's a procedure of adding evaluation results to the corresponding source section. This was a method of tracking progress.

I decided to put the evaluation procedure in the prompt. I decided to create intermediate STEPs like "STEP 1.5, 2.5, 3.5, 4.5, 5.5: Sequential Thinking Evaluation". I decided to specify question items and recording methods for each evaluation. About 100 lines would be added.

### Writing PART B

Now PART A was almost complete. It contained project information, STEP 0 procedure, STEP 1-5 source-specific strategies, and Sequential Thinking evaluation. It was about 500 lines.

Next was PART B. It was a work checklist. Like Product_Checklist.md, I had to make it so progress could be recorded by source. It's a method of indicating completion status of each search using checkboxes.

I decided to create checklists for 5 sources in PART B. It's a structure that allows recording search progress, number of secured classification codes, and evaluation results for each source. I decided to include checkboxes and counters.

For example, I decided to configure the first source section like this. Checkboxes like "Search 1 complete", "Search 2 complete" would need 20-25. Recording fields like "Secured classification codes: Product name (count)" would also be needed. I also decided to include an "Evaluation complete" checkbox.

PART B would be about 300 lines. Product's PART B was 1,370 lines, but classification codes were much shorter. This was because there was no reference tracking logic, and integration procedures were not yet added.

### Completing the Framework

Now the framework of the checklist was complete. PART A about 500 lines, PART B about 300 lines, about 800 lines total. It was similar to what was expected in Week 13.

I included search procedures from STEP 0-5, designed everything from reading Product_Article.md to search strategies for 5 sources. I also added Sequential Thinking evaluation. I also created a work checklist.

But it wasn't finished yet. What should I do after searching? Classification code data will be scattered by source. How do I combine them into one? How do I verify 100% mapping?

When integrating Product in Week 10, there was a similar problem. Duplicate removal, sorting, and creating a final list were needed. Classification codes also seemed to need the same work. However, I hadn't yet decided on a specific method.

---

### Week 15 Preview: Designing Classification Code Methodology

I completed the search methodology. I included the strategy of reading Product_Article.md in STEP 0, and searching for classification codes by 5 sources in STEP 1-5. The checklist became about 800 lines.

But what should I do after searching? Classification code data will be scattered by source, so how do I combine them into one? Do all Products really have classification codes? How can I verify mapping?

There was a more important question. Can't I sort classification codes by implementation date? What is the reason for maintaining Product order? When mapping tariff rates and implementation dates later, why is Product order needed?

In Week 15, I design integration work methodology. I will cover 100% mapping verification procedures, final integration methods, and the importance of maintaining Product order. I will share how the principle of "absolutely prohibit sorting by implementation date" is established.

I will meet you in Week 15.

---

# **Week 15: HTS Code Methodology Design**

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Tasks Remaining After Search

Now the search methodology is complete. We have designed how to find classification codes from 5 sources. But what should we do after searching for classification codes from each of the 5 sources?

How do we combine the classification codes scattered across sources into one? And do all Products really have classification codes? Are there any missing products?

I checked the situation using Sequential Thinking. 'Can we realistically obtain all the data after searching 5 sources?’

Claude analyzed. "1st thought: Each source will have found classification codes for some products.", "3rd thought: Some products will only appear in source 1. Some products will appear in sources 2 and 3.", "5th thought: There will be duplicates. The same product may appear in multiple sources.”

"7th thought: There will also be omissions. Some products may not appear in any of the 5 sources.", "10th thought: Therefore, two tasks are needed. First, duplicate removal. Second, omission verification.", "12th thought: Omission verification comes before duplicate removal. Because the mapping between Product and HTS codes is the core.”

Ultimately, integration work is needed, but before integrating, we must first verify that all Products have classification codes.

### Mapping Verification Comes First

In Week 11, when collecting Economic data, we needed economic scale for all Products as much as possible, and HTS codes are the same. Before integrating, we must first verify the mapping. How do we verify?

I requested Sequential Thinking. 'How do we check if all Products have classification codes?’

Claude answered. "1st thought: There is a product list in Product_Article.md.", "3rd thought: We just need to check if a classification code has been recorded for each product.", "5th thought: If the classification code field is empty, it is missing.”

"7th thought: We need to check while traversing all products.", "10th thought: If there are missing products, additional search is needed.", "12th thought: This can be defined as STEP 6. 'Mapping verification with Product'.”

I decided to design the STEP 6 procedure. First, read the product list in Product_Article.md. Check how many there are in total. Check if each product has a classification code.

If there is a classification code, I decided to display a checkbox. If not, I decided to leave it blank. At the end, I decided to count. If the number of products and the number of classification codes are the same, it is 100% mapping.

What if they are different? We need to find the missing products. Check which products do not have classification codes. Search for those products again. We will need to search the 5 sources again, or find another method.

I decided to put this procedure into the prompt. I decided to add STEP 6. I decided to create a "100% Mapping Verification" section. About 150 lines will be added.

### Designing STEP 7 and STEP 8

Now we needed to design the integration procedure specifically. After verifying the mapping in STEP 6, what do we do in STEP 7?

I decided to define STEP 7 as "Duplicate Removal and Merging". The same product may have appeared in multiple sources. We need to remove duplicates. But we need to merge the information.

For example, if the classification code for Product A appeared in sources 1 and 3, we need to combine the two pieces of information. Source 1 may only have the code, and source 3 may also have the implementation date. This is merging such information.

I designed the duplicate removal method. First, find the same classification code. Find where the 10-digit code matches exactly. Once found, compare the information. Combine the information from sources 1 and 3.

After merging, only one remains. I decided to record both source numbers. If we display it as "Source 1, 3", we can know that this classification code was confirmed in two sources.

I decided to define STEP 8 as "Final Sorting and Integration". This is the step where the double sorting principle is applied. List in Product order, and within each Product, sort in implementation date order.

I designed the final sorting method. First, gather all classification codes for Product A. Sort these codes in implementation date order. Record the sorted codes. Then move on to Product B. Repeat the same method.

When all Products are processed, the final list will be complete. The Product order is maintained, and the time order is preserved within each Product. This will be the final form of HTS_Article.md.

### Adding Verification Procedures with Sequential Thinking

I designed STEP 7-8. But each step needed verification. I decided to add Sequential Thinking evaluation like in Week 14.

I decided to create STEP 6.5, 7.5, 8.5. These are intermediate evaluation steps. When each step is finished, verify with Sequential Thinking.

STEP 6.5 is "100% Mapping Verification Result Evaluation". I decided to ask questions like "Do all Products have classification codes?", "How many products are missing?", "Is additional search needed?".

STEP 7.5 is "Duplicate Removal Result Evaluation". I decided to ask questions like "How many duplicates were removed?", "Was the merge done correctly?", "Is there any information loss?".

STEP 8.5 is "Final Integration Result Evaluation". I decided to ask questions like "Is the Product order maintained?", "Is the implementation date order correct within each Product?", "Is the total number of classification codes correct?".

I decided to add these evaluation procedures to the prompt. I decided to specify question items and verification methods for each evaluation. About 100 lines will be added.

### Expanding PART B

Now PART A is almost complete. It contains STEP 0-5 search strategy, STEP 6 100% mapping verification, STEP 7-8 integration procedures, and Sequential Thinking evaluation. PART A will be about 650 lines.

In Week 14, PART A was 500 lines, and in Week 15, 150 lines will be added. This is due to STEP 6-8 and evaluation procedures.

Next was PART B. In Week 14, PART B was 300 lines. It only had checklists for each source. In Week 15, we needed to add integration work checklists.

I decided to add a "STEP 6: 100% Mapping Verification" section to PART B. I decided to create a checkbox for each product. It is a method of checking if there is a classification code. I also decided to add a counter that counts at the end.

I also decided to add a "STEP 7: Duplicate Removal and Merging" section. I decided to create duplicate verification checkboxes and merge completion checkboxes. I also decided to add a part that records the number of duplicates for each Product.

I also decided to create a "STEP 8: Final Sorting and Integration" section. I decided to include Product-specific sorting completion checkboxes and final integration completion checkboxes. I also decided to add a part that records the final number of classification codes.

PART B will be about 410 lines. This is an addition of 110 lines from the 300 lines in Week 14.

### Completing HTS_Checklist.md

Now the entire framework of HTS_Checklist.md is complete. PART A is about 650 lines, PART B is about 410 lines, for a total of about 1,060 lines.

In Week 14, it was 800 lines, and in Week 15, 260 lines are being added. This is due to the integration work methodology. STEP 6-8, Sequential Thinking evaluation, and PART B expansion are included.

Product_Checklist.md was 1,820 lines. Economic_Checklist.md was about 850 lines. HTS_Checklist.md is 1,060 lines. It is shorter than Product, but longer than Economic.

Why is there such a difference? Product had reference tracking logic. We created complex mapping procedures in Week 10. That's why it grew to 1,820 lines.

Economic was pure data collection. There was no complex logic. That's why it was relatively concise at 850 lines.

HTS is in the middle. It is pure collection, but there is integration work. 100% mapping verification, duplicate removal, and double sorting were needed. That's why it became 1,060 lines.

Now the HTS series is complete. In Week 13, we understood the structure. In Week 14, we designed the search methodology. In Week 15, we designed the integration methodology. Over 3 weeks, we completed the entire HTS collection process.

---

### Week 16 Preview: Tariffrate Data Sources

We completed the HTS series. In Weeks 13-15, we designed the entire classification code collection process. We included structure understanding, search methodology, and integration methodology.

Now we needed to move to the next step. We completed 4 out of 6 information types. They were strategy classification, target items, economic scale, and classification codes. Next was the turn to collect the fifth information type, tariff rates.

Tariff rates were called TariffRate. Each classification code had a tariff rate. Some products were 10%. Some products were 25%. It varied according to policy.

But tariff rates seemed more complex than classification codes. Why complex? Because tariff rates can change over time. Even for the same classification code, it could have been 10% in 2018, then raised to 25% in 2019.

Also, there seemed to be multiple types of tariff rates, and some products could have multiple tariff rates applied simultaneously.

I thought about what to cover in Week 16. We need to grasp the characteristics of tariff rates. We need to understand how they differ from classification codes. What are the sources? Are they also 5? Or are there more?

In Week 16, we understand the characteristics of tariff rates. We will cover the differences from classification codes, dynamic characteristics, tariff types, and source roles. We will share why TariffRate is the most complex information type.

See you in Week 16.

---

# **Week 16: Tariff Rate Data Sources**

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Dynamic Characteristics of Tariff Rates

HTS codes secure a 10-digit code like 8542.31.0010, where the code number itself is information, but TariffRate secures percentage values like 0%, 25%, 50%, where the number is information.

I requested Sequential Thinking. 'What is important in tariff rate collection?’

Claude explained. "1st thought: Tariff rates change according to policy.", "3rd thought: When a new policy is announced, tariff rates can change.", "5th thought: Therefore, we need to find policy changes.”

"7th thought: TariffRate requires policy tracking.", "10th thought: We need to record the implementation date for each change.”

The important thing was to collect policy changes.

### Why There Are Multiple Tariff Types

While investigating tariff rates, I discovered something else. Tariffs were not just one type. There were multiple tariff types. Each type was calculated separately.

Why are there multiple types? I requested Sequential Thinking. 'Why are there multiple tariff types?’

Claude explained. "1st thought: Each type has a different legal basis.", "3rd thought: There is a first type.", "5th thought: There is also a second type.", "7th thought: There is also a third type.”

"10th thought: Each type is calculated independently.", "12th thought: Therefore, multiple types can be applied to one product simultaneously.", "15th thought: When collecting TariffRate, we need to classify and record each type.”

I understood this. Tariff rates are not a single number. Because multiple types are applied, we need to classify and record each type.

### Role of 5 Sources

Now I understood the characteristics of TariffRate. It is dynamic, requires tracking policy changes, and requires type classification. So where do we find this information? I decided to use 5 sources like HTS.

The first source was policy announcement materials. This seemed to be the most important. Because policy announcement materials record all policy changes. Tariff rate changes will be announced.

The information to find in source 1 was tariff rates. We will check tariff rates in policy documents. We will record them together with implementation dates.

Sources 2 through 5 will play a supplementary role. They will supplement information not found in source 1. They will provide specific types of tariff information.

The role of the 5 sources was clear. Source 1 is core, and sources 2-5 are supplementary.

### Why Source 1 Is Most Important

Among the 5 sources, source 1 seemed to be the most important. Why? I requested Sequential Thinking. 'Why is policy announcement material core?’

Claude analyzed. "1st thought: Policy announcement materials record all policy changes.", "3rd thought: They are announced every time tariff rates change.", "5th thought: Therefore, policy changes will be in this material.”

"7th thought: Sources 2-5 only provide specific information.", "10th thought: But source 1 is most important because it provides policy changes.", "12th thought: The number of searches will also be the highest.”

"15th thought: We searched policy announcement materials 20-25 times in HTS.", "18th thought: In TariffRate, we will need to search 30-40 times.", "20th thought: More searches are needed because of policy tracking.”

I understood this. Policy announcement materials are the main source for TariffRate. We need to plan 30-40 searches.

We need to find changes in policy announcement materials. We need to record the implementation date, tariff rate, and document number for each change. We need to list them in chronological order.

### TariffRate vs HTS: Differences

I organized what I understood so far. TariffRate and HTS were different in several aspects. I organized the main differences.

**First, the core question is different.** HTS was "What code is the target?". TariffRate is "What is the tariff rate for that code?".

**Second, the data type is different.** HTS is static. Code numbers do not change. TariffRate is dynamic. Percentage values change according to policy.

**Third, the tracking target is different.** HTS only needs to secure classification codes. TariffRate needs to continuously track policy changes.

**Fourth, type classification is different.** HTS did not need type classification. TariffRate needs to distinguish types A, B, C and track each.

These differences defined the characteristics of TariffRate. TariffRate will be more complex than HTS. Because policy change tracking, type classification, and tariff rate calculation are needed.

But one thing was the same. The Product-based accumulation method. Like HTS, TariffRate will also read Product_Article.md first. We will find tariff rates for each product. We will maintain Product order.

### Starting to Design TariffRate_Checklist

Now I understood the characteristics of TariffRate sufficiently. I grasped dynamic information, policy change tracking, type classification, policy announcement material focus, and Product-based accumulation.

Next week, we need to design specific search strategies. How do we design STEP 0? How many searches are needed for source 1? How do we plan 30-40 searches of source 1? How do we sort in chronological order?

I decided to design the framework of TariffRate_Checklist.md. It will contain STEP 0-5 search strategy, Sequential Thinking evaluation, and chronological sorting method. It will be about 1,000-1,100 lines.

HTS_Checklist.md was 1,060 lines, and TariffRate_Checklist.md will have slightly more content because of type classification.

---

### Week 17 Preview: Tariff Rate Search Strategy

We understood the characteristics of tariff rates. We grasped the differences from HTS, the necessity of policy change tracking, tariff type classification, and the importance of policy announcement materials. We also clarified the role of the 5 sources.

But the specific search method is not yet. How do we read Product_Article.md in STEP 0? How do we find tariff rates in source 1?

In Week 17, we design the tariff rate search strategy. We will cover STEP 0-5 prompts, policy announcement material 30-40 search plan, chronological sorting method, and Sequential Thinking evaluation procedures. The framework of TariffRate_Checklist.md will be completed with about 1,000-1,100 lines.

See you in Week 17.

---

# Week 17: Tariff Rate Search Strategy

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### First Problem: How to Classify Types

To create a new checklist, I decided to refer to HTS_Checklist.md. I requested structure understanding with Sequential Thinking.

I proceeded exactly the same up to the "STEP 0: Read Product_Article.md" part in PART A. Now I had to write STEP 1.

In Week 16, I learned that there are multiple tariff types, but how do I classify them? How do I determine which type it is when reading documents? I requested Sequential Thinking. 'How do we distinguish tariff types?’

Claude answered. "1st thought: Each document will specify the type.", "3rd thought: There will be separate sections for each type.", "5th thought: While reading the document, we can check the type and record each.”

"7th thought: We can create 'Type A:', 'Type B:', 'Type C:' fields for each product.", "10th thought: We just fill in the applicable types. We leave empty the types that don't exist.", "12th thought: We need to add this to STEP 0.”

I understood this. I needed to create type-specific fields for each product. When copying the Product list in STEP 0, we create Type A, B, C fields together.

I modified the STEP 0 procedure. I decided to add the following fields under each product. Formats like "Type A:", "Type B:", "Type C:". They are empty at first, and we will fill them in as we search.

I decided to reflect this modified procedure in the prompt. STEP 0 will increase to about 180 lines. Because type classification field descriptions are added.

### Designing Strategies for 5 Sources

Now I had to design STEP 1-5. In Week 16, I identified the role of 5 sources. Source 1 was most important, and sources 2-5 played a supplementary role.

I had to design specific search strategies for each source. I requested Sequential Thinking. 'What should we find in each source?’

Claude analyzed. "1st thought: In source 1, we find tariff rates and implementation dates.", "3rd thought: In sources 2-5, we find specific types of tariff rates.", "5th thought: Each source finds different information.”

"7th thought: Source 1 requires 30-40 searches.", "10th thought: Source 2 is 15-20 times, source 3 is 10-15 times, sources 4-5 are each 5-10 times.", "12th thought: The total number of searches is 65-95 times.”

I decided to design strategies for each source. I designed the strategy for the first source first. The necessary information was tariff rates and implementation dates. The method is to find tariff rates for each product and record them together with implementation dates.

I decided on the search procedure. First search by product name, check related content, and extract tariff rate and implementation date. We also had to check the type.

The strategy for the second source was a bit different. It will provide specific types of tariff rates. It plays a role in supplementing types not found in source 1. The number of searches was estimated to be about 15-20 times.

The third source will provide information on another type. The number of searches was about 10-15 times. The fourth and fifth sources were each about 5-10 times.

I calculated the total number of searches. Adding 30-40 times, 15-20 times, 10-15 times, 5-10 times, 5-10 times equals 65-95 times. It was more than HTS's 55-80 times. Tariff rates were more complex, and more searches were needed because of type classification.

### Detailing Source 1 Strategy

Among the 5 sources, source 1 was the most important. How do we plan 30-40 searches? I requested Sequential Thinking. 'How do we plan source 1 searches?’

Claude suggested. "1st thought: If there are 50 Products, searches are needed for each product.", "3rd thought: But 30-40 times is less than 50 times.", "5th thought: Some products can be found multiple at once.”

"7th thought: For example, products in the same category can be searched at once.", "10th thought: Or multiple products may be listed in one document.", "12th thought: Therefore, it's not a 1:1 search per product, but a strategy of efficiently grouping and searching.”

I understood this. Source 1 search is conducted by grouping by product category. For example, the method is to search memory products at once, and search processor products at once.

I made a search plan. Group products by category. Proceed with searches for each group. Find tariff rates for multiple products in one group. The method is to cover as many products as possible with a total of 30-40 times.

I decided to put this strategy into the prompt. I decided to add detailed plans to the "STEP 1: Source 1 Search (30-40 times)" section. It will be about 200 lines. I decided to specify search methods, type classification procedures, and recording formats.

### Adding Sequential Thinking Evaluation

Evaluation was needed after each source search was completed. In Week 14, we also did Sequential Thinking evaluation when collecting HTS. It was about checking how much was secured from each source and whether there were any omissions.

I decided to apply the same method to TariffRate. When the search for each source is completed, it's a method of evaluating with Sequential Thinking. It's a method of asking questions like "How many products' tariff rates were secured from this source?", "How many products are missing?", "Can it be supplemented in the next source?".

I designed a method to record evaluation results in the checklist. It's a procedure to add evaluation results to the corresponding source section. This was the method of tracking progress.

I decided to put the evaluation procedure into the prompt. I decided to create intermediate STEPs like "STEP 1.5, 2.5, 3.5, 4.5, 5.5: Sequential Thinking Evaluation". I decided to specify question items and recording methods for each evaluation. About 100 lines will be added.

### Writing PART B

Now PART A was almost complete. It contained project information, STEP 0 procedure, STEP 1-5 source-specific strategies, double sorting principle, and Sequential Thinking evaluation. It was about 650 lines.

Next was PART B. It was a work checklist. Like HTS_Checklist, it had to be made so that progress could be recorded for each source. It's a method of using checkboxes to indicate the completion status of each search.

I decided to create checklists for 5 sources in PART B. It's a structure that allows recording search progress, number of secured tariff rates, and evaluation results for each source.

For example, I decided to structure the first source section like this. Checkboxes like "Search 1 completed", "Search 2 completed" will need 30-40. A record section like "Secured tariff rate: Product name (Type)" was also needed. I decided to include a "Evaluation completed" checkbox.

PART B will be about 250 lines. HTS's PART B was 410 lines, and TariffRate was a bit shorter. It was because the integration procedure had not yet been added.

### Completing the Framework

Now the framework of the checklist was complete. PART A was about 650 lines, PART B was about 250 lines, for a total of about 900 lines. It was similar to what was expected in Week 16.

It contained search procedures up to STEP 0-5. I designed from reading Product_Article.md to search strategies for 5 sources. I also added type classification methods and double sorting principles. I also added Sequential Thinking evaluation. I also made a work checklist.

But it was not yet complete. What should we do after searching? Tariff rate data will be scattered by source. How do we combine them into one? How do we verify mapping?

In Week 15, there was a similar problem when integrating HTS. Duplicate removal, sorting, and making a final list were needed. TariffRate seemed to need the same work. But we had not yet determined the specific method. I decided to design the integration work next week.

---

### Week 18 Preview: Tariff Rate Integration Methodology

We completed the search methodology. In STEP 0, we read Product_Article.md, and in STEP 1-5, we included strategies for searching tariff rates by 5 sources. We also designed type classification methods and double sorting principles. The checklist became about 900 lines.

But what should we do after searching? Tariff rate data will be scattered by source, so how do we combine them into one? Do all Products really have tariff rates? How do we verify mapping?

Week 18 designs the integration work methodology. It covers mapping verification procedures, type-specific information organization methods, final integration methods, and methods to maintain double sorting. TariffRate_Checklist.md will be finally completed.

See you in Week 18.

---

# Week 18: Tariff Rate Integration Methodology

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Mapping Verification Comes First

After searching, we will find tariff rates for some products but not all, and some products may only have Type A.

Even if we continue with STEP 2, 3, 4, 5, there will be omissions, duplicates, and tariff rates scattered across sources. Therefore, three tasks are needed.

Omission verification, type-specific information organization, and duplicate removal are needed, and especially since mapping is key, omission verification comes first.

I decided to design the STEP 6 procedure. First, read the product list in Product_Article.md. Check how many there are in total. Check whether each product has a tariff rate.

If there is a tariff rate, I decided to mark a checkbox. If not, I decided to leave it blank. Finally, I decided to count. If the number of products and the number of tariff rates are the same, it is 100% mapping.

If they are different, what should we do? We need to find the omitted products. Check which products do not have tariff rates. Search for those products again. We will need to search the 5 sources again, or find another method.

I decided to put this procedure into the prompt. I decided to add STEP 6. I decided to create a "Mapping Verification" section. About 150 lines will be added.

### How to Organize Type-Specific Information

Let's assume we have verified the mapping. All Products will have tariff rates, but as we learned in Week 16, tariff rates are divided into multiple types. There are Type A, B, C, and each must be verified.

How should we organize? I requested Sequential Thinking. 'How to organize type-specific tariff rate information?’

Claude explained. "1st thought: Each product has Type A, B, C fields.", "3rd thought: We just need to check the value of each field.", "5th thought: For example, if Type A = 50%, Type B = 10%, we record each separately.”

"7th thought: However, not all types are present.", "10th thought: Some products may only have Type A. Then we only record Type A.", "12th thought: For each product, we just need to check and record only the types that exist.”

"15th thought: Each type must be maintained individually.", "18th thought: We organize and record each type.", "20th thought: This can be defined as STEP 6.5. 'Type-Specific Information Verification'.”

Type-specific information verification is the task that will go between STEP 6 and STEP 7. After verifying the mapping, we organize the types for each product.

I designed the organization procedure. Check the Type A, B, C values of each product. Maintain each collected type individually. Repeat for all products the records found in policy documents as they are.

I decided to put this procedure into the prompt and decided to add STEP 6.5. I decided to create a "Type-Specific Information Verification" section. About 100 lines will be added.

### Designing STEP 7 and STEP 8

Now we have completed the type-specific information verification. Next were duplicate removal and final integration. It was similar work to when we integrated HTS in Week 15.

I decided to define STEP 7 as "Duplicate Removal and Merge". The same product may have come from multiple sources. Duplicates must be removed. However, information must be merged.

For example, if the tariff rate for Product A came from Source 1 and Source 3, the two pieces of information will need to be combined. Source 1 may only have Type A, and Source 3 may also have Type B. This is merging such information.

I designed the duplicate removal method. First, find the same product. Find products where the product name matches exactly. Once found, compare the information. Combine the information from Source 1 and Source 3.

After merging, only one remains. I decided to record both source numbers. If we mark it as "Source 1, 3", we can know that this tariff rate was confirmed in two sources, and reliability increases.

I decided to define STEP 8 as "Final Sorting and Integration". First, gather all tariff rates for Product A. Then move to Product B. Repeat the same method.

Once all Products are processed, the final list will be complete. The Product order is maintained, and this will be the final form of TariffRate_Article.md.

### Adding Verification Procedures with Sequential Thinking

I designed STEP 6-8. However, verification was needed for each step. As in Week 14, I decided to add Sequential Thinking evaluation.

I decided to create STEP 6.7, 7.5, 8.5. These are intermediate evaluation steps. After each step is completed, we verify with Sequential Thinking.

STEP 6.7 is "Information Collection Result Evaluation". I decided to ask questions like "Have type-specific tariff rates been recorded for all products?", "Is the collected information accurate?", "Are there any omitted types?".

STEP 7.5 is "Duplicate Removal Result Evaluation". I decided to ask questions like "How many duplicates were removed?", "Was the merge done correctly?", "Is there any information loss?".

STEP 8.5 is "Final Integration Result Evaluation". I decided to ask questions like "Is the Product order maintained?", "Is the time order correct within each Product?", "Is the total number of tariff rates correct?".

I decided to add these evaluation procedures to the prompt. I decided to specify the question items and verification methods for each evaluation. About 100 lines will be added.

### Expanding PART B

Now PART A is almost complete. It contains STEP 0-5 search strategy, STEP 6 100% mapping verification, STEP 6.5 type-specific information verification, STEP 7-8 integration procedures, and Sequential Thinking evaluation. PART A will be about 800 lines.

In Week 17, PART A was 650 lines, and 150 lines will be added in Week 18. This is due to STEP 6-8, type-specific information verification, and evaluation procedures.

Next was PART B. In Week 17, PART B was 250 lines. It only had source-specific checklists. In Week 18, we needed to add integration work checklists.

I decided to add a "STEP 6: 100% Mapping Verification" section to PART B. I decided to create a checkbox for each product. The method is to check if there is a tariff rate. I also decided to add a counter that counts at the end.

I also decided to add a "STEP 6.5: Type-Specific Information Verification" section. I decided to create an information verification completion checkbox for each product. I also decided to add a part that confirms whether type-specific tariff rates are properly recorded.

I also decided to add a "STEP 7: Duplicate Removal and Merge" section. I decided to create duplicate verification checkboxes and merge completion checkboxes. I also decided to add a part that records the number of duplicates for each Product.

I also decided to create a "STEP 8: Final Sorting and Integration" section. I decided to include Product-specific sorting completion checkboxes and final integration completion checkboxes. I also decided to add a part that records the final tariff rate count.

About 200 lines will be added to PART B. 200 lines will be added to the 250 lines from Week 17, making a total of 450 lines.

### Completing TariffRate_Checklist.md

Now the entire framework of TariffRate_Checklist.md is complete. PART A about 800 lines, PART B about 450 lines, about 1,250 lines in total.

In Week 17 it was 900 lines, and 350 lines are being added in Week 18. This is due to the integration work methodology. STEP 6-8, type-specific information verification, Sequential Thinking evaluation, and PART B expansion are included.

HTS_Checklist.md was 1,060 lines, and TariffRate_Checklist.md is 1,250 lines. It is 190 lines more. The content increased due to the type-specific information organization procedure.

Strategy is 1,000 lines, Product is 1,820 lines, Economic is 850 lines, HTS is 1,060 lines, and TariffRate is 1,250 lines. We have completed the checklists for 5 information types. A total of 5,980 lines.

Next, it was time to collect the sixth information type, Timeline. The 6 information types plan established in Week 4 was nearing completion.

---

### Week 19 Preview: Understanding Timeline Structure

We have completed the checklists for 5 information types. Strategy, Product, Economic, HTS, and TariffRate have been designed. Now it is time to collect the last information type, Timeline.

What is Timeline? Is it tracking the implementation date of each policy? Or is it more complex? How is Timeline different from other information types?

In Week 19, we understand the structure of Timeline. We will cover the definition of Timeline, differences from other information types, and why Timeline is necessary. We plan to start designing Timeline_Checklist.md.

See you in Week 19.

---

# Week 19: Timeline Structure

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### 3 Types of Effective Dates

When I looked into effective dates, there wasn't just one type. There were several types, and the first was the confirmed effective date. It was the Effective Date of the Final Rule, a legally confirmed date.

The second was the expected effective date, the Expected Effective Date of the Proposed Rule. It was at the proposal stage and not yet confirmed, but it was an expected date.

The third was the Comment Period Deadline of the Proposed Rule, the deadline for submitting comments.

This was the classification system for effective dates. It could be divided into 3 types. Each type had a different meaning. Confirmed had legal effect. Expected was not yet confirmed. Comment deadline was an opportunity for participation.

But why divide into 3 types? I asked Claude using Sequential Thinking.

"1st thought: Each type means a different stage.", "3rd thought: The confirmed effective date is already decided.", "5th thought: The expected effective date is at the proposal stage.”

"7th thought: The comment deadline is an opportunity for participation.", "10th thought: Each type is independent.", "12th thought: Therefore, one product can have multiple types simultaneously.”

I understood this. The 3 types mean stages. They were confirmed, expected, and comment deadline. Each had to be recorded separately. It was like classifying types like Type A, B, C of TariffRate.

### Multiple Effective Dates in One Product

Then what is the relationship between Product and Timeline? Is it 1:1? Or is it 1:N? I requested Sequential Thinking again. "Analyze the relationship between Product and effective dates.”

Claude analyzed. "1st thought: One Product can have multiple effective dates.", "4th thought: There can be one confirmed effective date.

"6th thought: There can also be an expected effective date.", "8th thought: There can also be a comment deadline.", "10th thought: Therefore, one Product can correspond to at least 3 dates.”

"12th thought: This is a 1:N relationship.", "15th thought: Then 50 Products can expand to 150 or more Timelines.", "18th thought: If we start with Product, we find 50, and find effective dates for each Product. It's much more efficient.”

Having multiple effective dates in one Product was the main reason why Product should be the standard.

Especially, maintaining order was important. If Timeline is sorted by urgency, Product order breaks. Later, when mapping tariff rates or classification codes, Product order is needed. If Product order breaks, mapping becomes complicated.

Therefore, Timeline must be listed exactly as Product order. Do not sort. Record as is. I decided to emphasize this in PART A. I decided to specify rules like "absolutely prohibit sorting by urgency", "absolutely prohibit D-day calculation", "Product order only as is".

### Importance of Pure Collection

But there was one more thing I realized. Timeline should be pure information collection. Strategy made classifications. Product made lists. Economic calculated scale. HTS recorded codes. TariffRate recorded percentages. Timeline?

Timeline also just needs to be recorded as is, and collecting necessary information comes first before analysis and prediction. Sorting or analysis is done by users as needed.

I decided to repeatedly emphasize this in PART A. I decided to add a "Pure Collection Principles" section. I decided to specify rules like "no analysis", "no prediction", "no judgment", "no sorting", "no D-day calculation", "no urgency indication", "maintain Product order".

Now PART A was almost complete. I recorded project information, STEP 0 procedures, Product-based accumulation rules, and pure collection rules. PART A would be about 350 lines.

What I did so far was understand the structure of Timeline, identify 3 types of effective dates. And I realized the 1:N relationship between Product and Timeline. I confirmed the importance of pure information collection.

The Product-based accumulation principle was still valid. Timeline also followed the Product structure. In STEP 0, read Product_Article.md and find effective dates for each product. This was the foundation of mapping.

---

### Week 20 Preview: Timeline Extraction Prompt

I understood the structure of Timeline. I identified 3 types of effective dates, the 1:N relationship between Product and Timeline, and pure collection principles. Now I had to design the actual prompt.

How should STEP 0 be designed? What are the specific procedures for reading Product_Article.md? How should the 5 sources be divided? How should the 3 types be distinguished? How can mapping be guaranteed?

In Week 20, I design the Timeline extraction prompt. I will cover STEP 0 procedure detailing, source-specific search strategies, type distinction methodology, and mapping verification procedures. Timeline_Checklist.md will expand from 350 lines to over 1,000 lines.

See you in Week 20.

---

# Week 20: Timeline Extraction Prompt

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### First Problem: Should We Also Sum Effective Dates?

As we began designing Timeline_Checklist.md, there was a first problem to solve.

I asked Claude through Sequential Thinking: 'How should Timeline record by type?'

Claude began thinking. "1st thought: Timeline is dates.", "3rd thought: Confirmed effective date, expected effective date, and Comment deadline are each independent."

"5th thought: These three have different meanings.", "7th thought: Confirmation has legal effect. Expected is not yet confirmed. Comment deadline is an opportunity to participate.", "10th thought: Therefore, we do not sum them. We record each separately."

Timeline did not need summation, and we just needed to record each type as is.

This was the reason Timeline was simpler than TariffRate. Because dates only need type distinction. It was a structure where we verify mapping in STEP 6 and directly integrate in STEP 7.

### Second Problem: Product Already Has Effective Dates

We organized the specific procedures for STEP 0. We decided to add it to PART A as a "STEP 0: Reading Product_Article.md" section. It was about 150 lines. We decided to specify commands, confirmation items, and precautions for each step.

But there was a problem. Product_Article.md may already have effective date information. When collecting Products in Week 8-10, effective dates would have been recorded together.

Then should we search again in Timeline_Checklist? Or should we just copy Product's effective dates? I requested Sequential Thinking again: 'How should we utilize Product's effective date information?’

Claude answered. "1st thought: If Product already has effective dates, we should refer to them.", "3rd thought: However, Product's effective dates are information from the product confirmation point.", "5th thought: Timeline collects more detailed information. It distinguishes 3 types.”

"8th thought: Therefore, we use Product's effective dates as a starting point.", "10th thought: We directly verify that document and extract detailed effective date information.", "12th thought: It is a strategy to directly utilize source documents secured from Product.”

I understood this method. We do not ignore Product's effective dates but rather actively utilize them. If we secured a source document like "FR 90-12345" from Product, we directly search that document. We find confirmed, expected, and Comment deadlines within it.

### Designing Strategies for 5 Sources

Now we needed to design source strategies. The first source was policy announcement materials. It was a method to directly utilize source documents secured from Product. We decided to specify it as "Strategy 1: Direct Utilization of 2nd Source Documents (Recommended)".

The second strategy was a method to search with product name + HTS code. We use it when Product has no source or when additional information is needed. We decided on "Strategy 2: Product Name + HTS Code Search".

The third strategy was a method to search only with HTS code. It is to prepare for when product names do not match. We decided on "Strategy 3: Search Only with HTS Code".

I estimated the number of searches for the first source. It was about 20-25 times. It was similar to HTS's 20-25 times. It was less than TariffRate's 30-40 times. Because effective dates do not need type classification.

From the second source to the fifth source played auxiliary roles. They supplement effective dates not found in the first source. We estimated 15-20 times, 10-15 times, 5-10 times, 5-10 times respectively.

We calculated the total number of searches. Adding 20-25 times, 15-20 times, 10-15 times, 5-10 times, 5-10 times equals 55-80 times. It was the same as HTS's 55-80 times. It was less than TariffRate's 65-95 times.

### Detailing Source-Specific Strategies

We identified 5 sources. Now we needed to design specific search strategies for each source. Like when collecting HTS in Week 14, we needed to specify what materials to find for each source and why those materials are needed.

We designed the strategy for the first source. The required materials were policy announcement documents. Documents like Final Rule, Proposed Rule, Investigation. Each document would contain effective date information. We needed to find these documents to secure confirmed effective dates, expected effective dates, and Comment deadlines.

We decided on search procedures. First verify Product's source documents, directly search those documents, and secure the entire content. We find documents with web_search and get the entire content with web_fetch.

The strategy for the second source was slightly different. The required materials were practical implementation documents. They would be documents informing the actual application timing after policy announcement. If we found confirmed effective dates in the first source, we needed to confirm practical implementation dates in the second source.

The required materials in the third source were investigation documents. Documents like Investigation or Review. They would provide expected effective dates or expected completion dates. We designed a method to refer to when estimating effective dates of policies not yet confirmed.

The required materials in the fourth source were administrative order documents. Documents like Executive Order or Memorandum. They would include specific effective dates or review deadlines. We decided on a method to confirm effective dates by policy and record those dates.

The required materials in the fifth source were announcement calendars. Calendars providing Comment Period or Public Hearing schedules. We designed procedures to use for additionally confirming Comment deadlines.

We decided to include source-specific strategies in the prompt. We decided to add a "STEP 1-5: Source-Specific Search Strategies" section to PART A. We decided to specify role, required materials, search method, and expected number for each source. About 250 lines would be added.

### Adding Sequential Thinking Evaluation

Evaluation was needed when each source-specific search ended. We also did Sequential Thinking evaluation when collecting HTS in Week 14. It was to check how much was secured from each source and whether there were any omissions.

We decided to apply the same method to Timeline. It is a method to evaluate with Sequential Thinking when each source's search is completed. It is a method of asking questions like "How many products' effective dates were secured from this source?", "How many products are missing?", "Can they be supplemented in the next source?".

We designed a method to record evaluation results in the checklist. It is a procedure to add evaluation results to the relevant source section. This was a method to track progress.

We decided to include evaluation procedures in the prompt. We decided to create intermediate STEPs like "STEP 1.5, 2.5, 3.5, 4.5, 5.5: Sequential Thinking Evaluation". We decided to specify question items and recording methods for each evaluation. About 100 lines would be added.

### Designing Integration Procedures Simply

Now we needed to design integration procedures. When integrating TariffRate in Week 18, STEP 6, 6.5, 7, 8 were needed. They were mapping verification, type-specific information confirmation, deduplication, and final integration.

What about Timeline? STEP 6 is needed. Mapping verification is essential for all information types. STEP 6.5 is not needed. Because type-specific information confirmation is simpler. Is STEP 7 needed?

I requested Sequential Thinking: 'Does Timeline need deduplication?’

Claude answered. "1st thought: TariffRate had much type-specific information. The same product appeared from multiple sources.", "3rd thought: However, Timeline will have less duplication. Because effective dates are clear.", "5th thought: The same dates may appear from multiple sources, but merging is simple.”

"7th thought: Therefore, deduplication procedures can be made simple.", "10th thought: We define STEP 7 as 'Final Integration'.", "12th thought: We handle deduplication and integration in one STEP.”

Timeline's integration was simpler than TariffRate. We verify mapping in STEP 6 and directly do final integration in STEP 7. STEP 6.5, 8 were not needed.

We designed STEP 7 procedures. We gather each product's effective dates. We remove duplicates. We list them in Product order. We do not sort by imminence and do not calculate D-day. We integrate as is.

We decided to include integration procedures in the prompt. We decided to add "STEP 6: Mapping Verification" section and "STEP 7: Final Integration" section, so about 150 lines would be added.

Next was PART B. As a work checklist, we needed to make it so progress could be recorded by source like HTS_Checklist.md. It is a method of indicating completion status of each search using checkboxes.

We decided to create 5 source-specific checklists in PART B. It is a structure to record search progress, number of secured effective dates, and evaluation results for each source. We decided to include checkboxes and counters.

### Completing the Framework

Now the checklist framework was completed. PART A about 650 lines, PART B about 350 lines, total about 1,000 lines. It was similar to what was expected in Week 19.

HTS was 800 lines, TariffRate was 1,250 lines, Timeline was 1,000 lines. Timeline was 250 lines less than TariffRate. Because type distinction is simpler and integration procedures are simple.

We included procedures from STEP 0-7. From reading Product_Article.md, 5 source-specific search strategies, mapping verification, to final integration were designed. We also added Sequential Thinking evaluation. We also made work checklists.

We completed checklists for 6 information types. Strategy 1,000 lines, Product 1,820 lines, Economic 850 lines, HTS 1,060 lines, TariffRate 1,250 lines, Timeline 1,000 lines. Total is 6,980 lines.

The plan for 6 information types established in Week 4 was completed. Now it was time to move to the next stage.

---

### Week 21 Preview: The Necessity of Execution Prompts

We completed checklists for 6 information types. Strategy, Product, Economic, HTS, TariffRate, Timeline were designed, and we specified what to collect.

Now it is time to execute. Should we just give Timeline_Checklist.md to Claude? Should we read 1,000 lines and say "execute on your own"?

There was a bigger problem. Timeline collection requires 55-80 searches, and when conversations are cut off due to token limits, we need to open new conversation windows. What if it executes differently each time we start anew? How do we guarantee consistency?

Week 21 will cover the necessity of execution prompts. It will cover why checklists alone cannot guarantee consistency, the problem of token limits and conversation resumption, and how Manager files enforce consistent execution. We plan to establish the "Initialization (Immediate Automatic Execution Now)" structure.

See you in Week 21.

---

# Week 21: The Necessity of Execution Prompts

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Checklists Alone Cannot Guarantee Consistency

We completed checklists for 6 information types and specified what to collect. We designed procedures starting from STEP 0, search strategies by government agency, mapping verification, and integration methodology.

Now it was time to execute. Should we just give Product_Checklist.md to Claude? Should we read 1,820 lines and say "execute on your own"?

Product_Checklist.md's PART A had project information, core strategies, and execution rules. PART B had work checklists from STEP 1 to STEP 7. 75-100 searches and 5 evaluations were specified.

What would happen if we gave this to Claude?

To conclude first, consistent execution was impossible.

After completing everything including execution order and checklists over several months, it executed differently each time, which was really frustrating, and there was an even bigger problem.

Collecting information types like Product requires an average of 75-100 searches, and when conversations get long due to token limits, Claude stops and we need to open a new conversation window to resume work.

This is when problems arise. When starting over in a new conversation window, what do we do? Should we give Product_Checklist.md again? Should we say "We completed up to STEP 3 last time, so start from STEP 4"?

At this point, I seriously thought about giving up, but I didn't give up because the effort and time I had poured in were too precious.

Instead, I asked Claude using Sequential Thinking: "Why don't you always do consistent work?”

It turned out that the requirements were too long and extensive, so there were too many possible cases.

In short, when progressing and judging using Sequential Thinking, if search results differ from expectations, Claude might proceed with additional investigation on its own, and if work has already been done, even if incomplete, it might judge it as completed and move on to the next task.

This wasn't the fault of Claude or me who planned this prompt, because simply put, since we don't know the work results yet, we cannot determine what the work completion criteria are before starting work, and this was a limitation that couldn't be prepared for.

In short, when executing massive work, it was inevitable because we cannot prepare infinite possible cases in advance.

In this part, I realized once again the necessity of completing simple information collection first, not analysis or prediction, and although we cannot prepare all possible cases, I thought it necessary to at least present consistent criteria first.

### Method to Force Consistent Start

How do we force a consistent start? Is it enough to write in the checklist "first do this, then do that"? No. The checklist is read, but interpretation can differ for each person.

I thought of a different method. Creating a separate prompt that reads and interprets the checklist. This prompt reads the checklist, identifies progress status, and proposes the next task. Making it follow a standardized order every time.

I decided to call this the "Manager file". I began designing Product_Interactive_Work_Manager.md. An interactive work manager. A prompt that reads and interprets Product_Checklist.md.

I designed the first part of the Manager file. A section called "Initialization (Immediate Automatic Execution Now)". When receiving this prompt, these are procedures that Claude must execute immediately and automatically.

Step 1: Read [Checklist.md](http://checklist.md/). Read Product_Checklist.md completely. Read to the end.

Step 2: Understand with Sequential Thinking. Understand internally for 8 questions. Questions like "Why track only future implementation?", "Why are Proposed/Investigation 100% future?".

Step 3: Identify progress status. Read PART B and check what has been completed. Identify current source, search count, document securing status.

Step 4: Report current state. Report to the user. "Currently source 2, 35/100 searches completed, next is source 2 search 36.”

These 4 steps execute identically every time. Even opening a new conversation window is the same. Whoever executes it is the same. Consistency is enforced.

### The Role of Manager Files

Manager files are prompts that execute checklists. But they don't just execute. They guarantee consistency.

Checklists are blueprints. They specify what to do. 1,820 lines. But they don't specify how to start or how to resume.

Manager is an execution manual. It forces how to start. 775 lines. It specifies how to read checklists, how to identify progress status, how to propose tasks. It forces the same order every time.

Product_Checklist.md specifies "what". Product_Interactive_Work_Manager.md forces "how". The two files work together.

If you give only the checklist without the Manager file? It executes. But it's not consistent. It can be different each time. If conversations are cut off due to token limits, resumption is uncertain.

If you give it with the Manager file? Consistent execution is guaranteed. It starts in a consistent manner every time. Even opening a new conversation window follows the same procedure. The order of checklist → Sequential Thinking → progress status identification → task proposal is enforced.

### Standardizing Workflow

Manager files also standardize workflow. How do we proceed with 75-100 searches? All at once? Or divided? Do we get user approval?

I designed the workflow. Task proposal → user approval → execution → Checklist update → next task proposal. This repeats.

For example, let's assume we do search 36. Manager first proposes. "I will execute search 36. I will find product list documents from source 2. Shall we proceed?”

The user approves. Answers "proceed". Manager executes. Executes web_search, executes web_fetch, and saves results to [Article.md](http://article.md/).

When execution ends, it updates the Checklist. Marks checkboxes. Updates search count. Updates document count.

Then proposes the next task. "Completed search 36. Next is search 37. Shall we proceed?”

This flow is identical every time. The same pattern from search 1 to 100. Consistency is guaranteed. Even if interrupted in the middle, resumption is clear.

### The User's Role

For reference, the reason for not automating all tasks but necessarily requiring user judgment and approval is to prevent mishaps that occur when judging the next task and current task based on results that come out during work, which were mentioned earlier.

Since AI and especially I, the creator who made this prompt, don't know the search results before execution, instead of preparing all possible cases, I overcame this problem by having users check and verify at every moment.

As emphasized many times in the early 30-week column, ultimately the completion quality of AI output is determined by the user's planning and verification capabilities.

Regardless of whether the found information is true or not, what's more important and needed first is the reason and purpose for finding the information. In other words, even if the purpose is simple information collection, whether this is the information I'm looking for? That intent is determined by the user's clear requirements no matter how advanced AI becomes.

And whether this is the information I was looking for, especially whether AI understood the user's intent correctly? Whether it found information that meets the purpose? Only one person can judge this, the user who gave commands to AI.

Ultimately, AI can quickly replace search in existing work, but planning and verification, which are before and after search, can never replace the user. So when using AI, users' work forms all change in a direction specialized in planning and verification like CEOs.

As such, even if AI verifies, final outputs always needing user review is absolutely necessary at every moment, and I too always directly review results.

### Common Structure of 6 Information Types

Returning to ongoing work, we designed Product_Interactive_Work_Manager.md. Now the remaining information types also need Manager files. Strategy, Economic, HTS, TariffRate, Timeline all need Manager files.

All 6 Manager files follow the same structure. A common structure.

First, initialization procedures. It starts with "Immediate Automatic Execution Now". The order is Checklist reading, understanding with Sequential Thinking, progress status identification, current state reporting. It's the same every time.

Second, workflow. Task proposal → user approval → execution → Checklist update → next task proposal. This repeats. All Manager files have the same flow.

Third, interactive method. Manager converses with the user. It proposes tasks and waits for approval. It doesn't execute unilaterally. The user controls.

Fourth, consistency guarantee. Manager operates in the same way every time. Even opening a new conversation window is the same. Even if cut off due to token limits, resumption is clear.

This common structure applies to all 6 information types. Strategy_Interactive_Work_Manager.md, Economic_Interactive_Work_Manager.md, HTS_Interactive_Work_Manager.md, TariffRate_Interactive_Work_Manager.md, Timeline_Interactive_Work_Manager.md all follow the same pattern.

### Starting to Design 6 Separate Managers

Now we clearly understood the necessity of Manager files. Checklists specify "what". Manager forces "how". Guaranteeing consistent execution is Manager's role.

First, we decided to start with Product, because Product is the reference point for all information types.

Creating Product_Interactive_Work_Manager.md first would make designing the remaining Managers easier. Because we can establish the common structure.

How do we design Product Manager? How do we do initialization procedures? What is the task proposal method? How do we update Checklists?

---

### Week 22 Preview: Product Manager Structure

Checklists alone cannot guarantee consistency. Conversations are cut off due to token limits, and we need to resume in new conversation windows. We need to start in the same way every time.

Manager files solve this. They force consistent starts. They standardize the flow of initialization → progress status identification → task proposal → approval → execution → update.

But how do we design specifically? Product_Interactive_Work_Manager.md is 775 lines. How do we interpret Product_Checklist.md's 1,820 lines? What are the 8 Sequential Thinking questions?

Week 22 will design Product Manager structure. It will cover initialization 4-step details, workflow standardization, and Checklist update methods.

See you in Week 22.

---

# Week 22: Product Manager Structure

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Complexity of Product Checklist

When I opened Product_Checklist.md again, it was 1,820 lines. PART A contained project information, core strategies, and execution rules, and PART B contained search plans by source.

75-100 searches were divided into 5 sources. There were a total of 5 evaluations for each source.

Core Strategy 1 was "securing product list documents". Instead of searching for individual products one by one, we secure list documents and especially secure as many products as possible at once.

Core Strategy 2 was "tracking future enforcement only". Products enforced in the past are not needed, and we only select future products that have not been enforced, with Proposed Rule and Investigation having high possibility of future enforcement. And Final Rule must check the enforcement date.

There was also a final integration stage. We select only future enforcement documents and extract product information.

All of this was specified in 1,820 lines. But how do we execute it? Where do we start? How do we track progress? This is what the Manager file had to solve.

### Design of 4-Step Initialization

I designed the first part of the Manager file. A section called "Initialization (execute automatically right now immediately)". This is a procedure that Claude must execute automatically immediately upon receiving this prompt.

Why "right now immediately"? To enforce consistency. When the user pastes the Manager file, Claude immediately starts initialization. It's the same every time. It executes automatically before the user gives additional instructions.

Step 1 is reading the Checklist. Read all 1,820 lines of Product_Checklist.md to the end, and if truncated occurs because it's too long, use view_range to read the entire thing. Must read completely until "🎉 Project complete!".

Why must we read the entire thing? Because the Checklist specifies both what to do and how to do it. If we only read part of it we might miss things, and we must understand all the core strategies, execution rules, search plans by source, evaluation guides, and integration methodology.

Step 2 is verification with Sequential Thinking. We've read the Checklist, but we must confirm whether we understood it. This is a stage where Claude verifies internally by thinking about 8 questions.

There are 8 questions. "Why track only future enforcement?", "Why do Proposed/Investigation have high possibility of future enforcement?", "Why does Final Rule need enforcement date check?", "Why is the product list document securing strategy?", "Why is reference document tracking necessary?", "Why is sorting by enforcement date essential?", "How to achieve the 50-75 target?", "Why is the (estimated) marking necessary?”

Step 3 is understanding progress status by reading PART B and checking how far has been completed. What is the current source among 1-5? Is the search count X/Y times? Is the next execution point search #?

Particularly important is the document securing status. Confirm Proposed: __ pieces, Investigation: __ pieces, Final (future): __ pieces, Final (past): __ pieces. This is why tracking is possible even if the conversation is cut off, because the document type count is recorded in the Checklist.

Step 4 is reporting the current status to the user. Making reports like "Currently source 2, search 35/100 completed, next is source 2 search 36." allows the user to immediately understand the current status.

These 4 steps are executed the same every time. Even if you open a new conversation window, if you paste the Manager file the same way, it starts automatically immediately and consistency is guaranteed.

### Meaning of 8 Sequential Thinking Questions

Why 8 questions? Because these are the questions necessary to understand the core principles of the Product Checklist. Through each question, we verify various parts of the Checklist.

First question: "Why track only future enforcement?" Understand core strategy 2 of the Checklist. Past products are not needed.

Second question: "Why do Proposed/Investigation have high possibility of future enforcement?" Because Proposed Rule is in the proposal stage.

Third question: "Why does Final Rule need enforcement date check?" Final Rule must confirm when it will be enforced. If the enforcement date is in the past, exclude it, if the enforcement date is in the future, track it.

Fourth question: "Why is the product list document securing strategy?" If we search for individual products one by one, hundreds of searches are needed, but if we secure Annex documents etc., we secure 60 products at once. We can secure most with 75-100 searches.

Fifth question: "Why is reference document tracking necessary?" Federal Register documents reference each other, there are sentences like "This modifies the action in 83 FR 40823", and if we don't track reference documents at this time, we may miss them.

Sixth question: "Why is sorting by enforcement date essential?" If we calculate D-day, we can understand urgency with markings like "D-30", "D-60".

Seventh question: "How to achieve the 50-75 target?" We search 5 sources and secure Proposed, Investigation, Final (future) documents.

Eighth question: "Why is the (estimated) marking necessary?" We must distinguish between confirmed enforcement dates and estimated enforcement dates. Final Rule is confirmed and marked like "2026-12-01". Proposed Rule is estimated, marked like "2027-03-01 (estimated)" so the user can judge.

If we answer these 8 questions, we have completely understood the Checklist. By having Claude think about these questions internally using Sequential Thinking, this is a stage where the user confirms whether Claude has understood the Checklist correctly.

### Standardization of Work Flow

Once initialization is complete, we start work. We standardized the work flow, and all work follows the same pattern.

First, work proposal. The flow of search work is Claude proposes search of keywords specified in the Checklist, then after the user approves, executes web_search. After searching, we receive up to 10 results, and if we discover useful documents, we execute web_fetch to bring the entire content.

If we discover a reference pattern during web_fetch execution, the Manager immediately proposes. If we discover a sentence like "This modifies the action in 83 FR 40823", the Manager proposes. "Discovered reference document. Should we track 83 FR 40823?" If the user approves, we search immediately.

Second, waiting for user approval. The Manager does not execute unilaterally. It waits until the user answers "proceed". The user controls, and if the user says "stop", it stops. If they say "explain", it explains in detail.

Third, execution. If the user approves, the Manager executes. We execute web_search and web_fetch. We make future enforcement determinations, where Proposed has high possibility of future enforcement and Investigation also has high possibility of future enforcement. If Final, we look for the enforcement date in the snippet. We look for sentences like "effective December 1, 2026". If the enforcement date is greater than the reference date, it's future. If smaller, it's past.

The key is selecting only future enforcement documents, where Final: select only enforcement date > reference date. Exclude Final (past), and selection result: total discovered __ pieces, future enforcement __ pieces, past enforcement excluded __ pieces.

Fourth, insert into [Article.md](http://article.md/). We record everything: search keywords, discovered documents, future enforcement determination, product information, source, and at this time, to absolutely not touch existing content, we use only insert from text-editor. We don't use str_replace or create. This is to preserve what was worked on before without deleting it.

Fifth, Checklist update is marked with checkboxes. Change "- [ ] search 36 completed" to "- [x] search 36 completed". Update search count and change "Total search count: 35/100" to "Total search count: 36/100".

After that, evaluate with Sequential Thinking. Did we secure future enforcement documents? Proposed: __ pieces, Investigation: __ pieces, Final (future): __ pieces, Final (past): __ pieces. How many product types approximately? Is HTS mapping possible? Did we secure sufficient documents?

Particularly important is updating the document type count. If we found a Proposed document, update "Proposed: 2 pieces" to "Proposed: 3 pieces". If we found a Final (future) document, update "Final (future): 4 pieces" to "Final (future): 5 pieces".

Why is document type count important? Because tracking is possible even if the conversation is cut off. If we open a new conversation window and initialize, in step 3 we read this count and can immediately understand what content we secured from which documents.

Sixth, completion report, where Manager reports the execution result. "Completed search 36. Found Proposed Rule 1 piece. Determined as future enforcement. Saved to [Article.md](http://article.md/). Updated Checklist."

Seventh, next work proposal, where immediately after completion report we propose the next work. "Next is search 37. Should we proceed?" If the user approves, we return to step 1, and this flow repeats.

These 7 steps are the standard of work flow. From search 1 to 100, the same pattern, evaluation work also follows the same pattern. Integration work also follows the same pattern, and all work follows this flow.

### Importance of Document Securing Status Tracking

One of the most important parts in the Manager file is document securing status tracking. Why is it important?

When the conversation is cut off due to token limit and we must start tomorrow, tomorrow we open a new conversation window and paste the Manager file.

Initialization starts and in step 3, in the process of understanding progress status, we read the Checklist and check the document securing status section.

"Proposed: 3 pieces (future enforcement)", "Investigation: 2 pieces (future enforcement)", "Final (future): 5 pieces", "Final (past excluded): 2 pieces". The Manager immediately understands. We secured Proposed 3 pieces. We secured Investigation 2 pieces. We secured Final (future) 5 pieces.

We also check the search count. "Total search count: 30/100". Completed up to 30 times. Next is search 31. The Manager knows exactly. Where we stopped, where to resume, we understand.

This is the importance of Checklist updates. We update the document type count with each search, we update the search count with each search. Tracking is possible even if the conversation is cut off, and consistency is guaranteed.

What if there was no document type count? The Manager doesn't know what documents we secured, but if there is a document type count? The Manager immediately understands. If we just read the Checklist, we can know everything with one number.

This was the core insight of Manager file design. We track progress status with numbers, and update every time. Even if the conversation is cut off, resumption is clear.

### Completion of Product Manager

I completed Product_Interactive_Work_Manager.md. It was 775 lines. I specified everything: 4 initialization steps, work flow standardization, 4 work types, user commands, Checklist update method, important cautions, core principles.

Now I could design the remaining Manager files. Product Manager became the template. Strategy, Economic, HTS, TariffRate, Timeline Manager will all follow the same structure.

The 4 initialization steps are the same. Checklist reading → Sequential Thinking → understanding progress status → current status report.

The work flow is also the same. Proposal → approval → execution → update → next proposal.

The difference is the Sequential Thinking question content, where Product has 8 questions, but Strategy has different questions. HTS has other questions, questions that match the characteristics of each information type.

The difference is work types. Product has search, reference tracking, evaluation, integration, but Strategy is simpler with only search, evaluation, integration, but instead HTS will have mapping work added.

But the common structure is maintained. Because all Manager files follow the same pattern, we established this pattern by creating Product Manager first.

---

### Week 23 Preview: Strategy, Economic Manager

We completed Product Manager. 775 lines. We finished all of 4 initialization steps, work flow standardization, design by work type. We established the common structure.

Now we must design the remaining Manager files, so next we will design Strategy_Interactive_Work_Manager.md and Economic_Interactive_Work_Manager.md.

How will Strategy be different? Simpler than Product. We only collect strategy classification. Reference tracking is not needed. But Strategy accumulates based on Product. We must reference Product_Article.md.

Economic is also based on Product, where we find economic scale for each product of Product. We accumulate in Product order. We don't sort. We follow the order of Product_Article.md exactly.

In Week 23, we will cover the differences between these two Managers. We plan to materialize "Product-based accumulation and order maintenance rather than independent criteria" while designing Product-based accumulation method, Sequential Thinking question changes, and work type differences.

We will meet in Week 23.

---

# Week 23: Strategy and Economic Manager

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Commonality: Product Manager Basic Structure

Both Strategy_Interactive_Work_Manager.md and Economic_Interactive_Work_Manager.md use the basic structure of Product Manager, and the initialization 4 stages and work flow are the same.

They follow the pattern of Checklist reading → Sequential Thinking → progress status identification → current state reporting and proposal → approval → execution → update → next proposal, and this is the standard flow established in Week 22.

However, there are differences. Product, Strategy, and Economic all have 8 questions, but the question content is different and the work types are also different.

While Product was search, reference tracking, evaluation, and integration, the common structure is maintained but transformed to fit the characteristics of each information type.

### Strategy Manager Design

Strategy_Interactive_Work_Manager.md was designed, and at 936 lines it became longer than Product. The reason it became longer is because category-specific tracking methods and verification logic were added.

Strategy also had the same problem as Product. Strategy_Checklist.md is hundreds of lines, and it was unclear how to execute, where to start, and how to resume if the conversation is interrupted due to token limitations.

As mentioned in Week 21, consistency could not be guaranteed with the checklist alone, and because infinite cases could not be prepared in advance for each execution, it was a problem that inevitably occurred.

The Manager file solves this, and Strategy Manager also follows the same structure as Product Manager, with initialization 4 stages and the same work flow.

However, there are Strategy-specific characteristics, and you can see them in the Sequential Thinking questions. "Why track only future enforcement?", "Why do Proposed/Investigation have high future enforcement possibility?", "Why does Final Rule need enforcement date checking?" Up to here is the same as Product.

It becomes different from the fourth question. "Why select only specific categories?" Strategy does not collect all categories but focuses only on specific categories.

Fifth question: "How is category-specific acquisition tracked?" Here the core of Strategy is revealed, using a different tracking method from Product.

Sixth question: "How is the Checklist updated?" It confirms how to update the Checklist after work completion.

Seventh question: "How are source-specific responsible categories divided?" Each source is responsible for specific categories, understanding this distribution strategy.

Eighth question: "What are the work completion criteria?" It clarifies how to judge whether each stage is completed, and this is the method to solve the problem learned in Week 21 that "completion criteria cannot be predetermined because the work results are not yet known.”

These 8 questions contain the core of Strategy Manager, and Claude answers these questions by itself in initialization stage 2. This is the stage of fully understanding the Strategy Checklist.

### Economic Manager Design

Economic_Interactive_Work_Manager.md was designed. It was 859 lines, shorter than Strategy but with Economic-specific characteristics.

Economic also had the same problem. Economic_Checklist.md is hundreds of lines, and it was unclear how to execute. A Manager file was needed.

Economic's role is numerical data collection. It is pure information collection, and it does not analyze, does not predict, and does not judge. It only collects data.

You can see this in the Sequential Thinking questions, where the first question is "Why 'pure information collection'?" It confirms Economic's identity.

Second question: "Why is Product_Article.md essential?" This is Economic's most important characteristic. Product_Article.md must be read, and STEP 0 is essential.

Work is impossible without STEP 0. Product_Article.md must be read, the product list must be extracted, and the number of products must be identified, and only after this is completed can STEP 1 begin.

Third question: "Why is it Product-based accumulation method?" Economic has no independent criteria. It accumulates based on Product criteria, finding data for each Product product.

The fourth, fifth, and sixth questions confirm data types and source-specific characteristics. They understand what data is collected and from which sources it is obtained.

Eighth question: "Why is analysis/prediction/judgment all prohibited?" This is Economic's core principle. It only does pure information collection, does not analyze, does not predict, and does not judge.

### Difference in Tracking Methods

The core of consistency guarantee is progress status tracking, and the tracking method differs for each information type.

Product tracks counts. Why counts? Because multiple documents of the same type appear. There may be 3, 5, or 10 Proposed Rules. The same applies to Final Rules.

Therefore, "How many Proposed Rules have been secured?" is important, and it is recorded in the Checklist like this. "Proposed: 3, Investigation: 2, Final (future): 5". Just by looking at the numbers, you can immediately identify which documents have been secured.

Strategy tracks checkboxes. Why checkboxes? Because specific categories are selectively secured. Each category needs only one, either present or absent.

Therefore, "Is it present or absent?" is important, and it is recorded in the Checklist like this. "Category A: ✅, Category B: ✅, Category C: ⬜". Just by looking at the checkboxes, you can immediately identify which categories have been secured.

Tracking is possible even if the conversation is interrupted. Which categories have been secured is immediately identified, and it knows which category needs to be found next.

Economic also tracks checkboxes. However, the meaning is different, because data is secured for each Product product. "Has this product's data been secured?" is important.

It is recorded in the Checklist like this. "Product A: ✅, Product B: ✅, Product C: ⬜". Just by looking at the product-specific checkboxes, you can immediately identify which products have been completed.

This difference affects Manager design. Product Manager needs logic to update numbers. It increases "3 → 4". Strategy Manager needs logic to update checkboxes, changing "⬜ → ✅". Economic Manager also needs checkbox update logic, but it operates on a product-by-product basis.

### Pure Information Collection Principle

Economic's most important principle is pure information collection, and the Sequential Thinking eighth question confirms this. "Why is analysis/prediction/judgment all prohibited?”

Analysis is prohibited. Data is not interpreted, what the data means is not explained, and relationships between data are not analyzed. Data is just recorded as is.

Prediction is prohibited. Future values are not estimated, trends are not predicted, and increase/decrease rates are not calculated. Only past data is collected.

Judgment is prohibited. Whether data is good or bad is not judged, whether it is much or little is not evaluated, and whether it is important or not is not decided. Value judgments are not made.

Why is such a principle necessary? To maintain objectivity, and to separate data collection and analysis. Economic only collects data, and analysis is done later by the user.

The Manager strictly adheres to this principle. Only data is extracted from search results, recorded with sources, and analysis, prediction, and judgment are not done at all.

### Product-Based Accumulation Method

It was learned in Week 8. Among the 6 information types, Product is the reference point, and Economic, HTS, TariffRate, and Timeline all accumulate based on Product.

Economic follows the Product order exactly. It reads Product_Article.md, identifies the product A, B, C order, and Economic_Article.md is also recorded in the same order.

This is the meaning of "Product-based accumulation and order maintenance, not independent criteria". Economic has no independent criteria and follows Product's criteria and order.

This is why STEP 0 is essential. If Product_Article.md is not read, the product list is unknown and the order is unknown. In STEP 0, the product list is extracted and the order is identified.

When searching, it also follows the Product order. It searches from product A, and the order is product A completion → product B search → product B completion → product C search. Exactly the same as Product's order.

Order is also maintained in final integration. Product A's data, product B's data, product C's data are recorded in order, and this is exactly the same as Product_Article.md's order.

Product checkboxes also follow the Product order. The order "Product A: ✅, Product B: ✅, Product C: ⬜" is exactly the same as Product_Article.md's order, and this order is not changed.

Economic is completely subordinate to Product. It cannot start without Product, cannot change Product order, and is the clearest example of Product-based accumulation.

---

### Week 24 Preview: HTS and TariffRate Manager

Strategy and Economic Manager were completed. At 936 and 859 lines, they solved Week 21's consistency problem.

Now the remaining Manager files need to be designed. HTS_Interactive_Work_Manager.md and TariffRate_Interactive_Work_Manager.md will be designed next.

What challenges does HTS have? Mapping verification is the core. How to guarantee the accuracy of code mapping? How does the Manager force the verification stage? How to track mapping errors?

Week 24 will cover the design challenges of these 2 Managers. Verification stage addition and multiple reference processing methods will be specified.

See you in Week 24.

---

# Week 24: HTS and TariffRate Manager

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### HTS Manager Design

HTS also had the same problem. HTS_Checklist.md is hundreds of lines, and it was unclear how to execute. The consistency problem learned in Week 21 occurred here as well, and a Manager file was needed.

HTS is connected to identification codes for each item of Product, and this is a mapping task that goes beyond simple data collection.

You can see this in the Sequential Thinking questions. The first, second, and third questions are the same as other Managers. "Pure information collection", "Product_Article.md essential", "Product-based accumulation".

It becomes different from the fourth question. "Why is sorting absolutely prohibited?" The word "absolutely" has been added, and this is a very important principle. Sorting must not be done. Absolutely not.

Fifth question: "How is mapping verification done?" This is the core of HTS. Verification must be done after mapping, and it must be confirmed whether there are any omissions.

Sixth question: "What are the mapping completion criteria?" It clarifies the criteria for confirming whether codes have been connected to all Product items.

Seventh question: "How are source-specific roles divided?" It understands what kind of codes each source is responsible for.

Eighth question: "What are the work completion criteria?" As learned in Week 23, it clarifies the criteria for judging whether each stage has been completed.

These 8 questions contain the core of HTS Manager, and Claude fully understands the HTS Checklist while answering these questions by itself in initialization stage 2.

### Necessity of Mapping Verification

The most important characteristic of HTS and TariffRate is mapping verification. Why is verification essential for mapping? Because of the fundamental limitations of information.

Policies with future enforcement possibilities do not have everything perfectly in place. Because they are still under review or in the proposal stage, often only fragmented information is partially published and the overall picture is not clear.

For example, there may be a policy document about product A but the code may not be mentioned, the code for product B may be available but the scope of application may be unclear, and product C may not even be mentioned at all. The given information itself is incomplete.

Therefore, regardless of Claude's performance, verification is essential because there are cases where the given information is incomplete with only partial availability. The discovery of omissions after mapping is not AI's mistake but a limitation of the information itself.

The purpose of mapping verification is to confirm these omissions. It is to identify which items lack information and which items need additional searches, and the Manager forces the verification stage.

HTS aims for a high mapping rate, and TariffRate also aims for a high mapping rate. The reason for using the expression "aims" is because related information may not have existed.

However, an attempt must be made to achieve the highest possible mapping rate, and the Manager forces the verification stage. It automatically proposes verification after mapping completion, and when the user approves, it executes verification.

The verification logic is simple. It counts the number of items in Product_Article.md, counts the number of mapped items in HTS_Article.md or TariffRate_Article.md, and compares the two numbers. If they match, it is complete mapping, and if they do not match, there are omissions.

If omissions are found, the Manager reports. It informs "Product C's data is missing. Additional search is needed.", and the user can decide on additional work based on this. They judge whether the information actually does not exist or whether more searching is needed.

This is the method learned in Week 21 of "cannot prepare for all infinite cases, but at least present a consistent standard first". It clarifies verification criteria, makes the Manager automatically check, and makes it recognize the limitations of information.

### Sorting Prohibition Principle

The common principle of HTS and TariffRate is sorting prohibition. The Sequential Thinking fourth question confirms "Why is sorting absolutely prohibited?", and the word "absolutely" has been added. This is a very important principle.

Sorting must absolutely not be done. Why is that?

Because it is Product-based accumulation. If Product_Article.md has products in A, B, C order, HTS_Article.md must also be in A, B, C order, and TariffRate_Article.md must also be in A, B, C order. The order must be the same.

This is to maintain 1:1 correspondence. The first data of HTS corresponds to the first item of Product, and the first data of TariffRate corresponds. The same applies to the second item, and the same applies to the third item.

If the order changes, this correspondence breaks. What happens if HTS is sorted by enforcement date? Product C may move up and product A may move down. Then the first data of HTS (product C's code) is connected to the first item of Product (product A). This is completely incorrect mapping.

Economic was also not sorted. For the same reason. However, HTS and TariffRate are more strict. The Sequential Thinking fourth question confirms "sorting absolutely prohibited", and the word "absolutely" has been added.

Why are they more strict? Because it is mapping work. Economic was data collection, and even if the order changed, "which product's data it is" was explicitly stated in text. However, for HTS and TariffRate, the order itself is the link. If the order changes, the connection completely breaks.

The Manager enforces this. It does not execute sorting commands and maintains the Product order as is. Even in final integration, it first confirms the order, verifying whether the order of Product_Article.md and the order of HTS_Article.md match.

If they do not match, it stops work. It reports "Order does not match. The sorting prohibition principle has been violated.", and the user must manually restore the order. It is strict.

### Final Integration Order

In the Sequential Thinking eighth question, both HTS and TariffRate confirm "final integration is also order 2". What does "order 2" mean?

Product is order 1. It is the reference point for all information types and must be completed first. This was learned in Week 8.

HTS and TariffRate are order 2. They come after Product. Product must be completed before they can start, and they must follow the Product order.

This is dependency order. It is Product → HTS/TariffRate order, and reverse order is impossible. HTS cannot be made first and then Product, and TariffRate cannot be made first and then Product either.

This order is maintained in final integration as well. Product_Article.md is read first, and then HTS_Article.md or TariffRate_Article.md is integrated, and the order is important.

The Manager confirms this in STEP 0. It confirms whether Product_Article.md exists and is completed, and if it does not exist, it does not start work. It is a prerequisite.

TariffRate is more strict. It reads up to Product_Checklist.md to check completion status, and if there are incomplete items, it displays a warning. This is because if Product is not properly completed, TariffRate's quality is also not guaranteed.

This dependency order reflects the overall project structure. Product is the center, the rest accumulates based on Product, and HTS and TariffRate depend most strongly on Product.

### Two Managers Completed

Both Managers solve the problem of Week 21. Not "differently each time it is executed" but "the same every time", and consistency is guaranteed.

They follow a common structure. Initialization 4 stages are the same, work flow is the same, there are Sequential Thinking 8 questions, progress status is tracked, and they wait for user approval.

However, they reflected their respective characteristics. HTS is characterized by code mapping and verification, and TariffRate is characterized by Product completion prerequisite and data structuring. Both Managers strictly adhere to the sorting prohibition principle.

The necessity of mapping verification was clarified. It is because of the fundamental limitations of information, not Claude's performance problem. Because future policies only partially publish fragmented information, omissions are confirmed through verification and the limitations of information are recognized.

Now the remaining Manager files can be designed. Timeline Manager will also be designed in the same way. The basic structure will be maintained, but Timeline's unique characteristics will be reflected.

---

### Week 25 Preview: Timeline Manager

HTS and TariffRate Manager were completed. At 720 and 918 lines, mapping verification and sorting prohibition principle were implemented.

What challenges does Timeline have? The initialization stage may become complex, and dependency management is the core.

Data integration is also a challenge. How will the order be determined? What are the sorting criteria?

Week 25 will cover the design of Timeline Manager. Multiple file reference, dependency management, and data integration methods will be specified.

See you in Week 25.

---

# Week 25: Timeline Manager

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Timeline Manager Design

Timeline_Interactive_Work_Manager.md was designed, and it was 857 lines. Timeline also follows the same basic structure as other Managers, with initialization 4 stages being the same and work flow being the same.

This is the common pattern established in Week 22. Product Manager was used as a template, but Timeline's unique characteristics were reflected.

Timeline's role is timeline mapping. It connects timeline information to each item of Product, and this is a simple mapping task. Product must exist before Timeline can start.

You can see this in the Sequential Thinking questions. First question: "Why timeline information collection?" It confirms Timeline's purpose.

Second question: "Why is Product_Article.md essential?" It confirms the necessity of STEP 0, and Product_Article.md must be read before Timeline work can start.

Third question: "Why is it Product-based accumulation method?" Timeline has no independent criteria and follows Product. If Product has products A, B, C order, Timeline also has A, B, C order.

Fourth question: "Why are imminent order sorting and D-day calculation absolutely prohibited?" The word "absolutely" has been added, and this is a very important principle. Sorting must not be done, and calculation must not be done.

Fifth question: "Which government agencies to search?" It identifies government agencies to search such as Federal Register.

Sixth question: "Why is STEP 1.5 reference document tracking necessary?" Like Product, there is reference tracking, and it understands the automatic trigger method.

Seventh question: "Why is it not 100% mapping rate?" 100% is realistically impossible, and this is because of the fundamental limitations of information. This was learned in Week 24.

Eighth question: "Why does final integration also maintain only order 2?" Product is order 1 and Timeline is order 2, following Product. As learned in Week 24, this is dependency order.

These 8 questions contain the core of Timeline Manager, and Claude fully understands Timeline's role while answering these questions by itself in initialization stage 2.

### Sorting/Calculation Prohibition Principle

Timeline's common principle is sorting and calculation prohibition. Sequential Thinking question 4 confirms "Why are sorting and calculation absolutely prohibited?", and this is a very important principle.

Sorting must absolutely not be done, and calculation must absolutely not be done. Why is that?

First, because of role division. Because Product is the reference, Timeline does not need to re-sort or recalculate, and only needs to collect original data.

Second, if order does not match, mapping breaks. If Product has products A, B, C order but Timeline has C, A, B order, what happens? Timeline's first timeline (product C) is connected to Product's first item (product A). This is completely incorrect mapping.

Therefore, all information types must maintain the same order, and if Product_Article.md has A, B, C order, Timeline_Article.md must also have A, B, C order. Sorting is absolutely prohibited because it changes this order.

Calculation is also prohibited. If calculation results are added, it is no longer original data, and Timeline must only collect original data. This is the pure information collection principle. Calculating D-day by comparing with the current date is analysis, and Timeline does not analyze. Just as Economic Manager maintained the "pure information collection principle" in Week 23, Timeline also follows the same principle.

The Manager enforces this principle. In the final integration stage, the Manager does not attempt sorting, does not attempt calculation, and only confirms Product order maintenance.

How is order confirmed? Product_Article.md is read and item order is remembered. Product A, B, C order is identified, and this order is followed exactly when creating Timeline_Article.md. When searching, it also proceeds in A → B → C order starting from product A.

This order is maintained in final integration as well, not executing sorting commands and writing Timeline_Article.md according to Product_Article.md's order. Order match is verified, and if it does not match, work is stopped.

### Reference Tracking Mechanism

One of Timeline's characteristics is reference tracking. This is STEP 1.5, which was also in Product Manager.

If a reference pattern is discovered during search, the Manager immediately proposes, automatically detecting the signal that there is a reference document. The Manager proposes "A reference document was found. Track it?", and if the user approves, it immediately searches.

Reference document's timeline data is confirmed and saved to Timeline_Article.md, completing the reference chain. It tracks in original document → revised document → final document order, identifying timeline change history.

This is the same method as Product's reference tracking. It uses the same pattern, follows the same flow, and uses the same automatic trigger logic. The pattern established in Week 22 is being reused in Timeline as well.

Reference tracking is automatically triggered. When the Manager discovers a specific pattern in search results, it automatically proposes, and the user does not need to request "Please find reference documents" one by one. The Manager discovers and proposes by itself.

Federal Register documents often reference each other. Final Rule references Proposed Rule, Proposed Rule references Investigation, and revised documents reference original documents. Following this reference chain can secure more timeline information.

For example, product A's Final Rule may have been found but the timeline may not be clear. However, if the Proposed Rule referenced by this document is followed, expected timeline may appear, and if Investigation is followed, Comment deadline may appear.

Reference tracking increases mapping rate. For example, if only 70% was found through direct search, 85-90% is achieved through reference tracking. Not "differently each time it is executed" which was Week 21's problem, but "the same every time" reference tracking.

### Mapping Task

Timeline's core is mapping task. Connecting timeline information to each product of Product is a simple but important task.

First, each time a search is done, results are saved to Timeline_Article.md. It is organized by product, saving in the order of product A's timeline, product B's timeline, product C's timeline. Product order is maintained exactly.

Then, in STEP 6, mapping is verified. Product_Article.md's product count is counted, Timeline_Article.md's timeline count is counted, and the two numbers are compared.

If omissions are found, the Manager reports. It informs "Product D's timeline is missing. Additional search is needed.", and the user can decide on additional work based on this.

The discovery of omissions is not AI's mistake but a limitation of the information itself. This was learned in Week 24. Policies with future enforcement possibilities only partially publish fragmented information, and regardless of Claude's performance, there are cases where the given information is incomplete.

In such cases, it is marked as "date undetermined" and reported as is.

In STEP 7, final integration is done. All data in Timeline_Article.md is read, timelines are organized by product, and an integrated list is created. Product order is listed as is, absolutely not sorted, and not calculated.

Sources are also specified. For example, it is displayed like FR 90-12345 (Final Rule), FR 90-67890 (Proposed Rule), CSMS-24-000123, so users can check original documents.

---

### Week 26 Preview: Integration

6 Managers have been completed. Each operates independently and collects data in a consistent manner.

Thanks to the common structure, consistency is guaranteed, thanks to their respective characteristics, roles are clear, there is no duplication and no omissions. 6 Managers work together to enable systematic information collection.

Now the final stage remains. Integrating 6 information types into one. An Integration prompt must be designed.

What challenges does Integration have? 6 Article files must be read, but in what order should they be read? Should Product be read first and then the rest? Is there a dependency order?

Data mapping is the core. Strategy's first data, Economic's first data, HTS's first code, TariffRate's first rate, Timeline's first timeline must be connected to Product's first item, and order must match.

Verification is also necessary. It must be confirmed whether the number of items in 6 files is the same and whether order matches, and if there is a mismatch, integration fails. Should a verification stage be forced like Manager?

Final output format must also be decided. How should 6 pieces of information be arranged? Table format? Document format? What format is easy for users to understand?

Week 26 will cover the design of Integration prompt. 6 file reading order, mapping logic, verification mechanism, and final output format will be specified.

See you in Week 26.

---

# Week 26: Integration Manager

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Integration Prompt and Individual Mapping Method

Integration_Interactive_Work_Manager.md was designed. It was 817 lines, and Integration_Checklist.md was also created. It was 1984 lines.

The initial plan was a separate integration stage. 6 Managers (Product, Strategy, Economic, HTS, TariffRate, Timeline) would each collect data, and the Integration prompt would read 6 Article files and integrate them into one. It was a structure to execute Integration as the 7th stage.

However, it changed during actual implementation. Strategy information was collected and then mapped to Product items at the end. Economic also mapped to Product while collecting economic data. HTS, TariffRate, Timeline were the same.

As a result, because collection and mapping were processed simultaneously, a separate integration stage became unnecessary, and mapping directly to Product while collecting data was more efficient. Integration was created but not used.

### Integration Files

As it changed to individual mapping method, the integration process became simpler. 6 Managers each mapped to Product, maintained order, and prohibited sorting, so integration was naturally completed.

The meaning of "sorting prohibition" emphasized in Week 21-25 became clear. Because each Manager maintained Product order as is, order matched without separate integration. The first data of other information types was automatically connected to the first item of Product.

Although it was not actually executed, the files themselves were useful. Product-based accumulation method was contained, mapping verification logic was present, and the structure of STEP 0-6 was clear, so it could be utilized as reference material when mapping individually with Product.

### 6 Managers Completed

While completing 6 Managers, the problem of Week 21 was solved.

Not "executed differently each time" but "the same every time" is executed, and consistency was guaranteed. Even if conversation was cut off due to token limit, resumption was clear, progress could be tracked, and the user was in control.

Each role was clear. Product was the reference point, and the other 5 mapped to Product while collecting. Order was maintained, sorting was prohibited, and integration was possible through individual mapping method.

Product-based accumulation that started in Week 8 was completed. Product was said to be the reference point, other information types were said to follow Product, and sorting was prohibited in Week 21-25. All these efforts made individual mapping method possible.

Thanks to common structure, consistency was guaranteed, thanks to individual characteristics, roles were clear, and there was no duplication and no omission.

---

### Week 27 Preview: Claude + Gemini + Python = Trinity

6 Manager files were completed and now it was time to execute. However, a problem occurred, and at the time of completion, Claude Max Plan limit was reached.

As it happened in a situation where results were urgently needed, while looking for solutions, Google's Vertex AI was discovered. It was an enterprise AI platform, operated with Python code, and large-scale work was possible.

Eventually, in an urgent situation, it was decided to convert 15,000 lines of prompts to fit Gemini 3 Pro.

After conversion, instead of Manager files, Vertex AI Python code was requested from AI, but Gemini 3 Pro first provided Gemini API-only code and warned that conversion to Vertex AI would make the code more complex.

At that time, because Integration had not yet been integrated into the other 5 files, 7 tasks were to be repeated for 7 files.

In an urgent situation with many things to do and an anxious mind, it was finally decided to use Gemini API (Paid Tier) in Google Colab.

Google Colab is an environment of borrowing and using Google's computer, where more than 20GB of functions are already installed, and even I, a non-developer who has never directly typed "Hello World" even once, could use it.

As a result, a structure where 3 things work together was born from crisis.

Week 27 will cover The Trinity. How Claude, Gemini Pro, and Python collaborate, what each role is, etc. will be covered.

See you in Week 27.

---

# Week 27: Claude + Gemini + Python = Trinity

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Discovering Google Infrastructure

When the planning was completed, I reached the Claude Max Plan weekly limit. It was a situation where I urgently needed results, but I couldn't execute, so I worried.

Thinking about it now, I should have proceeded while paying additional fees, but at that time, I was too panicked and looked for other methods besides Claude.

While looking for a solution, I discovered Google Infrastructure, and discovered Vertex AI, Google's enterprise AI platform.

However, unlike what I had been doing, it didn't execute in natural language but operated with Python code.

That part was a huge burden for me as a non-developer, but seeing the explanation that large-scale work could be done in a short time, I decided to try it.

It turned out that instead of the manager file corresponding to the execution prompt, only 7 natural language prompts needed conversion, in other words, the manager file composed of natural language was not needed.

For reference, as mentioned in Week 26, the Integration file disappeared because the mapping part with Product was added at the end to the remaining 5 (Strategy, Economic, HTS, Tariffrate, Timeline) excluding Product, so from now on I will only explain about 6 including Product.

First, I converted the 6 original prompts composed of natural language excluding the manager file to fit Gemini 3 Pro. The key was content related to MCP, deleting various contents composed of Sequential Thinking, text-editor's view, insert, str_replace, etc., and removing the user's intermediate confirmation and approval content.

In Google Colab, because results come out all at once when executed with Python, user intermediate intervention was not necessary, but nevertheless, the parts that record work content in the middle were all preserved as is.

Because the work content was so vast, if something came out wrong, I judged that I would need to manually check the results directly later and modify the code or natural language prompts.

After that, the 6 converted Gemini 3 Pro exclusive natural language prompt files generated Python code through Gemini 3 Pro (Paid Tier)'s thinking mode.

### The Birth of The Trinity

To tell you the conclusion first, although I urgently needed results, I postponed the originally planned schedule and completed The Trinity while exceeding the targeted time by far.

The reason is just one, because it was worth it.

Originally, as I mentioned earlier, I tried to use Vertex AI, and when I requested an explanation about the completed code, the completed code was Gemini API exclusive Python code, not Vertex AI.

When I panicked and asked why they didn't provide Vertex AI exclusive Python code, it turned out that Gemini 3 Pro had thoughtful consideration.

In a word, judging that I was a non-developer and the content to be executed was considerable, the consideration was to first quickly and simply test it, and if it worked well, then change to Vertex AI at that time.

Especially, they warned that converting Python code to Vertex AI would be much more complicated than now, because it processes several tasks at once, the speed would be much faster but there were also many modifications.

However, because there were many things added or transformed while changing the natural language prompts with already complex content to Python code, it was already complex enough, and because the time saved by converting was much smaller than the time needed to change Python code to Vertex AI, I did not convert.

Eventually, I decided to use Gemini API in Google Colab. I learned about Google Colab for the first time, and it turned out that it was an environment borrowing Google's computer, and because more than 20GB of functions were already installed, additional installation was not needed, which helped me as a non-developer.

The biggest help was that the code was very complex by non-developer standards and there were many modifications and additions, but each time I didn't need to install additional Python functions at all. In a word, the fact that the already complex code didn't get complicated with various additional installations was very satisfying.

As a result, The Trinity was born: planning with Claude, execution with Gemini API, and control with Python.

### Planning: Claude

I have been continuously using Claude's Max Plan from May '25 to currently January '26. The monthly fee is $100, and I have paid close to $1,000 so far, but despite the not small price, I think it is very cheap compared to what I gained.

If I say Claude's best advantages, I think it's the part where I can use MCP (especially Sequential Thinking) and the massive answer output amount at once.

Not only that, because the coding skills are also extremely excellent, when I didn't even know about the existence of Gemini yet, Claude made my homepage 100%.

And because when I use Sequential Thinking, which I use at least dozens of times a day, to ask for explanations of something, it reviews very thoroughly before explaining, Claude cannot be left out when planning something.

Especially because I was the first AI I seriously used and I saw too many effects in various fields and parts, even before using Gemini, I was already processing all work almost as one body with Claude.

As a result, although Claude exclusive natural language prompts were not used, they just changed to fit Gemini 3 Pro, but the core is all being used.

To tell you in advance, the order of operation in Google Colab is 1. Attach the Markdown file of natural language prompts written in natural language and converted to fit Gemini Pro to Google Colab, 2. After pasting the Python code to execute that file, 3. Press the execute button and after about 1 hour on average, results are generated and can be downloaded.

Here, all the core content of the natural language prompt Markdown file corresponding to number 1 was planned with Claude.

If you collect U.S.-China semiconductor tariff policies, it's the simplest form of work without prediction or analysis, but in reality, much knowledge and understanding of tariff policies was needed.

In that process, I accumulated various knowledge for close to 6 months using Sequential Thinking and web_search, and designed natural language prompts accordingly, and in that process, I received really great help.

### Search: Custom API

In Google Colab, besides Gemini API, there is one more API that is additionally needed. That was a search engine called Custom API (Google Custom Search API).

If you search with general AI, the user requests to AI, AI searches, AI summarizes results, and delivers to the user.

However, Google Custom Search API searched without AI intervention, received the original text, and delivered to the user. So it brought the original text of Federal Register as is, not content summarized by AI.

Since information collection is the goal anyway, AI intermediate intervention was unnecessary. Google Custom Search API searched, Python saved results, and Gemini Pro evaluated later. In the search stage, unnecessary AI intervention was excluded.

The results were that title, URL, and snippet were extracted simultaneously. The URL was the original link, and the snippet was part of the body related to the search term.

One interesting part was that when checking search results, PDF files were also included sometimes, and I thought it was really excellent that it searched widely not only content on specific sites but also various format files.

And searches proceed one by one slightly faster than 1 second normally, and the same as Claude's web_search, when there are search results, it brings up to 10 search results, so when I searched all 6 on December 24, '25, I did 959 searches in total, and as a result verified 5,733 U.S. government agency documents, and 128,090 lines of process and results were recorded.

### Execution: Gemini API

The core of this project is not simply collecting policy information, but selectively collecting only policy information with future implementation possibility.

In other words, to selectively collect only policies scheduled for implementation or under review, various filters including date filters must be applied to select only information about policies scheduled for future implementation.

Searches mostly ended within an average of 3 minutes for all 6, processing about one per second, but the selection work took an average of 1 hour, so reading the collected information and filtering work is the core.

The filtering work is carried out by Gemini Pro while Python code calls Gemini API in Google Colab, and especially various models can be selected, Gemini 2.5 Pro could be used, or Gemini 3 Pro Preview could be used.

What's important at this time is not processing the 5,733 document selection work found by Custom API at once, but Gemini Pro processes while judging 30 at a time.

The number 30 is content recommended by Gemini 3 Pro, and my judgment while looking at actual results is that I think it was a very appropriate number.

The core of the filter is 3 main things: 1. Judged "Is it a future implementation policy?", 2. Confirmed "Is the date after the search reference date?", and 3. Verified "Is it related to semiconductors?”

Especially because this project was one I planned to continue using long-term, I set it up as basic to grasp the date on the day of search, not possible only on one specific date, and made the date of the day of search as the judgment standard. In other words, I set it up so that even if time passes, it can filter dates by itself.

In this way, while processing 30 at a time, while consistently keeping the filtering rules I made, Gemini Pro selected policies with future implementation possibility.

The cost was about $10 for 959 searches, about $40 for AI verification of 5,733 documents, for a total of $50, but in fact it's the price including one duplication while testing while modifying Economic in the middle, so 7 total searches and verifications were implemented, not 6.

Although government policy announcements are fluid each time it's executed, I think it will normally be in the $40~$50 range.

Especially because Google Cloud Platform provided $300 free credits for 3 months to new users, I could proceed with dozens of trial and error costs entirely for free.

### Control: Python

As mentioned above, Trinity was worth completing even while postponing the originally targeted period and schedule.

The core is exactly Python.

As written in the introduction, I am an overseas futures trader and know almost nothing about Python. I studied Python slightly for developing overseas futures automatic trading programs, but it was several years ago so I don't remember anything, and I've never actually written Python code or even directly typed Hello World.

So executing prompts with Python code in Google Colab was too burdensome, but I completed the code for various reasons including the necessity of Custom API and Python's cross-verification function.

One fortunate thing is that I already had the experience of successfully requesting Claude to create the EXceedZero homepage with 100% natural language as Python code, and because of the various files of more than 20GB built into Google Colab, separate additional installation was already not needed.

For reference, the cost of Google Colab was free, and in just one day I executed 959 searches and AI verification of 5,733 documents but didn't hit usage limits, so I didn't even know if there was a paid version. It turned out that it was possible because AI composed Python code efficiently.

As a result, that process was not smooth, repeating tests and modifications dozens of times, but in that process, very many functions were additionally implemented as Python code.

Representatively, there were functions to restart if problems occurred in the middle, auto-save, and for Python to also verify AI's judgment content.

In the middle, because Python functions were too good, I worried whether to remove Gemini API entirely, but there were many reasons I couldn't do that.

There are two representative ones: because the process of implementing the tremendous domain knowledge and complex judgments that Gemini Pro already has with Python would be extremely difficult and the capacity would also become extremely large, I realized that Gemini API is essential in terms of efficiency and performance, so I did not exclude it.

Especially later, rather than leaving the natural language prompts alone and only modifying Python code was effective for stably implementing various functions, so conversely there were also cases of modifying natural language prompts to fit Python code.

Especially because it was Python, not only Gemini API but also use together with Custom API was possible, Python cross-verification etc. was possible, and additionally the enormous amount of all processes and results could be recorded and confirmed.

As a result, 128,090 lines of logs were generated, and all processes and policy information with future implementation possibility were all recorded at the very end.

Especially because I intentionally recorded URL and snippet together, if you click each URL, you can check the original document and content and all can be manually verified directly whether there are any wrong parts.

Of course, it's impossible to check all 128,090 lines of records verifying 5,733 documents, but there's no need to do so either, and it was sufficient to check only the records of a few dozen policy information items selected in the Master content finally generated after execution.

---

### Week 28 Preview: The Secret of How a Non-Developer Completed Python Code

In Week 27, I developed Python code and Gemini Pro exclusive prompts while experiencing dozens of trial and error, and as a result, 959 searches extracted and analyzed 5,733 U.S. government agency documents, recorded as 128,090 lines of logs, in about 6 hours, at a cost of about $50. (Based on December 24, '25)

I think The Trinity, planning with Claude, executing with Gemini API, and controlling with Python, will become a new work processing method in the AI era.

Especially, even an overseas futures trader and non-developer like me implementing desired content as Python code through AI and executing at a low price is a revolution that was impossible before, and I think now what's important for non-developers is not coding skills but only expertise and ability.

In Week 28, I will reveal the characteristics of the Python code I made. I will cover in detail how a non-developer completed Python code, what functions were included, and how it operates.

There are 11 core functions. Date extraction, error handling, API calls, data verification, logging, retry mechanism, number extraction, percent calculation, keyword identification, cross-verification, Resume function. I will share why each function was needed, how it was implemented, and what problems it solved.

See you in Week 28.

---

# Week 28: The Secret to How a Non-Developer Completed Python Code

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### 3 Safeguards Among 11 Functions

In Week 27, we introduced The Trinity. It was a system that planned with Claude, executed with Gemini API, and controlled with Python. The result was successful. It was 959 searches, 5,733 document verifications, and 128,090 lines of log generation.

The Python code includes 11 core functions. There are date extraction, error handling, API calls, data verification, logging, retry mechanism, number extraction, percentage calculation, keyword identification, cross-validation, Resume function, and others.

However, Week 28 only briefly covers the 3 most important safeguards among these.

What were the 3 safeguards? And what was the secret to how a non-developer completed Python code?

### 3 Core Functions

First, in order to resume without losing work content even if the work is interrupted for any reason, we added an auto-save function and automatically saved every 10 times.

10 searches completed → saved, 20 searches completed → saved, 30 searches completed → saved. We recorded the interruption point. We saved where we completed up to and where we should start from next.

And we added a Resume function so that when interrupted, it restarted from the saved point. If interrupted after completing up to 500, it resumed from 501. It did not restart from the beginning.

Especially, the AI named this the Phoenix spirit when implementing it in Python code, and like a phoenix, it really recovered even with errors, retried even with failures, and absolutely never gave up until 100% completion.

For reference, even if errors occur, if we continue trying, only API call costs are incurred, so we added safeguards, the first was retry count, and the second was total API call count. Each had a different purpose, worked together, and controlled costs.

The retry limit retried a maximum of 3 times per search. 1st failure → retry, 2nd failure → retry, 3rd failure → recorded error and proceeded to next. One failure did not block the whole.

And we added an API call limit for the analysis phase. The 959 searches proceed separately through Custom API, but when analyzing the collected 5,733 documents by dividing them into 30 pieces, we must call Gemini API.

For all 6 files, we called Gemini API up to a total of 300 times each, so 300 times reached → automatically stopped, and prevented cost bombs.

On the surface, it contradicts Phoenix, but in reality, it succeeded without problems in execution. Normal interruptions resumed with Resume, and abnormal repetitions were smartly stopped.

Stopped by token limit → continued with Resume, error repeated 3 times → recorded and proceeded to next, API reached 300 times → stopped and Resume later.

Finally, we added cross-validation between AI (Gemini API) and Python.

With a dual filtering system, we checked twice with 1st verification and 2nd verification, used different criteria for each, and verified cross-wise.

The 1st verification was done by Gemini. It judged in natural language, understood context, and evaluated comprehensively. It asked "Is this document a future policy?" and "Is it related to semiconductors?”

The 2nd verification was done by Python. It verified accurate keywords and filtered precisely. It confirmed semiconductor-related keywords, codes, etc., and checked non-semiconductor keywords.

We also considered efficiency. If 1st was "rejected," 2nd was skipped. Already excluded documents were not checked again, time was saved, and unnecessary verification was removed so that noise was mostly removed and accuracy increased.

Gemini's natural language understanding and Python's precise verification combined, AI's flexibility and code's accuracy met, and each one's strengths complemented weaknesses.

### The Reason a Non-Developer Was Possible

How could I, a non-developer who had never directly typed even "Hello World," complete such various Python code?

The secret was prompt experience.

In Week 1-26, we directly experienced problems. We experienced being interrupted by token limits, experienced lack of consistency, experienced work loss, and experienced inability to verify. We clearly knew what the problems were.

We also came to know what safeguards were needed. Token limit problem → auto-save needed, consistency problem → prompt fixation needed, interruption problem → Resume needed, verification problem → log recording needed. We also clearly knew the solutions.

Prompt knowledge was converted into Python design. What we learned while planning prompts for 6 months became Python code requirements.

We added the first safeguard and tested it. If it worked, we added the second safeguard and tested it, and if it worked, we added the third. By repeating like this, we completed the Python code.

Week 1-26 experience told us "what" to request. Because we experienced token limit problems, we could request "auto-save function is needed," and because we experienced consistency problems, we could request "prompt must be fixed." Problems were requirements.

As a result, prompt experience made Python code possible. Non-developers only needed to request AI for Python code for solutions to problems. Ultimately, Trinity, which minimizes hallucinations with dual verification, overcomes errors with automatic recovery, and transparently confirms progress, achieved high completeness.

---

### Week 29 Preview: Why Python Code Cannot Filter Everything

Week 29 covers the reason why perfect filtering is impossible. Initially, the goal was 100% purity, 0% impurities, and accurately selecting only future policies, but it was realistically impossible.

The reasons are various, but the representative reason was due to the characteristics of Federal Register documents. Multiple industries were announced simultaneously in a single document, semiconductors and pesticides came together, and semiconductors and pharmaceuticals came together.

When searching with Google Custom Search API, the entire original text came out, it could not be distinguished with filtering alone, and contamination was inevitable.

If we add blacklist words, precision increases, but the problem is that even future policies are excluded and omissions occur, and especially when collecting periodically, new industry combinations keep appearing, the blacklist expands infinitely, and we cannot predict and add blacklists that will be added in the future.

Ultimately, I realized it was an inherently impossible goal.

We changed the goal. Instead of perfect filtering, it was maximum collection + impurity marking. It was a strategy to find impurities, clearly mark them, and have humans manually review. Completeness had priority over purity, it was collaboration between AI and humans, and was a realistic approach.

Week 29 covers the reason why perfect filtering is impossible. We share Federal Register document characteristics, filtering adjustment dilemma, unpredictability, and goal change.

We will meet in Week 29.

---

# Week 29: Why Perfect Filtering is Impossible

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Attempted Perfect Filtering But

The initial goal was 100% purity. The goal was to accurately select only future implementation policies, make impurities 0%, completely exclude past policies or non-tariff policies, and we wanted to select only clean data.

We added a blacklist to the Python code. Initially it was 25, blocked non-semiconductor keywords, and excluded if words like "pesticide", "drug product", "textile" were included.

However, impurities continued to appear. Pesticide-related documents were mixed, pharmaceutical-related documents were mixed, and textile-related documents also appeared. We could not understand why they continued to appear.

We expanded the blacklist. We increased from 25 to 37, added non-tariff regulation keywords like "investment", "entity list", "export control", "fcc certification", and also added noise keywords like "index", "annual report", "year in trade".

Impurities decreased. However, they did not completely disappear, still a few were mixed, and we could not find a pattern.

So first we made the filter flexible by removing case sensitivity, made it recognize asterisks, colons, spaces, and dashes, and improved it to handle various formats.

And we gave priority to AI judgment. If AI specified "rejected" or "excluded", we immediately reflected it, skipped Python verification, and completed the dual filtering system.

However, impurities still remained. Perfect filtering seemed impossible, and we needed to identify what the problem was.

### Understood Federal Register Document Characteristics

The cause of the problem was the Federal Register document structure, where multiple industries were announced simultaneously in a single document.

For example, let's assume a Section 301 tariff imposition document was published in June 2026. The title was "Section 301: China Trade Actions - Tariff Implementation".

The content was about imposing tariffs on various products. 50% tariff on semiconductor products, 25% tariff on pesticide products, 15% tariff on pharmaceutical products. All were the same document, the same policy, and were announced simultaneously.

When searching for "semiconductor" with Google Custom Search API, the snippet included not only semiconductors but also pesticides and pharmaceuticals.

"This document implements Section 301 tariffs on semiconductor products (50%), pesticide products (25%), and drug product formulations (15%) imported from China.”

The snippet had blacklist keywords like "pesticide" and "drug product", but this was not a pure pesticide document, not a pure pharmaceutical document either, and was a composite document including semiconductors.

A filtering dilemma occurred.

### Filtering Adjustment Dilemma

What happens if we filter "pesticide" with the blacklist? I will show you by reconstructing the content I attempted as an example.

Scenario 1: If we add "pesticide" to the blacklist, pure pesticide documents were excluded. There was a document titled "Pesticide Registration Updates", the content was about pesticide registration procedures, and was unrelated to semiconductors. This should be excluded, the blacklist worked correctly. Precision increased.

However, there was a problem. Semiconductor + pesticide composite documents were also excluded. Like the Section 301 document seen above, semiconductor tariffs were included, but because "pesticide" appeared in the snippet, it was caught by the blacklist. Even though it was a future implementation policy, it was excluded. Recall decreased.

Scenario 2: If we add "drug product" to the blacklist, pure pharmaceutical documents were excluded. There was a document titled "FDA Drug Approval Guidelines", the content was about pharmaceutical approval procedures, and was unrelated to semiconductors. This should be excluded, the blacklist worked correctly. Precision increased.

However, there was a problem. Semiconductor + pharmaceutical composite documents were also excluded. In the IEEPA investigation document, semiconductors and pharmaceuticals were mentioned together, but because "drug product" appeared in the snippet, it was caught by the blacklist. Even though it was a future implementation policy, it was excluded. Recall decreased.

It was a Trade-off. To increase precision, we had to add blacklists. By blocking non-semiconductor keywords like "pesticide", "drug product", "textile", "chemical", pure pesticide, pure pharmaceutical, pure textile documents were excluded, impurities decreased, and precision increased.

However, recall decreased. Semiconductor + pesticide, semiconductor + pharmaceutical, semiconductor + textile composite documents were also excluded together, future implementation policies were omitted, and completeness was broken, making it difficult to find a balance point.

When precision was raised, recall fell, when recall was raised, precision fell, and we could not satisfy both simultaneously.

It was a realistic limitation. The Federal Register document structure was the cause, multiple industries were announced simultaneously in a single document, Custom API brought the entire document, could not extract only parts, and could not be solved with filtering alone.

### Unpredictability

There was a bigger problem. It was unpredictability.

Let's assume we collect policies periodically. Execute once a month, find new policies, and track changes. It is a practical use case.

In the first month, semiconductor + pesticide composite documents appeared. We added "pesticide" to the blacklist and decided to filter from the next month.

In the second month, semiconductor + chemical composite documents appeared. We added "chemical" to the blacklist and decided to filter from the next month.

In the third month, semiconductor + electronic equipment composite documents appeared. We added "electronic equipment" to the blacklist and decided to filter from the next month.

In the fourth month, semiconductor + automotive parts composite documents appeared. We added "automotive parts" to the blacklist and decided to filter from the next month.

In the fifth month, semiconductor + steel composite documents appeared. We added "steel products" to the blacklist and decided to filter from the next month.

Every month new industry combinations appeared, the blacklist continued to expand, and there was no end. The blacklist increased infinitely, 25 → 37 → 50 → 70 → 100, increasing endlessly, causing problems in maintenance.

Every month we had to update the blacklist, find new keywords, test, and verify. It took too much time, was inefficient, and was not sustainable.

And we could not predict. We did not know which industries would be published together next month, could not know which keywords would appear, and could not prepare in advance. We could not predict the future.

Perfect filtering was impossible. Because of the Federal Register document structure, simultaneous publication was the essential cause, new combinations appeared infinitely, and blacklist expansion could not solve it.

### Limitations of Ensuring Consistency

There was another problem. When repeating the same search, the results were different.

In the first execution, 30 cases, in the second execution a few days later, 1 case, and when executed based on the same date 1 hour later, 11 cases came out. It was the same search term, but it was different every time.

The first cause was Google API. Google API is distributed across data centers worldwide. Each request can be connected to a different data center, and because the search index of each data center is slightly different, the results could differ. This could not be controlled.

The second cause was the limitations of AI settings. We adjusted AI settings with Python code. We made it so that the same input produces the same result, but it was useless. When Google API gives different search results each time, the original data that AI analyzes itself changed. Occasionally, even with the same input, subtle differences could occur in the AI computation process.

The third cause was the model version. We tested both Gemini 2.5 Pro and Gemini 3 Pro Preview. Even when analyzing the same document, the results were different. Gemini 2.5 Pro focused on keywords. When it saw blacklist words like "pesticide", it mechanically excluded them. Gemini 3 Pro Preview tried to understand the context. When "pesticide" appeared in the context of "semiconductor manufacturing environment control", it ignored the blacklist and included it. Which model was correct? Both were not wrong. It was just that the judgment method was different, and the results were also different.

The fourth cause was the out-of-sync issue between search snippets and body data. While not a consistency issue, there were occasional issues that arose when checking Google snippets. For example, in search results, we found that the URL was an old document from 2018, but the summary (snippet) was the most recent policy from 2024. This was because Google's search engine determined that the "latest news sidebar" or "announcement menu," which were common across the site, were more relevant to the search query than the page body, and thus scraped these as the summary.

As a result, a "data inconsistency" occurred: the address was from 2018, but the content was from 2024. This became a crucial reason why the information collected by the system could not be blindly trusted. This suggests that no matter how plausible the AI-collected text may be, a "final cross-validation" process is essential, which involves accessing the original URL and verifying that the content exists in the body.

Perfect consistency was impossible. We could not control Google API, AI settings were insufficient, and each model was different. We did our best, but the limitations were clear.

### Changed the Goal

Perfect filtering was impossible, but instead we changed the goal. Instead of perfect removal, it was distinction.

We gave up 100% purity. Completely removing impurities was impossible, the Federal Register document structure was the cause, could not stop simultaneous publication, and filtering adjustment could not solve it.

Instead, we set a new goal, which was maximum collection + impurity marking. Instead of perfectly removing, we clearly distinguished, instead of hiding impurities, we revealed them, and instead of 100% purity, we distinguished in a 3-step order.

The first step was finding impurities.

We identified with 37 blacklists. We found non-semiconductor or non-tariff keywords like "pesticide", "drug product", "textile", "chemical", "investment", "entity list", marked if these words were in the snippet, and classified as potential impurities.

However, we did not exclude them. They could be semiconductor + pesticide composite documents, could include future policies, and had to maintain recall. We only found them and left them.

The second step was marking impurities.

We added "⚠️ Blacklist Warning". We specified that the document contained the "pesticide" keyword, informed of the possibility of Federal Register adjacent announcement contamination, and recommended manual verification.

We clearly distinguished. We visually distinguished pure semiconductor documents and potential impurity documents, made it so users could recognize at a glance, and secured transparency.

We did not lie saying "This document is 100% semiconductor", honestly revealed "There is a possibility of impurity", and provided information so users could judge.

The third step was manual review by people.

AI did not handle everything. If perfect filtering is impossible, people had to make the final judgment, AI was only a tool, and the decision was up to people.

We only checked those marked with "⚠️ Blacklist Warning", read the Federal Register original document, and judged whether it was actually a semiconductor policy. If it was a pure pesticide document, we excluded it, and if it was a semiconductor + pesticide composite document, we included it.

It was efficient. Instead of checking everything, we only checked those marked with warnings, AI had already accurately selected most, and only a few needed to be reviewed by people. Time was saved.

AI and people collaborated. AI collected as much as possible and distinguished, people performed final verification and decided. Roles were divided, it was efficient, and was practical.

### Balance of Completeness and Purity

As a result, we found a balance of completeness and purity.

The priority was clear. Completeness > purity, preventing omission > removing impurities, and recall > precision. It was a realistic choice considering the Federal Register structure, was a sustainable strategy, and was a practical approach.

Ultimately, we succeeded in selecting as many policy information with future implementation possibility as possible, future policy omission was minimized, and we achieved the goal with 959 searches, 5,733 document verifications, and 128,090 lines of log generation.

### Policy Information with Future Implementation Possibility

As a result, we selected 24 for Product, 47 for Strategy, 39 for Economic, 15 for HTS, 32 for Tariffrate, and 28 for Timeline policy information with future implementation possibility. Of course, impurities are included here.

The standard is December 24, 25, and Product, Strategy, Economic were re-executed with the same content on December 26, 25 for system stability verification.

It was a result achieved through collaboration between AI and people. AI collected as much as possible, clearly distinguished, and transparently disclosed. People performed final verification, judged, and decided. Each utilized their strengths, complemented weaknesses, and worked together.

It was an extension of The Trinity. Claude designed, Gemini Pro executed, and Python verified. People were added here, were in charge of final judgment, and it was completed. It was The Trinity + Human.

---

### Week 30 Preview: Limitations and Possibilities of AI

In Week 30, we cover the limitations and possibilities of AI.

AI is not omnipotent. While perfectly predicting the future, complete filtering was impossible, and we could not solve the filtering problem caused by Federal Register's composite industry announcement structure.

However, there were also possibilities. We could achieve 959 searches, 5,733 document verifications, 128,090 lines of log generation, and could maintain consistency. We did what people cannot do.

However, the final judgment must be made by people, and expert verification was necessary. AI assists, and people decide.

The collaboration between AI and people was the answer. It was The Trinity + Human, utilized each one's strengths, and complemented weaknesses. It was the next-generation work standard and the direction of the future.

We will meet in Week 30.

---

# Week 30: Go Further with AI

⚠️ This column is a **sharing of the prompt creation process for free educational purposes**, and is not any investment, legal, or financial **advice**. AI execution results may contain errors and independent verification is essential, and **all responsibility for use is entirely attributed to the user**. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[**View all mandatory confirmation items below the 30-week timeline before use**](https://www.notion.so/30-Week-Timeline-2b584ddcec3c8034b345c15454d7f00a?pvs=21)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

### Beyond Semiconductors

The 30-week journey has been completed.

We started with semiconductors, but I think The Trinity we completed can be applied to other industries.

Typically, I think it can be expanded to 8 industries, and each industry has government agencies, regulations, and public materials.

This is because government policy/regulation tracking and selection are the same, only the industry changes.

### 4 of 8 Industries: Supply Chain/Logistics, Accounting/Audit, Import/Export/Trade, Energy/Carbon

First, I think it can be applied to the supply chain/logistics industry.

The prompt design is "**Select only items scheduled to take effect within 3 months** from the trade regulations/sanctions lists announced by USTR/CBP/OFAC."

The collection target is clear. This includes USTR tariff rate changes, CBP customs regulation updates, OFAC sanctions lists, and trade agreement changes. However, **not all changes, but only those scheduled for implementation within 3 months based on the effective date are filtered**. This is because supply chain response requires at least 2-3 months.

I think we can use the same prompt structure, by replacing Product with Route, Strategy with Regulation, HTS with Supplier, **the date filtering logic is the same**, and I think Google Infrastructure can be used as is.

I think we can record the **judgment process based on the 3-month effective date criterion** as a log and verify it with original document links.

Second is accounting and auditing.

The prompt design is "**Select based on future Effective Date** from accounting standards/tax laws/audit regulations announced by FASB/IASB/IRS/SEC."

The collection target is clear. This includes FASB's GAAP changes, IASB's IFRS changes, IRS's Tax Code changes, and SEC's disclosure regulations. However, **not those already in effect, but only those with an Effective Date in the future are filtered**. This is because accounting must prepare financial statements before the implementation date.

Third is import/export and trade.

This is the current project. The entire 30-week column dealt with this, and semiconductors were the first case.

Fourth is energy and carbon.

The prompt design is "**Select only those scheduled for implementation in 2026-2027** from carbon regulations/energy policies announced by IEA/EPA/EU Commission/national environmental ministries."

The collection target is clear. This includes EU CBAM Carbon Border Adjustment Mechanism, EU ETS emissions trading prices, US IRA tax credits, and China's national carbon market. However, **not those currently being implemented, but only those scheduled for future enforcement like the full implementation of CBAM in 2026 are filtered**. This is because carbon regulation response requires 1-2 years.

### 4 of 8 Industries: Consulting, Healthcare/Pharmaceuticals, Finance, Legal

Fifth is consulting.

The prompt design is "**Selection of future enforcement scheduled industry-specific regulations** announced by government statistical offices/regulatory agencies + collection of latest statistical data."

The collection target is clear. **Filter only future implementation scheduled Proposed Rules from FDA/EPA/FCC/FTC**, and collect all latest statistics from Census Bureau/BLS/BEA. This is because "future preparation" advice is key for clients.

I think it can be applied to the consulting industry. By filtering **only future enforcement for regulations, and recency for statistics**, industry trends and regulatory response strategies can be provided to clients.

Sixth is healthcare and pharmaceuticals.

The prompt design is "**Selection of approval-imminent new drugs/medical devices** announced by FDA/EMA + extraction of future enforcement scheduled regulations."

The collection target is clear. Filter only **new drugs waiting for FDA approval after Phase 3 completion** and medical devices under EMA review, and **extract only regulations with future Effective Dates**. This is because approval timing and regulatory response are life or death for pharmaceuticals.

With **Phase-based drug filtering + regulatory effective date extraction**, FDA approval strategies, market entry timing, and regulatory responses can be prepared in advance.

Seventh is finance.

The prompt design is "**Select only future Phase-in scheduled financial regulations** announced by SEC/Fed/national financial supervisory services."

The collection target is clear. This includes SEC disclosure regulation changes, Basel III/IV capital regulations, and MiFID II European financial regulations. However, **not those currently being implemented, but only future enforcement stages in the Phase-in schedule are filtered**. This is because financial regulations are typically implemented in stages.

Eighth is legal.

The prompt design is "**Selection of future enforcement scheduled legal changes** announced by courts/legislatures + automatic connection of related precedents."

The collection target is clear. Filter only **Proposed Bills from Congress with high passage probability** and important cases pending in the Supreme Court, and automatically connect already decided related precedents. This is because the key to law is combining future law amendments (Proposed) with past precedents.

### Commonalities of 8 Industries

We examined 8 industries. They were supply chain/logistics, accounting/audit, import/export/trade, energy/carbon, consulting, healthcare/pharmaceuticals, finance, and legal, and there were commonalities.

First, all are based on government public materials. They are legally safe and accessible.

Second, I think all can implement transparent filtering. I think all judgment processes can be recorded as logs, accuracy can be increased through AI and Python dual verification, and the process can be confirmed.

Third, all can provide verifiable URLs. Original documents can be provided with clickable links, verified with official documents from government agencies like Federal Register and FDA, and both URLs and snippets (content) can be directly confirmed.

Fourth, I think Google Infrastructure can be used as is. Google Colab, Google Custom Search API, and Gemini API can work in all industries, and I think it can be maintained at the $50 level.

Fifth, I think The Trinity can work as is. The structure where Claude plans, Gemini Pro executes, and Python controls is independent of industry, and I think the collaboration method is the same.

I think we started with semiconductors but will not end with semiconductors. I think expansion to 8 industries is possible, and I think all are possible in the same way. I think the 30-week column proved one case, I think the remaining 7 can be replicated, and I think there are infinite possibilities.

### Refuting the AI Bubble Theory

There is an AI bubble theory. Claims such as "AI is overvalued," "It's actually useless," "Can't trust it because of hallucinations," "Only costs a lot," "It's just marketing.”

The 30-week project refutes this. As a result of integrated analysis of 6 executions, a total of 125,332 lines of logs, 959 searches, and 5,733 documents were processed at a cost of approximately $50.

What if an expert team performed the same work? To design 959 searches, read 5,733 Federal Register documents, and judge future implementation possibility, **20-25 senior experts working full-time for 1 week are required**. A cost of $60,000-75,000 occurs for just one execution.

But the real problem is not cost. It lies in the "realm of impossibility.”

**First Barrier: The Impossibility of Expert Recruitment**

Experts who can understand the complex sentence structure of the Federal Register, grasp the context of semiconductor tariffs (Section 301, IEEPA), and select only future implementation items are extremely rare worldwide.

They are already in executive positions or are partner-level at large law firms. If simple junior analysts are deployed, they cannot judge "what is a future policy," resulting in data contamination. **Gathering 20-25 elite experts within one week is realistically close to impossible.**

**Second Barrier: The Impossibility of Time**

It takes at least 1 month just to form a team, onboard, and train on search terms. But policies are announced 'today'. AI eliminates all this preparation process and delivers results in approximately 6 hours total. In trade where information validity period is life, a 'slow expert' is the same as 'non-existent'.

**Third Barrier: The Impossibility of Quality Consistency**

People's judgment gradually becomes clouded when tired. Even expert teams find it difficult to consistently document thousands of judgment bases. Gemini API becomes **a brain that doesn't get tired**, maintaining unwavering standards from the 1st to the 959th search. The 125,332 lines of logs allow anyone to verify "why AI judged that way."

**Fourth Barrier: The Impossibility of Annual Continuation**

Since policies change weekly, weekly updates are necessary. **To repeat 52 times annually with 20-25 people requires full-time employment**, with annual personnel costs alone of approximately $3M-$3.75M. The AI system provides the same results for $2,600 annually. **ROI is approximately 1,200-1,500 times.**

### AI's Real Value: "Asset-ization of Tacit Knowledge" Beyond ROI

This is not simple cost reduction. AI transforms 'the brains of 25 experts' and 'one week of time' that couldn't be obtained even with hundreds of millions of dollars into $50, making large-scale regulatory tracking that couldn't even be attempted before into a reality that can be executed anytime with the push of a button.

For those who know how to use it, AI is not a bubble. It is a revolution for those who use the tool properly, an opportunity for those who can plan, and a trustworthy partner for those who verify.

As proof, I have been paying for the Max Plan subscription at Claude every month from May 25 until now in January 26.

Of course, AI is not omnipotent.

As we saw in Week 29, perfect filtering was impossible. The Federal Register document structure was the cause, contamination was inevitable due to simultaneous announcements, and Trade-off could not be resolved. When blacklists were added, precision increased but recall decreased, it was unpredictable, and maintenance was impossible during periodic collection.

AI's limitations were clear. Unexpected cases occurred, there is error possibility, and user confirmation is essential.

Documents marked with "⚠️ Blacklist Warning" had to be checked, URLs had to be clicked to read the original text, and whether it was actually a semiconductor policy had to be judged. If it was a semiconductor + non-semiconductor composite document, including it was the user's responsibility.

Because I knew the importance of verification so well, I spent more than half the time thinking about and testing specific verification methods rather than planning. How can errors be reduced? How can users check directly?

These concerns became a system that can be verified with URLs and snippets, and 125,332 lines of logs were recorded, but it is not perfect. I did my best for 7 months, but I couldn't predict all cases, there is still room for improvement, and I continue to research.

Still, I believe we can find more accurate filtering methods than now, create more efficient verification procedures, and build better systems. It's in progress, not completion, it's the beginning, not the end, and it will continue to develop.

### The Planner's Capability and Verification Power

Thus, AI is not omnipotent, and rather the planner's capability was key.

First, minimum expertise is essential. If I hadn't studied knowledge about tariffs, I couldn't have designed the prompt, and I think expertise will become even more important in the future.

Second, problem definition was important. What to find? By what criteria to select? How to verify? The Week 1-26 prompt planning process was this, it took 6 months, AI executed it, but people set the direction.

Third, it was the ability to turn worries into code. Problems experienced in Week 1-26 were converted into Python safeguards, token limit worries became automatic saving, interruption worries became Resume, and verification worries became log recording.

Ultimately, planner capability determined the results. People with domain knowledge created better prompts, people with clear problem definition obtained more accurate results, and people who could design verification frameworks built trustworthy systems.

### AI Capability Enhancement Program

While conducting the 30-week column, many people contacted me. The requests were "I want to purchase the prompt," "I want to receive policy results monthly," "Please customize it for our industry." They were grateful requests, but I declined all of them.

There is know-how accumulated over 7 months. There are 34 Python code functions, Gemini prompt writing tips, blacklist addition methods, dual filtering system (AI + Python), verification framework, cross-verification system, automatic save & resume function, Google original snippet and URL record design, etc.

I thought it would be too wasteful to provide this simply as "deliverables," and I decided to share recipes, not cooking. I'm trying to support various companies with the capability to create on their own, not just one-time deliverables.

However, there is a part I need to make clear.

⚠️ **The purpose of this education is to strengthen global companies' AI usage capabilities. It is absolutely not selling results or prompts that selected future implementable policies among US-China semiconductor tariff policies, and is provided as an educational example for learning Custom API utilization methods, filtering design, prompt composition methodology, etc. All responsibility for results, decisions, and consequences of using the provided methodology lies entirely with the user, and we do not assume any legal responsibility for this.**

Only for those who agree, we are conducting a demand survey in the US, Korea, Canada, Netherlands, Singapore, and Taiwan before the official global launch. Participants in the demand survey will be given priority notice upon official launch and early bird special discount prices.

Please send to [**exceedzero@exceedzero.com**](mailto:exceedzero@exceedzero.com) including company name, country, industry field, desired purchase price (USD), etc.

### Thanks to Anthropic and Google

I thank Anthropic, which developed Claude.

For 6 months, I was able to plan prompts for collecting US-China semiconductor tariff policies, create a homepage, and obtain knowledge related to tariff policies. Even now as I write this, I continue to use the Max Plan.

I thank Google, which developed Gemini Pro.

Execution was possible for $50, 959 searches were possible, and consistency could be maintained. Google Colab provided the execution environment with Python code, Google Custom Search API brought the original data, and judgment was made with Gemini API.

With 2 AIs, I could have goals I couldn't even imagine before. I could proceed at a speed of a different dimension, achieve quality of a different dimension, and now I don't proceed with any work without AI.

---

### Go Further with AI

From Week 1 to Week 30, it was a 7-month journey. We created The Trinity, but it is still not perfect.

AI has limitations, I have limitations, and there is much room for improvement. But I did my best to overcome these limitations, thought about verification methods, and disclosed them transparently.

I wrote this column with the thought that this journey would reach many companies positively and be helpful.

As one of the people who used AI the most in the world over the past 7 months, I wanted to honestly share how AI can be utilized, what limitations exist, and how they can be overcome.

Human planning and verification will continue to be necessary. Even if AI develops, even if tools improve, ultimately people must make judgments, people must take responsibility, and people must set directions. This is the core message of the 30-week column.

AI is not omnipotent. But it is a tool that helps you go further. The planner's capability and verification power are necessary, domain knowledge must exist, and problems must be able to be defined.

But if you have only that, AI will amplify your expertise and take you much further.

**Go Further with AI**

Thank you for reading so far.

---

## 🚀 Get Started

### Execution Logs
See The Trinity in action:
- [Execution Logs (January 1, 2026)](https://exceedzero.notion.site/Prompt-Execution-Results-As-of-January-1-2026-2dd84ddcec3c80b88e26c62f84b32d6c)
- [Execution Logs (January 11, 2026)](https://exceedzero.notion.site/Prompt-Execution-Results-As-of-January-11-2026-2e684ddcec3c8076aa85d6dc5fe36ea0)

### Repository
- GitHub: [Repository Link](https://github.com/exceedzero/exceedzero.github.io)

### Contact
- Email: exceedzero@exceedzero.com
- Website: https://exceedzero.com

---

## ⚠️ Disclaimer

⚠️ This column is a sharing of the prompt creation process for free educational purposes, and is not any investment, legal, or financial advice. AI execution results may contain errors and independent verification is essential, and all responsibility for use is entirely attributed to the user. It cannot be used directly for business decision-making. [[](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)[View all mandatory confirmation items below the 30-week timeline before use](/2b584ddcec3c8034b345c15454d7f00a?pvs=25)[]](https://www.notion.so/30-29f84ddcec3c80a1a87eda9883d81453?pvs=21)

---

**Go Further with AI** 🚀
```

