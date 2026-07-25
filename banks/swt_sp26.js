/** Ngân hàng câu hỏi: SWT SP26 (60 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
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
            "id": 2,
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
            "id": 3,
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
            "keywords": "Q: What is the purpose of test completion criteria | A: To plan when to stop testing"
        },
        {
            "id": 4,
            "text": "Which of the follawing could be a reason for a failure? 1) Testing fault 2) Software fault 3) Design fault 4) Environment Fault 5) Documentation Fault",
            "options": [
                "2 is a valid reason: 1.3.4 & 5 are not",
                "1.2.3,4 are valid reasons: 5 is not",
                "1.2.3 are valid reasons: 4 & 5 are not",
                "All of them are valid reasons for failure"
            ],
            "answer": 3,
            "explanation": "All of them are valid reasons for failure",
            "keywords": "Q: Which of the follawing could be a reason | A: All of them are valid reasons"
        },
        {
            "id": 5,
            "text": "Bug life cycle",
            "options": [
                "Open. Assigned. Fixed. Closed",
                "Open. Fixed. Assigned. Closed",
                "Assigned, Open, Closed, Fixed",
                "Assigned. Open. Foxed Closed"
            ],
            "answer": 0,
            "explanation": "Open. Assigned. Fixed. Closed",
            "keywords": "Q: Bug life cycle | A: Open. Assigned. Fixed. Closed"
        },
        {
            "id": 6,
            "text": "A piece of saftware has been given what tests in the tollowing will you pentom 1) Test the area's most critical to business processes 2 esthe areas where aulls wil be maximum 3) Test the easiest functionalities",
            "options": [
                "182 are true and 3 is false",
                "1.283 are true.",
                "listrue zosoreto sel",
                "182 are false. 3 is true"
            ],
            "answer": 0,
            "explanation": "182 are true and 3 is false",
            "keywords": "Q: A piece of saftware has been given what | A: 182 are true and 3 is"
        },
        {
            "id": 7,
            "text": "A standard for software testing terminology is: A IEEE 802.11",
            "options": [
                "ISO 9001",
                "BS 7925-1",
                "BS 7925-2"
            ],
            "answer": 1,
            "explanation": "BS 7925-1",
            "keywords": "Q: A standard for software testing terminology is: A | A: BS 7925-1"
        },
        {
            "id": 8,
            "text": "As part of which test process do you determine the exit critena?",
            "options": [
                "Test planning.",
                "Evaluating exit criteria and reporting.",
                "Test closure",
                "Test control"
            ],
            "answer": 0,
            "explanation": "Test planning.",
            "keywords": "Q: As part of which test process do you | A: Test planning."
        },
        {
            "id": 9,
            "text": "Which, in general, is the least required skill of a good tester?",
            "options": [
                "Being diplomatic",
                "Able to write software",
                "Having good attention to detail",
                "Able to be relied on"
            ],
            "answer": 1,
            "explanation": "Able to write software",
            "keywords": "Q: Which, in general, is the least required skill | A: Able to write software"
        },
        {
            "id": 10,
            "text": "What is the purpose of exit criteria?",
            "options": [
                "To define when a test level is complete",
                "To determine when a test has comploted.",
                "To identify when a software system should be retired",
                "To determine whether a test has passed"
            ],
            "answer": 0,
            "explanation": "To define when a test level is complete",
            "keywords": "Q: What is the purpose of exit criteria? | A: To define when a test level"
        },
        {
            "id": 11,
            "text": "A test design technique is",
            "options": [
                "A process for selecting test cases",
                "A process for detormining expocted outputs",
                "A way to measure the quality of software",
                "A way to measure in a test plan what has to be done"
            ],
            "answer": 0,
            "explanation": "A process for selecting test cases",
            "keywords": "Q: A test design technique is | A: A process for selecting test cases"
        },
        {
            "id": 12,
            "text": "Testing activity which is periormed to expose defects in the interfaces and in the interaction between integrated components is",
            "options": [
                "System Level Testing",
                "Integration Level Testing",
                "Unit Level Testing",
                "Component Testing"
            ],
            "answer": 1,
            "explanation": "Integration Level Testing",
            "keywords": "Q: Testing activity which is periormed to expose defects | A: Integration Level Testing"
        },
        {
            "id": 13,
            "text": "Repeated Testing of an already tested program, after modification, to discover any defects introduced or uncovered as a result of the changes in the software being tested or in another related or unrelated software component:",
            "options": [
                "Ro Testing",
                "Confimation Testing",
                "Regression Testing",
                "Nogative Testing"
            ],
            "answer": 2,
            "explanation": "Regression Testing",
            "keywords": "Q: Repeated Testing of an already tested program, after | A: Regression Testing"
        },
        {
            "id": 14,
            "text": "Which of the following statements about component testing is not true?",
            "options": [
                "Component testing should be performed by development",
                "Component testing is also known as isolation or module testing",
                "Component testing should have completion criteria planned",
                "Component testing does not involve regression testing"
            ],
            "answer": 3,
            "explanation": "Component testing does not involve regression testing",
            "keywords": "Q: Which of the following statements about component testing | A: Component testing does not involve regression"
        },
        {
            "id": 15,
            "text": "Dunng the software development process, at what point can the test process start",
            "options": [
                "When the code is complete.",
                "When the design is complete.",
                "when me sonware eoutements nove Deen depoved",
                "When the first code module is reedy for unit testing"
            ],
            "answer": 2,
            "explanation": "when me sonware eoutements nove Deen depoved",
            "keywords": "Q: Dunng the software development process, at what point | A: when me sonware eoutements nove Deen"
        },
        {
            "id": 16,
            "text": "Which of the following is a part of Test Closure Activities? L Checking which planned deliverables have been delivered il. Defect report analysis. i. Finalizing and archiving testware. iv. Analyzing lessons",
            "options": [
                "i. a, iv are true and in is false",
                "i. i. iii are true and iv is false",
                "i, i. iv are true and is is false",
                "All of them are true"
            ],
            "answer": 3,
            "explanation": "All of them are true",
            "keywords": "Q: Which of the following is a part of | A: All of them are true"
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
            "keywords": "Q: Which of the following is not a type | A: Big-bang"
        },
        {
            "id": 18,
            "text": "Test Implementation and execution has which of the following major tasks? i. Developing and prioritizing test cases. creating test data, writing test procedures and optionally preparing the test hamesses and writing automated test scripts. ii. Creating the test suite from the test cases for efficient test execution. IlI. Verifying that the test environment has been set up correctly. iv. Determining the exit criterie.",
            "options": [
                "illum are true and iv is false",
                "i.,iv are true and i is false",
                "iii are true and ili.iv are false",
                "iiiiiiv are true and i is false"
            ],
            "answer": 0,
            "explanation": "illum are true and iv is false",
            "keywords": "Q: Test Implementation and execution has which of the | A: illum are true and iv is"
        },
        {
            "id": 19,
            "text": "Validation involves which of the following i. Helps to check the Quality of the Built Product ii. Helps to check that we have built the right product. ill. Helps in developing the product iv. Manitaring tool wastage and obsolotoness.",
            "options": [
                "Options i,,i, iv are true",
                "ii is true and i ill iv are false",
                "iii.in are true and iv is false",
                "it is true and i, iliv are false."
            ],
            "answer": 1,
            "explanation": "ii is true and i ill iv are false",
            "keywords": "Q: Validation involves which of the following i. Helps | A: ii is true and i ill"
        },
        {
            "id": 20,
            "text": "Which of the following has highest level of independence in which test cases are:",
            "options": [
                "Designed by persons who write the software under test",
                "Designod by a person from a differont section",
                "Designed by a person from a different organization",
                "Designed by another person"
            ],
            "answer": 2,
            "explanation": "Designed by a person from a different organization",
            "keywords": "Q: Which of the following has highest level of | A: Designed by a person from a"
        },
        {
            "id": 21,
            "text": "Find the correct flow of the phases of a formal review",
            "options": [
                "Planning. Review meeting, Rework. Kick off",
                "Planning. Individual preparation. Kick off. Rework",
                "Planning, Review meeting, Rework, Follow up",
                "Planning. Individuel preparation. Follow up. Kick off"
            ],
            "answer": 2,
            "explanation": "Planning, Review meeting, Rework, Follow up",
            "keywords": "Q: Find the correct flow of the phases of | A: Planning, Review meeting, Rework, Follow up"
        },
        {
            "id": 22,
            "text": "What is the main purpose of Informal review",
            "options": [
                "Inexpensive way to get some benefit",
                "Find defects",
                "Learning, gaining understanding, effect finding",
                "Discuss. make decisions, solve technical problems"
            ],
            "answer": 0,
            "explanation": "Inexpensive way to get some benefit",
            "keywords": "Q: What is the main purpose of Informal review | A: Inexpensive way to get some benefit"
        },
        {
            "id": 23,
            "text": "In a review meeting a moderator is a person who",
            "options": [
                "Takes minutes of the meeting",
                "Mediates between people",
                "Takes telephane calls",
                "Writes the documents to be reviewed"
            ],
            "answer": 1,
            "explanation": "Mediates between people",
            "keywords": "Q: In a review meeting a moderator is a | A: Mediates between people"
        },
        {
            "id": 24,
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
            "id": 25,
            "text": "Success Factors for a review include: i. Each Review does not have a predefined objective ii. Defects found are welcomed and expressed objectively ili. Management supports a good review process. iv. There is an emphasis on learning and process improvement.",
            "options": [
                "ii.ili.iv are correct and i is incorrect",
                "ill. i. iv is correct and ii is incorrect",
                "i. ili. iv. ii is in correct",
                "ii is correct"
            ],
            "answer": 0,
            "explanation": "ii.ili.iv are correct and i is incorrect",
            "keywords": "Q: Success Factors for a review include: i. Each | A: ii.ili.iv are correct and i is"
        },
        {
            "id": 26,
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
            "id": 27,
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
            "id": 28,
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
            "id": 29,
            "text": "Which of the following is a static test?",
            "options": [
                "Code inspection",
                "Coverage analysis",
                "Usability ossessment",
                "Installation test"
            ],
            "answer": 0,
            "explanation": "Code inspection",
            "keywords": "Q: Which of the following is a static test? | A: Code inspection"
        },
        {
            "id": 30,
            "text": "A person who documents all the issues, problems and open points that were identified during a formal review",
            "options": [
                "Moderator",
                "Scrbe",
                "Author",
                "Manager"
            ],
            "answer": 1,
            "explanation": "Scrbe",
            "keywords": "Q: A person who documents all the issues, problems | A: Scrbe"
        },
        {
            "id": 31,
            "text": "Complete statement and branch coverage means: A That you have tested wery statement in the program",
            "options": [
                "That you have tested every statement and every branch in the program",
                "That you have tested every IF stotement in the program",
                "That you have tested every combination of values of IF statements in the program"
            ],
            "answer": 0,
            "explanation": "That you have tested every statement and every branch in the program",
            "keywords": "Q: Complete statement and branch coverage means: A That | A: That you have tested every statement"
        },
        {
            "id": 32,
            "text": "Which of the following combinations correctly describes a valid approach to component testing: i) Functional testing of the component in isolation. ii) Structure-based testing of the code without recording incidents. iii) Automated tests that are run until the component passes. iv) Functional testing of the interfaces between modules.",
            "options": [
                "i and ii.",
                "i, ii and iii",
                "iii.",
                "ii and iv"
            ],
            "answer": 0,
            "explanation": "i and ii.",
            "keywords": "Q: Which of the following combinations correctly describes a | A: i and ii."
        },
        {
            "id": 33,
            "text": "Which of the following is NOT a black box technique:",
            "options": [
                "Equivalence partitioning",
                "State transition testing",
                "LCSAJ",
                "Syntax testing",
                "Boundary value analysis"
            ],
            "answer": 2,
            "explanation": "LCSAJ",
            "keywords": "Q: Which of the following is NOT a black | A: LCSAJ"
        },
        {
            "id": 34,
            "text": "Testing without a real plan and test cases is called _ (choose one answer)",
            "options": [
                "Gorilla testing",
                "Monkey testing",
                "Adhoc testing",
                "All of the others"
            ],
            "answer": 2,
            "explanation": "Adhoc testing",
            "keywords": "Q: Testing without a real plan and test cases | A: Adhoc testing"
        },
        {
            "id": 35,
            "text": "A thermometer measures temperature in whole degrees only. If the temperature falls below 18 degrees, the heating is switched off. It is switched on again when the temperature reaches 21 degrees. What are the best values in degrees to cover all equivalence partitions?",
            "options": [
                "15. 19 and 25.",
                "17. 18 and19.",
                "18. 20 and 22.",
                "16. 26 and 32."
            ],
            "answer": 0,
            "explanation": "15. 19 and 25.",
            "keywords": "Q: A thermometer measures temperature in whole degrees only. | A: 15. 19 and 25."
        },
        {
            "id": 36,
            "text": "How many tests are required to achieve 100% branch/decision coverage? if width > length then biggest_dimension = width else biggest_dimension = length end_if The following has been added to the bottom of the code fragment above. print \"Biggest dimension is \" & biggest_dimension print \"Width: \" & width print \"Length: \" & length",
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
            "id": 37,
            "text": "What's the disadvantage of Black Box Testing (choose one answer)",
            "options": [
                "Chances of having repetition of tosts that are already done by programmer.",
                "The test inputs noods to be from large sample space.",
                "It is difficult to identify all possible inputs in limited testing time. So writing test cases is slow and difficult",
                "All of the others"
            ],
            "answer": 3,
            "explanation": "All of the others",
            "keywords": "Q: What's the disadvantage of Black Box Testing (choose | A: All of the others"
        },
        {
            "id": 38,
            "text": "Order numbers on a stock control system can range between 10000 and 99999 inclusive. Which of the tollowing inputs might be a result of designing tests for only valid equivalence classes and valid boundaries:",
            "options": [
                "1000. 5000. 99999",
                "9999. 50000. 100000",
                "10000, 50000, 99999",
                "10000. 99999",
                "9999. 10000, 50000, 99999. 10000"
            ],
            "answer": 2,
            "explanation": "10000, 50000, 99999",
            "keywords": "Q: Order numbers on a stock control system can | A: 10000, 50000, 99999"
        },
        {
            "id": 39,
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
            "id": 40,
            "text": "A program validates a numeric field as follows: Values less than 10 are rejected, values between 10 and 21 are accepted. values greater than or equal to 22 are rejected. Which of the following covers the MOST boundary values?",
            "options": [
                "9.10.11.22",
                "9.10.21.22",
                "10.11.21.22",
                "10.11.20.21"
            ],
            "answer": 1,
            "explanation": "9.10.21.22",
            "keywords": "Q: A program validates a numeric field as follows: | A: 9.10.21.22"
        },
        {
            "id": 41,
            "text": "___ is a very early build intended for limited distribution to a few key customers and to marketing for demonstration purposes",
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
            "id": 42,
            "text": "Match the following: 1. Test estimation 2. Test control 3. Test monitoring",
            "options": [
                "Measures of tracking process",
                "Effort required to perform activities",
                "Reallocation of resources",
                "1 -b. 2-c. 3-a",
                "1 -b. 2-a, 3-c",
                "1-c. 2-a, 3-b",
                "1 -a. 2-b. 3-c"
            ],
            "answer": 0,
            "explanation": "Measures of tracking process",
            "keywords": "Q: Match the following: 1. Test estimation 2. Test | A: Measures of tracking process"
        },
        {
            "id": 43,
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
            "id": 44,
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
            "id": 45,
            "text": "A Test Plan Outline contains which of the following: i. Test Items ii. Test Scripts iii. Test Deliverables iv. Responsibilities",
            "options": [
                "i,ii iii are true and iv is false",
                "i,ili,iv are true and ii is false",
                "ii,ili are true and i and iv are false",
                "i,ii are false and iii, iv are true"
            ],
            "answer": 1,
            "explanation": "i,ili,iv are true and ii is false",
            "keywords": "Q: A Test Plan Outline contains which of the | A: i,ili,iv are true and ii is"
        },
        {
            "id": 46,
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
            "id": 47,
            "text": "Quality Assurance is the process by which product quality is compared with the application standards and the action taken when nonconformance is detected",
            "options": [
                "True",
                "False"
            ],
            "answer": 1,
            "explanation": "False",
            "keywords": "Q: Quality Assurance is the process by which product | A: False"
        },
        {
            "id": 48,
            "text": "Which of the following is a step-by-step method followed to ensure that standards are met?",
            "options": [
                "SDLC",
                "Project Plan",
                "Policy",
                "Procedure"
            ],
            "answer": 3,
            "explanation": "Procedure",
            "keywords": "Q: Which of the following is a step-by-step method | A: Procedure"
        },
        {
            "id": 49,
            "text": "Verification involves which of the following i. Helps to check the Quality of the built product ii.Helps to check that we have built the right product. iii.Helps in developing the product iv. Monitoring tool wastage and obsoleteness.",
            "options": [
                "Options i ii, iii, iv are true.",
                "i is true and ii.iii, iv are false",
                "i.ii.ili are true and iv is false",
                "ii is true and i,ili, iv are false."
            ],
            "answer": 1,
            "explanation": "i is true and ii.iii, iv are false",
            "keywords": "Q: Verification involves which of the following i. Helps | A: i is true and ii.iii, iv"
        },
        {
            "id": 50,
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
            "id": 51,
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
            "id": 52,
            "text": "With which of the following categories is a test comparator tool USUALLY associated?",
            "options": [
                "Tool support for performance and monitoring.",
                "Tool support for static testing",
                "Tool support for test execution and logging.",
                "Tool support for the management of testing and tests."
            ],
            "answer": 2,
            "explanation": "Tool support for test execution and logging.",
            "keywords": "Q: With which of the following categories is a | A: Tool support for test execution and"
        },
        {
            "id": 53,
            "text": "For which of the following types of testing would a vendor contractor typically need to write the initial scripts?",
            "options": [
                "Measuring response time",
                "Measuring transaction rates",
                "Recovery testing",
                "Simulating many users",
                "Generating many transactions"
            ],
            "answer": 2,
            "explanation": "Recovery testing",
            "keywords": "Q: For which of the following types of testing | A: Recovery testing"
        },
        {
            "id": 54,
            "text": "Which of the following is NOT a characteristic of User Acceptance Testing?",
            "options": [
                "Use of automated test execution tools",
                "Testing performed by users.",
                "Testing against acceptance test criteria",
                "Integration of system with user documentation."
            ],
            "answer": 0,
            "explanation": "Use of automated test execution tools",
            "keywords": "Q: Which of the following is NOT a characteristic | A: Use of automated test execution tools"
        },
        {
            "id": 55,
            "text": "The place to start if you want a (new) test tool is:",
            "options": [
                "Attend a tool exhibition",
                "Invite a vendor to give a demo",
                "Analyze your needs and requirements",
                "Find out what your budget would be for the tool",
                "Search the internet"
            ],
            "answer": 2,
            "explanation": "Analyze your needs and requirements",
            "keywords": "Q: The place to start if you want a | A: Analyze your needs and requirements"
        },
        {
            "id": 56,
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
            "id": 57,
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
            "id": 58,
            "text": "Find the mismatch",
            "options": [
                "Test data preparation tools - Manipulate Data bases",
                "Test design tools - Generate test inputs",
                "Requirement management tods - Enables individual tests to be traceable",
                "Configuration management tools - Check for consistence"
            ],
            "answer": 3,
            "explanation": "Configuration management tools - Check for consistence",
            "keywords": "Q: Find the mismatch | A: Configuration management tools - Check for"
        },
        {
            "id": 59,
            "text": "A typical commercial test execution tool would be able to perform all of the following. EXCEPT:",
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
            "id": 60,
            "text": "When a new testing tool is purchased, it should be used first by:",
            "options": [
                "A small team to establish the best way to use the tool",
                "Everyone who may eventually have some use for the tool",
                "The independent testing team",
                "The vendor contractor to write the initial scripts"
            ],
            "answer": 0,
            "explanation": "A small team to establish the best way to use the tool",
            "keywords": "Q: When a new testing tool is purchased, it | A: A small team to establish the"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swt_sp26"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
