/** Ngân hàng câu hỏi: SWT SU25 (60 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
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
            "keywords": "Q: What is an example that is NOT risk? | A: In the team, there is a"
        },
        {
            "id": 2,
            "text": "How does early testing benefit the software development process?",
            "options": [
                "By delaying defect detection until after release",
                "By identifying defects only at the final stages",
                "By finding defects early when they are cheaper to fix",
                "By increasing the overall cost of testing"
            ],
            "answer": 2,
            "explanation": "By finding defects early when they are cheaper to fix",
            "keywords": "Q: How does early testing benefit the software development | A: By finding defects early when they"
        },
        {
            "id": 3,
            "text": "What should be a key outcome of the evaluating exit criteria and reporting phase?",
            "options": [
                "Decisions regarding the continuation or stoppage of testing",
                "Finalizing the software release without further review",
                "Planning for the next development cycle",
                "Developing new test tools and methods"
            ],
            "answer": 0,
            "explanation": "Decisions regarding the continuation or stoppage of testing",
            "keywords": "Q: What should be a key outcome of the | A: Decisions regarding the continuation or stoppage"
        },
        {
            "id": 4,
            "text": "What is the most effective way to use testing to improve quality?",
            "options": [
                "By focusing on areas of the software most likely to have defects",
                "By performing minimal testing on all features",
                "By only testing the new features of the software",
                "By outsourcing testing to reduce costs"
            ],
            "answer": 0,
            "explanation": "By focusing on areas of the software most likely to have defects",
            "keywords": "Q: What is the most effective way to use | A: By focusing on areas of the"
        },
        {
            "id": 5,
            "text": "What is the primary benefit of understanding the psychological factors in testing?",
            "options": [
                "It allows for complete automation of the testing process.",
                "It enhances the interaction and effectiveness of the testing team.",
                "It eliminates the need for quality assurance.",
                "It simplifies compliance with software standards."
            ],
            "answer": 1,
            "explanation": "It enhances the interaction and effectiveness of the testing team.",
            "keywords": "Q: What is the primary benefit of understanding the | A: It enhances the interaction and effectiveness"
        },
        {
            "id": 6,
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
            "id": 7,
            "text": "Why is the test environment set-up included in test implementation?",
            "options": [
                "It is only relevant during test case design",
                "It is part of the test closure activities",
                "It is used for developing test cases",
                "The environment needs to be ready for executing test cases"
            ],
            "answer": 3,
            "explanation": "The environment needs to be ready for executing test cases",
            "keywords": "Q: Why is the test environment set-up included in | A: The environment needs to be ready"
        },
        {
            "id": 8,
            "text": "What is the 'Pesticide Paradox' in testing?",
            "options": [
                "Testing all combinations is impossible.",
                "Same tests over time detect fewer issues",
                "Testing must be exhaustive to find all bugs.",
                "Defects tend to cluster in specific modules."
            ],
            "answer": 1,
            "explanation": "Same tests over time detect fewer issues",
            "keywords": "Q: What is the 'Pesticide Paradox' in testing? | A: Same tests over time detect fewer"
        },
        {
            "id": 9,
            "text": "Find the explanation of \"Exhaustive testing is impossible\":",
            "options": [
                "Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, we use risks and priorities to focus testing efforts.",
                "Math formulas for reports that the software will automatically generate.",
                "Is to execute the same test scenario multiple times to ensure that the previous test did not miss any errors.",
                "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness."
            ],
            "answer": 0,
            "explanation": "Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, we use risks and priorities to focus testing efforts.",
            "keywords": "Q: Find the explanation of \"Exhaustive testing is impossible\": | A: Testing everything (all combinations of inputs"
        },
        {
            "id": 10,
            "text": "Find the explanation of \"Early testing\":",
            "options": [
                "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives.",
                "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness.",
                "Finding and fixing defects does not help if the system built is unusable and does not fulfill the users' needs and expectations.",
                "Testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce site."
            ],
            "answer": 0,
            "explanation": "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives.",
            "keywords": "Q: Find the explanation of \"Early testing\": | A: Testing activities should start as early"
        },
        {
            "id": 11,
            "text": "Fill in the blank: Confirmation testing",
            "options": [
                "Execute the test again to confirm that the defect has indeed been fixed",
                "Execute tests with the intent of checking that the system does not now have more defects in it as a result of some change",
                "Verify that modifications in the software or the environment have not caused unintended adverse side effects and that the system still meets its requirements",
                "Validate the expected results."
            ],
            "answer": 0,
            "explanation": "Execute the test again to confirm that the defect has indeed been fixed",
            "keywords": "Q: Fill in the blank: Confirmation testing | A: Execute the test again to confirm"
        },
        {
            "id": 12,
            "text": "What is the role of regression testing in maintenance testing?",
            "options": [
                "To ensure that new features disrupt existing functionalities.",
                "To verify that bug fixes and enhancements do not introduce new defects into existing functionalities.",
                "To check the functionality of new hardware only.",
                "To focus testing solely on new features."
            ],
            "answer": 1,
            "explanation": "To verify that bug fixes and enhancements do not introduce new defects into existing functionalities.",
            "keywords": "Q: What is the role of regression testing in | A: To verify that bug fixes and"
        },
        {
            "id": 13,
            "text": "Why is impact analysis important in maintenance testing?",
            "options": [
                "It determines the effect of a new marketing campaign",
                "It is used to decide the new features to be added to the system",
                "It assesses how changes might affect the existing system components",
                "It helps in redesigning the software interface"
            ],
            "answer": 2,
            "explanation": "It assesses how changes might affect the existing system components",
            "keywords": "Q: Why is impact analysis important in maintenance testing? | A: It assesses how changes might affect"
        },
        {
            "id": 14,
            "text": "What does change-related testing include?",
            "options": [
                "Performance and stress testing",
                "Confirmation and regression testing",
                "Usability and compliance testing",
                "Security and reliability testing"
            ],
            "answer": 1,
            "explanation": "Confirmation and regression testing",
            "keywords": "Q: What does change-related testing include? | A: Confirmation and regression testing"
        },
        {
            "id": 15,
            "text": "What is the primary objective of functional testing?",
            "options": [
                "To assess the system's non-functional characteristics like performance.",
                "To verify that the software functions according to the specified requirements.",
                "To evaluate the system's capacity to handle high loads.",
                "To check the internal code structure of the software."
            ],
            "answer": 1,
            "explanation": "To verify that the software functions according to the specified requirements.",
            "keywords": "Q: What is the primary objective of functional testing? | A: To verify that the software functions"
        },
        {
            "id": 16,
            "text": "A ___ consists of a set of test cases covering the end-to-end functionality of a software application",
            "options": [
                "Test Case",
                "Test scenario",
                "Test scripts",
                "None of the mentioned"
            ],
            "answer": 1,
            "explanation": "Test scenario",
            "keywords": "Q: A ___ consists of a set of test | A: Test scenario"
        },
        {
            "id": 17,
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
            "id": 18,
            "text": "How does usability testing differ from performance testing?",
            "options": [
                "Usability testing focuses on user-friendliness, while performance testing measures operational capabilities.",
                "Usability testing measures how fast the system responds to requests, while performance testing checks for user-friendliness.",
                "They do not differ; both terms describe the same tests",
                "Usability testing is a type of performance testing."
            ],
            "answer": 0,
            "explanation": "Usability testing focuses on user-friendliness, while performance testing measures operational capabilities.",
            "keywords": "Q: How does usability testing differ from performance testing? | A: Usability testing focuses on user-friendliness, while"
        },
        {
            "id": 19,
            "text": "What is Integration testing?",
            "options": [
                "It tests interfaces between components, interactions to different parts of a system such as an operating system, file system and hardware or interfaces between systems.",
                "It is unit, module and program testing, searches for defects in, and verifies the functioning of software that are separately testable.",
                "It is concerned with the behavior of the whole system/product as defined by the scope of a development project or product",
                "The system will be delivered to the user or customer for testing."
            ],
            "answer": 0,
            "explanation": "It tests interfaces between components, interactions to different parts of a system such as an operating system, file system and hardware or interfaces between systems.",
            "keywords": "Q: What is Integration testing? | A: It tests interfaces between components, interactions"
        },
        {
            "id": 20,
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
            "id": 21,
            "text": "What is the purpose of a walkthrough?",
            "options": [
                "To finalize the document under review",
                "To educate participants and gather feedback",
                "To detect critical defects",
                "To automate review processes"
            ],
            "answer": 1,
            "explanation": "To educate participants and gather feedback",
            "keywords": "Q: What is the purpose of a walkthrough? | A: To educate participants and gather feedback"
        },
        {
            "id": 22,
            "text": "Which of the following is NOT a benefit of static testing in software development?",
            "options": [
                "Improving communication between team members in the course of participating in reviews",
                "Reducing testing cost and time",
                "Reducing development cost and time",
                "Reducing the need for documentation"
            ],
            "answer": 3,
            "explanation": "Reducing the need for documentation",
            "keywords": "Q: Which of the following is NOT a benefit | A: Reducing the need for documentation"
        },
        {
            "id": 23,
            "text": "Which of the following options are roles in a formal review?",
            "options": [
                "Developer, Moderator, Review leader, Reviewer, Tester",
                "Author, Moderator, Manager, Reviewer, Developer",
                "Author, Manager, Review leader, Reviewer, Designer",
                "Author, Moderator, Review leader, Reviewer, Scribe"
            ],
            "answer": 3,
            "explanation": "Author, Moderator, Review leader, Reviewer, Scribe",
            "keywords": "Q: Which of the following options are roles in | A: Author, Moderator, Review leader, Reviewer, Scribe"
        },
        {
            "id": 24,
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
            "id": 25,
            "text": "Reviews, walkthroughs, and inspections are part of ___",
            "options": [
                "Design process",
                "Validation process",
                "Verification process",
                "Management process"
            ],
            "answer": 2,
            "explanation": "Verification process",
            "keywords": "Q: Reviews, walkthroughs, and inspections are part of ___ | A: Verification process"
        },
        {
            "id": 26,
            "text": "Which of the following sequences BEST shows the main activities of the work product review process?",
            "options": [
                "Initiate review - Reviewer selection - Individual review - Issue communication and analysis - Rework",
                "Planning & preparation - Overview meeting - Individual review - Foxing and Reporting",
                "Preparation - Issue detection - Issue communication and analysis - Rework -Report",
                "Planning - Initiate review - Individual review - Issue communication and analysis - Fixing and Reporting"
            ],
            "answer": 3,
            "explanation": "Planning - Initiate review - Individual review - Issue communication and analysis - Fixing and Reporting",
            "keywords": "Q: Which of the following sequences BEST shows the | A: Planning - Initiate review - Individual"
        },
        {
            "id": 27,
            "text": "What is the main goal of static testing?",
            "options": [
                "To execute the software and identify defects",
                "To review documents and source code without executing the software",
                "To test the software with a focus on its user interface",
                "To validate the software's performance under stress"
            ],
            "answer": 1,
            "explanation": "To review documents and source code without executing the software",
            "keywords": "Q: What is the main goal of static testing? | A: To review documents and source code"
        },
        {
            "id": 28,
            "text": "A typical formal review process consists of five main steps. Which is the correct order?",
            "options": [
                "Planning -> Individual review -> Initiate review - Issue communication & Analysis -> Fixing & Reporting",
                "Planning -> Initiate review -> Individual review -> Issue communication & Analysis -> Fixing & Reporting",
                "Initiate review -> Planning -> Individual review -> Issue communication & Analysis -> Fixing & Reporting",
                "Planning -> Issue communication & Analysis -> Initiate review -> Individual review -> Fixing & Reporting"
            ],
            "answer": 1,
            "explanation": "Planning -> Initiate review -> Individual review -> Issue communication & Analysis -> Fixing & Reporting",
            "keywords": "Q: A typical formal review process consists of five | A: Planning -> Initiate review -> Individual"
        },
        {
            "id": 29,
            "text": "Which of the following is a benefit of performing reviews in the software development process?",
            "options": [
                "Decreasing the amount of documentation required",
                "Eliminating the need for testing the software",
                "Identifying defects early and thereby reducing rework costs",
                "Extending the software development lifecycle"
            ],
            "answer": 2,
            "explanation": "Identifying defects early and thereby reducing rework costs",
            "keywords": "Q: Which of the following is a benefit of | A: Identifying defects early and thereby reducing"
        },
        {
            "id": 30,
            "text": "Which of the following statements are TRUE for Technical Review? I. Reviewers should be technical peers of the author, and technical experts in the same or other II. Review meeting is typically led by the author III. Purposes gaining consensus, detecting potential defects IV. Scribe is mandatory V. Individual preparation before the review meeting is optional",
            "options": [
                "I, II and III",
                "II, III and IV",
                "I, III and IV",
                "II and V"
            ],
            "answer": 2,
            "explanation": "I, III and IV",
            "keywords": "Q: Which of the following statements are TRUE for | A: I, III and IV"
        },
        {
            "id": 31,
            "text": "When would exploratory testing be most beneficial during a testing cycle?",
            "options": [
                "After receiving comprehensive training in the application.",
                "When detailed error logs from previous tests are available.",
                "When testing needs to be dynamic and adapt to new findings.",
                "Only in conjunction with user acceptance testing."
            ],
            "answer": 2,
            "explanation": "When testing needs to be dynamic and adapt to new findings.",
            "keywords": "Q: When would exploratory testing be most beneficial during | A: When testing needs to be dynamic"
        },
        {
            "id": 32,
            "text": "When utilizing error guessing as your testing strategy, What specific type of testing are you performing?",
            "options": [
                "Specification-based",
                "Structure-based",
                "Experience-based",
                "Reference-based"
            ],
            "answer": 2,
            "explanation": "Experience-based",
            "keywords": "Q: When utilizing error guessing as your testing strategy, | A: Experience-based"
        },
        {
            "id": 33,
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
            "id": 34,
            "text": "Which the best thing about the regression test?",
            "options": [
                "Regression test is only run once.",
                "Regression test will always be automated",
                "Regression test will check unchanged areas of the software to see if they have been affected",
                "Regression test will check changed areas of the software to see if they have been affected."
            ],
            "answer": 2,
            "explanation": "Regression test will check unchanged areas of the software to see if they have been affected",
            "keywords": "Q: Which the best thing about the regression test? | A: Regression test will check unchanged areas"
        },
        {
            "id": 35,
            "text": "Considering the code provided, which is true about the minimal quantity of test cases necessary for complete statement and branch/decision coverage? Read B IF A+B> 50 THEN Print \"Sum two age\" ENDIF IF B > 20 THEN Print \"B is of adult age\" ENDIF",
            "options": [
                "1 test for statement coverage, 3 for branch coverage",
                "1 test for statement coverage, 1 for branch coverage",
                "1 test for statement coverage, 2 for branch coverage",
                "2 tests for statement coverage, 2 for branch coverage"
            ],
            "answer": 2,
            "explanation": "1 test for statement coverage, 2 for branch coverage",
            "keywords": "Q: Considering the code provided, which is true about | A: 1 test for statement coverage, 2"
        },
        {
            "id": 36,
            "text": "Boundary Value Analysis is an extension of which technique?",
            "options": [
                "State Transition Testing",
                "Equivalence Partitioning",
                "Decision Table Testing",
                "Use Case Testing"
            ],
            "answer": 1,
            "explanation": "Equivalence Partitioning",
            "keywords": "Q: Boundary Value Analysis is an extension of which | A: Equivalence Partitioning"
        },
        {
            "id": 37,
            "text": "What is the key focus of state transition testing?",
            "options": [
                "The changes in state within an application based on varying input conditions",
                "The visual aspects of the user interface",
                "The stability of application under peak load",
                "The compatibility of the software with various operating systems"
            ],
            "answer": 0,
            "explanation": "The changes in state within an application based on varying input conditions",
            "keywords": "Q: What is the key focus of state transition | A: The changes in state within an"
        },
        {
            "id": 38,
            "text": "What essential skill does exploratory testing require from a tester?",
            "options": [
                "Ability to strictly adhere to test scripts",
                "Specialization in performance and stress testing",
                "Proficiency in programming and automated tools",
                "Capacity to plan and execute tests simultaneously"
            ],
            "answer": 3,
            "explanation": "Capacity to plan and execute tests simultaneously",
            "keywords": "Q: What essential skill does exploratory testing require from | A: Capacity to plan and execute tests"
        },
        {
            "id": 39,
            "text": "In error guessing, what is the tester primarily relying on to identify potential defects?",
            "options": [
                "Formal specifications and requirements",
                "Randomly generated test cases",
                "Their own experience, intuition, and domain knowledge",
                "The feedback from automated testing tools"
            ],
            "answer": 2,
            "explanation": "Their own experience, intuition, and domain knowledge",
            "keywords": "Q: In error guessing, what is the tester primarily | A: Their own experience, intuition, and domain"
        },
        {
            "id": 40,
            "text": "Design a test case using Equivalence Partitioning for a function that calculates discounts based on Customer age: (Select all that apply)",
            "options": [
                "1-12 years: 50% discount",
                "13-64 years: 20% discount",
                "65 years and above: 30% discount",
                "None of the others",
                "A, B, and C"
            ],
            "answer": 4,
            "explanation": "1-12 years: 50% discount · 13-64 years: 20% discount · 65 years and above: 30% discount",
            "keywords": "Q: Design a test case using Equivalence Partitioning for | A: 1-12 years: 50% discount · 13-64"
        },
        {
            "id": 41,
            "text": "What factor influences the structure of a test organization within a project?",
            "options": [
                "The personal preferences of the test team",
                "The social dynamics of the development team",
                "The risk level and complexity of the project",
                "The geographical location of the company"
            ],
            "answer": 2,
            "explanation": "The risk level and complexity of the project",
            "keywords": "Q: What factor influences the structure of a test | A: The risk level and complexity of"
        },
        {
            "id": 42,
            "text": "What is the significance of defining scope in a test plan?",
            "options": [
                "It outlines the geographical areas where the product will be sold",
                "It determines who the end-users will be",
                "It clarifies what is included and excluded from testing",
                "It sets the price points for various market segments"
            ],
            "answer": 2,
            "explanation": "It clarifies what is included and excluded from testing",
            "keywords": "Q: What is the significance of defining scope in | A: It clarifies what is included and"
        },
        {
            "id": 43,
            "text": "In a software project, what is the purpose of test closure activities?",
            "options": [
                "To plan the next phases of the project.",
                "To ensure all test cases are automated for future use.",
                "To analyze what was done and what could be improved for future projects.",
                "To ensure that the software does not have any remaining defects."
            ],
            "answer": 2,
            "explanation": "To analyze what was done and what could be improved for future projects.",
            "keywords": "Q: In a software project, what is the purpose | A: To analyze what was done and"
        },
        {
            "id": 44,
            "text": "Which of the following best describes the role of a test manager?",
            "options": [
                "Direct involvement in software programming",
                "Management of the testing process and resources",
                "Exclusive focus on software design",
                "Handling customer support and feedback"
            ],
            "answer": 1,
            "explanation": "Management of the testing process and resources",
            "keywords": "Q: Which of the following best describes the role | A: Management of the testing process and"
        },
        {
            "id": 45,
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
            "id": 46,
            "text": "Which of the following are common entry criteria for testing? (Choose 2 correct answers)",
            "options": [
                "Availability of test environment",
                "Completion of all test cases",
                "Approval from the project manager",
                "Availability of necessary resources",
                "A and D"
            ],
            "answer": 4,
            "explanation": "Availability of test environment · Availability of necessary resources",
            "keywords": "Q: Which of the following are common entry criteria | A: Availability of test environment · Availability"
        },
        {
            "id": 47,
            "text": "Which statement best reflects the role of a test leader compared to a tester?",
            "options": [
                "A test leader focuses on test execution while testers focus on test planning",
                "Test leaders and testers perform exactly the same roles within a project",
                "A test leader manages the testing process while testers focus on test execution",
                "Testers manage the project while test leaders provide technical support"
            ],
            "answer": 2,
            "explanation": "A test leader manages the testing process while testers focus on test execution",
            "keywords": "Q: Which statement best reflects the role of a | A: A test leader manages the testing"
        },
        {
            "id": 48,
            "text": "What is the final step in the incident management process?",
            "options": [
                "Logging the incident",
                "Reviewing the incident with stakeholders",
                "Closing the incident report",
                "Assigning the incident to a developer"
            ],
            "answer": 2,
            "explanation": "Closing the incident report",
            "keywords": "Q: What is the final step in the incident | A: Closing the incident report"
        },
        {
            "id": 49,
            "text": "What should the severity of a defect indicate?",
            "options": [
                "The tester's skill level",
                "The impact of the defect on the system",
                "The cost of the software",
                "The timeline of the project"
            ],
            "answer": 1,
            "explanation": "The impact of the defect on the system",
            "keywords": "Q: What should the severity of a defect indicate? | A: The impact of the defect on"
        },
        {
            "id": 50,
            "text": "Why are test strategies important in the planning phase?",
            "options": [
                "They determine the programming languages used in development",
                "They provide a roadmap for design and architectural decisions",
                "They outline the approach, techniques, and priorities for the testing efforts",
                "They specify the user interface design and experience"
            ],
            "answer": 2,
            "explanation": "They outline the approach, techniques, and priorities for the testing efforts",
            "keywords": "Q: Why are test strategies important in the planning | A: They outline the approach, techniques, and"
        },
        {
            "id": 51,
            "text": "What is the function of a monitoring tool in the context of testing?",
            "options": [
                "To keep track of the status of the system during use",
                "To measure the software's response times",
                "To automate the generation of test cases",
                "To manage the testing activities and resources"
            ],
            "answer": 0,
            "explanation": "To keep track of the status of the system during use",
            "keywords": "Q: What is the function of a monitoring tool | A: To keep track of the status"
        },
        {
            "id": 52,
            "text": "What is the goal of a risk assessment in software testing?",
            "options": [
                "To identify, analyze, and prioritize risks",
                "To establish a communication plan",
                "To define software functionalities",
                "To assign tasks to the development team"
            ],
            "answer": 0,
            "explanation": "To identify, analyze, and prioritize risks",
            "keywords": "Q: What is the goal of a risk assessment | A: To identify, analyze, and prioritize risks"
        },
        {
            "id": 53,
            "text": "Which tool supports the review process during static testing",
            "options": [
                "Support reviews tool",
                "Model-based testing tool",
                "Test management tool",
                "Defect management tool"
            ],
            "answer": 0,
            "explanation": "Support reviews tool",
            "keywords": "Q: Which tool supports the review process during static | A: Support reviews tool"
        },
        {
            "id": 54,
            "text": "Why is it important to prioritize incidents?",
            "options": [
                "To ensure that minor defects are fixed first",
                "To focus resources on resolving the most critical defects first",
                "To complicate the development process",
                "To increase the number of incidents"
            ],
            "answer": 1,
            "explanation": "To focus resources on resolving the most critical defects first",
            "keywords": "Q: Why is it important to prioritize incidents? | A: To focus resources on resolving the"
        },
        {
            "id": 55,
            "text": "Which of the following is not a benefit of testing tools?",
            "options": [
                "Easy to implement and maintain",
                "Reduce of repetitive work",
                "Ability to detect tiny changes that a human could not",
                "It produces more consistent result."
            ],
            "answer": 0,
            "explanation": "Easy to implement and maintain",
            "keywords": "Q: Which of the following is not a benefit | A: Easy to implement and maintain"
        },
        {
            "id": 56,
            "text": "What information is typically included in the summary section of an incident report, choose 2 answer",
            "options": [
                "Personal opinions of the tester.",
                "Test progress metrics.",
                "Incident description and impact.",
                "Steps to reproduce the issue.",
                "C and D"
            ],
            "answer": 4,
            "explanation": "Incident description and impact. · Steps to reproduce the issue.",
            "keywords": "Q: What information is typically included in the summary | A: Incident description and impact. · Steps"
        },
        {
            "id": 57,
            "text": "What is an advantage of using data-driven scripts in test automation?",
            "options": [
                "They do not require external data",
                "They separate test data from scripts, enhancing flexibility",
                "They are simpler to maintain than linear scripts",
                "They eliminate the need for scripting knowledge"
            ],
            "answer": 1,
            "explanation": "They separate test data from scripts, enhancing flexibility",
            "keywords": "Q: What is an advantage of using data-driven scripts | A: They separate test data from scripts,"
        },
        {
            "id": 58,
            "text": "Who is responsible for testing in Agile methodology?",
            "options": [
                "The developers",
                "The testers",
                "The whole team",
                "The product owner"
            ],
            "answer": 2,
            "explanation": "The whole team",
            "keywords": "Q: Who is responsible for testing in Agile methodology? | A: The whole team"
        },
        {
            "id": 59,
            "text": "What are the success factors for implementing a new test tool? (Select all that apply?",
            "options": [
                "Providing ongoing training",
                "Adapting processes to fit the tool",
                "Immediate organization-wide rollout",
                "Continuous monitoring of tool benefits",
                "A, B, and D"
            ],
            "answer": 4,
            "explanation": "Providing ongoing training · Adapting processes to fit the tool · Continuous monitoring of tool benefits",
            "keywords": "Q: What are the success factors for implementing a | A: Providing ongoing training · Adapting processes"
        },
        {
            "id": 60,
            "text": "Which tool would be most appropriate for testing the load capacity of a server?",
            "options": [
                "Test management tool",
                "Incident management tool",
                "Load testing tool",
                "Configuration management tool"
            ],
            "answer": 2,
            "explanation": "Load testing tool",
            "keywords": "Q: Which tool would be most appropriate for testing | A: Load testing tool"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swt_su25"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
