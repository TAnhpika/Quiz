/** Ngân hàng câu hỏi: SWT (332 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
            "text": "Beta testing is performed at developing organization's site where as Alpha testing is performed by people at their own locations.",
            "options": [
                "True",
                "False"
            ],
            "answer": 1,
            "explanation": "False",
            "keywords": "Q: Beta testing is performed at developing organization's site | A: False"
        },
        {
            "id": 2,
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
            "id": 3,
            "text": "Drivers are tools used to control and operate the software being tested",
            "options": [
                "True",
                "False"
            ],
            "answer": 0,
            "explanation": "True",
            "keywords": "Q: Drivers are tools used to control and operate | A: True"
        },
        {
            "id": 4,
            "text": "Defects are recorded into three major purposes. They are: 1. To correct the defect 2. To report status of the application 3. To improve the software development process",
            "options": [
                "True",
                "False"
            ],
            "answer": 0,
            "explanation": "True",
            "keywords": "Q: Defects are recorded into three major purposes. They | A: True"
        },
        {
            "id": 5,
            "text": "Exhaustive testing is possible",
            "options": [
                "True",
                "False"
            ],
            "answer": 1,
            "explanation": "False",
            "keywords": "Q: Exhaustive testing is possible | A: False"
        },
        {
            "id": 6,
            "text": "Quality Assurance is the process by which product quality is compared with the application standards and the action taken when nonconformance is detected.",
            "options": [
                "True",
                "False"
            ],
            "answer": 1,
            "explanation": "False",
            "keywords": "Q: Quality Assurance is the process by which product | A: False"
        },
        {
            "id": 7,
            "text": "Verification can be termed as 'Are we building the product right?'",
            "options": [
                "True",
                "False"
            ],
            "answer": 0,
            "explanation": "True",
            "keywords": "Q: Verification can be termed as 'Are we building | A: True"
        },
        {
            "id": 8,
            "text": "The number of tests to test all control statements equals the cyclomatic complexity",
            "options": [
                "True",
                "False"
            ],
            "answer": 1,
            "explanation": "False",
            "keywords": "Q: The number of tests to test all control | A: False"
        },
        {
            "id": 9,
            "text": "The goal of a software tester is to find bugs, find them as early as possible and make sure they get fixed.",
            "options": [
                "True",
                "False"
            ],
            "answer": 0,
            "explanation": "True",
            "keywords": "Q: The goal of a software tester is to | A: True"
        },
        {
            "id": 10,
            "text": "A typical commercial test execution tool would be able to perform all of the following EXCEPT:",
            "options": [
                "Generating expected outputs",
                "Replaying inputs according to a programmed script",
                "Comparison of expected outcomes with actual outcomes",
                "Recording test inputs",
                "Reading test values from a data file"
            ],
            "answer": 0,
            "explanation": "Generating expected outputs",
            "keywords": "Q: A typical commercial test execution tool would be | A: Generating expected outputs"
        },
        {
            "id": 11,
            "text": "What is NOT typically a feature of a test management tool?",
            "options": [
                "Scheduling tests",
                "Generating test data",
                "Logging test results",
                "Managing testing activities"
            ],
            "answer": 1,
            "explanation": "Generating test data",
            "keywords": "Q: NOT typically a feature of a test management | A: Generating test data"
        },
        {
            "id": 12,
            "text": "What is not test type?",
            "options": [
                "Structural testing",
                "Functional testing",
                "Non-functional testing",
                "Performance testing",
                "Change-related testing"
            ],
            "answer": 3,
            "explanation": "Performance testing",
            "keywords": "Q: not test type? | A: Performance testing"
        },
        {
            "id": 13,
            "text": "What is an example that is NOT risk?",
            "options": [
                "Member takes 3 days off sick, delays deadline.",
                "In the team, there is a member who has developed a library, helping to improve work performance.",
                "Member lacks technical skills.",
                "The assignment schedule must exclude days off and holidays.",
                "Whenever we cross the road, there is some risk that we'll be injured by a car."
            ],
            "answer": 1,
            "explanation": "In the team, there is a member who has developed a library, helping to improve work performance.",
            "keywords": "Q: an example that is NOT risk? | A: In the team"
        },
        {
            "id": 14,
            "text": "What information need not be included in a test incident report:",
            "options": [
                "How to fix the fault",
                "How to reproduce the fault",
                "Test environment details",
                "Severity, priority",
                "The actual and expected outcomes"
            ],
            "answer": 0,
            "explanation": "How to fix the fault",
            "keywords": "Q: What information need not be included in a | A: How to fix the fault"
        },
        {
            "id": 15,
            "text": "Which of the following is not included in Test Plan.",
            "options": [
                "Features to be tested.",
                "Environmental needs.",
                "Suspension criteria.",
                "Expected results."
            ],
            "answer": 3,
            "explanation": "Expected results.",
            "keywords": "Q: is not included in Test Plan. | A: Expected results"
        },
        {
            "id": 16,
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
            "id": 17,
            "text": "Which of the following is not a type of incremental testing approach?",
            "options": [
                "Top down",
                "Big-bang",
                "Bottom up",
                "Functional incrementation."
            ],
            "answer": 1,
            "explanation": "Big-bang",
            "keywords": "Q: is not a type of incremental testing approach? | A: Big-bang"
        },
        {
            "id": 18,
            "text": "Which of the following is NOT a type of non-functional test?",
            "options": [
                "State-Transition",
                "Usability",
                "Performance",
                "Security"
            ],
            "answer": 0,
            "explanation": "State-Transition",
            "keywords": "Q: is NOT a type of non-functional test? | A: State-Transition"
        },
        {
            "id": 19,
            "text": "Which of the following is NOT part of configuration management:",
            "options": [
                "Status accounting of configuration items",
                "Auditing conformance to ISO9001",
                "Identification of test versions",
                "Record of changes to documentation over time",
                "Controlled library access"
            ],
            "answer": 1,
            "explanation": "Auditing conformance to ISO9001",
            "keywords": "Q: is NOT part of configuration management: | A: Auditing conformance to ISO9001"
        },
        {
            "id": 20,
            "text": "Which of the following is NOT a main principle for tool selection?",
            "options": [
                "Understanding of the technologies used by the competitors",
                "Evaluation of tools against clear requirements and objective criteria",
                "Estimation of a cost-benefit ratio",
                "Assessment of the maturity of the organization"
            ],
            "answer": 0,
            "explanation": "Understanding of the technologies used by the competitors",
            "keywords": "Q: is NOT a main principle for tool selection? | A: Understanding of the technologies used"
        },
        {
            "id": 21,
            "text": "Which of the following is NOT a standard related to testing?",
            "options": [
                "IEEE829",
                "IEEE610",
                "BS7925-1",
                "BS7925-2"
            ],
            "answer": 1,
            "explanation": "IEEE610",
            "keywords": "Q: is NOT a standard related to testing? | A: IEEE610"
        },
        {
            "id": 22,
            "text": "Which of the following is NOT a characteristic of User Acceptance Testing?",
            "options": [
                "Use of automated test execution tools",
                "Testing performed by users.",
                "Testing against acceptance test criteria",
                "Integration of system with user documentation."
            ],
            "answer": 0,
            "explanation": "Use of automated test execution tools",
            "keywords": "Q: is NOT a characteristic of User Acceptance Testing? | A: Use of automated test execution tools"
        },
        {
            "id": 23,
            "text": "Which of the following is NOT included in the Test Plan document of the Test Documentation Standard:",
            "options": [
                "Test items (i.e. software versions)",
                "What is not to be tested",
                "Test environments",
                "Quality plans",
                "Schedules and deadlines"
            ],
            "answer": 3,
            "explanation": "Quality plans",
            "keywords": "Q: is NOT included in the Test Plan document | A: Quality plans"
        },
        {
            "id": 24,
            "text": "Which of the following would you NOT usually find on a software incident report?",
            "options": [
                "The name and/or organisational position of the person raising the problem.",
                "Version of the Software Under Test.",
                "Suggestions as to how to fix the problem.",
                "Actual and expected results."
            ],
            "answer": 2,
            "explanation": "Suggestions as to how to fix the problem.",
            "keywords": "Q: would you NOT usually find on a software | A: Suggestions as to how to fix the problem"
        },
        {
            "id": 25,
            "text": "Which of the following is not a static testing technique?",
            "options": [
                "Error guessing",
                "Walkthrough",
                "Data flow analysis",
                "Inspections"
            ],
            "answer": 0,
            "explanation": "Error guessing",
            "keywords": "Q: is not a static testing technique? | A: Error guessing"
        },
        {
            "id": 26,
            "text": "Which is not the project risks",
            "options": [
                "Supplier issues",
                "Organization factors",
                "Technical issues",
                "Error-prone software delivered"
            ],
            "answer": 3,
            "explanation": "Error-prone software delivered",
            "keywords": "Q: Which is not the project risks | A: Error-prone software delivered"
        },
        {
            "id": 27,
            "text": "Which is not the testing objectives",
            "options": [
                "Finding defects",
                "Gaining confidence about the level of quality and providing information",
                "Preventing defects.",
                "Debugging defects"
            ],
            "answer": 3,
            "explanation": "Debugging defects",
            "keywords": "Q: Which is not the testing objectives | A: Debugging defects"
        },
        {
            "id": 28,
            "text": "Which is not a black box testing technique",
            "options": [
                "Equivalence partition",
                "Decision tables",
                "Transaction diagrams",
                "Decision testing"
            ],
            "answer": 3,
            "explanation": "Decision testing",
            "keywords": "Q: Which is not a black box testing technique | A: Decision testing"
        },
        {
            "id": 29,
            "text": "Which is not the fundamental test process",
            "options": [
                "Planning and control",
                "Test closure activities",
                "Analysis and design",
                "None of the others"
            ],
            "answer": 3,
            "explanation": "None of the others",
            "keywords": "Q: Which is not the fundamental test process | A: None of the others"
        },
        {
            "id": 30,
            "text": "Which is not the software characteristics",
            "options": [
                "Reliability",
                "Usability",
                "Development cost",
                "Maintainability"
            ],
            "answer": 2,
            "explanation": "Development cost",
            "keywords": "Q: Which is not the software characteristics | A: Development cost"
        },
        {
            "id": 31,
            "text": "Which is not a testing principle",
            "options": [
                "Early testing",
                "Defect clustering",
                "Pesticide paradox",
                "Exhaustive testing"
            ],
            "answer": 3,
            "explanation": "Exhaustive testing",
            "keywords": "Q: Which is not a testing principle | A: Exhaustive testing"
        },
        {
            "id": 32,
            "text": "Which is not true-The black box tester",
            "options": [
                "Should be able to understand a functional specification or requirements document",
                "Should be able to understand the source code.",
                "Is highly motivated to find faults",
                "Is creative to find the system's weaknesses"
            ],
            "answer": 1,
            "explanation": "Should be able to understand the source code.",
            "keywords": "Q: Which is not true-The black box tester | A: Should be able to understand the source code"
        },
        {
            "id": 33,
            "text": "Which of the following is NOT a benefit of static testing in software development?",
            "options": [
                "Improving communication between team members in the course of participating in reviews",
                "Reducing testing cost and time",
                "Reducing development cost and time",
                "Reducing the need for documentation"
            ],
            "answer": 3,
            "explanation": "Reducing the need for documentation",
            "keywords": "Q: is NOT a benefit of static testing in | A: Reducing the need for documentation"
        },
        {
            "id": 34,
            "text": "Which of the following techniques is NOT a White box technique?",
            "options": [
                "Statement Testing and coverage",
                "Decision Testing and coverage",
                "Condition Coverage",
                "Boundary value analysis"
            ],
            "answer": 3,
            "explanation": "Boundary value analysis",
            "keywords": "Q: techniques is NOT a White box technique? | A: Boundary value analysis"
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
            "keywords": "Q: is NOT part of system testing | A: Top-down integration testing"
        },
        {
            "id": 36,
            "text": "Which of the following is not a part of the Test Implementation and Execution Phase",
            "options": [
                "Creating test suites from the test cases",
                "Executing test cases either manually or by using test execution tools",
                "Comparing actual results",
                "Designing the Tests"
            ],
            "answer": 3,
            "explanation": "Designing the Tests",
            "keywords": "Q: is not a part of the Test Implementation | A: Designing the Tests"
        },
        {
            "id": 37,
            "text": "Which one comes under international standard?",
            "options": [
                "IEC",
                "IEEE",
                "ISO"
            ],
            "answer": 1,
            "explanation": "IEEE",
            "keywords": "Q: comes under international standard? | A: IEEE"
        },
        {
            "id": 38,
            "text": "Which test may not mimic real world situations (choose one answer)",
            "options": [
                "(i) Functional testing",
                "(ii) Structural Testing",
                "Both of (i) and (ii)",
                "None of (i) nor (ii)"
            ],
            "answer": 1,
            "explanation": "(ii) Structural Testing",
            "keywords": "Q: Which test may not mimic real world situations | A: (ii) Structural Testing"
        },
        {
            "id": 39,
            "text": "Which rule should not be followed for reviews",
            "options": [
                "Defects and issues are identified and corrected",
                "The product is reviewed not the producer",
                "All members of the reviewing team are responsible for the result of the review",
                "Each review has a clear predefined objective"
            ],
            "answer": 2,
            "explanation": "All members of the reviewing team are responsible for the result of the review",
            "keywords": "Q: Which rule should not be followed for reviews | A: All members of the reviewing"
        },
        {
            "id": 40,
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
            "id": 41,
            "text": "Which of the following is true?",
            "options": [
                "Component testing should be black box, system testing should be white box",
                "If you find a lot of bugs in testing, you should not be very confident about the quality of software",
                "The fewer bugs you find, the better your testing was",
                "The more tests you run, the more bugs you will find."
            ],
            "answer": 1,
            "explanation": "If you find a lot of bugs in testing, you should not be very confident about the quality of software",
            "keywords": "Q: is true? | A: If you find a lot of bugs in testing"
        },
        {
            "id": 42,
            "text": "Which of the following statements is true of static analysis:",
            "options": [
                "Compiling code is not a form of static analysis",
                "Static analysis need not be performed before imperative code is executed",
                "Static analysis can find faults that are hard to find with dynamic testing.",
                "Extensive statistical analysis will not be needed if white-box testing is to be performed."
            ],
            "answer": 2,
            "explanation": "Static analysis can find faults that are hard to find with dynamic testing.",
            "keywords": "Q: statements is true of static analysis: | A: Static analysis can find faults"
        },
        {
            "id": 43,
            "text": "A field failure occurs when multiple users access a system. Which of the following is true?",
            "options": [
                "This is an acceptable risk of a multi-user system.",
                "Insufficient functional testing has been performed",
                "This indicates an important non-functional requirement was not specified and tested.",
                "It is not possible to test against such events prior to release."
            ],
            "answer": 2,
            "explanation": "This indicates an important non-functional requirement was not specified and tested.",
            "keywords": "Q: A field failure occurs when multiple users access | A: This indicates an important non-functional"
        },
        {
            "id": 44,
            "text": "A typical formal review process consists of five main steps. Which is the correct order?",
            "options": [
                "Planning → Individual review → Initiate review → Issue communication & Analysis → Fixing & Reporting",
                "Planning → Initiate review → Individual review → Issue communication & Analysis → Fixing & Reporting",
                "Initiate review → Planning → Individual review → Issue communication & Analysis → Fixing & Reporting",
                "Planning → Issue communication & Analysis → Initiate review → Individual review → Fixing & Reporting"
            ],
            "answer": 1,
            "explanation": "Planning → Initiate review → Individual review → Issue communication & Analysis → Fixing & Reporting",
            "keywords": "Q: A typical formal review process consists of five | A: Planning → Initiate review →"
        },
        {
            "id": 45,
            "text": "Which of the following statement is CORRECT about decision coverage?",
            "options": [
                "Decision coverage is a measure of the percentage of possible paths through the source code exercised by tests",
                "Decision coverage is a measure of the percentage of business flows through the component exercised by tests",
                "Decision coverage is a measure of the \"if\" statements in the code that are exercised with both the true and false outcomes",
                "Decision coverage is a measure of the proportion of decision outcomes in the source code exercised by tests"
            ],
            "answer": 3,
            "explanation": "Decision coverage is a measure of the proportion of decision outcomes in the source code exercised by tests",
            "keywords": "Q: statement is CORRECT about decision coverage? | A: Decision coverage is a measure"
        },
        {
            "id": 46,
            "text": "___ is a very early build intended for limited distribution to a few key customers and to marketing for demonstration purposes.",
            "options": [
                "Alpha release",
                "Beta release",
                "Test release document",
                "Build"
            ],
            "answer": 0,
            "explanation": "Alpha release",
            "keywords": "Q: ___ is a very early build intended for | A: Alpha release"
        },
        {
            "id": 47,
            "text": "___ is the process of testing a single unit of code in an isolated manner and can be a method, a class, or a module.",
            "options": [
                "Integration Testing",
                "Unit Testing",
                "Acceptance Testing",
                "System Testing"
            ],
            "answer": 1,
            "explanation": "Unit Testing",
            "keywords": "Q: ___ is the process of testing a single | A: Unit Testing"
        },
        {
            "id": 48,
            "text": "___ consists of a set of test cases covering the end-to-end functionality of a software application",
            "options": [
                "Test Case",
                "Test scenario",
                "Test scripts",
                "None of the mentioned"
            ],
            "answer": 1,
            "explanation": "Test scenario",
            "keywords": "Q: ___ consists of a set of test cases | A: Test scenario"
        },
        {
            "id": 49,
            "text": "Reviews, walkthroughs, and inspections are part of",
            "options": [
                "Design process",
                "Validation process",
                "Verification process",
                "Management process"
            ],
            "answer": 2,
            "explanation": "Verification process",
            "keywords": "Q: Reviews, walkthroughs, and inspections are part of | A: Verification process"
        },
        {
            "id": 50,
            "text": "What is the normal order of activities in which software testing is organized?",
            "options": [
                "Unit, integration, system, validation",
                "System, integration, unit, validation",
                "Unit, integration, validation, system",
                "None of the above"
            ],
            "answer": 0,
            "explanation": "Unit, integration, system, validation",
            "keywords": "Q: the normal order of activities in which software | A: Unit, integration, system, validation"
        },
        {
            "id": 51,
            "text": "What is a characteristic feature of a test harness?",
            "options": [
                "Schedules tests",
                "Supplies inputs to the software being tested",
                "Manages software incidents",
                "Analyzes software performance"
            ],
            "answer": 1,
            "explanation": "Supplies inputs to the software being tested",
            "keywords": "Q: a characteristic feature of a test harness? | A: Supplies inputs to the software being tested"
        },
        {
            "id": 52,
            "text": "What is a key feature of static analysis tools?",
            "options": [
                "Executing the code",
                "Checking coding standards",
                "Testing system performance",
                "Automating user feedback"
            ],
            "answer": 1,
            "explanation": "Checking coding standards",
            "keywords": "Q: a key feature of static analysis tools? | A: Checking coding standards"
        },
        {
            "id": 53,
            "text": "What is a key reason that software testing is necessary?",
            "options": [
                "To increase software complexity",
                "To identify defects in software",
                "To reduce software features",
                "To speed up software development"
            ],
            "answer": 1,
            "explanation": "To identify defects in software",
            "keywords": "Q: a key reason that software testing is necessary? | A: To identify defects in software"
        },
        {
            "id": 54,
            "text": "What is the final step in the incident management process?",
            "options": [
                "Logging the incident",
                "Reviewing the incident with stakeholders",
                "Closing the incident report",
                "Assigning the incident to a developer"
            ],
            "answer": 2,
            "explanation": "Closing the incident report",
            "keywords": "Q: the final step in the incident management process? | A: Closing the incident report"
        },
        {
            "id": 55,
            "text": "What does change-related testing include?",
            "options": [
                "Performance and stress testing",
                "Confirmation and regression testing",
                "Usability and compliance testing",
                "Security and reliability testing"
            ],
            "answer": 1,
            "explanation": "Confirmation and regression testing",
            "keywords": "Q: change-related testing include? | A: Confirmation and regression testing"
        },
        {
            "id": 56,
            "text": "What does a programmer need to write in order to test a function, which calls the function under test and passes test data to it?",
            "options": [
                "Stub",
                "Driver",
                "Proxy",
                "None of the others"
            ],
            "answer": 1,
            "explanation": "Driver",
            "keywords": "Q: a programmer need to write in order to | A: Driver"
        },
        {
            "id": 57,
            "text": "What types of defects are typically found more effectively during static testing than dynamic testing?",
            "options": [
                "Performance-related defects",
                "Defects in user interface design",
                "Runtime errors and exceptions",
                "Missing requirements or design defects"
            ],
            "answer": 3,
            "explanation": "Missing requirements or design defects",
            "keywords": "Q: What types of defects are typically found more | A: Missing requirements or design defects"
        },
        {
            "id": 58,
            "text": "What type of tools to be used for Regression Testing (choose one answer)",
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
            "id": 59,
            "text": "What type of testing will you perform on internet banking solution?",
            "options": [
                "System integration",
                "Functional testing",
                "Non-functional testing.",
                "Requirements testing"
            ],
            "answer": 2,
            "explanation": "Non-functional testing.",
            "keywords": "Q: What type of testing will you perform on | A: Non-functional testing"
        },
        {
            "id": 60,
            "text": "What should the severity of a defect indicate?",
            "options": [
                "The tester's skill level",
                "The impact of the defect on the system",
                "The cost of the software",
                "The timeline of the project"
            ],
            "answer": 1,
            "explanation": "The impact of the defect on the system",
            "keywords": "Q: What should the severity of a defect indicate? | A: The impact of the defect on the system"
        },
        {
            "id": 61,
            "text": "Which of the following is not a characteristic for Testability?",
            "options": [
                "Operability",
                "Observability",
                "Simplicity",
                "Robustness"
            ],
            "answer": 3,
            "explanation": "Robustness",
            "keywords": "Q: is not a characteristic for Testability? | A: Robustness"
        },
        {
            "id": 62,
            "text": "Which of the following is least important in test management?",
            "options": [
                "Estimating test duration.",
                "Incident Management",
                "Configuration Management.",
                "De-bugging."
            ],
            "answer": 3,
            "explanation": "De-bugging.",
            "keywords": "Q: is least important in test management? | A: De-bugging"
        },
        {
            "id": 63,
            "text": "Which of the following is a Key Characteristics of Walk Through",
            "options": [
                "Scenario, Dry Run, Peer Group",
                "Pre Meeting Preparations",
                "Formal Follow Up Process",
                "Includes Metrics"
            ],
            "answer": 0,
            "explanation": "Scenario, Dry Run, Peer Group",
            "keywords": "Q: is a Key Characteristics of Walk Through | A: Scenario, Dry Run, Peer Group"
        },
        {
            "id": 64,
            "text": "Which of the following tools would be involved in the automation of regression test?",
            "options": [
                "Data tester",
                "Boundary tester",
                "Capture/Playback",
                "Output comparator."
            ],
            "answer": 2,
            "explanation": "Capture/Playback",
            "keywords": "Q: tools would be involved in the automation of | A: Capture/Playback"
        },
        {
            "id": 65,
            "text": "Which of the following is a black box design technique?",
            "options": [
                "Statement testing",
                "Equivalence partitioning",
                "Error-guessing",
                "Usability testing"
            ],
            "answer": 1,
            "explanation": "Equivalence partitioning",
            "keywords": "Q: is a black box design technique? | A: Equivalence partitioning"
        },
        {
            "id": 66,
            "text": "Which of the following tools would you use to detect a memory leak?",
            "options": [
                "State analysis",
                "Coverage analysis",
                "Dynamic analysis",
                "Memory analysis"
            ],
            "answer": 2,
            "explanation": "Dynamic analysis",
            "keywords": "Q: tools would you use to detect a memory | A: Dynamic analysis"
        },
        {
            "id": 67,
            "text": "Which of the following defines the expected results of a test?",
            "options": [
                "Test case specification.",
                "Test design specification.",
                "Test procedure specification.",
                "Test results."
            ],
            "answer": 0,
            "explanation": "Test case specification.",
            "keywords": "Q: defines the expected results of a test? | A: Test case specification"
        },
        {
            "id": 68,
            "text": "Which of the following is a static test?",
            "options": [
                "Code inspection",
                "Coverage analysis",
                "Usability assessment",
                "Installation test"
            ],
            "answer": 0,
            "explanation": "Code inspection",
            "keywords": "Q: is a static test? | A: Code inspection"
        },
        {
            "id": 69,
            "text": "Which of the following is the odd one out?",
            "options": [
                "White box testing",
                "Glass box testing",
                "Clear box testing",
                "Black box testing",
                "Transparent box testing",
                "Structural testing"
            ],
            "answer": 3,
            "explanation": "Black box testing",
            "keywords": "Q: is the odd one out? | A: Black box testing"
        },
        {
            "id": 70,
            "text": "Which of the following is a purpose of the review planning phase?",
            "options": [
                "Log defects.",
                "Explain the documents to the participants",
                "Gather metrics.",
                "Allocate the individual roles."
            ],
            "answer": 3,
            "explanation": "Allocate the individual roles.",
            "keywords": "Q: is a purpose of the review planning phase? | A: Allocate the individual roles"
        },
        {
            "id": 71,
            "text": "Which of the following are common entry criteria for testing? (Choose 2 correct answers)",
            "options": [
                "Availability of test environment",
                "Completion of all test cases",
                "Approval from the project manager",
                "Availability of necessary resources"
            ],
            "answer": 0,
            "explanation": "Availability of test environment · Availability of necessary resources",
            "keywords": "Q: are common entry criteria for testing? | A: Availability of test environment · Availability of necessary resources",
            "answers": [
                0,
                3
            ]
        },
        {
            "id": 72,
            "text": "Which of the following is a type of non-functional testing?",
            "options": [
                "Usability testing.",
                "Statement Coverage.",
                "Dataflow testing.",
                "Cause-effect graphing"
            ],
            "answer": 0,
            "explanation": "Usability testing.",
            "keywords": "Q: is a type of non-functional testing? | A: Usability testing"
        },
        {
            "id": 73,
            "text": "Which of the following provides the biggest potential cost saving from use of CAST?",
            "options": [
                "Test management",
                "Test design",
                "Test planning",
                "Test execution"
            ],
            "answer": 3,
            "explanation": "Test execution",
            "keywords": "Q: provides the biggest potential cost saving from use | A: Test execution"
        },
        {
            "id": 74,
            "text": "Which is the non-functional testing",
            "options": [
                "Performance testing",
                "Unit testing",
                "Regression testing",
                "Sanity testing"
            ],
            "answer": 0,
            "explanation": "Performance testing",
            "keywords": "Q: Which is the non-functional testing | A: Performance testing"
        },
        {
            "id": 75,
            "text": "Which type of review is a formal assessment of a work product conducted by one or more qualified independent reviewers to detect defects?",
            "options": [
                "Inspection",
                "Walkthrough",
                "Review",
                "Non Conformance"
            ],
            "answer": 0,
            "explanation": "Inspection",
            "keywords": "Q: Which type of review is a formal assessment | A: Inspection"
        },
        {
            "id": 76,
            "text": "Which activity in the fundamental test process creates test suites for efficient test execution?",
            "options": [
                "Implementation and execution.",
                "Planning and control.",
                "Analysis and design.",
                "Test closure."
            ],
            "answer": 0,
            "explanation": "Implementation and execution.",
            "keywords": "Q: Which activity in the fundamental test process creates | A: Implementation and execution"
        },
        {
            "id": 77,
            "text": "Which test level focuses on individual units or components?",
            "options": [
                "System testing",
                "Integration testing",
                "Unit testing",
                "Acceptance testing"
            ],
            "answer": 2,
            "explanation": "Unit testing",
            "keywords": "Q: Which test level focuses on individual units or | A: Unit testing"
        },
        {
            "id": 78,
            "text": "Which testing is used to verify that the system can perform properly when internal program or system limitations have been exceeded",
            "options": [
                "Stress Testing",
                "Load Testing",
                "Performance Testing",
                "Volume testing"
            ],
            "answer": 0,
            "explanation": "Stress Testing",
            "keywords": "Q: Which testing is used to verify that the | A: Stress Testing"
        },
        {
            "id": 79,
            "text": "Which static testing technique analyzes code without executing it?",
            "options": [
                "Error guessing",
                "Equivalence partitioning",
                "Code review",
                "Decision table testing"
            ],
            "answer": 2,
            "explanation": "Code review",
            "keywords": "Q: Which static testing technique analyzes code without executing | A: Code review"
        },
        {
            "id": 80,
            "text": "Which type of tool stores requirement statements, checks for consistency, allows requirements to be prioritized, and enables individual tests to be traceable to requirements, functions, and features?",
            "options": [
                "Incident management tools",
                "Requirements management tools",
                "Configuration management tools",
                "None of the others"
            ],
            "answer": 1,
            "explanation": "Requirements management tools",
            "keywords": "Q: Which type of tool stores requirement statements, checks | A: Requirements management tools"
        },
        {
            "id": 81,
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
            "id": 82,
            "text": "Which test level verifies the application meets business requirements?",
            "options": [
                "Unit testing",
                "System testing",
                "Integration testing",
                "Acceptance testing"
            ],
            "answer": 3,
            "explanation": "Acceptance testing",
            "keywords": "Q: Which test level verifies the application meets business | A: Acceptance testing"
        },
        {
            "id": 83,
            "text": "Which technique uses different combinations of inputs to result in different actions being taken?",
            "options": [
                "Error guessing",
                "Decision table testing",
                "Boundary value analysis",
                "Equivalence partitioning"
            ],
            "answer": 1,
            "explanation": "Decision table testing",
            "keywords": "Q: Which technique uses different combinations of inputs to | A: Decision table testing"
        },
        {
            "id": 84,
            "text": "Which tool is specifically designed to support the creation of test cases?",
            "options": [
                "Test design tool",
                "Test execution tool",
                "Static analysis tool",
                "Test management tool"
            ],
            "answer": 0,
            "explanation": "Test design tool",
            "keywords": "Q: Which tool is specifically designed to support the | A: Test design tool"
        },
        {
            "id": 85,
            "text": "Which type of test design technique is based on the tester's skills, intuition, and experience in testing?",
            "options": [
                "Black-box testing",
                "White-box testing",
                "Experience-based testing",
                "Specification-based testing"
            ],
            "answer": 2,
            "explanation": "Experience-based testing",
            "keywords": "Q: Which type of test design technique is based | A: Experience-based testing"
        },
        {
            "id": 86,
            "text": "Which white box technique has the main goal of ensuring that each one of the possible branches from each decision point is executed at least once?",
            "options": [
                "Basis path coverage testing",
                "Statement coverage testing",
                "Branch coverage testing",
                "Condition coverage testing"
            ],
            "answer": 2,
            "explanation": "Branch coverage testing",
            "keywords": "Q: Which white box technique has the main goal | A: Branch coverage testing"
        },
        {
            "id": 87,
            "text": "When a defect is detected and fixed then the software should be retested to confirm that the original defect has been successfully removed. This is called",
            "options": [
                "Regression testing",
                "Maintenance testing",
                "Confirmation testing",
                "None of the above"
            ],
            "answer": 2,
            "explanation": "Confirmation testing",
            "keywords": "Q: a defect is detected and fixed then the | A: Confirmation testing"
        },
        {
            "id": 88,
            "text": "When should configuration management procedures be implemented?",
            "options": [
                "During test planning.",
                "During test analysis.",
                "During test execution.",
                "When evaluating exit criteria"
            ],
            "answer": 0,
            "explanation": "During test planning.",
            "keywords": "Q: should configuration management procedures be implemented? | A: During test planning"
        },
        {
            "id": 89,
            "text": "When utilizing error guessing as your testing strategy, what specific type of testing are you performing?",
            "options": [
                "Specification-based",
                "Structure-based",
                "Experience-based",
                "Reference-based"
            ],
            "answer": 2,
            "explanation": "Experience-based",
            "keywords": "Q: utilizing error guessing as your testing strategy, what | A: Experience-based"
        },
        {
            "id": 90,
            "text": "When what is visible to end-users is a deviation from the specific or expected behavior, this is called:",
            "options": [
                "An error",
                "A fault",
                "A failure",
                "A defect",
                "A mistake"
            ],
            "answer": 2,
            "explanation": "A failure",
            "keywords": "Q: what is visible to end-users is a deviation | A: A failure"
        },
        {
            "id": 91,
            "text": "Who is responsible for document all the issues, problems and open point that were identified during the review meeting",
            "options": [
                "Moderator",
                "Scribe",
                "Reviewers",
                "Author"
            ],
            "answer": 1,
            "explanation": "Scribe",
            "keywords": "Q: is responsible for document all the issues, problems | A: Scribe"
        },
        {
            "id": 92,
            "text": "Who would USUALLY perform debugging activities?",
            "options": [
                "Developers.",
                "Analysts.",
                "Testers.",
                "Incident Managers."
            ],
            "answer": 0,
            "explanation": "Developers.",
            "keywords": "Q: would USUALLY perform debugging activities? | A: Developers"
        },
        {
            "id": 93,
            "text": "How does usability testing differ from performance testing?",
            "options": [
                "Usability testing focuses on user-friendliness, while performance testing measures operational capabilities.",
                "Usability testing measures how fast the system responds to requests, while performance testing checks for user-friendliness.",
                "They do not differ, both terms describe the same tests.",
                "Usability testing is a type of performance testing."
            ],
            "answer": 0,
            "explanation": "Usability testing focuses on user-friendliness, while performance testing measures operational capabilities.",
            "keywords": "Q: usability testing differ from performance testing? | A: Usability testing focuses on user-friendliness"
        },
        {
            "id": 94,
            "text": "___ is the step-by-step method followed to ensure that standards are met",
            "options": [
                "SDLC",
                "Project Plan",
                "Policy",
                "Procedure"
            ],
            "answer": 3,
            "explanation": "Procedure",
            "keywords": "Q: ___ is the step-by-step method followed to ensure | A: Procedure"
        },
        {
            "id": 95,
            "text": "A tool that supports traceability, recording of incidents or scheduling of tests is called:",
            "options": [
                "A dynamic analysis tool",
                "A test execution tool",
                "A debugging tool",
                "A test management tool",
                "A configuration management tool"
            ],
            "answer": 3,
            "explanation": "A test management tool",
            "keywords": "Q: A tool that supports traceability, recording of incidents | A: A test management tool"
        },
        {
            "id": 96,
            "text": "A common test technique during component test is",
            "options": [
                "Statement and branch testing",
                "Usability testing",
                "Security testing",
                "Performance testing"
            ],
            "answer": 0,
            "explanation": "Statement and branch testing",
            "keywords": "Q: A common test technique during component test is | A: Statement and branch testing"
        },
        {
            "id": 97,
            "text": "A software model that can't be used in functional testing",
            "options": [
                "Process flow model",
                "State transaction model",
                "Menu structure model",
                "Plain language specification model"
            ],
            "answer": 3,
            "explanation": "Plain language specification model",
            "keywords": "Q: A software model that can't be used in | A: Plain language specification model"
        },
        {
            "id": 98,
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
            "id": 99,
            "text": "A white box testing technique that measures the number of or percentage of decision directions executed by the test case designed is called",
            "options": [
                "Condition coverage",
                "Decision/Condition coverage",
                "Decision Coverage",
                "Branch coverage"
            ],
            "answer": 2,
            "explanation": "Decision Coverage",
            "keywords": "Q: A white box testing technique that measures the | A: Decision Coverage"
        },
        {
            "id": 100,
            "text": "As part of which test process do you determine the exit criteria?",
            "options": [
                "Test planning.",
                "Evaluating exit criteria and reporting.",
                "Test closure.",
                "Test control."
            ],
            "answer": 0,
            "explanation": "Test planning.",
            "keywords": "Q: As part of which test process do you | A: Test planning"
        },
        {
            "id": 101,
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
            "id": 102,
            "text": "Capture and replay facilities are least likely to be used to",
            "options": [
                "Performance testing",
                "Recovery testing",
                "GUI testing",
                "User requirements."
            ],
            "answer": 3,
            "explanation": "User requirements.",
            "keywords": "Q: Capture and replay facilities are least likely to | A: User requirements"
        },
        {
            "id": 103,
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
            "id": 104,
            "text": "Contract and regulation testing is a part of",
            "options": [
                "System testing",
                "Acceptance testing",
                "Integration testing",
                "Smoke testing"
            ],
            "answer": 1,
            "explanation": "Acceptance testing",
            "keywords": "Q: Contract and regulation testing is a part of | A: Acceptance testing"
        },
        {
            "id": 105,
            "text": "Cost of the reviews will not include.",
            "options": [
                "Review process itself",
                "Metrics analysis",
                "Tool support",
                "Process improvement"
            ],
            "answer": 3,
            "explanation": "Process improvement",
            "keywords": "Q: Cost of the reviews will not include. | A: Process improvement"
        },
        {
            "id": 106,
            "text": "During which test activity could faults be found most cost effectively?",
            "options": [
                "Execution",
                "Design",
                "Planning",
                "Check Exit criteria completion"
            ],
            "answer": 1,
            "explanation": "Design",
            "keywords": "Q: During which test activity could faults be found | A: Design"
        },
        {
            "id": 107,
            "text": "Designing the test environment set-up and identifying any required infrastructure and tools are a part of which phase",
            "options": [
                "Test Implementation and execution",
                "Test Analysis and Design",
                "Evaluating the Exit Criteria and reporting",
                "Test Closure Activities"
            ],
            "answer": 1,
            "explanation": "Test Analysis and Design",
            "keywords": "Q: Designing the test environment set-up and identifying any | A: Test Analysis and Design"
        },
        {
            "id": 108,
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
            "id": 109,
            "text": "Exhaustive Testing is",
            "options": [
                "Is impractical but possible",
                "Is practically possible",
                "Is impractical and impossible",
                "Is always possible"
            ],
            "answer": 2,
            "explanation": "Is impractical and impossible",
            "keywords": "Q: Exhaustive Testing is | A: Is impractical and impossible"
        },
        {
            "id": 110,
            "text": "Find the correct flow of the phases of a formal review",
            "options": [
                "Planning, Review meeting, Rework, Kick off",
                "Planning, Individual preparation, Kick off, Rework",
                "Planning, Review meeting, Rework, Follow up",
                "Planning, Individual preparation, Follow up, Kick off"
            ],
            "answer": 2,
            "explanation": "Planning, Review meeting, Rework, Follow up",
            "keywords": "Q: Find the correct flow of the phases of | A: Planning, Review meeting, Rework, Follow up"
        },
        {
            "id": 111,
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
            "id": 112,
            "text": "Function/Test matrix is a type of",
            "options": [
                "Interim Test report",
                "Final test report",
                "Project status report",
                "Management report"
            ],
            "answer": 2,
            "explanation": "Project status report",
            "keywords": "Q: Function/Test matrix is a type of | A: Project status report"
        },
        {
            "id": 113,
            "text": "Unreachable code would best be found using:",
            "options": [
                "Code reviews",
                "Code inspections",
                "A coverage tool",
                "A test management tool",
                "A static analysis tool"
            ],
            "answer": 4,
            "explanation": "A static analysis tool",
            "keywords": "Q: Unreachable code would best be found using: | A: A static analysis tool"
        },
        {
            "id": 114,
            "text": "Handover of Testware is a part of which Phase",
            "options": [
                "Test Analysis and Design",
                "Test Planning and control",
                "Test Closure Activities",
                "Evaluating exit criteria and reporting"
            ],
            "answer": 2,
            "explanation": "Test Closure Activities",
            "keywords": "Q: Handover of Testware is a part of which | A: Test Closure Activities"
        },
        {
            "id": 115,
            "text": "Majority of system errors occur in the ___ phase",
            "options": [
                "Requirements Phase.",
                "Analysis and Design Phase",
                "Development Phase",
                "Testing Phase"
            ],
            "answer": 0,
            "explanation": "Requirements Phase.",
            "keywords": "Q: Majority of system errors occur in the ___ | A: Requirements Phase"
        },
        {
            "id": 116,
            "text": "Maintenance releases and technical assistance centers are examples of which of the following quality?",
            "options": [
                "External failure",
                "Internal failure",
                "Appraisal",
                "Prevention"
            ],
            "answer": 0,
            "explanation": "External failure",
            "keywords": "Q: Maintenance releases and technical assistance centers are examples | A: External failure"
        },
        {
            "id": 117,
            "text": "One Key reason why developers have difficulty testing their own work is",
            "options": [
                "Lack of technical documentation",
                "Lack of test tools on the market for developers",
                "Lack of training",
                "Lack of Objectivity"
            ],
            "answer": 3,
            "explanation": "Lack of Objectivity",
            "keywords": "Q: One Key reason why developers have difficulty testing | A: Lack of Objectivity"
        },
        {
            "id": 118,
            "text": "One of the following is not a part of white box testing as per BS7925-11 standards.",
            "options": [
                "Random testing",
                "Data Flow testing.",
                "Statement testing",
                "Syntax testing"
            ],
            "answer": 0,
            "explanation": "Random testing",
            "keywords": "Q: One of the following is not a part | A: Random testing"
        },
        {
            "id": 119,
            "text": "Incorrect form of Logic coverage is:",
            "options": [
                "Statement Coverage",
                "Pole Coverage",
                "Condition Coverage",
                "Path Coverage"
            ],
            "answer": 1,
            "explanation": "Pole Coverage",
            "keywords": "Q: Incorrect form of Logic coverage is: | A: Pole Coverage"
        },
        {
            "id": 120,
            "text": "In which phase static tests are used",
            "options": [
                "Requirements",
                "Design",
                "Coding",
                "All of the others"
            ],
            "answer": 3,
            "explanation": "All of the others",
            "keywords": "Q: In which phase static tests are used | A: All of the others"
        },
        {
            "id": 121,
            "text": "Increasing the quality of the software, by better development methods, will affect the time needed for testing (the test phases) by:",
            "options": [
                "Reducing test time",
                "No change",
                "Increasing test time",
                "Can't say"
            ],
            "answer": 0,
            "explanation": "Reducing test time",
            "keywords": "Q: Increasing the quality of the software, by better | A: Reducing test time"
        },
        {
            "id": 122,
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
            "id": 123,
            "text": "In which testing level would you test for defects in the interfaces and interaction between integrated components?",
            "options": [
                "Component testing",
                "Integration testing",
                "System testing",
                "Acceptance testing"
            ],
            "answer": 1,
            "explanation": "Integration testing",
            "keywords": "Q: In which testing level would you test for | A: Integration testing"
        },
        {
            "id": 124,
            "text": "Reviewing the test Basis is a part of which phase",
            "options": [
                "Test Analysis and Design",
                "Test Implementation and execution",
                "Test Closure Activities",
                "Evaluating exit criteria and reporting"
            ],
            "answer": 0,
            "explanation": "Test Analysis and Design",
            "keywords": "Q: Reviewing the test Basis is a part of | A: Test Analysis and Design"
        },
        {
            "id": 125,
            "text": "Peer Reviews are also called as :",
            "options": [
                "Inspection",
                "Walkthrough",
                "Technical Review",
                "Formal Review"
            ],
            "answer": 2,
            "explanation": "Technical Review",
            "keywords": "Q: Peer Reviews are also called as : | A: Technical Review"
        },
        {
            "id": 126,
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
            "id": 127,
            "text": "Performs sufficient testing to evaluate every possible path and condition in the application system. The only test method that guarantees the proper functioning of the application system is called as",
            "options": [
                "Regression Testing",
                "Exhaustive Testing",
                "Basic Path Testing",
                "Branch Testing"
            ],
            "answer": 1,
            "explanation": "Exhaustive Testing",
            "keywords": "Q: Performs sufficient testing to evaluate every possible path | A: Exhaustive Testing"
        },
        {
            "id": 128,
            "text": "PDCA is known as",
            "options": [
                "Plan, Do, Check, Act",
                "Plan, Do, Correct, Act",
                "Plan, Debug, Check, Act",
                "Plan, Do, Check, Accept"
            ],
            "answer": 0,
            "explanation": "Plan, Do, Check, Act",
            "keywords": "Q: PDCA is known as | A: Plan, Do, Check, Act"
        },
        {
            "id": 129,
            "text": "Pick the best definition of quality",
            "options": [
                "Quality is job one",
                "Zero defects",
                "Conformance to requirements",
                "Work as designed"
            ],
            "answer": 2,
            "explanation": "Conformance to requirements",
            "keywords": "Q: Pick the best definition of quality | A: Conformance to requirements"
        },
        {
            "id": 130,
            "text": "Poor software characteristics are",
            "options": [
                "Only Project risks",
                "Only Product risks",
                "Project risks and Product risks",
                "Project risks or Product risks"
            ],
            "answer": 1,
            "explanation": "Only Product risks",
            "keywords": "Q: Poor software characteristics are | A: Only Product risks"
        },
        {
            "id": 131,
            "text": "Use cases can be performed to test",
            "options": [
                "Performance testing",
                "Unit testing",
                "Business scenarios",
                "Static testing"
            ],
            "answer": 2,
            "explanation": "Business scenarios",
            "keywords": "Q: Use cases can be performed to test | A: Business scenarios"
        },
        {
            "id": 132,
            "text": "Structure is unknown for which type of development project",
            "options": [
                "Traditional system development",
                "Iterative development",
                "System maintenance",
                "Purchased/contracted software"
            ],
            "answer": 3,
            "explanation": "Purchased/contracted software",
            "keywords": "Q: Structure is unknown for which type of development | A: Purchased/contracted software"
        },
        {
            "id": 133,
            "text": "Stochastic testing using statistical information or operational profiles uses the following method",
            "options": [
                "Heuristic testing approach",
                "Methodical testing approach",
                "Model based testing approach",
                "Process or standard compliant testing approach"
            ],
            "answer": 2,
            "explanation": "Model based testing approach",
            "keywords": "Q: Stochastic testing using statistical information or operational profiles | A: Model based testing approach"
        },
        {
            "id": 134,
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
            "id": 135,
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
            "id": 136,
            "text": "The specification which describes steps required to operate the system and exercise test cases in order to implement the associated test design",
            "options": [
                "Test Case Specification",
                "Test Design Specification",
                "Test Procedure Specification",
                "None of the others"
            ],
            "answer": 2,
            "explanation": "Test Procedure Specification",
            "keywords": "Q: The specification which describes steps required to operate | A: Test Procedure Specification"
        },
        {
            "id": 137,
            "text": "The IEEE 829 test plan documentation standard contains all of the following, EXCEPT:",
            "options": [
                "Test items",
                "Test deliverables",
                "Test tasks",
                "Test environment",
                "Test specification"
            ],
            "answer": 4,
            "explanation": "Test specification",
            "keywords": "Q: The IEEE 829 test plan documentation standard contains | A: Test specification"
        },
        {
            "id": 138,
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
        },
        {
            "id": 139,
            "text": "The ___ and ___ are used within individual workbenches to produce the right output products.",
            "options": [
                "Tools and techniques",
                "Procedures and standards",
                "Processes and walkthroughs",
                "Reviews and update"
            ],
            "answer": 1,
            "explanation": "Procedures and standards",
            "keywords": "Q: The ___ and ___ are used within individual | A: Procedures and standards"
        },
        {
            "id": 140,
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
            "id": 141,
            "text": "The person who leads the review of the document(s), planning the review, running the meeting and follow-up after the meeting",
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
            "id": 142,
            "text": "Testing activity which is performed to expose defects in the interfaces and in the interaction between integrated components is",
            "options": [
                "System Level Testing",
                "Integration Level Testing",
                "Unit Level Testing",
                "Component Testing"
            ],
            "answer": 1,
            "explanation": "Integration Level Testing",
            "keywords": "Q: Testing activity which is performed to expose defects | A: Integration Level Testing"
        },
        {
            "id": 143,
            "text": "Testing wherein we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
            "options": [
                "Load Testing",
                "Integration Testing",
                "System Testing",
                "Usability Testing"
            ],
            "answer": 0,
            "explanation": "Load Testing",
            "keywords": "Q: Testing wherein we subject the target of the | A: Load Testing"
        },
        {
            "id": 144,
            "text": "Test Case are grouped into Manageable (and scheduled) units are called as",
            "options": [
                "Test Harness",
                "Test Suite",
                "Test Cycle",
                "Test Driver"
            ],
            "answer": 1,
            "explanation": "Test Suite",
            "keywords": "Q: Test Case are grouped into Manageable (and scheduled) | A: Test Suite"
        },
        {
            "id": 145,
            "text": "The Provision and Management of a controlled library containing all the configuration items is called as",
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
            "id": 146,
            "text": "Test Conditions are derived from:",
            "options": [
                "Specifications",
                "Test Cases",
                "Test Data",
                "Test Design"
            ],
            "answer": 0,
            "explanation": "Specifications",
            "keywords": "Q: Test Conditions are derived from: | A: Specifications"
        },
        {
            "id": 147,
            "text": "The vendor contractor to write the initial scripts",
            "options": [
                "Measuring response time",
                "Measuring transaction rates",
                "Recovery testing",
                "Simulating many users",
                "Generating many transactions"
            ],
            "answer": 4,
            "explanation": "Generating many transactions",
            "keywords": "Q: The vendor contractor to write the initial scripts | A: Generating many transactions"
        },
        {
            "id": 148,
            "text": "The process starting with the terminal modules is called:",
            "options": [
                "Top-down integration",
                "Bottom-up integration",
                "None of the others",
                "Module integration"
            ],
            "answer": 1,
            "explanation": "Bottom-up integration",
            "keywords": "Q: The process starting with the terminal modules is | A: Bottom-up integration"
        },
        {
            "id": 149,
            "text": "The Planning phase of a formal review includes which of the followings?",
            "options": [
                "Explaining the objectives",
                "Selecting the personnel, allocating roles.",
                "Follow up",
                "Individual Meeting preparations"
            ],
            "answer": 1,
            "explanation": "Selecting the personnel, allocating roles.",
            "keywords": "Q: The Planning phase of a formal review includes | A: Selecting the personnel, allocating roles"
        },
        {
            "id": 150,
            "text": "The purpose of requirement phase is:",
            "options": [
                "To freeze requirements",
                "To understand user needs",
                "To define the scope of testing",
                "All of the others"
            ],
            "answer": 3,
            "explanation": "All of the others",
            "keywords": "Q: The purpose of requirement phase is: | A: All of the others"
        },
        {
            "id": 151,
            "text": "The inputs for developing a test plan are taken from",
            "options": [
                "Project plan",
                "Business plan",
                "Support plan",
                "None of the others"
            ],
            "answer": 0,
            "explanation": "Project plan",
            "keywords": "Q: The inputs for developing a test plan are | A: Project plan"
        },
        {
            "id": 152,
            "text": "White Box Techniques are also called as:",
            "options": [
                "Structural Testing",
                "Design Based Testing",
                "Error Guessing Technique",
                "Experience Based Technique"
            ],
            "answer": 0,
            "explanation": "Structural Testing",
            "keywords": "Q: White Box Techniques are also called as: | A: Structural Testing"
        },
        {
            "id": 153,
            "text": "We use the output of the requirement analysis, the requirement specification as the input for writing:",
            "options": [
                "User Acceptance Test Cases",
                "Integration Level Test Cases",
                "Unit Level Test Cases",
                "Program specifications"
            ],
            "answer": 0,
            "explanation": "User Acceptance Test Cases",
            "keywords": "Q: We use the output of the requirement analysis, | A: User Acceptance Test Cases"
        },
        {
            "id": 154,
            "text": "With thorough testing it is possible to remove all defects from a program prior to delivery to the customer.",
            "options": [
                "True",
                "False"
            ],
            "answer": 1,
            "explanation": "False",
            "keywords": "Q: With thorough testing it is possible to remove | A: False"
        },
        {
            "id": 155,
            "text": "What is the smallest number of test cases required to Provide 100% branch coverage? If (x > y) x = x + 1; else y = y + 1; while (x > y) { y = x * y; x = x + 1; }",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": 1,
            "explanation": "2",
            "keywords": "Q: the smallest number of test cases required to | A: 2"
        },
        {
            "id": 156,
            "text": "How many tests are required to achieve 100% branch/decision coverage? if width > length then biggest dimension = width else biggest dimension = length end_if The following has been added to the bottom of the code fragment above. print \"Biggest dimension is \" & biggest_dimension print \"Width: \" & width print \"Length: \" & length",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": 1,
            "explanation": "2",
            "keywords": "Q: How many tests are required to achieve 100% | A: 2"
        },
        {
            "id": 157,
            "text": "Which of the following is the component test standard?",
            "options": [
                "IEEE 829",
                "IEEE 610",
                "BS7925-1",
                "BS7925-2"
            ],
            "answer": 3,
            "explanation": "BS7925-2",
            "keywords": "Q: is the component test standard? | A: BS7925-2"
        },
        {
            "id": 158,
            "text": "Which of the following is the standard for the Software product quality",
            "options": [
                "ISO 9126",
                "ISO 829",
                "ISO 1012",
                "ISO 1028"
            ],
            "answer": 0,
            "explanation": "ISO 9126",
            "keywords": "Q: is the standard for the Software product quality | A: ISO 9126"
        },
        {
            "id": 159,
            "text": "For the password field (8-12 alphanumeric characters), which of the following is a valid boundary value?",
            "options": [
                "7 characters",
                "8 characters",
                "13 characters",
                "10 character"
            ],
            "answer": 1,
            "explanation": "8 characters",
            "keywords": "Q: For the password field (8-12 alphanumeric characters), which | A: 8 characters"
        },
        {
            "id": 160,
            "text": "If a candidate is given an exam of 40 questions, should get 25 marks to pass (61%) and should get 80% for distinction, what is equivalence class.",
            "options": [
                "23, 24, 25",
                "0, 12, 25",
                "30, 36, 39",
                "32, 37, 40"
            ],
            "answer": 3,
            "explanation": "32, 37, 40",
            "keywords": "Q: If a candidate is given an exam of | A: 32, 37, 40"
        },
        {
            "id": 161,
            "text": "If the pseudo code below were a programming language, how many tests are required to achieve 100% statement coverage? 1.If x = 3 then 2. Display_messageX; 3.If y = 2 then 4. Display_messageY; 5.Else 6. Display_messageZ; 7.Else 8. Display_messageZ;",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": 1,
            "explanation": "2",
            "keywords": "Q: If the pseudo code below were a programming | A: 2"
        },
        {
            "id": 162,
            "text": "Values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected. Which of the following input values cover all of the equivalence partitions?",
            "options": [
                "10,11,21",
                "3,20,21",
                "3,10,22",
                "10,21,22"
            ],
            "answer": 2,
            "explanation": "3,10,22",
            "keywords": "Q: Values less than 10 are rejected, values between | A: 3,10,22"
        },
        {
            "id": 163,
            "text": "A thermometer measures temperature in whole degrees only. If the temperature falls below 18 degrees, the heating is switched off. It is switched on again when the temperature reaches 21 degrees. What are the best values in degrees to cover all equivalence partitions?",
            "options": [
                "15, 19 and 25",
                "17, 18 and 19",
                "18, 20 and 22",
                "16, 26 and 32"
            ],
            "answer": 0,
            "explanation": "15, 19 and 25",
            "keywords": "Q: A thermometer measures temperature in whole degrees only. | A: 15, 19 and 25"
        },
        {
            "id": 164,
            "text": "A wholesaler sells printer cartridges. The minimum order quantity is 5. There is a 20% discount for orders of 100 or more printer cartridges. You have been asked to prepare test cases using various values for the number of printer cartridges ordered. Which of the following groups contain three test inputs that would be generated using Boundary Value Analysis?",
            "options": [
                "5, 6, 20",
                "4, 5, 80",
                "4, 5, 99",
                "1, 20, 100"
            ],
            "answer": 2,
            "explanation": "4, 5, 99",
            "keywords": "Q: A wholesaler sells printer cartridges. The minimum order | A: 4, 5, 99"
        },
        {
            "id": 165,
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
            "id": 166,
            "text": "A program validates a numeric field as follows: Values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected. Which of the following covers the MOST boundary values?",
            "options": [
                "9,10,11,22",
                "9,10,21,22",
                "10,11,21,22",
                "10,11,20,21"
            ],
            "answer": 1,
            "explanation": "9,10,21,22",
            "keywords": "Q: A program validates a numeric field as follows: | A: 9,10,21,22"
        },
        {
            "id": 167,
            "text": "An input field takes the year of birth between 1900 and 2004. The boundary values for testing this field are",
            "options": [
                "0,1900,2004,2005",
                "1900,2004",
                "1899,1900,2004,2005",
                "1899, 1900, 1901,2003,2004,2005"
            ],
            "answer": 2,
            "explanation": "1899,1900,2004,2005",
            "keywords": "Q: An input field takes the year of birth | A: 1899,1900,2004,2005"
        },
        {
            "id": 168,
            "text": "Design a test case using Equivalence Partitioning for a function that calculates discounts based on customer age (Select all that apply):",
            "options": [
                "1-12 years: 50% discount",
                "13-64 years: 20% discount",
                "65 years and above: 30% discount",
                "None of the others"
            ],
            "answer": 0,
            "explanation": "1-12 years: 50% discount · 13-64 years: 20% discount · 65 years and above: 30% discount",
            "keywords": "Q: Design a test case using Equivalence Partitioning for | A: 1-12 years: 50% discount · 13-64 years: 20% discount · 65 years and above: 30% discount",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 169,
            "text": "Order numbers on a stock control system can range between 10000 and 99999 inclusive. Which of the following inputs might be a result of designing tests for only valid equivalence classes and valid boundaries:",
            "options": [
                "1000,5000,99999",
                "9999,50000,100000",
                "10000,50000,99999",
                "10000,99999",
                "9999,10000,50000,99999,100000"
            ],
            "answer": 2,
            "explanation": "10000,50000,99999",
            "keywords": "Q: Order numbers on a stock control system can | A: 10000,50000,99999"
        },
        {
            "id": 170,
            "text": "The Switch is switched off once the temperature falls below 18 and then it is turned on when the temperature is more than 21. Identify the Equivalence values which belong to the same class. When the temperature is more than 21.",
            "options": [
                "12,16,22",
                "24,27,17",
                "22,23,24",
                "14,15,19"
            ],
            "answer": 2,
            "explanation": "22,23,24",
            "keywords": "Q: The Switch is switched off once the temperature | A: 22,23,24"
        },
        {
            "id": 171,
            "text": "Which of the following could be a reason for a failure? 1. Testing fault 2. Software fault 3. Design fault 4. Environment Fault 5. Documentation Fault",
            "options": [
                "2 is a valid reason; 1,3,4 & 5 are not",
                "1,2,3,4 are valid reasons; 5 is not",
                "1,2,3 are valid reasons; 4 & 5 are not",
                "All of them are valid reasons for failure"
            ],
            "answer": 3,
            "explanation": "All of them are valid reasons for failure",
            "keywords": "Q: could be a reason for a failure? 1. | A: All of them are valid reasons for failure"
        },
        {
            "id": 172,
            "text": "Which of the following types of defects is use case testing MOST LIKELY to uncover? i) Defects in the process flows during real-world use of the system. ii) Defects in the interface parameters in integration testing. iii) Integration defects caused by the interaction and interference of different components. iv) Defects in the system as it transitions between one state and another.",
            "options": [
                "i, iii.",
                "i, iii.",
                "iii, iv.",
                "i, ii"
            ],
            "answer": 0,
            "explanation": "i, iii.",
            "keywords": "Q: types of defects is use case testing MOST | A: i, iii"
        },
        {
            "id": 173,
            "text": "Which of the following are the main activities of the work product review process? 1. Planning 2. Initiate review 3. Select reviewers 4. Individual review 5. Review meeting 6. Evaluating review findings against exit criteria 7. Issue communication and analysis 8. Fixing and reporting",
            "options": [
                "1, 2, 4, 7, 8",
                "2, 3, 4, 5, 8",
                "1, 2, 3, 5, 7",
                "1, 4, 5, 6, 7"
            ],
            "answer": 0,
            "explanation": "1, 2, 4, 7, 8",
            "keywords": "Q: are the main activities of the work product | A: 1, 2, 4, 7, 8"
        },
        {
            "id": 174,
            "text": "Which of the following statements are TRUE for Technical Review? I. Reviewers should be technical peers of the author, and technical experts in the same or other area II. Review meeting is typically led by the author III. Purposes gaining consensus, detecting potential defects IV. Scribe is mandatory V. Individual preparation before the review meeting is optional",
            "options": [
                "I, II and III",
                "II, III and IV",
                "I, III and IV",
                "II and V"
            ],
            "answer": 2,
            "explanation": "I, III and IV",
            "keywords": "Q: statements are TRUE for Technical Review? I. Reviewers | A: I, III and IV"
        },
        {
            "id": 175,
            "text": "Which of the following activities should be performed during the selection and implementation of a testing tool? i) Investigate the organisation's test process. ii) Conduct a proof of concept. iii) Implement the selected tool on a project behind schedule to save time. iv) Identify coaching and mentoring requirements for the use of the selected tool.",
            "options": [
                "i, ii, iii",
                "ii, iii, iv",
                "i, iii, iv",
                "i, ii, iv"
            ],
            "answer": 3,
            "explanation": "i, ii, iv",
            "keywords": "Q: activities should be performed during the selection and | A: i, ii, iv"
        },
        {
            "id": 176,
            "text": "Which of the following benefits are MOST likely to be achieved by using test tools? i) Easy to access information about tests and testing. ii) Reduced maintenance of testware. iii) Easy and cheap to implement. iv) Greater consistency of tests.",
            "options": [
                "ii and iv",
                "ii and iii",
                "i and iv",
                "i and iii"
            ],
            "answer": 2,
            "explanation": "i and iv",
            "keywords": "Q: benefits are MOST likely to be achieved by | A: i and iv"
        },
        {
            "id": 177,
            "text": "Which of the following are characteristic of regression testing? i) Regression testing is run ONLY once ii) Regression testing is used after fixes have been made iii) Regression testing is often automated iv) Regression tests need not be maintained",
            "options": [
                "ii, iv",
                "ii, iii",
                "i, iii, iv",
                "iii"
            ],
            "answer": 1,
            "explanation": "ii, iii",
            "keywords": "Q: are characteristic of regression testing? i) Regression testing | A: ii, iii"
        },
        {
            "id": 178,
            "text": "Which of the following helps in monitoring the Test Progress: i. Percentage of Test Case Execution ii. Percentage of work done in test environment preparation iii. Defect Information e.g. defect density, defects found and fixed iv. The size of the testing Team and skills of the engineers",
            "options": [
                "iv is correct and i,ii,iii are incorrect",
                "i,ii,iii are correct and iv is incorrect",
                "i,ii are correct and iii,iv are incorrect",
                "i,iv are correct and ii, iii are incorrect"
            ],
            "answer": 1,
            "explanation": "i,ii,iii are correct and iv is incorrect",
            "keywords": "Q: helps in monitoring the Test Progress: i. Percentage | A: i,ii,iii are correct and iv is incorrect"
        },
        {
            "id": 179,
            "text": "Which of the following is the task of a Test Lead / Leader. i. Interaction with the Test Tool Vendor to identify best ways to leverage test tool on the project ii. Write Test Summary Reports based on the information gathered during testing iii. Decide what should be automated, to what degree and how. iv. Create the Test Specifications",
            "options": [
                "i, ii, iii is true and iv is false",
                "ii, iii, iv is true and i is false",
                "i is true and ii, iii, iv are false",
                "iii and iv is correct and i and ii are incorrect"
            ],
            "answer": 0,
            "explanation": "i, ii, iii is true and iv is false",
            "keywords": "Q: is the task of a Test Lead / | A: i, ii, iii is true and iv is false"
        },
        {
            "id": 180,
            "text": "Which of the following is a part of Test Closure Activities? i. Checking which planned deliverables have been delivered ii. Defect report analysis. iii. Finalizing and archiving testware. iv. Analyzing lessons",
            "options": [
                "i, ii, iv are true and iii is false",
                "i, ii, iii are true and iv is false",
                "i, iii, iv are true and ii is false",
                "All of them are true"
            ],
            "answer": 3,
            "explanation": "All of them are true",
            "keywords": "Q: is a part of Test Closure Activities? i. | A: All of them are true"
        },
        {
            "id": 181,
            "text": "Which of the following is the task of a Tester? i) Interaction with the Test Tool Vendor to identify best ways to leverage test tool on the project. ii) Prepare and acquire Test Data iii) Implement Tests on all test levels, execute and log the tests. iv) Create the Test Specifications",
            "options": [
                "i, ii, iii is true and iv is false",
                "ii, iii, iv is true and i is false",
                "i is true and ii, iii, iv are false",
                "iii and iv is correct and i and ii are incorrect"
            ],
            "answer": 1,
            "explanation": "ii, iii, iv is true and i is false",
            "keywords": "Q: is the task of a Tester? i) Interaction | A: ii, iii, iv is true and i is false"
        },
        {
            "id": 182,
            "text": "Which of the following is true about Formal Review or Inspection: i) Led by Trained Moderator (not the author). ii) No Pre Meeting Preparations iii) Formal Follow up process. iv) Main Objective is to find defects",
            "options": [
                "ii is true and i,iii,iv are false",
                "i,iii,iv are true and ii is false",
                "i,iii,iv are false and ii is true",
                "iii is true and i,ii,iv are false"
            ],
            "answer": 1,
            "explanation": "i,iii,iv are true and ii is false",
            "keywords": "Q: is true about Formal Review or Inspection: i) | A: i,iii,iv are true and ii is false"
        },
        {
            "id": 183,
            "text": "Which activities form part of test planning? i) Developing test cases. ii) Defining the overall approach to testing. iii) Assigning resources. iv) Building the test environment v) Writing test conditions.",
            "options": [
                "i, ii & iv are true, iii & v are false.",
                "ii & iii are true, i, iv & v are false.",
                "iv & v are true, i, ii & iii are false.",
                "i, ii & iii are true iv & v are false."
            ],
            "answer": 1,
            "explanation": "ii & iii are true, i, iv & v are false.",
            "keywords": "Q: Which activities form part of test planning? i) | A: ii & iii are true, i, iv & v are false"
        },
        {
            "id": 184,
            "text": "Who are the persons involved in a Formal Review i) Manager ii) Moderator iii) Scribe/Recorder iv) Assistant Manager",
            "options": [
                "i, ii, iii, iv are true",
                "i, ii, iii are true and iv is false.",
                "ii, iii, iv are true and i is false.",
                "i, iv are true and ii, iii are false."
            ],
            "answer": 1,
            "explanation": "i, ii, iii are true and iv is false.",
            "keywords": "Q: are the persons involved in a Formal Review | A: i, ii, iii are true and iv is false"
        },
        {
            "id": 185,
            "text": "A Test Plan Outline contains which of the following: i. Test Items ii. Test Scripts iii. Test Deliverables iv. Responsibilities",
            "options": [
                "i, ii, iii are true and iv is false",
                "i, iii, iv are true and ii is false",
                "ii, iii are true and i and iv are false",
                "i, ii are false and iii, iv are true"
            ],
            "answer": 1,
            "explanation": "i, iii, iv are true and ii is false",
            "keywords": "Q: A Test Plan Outline contains which of the | A: i, iii, iv are true and ii is false"
        },
        {
            "id": 186,
            "text": "Consider the following statements about early test design: i. Early test design can prevent fault multiplication ii. Faults found during early test design are more expensive to fix iii. Early test design can find faults iv. Early test design can cause changes to the requirements v. Early test design takes more effort",
            "options": [
                "i, iii & iv are true, ii & v are false",
                "iii is true, i, ii, iv & v are false",
                "iii & iv are true, i, ii & v are false",
                "i, iii, iv & v are true, ii is false",
                "i & iii are true, ii, iv & v are false"
            ],
            "answer": 0,
            "explanation": "i, iii & iv are true, ii & v are false",
            "keywords": "Q: Consider the following statements about early test design: | A: i, iii & iv are true, ii & v are false"
        },
        {
            "id": 187,
            "text": "Deciding How much testing is enough should take into account: i. Level of Risk including Technical and Business product and project risk ii. Project constraints such as time and budget iii. Size of Testing Team iv. Size of the Development Team",
            "options": [
                "i, ii, iii are true and iv is false",
                "i, iv are true and ii is false",
                "i, ii are true and iii, iv are false",
                "ii, iii, iv are true and i is false"
            ],
            "answer": 2,
            "explanation": "i, ii are true and iii, iv are false",
            "keywords": "Q: Deciding How much testing is enough should take | A: i, ii are true and iii, iv are false"
        },
        {
            "id": 188,
            "text": "Defects discovered by static analysis tools include: i. Variables that are never used. ii. Security vulnerabilities. iii. Programming Standard Violations iv. Uncalled functions and procedures",
            "options": [
                "i, ii, iii, iv is correct",
                "iii is correct i, ii, iv are incorrect",
                "i, ii, iii and iv are incorrect",
                "iv, ii is correct"
            ],
            "answer": 0,
            "explanation": "i, ii, iii, iv is correct",
            "keywords": "Q: Defects discovered by static analysis tools include: i. | A: i, ii, iii, iv is correct"
        },
        {
            "id": 189,
            "text": "Exit Criteria may consist of i. Thoroughness measures, such as coverage of code, functionality or risk ii. Estimates of Defect density or reliability measures. iii. Residual risk such as defects not fixed or lack of test coverage in certain areas iv. Verifying the Test Environment.",
            "options": [
                "iv is correct and i, ii, iii are incorrect",
                "i, ii, iii is correct and iv is incorrect",
                "ii is correct and i, iii, iv are incorrect",
                "iii and iv are correct and i, ii are incorrect"
            ],
            "answer": 1,
            "explanation": "i, ii, iii is correct and iv is incorrect",
            "keywords": "Q: Exit Criteria may consist of i. Thoroughness measures, | A: i, ii, iii is correct and iv is incorrect"
        },
        {
            "id": 190,
            "text": "From a Testing perspective, what are the MAIN purposes of Configuration Management? i. Identifying the version of software under test. ii. Controlling the version of testware items. iii. Developing new testware items. iv. Tracking changes to testware items. v. Analysing the need for new testware items.",
            "options": [
                "ii, iv and v",
                "ii, iii and iv",
                "i, ii and iv",
                "i, iii and v"
            ],
            "answer": 2,
            "explanation": "i, ii and iv",
            "keywords": "Q: From a Testing perspective, what are the MAIN | A: i, ii and iv"
        },
        {
            "id": 191,
            "text": "Features of White Box Testing Technique: i. We use explicit knowledge of the internal workings of the item being tested to select the test data. ii. Uses specific knowledge of programming code to examine outputs and assumes that the tester knows the path of logic in a unit or a program. iii. Checking for the performance of the application iv. Also checks for functionality",
            "options": [
                "i, ii are true and iii and iv are false",
                "iii is true and i, ii, iv are false",
                "ii, iii is true and i, iv is false",
                "iii and iv are true and i, ii are false"
            ],
            "answer": 0,
            "explanation": "i, ii are true and iii and iv are false",
            "keywords": "Q: Features of White Box Testing Technique: i. We | A: i, ii are true and iii and iv are false"
        },
        {
            "id": 192,
            "text": "Match every stage of the software Development Life cycle with the Testing Life cycle: i. Hi-level design ii. Code iii. Low-level design iv. Business requirements",
            "options": [
                "Unit tests",
                "Acceptance tests",
                "System tests",
                "Integration tests",
                "i-d, ii-a, iii-c, iv-b",
                "i-c, ii-d, iii-a, iv-b",
                "i-b, ii-a, iii-d, iv-c",
                "i-c, ii-a, iii-d, iv-b"
            ],
            "answer": 3,
            "explanation": "Integration tests",
            "keywords": "Q: Match every stage of the software Development Life | A: Integration tests"
        },
        {
            "id": 193,
            "text": "Validation involves which of the following i. Helps to check the Quality of the Built Product ii. Helps to check that we have built the right product iii. Helps in developing the product iv. Monitoring tool wastage and obsoleteness",
            "options": [
                "Options i, ii, iii, iv are true",
                "ii is true and i, iii, iv are false",
                "i, ii, iii are true and iv is false",
                "iii is true and i, ii, iv are false"
            ],
            "answer": 1,
            "explanation": "ii is true and i, iii, iv are false",
            "keywords": "Q: Validation involves which of the following i. Helps | A: ii is true and i, iii, iv are false"
        },
        {
            "id": 194,
            "text": "Verification involves which of the following i. Helps to check the Quality of the built product ii. Helps to check that we have built the right product iii. Helps in developing the product iv. Monitoring tool wastage and obsoleteness",
            "options": [
                "Options i, ii, iii, iv are true",
                "i is true and ii, iii, iv are false",
                "i, ii, iii are true and iv is false",
                "ii is true and i, iii, iv are false"
            ],
            "answer": 1,
            "explanation": "i is true and ii, iii, iv are false",
            "keywords": "Q: Verification involves which of the following i. Helps | A: i is true and ii, iii, iv are false"
        },
        {
            "id": 195,
            "text": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively iii. Management supports a good review process iv. There is an emphasis on learning and process improvement",
            "options": [
                "ii, iii, iv are correct and i is incorrect",
                "iii, i, iv is correct and ii is incorrect",
                "i, iii, iv, ii is incorrect",
                "ii is correct"
            ],
            "answer": 0,
            "explanation": "ii, iii, iv are correct and i is incorrect",
            "keywords": "Q: Success Factors for a review include: i. Each | A: ii, iii, iv are correct and i is incorrect"
        },
        {
            "id": 196,
            "text": "Some tools are geared more for developer use. For the 5 tools listed, which statement BEST details those for developers. i. Performance testing tools ii. Coverage measurement tools iii. Test comparators iv. Dynamic analysis tools v. Incident management tools",
            "options": [
                "i, iii and iv are more for developers",
                "ii and iv are more for developers",
                "ii, iii and iv are more for developers",
                "ii and iii are more for developers"
            ],
            "answer": 1,
            "explanation": "ii and iv are more for developers",
            "keywords": "Q: Some tools are geared more for developer use. | A: ii and iv are more for developers"
        },
        {
            "id": 197,
            "text": "Testing should be stopped when:",
            "options": [
                "All the defined tests have been executed",
                "Time has run out",
                "All faults have been fixed correctly",
                "Both (i) and (iii)",
                "It depends on the risks for the system being tested"
            ],
            "answer": 4,
            "explanation": "It depends on the risks for the system being tested",
            "keywords": "Q: Testing should be stopped when: | A: It depends on the risks"
        },
        {
            "id": 198,
            "text": "Test planning has which of the following major tasks? i. Determining the scope and risks, and identifying the objectives of testing. ii. Determining the test approach (techniques, test items, coverage, identifying and interfacing the teams involved in testing, testware). iii. Reviewing the Test Basis (such as requirements, architecture, design, interface). iv. Determining the exit criteria.",
            "options": [
                "i, ii, iv are true and iii is false",
                "i, iv are true and ii is false",
                "i, ii are true and iii, iv are false",
                "ii, iii, iv are true and i is false"
            ],
            "answer": 0,
            "explanation": "i, ii, iv are true and iii is false",
            "keywords": "Q: Test planning has which of the following major | A: i, ii, iv are true and iii is false"
        },
        {
            "id": 199,
            "text": "The selection of a test approach should consider the context: i. Risk of Failure of the Project, hazards to the product and risks of product failure to humans ii. Skills and experience of the people in the proposed technique, tools and methods iii. The objective of the testing endeavor and the mission of the testing team. iv. The size of the testing Team",
            "options": [
                "i, ii, iii, iv are true",
                "i, ii, iii are true and iv is false",
                "ii, iii, iv are true and i is false",
                "i, iv are true and ii, iii are false"
            ],
            "answer": 0,
            "explanation": "i, ii, iii, iv are true",
            "keywords": "Q: The selection of a test approach should consider | A: i, ii, iii, iv are true"
        },
        {
            "id": 200,
            "text": "Test Implementation and execution has which of the following major tasks? i. Developing and prioritizing test cases, creating test data, writing test procedures and optionally preparing the test harnesses and writing automated test scripts. ii. Creating the test suite from the test cases for efficient test execution. iii. Verifying that the test environment has been set up correctly. iv. Determining the exit criteria.",
            "options": [
                "i, ii, iii are true and iv is false",
                "i, iv are true and ii is false",
                "i, ii are true and iii, iv are false",
                "ii, iii, iv are true and i is false"
            ],
            "answer": 0,
            "explanation": "i, ii, iii are true and iv is false",
            "keywords": "Q: Test Implementation and execution has which of the | A: i, ii, iii are true and iv is false"
        },
        {
            "id": 201,
            "text": "The Phases of formal review process is mentioned below arrange them in the correct order. i) Planning ii) Review Meeting iii) Rework iv) Individual Preparations v) Kick Off vi) Follow Up",
            "options": [
                "i, ii, iii, iv, v, vi",
                "vi, i, ii, iii, iv, v",
                "i, v, iv, ii, iii, vi",
                "i, ii, iii, v, iv, vi"
            ],
            "answer": 2,
            "explanation": "i, v, iv, ii, iii, vi",
            "keywords": "Q: The Phases of formal review process is mentioned | A: i, v, iv, ii, iii, vi"
        },
        {
            "id": 202,
            "text": "Reviews, static analysis and dynamic testing have the same objective",
            "options": [
                "Identifying defects.",
                "Fixing defects.",
                "Identifying defects and Fixing defects.",
                "None of the others"
            ],
            "answer": 0,
            "explanation": "Identifying defects.",
            "keywords": "Q: Reviews, static analysis and dynamic testing have the | A: Identifying defects"
        },
        {
            "id": 203,
            "text": "The principle of Cyclomatic complexity, considering L as edges or links, N as nodes, P as independent paths",
            "options": [
                "L - N + 2P",
                "N - L + 2P",
                "N - L + P",
                "N - L + P"
            ],
            "answer": 0,
            "explanation": "L - N + 2P",
            "keywords": "Q: The principle of Cyclomatic complexity, considering L as | A: L - N + 2P"
        },
        {
            "id": 204,
            "text": "Match the following terms and statements. 1. Decision Table Testing 2. Decision Testing 3. State Transition Testing 4. Exploratory Testing W. Testing carried out within time boxes to achieve specific test objectives, possibly to complement structured testing. X. A test technique used which may be used to verify different system responses depending on current conditions or previous history. Y. A test technique which combines combinations of inputs that might not otherwise have been exercised during testing. Z. A form of control flow testing based on decision outcomes.",
            "options": [
                "1Y, 2Z, 3X, 4W",
                "1X, 2W, 3Z, 4Y",
                "1Z, 2X, 3W, 4Y",
                "1Z, 2Y, 3X, 4W"
            ],
            "answer": 0,
            "explanation": "1Y, 2Z, 3X, 4W",
            "keywords": "Q: Match the following terms and statements. 1. Decision | A: 1Y, 2Z, 3X, 4W"
        },
        {
            "id": 205,
            "text": "Consider the following: Pick up and read the newspaper Look at what is on television If there is a program that you are interested in watching then Switch the television on and watch the program Otherwise Continue reading the newspaper If there is a crossword in the newspaper then try and complete the crossword",
            "options": [
                "SC = 1 and DC = 1",
                "SC = 1 and DC = 2",
                "SC = 1 and DC = 3",
                "SC = 2 and DC = 2",
                "SC = 2 and DC = 3"
            ],
            "answer": 4,
            "explanation": "SC = 2 and DC = 3",
            "keywords": "Q: Consider the following: Pick up and read the | A: SC = 2 and DC = 3"
        },
        {
            "id": 206,
            "text": "Considering the code provided, which is true about the minimal quantity of test cases necessary for complete statement and branch/decision coverage? Read A Read B IF A + B > 50 THEN Print \"Sum two age\" ENDIF IF B > 20 THEN Print \"B is of adult age\" ENDIF",
            "options": [
                "1 test for statement coverage, 3 for branch coverage",
                "1 test for statement coverage, 1 for branch coverage",
                "1 test for statement coverage, 2 for branch coverage",
                "2 tests for statement coverage, 2 for branch coverage"
            ],
            "answer": 2,
            "explanation": "1 test for statement coverage, 2 for branch coverage",
            "keywords": "Q: Considering the code provided, which is true about | A: 1 test for statement coverage"
        },
        {
            "id": 207,
            "text": "what tests in the following will you perform? A piece of software has been given 1) Test the area's most critical to business processes 2) Test the areas where faults will be maximum 3) Test the easiest functionalities",
            "options": [
                "1 & 2 are true and 3 is false",
                "1, 2 & 3 are true",
                "1 is true, 2 & 3 are false",
                "1 & 2 are false, 3 is true"
            ],
            "answer": 0,
            "explanation": "1 & 2 are true and 3 is false",
            "keywords": "Q: what tests in the following will you perform? | A: 1 & 2 are true and 3 is false"
        },
        {
            "id": 208,
            "text": "Regression testing should be performed: v) Every week w) After the software has changed x) As often as possible y) When the environment has changed z) When the project manager says",
            "options": [
                "v & w are true, x - z are false",
                "w, x & y are true, v & z are false",
                "w & y are true, v, x & z are false",
                "w is true, v, x, y and z are false",
                "All of them are true"
            ],
            "answer": 2,
            "explanation": "w & y are true, v, x & z are false",
            "keywords": "Q: Regression testing should be performed: v) Every week | A: w & y are true, v, x & z are false"
        },
        {
            "id": 209,
            "text": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring",
            "options": [
                "Measures of tracking process",
                "Effort required to perform activities",
                "Reallocation of resources",
                "1-b, 2-c, 3-a",
                "1-b, 2-a, 3-c",
                "1-c, 2-a, 3-b",
                "1-a, 2-b, 3-c"
            ],
            "answer": 0,
            "explanation": "Measures of tracking process",
            "keywords": "Q: Match the following: 1. Test estimation 2. Test | A: Measures of tracking process"
        },
        {
            "id": 210,
            "text": "Which expression best matches the following characteristics of review processes: 1. Led by author 2. Undocumented 3. No management participation 4. Led by a trained moderator or leader 5. Uses entry exit criteria s) Inspection t) Peer review u) Informal review v) Walkthrough",
            "options": [
                "s=4, t=3, u=2 and 5, v=1",
                "s=4 and 5, t=3, u=2, v=1",
                "s=1 and 5, t=3, u=2, v=4",
                "s=5, t=4, u=3, v=1 and 2",
                "s=4 and 5, t=1, u=2, v=3"
            ],
            "answer": 1,
            "explanation": "s=4 and 5, t=3, u=2, v=1",
            "keywords": "Q: Which expression best matches the following characteristics of | A: s=4 and 5, t=3, u=2, v=1"
        },
        {
            "id": 211,
            "text": "Minimum Test Required for Statement Coverage: Disc = 0 Order-qty = 0 Read Order-qty If Order-qty >= 20 then Disc = 0.05 If Order-qty >= 100 then Disc = 0.1 End if End if",
            "options": [
                "Statement coverage is 4",
                "Statement coverage is 1",
                "Statement coverage is 3",
                "Statement coverage is 2"
            ],
            "answer": 1,
            "explanation": "Statement coverage is 1",
            "keywords": "Q: Minimum Test Required for Statement Coverage: Disc = | A: Statement coverage is 1"
        },
        {
            "id": 212,
            "text": "Given the following: Switch PC on Start \"outlook\" IF outlook appears THEN Send an email Close outlook",
            "options": [
                "1 test for statement coverage, 1 for branch coverage",
                "1 test for statement coverage, 2 for branch coverage",
                "1 test for statement coverage, 3 for branch coverage",
                "2 tests for statement coverage, 2 for branch coverage",
                "2 tests for statement coverage, 3 for branch coverage"
            ],
            "answer": 1,
            "explanation": "1 test for statement coverage, 2 for branch coverage",
            "keywords": "Q: Given the following: Switch PC on Start \"outlook\" | A: 1 test for statement coverage"
        },
        {
            "id": 213,
            "text": "Given the following code, which is true: IF A > B THEN C=A-B ELSE C=A+B ENDIF Read D IF C = D Then Print \"Error\" ENDIF",
            "options": [
                "1 test for statement coverage, 3 for branch coverage",
                "2 tests for statement coverage, 2 for branch coverage",
                "2 tests for statement coverage, 3 for branch coverage",
                "3 tests for statement coverage, 3 for branch coverage",
                "3 tests for statement coverage, 2 for branch coverage"
            ],
            "answer": 2,
            "explanation": "2 tests for statement coverage, 3 for branch coverage",
            "keywords": "Q: Given the following code, which is true: IF | A: 2 tests for statement coverage"
        },
        {
            "id": 214,
            "text": "Consider the following state transition diagram of a switch. Which of the following represents an invalid state transition?",
            "options": [
                "ON to OFF",
                "OFF to ON",
                "FAULT to ON",
                "ON to FAULT"
            ],
            "answer": 2,
            "explanation": "FAULT to ON",
            "keywords": "Q: Consider the following state transition diagram of a | A: FAULT to ON"
        },
        {
            "id": 215,
            "text": "Given the following state transition diagram. Which of the following series of state transitions contains an INVALID transition which may indicate a fault in the system design?",
            "options": [
                "Login Browse Basket Checkout Basket Logout",
                "Login Browse Basket Checkout Pay Logout",
                "Login Browse Basket Checkout Basket Checkout Pay Logout",
                "Login Browse Basket Browse Basket Checkout Pay Logout"
            ],
            "answer": 0,
            "explanation": "Login Browse Basket Checkout Basket Logout",
            "keywords": "Q: Given the following state transition diagram. Which of | A: Login Browse Basket Checkout Basket Logout"
        },
        {
            "id": 216,
            "text": "What is the expected result for each of the following test cases?",
            "options": [
                "Citibank card member, holding a Silver room",
                "Non Citibank-member, holding a Platinum room",
                "A - Don't offer any upgrade, B - Don't offer any upgrade",
                "A - Offer upgrade to Silver, B - Offer upgrade to Silver",
                "A - Don't offer any upgrade, B - Offer upgrade to Gold",
                "A - Offer upgrade to Gold, B - Don't offer any upgrade"
            ],
            "answer": 5,
            "explanation": "A - Offer upgrade to Gold, B - Don't offer any upgrade",
            "keywords": "Q: the expected result for each of the following | A: A - Offer upgrade to Gold"
        },
        {
            "id": 217,
            "text": "What is the main goal of static testing?",
            "options": [
                "To execute the software and identify defects",
                "To review documents and source code without executing the software",
                "To test the software with a focus on its user interface",
                "To validate the software's performance under stress"
            ],
            "answer": 1,
            "explanation": "To review documents and source code without executing the software",
            "keywords": "Q: the main goal of static testing? | A: To review documents and source"
        },
        {
            "id": 218,
            "text": "What is an advantage of using data-driven scripts in test automation?",
            "options": [
                "They do not require external data.",
                "They separate test data from scripts, enhancing flexibility.",
                "They are simpler to maintain than linear scripts.",
                "They eliminate the need for scripting knowledge."
            ],
            "answer": 1,
            "explanation": "They separate test data from scripts, enhancing flexibility.",
            "keywords": "Q: an advantage of using data-driven scripts in test | A: They separate test data from scripts"
        },
        {
            "id": 219,
            "text": "What is the main purpose of use case testing?",
            "options": [
                "To identify defects in process flows related to typical use of the system.",
                "To identify defects in the connections between components.",
                "To identify defects in the system related to extreme scenarios.",
                "To identify defects in the system related to the use of unapproved programming practices."
            ],
            "answer": 0,
            "explanation": "To identify defects in process flows related to typical use of the system.",
            "keywords": "Q: the main purpose of use case testing? | A: To identify defects in process"
        },
        {
            "id": 220,
            "text": "What is the main purpose of specification-based testing techniques?",
            "options": [
                "To evaluate the system's behavior from an external perspective",
                "To assess the internal structure of the software",
                "To improve the software design",
                "To test the software without any formal requirements"
            ],
            "answer": 0,
            "explanation": "To evaluate the system's behavior from an external perspective",
            "keywords": "Q: the main purpose of specification-based testing techniques? | A: To evaluate the system's behavior"
        },
        {
            "id": 221,
            "text": "What is a primary difference between static and dynamic testing techniques?",
            "options": [
                "Static testing involves executing the code, while dynamic does not",
                "Static testing does not involve executing the code, while dynamic does",
                "Static testing is only performed by developers, while dynamic is not",
                "Static testing cannot find defects, while dynamic can"
            ],
            "answer": 1,
            "explanation": "Static testing does not involve executing the code, while dynamic does",
            "keywords": "Q: a primary difference between static and dynamic testing | A: Static testing does not involve executing the code"
        },
        {
            "id": 222,
            "text": "What is static testing?",
            "options": [
                "Software work products are examined manually, or with a set of tools, but not executed.",
                "Software is executed using a set of input values and its output is then examined and compared to what is expected.",
                "Execution is applied as a technique to detect defects and to determine quality attributes of the code.",
                "Testing can start after dynamic testing."
            ],
            "answer": 0,
            "explanation": "Software work products are examined manually, or with a set of tools, but not executed.",
            "keywords": "Q: static testing? | A: Software work products are examined manually"
        },
        {
            "id": 223,
            "text": "What is dynamic testing?",
            "options": [
                "Software work products are examined manually, or with a set of tools, but not executed.",
                "Software is executed using a set of input values and its output is then examined and compared to what is expected.",
                "Testing can start early in the life cycle, early feedback on quality issues can be established.",
                "Testing can start early validation of user requirements and not just late in the life cycle during acceptance testing."
            ],
            "answer": 1,
            "explanation": "Software is executed using a set of input values and its output is then examined and compared to what is expected.",
            "keywords": "Q: dynamic testing? | A: Software is executed using a"
        },
        {
            "id": 224,
            "text": "What is the typical sequence of testing activities in the Waterfall model?",
            "options": [
                "System testing, integration testing, acceptance testing",
                "Acceptance testing, system testing, integration testing",
                "Integration testing, system testing, acceptance testing",
                "Component testing, system testing, integration testing"
            ],
            "answer": 2,
            "explanation": "Integration testing, system testing, acceptance testing",
            "keywords": "Q: the typical sequence of testing activities in the | A: Integration testing, system testing, acceptance testing"
        },
        {
            "id": 225,
            "text": "What is the role of performance testing in system testing?",
            "options": [
                "To verify that the system behaves correctly under load",
                "To ensure that the system meets functional requirements",
                "To check the accuracy of data processing",
                "To confirm that the system is bug-free"
            ],
            "answer": 0,
            "explanation": "To verify that the system behaves correctly under load",
            "keywords": "Q: the role of performance testing in system testing? | A: To verify that the system"
        },
        {
            "id": 226,
            "text": "What is the main advantage of using the V-model in software development?",
            "options": [
                "It eliminates the need for testing.",
                "It integrates testing throughout the development phases.",
                "It is less costly and time-consuming compared to other models.",
                "It focuses on post-development testing only."
            ],
            "answer": 1,
            "explanation": "It integrates testing throughout the development phases.",
            "keywords": "Q: the main advantage of using the V-model in | A: It integrates testing throughout the development phases"
        },
        {
            "id": 227,
            "text": "What is the purpose of unit testing in software development?",
            "options": [
                "To test the entire system as a whole",
                "To test individual units or components in isolation",
                "To validate the software against user requirements",
                "To perform performance testing"
            ],
            "answer": 1,
            "explanation": "To test individual units or components in isolation",
            "keywords": "Q: the purpose of unit testing in software development? | A: To test individual units or"
        },
        {
            "id": 228,
            "text": "What is a characteristic of non-functional testing?",
            "options": [
                "It is always performed after functional testing.",
                "It focuses on how well the system performs certain actions.",
                "It is concerned solely with what the system does.",
                "It does not include performance testing."
            ],
            "answer": 1,
            "explanation": "It focuses on how well the system performs certain actions.",
            "keywords": "Q: a characteristic of non-functional testing? | A: It focuses on how well"
        },
        {
            "id": 229,
            "text": "What is an effect of poor communication between testers and developers?",
            "options": [
                "It enhances the efficiency of the development and testing processes.",
                "It may lead to misunderstandings and reduced software quality.",
                "It improves the independence of the testing function.",
                "It has no effect as long as testing is done independently."
            ],
            "answer": 1,
            "explanation": "It may lead to misunderstandings and reduced software quality.",
            "keywords": "Q: an effect of poor communication between testers and | A: It may lead to misunderstandings"
        },
        {
            "id": 230,
            "text": "What is the significance of context in testing according to the principles?",
            "options": [
                "It is irrelevant since all testing follows the same standard.",
                "It is critical as testing approaches should vary based on the specific context.",
                "It suggests that testing should always follow the same international standards.",
                "Context is only important in large, complex systems."
            ],
            "answer": 1,
            "explanation": "It is critical as testing approaches should vary based on the specific context.",
            "keywords": "Q: the significance of context in testing according to | A: It is critical as testing"
        },
        {
            "id": 231,
            "text": "What is the significance of defining scope in a test plan?",
            "options": [
                "It outlines the geographical areas where the product will be sold",
                "It determines who the end-users will be",
                "It clarifies what is included and excluded from testing",
                "It sets the price points for various market segments"
            ],
            "answer": 2,
            "explanation": "It clarifies what is included and excluded from testing",
            "keywords": "Q: the significance of defining scope in a test | A: It clarifies what is included"
        },
        {
            "id": 232,
            "text": "What is the key focus of state transition testing?",
            "options": [
                "The changes in state within an application based on varying input conditions",
                "The visual aspects of the user interface",
                "The stability of application under peak load",
                "The compatibility of the software with various operating systems"
            ],
            "answer": 0,
            "explanation": "The changes in state within an application based on varying input conditions",
            "keywords": "Q: the key focus of state transition testing? | A: The changes in state within"
        },
        {
            "id": 233,
            "text": "What is Integration testing?",
            "options": [
                "It tests interfaces between components, interactions to different parts of a system such as an operating system, file system and hardware or interfaces between systems.",
                "It is unit, module and program testing, searches for defects in, and verifies the functioning of software that are separately testable.",
                "It is concerned with the behavior of the whole system/product as defined by the scope of a development project or product.",
                "The system will be delivered to the user or customer for testing."
            ],
            "answer": 0,
            "explanation": "It tests interfaces between components, interactions to different parts of a system such as an operating system, file system and hardware or interfaces between systems.",
            "keywords": "Q: Integration testing? | A: It tests interfaces between components"
        },
        {
            "id": 234,
            "text": "What is the purpose of a walkthrough?",
            "options": [
                "To finalize the document under review",
                "To educate participants and gather feedback",
                "To detect critical defects",
                "To automate review processes"
            ],
            "answer": 1,
            "explanation": "To educate participants and gather feedback",
            "keywords": "Q: the purpose of a walkthrough? | A: To educate participants and gather feedback"
        },
        {
            "id": 235,
            "text": "What is the 'Pesticide Paradox' in testing?",
            "options": [
                "Testing all combinations is impossible.",
                "Same tests over time detect fewer issues",
                "Testing must be exhaustive to find all bugs.",
                "Defects tend to cluster in specific modules."
            ],
            "answer": 1,
            "explanation": "Same tests over time detect fewer issues",
            "keywords": "Q: the 'Pesticide Paradox' in testing? | A: Same tests over time detect fewer issues"
        },
        {
            "id": 236,
            "text": "What is the primary objective of functional testing?",
            "options": [
                "To assess the system's non-functional characteristics like performance.",
                "To verify that the software functions according to the specified requirements.",
                "To evaluate the system's capacity to handle high loads.",
                "To check the internal code structure of the software."
            ],
            "answer": 1,
            "explanation": "To verify that the software functions according to the specified requirements.",
            "keywords": "Q: the primary objective of functional testing? | A: To verify that the software"
        },
        {
            "id": 237,
            "text": "What is the role of regression testing in maintenance testing?",
            "options": [
                "To ensure that new features disrupt existing functionalities.",
                "To verify that bug fixes and enhancements do not introduce new defects into existing functionalities.",
                "To check the functionality of new hardware only.",
                "To focus testing solely on new features."
            ],
            "answer": 1,
            "explanation": "To verify that bug fixes and enhancements do not introduce new defects into existing functionalities.",
            "keywords": "Q: the role of regression testing in maintenance testing? | A: To verify that bug fixes"
        },
        {
            "id": 238,
            "text": "What is the most effective way to use testing to improve quality?",
            "options": [
                "By focusing on areas of the software most likely to have defects",
                "By performing minimal testing on all features",
                "By only testing the new features of the software",
                "By outsourcing testing to reduce costs"
            ],
            "answer": 0,
            "explanation": "By focusing on areas of the software most likely to have defects",
            "keywords": "Q: the most effective way to use testing to | A: By focusing on areas of"
        },
        {
            "id": 239,
            "text": "What is the primary benefit of understanding the psychological factors in testing?",
            "options": [
                "It allows for complete automation of the testing process.",
                "It enhances the interaction and effectiveness of the testing team.",
                "It eliminates the need for quality assurance.",
                "It simplifies compliance with software standards."
            ],
            "answer": 1,
            "explanation": "It enhances the interaction and effectiveness of the testing team.",
            "keywords": "Q: the primary benefit of understanding the psychological factors | A: It enhances the interaction and"
        },
        {
            "id": 240,
            "text": "What is the main purpose of Informal review",
            "options": [
                "Inexpensive way to get some benefit",
                "Find defects",
                "Learning, gaining understanding, effect finding",
                "Discuss, make decisions, solve technical problems"
            ],
            "answer": 0,
            "explanation": "Inexpensive way to get some benefit",
            "keywords": "Q: the main purpose of Informal review | A: Inexpensive way to get some benefit"
        },
        {
            "id": 241,
            "text": "What is an equivalence partition (also known as an equivalence class)?",
            "options": [
                "A set of test cases for testing classes of objects",
                "An input or output range of values such that only one value in the range becomes a test case",
                "An input or output range of values such that each value in the range becomes a test case",
                "An input or output range of values such that every tenth value in the range becomes a test case"
            ],
            "answer": 1,
            "explanation": "An input or output range of values such that only one value in the range becomes a test case",
            "keywords": "Q: an equivalence partition (also known as an equivalence | A: An input or output range"
        },
        {
            "id": 242,
            "text": "What is the main reason for testing software before releasing it?",
            "options": [
                "To show that system will work after release",
                "To decide when the software is of sufficient quality to release",
                "To find as many bugs as possible before release",
                "To give information for a risk based decision about release"
            ],
            "answer": 3,
            "explanation": "To give information for a risk based decision about release",
            "keywords": "Q: the main reason for testing software before releasing | A: To give information for a"
        },
        {
            "id": 243,
            "text": "What is the purpose of test completion criteria in a test plan:",
            "options": [
                "To know when a specific test has finished its execution",
                "To ensure that the test case specification is complete",
                "To set the criteria used in generating test inputs",
                "To know when test planning is complete",
                "To plan when to stop testing"
            ],
            "answer": 4,
            "explanation": "To plan when to stop testing",
            "keywords": "Q: the purpose of test completion criteria in a | A: To plan when to stop testing"
        },
        {
            "id": 244,
            "text": "What is the KEY difference between preventative and reactive approaches to testing?",
            "options": [
                "Preventative tests and reactive tests are designed as early as possible.",
                "Preventative tests are designed early; reactive tests are designed after the software has been produced.",
                "Preventative testing is always analytical; reactive testing is always heuristic.",
                "Preventative tests are designed after the software has been produced; reactive tests are designed early in response to review comments."
            ],
            "answer": 1,
            "explanation": "Preventative tests are designed early; reactive tests are designed after the software has been produced.",
            "keywords": "Q: the KEY difference between preventative and reactive approaches | A: Preventative tests are designed early;"
        },
        {
            "id": 245,
            "text": "What is the difference between testing software developed by contractor outside your country, versus testing software developed by a contractor within your country?",
            "options": [
                "Does not meet people needs",
                "Cultural difference",
                "Loss of control over reallocation of resources",
                "Relinquishments of control"
            ],
            "answer": 1,
            "explanation": "Cultural difference",
            "keywords": "Q: the difference between testing software developed by contractor | A: Cultural difference"
        },
        {
            "id": 246,
            "text": "What is the MAIN objective when reviewing a software deliverable?",
            "options": [
                "To identify potential application failures by use of a test specification.",
                "To identify defects in any software work product.",
                "To identify spelling mistakes in a requirements specification.",
                "To identify standards inconsistencies in the code."
            ],
            "answer": 1,
            "explanation": "To identify defects in any software work product.",
            "keywords": "Q: the MAIN objective when reviewing a software deliverable? | A: To identify defects in any"
        },
        {
            "id": 247,
            "text": "What is the MAIN benefit of designing tests early in the life cycle?",
            "options": [
                "It is cheaper than designing tests during the test phases.",
                "It helps prevent defects from being introduced into the code.",
                "Tests designed early are more effective than tests designed later.",
                "It saves time during the testing phases when testers are busy."
            ],
            "answer": 1,
            "explanation": "It helps prevent defects from being introduced into the code.",
            "keywords": "Q: the MAIN benefit of designing tests early in | A: It helps prevent defects from"
        },
        {
            "id": 248,
            "text": "What does the term \"failure\" mean in the context of testing?",
            "options": [
                "A mistake made by a developer.",
                "A defect in the software that is found during testing.",
                "An incorrect behavior of the system in operation.",
                "A missed requirement during design."
            ],
            "answer": 2,
            "explanation": "An incorrect behavior of the system in operation.",
            "keywords": "Q: the term \"failure\" mean in the context of | A: An incorrect behavior of the"
        },
        {
            "id": 249,
            "text": "What does the term \"Big-bang model\" imply about the approach to software development?",
            "options": [
                "Detailed and extensive planning",
                "Integration of all components at once without prior testing",
                "Regular testing from the beginning of the project",
                "User involvement is mandatory"
            ],
            "answer": 1,
            "explanation": "Integration of all components at once without prior testing",
            "keywords": "Q: the term \"Big-bang model\" imply about the approach | A: Integration of all components at"
        },
        {
            "id": 250,
            "text": "What determines the level of risk?",
            "options": [
                "The cost of dealing with an adverse event if it occurs.",
                "The probability that an adverse event will occur.",
                "The amount of testing planned before release of a system.",
                "The likelihood of an adverse event and the impact of the event."
            ],
            "answer": 3,
            "explanation": "The likelihood of an adverse event and the impact of the event.",
            "keywords": "Q: What determines the level of risk? | A: The likelihood of an adverse"
        },
        {
            "id": 251,
            "text": "What should be a key outcome of the evaluating exit criteria and reporting phase?",
            "options": [
                "Decisions regarding the continuation or stoppage of testing",
                "Finalizing the software release without further review",
                "Planning for the next development cycle",
                "Developing new test tools and methods"
            ],
            "answer": 0,
            "explanation": "Decisions regarding the continuation or stoppage of testing",
            "keywords": "Q: What should be a key outcome of the | A: Decisions regarding the continuation or"
        },
        {
            "id": 252,
            "text": "What essential skill does exploratory testing require from a tester?",
            "options": [
                "Ability to strictly adhere to test scripts",
                "Specialization in performance and stress testing",
                "Proficiency in programming and automated tools",
                "Capacity to plan and execute tests simultaneously"
            ],
            "answer": 3,
            "explanation": "Capacity to plan and execute tests simultaneously",
            "keywords": "Q: What essential skill does exploratory testing require from | A: Capacity to plan and execute tests simultaneously"
        },
        {
            "id": 253,
            "text": "What factor influences the structure of a test organization within a project?",
            "options": [
                "The personal preferences of the test team",
                "The social dynamics of the development team",
                "The risk level and complexity of the project",
                "The geographical location of the company"
            ],
            "answer": 2,
            "explanation": "The risk level and complexity of the project",
            "keywords": "Q: What factor influences the structure of a test | A: The risk level and complexity of the project"
        },
        {
            "id": 254,
            "text": "Which of the following activities is included in the kick-off phase of a formal review?",
            "options": [
                "Explaining the objective",
                "Fixing defects found typically done by author",
                "Follow up",
                "Individual Meeting preparations"
            ],
            "answer": 0,
            "explanation": "Explaining the objective",
            "keywords": "Q: activities is included in the kick-off phase of | A: Explaining the objective"
        },
        {
            "id": 255,
            "text": "Which of the following sequences BEST shows the main activities of the work product review process?",
            "options": [
                "Initiate review - Reviewer selection - Individual review - Issue communication and analysis - Rework",
                "Planning & preparation - Overview meeting - Individual review - Fixing and Reporting",
                "Preparation - Issue detection - Issue communication and analysis - Rework - Report",
                "Planning - Initiate review - Individual review - Issue communication and analysis - Fixing and Reporting"
            ],
            "answer": 3,
            "explanation": "Planning - Initiate review - Individual review - Issue communication and analysis - Fixing and Reporting",
            "keywords": "Q: sequences BEST shows the main activities of the | A: Planning - Initiate review -"
        },
        {
            "id": 256,
            "text": "Which of the following is correct?",
            "options": [
                "Impact analysis assesses the effect on the system of a defect found in regression testing.",
                "Impact analysis assesses the effect of a new person joining the regression test team.",
                "Impact analysis assesses whether or not a defect found in regression testing has been fixed correctly.",
                "Impact analysis assesses the effect of a change to the system to determine how much regression testing to do."
            ],
            "answer": 3,
            "explanation": "Impact analysis assesses the effect of a change to the system to determine how much regression testing to do.",
            "keywords": "Q: is correct? | A: Impact analysis assesses the effect"
        },
        {
            "id": 257,
            "text": "Which of the following will be the best definition for Testing:",
            "options": [
                "The goal / purpose of testing is to demonstrate that the program works.",
                "The purpose of testing is to demonstrate that the program is defect free.",
                "The purpose of testing is to demonstrate that the program does what it is supposed to do.",
                "Testing is executing Software for the purpose of finding defects."
            ],
            "answer": 3,
            "explanation": "Testing is executing Software for the purpose of finding defects.",
            "keywords": "Q: will be the best definition for Testing: | A: Testing is executing Software for"
        },
        {
            "id": 258,
            "text": "Which of the following statements best describes the difference between severity and priority in software testing?",
            "options": [
                "Severity refers to the importance of a defect to end-users, while priority refers to the impact on the development team.",
                "Severity represents the likelihood of a defect occurring, while priority determines the urgency of fixing a defect.",
                "Severity refers to the impact of a defect on the system, while priority indicates the order in which defects should be fixed.",
                "Severity indicates the importance of a requirement, while priority determines the criticality of a defect."
            ],
            "answer": 2,
            "explanation": "Severity refers to the impact of a defect on the system, while priority indicates the order in which defects should be fixed.",
            "keywords": "Q: statements best describes the difference between severity and | A: Severity refers to the impact"
        },
        {
            "id": 259,
            "text": "Which of the following BEST describes the difference between an inspection and a walkthrough?",
            "options": [
                "Both inspections and walkthroughs are led by the author.",
                "An inspection is led by a moderator and a walkthrough is led by the author.",
                "Both inspections and walkthroughs are led by a trained moderator.",
                "A walkthrough is led by the author. The author is not present during inspections."
            ],
            "answer": 1,
            "explanation": "An inspection is led by a moderator and a walkthrough is led by the author.",
            "keywords": "Q: BEST describes the difference between an inspection and | A: An inspection is led by"
        },
        {
            "id": 260,
            "text": "Which of the following is a MAJOR task of test implementation and execution?",
            "options": [
                "Measuring and analyzing results.",
                "Reporting discrepancies as incidents.",
                "Identifying test conditions or test requirements.",
                "Assessing if more tests are needed."
            ],
            "answer": 1,
            "explanation": "Reporting discrepancies as incidents.",
            "keywords": "Q: is a MAJOR task of test implementation and | A: Reporting discrepancies as incidents"
        },
        {
            "id": 261,
            "text": "Which of the following is a MAJOR task of test planning?",
            "options": [
                "Scheduling test analysis and design tasks.",
                "Initiating corrective actions.",
                "Monitoring progress and test coverage.",
                "Measuring and analyzing results."
            ],
            "answer": 0,
            "explanation": "Scheduling test analysis and design tasks.",
            "keywords": "Q: is a MAJOR task of test planning? | A: Scheduling test analysis and design tasks"
        },
        {
            "id": 262,
            "text": "Which of the following is MOST important in the selection of a test approach?",
            "options": [
                "Availability of tools to support the proposed techniques.",
                "The budget allowed for training in proposed techniques.",
                "Available skills and experience in the proposed techniques.",
                "The willingness of the test team to learn new techniques."
            ],
            "answer": 2,
            "explanation": "Available skills and experience in the proposed techniques.",
            "keywords": "Q: is MOST important in the selection of a | A: Available skills and experience in"
        },
        {
            "id": 263,
            "text": "Which of the following statements are true?",
            "options": [
                "Faults in program specifications are the most expensive to fix",
                "Faults in code are the most expensive to fix",
                "Faults in requirements are the most expensive to fix",
                "Faults in designs are the most expensive to fix"
            ],
            "answer": 2,
            "explanation": "Faults in requirements are the most expensive to fix",
            "keywords": "Q: statements are true? | A: Faults in requirements are the"
        },
        {
            "id": 264,
            "text": "Which of the following has highest level of independence in which test cases are:",
            "options": [
                "Designed by persons who write the software under test",
                "Designed by a person from a different section",
                "Designed by a person from a different organization",
                "Designed by another person"
            ],
            "answer": 2,
            "explanation": "Designed by a person from a different organization",
            "keywords": "Q: has highest level of independence in which test | A: Designed by a person from"
        },
        {
            "id": 265,
            "text": "Which of the following is a benefit of performing reviews in the software development process?",
            "options": [
                "Decreasing the amount of documentation required",
                "Eliminating the need for testing the software",
                "Identifying defects early and thereby reducing rework costs",
                "Extending the software development lifecycle"
            ],
            "answer": 2,
            "explanation": "Identifying defects early and thereby reducing rework costs",
            "keywords": "Q: is a benefit of performing reviews in the | A: Identifying defects early and thereby"
        },
        {
            "id": 266,
            "text": "Which of the following best describes the role of a test manager?",
            "options": [
                "Direct involvement in software programming",
                "Management of the testing process and resources",
                "Exclusive focus on software design",
                "Handling customer support and feedback"
            ],
            "answer": 1,
            "explanation": "Management of the testing process and resources",
            "keywords": "Q: best describes the role of a test manager? | A: Management of the testing process and resources"
        },
        {
            "id": 267,
            "text": "Which of the following strategies can help minimize psychological conflict between testers and developers? (Select all that apply)",
            "options": [
                "Fostering mutual respect between roles.",
                "Ensuring clear objectives for testing.",
                "Feedback belittles the coder with errors found.",
                "Encouraging collaboration on defect resolution."
            ],
            "answer": 0,
            "explanation": "Fostering mutual respect between roles. · Ensuring clear objectives for testing. · Encouraging collaboration on defect resolution.",
            "keywords": "Q: strategies can help minimize psychological conflict between testers | A: Fostering mutual respect between roles · Ensuring clear objectives for testing · Encouraging collaboration on defect resolution",
            "answers": [
                0,
                1,
                3
            ]
        },
        {
            "id": 268,
            "text": "Which of the following is most likely to be performed by developers?",
            "options": [
                "Technical review of a functional specification.",
                "Walkthrough of a requirements document.",
                "Informal review of a program specification.",
                "Static analysis of a software model."
            ],
            "answer": 3,
            "explanation": "Static analysis of a software model.",
            "keywords": "Q: is most likely to be performed by developers? | A: Static analysis of a software model"
        },
        {
            "id": 269,
            "text": "Which of the following is the main purpose of the integration strategy for integration testing in the small?",
            "options": [
                "To ensure that all of the small modules are tested adequately",
                "To ensure that the system interfaces to other systems and networks",
                "To specify which modules to combine when and how many at once",
                "To ensure that the integration testing can be performed by a small team",
                "To specify how the software should be divided into modules"
            ],
            "answer": 2,
            "explanation": "To specify which modules to combine when and how many at once",
            "keywords": "Q: is the main purpose of the integration strategy | A: To specify which modules to"
        },
        {
            "id": 270,
            "text": "Which is the best thing about the regression test?",
            "options": [
                "Regression test is only run once.",
                "Regression test will always be automated.",
                "Regression test will check unchanged areas of the software to see if they have been affected.",
                "Regression test will check changed areas of the software to see if they have been affected."
            ],
            "answer": 2,
            "explanation": "Regression test will check unchanged areas of the software to see if they have been affected.",
            "keywords": "Q: Which is the best thing about the regression | A: Regression test will check unchanged"
        },
        {
            "id": 271,
            "text": "Which approach helps in maintaining good relationships between testers and developers?",
            "options": [
                "Minimizing interaction between testers and developers",
                "Encouraging competition on defect findings",
                "Providing constructive feedback on defects",
                "Focusing solely on automated tests"
            ],
            "answer": 2,
            "explanation": "Providing constructive feedback on defects",
            "keywords": "Q: Which approach helps in maintaining good relationships between | A: Providing constructive feedback on defects"
        },
        {
            "id": 272,
            "text": "Which statement best reflects the role of a test leader compared to a tester?",
            "options": [
                "A test leader focuses on test execution while testers focus on test planning",
                "Test leaders and testers perform exactly the same roles within a project",
                "A test leader manages the testing process while testers focus on test execution",
                "Testers manage the project while test leaders provide technical support"
            ],
            "answer": 2,
            "explanation": "A test leader manages the testing process while testers focus on test execution",
            "keywords": "Q: Which statement best reflects the role of a | A: A test leader manages the"
        },
        {
            "id": 273,
            "text": "Which scenario is ideal for using exploratory testing?",
            "options": [
                "When there is limited time and no detailed specifications",
                "When detailed specifications are available",
                "When the software is fully stable",
                "When testing under controlled and stable conditions"
            ],
            "answer": 0,
            "explanation": "When there is limited time and no detailed specifications",
            "keywords": "Q: Which scenario is ideal for using exploratory testing? | A: When there is limited time"
        },
        {
            "id": 274,
            "text": "Which one of the following is MOST likely to be a benefit of test execution tools?",
            "options": [
                "It is easy to create regression tests",
                "It is easy to maintain version control of test assets",
                "It is easy to design tests for security testing",
                "It is easy to run regression tests"
            ],
            "answer": 3,
            "explanation": "It is easy to run regression tests",
            "keywords": "Q: is MOST likely to be a benefit of | A: It is easy to run regression tests"
        },
        {
            "id": 275,
            "text": "Which metric would help monitor the progress of test execution?",
            "options": [
                "Number of open defects compared to closed defects.",
                "Number of passed requirements per code line.",
                "Project manager's confidence level.",
                "Test script reusability percentage."
            ],
            "answer": 0,
            "explanation": "Number of open defects compared to closed defects.",
            "keywords": "Q: Which metric would help monitor the progress of | A: Number of open defects compared"
        },
        {
            "id": 276,
            "text": "When reporting faults found to developers, testers should be:",
            "options": [
                "As polite, constructive and helpful as possible",
                "Firm about insisting that a bug is not a \"feature\" if it should be fixed",
                "Diplomatic, sensitive to the way they may react to criticism",
                "All of the others"
            ],
            "answer": 3,
            "explanation": "All of the others",
            "keywords": "Q: reporting faults found to developers, testers should be: | A: All of the others"
        },
        {
            "id": 277,
            "text": "When to stop Testing?",
            "options": [
                "Stop when scheduled time for testing expires",
                "Stop if 75% of the pre-defined number of errors is detected.",
                "Stop when all the test cases execute with detecting few errors.",
                "None of the others"
            ],
            "answer": 0,
            "explanation": "Stop when scheduled time for testing expires",
            "keywords": "Q: to stop Testing? | A: Stop when scheduled time for testing expires"
        },
        {
            "id": 278,
            "text": "When a new testing tool is purchased, it should be used first by:",
            "options": [
                "A small team to establish the best way to use the tool",
                "Everyone who may eventually have some use for the tool",
                "The independent testing team",
                "The managers to see what projects it should be used in",
                "The vendor contractor to write the initial scripts"
            ],
            "answer": 0,
            "explanation": "A small team to establish the best way to use the tool",
            "keywords": "Q: a new testing tool is purchased, it should | A: A small team to establish"
        },
        {
            "id": 279,
            "text": "When would exploratory testing be most beneficial during a testing cycle?",
            "options": [
                "After receiving comprehensive training in the application.",
                "When detailed error logs from previous tests are available.",
                "When testing needs to be dynamic and adapt to new findings.",
                "Only in conjunction with user acceptance testing."
            ],
            "answer": 2,
            "explanation": "When testing needs to be dynamic and adapt to new findings.",
            "keywords": "Q: would exploratory testing be most beneficial during a | A: When testing needs to be"
        },
        {
            "id": 280,
            "text": "When we test or review a product, what are we looking for?",
            "options": [
                "We are looking for errors and fixing them.",
                "We are looking for defects in the product and thus are critical of it.",
                "We are looking for difference between the system and the requirement.",
                "We are looking for the mistakes of the requirement."
            ],
            "answer": 2,
            "explanation": "We are looking for difference between the system and the requirement.",
            "keywords": "Q: we test or review a product, what are | A: We are looking for difference"
        },
        {
            "id": 281,
            "text": "Where may functional testing be performed?",
            "options": [
                "At system and acceptance testing levels only.",
                "At all test levels.",
                "At all levels above integration testing.",
                "At the acceptance testing level only."
            ],
            "answer": 1,
            "explanation": "At all test levels.",
            "keywords": "Q: may functional testing be performed? | A: At all test levels"
        },
        {
            "id": 282,
            "text": "How does early testing benefit the software development process?",
            "options": [
                "By delaying defect detection until after release",
                "By identifying defects only at the final stages",
                "By finding defects early when they are cheaper to fix",
                "By increasing the overall cost of testing"
            ],
            "answer": 2,
            "explanation": "By finding defects early when they are cheaper to fix",
            "keywords": "Q: early testing benefit the software development process? | A: By finding defects early when"
        },
        {
            "id": 283,
            "text": "How much testing is enough?",
            "options": [
                "Exhaustive testing is possible.",
                "Testing everything (all combinations of inputs and preconditions).",
                "We use risks and priorities to focus testing efforts.",
                "Full testing."
            ],
            "answer": 2,
            "explanation": "We use risks and priorities to focus testing efforts.",
            "keywords": "Q: How much testing is enough? | A: We use risks and priorities"
        },
        {
            "id": 284,
            "text": "How does stress testing differ from load testing?",
            "options": [
                "Stress testing examines system performance under peak loads, while load testing focuses on typical conditions",
                "Stress testing is concerned with usability under stress, while load testing measures performance thresholds",
                "Stress testing evaluates system behavior beyond normal operational capacity, while load testing verifies normal usage conditions"
            ],
            "answer": 2,
            "explanation": "Stress testing evaluates system behavior beyond normal operational capacity, while load testing verifies normal usage conditions",
            "keywords": "Q: stress testing differ from load testing? | A: Stress testing evaluates system behavior"
        },
        {
            "id": 285,
            "text": "How do reviews support software quality assurance?",
            "options": [
                "By focusing solely on end-user needs",
                "By providing a way to check compliance with standards",
                "By testing software functionality through execution",
                "By replacing the need for project management"
            ],
            "answer": 1,
            "explanation": "By providing a way to check compliance with standards",
            "keywords": "Q: reviews support software quality assurance? | A: By providing a way to"
        },
        {
            "id": 286,
            "text": "How do technical reviews differ from informal reviews?",
            "options": [
                "Technical reviews are less structured and more ad-hoc",
                "Technical reviews require the presence of software architects",
                "Technical reviews are led by a trained moderator and follow a defined process",
                "Informal reviews do not involve developers"
            ],
            "answer": 2,
            "explanation": "Technical reviews are led by a trained moderator and follow a defined process",
            "keywords": "Q: technical reviews differ from informal reviews? | A: Technical reviews are led by"
        },
        {
            "id": 287,
            "text": "Why is the test environment set-up included in test implementation?",
            "options": [
                "It is only relevant during test case design",
                "It is part of the test closure activities",
                "It is used for developing test cases",
                "The environment needs to be ready for executing test cases"
            ],
            "answer": 3,
            "explanation": "The environment needs to be ready for executing test cases",
            "keywords": "Q: the test environment set-up included in test implementation? | A: The environment needs to be"
        },
        {
            "id": 288,
            "text": "Why is impact analysis important in maintenance testing?",
            "options": [
                "It determines the effect of a new marketing campaign",
                "It is used to decide the new features to be added to the system",
                "It assesses how changes might affect the existing system components",
                "It helps in redesigning the software interface"
            ],
            "answer": 2,
            "explanation": "It assesses how changes might affect the existing system components",
            "keywords": "Q: impact analysis important in maintenance testing? | A: It assesses how changes might"
        },
        {
            "id": 289,
            "text": "Why is decision coverage important in white-box testing?",
            "options": [
                "It measures the software's performance metrics",
                "It verifies the compatibility of new code with existing systems",
                "It focuses on the user interface aspects of the software",
                "It guarantees that all branches in decision points are executed"
            ],
            "answer": 3,
            "explanation": "It guarantees that all branches in decision points are executed",
            "keywords": "Q: decision coverage important in white-box testing? | A: It guarantees that all branches"
        },
        {
            "id": 290,
            "text": "Why is equivalence partitioning particularly effective in test case design?",
            "options": [
                "It requires thorough knowledge of the internal structure of the system",
                "It divides input data into valid and invalid partitions to simplify testing",
                "It focuses solely on the output of the software",
                "It is the best method for performance testing"
            ],
            "answer": 1,
            "explanation": "It divides input data into valid and invalid partitions to simplify testing",
            "keywords": "Q: equivalence partitioning particularly effective in test case design? | A: It divides input data into"
        },
        {
            "id": 291,
            "text": "Why are rules and checklists used during inspections?",
            "options": [
                "To reduce the time spent on discussions",
                "To ensure consistency and thoroughness in defect identification",
                "To allow participants to avoid preparation",
                "To document defects for legal compliance"
            ],
            "answer": 1,
            "explanation": "To ensure consistency and thoroughness in defect identification",
            "keywords": "Q: rules and checklists used during inspections? | A: To ensure consistency and thoroughness"
        },
        {
            "id": 292,
            "text": "A reliable system will be one that:",
            "options": [
                "Is unlikely to be completed on schedule",
                "Is unlikely to cause a failure",
                "Is likely to be fault-free",
                "Is likely to be liked by the users"
            ],
            "answer": 1,
            "explanation": "Is unlikely to cause a failure",
            "keywords": "Q: A reliable system will be one that: | A: Is unlikely to cause a failure"
        },
        {
            "id": 293,
            "text": "A test design technique is:",
            "options": [
                "A process for selecting test cases",
                "A process for determining expected outputs",
                "A way to measure the quality of software",
                "A way to measure in a test plan what has to be done."
            ],
            "answer": 0,
            "explanation": "A process for selecting test cases",
            "keywords": "Q: A test design technique is: | A: A process for selecting test cases"
        },
        {
            "id": 294,
            "text": "A company recently purchased a commercial off-the-shelf application to automate their bill-paying process. They now plan to run an acceptance test against the package prior to putting it into production. Which of the following is their most likely reason for testing?",
            "options": [
                "To build confidence in the application.",
                "To detect bugs in the application.",
                "To gather evidence for a lawsuit.",
                "To train the users."
            ],
            "answer": 0,
            "explanation": "To build confidence in the application.",
            "keywords": "Q: A company recently purchased a commercial off-the-shelf application | A: To build confidence in the application"
        },
        {
            "id": 295,
            "text": "A project that is in the implementation phase is six weeks behind schedule. The delivery date for the product is four months away. The project is not allowed to slip the delivery date or compromise on the quality standards established for this product. Which of the following actions would bring this project back on schedule?",
            "options": [
                "Eliminate some of the requirements that have not yet been implemented.",
                "Add more engineers to the project to make up for lost work.",
                "Ask the current developers to work overtime until the lost work is recovered.",
                "Hire more software quality assurance personnel."
            ],
            "answer": 0,
            "explanation": "Eliminate some of the requirements that have not yet been implemented.",
            "keywords": "Q: A project that is in the implementation phase | A: Eliminate some of the requirements"
        },
        {
            "id": 296,
            "text": "An incident logging system",
            "options": [
                "Only records defects",
                "Is of limited value",
                "Is a valuable source of project information during testing if it contains all incidents",
                "Should be used only by the test team."
            ],
            "answer": 2,
            "explanation": "Is a valuable source of project information during testing if it contains all incidents",
            "keywords": "Q: An incident logging system | A: Is a valuable source of"
        },
        {
            "id": 297,
            "text": "Benefits of Independent Testing",
            "options": [
                "Independent testers are much more qualified than Developers",
                "Independent testers see other and different defects and are unbiased.",
                "Independent Testers cannot identify defects.",
                "Independent Testers can test better than developers"
            ],
            "answer": 1,
            "explanation": "Independent testers see other and different defects and are unbiased.",
            "keywords": "Q: Benefits of Independent Testing | A: Independent testers see other and"
        },
        {
            "id": 298,
            "text": "Coverage measurement",
            "options": [
                "Is nothing to do with testing",
                "Is a partial measure of test thoroughness",
                "Branch coverage should be mandatory for all software",
                "Can only be applied at unit or module testing, not at system testing"
            ],
            "answer": 1,
            "explanation": "Is a partial measure of test thoroughness",
            "keywords": "Q: Coverage measurement | A: Is a partial measure of test thoroughness"
        },
        {
            "id": 299,
            "text": "During the software development process, at what point can the test process start?",
            "options": [
                "When the code is complete.",
                "When the design is complete.",
                "When the software requirements have been approved.",
                "When the first code module is ready for unit testing"
            ],
            "answer": 2,
            "explanation": "When the software requirements have been approved.",
            "keywords": "Q: During the software development process, at what point | A: When the software requirements have been approved"
        },
        {
            "id": 300,
            "text": "Error guessing is:",
            "options": [
                "An appropriate way of deriving system tests.",
                "Only used if good requirements are not available.",
                "Only used when good requirements are available.",
                "The most appropriate way of deriving system tests."
            ],
            "answer": 0,
            "explanation": "An appropriate way of deriving system tests.",
            "keywords": "Q: Error guessing is: | A: An appropriate way of deriving system tests"
        },
        {
            "id": 301,
            "text": "Error guessing is best used",
            "options": [
                "As the first approach to deriving test cases",
                "After more formal techniques have been applied",
                "By inexperienced testers",
                "After the system has gone live",
                "Only by end users"
            ],
            "answer": 1,
            "explanation": "After more formal techniques have been applied",
            "keywords": "Q: Error guessing is best used | A: After more formal techniques have been applied"
        },
        {
            "id": 302,
            "text": "Expected results are:",
            "options": [
                "Only important in system testing",
                "Only used in component testing",
                "Never specified in advance",
                "Most useful when specified in advance",
                "Derived from the code"
            ],
            "answer": 3,
            "explanation": "Most useful when specified in advance",
            "keywords": "Q: Expected results are: | A: Most useful when specified in advance"
        },
        {
            "id": 303,
            "text": "Impact Analysis helps to decide:",
            "options": [
                "How much regression testing should be done.",
                "Exit Criteria",
                "How many more test cases need to written",
                "Different Tools to perform Regression Testing"
            ],
            "answer": 0,
            "explanation": "How much regression testing should be done.",
            "keywords": "Q: Impact Analysis helps to decide: | A: How much regression testing should be done"
        },
        {
            "id": 304,
            "text": "Inspections can find all the following except",
            "options": [
                "Variables not defined in the code",
                "Spelling and grammar faults in the documents",
                "Requirements that have been omitted from the design documents",
                "How much of the code has been covered"
            ],
            "answer": 3,
            "explanation": "How much of the code has been covered",
            "keywords": "Q: Inspections can find all the following except | A: How much of the code has been covered"
        },
        {
            "id": 305,
            "text": "If an expected result is not specified then:",
            "options": [
                "We cannot run the test",
                "It may be difficult to repeat the test",
                "It may be difficult to determine if the test has passed or failed",
                "We cannot automate the user inputs"
            ],
            "answer": 2,
            "explanation": "It may be difficult to determine if the test has passed or failed",
            "keywords": "Q: If an expected result is not specified then: | A: It may be difficult to"
        },
        {
            "id": 306,
            "text": "Integration testing in the large involves:",
            "options": [
                "Testing the system when combined with other systems.",
                "Testing a sub-system using stubs and drivers",
                "Testing a system with a large number of users",
                "Combing software components and testing them in one go."
            ],
            "answer": 0,
            "explanation": "Testing the system when combined with other systems.",
            "keywords": "Q: Integration testing in the large involves: | A: Testing the system when combined"
        },
        {
            "id": 307,
            "text": "Important consequences of the impossibility of complete testing are:",
            "options": [
                "We can never be certain that the program is bug free.",
                "We have no definite stopping point for testing, which makes it easier for some managers to argue for very little testing.",
                "We have no easy answer for what testing tasks should always be required, because every task takes time that could be spent on other high importance tasks.",
                "All of the others."
            ],
            "answer": 3,
            "explanation": "All of the others.",
            "keywords": "Q: Important consequences of the impossibility of complete testing | A: All of the others"
        },
        {
            "id": 308,
            "text": "In error guessing, what is the tester primarily relying on to identify potential defects?",
            "options": [
                "Formal specifications and requirements",
                "Randomly generated test cases",
                "Their own experience, intuition, and domain knowledge",
                "The feedback from automated testing tools"
            ],
            "answer": 2,
            "explanation": "Their own experience, intuition, and domain knowledge",
            "keywords": "Q: In error guessing, what is the tester primarily | A: Their own experience, intuition, and domain knowledge"
        },
        {
            "id": 309,
            "text": "In a software project, what is the purpose of test closure activities?",
            "options": [
                "To plan the next phases of the project.",
                "To ensure all test cases are automated for future use.",
                "To analyze what was done and what could be improved for future projects.",
                "To ensure that the software does not have any remaining defects."
            ],
            "answer": 2,
            "explanation": "To analyze what was done and what could be improved for future projects.",
            "keywords": "Q: In a software project, what is the purpose | A: To analyze what was done"
        },
        {
            "id": 310,
            "text": "Independent testing - who is a tester? Choose the incorrect sentence:",
            "options": [
                "Tests by the person who wrote the item under test.",
                "Tests by a person from a different organizational group, such as an independent test team.",
                "Tests by another person within the same team, such as another programmer.",
                "Tests by the person who wrote the source code."
            ],
            "answer": 3,
            "explanation": "Tests by the person who wrote the source code.",
            "keywords": "Q: Independent testing - who is a tester? Choose | A: Tests by the person who wrote the source code"
        },
        {
            "id": 311,
            "text": "System testing should investigate",
            "options": [
                "Non-functional requirements only not Functional requirements",
                "Functional requirements only not non-functional requirements",
                "Non-functional requirements and Functional requirements",
                "Non-functional requirements or Functional requirements"
            ],
            "answer": 2,
            "explanation": "Non-functional requirements and Functional requirements",
            "keywords": "Q: System testing should investigate | A: Non-functional requirements and Functional requirements"
        },
        {
            "id": 312,
            "text": "To make a test case effective it is most important that:",
            "options": [
                "It is easy to execute.",
                "It is designed to detect faults if present.",
                "The expected outcome is specified before execution.",
                "It is unlikely to delay progress."
            ],
            "answer": 2,
            "explanation": "The expected outcome is specified before execution.",
            "keywords": "Q: To make a test case effective it is | A: The expected outcome is specified before execution"
        },
        {
            "id": 313,
            "text": "Test are prioritized so that:",
            "options": [
                "You shorten the time required for testing",
                "You do the best testing in the time available",
                "You do more effective testing",
                "You find more faults"
            ],
            "answer": 1,
            "explanation": "You do the best testing in the time available",
            "keywords": "Q: Test are prioritized so that: | A: You do the best testing in the time available"
        },
        {
            "id": 314,
            "text": "Typical defects discovered by static analysis includes",
            "options": [
                "Programming standard violations",
                "Referring a variable with an undefined value",
                "Security vulnerabilities",
                "All of the others"
            ],
            "answer": 3,
            "explanation": "All of the others",
            "keywords": "Q: Typical defects discovered by static analysis includes | A: All of the others"
        },
        {
            "id": 315,
            "text": "Testware (test cases, test dataset)",
            "options": [
                "Needs configuration management just like requirements, design and code",
                "Should be newly constructed for each new version of the software",
                "Is needed only until the software is released into production or use",
                "Does not need to be documented and commented, as it does not form part of the released software system"
            ],
            "answer": 0,
            "explanation": "Needs configuration management just like requirements, design and code",
            "keywords": "Q: Testware (test cases, test dataset) | A: Needs configuration management just like"
        },
        {
            "id": 316,
            "text": "The purpose of exit criteria is: (choose one answer)",
            "options": [
                "Define when to stop testing",
                "End of test level",
                "When a set of tests has achieved a specific pre condition",
                "All of the others"
            ],
            "answer": 3,
            "explanation": "All of the others",
            "keywords": "Q: The purpose of exit criteria is: (choose one | A: All of the others"
        },
        {
            "id": 317,
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
            "keywords": "Q: The cost of fixing a fault: | A: Increases as we move the"
        },
        {
            "id": 318,
            "text": "The difference between re-testing and regression testing is",
            "options": [
                "Re-testing is running a test again; regression testing looks for unexpected side effects",
                "Re-testing looks for unexpected side effects; regression testing is repeating those tests",
                "Re-testing is done after faults are fixed; regression testing is done earlier",
                "Re-testing uses different environments, regression testing uses the same environment",
                "Re-testing is done by developers, regression testing is done by independent testers"
            ],
            "answer": 0,
            "explanation": "Re-testing is running a test again; regression testing looks for unexpected side effects",
            "keywords": "Q: The difference between re-testing and regression testing is | A: Re-testing is running a test"
        },
        {
            "id": 319,
            "text": "The Test Cases Derived from use cases",
            "options": [
                "Are most useful in uncovering defects in the process flows during real world use of the system",
                "Are most useful in uncovering defects in the process flows during the testing use of the system",
                "Are most useful in covering the defects in the process flows during real world use of the system",
                "Are most useful in covering the defects at the Integration Level"
            ],
            "answer": 0,
            "explanation": "Are most useful in uncovering defects in the process flows during real world use of the system",
            "keywords": "Q: The Test Cases Derived from use cases | A: Are most useful in uncovering"
        },
        {
            "id": 320,
            "text": "With which of the following categories is a test comparator tool USUALLY associated?",
            "options": [
                "Tool support for performance and monitoring.",
                "Tool support for static testing.",
                "Tool support for test execution and logging.",
                "Tool support for the management of testing and tests."
            ],
            "answer": 2,
            "explanation": "Tool support for test execution and logging.",
            "keywords": "Q: With which of the following categories is a | A: Tool support for test execution and logging"
        },
        {
            "id": 321,
            "text": "You have designed test cases to provide 100% statement and 100% decision coverage for the following fragment of code. if width > length then biggest dimension = width else biggest dimension = length end_if print \"Biggest dimension is \" & biggest_dimension print \"Width: \" & width print \"Length: \" & length How many more test cases are required?",
            "options": [
                "One more test case will be required for 100% decision coverage.",
                "Two more test cases will be required for 100% statement coverage, one of which will be used to provide 100% decision coverage.",
                "None, existing test cases can be used.",
                "One more test case will be required for 100% statement coverage."
            ],
            "answer": 2,
            "explanation": "None, existing test cases can be used.",
            "keywords": "Q: You have designed test cases to provide 100% | A: None, existing test cases can be used"
        },
        {
            "id": 322,
            "text": "Equivalence partitioning is:",
            "options": [
                "A black box testing technique used only by developers",
                "A black box testing technique than can only be used during system testing",
                "A black box testing technique appropriate to all levels of testing",
                "A white box testing technique appropriate for component testing"
            ],
            "answer": 2,
            "explanation": "A black box testing technique appropriate to all levels of testing",
            "keywords": "Q: Equivalence partitioning is: | A: A black box testing technique"
        },
        {
            "id": 323,
            "text": "For which of the following would a static analysis tool be MOST useful?",
            "options": [
                "Supporting reviews.",
                "Validating models of the software.",
                "Testing code executed in a special test harness.",
                "Enforcement of coding standards."
            ],
            "answer": 3,
            "explanation": "Enforcement of coding standards.",
            "keywords": "Q: For which of the following would a static | A: Enforcement of coding standards"
        },
        {
            "id": 324,
            "text": "FPA is used to",
            "options": [
                "To measure the functional requirements of the project",
                "To measure the size of the functionality of an Information system",
                "To measure the functional testing effort",
                "To measure the functional flow"
            ],
            "answer": 1,
            "explanation": "To measure the size of the functionality of an Information system",
            "keywords": "Q: FPA is used to | A: To measure the size of"
        },
        {
            "id": 325,
            "text": "Fault Masking is",
            "options": [
                "Error condition hiding another error condition",
                "Creating a test case which does not reveal a fault",
                "Masking a fault by developer",
                "Masking a fault by a tester"
            ],
            "answer": 0,
            "explanation": "Error condition hiding another error condition",
            "keywords": "Q: Fault Masking is | A: Error condition hiding another error condition"
        },
        {
            "id": 326,
            "text": "Find the mismatch",
            "options": [
                "Test data preparation tools - Manipulate Data bases",
                "Test design tools - Generate test inputs",
                "Requirement management tools - Enables individual tests to be traceable",
                "Configuration management tools - Check for consistence"
            ],
            "answer": 3,
            "explanation": "Configuration management tools - Check for consistence",
            "keywords": "Q: Find the mismatch | A: Configuration management tools - Check for consistence"
        },
        {
            "id": 327,
            "text": "Find the explanation of \"Exhaustive testing is impossible\".",
            "options": [
                "Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, we use risks and priorities to focus testing efforts.",
                "Math formulas for reports that the software will automatically generate.",
                "Is to execute the same test scenario multiple times to ensure that the previous test did not miss any errors.",
                "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness."
            ],
            "answer": 0,
            "explanation": "Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, we use risks and priorities to focus testing efforts.",
            "keywords": "Q: Find the explanation of \"Exhaustive testing is impossible\". | A: Testing everything (all combinations of"
        },
        {
            "id": 328,
            "text": "Find the explanation of \"Early testing\":",
            "options": [
                "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives.",
                "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness.",
                "Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs and expectations.",
                "Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."
            ],
            "answer": 0,
            "explanation": "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives.",
            "keywords": "Q: Find the explanation of \"Early testing\": | A: Testing activities should start as"
        },
        {
            "id": 329,
            "text": "Find the explanation of \"Testing shows presence of defects\":",
            "options": [
                "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness.",
                "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives.",
                "Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs and expectations.",
                "Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."
            ],
            "answer": 0,
            "explanation": "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness.",
            "keywords": "Q: Find the explanation of \"Testing shows presence of | A: Testing can show that defects are present"
        },
        {
            "id": 330,
            "text": "Fill in the blank: Confirmation testing",
            "options": [
                "Execute the test again to confirm that the defect has indeed been fixed",
                "Execute tests with the intent of checking that the system does not now have more defects in it as a result of some change",
                "Verify that modifications in the software or the environment have not caused unintended adverse side effects and that the system still meets its requirements",
                "Validate the expected results."
            ],
            "answer": 0,
            "explanation": "Execute the test again to confirm that the defect has indeed been fixed",
            "keywords": "Q: Fill in the blank: Confirmation testing | A: Execute the test again to"
        },
        {
            "id": 331,
            "text": "One person has been dominating the current software process improvement meeting. Which of the following techniques should the facilitator use to bring other team members into the discussion?",
            "options": [
                "Confront the person and ask that other team members be allowed to express their opinions.",
                "Wait for the person to pause, acknowledge the person's opinion, and ask for someone else's opinion.",
                "Switch the topic to an issue about which the person does not have a strong opinion.",
                "Express an opinion that differs from the person's opinion in order to encourage others to express their ideas."
            ],
            "answer": 1,
            "explanation": "Wait for the person to pause, acknowledge the person's opinion, and ask for someone else's opinion.",
            "keywords": "Q: One person has been dominating the current software | A: Wait for the person to pause"
        },
        {
            "id": 332,
            "text": "Independent Verification & Validation is",
            "options": [
                "Done by the Developer",
                "Done by the Test Engineers",
                "Done By Management",
                "Done by an Entity Outside the Project's sphere of influence"
            ],
            "answer": 3,
            "explanation": "Done by an Entity Outside the Project's sphere of influence",
            "keywords": "Q: Independent Verification & Validation is | A: Done by an Entity Outside"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swt"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
