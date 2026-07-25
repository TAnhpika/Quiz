/** Ngân hàng câu hỏi: SWT FA25 (60 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
            "text": "Which one is not comes under international standard: (choose one answer)",
            "options": [
                "IEC",
                "IEEE",
                "ISO",
                "All of the others"
            ],
            "answer": 1,
            "explanation": "IEEE",
            "keywords": "Q: Which one is not comes under international standard: | A: IEEE"
        },
        {
            "id": 2,
            "text": "Faults found by users are due to:",
            "options": [
                "Insufficient time for testing",
                "Poor software and poor testing",
                "Bad luck"
            ],
            "answer": 1,
            "explanation": "Poor software and poor testing",
            "keywords": "Q: Faults found by users are due to: | A: Poor software and poor testing"
        },
        {
            "id": 3,
            "text": "A piece of software has been given what tests in the following will you perform? 1) Test the area's most critical to business processes 2) Test the areas where faults will be maximum 3) Test the easiest functionalities",
            "options": [
                "1&2 are true and 3 is false",
                "1,2&3 are true.",
                "1 is true, 2&3 are false.",
                "1&2 are false, 3 is true"
            ],
            "answer": 0,
            "explanation": "1&2 are true and 3 is false",
            "keywords": "Q: A piece of software has been given what | A: 1&2 are true and 3 is"
        },
        {
            "id": 4,
            "text": "EULA stands for",
            "options": [
                "End Usability License Agreement",
                "End User License Agreement",
                "End User License Arrangement",
                "End User License Attachment"
            ],
            "answer": 1,
            "explanation": "End User License Agreement",
            "keywords": "Q: EULA stands for | A: End User License Agreement"
        },
        {
            "id": 5,
            "text": "CAST stands for",
            "options": [
                "Computer Aided Software Testing",
                "Computer Aided Software Tools",
                "Computer Analysis Software Techniques",
                "None of the others"
            ],
            "answer": 0,
            "explanation": "Computer Aided Software Testing",
            "keywords": "Q: CAST stands for | A: Computer Aided Software Testing"
        },
        {
            "id": 6,
            "text": "Defect Management process does not include",
            "options": [
                "Defect prevention",
                "Deliverable base-lining",
                "Management reporting",
                "None of the others"
            ],
            "answer": 1,
            "explanation": "Deliverable base-lining",
            "keywords": "Q: Defect Management process does not include | A: Deliverable base-lining"
        },
        {
            "id": 7,
            "text": "Which of the following will be the best definition for Testing:",
            "options": [
                "The goal / purpose of testing is to demonstrate that the program works.",
                "The purpose of testing is to demonstrate that the program is defect free.",
                "The purpose of testing is to demonstrate that the program does what it is supposed to do",
                "Testing is executing Software for the purpose of finding defects."
            ],
            "answer": 3,
            "explanation": "Testing is executing Software for the purpose of finding defects.",
            "keywords": "Q: Which of the following will be the best | A: Testing is executing Software for the"
        },
        {
            "id": 8,
            "text": "Which of the following is the standard for the Software product quality",
            "options": [
                "ISO 9126",
                "ISO 829",
                "ISO 1012",
                "ISO 1028"
            ],
            "answer": 0,
            "explanation": "ISO 9126",
            "keywords": "Q: Which of the following is the standard for | A: ISO 9126"
        },
        {
            "id": 9,
            "text": "The cost of fixing a fault:",
            "options": [
                "Is not important",
                "Increases as we move the product towards live use",
                "Decreases as we move the product towards live use",
                "Is more expensive if found in requirements than functional design",
                "Can never be determined"
            ],
            "answer": 1,
            "explanation": "Increases as we move the product towards live use",
            "keywords": "Q: The cost of fixing a fault: | A: Increases as we move the product"
        },
        {
            "id": 10,
            "text": "Which of the following statements are true?",
            "options": [
                "Faults in program specifications are the most expensive to fix",
                "Faults in code are the most expensive to fix.",
                "Faults in requirements are the most expensive to fix",
                "Faults in designs are the most expensive to fix."
            ],
            "answer": 2,
            "explanation": "Faults in requirements are the most expensive to fix",
            "keywords": "Q: Which of the following statements are true? | A: Faults in requirements are the most"
        },
        {
            "id": 11,
            "text": "Cost of the reviews will not include.",
            "options": [
                "Review process itself",
                "Metrics analysis",
                "Tool support.",
                "Process improvement."
            ],
            "answer": 3,
            "explanation": "Process improvement.",
            "keywords": "Q: Cost of the reviews will not include. | A: Process improvement."
        },
        {
            "id": 12,
            "text": "Reviews, static analysis and dynamic testing have the same objective",
            "options": [
                "(1) Identifying defects.",
                "(ii) Fixing defects.",
                "(i) and (i)",
                "None of (i) nor (ii)"
            ],
            "answer": 0,
            "explanation": "(1) Identifying defects.",
            "keywords": "Q: Reviews, static analysis and dynamic testing have the | A: (1) Identifying defects."
        },
        {
            "id": 13,
            "text": "During the software development process, at what point can the test process start?",
            "options": [
                "When the code is complete.",
                "When the design is complete.",
                "When the software requirements have been approved.",
                "When the first code module is ready for unit testing"
            ],
            "answer": 2,
            "explanation": "When the software requirements have been approved.",
            "keywords": "Q: During the software development process, at what point | A: When the software requirements have been"
        },
        {
            "id": 14,
            "text": "Drivers are also known as: i. Spade ii. Test harness iii. Scaffolding",
            "options": [
                "i, ii are true and ill is false",
                "i, ill are true and ii is false",
                "i, ill are true and i is false",
                "All of i, il and ill are true"
            ],
            "answer": 2,
            "explanation": "i, ill are true and i is false",
            "keywords": "Q: Drivers are also known as: i. Spade ii. | A: i, ill are true and i"
        },
        {
            "id": 15,
            "text": "Who would USUALLY perform debugging activities?",
            "options": [
                "Developers.",
                "Analysts.",
                "Testers.",
                "Incident Managers."
            ],
            "answer": 0,
            "explanation": "Developers.",
            "keywords": "Q: Who would USUALLY perform debugging activities? | A: Developers."
        },
        {
            "id": 16,
            "text": "Software testing accounts to what percent of software development costs?",
            "options": [
                "10-20",
                "40-50",
                "70-80",
                "5-10"
            ],
            "answer": 1,
            "explanation": "40-50",
            "keywords": "Q: Software testing accounts to what percent of software | A: 40-50"
        },
        {
            "id": 17,
            "text": "Configuration and compatibility testing are typically good choices for outsourcing",
            "options": [
                "True",
                "False"
            ],
            "answer": 0,
            "explanation": "True",
            "keywords": "Q: Configuration and compatibility testing are typically good choices | A: True"
        },
        {
            "id": 18,
            "text": "Which of the following has highest level of independence in which test cases are:",
            "options": [
                "Designed by persons who write the software under test",
                "Designed by a person from a different section",
                "Designed by a person from a different organization",
                "Designed by another person"
            ],
            "answer": 2,
            "explanation": "Designed by a person from a different organization",
            "keywords": "Q: Which of the following has highest level of | A: Designed by a person from a"
        },
        {
            "id": 19,
            "text": "Majority of system errors occur in the ___ phase",
            "options": [
                "Requirements Phase.",
                "Analysis and Design Phase",
                "Development Phase",
                "Testing Phase"
            ],
            "answer": 0,
            "explanation": "Requirements Phase.",
            "keywords": "Q: Majority of system errors occur in the ___ | A: Requirements Phase."
        },
        {
            "id": 20,
            "text": "Benefits of Independent Testing",
            "options": [
                "Independent testers are much more qualified than Developers",
                "Independent testers see other and different defects and are unbiased.",
                "Independent Testers cannot identify defects.",
                "Independent Testers can test better than developers"
            ],
            "answer": 1,
            "explanation": "Independent testers see other and different defects and are unbiased.",
            "keywords": "Q: Benefits of Independent Testing | A: Independent testers see other and different"
        },
        {
            "id": 21,
            "text": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
            "options": [
                "Moderator",
                "Scribe",
                "Reviewers",
                "Author"
            ],
            "answer": 1,
            "explanation": "Scribe",
            "keywords": "Q: Who is responsible for document all the issues, | A: Scribe"
        },
        {
            "id": 22,
            "text": "The person who leads the review of the documents), planning the review, running the meeting and follow-up after the meeting",
            "options": [
                "Reviewer",
                "Author",
                "Moderator",
                "Auditor"
            ],
            "answer": 2,
            "explanation": "Moderator",
            "keywords": "Q: The person who leads the review of the | A: Moderator"
        },
        {
            "id": 23,
            "text": "The Kick Off phase of a formal review includes the following:",
            "options": [
                "Explaining the objective",
                "Fixing defects found typically done by author",
                "Follow up",
                "Individual Meeting preparations"
            ],
            "answer": 0,
            "explanation": "Explaining the objective",
            "keywords": "Q: The Kick Off phase of a formal review | A: Explaining the objective"
        },
        {
            "id": 24,
            "text": "Static analysis tools are typically used by",
            "options": [
                "Testers",
                "Developers",
                "Testers & Developers",
                "None of the others"
            ],
            "answer": 1,
            "explanation": "Developers",
            "keywords": "Q: Static analysis tools are typically used by | A: Developers"
        },
        {
            "id": 25,
            "text": "What can static analysis NOT find?",
            "options": [
                "The use of a variable before it has been defined",
                "Unreachable (\"dead\") code",
                "Memory leaks",
                "Array bound violations"
            ],
            "answer": 2,
            "explanation": "Memory leaks",
            "keywords": "Q: What can static analysis NOT find? | A: Memory leaks"
        },
        {
            "id": 26,
            "text": "In a review meeting a moderator is a person who",
            "options": [
                "Takes minutes of the meeting",
                "Mediates between people",
                "Takes telephone calls",
                "Writes the documents to be reviewed"
            ],
            "answer": 1,
            "explanation": "Mediates between people",
            "keywords": "Q: In a review meeting a moderator is a | A: Mediates between people"
        },
        {
            "id": 27,
            "text": "The Phases of formal review process is mentioned below arrange them the correct order. i)Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
            "options": [
                "i,il,iii,iv,v,vi",
                "vi,,i,ili, iv, v",
                "i,v,iv,i, iii, vi",
                "i,ii,iii,v, iv, vi"
            ],
            "answer": 2,
            "explanation": "i,v,iv,i, iii, vi",
            "keywords": "Q: The Phases of formal review process is mentioned | A: i,v,iv,i, iii, vi"
        },
        {
            "id": 28,
            "text": "People who don't participate in technical reviews",
            "options": [
                "Analysts",
                "Management",
                "Developers",
                "Testers"
            ],
            "answer": 1,
            "explanation": "Management",
            "keywords": "Q: People who don't participate in technical reviews | A: Management"
        },
        {
            "id": 29,
            "text": "Which of the following is not a static testing technique?",
            "options": [
                "Error guessing",
                "Walkthrough",
                "Data flow analysis",
                "Inspections"
            ],
            "answer": 0,
            "explanation": "Error guessing",
            "keywords": "Q: Which of the following is not a static | A: Error guessing"
        },
        {
            "id": 30,
            "text": "Which expression best matches the following characteristics or review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
            "options": [
                "s = 4, t = 3, u = 2 and 5, v = 1",
                "s = 4 and 5, t = 3, u = 2, v = 1",
                "s = 1 and 5, t = 3, u = 2, V= 4",
                "s = 5, t = 4, u = 3, V = 1 and 2",
                "s = 4 and 5, t= 1, u = 2, v = 3"
            ],
            "answer": 1,
            "explanation": "s = 4 and 5, t = 3, u = 2, v = 1",
            "keywords": "Q: Which expression best matches the following characteristics or | A: s = 4 and 5, t"
        },
        {
            "id": 31,
            "text": "Features of White Box Testing Technique: i. We use explicit knowledge of the internal workings of the item being tested to select the test data. ii. Uses specific knowledge of programming code to examine outputs and assumes that the tester knows the path of logic in a unit or a program. iii. Checking for the performance of the application iv. Also checks for functionality.",
            "options": [
                "i, ii are true and ill and iv are false",
                "iii is true and i,ii, iv are false",
                "ii,iii is true and i,iv is false",
                "iii and iv are true and iii are false"
            ],
            "answer": 0,
            "explanation": "i, ii are true and ill and iv are false",
            "keywords": "Q: Features of White Box Testing Technique: i. We | A: i, ii are true and ill"
        },
        {
            "id": 32,
            "text": "Complete statement and branch coverage means:",
            "options": [
                "That you have tested every statement in the program.",
                "That you have tested every statement and every branch in the program.",
                "That you have tested every IF statement in the program.",
                "That you have tested every combination of values of IF statements in the program"
            ],
            "answer": 1,
            "explanation": "That you have tested every statement and every branch in the program.",
            "keywords": "Q: Complete statement and branch coverage means: | A: That you have tested every statement"
        },
        {
            "id": 33,
            "text": "Which of the following techniques is NOT a White box technique?",
            "options": [
                "Statement Testing and coverage",
                "Decision Testing and coverage",
                "Condition Coverage",
                "Boundary value analysis"
            ],
            "answer": 3,
            "explanation": "Boundary value analysis",
            "keywords": "Q: Which of the following techniques is NOT a | A: Boundary value analysis"
        },
        {
            "id": 34,
            "text": "A program with high cyclometic complexity is almost likely to be:",
            "options": [
                "Large",
                "Small",
                "Difficult to write",
                "Difficult to test"
            ],
            "answer": 3,
            "explanation": "Difficult to test",
            "keywords": "Q: A program with high cyclometic complexity is almost | A: Difficult to test"
        },
        {
            "id": 35,
            "text": "Which of the following is NOT part of system testing",
            "options": [
                "Business process-based testing",
                "Performance, load and stress testing",
                "Requirements-based testing",
                "Usability testing",
                "Top-down integration testing"
            ],
            "answer": 4,
            "explanation": "Top-down integration testing",
            "keywords": "Q: Which of the following is NOT part of | A: Top-down integration testing"
        },
        {
            "id": 36,
            "text": "Error guessing is:",
            "options": [
                "An appropriate way of deriving system tests.",
                "Only used if good requirements are not available.",
                "Only used when good requirements are available.",
                "The most appropriate way of deriving system tests."
            ],
            "answer": 0,
            "explanation": "An appropriate way of deriving system tests.",
            "keywords": "Q: Error guessing is: | A: An appropriate way of deriving system"
        },
        {
            "id": 37,
            "text": "Cyclomatic Complexity method comes under which testing method",
            "options": [
                "White box",
                "Black box",
                "Green box",
                "Yellow box"
            ],
            "answer": 0,
            "explanation": "White box",
            "keywords": "Q: Cyclomatic Complexity method comes under which testing method | A: White box"
        },
        {
            "id": 38,
            "text": "Given the following state transition diagram. Which of the following series of state transitions contains an INVALID transition which may indicate a fault in the system design? Exhibit:",
            "options": [
                "Login Browse Basket Checkout Basket Checkout Pay Logout.",
                "Login Browse Basket Checkout Pay Logout.",
                "Login Browse Basket Checkout Basket Logout.",
                "Login Browse Basket Browse Basket Checkout Pay Logout."
            ],
            "answer": 2,
            "explanation": "Login Browse Basket Checkout Basket Logout.",
            "keywords": "Q: Given the following state transition diagram. Which of | A: Login Browse Basket Checkout Basket Logout."
        },
        {
            "id": 39,
            "text": "Regression testing should be performed: v) Every week w) After the software has changed x) As often as possible y) When the environment has changed z) When the project manager says",
            "options": [
                "V & w are true, X - z are false",
                "w, x & y are true, v & z are false",
                "w & y are true, v, x & z are false",
                "w is true, v, x y and z are false",
                "All of them are true"
            ],
            "answer": 2,
            "explanation": "w & y are true, v, x & z are false",
            "keywords": "Q: Regression testing should be performed: v) Every week | A: w & y are true, v,"
        },
        {
            "id": 40,
            "text": "FPA is used to",
            "options": [
                "To measure the functional requirements of the project",
                "To measure the size of the functionality of an Information system",
                "To measure the functional testing effort",
                "To measure the functional flow"
            ],
            "answer": 1,
            "explanation": "To measure the size of the functionality of an Information system",
            "keywords": "Q: FPA is used to | A: To measure the size of the"
        },
        {
            "id": 41,
            "text": "Software quality is not relevant to",
            "options": [
                "Correctness",
                "Usability",
                "Viability",
                "Reusability"
            ],
            "answer": 2,
            "explanation": "Viability",
            "keywords": "Q: Software quality is not relevant to | A: Viability"
        },
        {
            "id": 42,
            "text": "Which activities form part of test planning? i) Developing test cases. ii) Defining the overall approach to testing. iii) Assigning resources. iv) Building the test environment v) Writing test conditions.",
            "options": [
                "i, ii & iv are true, iii & v are false.",
                "ii & iii are true, i, iv & v are false.",
                "iv & v are true, i, ii & iii are false.",
                "i, i & ill are true iv & v are false."
            ],
            "answer": 1,
            "explanation": "ii & iii are true, i, iv & v are false.",
            "keywords": "Q: Which activities form part of test planning? i) | A: ii & iii are true, i,"
        },
        {
            "id": 43,
            "text": "Which of the following is not a part of the Test Implementation and Execution Phase",
            "options": [
                "Creating test suites from the test cases",
                "Executing test cases either manually or by using test execution tools",
                "Comparing actual results",
                "Designing the Tests"
            ],
            "answer": 3,
            "explanation": "Designing the Tests",
            "keywords": "Q: Which of the following is not a part | A: Designing the Tests"
        },
        {
            "id": 44,
            "text": "Gest Case are grouped into Manageable (and scheduled) units are called as",
            "options": [
                "Test Harness",
                "Test Suite",
                "Test Cycle",
                "Test Driver"
            ],
            "answer": 1,
            "explanation": "Test Suite",
            "keywords": "Q: Gest Case are grouped into Manageable (and scheduled) | A: Test Suite"
        },
        {
            "id": 45,
            "text": "When should configuration management procedures be implemented?",
            "options": [
                "During test planning.",
                "During test analysis.",
                "During test execution.",
                "When evaluating exit criteria"
            ],
            "answer": 0,
            "explanation": "During test planning.",
            "keywords": "Q: When should configuration management procedures be implemented? | A: During test planning."
        },
        {
            "id": 46,
            "text": "Which activity in the fundamental test process creates test suites tor efficient test execution'?",
            "options": [
                "Implementation and execution",
                "Planning and control.",
                "Analysis and design.",
                "Test closure."
            ],
            "answer": 0,
            "explanation": "Implementation and execution",
            "keywords": "Q: Which activity in the fundamental test process creates | A: Implementation and execution"
        },
        {
            "id": 47,
            "text": "What is the main reason for testing software before releasing it?",
            "options": [
                "To show that system will work after release",
                "To decide when the software is of sufficient quality to release",
                "To find as many bugs as possible before release",
                "To give information for a risk based decision about release"
            ],
            "answer": 3,
            "explanation": "To give information for a risk based decision about release",
            "keywords": "Q: What is the main reason for testing software | A: To give information for a risk"
        },
        {
            "id": 48,
            "text": "A __ is the step-by-step method followed to ensure that standards are met",
            "options": [
                "SDLC",
                "Project Plan",
                "Policy",
                "Procedure"
            ],
            "answer": 3,
            "explanation": "Procedure",
            "keywords": "Q: A __ is the step-by-step method followed to | A: Procedure"
        },
        {
            "id": 49,
            "text": "What is the MAIN objective when reviewing a software deliverable?",
            "options": [
                "To identify potential application failures by use of a test specification.",
                "To identify defects in any software work product.",
                "To identify spelling mistakes in a requirements specification.",
                "To identify standards inconsistencies in the code."
            ],
            "answer": 1,
            "explanation": "To identify defects in any software work product.",
            "keywords": "Q: What is the MAIN objective when reviewing a | A: To identify defects in any software"
        },
        {
            "id": 50,
            "text": "The principal attributes of tools and automation are (choose one answer)",
            "options": [
                "(1) Speed & efficiency",
                "(2) Accuracy & precision",
                "Both of (1) and (2)",
                "None of (1) nor (2)"
            ],
            "answer": 2,
            "explanation": "Both of (1) and (2)",
            "keywords": "Q: The principal attributes of tools and automation are | A: Both of (1) and (2)"
        },
        {
            "id": 51,
            "text": "What type of tools to be used for Regression Testing?",
            "options": [
                "(1) Performance",
                "(2) Record/Playback",
                "Both of (1) and (2)",
                "None of (1) nor (2)"
            ],
            "answer": 1,
            "explanation": "(2) Record/Playback",
            "keywords": "Q: What type of tools to be used for | A: (2) Record/Playback"
        },
        {
            "id": 52,
            "text": "Which tool will be used to test the flag memory leaks and unassigned pointers",
            "options": [
                "Dynamic analysis tool",
                "Static Analysis tool.",
                "Maintenance tool.",
                "Configuration tool."
            ],
            "answer": 0,
            "explanation": "Dynamic analysis tool",
            "keywords": "Q: Which tool will be used to test the | A: Dynamic analysis tool"
        },
        {
            "id": 53,
            "text": "Which of the following tools would be involved in the automation of regression test?",
            "options": [
                "Data tester",
                "Boundary tester",
                "Capture/Playback",
                "Output comparator."
            ],
            "answer": 2,
            "explanation": "Capture/Playback",
            "keywords": "Q: Which of the following tools would be involved | A: Capture/Playback"
        },
        {
            "id": 54,
            "text": "The Provision and Management of a controlled library containing all the configurations items is called as",
            "options": [
                "Configuration Control",
                "Status Accounting",
                "Configuration Identification"
            ],
            "answer": 0,
            "explanation": "Configuration Control",
            "keywords": "Q: The Provision and Management of a controlled library | A: Configuration Control"
        },
        {
            "id": 55,
            "text": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
            "options": [
                "ii and iv",
                "ii and iii",
                "i and iv",
                "i and iii"
            ],
            "answer": 2,
            "explanation": "i and iv",
            "keywords": "Q: Which of the following benefits are MOST likely | A: i and iv"
        },
        {
            "id": 56,
            "text": "Which of the following activities should be performed during the selection and Implementation of a testing tool? i) Investigate the organisation's test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
            "options": [
                "i, ii, iii.",
                "ii, iii, iv.",
                "i, iii, iv.",
                "i, ii, iv."
            ],
            "answer": 3,
            "explanation": "i, ii, iv.",
            "keywords": "Q: Which of the following activities should be performed | A: i, ii, iv."
        },
        {
            "id": 57,
            "text": "With which of the following categories is a test comparator tool USUALLY associated?",
            "options": [
                "Tool support for performance and monitoring.",
                "Tool support for static testing.",
                "Tool support for test execution and logging.",
                "Tool support for the management of testing and tests."
            ],
            "answer": 2,
            "explanation": "Tool support for test execution and logging.",
            "keywords": "Q: With which of the following categories is a | A: Tool support for test execution and"
        },
        {
            "id": 58,
            "text": "Find the mismatch",
            "options": [
                "Test data preparation tools - Manipulate Data bases",
                "Test design tools - Generate test inputs",
                "Requirement management tools - Enables individual tests to be traceable",
                "Configuration management tools - Check for consistence"
            ],
            "answer": 3,
            "explanation": "Configuration management tools - Check for consistence",
            "keywords": "Q: Find the mismatch | A: Configuration management tools - Check for"
        },
        {
            "id": 59,
            "text": "thermometer measures temperature in whole degrees only. If the temperature falls below 18 degrees, the heating is switched off. It is switched on again when the temperature reaches 21 degrees. What are the be values in degrees to cover all equivalence partitions?",
            "options": [
                "15, 19 and 25",
                "17, 18 and 19.",
                "18,20 and 22.",
                "16, 26 and 32."
            ],
            "answer": 0,
            "explanation": "15, 19 and 25",
            "keywords": "Q: thermometer measures temperature in whole degrees only. If | A: 15, 19 and 25"
        },
        {
            "id": 60,
            "text": "The ___ Testing will be performed by the people at client own locations",
            "options": [
                "Alpha testing",
                "Field testing",
                "Performance testing",
                "System testing"
            ],
            "answer": 1,
            "explanation": "Field testing",
            "keywords": "Q: The ___ Testing will be performed by the | A: Field testing"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swt_fa25"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
