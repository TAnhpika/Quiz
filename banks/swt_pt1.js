/** Ngân hàng câu hỏi: Software Testing PT1 (166 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
            "text": "What is a key component of high-level test planning?",
            "options": [
                "Defining the overall scope and objectives of testing",
                "Debugging software code",
                "Writing detailed test cases",
                "Executing unit tests"
            ],
            "answer": 0,
            "explanation": "Defining the overall scope and objectives of testing",
            "keywords": "Defining · overall · ≠ code/cases/tests"
        },
        {
            "id": 2,
            "text": "How should software be tested to ensure it is ready for release?",
            "options": [
                "According to specified exit criteria and objectives",
                "As quickly as possible to meet deadlines",
                "Without any formal documentation or planning",
                "Based on the most complex test cases only"
            ],
            "answer": 0,
            "explanation": "According to specified exit criteria and objectives",
            "keywords": "According · specified · ≠ deadlines/planning/only"
        },
        {
            "id": 3,
            "text": "Which term best describes checking a product against its specified requirements to ensure it fulfills them?",
            "options": [
                "Error analysis",
                "Defect fixing",
                "Verification",
                "Validation"
            ],
            "answer": 2,
            "explanation": "Verification",
            "keywords": "≠ analysis/fixing/Validation"
        },
        {
            "id": 4,
            "text": "What is the main focus of test planning and control?",
            "options": [
                "Implementing test cases and scripts",
                "Evaluating test execution outcomes",
                "Designing test conditions and test cases",
                "Managing resources and responsibilities"
            ],
            "answer": 3,
            "explanation": "Managing resources and responsibilities",
            "keywords": "Managing · resources · ≠ scripts/outcomes/cases"
        },
        {
            "id": 5,
            "text": "What role do test conditions play in test analysis and design?",
            "options": [
                "They define what is to be tested in terms of test objectives.",
                "They specify the test environments to be set up.",
                "They determine the actual results to be expected during execution.",
                "They establish how test activities will be reported."
            ],
            "answer": 0,
            "explanation": "They define what is to be tested in terms of test objectives.",
            "keywords": "define · what · ≠ set/execution/reported"
        },
        {
            "id": 6,
            "text": "In which phase are test cases developed and prioritized?",
            "options": [
                "Evaluating exit criteria and reporting",
                "Test closure activities",
                "Test implementation and execution",
                "Test planning and control"
            ],
            "answer": 2,
            "explanation": "Test implementation and execution",
            "keywords": "implementation · execution · ≠ reporting/activities/control"
        },
        {
            "id": 7,
            "text": "What is a consequence of not considering psychological factors in testing?",
            "options": [
                "It increases the reliability of the testing results.",
                "Psychological factors do not have a real impact on testing outcomes.",
                "It may lead to conflicts and inefficiencies in the testing process.",
                "Testing can be done with fewer resources."
            ],
            "answer": 2,
            "explanation": "It may lead to conflicts and inefficiencies in the testing process.",
            "keywords": "may · lead · ≠ results/outcomes/resources"
        },
        {
            "id": 8,
            "text": "What is a key activity in the Test Implementation and Execution phase?",
            "options": [
                "Setting up test environments and configuring test tools",
                "Developing a test strategy and plan",
                "Identifying test conditions and scenarios",
                "Conducting a post-mortem session"
            ],
            "answer": 0,
            "explanation": "Setting up test environments and configuring test tools",
            "keywords": "Setting · environments · ≠ plan/scenarios/session"
        },
        {
            "id": 9,
            "text": "In the context of the \"Pesticide paradox,\" what is a recommended practice?",
            "options": [
                "Use the same tests without modification throughout the project.",
                "Focus solely on areas where defects have been previously found.",
                "Regularly update and introduce new tests to uncover more defects.",
                "Limit the number of tests to conserve resources."
            ],
            "answer": 2,
            "explanation": "Regularly update and introduce new tests to uncover more defects.",
            "keywords": "Regularly · update · ≠ project/found/resources"
        },
        {
            "id": 10,
            "text": "Why is balancing self-testing and independent testing recommended?",
            "options": [
                "It ensures that testing is done faster and cheaper.",
                "It leverages the strengths of both approaches for a more effective testing process.",
                "Self-testing alone is sufficient for finding all critical defects.",
                "Independent testing tends to be biased against the development team."
            ],
            "answer": 1,
            "explanation": "It leverages the strengths of both approaches for a more effective testing process.",
            "keywords": "leverages · strengths · ≠ cheaper/defects/team"
        },
        {
            "id": 11,
            "text": "What role does creativity play in software testing?",
            "options": [
                "It makes the testing process longer",
                "It helps uncover defects not apparent through scripted test cases",
                "It standardizes test case design",
                "It reduces the need for exploratory testing"
            ],
            "answer": 1,
            "explanation": "It helps uncover defects not apparent through scripted test cases",
            "keywords": "helps · uncover · ≠ longer/design/testing"
        },
        {
            "id": 12,
            "text": "What is the main purpose of regression testing in maintenance testing?",
            "options": [
                "To introduce new defects",
                "To ensure recent changes do not negatively impact existing functionality",
                "To delay software updates",
                "To avoid testing recent changes"
            ],
            "answer": 1,
            "explanation": "To ensure recent changes do not negatively impact existing functionality",
            "keywords": "ensure · negatively · ≠ defects/updates/testing"
        },
        {
            "id": 13,
            "text": "What does the principle \"Exhaustive Testing is Impossible\" imply for testers?",
            "options": [
                "Testers must focus on critical and high-risk areas",
                "Testers should not prioritize testing activities",
                "Testers should repeat the same tests multiple times",
                "Testers should aim to test every possible scenario"
            ],
            "answer": 0,
            "explanation": "Testers must focus on critical and high-risk areas",
            "keywords": "must · focus · ≠ activities/times/scenario"
        },
        {
            "id": 14,
            "text": "Which phase involves reviewing test objectives, criteria, and deliverables to determine if they have been met?",
            "options": [
                "Test Closure",
                "Test Evaluation and Reporting",
                "Test Analysis and Design",
                "Test Implementation and Execution"
            ],
            "answer": 0,
            "explanation": "Test Closure",
            "keywords": "Closure · ≠ Reporting/Design/Execution"
        },
        {
            "id": 15,
            "text": "What is risk in the context of software testing?",
            "options": [
                "The possibility of an undesirable outcome",
                "The guaranteed occurrence of a failure",
                "A measure of financial investment in the software",
                "The probability that an undesirable outcome will not occur"
            ],
            "answer": 0,
            "explanation": "The possibility of an undesirable outcome",
            "keywords": "possibility · ≠ failure/software/occur"
        },
        {
            "id": 16,
            "text": "Which of the following best defines a 'defect'?",
            "options": [
                "A feature requested by the user after development has begun",
                "An attribute that enhances system performance",
                "Documentation that is difficult to understand",
                "A flaw in the system that can cause it to fail"
            ],
            "answer": 3,
            "explanation": "A flaw in the system that can cause it to fail",
            "keywords": "flaw · cause · ≠ begun/performance/understand"
        },
        {
            "id": 17,
            "text": "What is the key focus of high-level test planning regarding resources?",
            "options": [
                "To ensure that necessary resources are adequately allocated",
                "To minimize resource allocation",
                "To focus only on personnel",
                "To avoid using automated tools"
            ],
            "answer": 0,
            "explanation": "To ensure that necessary resources are adequately allocated",
            "keywords": "ensure · necessary · ≠ allocation/personnel/tools"
        },
        {
            "id": 18,
            "text": "What is the relationship between testing and quality assurance?",
            "options": [
                "Quality assurance does not include testing",
                "Testing is only a formality in the process",
                "Testing is the sole activity in quality assurance",
                "Testing forms part of the quality assurance activities"
            ],
            "answer": 3,
            "explanation": "Testing forms part of the quality assurance activities",
            "keywords": "forms · part · ≠ include/process/activity"
        },
        {
            "id": 19,
            "text": "Which phase includes recording test results and any defects found?",
            "options": [
                "Test Closure",
                "Test Planning and Control",
                "Test Analysis and Design",
                "Test Implementation and Execution"
            ],
            "answer": 3,
            "explanation": "Test Implementation and Execution",
            "keywords": "Implementation · Execution · ≠ Closure/Control/Design"
        },
        {
            "id": 20,
            "text": "What is the purpose of end-to-end scenarios in system testing?",
            "options": [
                "To test individual components",
                "To skip integration testing",
                "To simulate real-world usage and ensure the system operates correctly in a fully integrated environment",
                "To validate only the user interface"
            ],
            "answer": 2,
            "explanation": "To simulate real-world usage and ensure the system operates correctly in a fully integrated environment",
            "keywords": "simulate · real-world · ≠ components/testing/interface"
        },
        {
            "id": 21,
            "text": "What principle challenges the effectiveness of running the same set of tests repeatedly?",
            "options": [
                "Defect clustering",
                "Pesticide paradox",
                "Early testing",
                "Absence-of-errors fallacy"
            ],
            "answer": 1,
            "explanation": "Pesticide paradox",
            "keywords": "Pesticide · paradox · ≠ clustering/testing/fallacy"
        },
        {
            "id": 22,
            "text": "What type of scenarios are typically used in system testing?",
            "options": [
                "Hypothetical scenarios",
                "Regression tests",
                "End-to-end scenarios",
                "Unit tests"
            ],
            "answer": 2,
            "explanation": "End-to-end scenarios",
            "keywords": "End-to-end · ≠ Hypothetical/tests"
        },
        {
            "id": 23,
            "text": "What fundamental principle is highlighted by the \"Absence-of-errors fallacy\"?",
            "options": [
                "Defect fixing alone does not ensure the system meets user needs.",
                "A defect-free system is always the most user-friendly.",
                "Fixing defects ensures the system is useful and meets user expectations.",
                "Testing can guarantee a defect-free product."
            ],
            "answer": 0,
            "explanation": "Defect fixing alone does not ensure the system meets user needs.",
            "keywords": "alone · does · ≠ user-friendly/expectations/product"
        },
        {
            "id": 24,
            "text": "What principle implies that testing can show the defects exist but not their absence?",
            "options": [
                "Absence-of-errors fallacy",
                "Pesticide paradox",
                "Testing shows presence of defects",
                "Early testing"
            ],
            "answer": 2,
            "explanation": "Testing shows presence of defects",
            "keywords": "shows · presence · ≠ fallacy/paradox/Early"
        },
        {
            "id": 25,
            "text": "How does ongoing quality assurance benefit maintenance testing?",
            "options": [
                "By reducing the need for regular testing",
                "By continuously helping to detect and correct defects over time",
                "By skipping regression tests",
                "By focusing only on new features"
            ],
            "answer": 1,
            "explanation": "By continuously helping to detect and correct defects over time",
            "keywords": "continuously · helping · ≠ testing/tests/features"
        },
        {
            "id": 26,
            "text": "How does the principle of defect clustering influence test efforts?",
            "options": [
                "It suggests that all software modules should be tested equally.",
                "It discourages testing in areas with frequent failures.",
                "It guides testers to focus efforts where past experience indicates most defects arise.",
                "It suggests focusing more testing on areas that are less likely to fail."
            ],
            "answer": 2,
            "explanation": "It guides testers to focus efforts where past experience indicates most defects arise.",
            "keywords": "guides · testers · ≠ equally/failures/fail"
        },
        {
            "id": 27,
            "text": "What does the \"Absence-of-errors fallacy\" tell us about software quality?",
            "options": [
                "Software without known defects will satisfy users.",
                "A system can meet requirements yet fail to meet user needs and expectations.",
                "Quality is only about defect removal.",
                "Software that meets requirements will always satisfy user needs."
            ],
            "answer": 1,
            "explanation": "A system can meet requirements yet fail to meet user needs and expectations.",
            "keywords": "system · yet · ≠ users/removal/satisfy"
        },
        {
            "id": 28,
            "text": "Which is an outcome of effective software testing?",
            "options": [
                "Increased software development time",
                "Reduced risk of defects in operational software",
                "Reduced software functionality",
                "Increased number of defects"
            ],
            "answer": 1,
            "explanation": "Reduced risk of defects in operational software",
            "keywords": "risk · operational · ≠ time/functionality/number"
        },
        {
            "id": 29,
            "text": "During which activity are test results evaluated against exit criteria?",
            "options": [
                "Test implementation and execution",
                "Evaluating exit criteria and reporting",
                "Test planning and control",
                "Test analysis and design"
            ],
            "answer": 1,
            "explanation": "Evaluating exit criteria and reporting",
            "keywords": "Evaluating · exit · ≠ execution/control/design"
        },
        {
            "id": 30,
            "text": "What is the significance of having clear objectives in testing?",
            "options": [
                "They contribute to a structured and focused testing effort.",
                "They are mainly for satisfying stakeholder requirements.",
                "They reduce the need for tester involvement.",
                "They eliminate the need for independent testing."
            ],
            "answer": 0,
            "explanation": "They contribute to a structured and focused testing effort.",
            "keywords": "contribute · structured · ≠ requirements/involvement/independent"
        },
        {
            "id": 31,
            "text": "Why is testing considered context dependent?",
            "options": [
                "Context is irrelevant in modern software testing.",
                "Different contexts require different testing approaches.",
                "The same testing methods apply to all software products.",
                "Testing is independent of the software environment."
            ],
            "answer": 1,
            "explanation": "Different contexts require different testing approaches.",
            "keywords": "Different · contexts · ≠ software/products/environment"
        },
        {
            "id": 32,
            "text": "Which activity in the fundamental test process includes setting up the test environment?",
            "options": [
                "Test implementation and execution",
                "Test planning and control",
                "Test analysis and design",
                "Test closure activities"
            ],
            "answer": 0,
            "explanation": "Test implementation and execution",
            "keywords": "implementation · execution · ≠ control/design/activities"
        },
        {
            "id": 33,
            "text": "During which phase are test cases developed based on identified test conditions?",
            "options": [
                "Test Closure",
                "Test Planning and Control",
                "Test Implementation and Execution",
                "Test Analysis and Design"
            ],
            "answer": 3,
            "explanation": "Test Analysis and Design",
            "keywords": "Analysis · Design · ≠ Closure/Control/Execution"
        },
        {
            "id": 34,
            "text": "How do mistakes in software development lead to defects?",
            "options": [
                "By following testing procedures accurately",
                "By incorrect implementation of software changes",
                "Through extensive documentation",
                "Through careful analysis and design"
            ],
            "answer": 1,
            "explanation": "By incorrect implementation of software changes",
            "keywords": "incorrect · implementation · ≠ accurately/documentation/design"
        },
        {
            "id": 35,
            "text": "What is the goal of test closure activities?",
            "options": [
                "To plan the next phases of testing",
                "To analyze test results and report on test coverage",
                "To archive results and learn from the test process",
                "To ensure that the test cases are executed as planned"
            ],
            "answer": 2,
            "explanation": "To archive results and learn from the test process",
            "keywords": "archive · learn · ≠ testing/coverage/planned"
        },
        {
            "id": 36,
            "text": "Which factor does NOT contribute to the necessity of software testing?",
            "options": [
                "Human fallibility",
                "Complex software systems",
                "Perfect software design",
                "Changing requirements"
            ],
            "answer": 2,
            "explanation": "Perfect software design",
            "keywords": "Perfect · design · ≠ fallibility/systems/requirements"
        },
        {
            "id": 37,
            "text": "What best describes the role of respectful communication in software testing?",
            "options": [
                "It is unnecessary when the results are satisfactory",
                "It primarily serves to simplify the defect management process",
                "It helps in effective feedback and improves the development process",
                "It is only important in large teams"
            ],
            "answer": 2,
            "explanation": "It helps in effective feedback and improves the development process",
            "keywords": "helps · effective · ≠ satisfactory/management/teams"
        },
        {
            "id": 38,
            "text": "Why is testing necessary for compliance purposes?",
            "options": [
                "To verify that software complies with regulatory standards and requirements",
                "To reduce the need for software documentation",
                "To ensure the software meets user interface design standards",
                "To make software development more complex"
            ],
            "answer": 0,
            "explanation": "To verify that software complies with regulatory standards and requirements",
            "keywords": "verify · complies · ≠ documentation/design/complex"
        },
        {
            "id": 39,
            "text": "Why is the test environment set-up included in test implementation?",
            "options": [
                "It is used for developing test cases.",
                "It is only relevant during test case design.",
                "The environment needs to be ready for executing test cases.",
                "It is part of the test closure activities."
            ],
            "answer": 2,
            "explanation": "The environment needs to be ready for executing test cases.",
            "keywords": "environment · needs · ≠ developing/design/activities"
        },
        {
            "id": 40,
            "text": "Which type of testing ensures that the system's functions conform to specified requirements?",
            "options": [
                "Regression Testing",
                "Non-Functional Testing",
                "Unit Testing",
                "Functional Testing"
            ],
            "answer": 3,
            "explanation": "Functional Testing",
            "keywords": "≠ Regression/Non-Functional/Unit"
        },
        {
            "id": 41,
            "text": "What does the 'pesticide paradox' in software testing refer to?",
            "options": [
                "The increased use of automated testing tools",
                "The decrease in software quality over time",
                "The reduction of experienced testers in the industry",
                "The diminishing effectiveness of running the same set of tests repeatedly"
            ],
            "answer": 3,
            "explanation": "The diminishing effectiveness of running the same set of tests repeatedly",
            "keywords": "diminishing · effectiveness · ≠ tools/time/industry"
        },
        {
            "id": 42,
            "text": "What is a critical factor in the success of testing according to the psychology of testing?",
            "options": [
                "Using complex tools",
                "Extensive documentation",
                "Having clear objectives",
                "Applying the latest technologies"
            ],
            "answer": 2,
            "explanation": "Having clear objectives",
            "keywords": "Having · clear · ≠ tools/documentation/technologies"
        },
        {
            "id": 43,
            "text": "What role do assumptions and blind spots play in software testing?",
            "options": [
                "They accelerate the testing process",
                "They ensure software meets user expectations",
                "They help in accurate defect prediction",
                "They might cause testers to overlook defects"
            ],
            "answer": 3,
            "explanation": "They might cause testers to overlook defects",
            "keywords": "might · cause · ≠ process/expectations/prediction"
        },
        {
            "id": 44,
            "text": "Why is exhaustive testing considered impossible according to testing principles?",
            "options": [
                "It is too time-consuming and not cost-effective.",
                "Software systems are generally too simple for such testing.",
                "It does not align with agile methodologies.",
                "All combinations of inputs and preconditions are not feasible to test."
            ],
            "answer": 3,
            "explanation": "All combinations of inputs and preconditions are not feasible to test.",
            "keywords": "combinations · inputs · ≠ cost-effective/testing/methodologies"
        },
        {
            "id": 45,
            "text": "Component testing is also known as:",
            "options": [
                "Acceptance Testing",
                "Integration Testing",
                "Unit Testing",
                "System Testing"
            ],
            "answer": 2,
            "explanation": "Unit Testing",
            "keywords": "Unit · ≠ Acceptance/Integration/System"
        },
        {
            "id": 46,
            "text": "What does the activity of test analysis and design involve?",
            "options": [
                "Final review and archival of testware",
                "Creation of detailed test designs and test cases",
                "Setting up the test environment",
                "Execution of test cases"
            ],
            "answer": 1,
            "explanation": "Creation of detailed test designs and test cases",
            "keywords": "Creation · detailed · ≠ testware/environment/Execution"
        },
        {
            "id": 47,
            "text": "During which test process activity are test conditions initially identified?",
            "options": [
                "Test implementation and execution",
                "Test closure",
                "Test planning and control",
                "Test analysis and design"
            ],
            "answer": 3,
            "explanation": "Test analysis and design",
            "keywords": "analysis · design · ≠ execution/closure/control"
        },
        {
            "id": 48,
            "text": "What is the benefit of executing end-to-end scenarios in system testing?",
            "options": [
                "To test isolated components",
                "To ensure the system operates correctly in a fully integrated environment",
                "To reduce testing time",
                "To focus on the user interface only"
            ],
            "answer": 1,
            "explanation": "To ensure the system operates correctly in a fully integrated environment",
            "keywords": "ensure · system · ≠ components/time/only"
        },
        {
            "id": 49,
            "text": "According to the principle \"Testing Shows Presence of Defects,\" what is a key takeaway?",
            "options": [
                "Testing should be performed only at the end of the development cycle",
                "Testing is unnecessary if no defects are found in early stages",
                "Testing can only show that defects are present, not that they are absent",
                "Testing can prove that software is defect-free"
            ],
            "answer": 2,
            "explanation": "Testing can only show that defects are present, not that they are absent",
            "keywords": "show · present · ≠ cycle/stages/defect-free"
        },
        {
            "id": 50,
            "text": "When are test strategies typically developed?",
            "options": [
                "During test implementation and execution",
                "During test planning and control",
                "During test analysis and design",
                "During evaluating exit criteria and reporting"
            ],
            "answer": 1,
            "explanation": "During test planning and control",
            "keywords": "planning · control · ≠ execution/design/reporting"
        },
        {
            "id": 51,
            "text": "In the context of psychological factors, why is independent testing preferred?",
            "options": [
                "It typically leads to faster development cycles.",
                "It reduces the collaboration required between testers and developers.",
                "It helps to align testing with customer requirements exclusively.",
                "It eliminates all potential biases that might affect the judgment of quality."
            ],
            "answer": 3,
            "explanation": "It eliminates all potential biases that might affect the judgment of quality.",
            "keywords": "eliminates · potential · ≠ cycles/developers/exclusively"
        },
        {
            "id": 52,
            "text": "What does the \"Absence-of-errors fallacy\" suggest about testing?",
            "options": [
                "Removing all defects guarantees a successful product.",
                "Even if a system meets requirements, it might still not be what users need and want.",
                "Finding and fixing defects guarantees software usability.",
                "Software without defects fulfills all user requirements."
            ],
            "answer": 1,
            "explanation": "Even if a system meets requirements, it might still not be what users need and want.",
            "keywords": "Even · system · ≠ product/usability/fulfills"
        },
        {
            "id": 53,
            "text": "Why is independent testing considered important?",
            "options": [
                "It increases software complexity",
                "It reduces the need for communication",
                "It provides an objective assessment",
                "It simplifies the testing process"
            ],
            "answer": 2,
            "explanation": "It provides an objective assessment",
            "keywords": "provides · objective · ≠ complexity/communication/process"
        },
        {
            "id": 54,
            "text": "What is the rationale behind the principle of \"Early testing\"?",
            "options": [
                "Early testing increases software costs.",
                "Testing is less effective when done early.",
                "Testing should only begin after development is completed.",
                "Testing should start as early as possible in the software development lifecycle."
            ],
            "answer": 3,
            "explanation": "Testing should start as early as possible in the software development lifecycle.",
            "keywords": "start · possible · ≠ costs/done/completed"
        },
        {
            "id": 55,
            "text": "Which activity ensures that the test environment supports all test cases?",
            "options": [
                "Test planning and control",
                "Test implementation and execution",
                "Test closure activities",
                "Test analysis and design"
            ],
            "answer": 1,
            "explanation": "Test implementation and execution",
            "keywords": "implementation · execution · ≠ control/activities/design"
        },
        {
            "id": 56,
            "text": "Why is exhaustive testing impractical?",
            "options": [
                "Exhaustive testing is only impractical for small systems.",
                "It is always possible to test all combinations of inputs and conditions.",
                "Testing should be done randomly to save resources.",
                "Testing all combinations of inputs and preconditions is not feasible except for trivial cases."
            ],
            "answer": 3,
            "explanation": "Testing all combinations of inputs and preconditions is not feasible except for trivial cases.",
            "keywords": "preconditions · feasible · ≠ systems/possible/resources"
        },
        {
            "id": 57,
            "text": "What is a non-functional characteristic of software that might be tested?",
            "options": [
                "The color of the user interface",
                "The correctness of implemented functions",
                "The response time of a system",
                "The method used for storing data"
            ],
            "answer": 2,
            "explanation": "The response time of a system",
            "keywords": "response · time · ≠ interface/functions/data"
        },
        {
            "id": 58,
            "text": "What is a key aspect to consider during test closure activities?",
            "options": [
                "Prioritizing test cases for the next test cycle",
                "Developing new test cases for future test phases",
                "Revising the test basis and test design",
                "Documenting lessons learned and retaining test artifacts"
            ],
            "answer": 3,
            "explanation": "Documenting lessons learned and retaining test artifacts",
            "keywords": "Documenting · lessons · ≠ cycle/phases/design"
        },
        {
            "id": 59,
            "text": "Why is early test design important in the V-Model?",
            "options": [
                "It integrates testing with requirements gathering and design phases",
                "It delays the development process",
                "It helps discover issues late in the development cycle",
                "It increases the cost of testing"
            ],
            "answer": 0,
            "explanation": "It integrates testing with requirements gathering and design phases",
            "keywords": "integrates · requirements · ≠ process/cycle/cost"
        },
        {
            "id": 60,
            "text": "How can defects in software cause harm?",
            "options": [
                "They enhance user satisfaction",
                "They have no real impact on users or environment",
                "They can lead to financial loss, injury, or environmental damage",
                "They improve software performance"
            ],
            "answer": 2,
            "explanation": "They can lead to financial loss, injury, or environmental damage",
            "keywords": "lead · financial · ≠ satisfaction/users/performance"
        },
        {
            "id": 61,
            "text": "What is a common technique used in maintenance testing to quickly verify the system after each change?",
            "options": [
                "Automated regression testing",
                "Performance testing",
                "Manual testing",
                "Usability testing"
            ],
            "answer": 0,
            "explanation": "Automated regression testing",
            "keywords": "Automated · regression · ≠ Performance/Manual/Usability"
        },
        {
            "id": 62,
            "text": "What is the role of impact analysis in maintenance testing?",
            "options": [
                "To avoid testing after changes",
                "To focus only on performance testing",
                "To evaluate the impact of changes and ensure all affected areas are tested",
                "To assess the overall quality of the test team"
            ],
            "answer": 2,
            "explanation": "To evaluate the impact of changes and ensure all affected areas are tested",
            "keywords": "evaluate · impact · ≠ after/testing/team"
        },
        {
            "id": 63,
            "text": "During which test activity is the test environment verified for correctness?",
            "options": [
                "Evaluating exit criteria and reporting",
                "Test implementation and execution",
                "Test planning and control",
                "Test analysis and design"
            ],
            "answer": 1,
            "explanation": "Test implementation and execution",
            "keywords": "implementation · execution · ≠ reporting/control/design"
        },
        {
            "id": 64,
            "text": "Which of the following is an example of a heuristic technique used in software testing?",
            "options": [
                "Boundary Value Analysis",
                "Writing exhaustive test cases",
                "Setting up test environments",
                "Developing software code"
            ],
            "answer": 0,
            "explanation": "Boundary Value Analysis",
            "keywords": "Boundary · Value · ≠ cases/environments/code"
        },
        {
            "id": 65,
            "text": "Why is independent testing beneficial from a psychological perspective?",
            "options": [
                "It allows testers to avoid learning the system thoroughly.",
                "It prevents developers from understanding the code.",
                "It offers an objective view free from the influence of project pressures.",
                "It is required by all software development methodologies."
            ],
            "answer": 2,
            "explanation": "It offers an objective view free from the influence of project pressures.",
            "keywords": "offers · objective · ≠ thoroughly/code/methodologies"
        },
        {
            "id": 66,
            "text": "In the context of software testing, what does 'quality assurance' focus on?",
            "options": [
                "Delaying the release of software",
                "Ensuring the software meets user expectations and performs as intended",
                "Reducing the number of test cases",
                "Increasing software complexity"
            ],
            "answer": 1,
            "explanation": "Ensuring the software meets user expectations and performs as intended",
            "keywords": "Ensuring · meets · ≠ release/cases/complexity"
        },
        {
            "id": 67,
            "text": "Which approach helps in maintaining good relationships between testers and developers?",
            "options": [
                "Focusing solely on automated tests",
                "Encouraging competition on defect findings",
                "Providing constructive feedback on defects",
                "Minimizing interaction between testers and developers"
            ],
            "answer": 2,
            "explanation": "Providing constructive feedback on defects",
            "keywords": "Providing · constructive · ≠ tests/findings/developers"
        },
        {
            "id": 68,
            "text": "What does Principle 1 \"Testing shows presence of defects\" in software testing suggest?",
            "options": [
                "Testing identifies all possible defects in the software.",
                "Testing proves that software is defect-free.",
                "Testing eliminates the need for quality assurance.",
                "Testing can show that defects are present, but cannot prove that there are no defects."
            ],
            "answer": 3,
            "explanation": "Testing can show that defects are present, but cannot prove that there are no defects.",
            "keywords": "show · present · ≠ software/defect-free/assurance"
        },
        {
            "id": 69,
            "text": "According to the code of ethics, what is the importance of confidentiality in software testing?",
            "options": [
                "To share sensitive information widely",
                "To avoid reporting defects",
                "To respect and protect sensitive information obtained during testing",
                "To disclose information to unauthorized parties"
            ],
            "answer": 2,
            "explanation": "To respect and protect sensitive information obtained during testing",
            "keywords": "respect · protect · ≠ widely/defects/parties"
        },
        {
            "id": 70,
            "text": "What impact does the psychology of testing have on defect reporting?",
            "options": [
                "It ensures that all defects are reported anonymously.",
                "Psychological understanding has no real impact on defect reporting.",
                "It can influence how defects are perceived and addressed by the team.",
                "It requires that defects be reported in technical terms only."
            ],
            "answer": 2,
            "explanation": "It can influence how defects are perceived and addressed by the team.",
            "keywords": "influence · how · ≠ anonymously/reporting/only"
        },
        {
            "id": 71,
            "text": "What is the benefit of knowing the psychological differences between testers and developers?",
            "options": [
                "It promotes a unified approach to problem-solving within the team.",
                "It can help in tailoring communication and collaboration strategies.",
                "It reduces the necessity for quality controls in software development.",
                "It encourages a more competitive environment between roles."
            ],
            "answer": 1,
            "explanation": "It can help in tailoring communication and collaboration strategies.",
            "keywords": "help · tailoring · ≠ team/development/roles"
        },
        {
            "id": 72,
            "text": "What marks the beginning of test closure activities?",
            "options": [
                "Finalizing and archiving testware",
                "Meeting the exit criteria",
                "Beginning of test execution",
                "Completion of test case execution"
            ],
            "answer": 1,
            "explanation": "Meeting the exit criteria",
            "keywords": "Meeting · exit · ≠ testware/execution"
        },
        {
            "id": 73,
            "text": "What is a key benefit of thorough testing for customer satisfaction?",
            "options": [
                "It ensures software is free of critical defects and meets user needs",
                "It increases the complexity of software",
                "It reduces the need for user feedback",
                "It makes software development slower"
            ],
            "answer": 0,
            "explanation": "It ensures software is free of critical defects and meets user needs",
            "keywords": "ensures · free · ≠ complexity/feedback/slower"
        },
        {
            "id": 74,
            "text": "How does early testing benefit the software development process?",
            "options": [
                "By identifying defects only at the final stages.",
                "By finding defects early when they are cheaper to fix.",
                "By delaying defect detection until after release.",
                "By increasing the overall cost of testing."
            ],
            "answer": 1,
            "explanation": "By finding defects early when they are cheaper to fix.",
            "keywords": "finding · early · ≠ stages/release/testing"
        },
        {
            "id": 75,
            "text": "What does the Defect Clustering principle suggest?",
            "options": [
                "Defects are less likely in critical functionalities",
                "Defects are evenly distributed throughout the software",
                "Defects occur only in the final stages of development",
                "Most defects are found in a small number of modules"
            ],
            "answer": 3,
            "explanation": "Most defects are found in a small number of modules",
            "keywords": "Most · found · ≠ functionalities/software/development"
        },
        {
            "id": 76,
            "text": "Why is user involvement crucial in acceptance testing?",
            "options": [
                "Users can write the code",
                "Users avoid using the software",
                "Users execute unit tests",
                "Users ensure the software meets their needs and requirements"
            ],
            "answer": 3,
            "explanation": "Users ensure the software meets their needs and requirements",
            "keywords": "ensure · meets · ≠ code/using/tests"
        },
        {
            "id": 77,
            "text": "What is a major goal of integration testing in the large?",
            "options": [
                "To test isolated components",
                "To conduct exploratory testing",
                "To develop new test tools",
                "To verify interactions between different systems or subsystems"
            ],
            "answer": 3,
            "explanation": "To verify interactions between different systems or subsystems",
            "keywords": "verify · interactions · ≠ components/testing/tools"
        },
        {
            "id": 78,
            "text": "Which bias involves favoring information that confirms preexisting beliefs?",
            "options": [
                "Gambler's Fallacy",
                "Confirmation Bias",
                "Anchoring Bias",
                "Availability Bias"
            ],
            "answer": 1,
            "explanation": "Confirmation Bias",
            "keywords": "Confirmation · ≠ Fallacy/Anchoring/Availability"
        },
        {
            "id": 79,
            "text": "What is a crucial aspect of high-level test planning for managing uncertainties?",
            "options": [
                "Ignoring possible risks",
                "Identifying potential risks and devising mitigation strategies",
                "Postponing testing activities",
                "Reducing the number of test cases"
            ],
            "answer": 1,
            "explanation": "Identifying potential risks and devising mitigation strategies",
            "keywords": "Identifying · potential · ≠ possible/activities/cases"
        },
        {
            "id": 80,
            "text": "What is the primary benefit of understanding the psychological factors in testing?",
            "options": [
                "It simplifies compliance with software standards.",
                "It enhances the interaction and effectiveness of the testing team.",
                "It allows for complete automation of the testing process.",
                "It eliminates the need for quality assurance."
            ],
            "answer": 1,
            "explanation": "It enhances the interaction and effectiveness of the testing team.",
            "keywords": "enhances · interaction · ≠ standards/process/assurance"
        },
        {
            "id": 81,
            "text": "During large-scale integration testing, what must be verified about interfaces and protocols?",
            "options": [
                "They are documented properly",
                "They are ignored during testing",
                "They are used only in small systems",
                "Data is correctly exchanged between systems using the appropriate protocols and interfaces"
            ],
            "answer": 3,
            "explanation": "Data is correctly exchanged between systems using the appropriate protocols and interfaces",
            "keywords": "Data · correctly · ≠ properly/testing/small"
        },
        {
            "id": 82,
            "text": "What is the main focus of risk mitigation in software testing?",
            "options": [
                "To increase development time",
                "To identify and address issues before they impact users",
                "To ensure that testing is done only at the end of the development process",
                "To make the testing process more complex"
            ],
            "answer": 1,
            "explanation": "To identify and address issues before they impact users",
            "keywords": "identify · address · ≠ time/process/complex"
        },
        {
            "id": 83,
            "text": "What is an essential activity of test implementation and execution?",
            "options": [
                "Completing the test plan documentation",
                "Developing a detailed project schedule",
                "Conducting high-level risk assessments",
                "Executing test cases according to planned procedures"
            ],
            "answer": 3,
            "explanation": "Executing test cases according to planned procedures",
            "keywords": "Executing · cases · ≠ documentation/schedule/assessments"
        },
        {
            "id": 84,
            "text": "Which activity is essential for effective communication in testing?",
            "options": [
                "Setting up test environments",
                "Clearly articulating findings and advocating for quality",
                "Developing test cases",
                "Executing test procedures"
            ],
            "answer": 1,
            "explanation": "Clearly articulating findings and advocating for quality",
            "keywords": "Clearly · articulating · ≠ environments/cases/procedures"
        },
        {
            "id": 85,
            "text": "How does an understanding of the psychological aspects help in testing?",
            "options": [
                "It helps create a more collaborative and effective testing environment.",
                "It reduces the overall cost of testing.",
                "It enables testers to work independently without oversight.",
                "It maximizes the use of test automation tools."
            ],
            "answer": 0,
            "explanation": "It helps create a more collaborative and effective testing environment.",
            "keywords": "helps · create · ≠ cost/oversight/tools"
        },
        {
            "id": 86,
            "text": "According to the principle of \"Defect clustering,\" where should testing efforts be focused?",
            "options": [
                "On areas least likely to have defects.",
                "Primarily on areas historically shown to contain the most defects.",
                "Uniformly across all areas of the software.",
                "Only on new or changed parts of the software."
            ],
            "answer": 1,
            "explanation": "Primarily on areas historically shown to contain the most defects.",
            "keywords": "Primarily · historically · ≠ likely/software"
        },
        {
            "id": 87,
            "text": "What is the first activity in the fundamental test process?",
            "options": [
                "Test implementation and execution",
                "Test closure activities",
                "Test planning",
                "Evaluating exit criteria and reporting"
            ],
            "answer": 2,
            "explanation": "Test planning",
            "keywords": "planning · ≠ execution/activities/reporting"
        },
        {
            "id": 88,
            "text": "Which aspect is LEAST likely to be directly improved by software testing?",
            "options": [
                "Software user interface color scheme",
                "Software performance",
                "Software reliability",
                "Software security"
            ],
            "answer": 0,
            "explanation": "Software user interface color scheme",
            "keywords": "user · interface · ≠ performance/reliability/security"
        },
        {
            "id": 89,
            "text": "What impact do environmental conditions have on software testing?",
            "options": [
                "They improve the accuracy of testing results",
                "They simplify the testing process",
                "They can influence the outcome of tests by causing hardware to fail",
                "They have no impact as software is intangible"
            ],
            "answer": 2,
            "explanation": "They can influence the outcome of tests by causing hardware to fail",
            "keywords": "influence · outcome · ≠ results/process/intangible"
        },
        {
            "id": 90,
            "text": "Why is it important to consider the context in which software operates during testing?",
            "options": [
                "It allows for less detailed testing",
                "It reduces the time required for testing",
                "It influences the risk and approach to testing",
                "It is irrelevant to the outcome of testing"
            ],
            "answer": 2,
            "explanation": "It influences the risk and approach to testing",
            "keywords": "influences · risk · ≠ detailed/required/outcome"
        },
        {
            "id": 91,
            "text": "Which phase involves the use of stubs and drivers?",
            "options": [
                "System Testing",
                "Integration Testing in the Small",
                "Maintenance Testing",
                "Acceptance Testing"
            ],
            "answer": 1,
            "explanation": "Integration Testing in the Small",
            "keywords": "Integration · Small · ≠ System/Maintenance/Acceptance"
        },
        {
            "id": 92,
            "text": "What is meant by \"Defect clustering\" in software testing?",
            "options": [
                "Defects are evenly distributed throughout the software.",
                "Clustering defects makes them easier to fix.",
                "Most defects are found in a small number of modules.",
                "All software modules have an equal chance of being defective."
            ],
            "answer": 2,
            "explanation": "Most defects are found in a small number of modules.",
            "keywords": "Most · found · ≠ software/fix/defective"
        },
        {
            "id": 93,
            "text": "High-level test planning involves allocating which of the following resources?",
            "options": [
                "Only personnel",
                "Only environments",
                "Only tools",
                "Personnel, tools, and environments"
            ],
            "answer": 3,
            "explanation": "Personnel, tools, and environments",
            "keywords": "≠ Only"
        },
        {
            "id": 94,
            "text": "Why is a balance between self-testing and independent testing recommended?",
            "options": [
                "To ensure that testing is done under strict supervision",
                "To comply with international testing standards",
                "To avoid any form of testing altogether",
                "To leverage both detailed and objective testing perspectives"
            ],
            "answer": 3,
            "explanation": "To leverage both detailed and objective testing perspectives",
            "keywords": "leverage · both · ≠ supervision/standards/altogether"
        },
        {
            "id": 95,
            "text": "Which of the following best describes the relationship between error, defect, and failure?",
            "options": [
                "Defect prevents error and avoids failure",
                "Error leads to defect, which can cause failure",
                "Failure causes defects which lead to errors",
                "They are interchangeable terms with the same meaning"
            ],
            "answer": 1,
            "explanation": "Error leads to defect, which can cause failure",
            "keywords": "leads · ≠ avoids/errors/meaning"
        },
        {
            "id": 96,
            "text": "What is incremental integration in integration testing?",
            "options": [
                "Testing all components at once",
                "Skipping testing of individual components",
                "Testing only after full system integration",
                "Integrating and testing components one at a time or in small groups"
            ],
            "answer": 3,
            "explanation": "Integrating and testing components one at a time or in small groups",
            "keywords": "Integrating · time · ≠ once/individual/integration"
        },
        {
            "id": 97,
            "text": "What is one of the main purposes of the Test Evaluation and Reporting phase?",
            "options": [
                "Reviewing test objectives and deliverables",
                "Analyzing test results to assess software quality",
                "Developing test procedures and data",
                "Setting up test environments"
            ],
            "answer": 1,
            "explanation": "Analyzing test results to assess software quality",
            "keywords": "Analyzing · results · ≠ deliverables/data/environments"
        },
        {
            "id": 98,
            "text": "Which activity focuses on preparing test procedures and test data?",
            "options": [
                "Test analysis and design",
                "Test planning and control",
                "Test implementation and execution",
                "Test closure"
            ],
            "answer": 2,
            "explanation": "Test implementation and execution",
            "keywords": "implementation · execution · ≠ design/control/closure"
        },
        {
            "id": 99,
            "text": "Which phase of the fundamental test process involves defining test objectives and scope?",
            "options": [
                "Test Closure",
                "Test Planning and Control",
                "Test Implementation and Execution",
                "Test Analysis and Design"
            ],
            "answer": 1,
            "explanation": "Test Planning and Control",
            "keywords": "Planning · Control · ≠ Closure/Execution/Design"
        },
        {
            "id": 100,
            "text": "What does test planning and control primarily involve?",
            "options": [
                "Comparing test results with expected outcomes",
                "Creating test cases and test suites",
                "Setting up the test environment",
                "Defining the objectives and scope of testing"
            ],
            "answer": 3,
            "explanation": "Defining the objectives and scope of testing",
            "keywords": "Defining · objectives · ≠ outcomes/suites/environment"
        },
        {
            "id": 101,
            "text": "What is the Pesticide Paradox principle in software testing?",
            "options": [
                "Repeating the same tests will continue to find new defects",
                "Repeating the same tests may not reveal new defects",
                "Defects are evenly distributed throughout the software",
                "Testing should be done only once"
            ],
            "answer": 1,
            "explanation": "Repeating the same tests may not reveal new defects",
            "keywords": "may · reveal · ≠ find/software/once"
        },
        {
            "id": 102,
            "text": "What is primarily evaluated during the 'evaluating exit criteria and reporting' phase?",
            "options": [
                "The readiness of the software based on exit criteria",
                "The setup of the test environment",
                "Test strategies and test development",
                "Whether all test cases have been executed"
            ],
            "answer": 0,
            "explanation": "The readiness of the software based on exit criteria",
            "keywords": "readiness · software · ≠ environment/development/executed"
        },
        {
            "id": 103,
            "text": "What does early test design in the V-Model aim to achieve?",
            "options": [
                "To anticipate and address issues sooner",
                "To focus only on system testing",
                "To delay defect discovery",
                "To increase development costs"
            ],
            "answer": 0,
            "explanation": "To anticipate and address issues sooner",
            "keywords": "anticipate · address · ≠ testing/discovery/costs"
        },
        {
            "id": 104,
            "text": "Which principle states that the absence of reported defects doesn't necessarily mean the software is defect-free?",
            "options": [
                "Early Testing",
                "Defect Clustering",
                "Testing Shows Presence of Defects",
                "Absence-of-Errors Fallacy"
            ],
            "answer": 3,
            "explanation": "Absence-of-Errors Fallacy",
            "keywords": "Absence-of-Errors · Fallacy · ≠ Testing/Clustering/Defects"
        },
        {
            "id": 105,
            "text": "Why should testers maintain independence and objectivity?",
            "options": [
                "To introduce bias in their testing activities",
                "To collaborate closely with developers",
                "To avoid conflicts of interest and ensure unbiased assessments",
                "To influence test results favorably"
            ],
            "answer": 2,
            "explanation": "To avoid conflicts of interest and ensure unbiased assessments",
            "keywords": "avoid · conflicts · ≠ activities/developers/favorably"
        },
        {
            "id": 106,
            "text": "Non-functional testing focuses on which of the following aspects?",
            "options": [
                "User interactions only",
                "Features and operations",
                "Code quality",
                "Performance, scalability, security, usability, and reliability"
            ],
            "answer": 3,
            "explanation": "Performance, scalability, security, usability, and reliability",
            "keywords": "Performance · scalability · ≠ only/operations/quality"
        },
        {
            "id": 107,
            "text": "Who primarily performs the test closure activities?",
            "options": [
                "Customers and users",
                "Test analysts only",
                "Developers and designers",
                "Test managers and testers"
            ],
            "answer": 3,
            "explanation": "Test managers and testers",
            "keywords": "managers · testers · ≠ users/only/designers"
        },
        {
            "id": 108,
            "text": "What is a key focus during acceptance testing?",
            "options": [
                "Testing the software under real-world conditions",
                "Configuring the test environment",
                "Writing unit tests",
                "Developing new features"
            ],
            "answer": 0,
            "explanation": "Testing the software under real-world conditions",
            "keywords": "Testing · software · ≠ environment/tests/features"
        },
        {
            "id": 109,
            "text": "What is the most effective way to use testing to improve quality?",
            "options": [
                "By outsourcing testing to reduce costs",
                "By only testing the new features of the software",
                "By performing minimal testing on all features",
                "By focusing on areas of the software most likely to have defects"
            ],
            "answer": 3,
            "explanation": "By focusing on areas of the software most likely to have defects",
            "keywords": "focusing · areas · ≠ costs/features"
        },
        {
            "id": 110,
            "text": "In large-scale integration testing, what is critical for systems that rely on external services?",
            "options": [
                "Testing only the internal components",
                "Ensuring seamless interactions between different systems or subsystems",
                "Testing the user interface only",
                "Ignoring external services"
            ],
            "answer": 1,
            "explanation": "Ensuring seamless interactions between different systems or subsystems",
            "keywords": "Ensuring · seamless · ≠ components/only/services"
        },
        {
            "id": 111,
            "text": "In the fundamental test process, what follows test planning and control?",
            "options": [
                "Test closure activities",
                "Evaluating exit criteria and reporting",
                "Test analysis and design",
                "Test implementation and execution"
            ],
            "answer": 2,
            "explanation": "Test analysis and design",
            "keywords": "analysis · design · ≠ activities/reporting/execution"
        },
        {
            "id": 112,
            "text": "In the V-Model, which testing phase corresponds to the requirements analysis phase?",
            "options": [
                "Integration Testing",
                "Unit Testing",
                "Acceptance Testing",
                "System Testing"
            ],
            "answer": 2,
            "explanation": "Acceptance Testing",
            "keywords": "Acceptance · ≠ Integration/Unit/System"
        },
        {
            "id": 113,
            "text": "What is a potential risk of not having independent testing?",
            "options": [
                "It can lead to redundant testing efforts.",
                "Independent testing slows down the development process.",
                "Too much reliance on developer testing can miss defects.",
                "Independent testing always uncovers more defects."
            ],
            "answer": 2,
            "explanation": "Too much reliance on developer testing can miss defects.",
            "keywords": "Too · much · ≠ efforts/process/more"
        },
        {
            "id": 114,
            "text": "How does context dependency influence testing?",
            "options": [
                "It varies testing based on software's intended use and associated risks",
                "It promotes the use of fewer testing tools",
                "It encourages less testing to reduce costs",
                "It mandates that all software should be tested in the same way"
            ],
            "answer": 0,
            "explanation": "It varies testing based on software's intended use and associated risks",
            "keywords": "varies · based · ≠ tools/costs/way"
        },
        {
            "id": 115,
            "text": "Why is documenting lessons learned important in test closure activities?",
            "options": [
                "It is a mandatory requirement for all testing standards.",
                "It helps improve future testing cycles and processes.",
                "It assists developers in coding future applications.",
                "It is used to grade tester performance."
            ],
            "answer": 1,
            "explanation": "It helps improve future testing cycles and processes.",
            "keywords": "helps · improve · ≠ standards/applications/performance"
        },
        {
            "id": 116,
            "text": "In integration testing, what are stubs used for?",
            "options": [
                "Generating test data",
                "Mimicking the behavior of lower-level modules",
                "Simulating higher-level modules",
                "Replacing the entire system"
            ],
            "answer": 1,
            "explanation": "Mimicking the behavior of lower-level modules",
            "keywords": "Mimicking · behavior · ≠ data/higher-level/system"
        },
        {
            "id": 117,
            "text": "What is the benefit of having test conditions specified before testing begins?",
            "options": [
                "It provides clear goals and objectives for the tests",
                "It reduces the variety of tests needed",
                "It allows developers to perform all tests",
                "It eliminates the need for a testing team"
            ],
            "answer": 0,
            "explanation": "It provides clear goals and objectives for the tests",
            "keywords": "provides · clear · ≠ needed/perform/team"
        },
        {
            "id": 118,
            "text": "How does independent testing benefit the software development process?",
            "options": [
                "Introduces more defects for learning purposes",
                "Reduces development time significantly",
                "Ensures that the system is user-friendly",
                "Provides an unbiased view, likely catching different defects"
            ],
            "answer": 3,
            "explanation": "Provides an unbiased view, likely catching different defects",
            "keywords": "Provides · unbiased · ≠ purposes/significantly/user-friendly"
        },
        {
            "id": 119,
            "text": "What psychological barrier can affect effective testing?",
            "options": [
                "Lack of clear objectives and constructive feedback.",
                "The use of advanced testing tools and technologies.",
                "The physical location of the testing team.",
                "Having too many testers in a team."
            ],
            "answer": 0,
            "explanation": "Lack of clear objectives and constructive feedback.",
            "keywords": "Lack · clear · ≠ technologies/team"
        },
        {
            "id": 120,
            "text": "What does independent testing provide that self-testing does not?",
            "options": [
                "Less formal and structured testing procedures",
                "An unbiased perspective on quality and defects",
                "Quicker feedback loops in the development cycle",
                "A more relaxed approach to finding defects"
            ],
            "answer": 1,
            "explanation": "An unbiased perspective on quality and defects",
            "keywords": "unbiased · perspective · ≠ procedures/cycle/finding"
        },
        {
            "id": 121,
            "text": "How should discrepancies between actual and expected results be handled?",
            "options": [
                "Ignored unless they cause application crashes",
                "Managed through customer feedback only",
                "Documented as incidents and analyzed",
                "Directly fixed by testers without reporting"
            ],
            "answer": 2,
            "explanation": "Documented as incidents and analyzed",
            "keywords": "Documented · incidents · ≠ crashes/only/reporting"
        },
        {
            "id": 122,
            "text": "How do exit criteria influence the test process?",
            "options": [
                "They determine when the test activities should end.",
                "They define when the different test activities should start.",
                "They provide a standard for initiating the test process.",
                "They are irrelevant to the actual test execution."
            ],
            "answer": 0,
            "explanation": "They determine when the test activities should end.",
            "keywords": "determine · end · ≠ start/process/execution"
        },
        {
            "id": 123,
            "text": "According to the psychology of testing, what are heuristics?",
            "options": [
                "Detailed test plans",
                "Automated testing tools",
                "Mental shortcuts or rules of thumb based on experience",
                "Rigorous mathematical models used in testing"
            ],
            "answer": 2,
            "explanation": "Mental shortcuts or rules of thumb based on experience",
            "keywords": "Mental · shortcuts · ≠ plans/tools/testing"
        },
        {
            "id": 124,
            "text": "What should be done if the exit criteria are not met in the evaluating exit criteria phase?",
            "options": [
                "Continue testing to meet the criteria",
                "Begin test planning for the next cycle",
                "Stop testing immediately",
                "Archive all test results and end the test cycle"
            ],
            "answer": 0,
            "explanation": "Continue testing to meet the criteria",
            "keywords": "⚠ NOT · Continue · meet · ≠ cycle/immediately"
        },
        {
            "id": 125,
            "text": "Which concept in the psychology of testing involves understanding how testers perceive software behavior and make decisions?",
            "options": [
                "Cognitive Processes",
                "Biases and Fallacies",
                "Creativity and Exploration",
                "Heuristics and Mental Models"
            ],
            "answer": 0,
            "explanation": "Cognitive Processes",
            "keywords": "Cognitive · Processes · ≠ Fallacies/Exploration/Models"
        },
        {
            "id": 126,
            "text": "Why should clear objectives be established for testing?",
            "options": [
                "To facilitate precise and effective communication of expectations.",
                "To ensure that the development team feels pressured.",
                "To make the testing process longer and more thorough.",
                "To minimize the need for tester involvement in planning."
            ],
            "answer": 0,
            "explanation": "To facilitate precise and effective communication of expectations.",
            "keywords": "facilitate · precise · ≠ pressured/thorough/planning"
        },
        {
            "id": 127,
            "text": "What challenge does the \"Pesticide paradox\" describe in software testing?",
            "options": [
                "Repeated use of the same tests enhances software performance.",
                "All tests are equally effective at finding defects.",
                "Pesticides are often used to eliminate software bugs.",
                "The same tests, when repeated, eventually will not find new defects."
            ],
            "answer": 3,
            "explanation": "The same tests, when repeated, eventually will not find new defects.",
            "keywords": "when · eventually · ≠ performance/finding/bugs"
        },
        {
            "id": 128,
            "text": "How does the principle of transparency and accountability apply to software testing?",
            "options": [
                "By avoiding responsibility for testing actions",
                "By hiding testing methodologies and findings",
                "By providing clear and accurate information to stakeholders",
                "By disclosing defects only to selected team members"
            ],
            "answer": 2,
            "explanation": "By providing clear and accurate information to stakeholders",
            "keywords": "providing · clear · ≠ actions/findings/members"
        },
        {
            "id": 129,
            "text": "What is the purpose of conducting a post-mortem or lessons learned session in Test Closure?",
            "options": [
                "To execute more test cases",
                "To set up new test environments",
                "To identify strengths, weaknesses, and areas for improvement",
                "To develop new test strategies"
            ],
            "answer": 2,
            "explanation": "To identify strengths, weaknesses, and areas for improvement",
            "keywords": "identify · strengths · ≠ cases/environments/strategies"
        },
        {
            "id": 130,
            "text": "Which phase of the V-Model emphasizes the importance of defining acceptance criteria?",
            "options": [
                "Integration Testing",
                "System Testing",
                "Unit Testing",
                "Acceptance Testing"
            ],
            "answer": 3,
            "explanation": "Acceptance Testing",
            "keywords": "Acceptance · ≠ Integration/System/Unit"
        },
        {
            "id": 131,
            "text": "How does the principle of \"Early testing\" influence the testing timeline?",
            "options": [
                "Encourages integration of testing throughout the development lifecycle.",
                "Recommends testing only after code is completely written.",
                "Advises on testing only during the maintenance phase.",
                "Suggests delaying testing until system testing phase."
            ],
            "answer": 0,
            "explanation": "Encourages integration of testing throughout the development lifecycle.",
            "keywords": "Encourages · integration · ≠ written/phase"
        },
        {
            "id": 132,
            "text": "What should be a key outcome of the evaluating exit criteria and reporting phase?",
            "options": [
                "Decisions regarding the continuation or stoppage of testing",
                "Developing new test tools and methods",
                "Finalizing the software release without further review",
                "Planning for the next development cycle"
            ],
            "answer": 0,
            "explanation": "Decisions regarding the continuation or stoppage of testing",
            "keywords": "Decisions · regarding · ≠ methods/review/cycle"
        },
        {
            "id": 133,
            "text": "Why might a software defect introduced during requirements specification be particularly costly?",
            "options": [
                "It can propagate through to later stages, increasing fixing costs",
                "It is less important than defects introduced during coding",
                "It requires less testing resources",
                "It is usually detected by the end users"
            ],
            "answer": 0,
            "explanation": "It can propagate through to later stages, increasing fixing costs",
            "keywords": "propagate · through · ≠ coding/resources/users"
        },
        {
            "id": 134,
            "text": "What psychological factor is important when giving feedback on defects?",
            "options": [
                "Ensuring feedback is timely but critical",
                "Providing feedback in a constructive and positive manner",
                "Emphasizing the quantity of defects found",
                "Focusing on the personal faults of developers"
            ],
            "answer": 1,
            "explanation": "Providing feedback in a constructive and positive manner",
            "keywords": "Providing · constructive · ≠ critical/found/developers"
        },
        {
            "id": 135,
            "text": "How can testing contribute to improving future software projects?",
            "options": [
                "By requiring fewer tests in future projects",
                "By documenting defects that can be avoided in future projects",
                "By completely eliminating the need for testing",
                "By ensuring that no future projects are necessary"
            ],
            "answer": 1,
            "explanation": "By documenting defects that can be avoided in future projects",
            "keywords": "documenting · defects · ≠ tests/testing/necessary"
        },
        {
            "id": 136,
            "text": "How does the mindset of a tester differ from that of a developer?",
            "options": [
                "Both roles focus on defect detection and fixing.",
                "A tester critically evaluates the product for defects; a developer focuses on creating the product.",
                "There is no significant difference; both perform the same functions.",
                "A tester focuses only on documentation, whereas a developer focuses on building features."
            ],
            "answer": 1,
            "explanation": "A tester critically evaluates the product for defects; a developer focuses on creating the product.",
            "keywords": "critically · evaluates · ≠ fixing/functions/features"
        },
        {
            "id": 137,
            "text": "Which type of software would likely require the most rigorous testing?",
            "options": [
                "A simple calculator app",
                "A personal blog",
                "A temporary data storage system",
                "A safety-critical system in an automobile"
            ],
            "answer": 3,
            "explanation": "A safety-critical system in an automobile",
            "keywords": "safety-critical · automobile · ≠ app/blog/storage"
        },
        {
            "id": 138,
            "text": "How do clear, respectful communications affect the testing process?",
            "options": [
                "They improve understanding and cooperation between team members.",
                "They have no impact on the effectiveness of testing.",
                "They discourage transparency about defects.",
                "They limit the scope of testing to only critical defects."
            ],
            "answer": 0,
            "explanation": "They improve understanding and cooperation between team members.",
            "keywords": "improve · understanding · ≠ testing/defects"
        },
        {
            "id": 139,
            "text": "What can hinder effective testing due to psychological factors?",
            "options": [
                "Over-reliance on automated testing tools",
                "Clear objectives",
                "Poor communication of defects",
                "Independent testing practices"
            ],
            "answer": 2,
            "explanation": "Poor communication of defects",
            "keywords": "Poor · communication · ≠ tools/objectives/practices"
        },
        {
            "id": 140,
            "text": "In the V-Model, what is the primary benefit of mapping each development phase to a corresponding testing phase?",
            "options": [
                "It ensures every phase has a corresponding validation process",
                "It reduces the number of test cases",
                "It skips the design phase",
                "It delays the testing process"
            ],
            "answer": 0,
            "explanation": "It ensures every phase has a corresponding validation process",
            "keywords": "ensures · every · ≠ cases/design/testing"
        },
        {
            "id": 141,
            "text": "What does testing aim to achieve in terms of quality assurance?",
            "options": [
                "Prevention of defects by early detection and correction",
                "Elimination of all errors before design",
                "Assurance that no testing is required",
                "Demonstration that defects do not exist"
            ],
            "answer": 0,
            "explanation": "Prevention of defects by early detection and correction",
            "keywords": "Prevention · early · ≠ design/required/exist"
        },
        {
            "id": 142,
            "text": "What is a key reason that software testing is necessary?",
            "options": [
                "To increase software complexity",
                "To identify defects in software",
                "To reduce software features",
                "To speed up software development"
            ],
            "answer": 1,
            "explanation": "To identify defects in software",
            "keywords": "identify · defects · ≠ complexity/features/development"
        },
        {
            "id": 143,
            "text": "How does test planning and control assist in managing risks?",
            "options": [
                "By reporting defects post-release",
                "By eliminating all risks through exhaustive testing",
                "By ensuring all tests are automated",
                "By defining test objectives linked to risk assessments"
            ],
            "answer": 3,
            "explanation": "By defining test objectives linked to risk assessments",
            "keywords": "defining · objectives · ≠ post-release/testing/automated"
        },
        {
            "id": 144,
            "text": "Which principle in the code of ethics emphasizes maintaining high standards of professional competence?",
            "options": [
                "Independence and Objectivity",
                "Confidentiality",
                "Integrity",
                "Professional Competence"
            ],
            "answer": 3,
            "explanation": "Professional Competence",
            "keywords": "Professional · Competence · ≠ Objectivity/Confidentiality/Integrity"
        },
        {
            "id": 145,
            "text": "Why is early testing important in the software development lifecycle?",
            "options": [
                "It ensures defects are addressed before they become more challenging to fix",
                "It delays the software release",
                "It increases the cost of rectification",
                "It allows for more features to be added"
            ],
            "answer": 0,
            "explanation": "It ensures defects are addressed before they become more challenging to fix",
            "keywords": "ensures · defects · ≠ release/rectification/added"
        },
        {
            "id": 146,
            "text": "How does exhaustive testing differ from risk-based testing?",
            "options": [
                "Exhaustive testing tests every possible input and precondition",
                "Risk-based testing is a theoretical concept only",
                "Risk-based testing focuses only on module testing",
                "Exhaustive testing is less thorough than risk-based testing"
            ],
            "answer": 0,
            "explanation": "Exhaustive testing tests every possible input and precondition",
            "keywords": "tests · every · ≠ only/module/risk-based"
        },
        {
            "id": 147,
            "text": "Which activity is part of the Test Closure phase?",
            "options": [
                "Preparing test closure reports and documentation",
                "Identifying test conditions and scenarios",
                "Executing test cases according to the test plan",
                "Recording test results, including observed outcomes"
            ],
            "answer": 0,
            "explanation": "Preparing test closure reports and documentation",
            "keywords": "Preparing · closure · ≠ scenarios/plan/outcomes"
        },
        {
            "id": 148,
            "text": "Why is automation used in component testing?",
            "options": [
                "To provide quick feedback and maintain code quality",
                "To facilitate manual testing",
                "To eliminate the need for testing",
                "To slow down the testing process"
            ],
            "answer": 0,
            "explanation": "To provide quick feedback and maintain code quality",
            "keywords": "provide · quick · ≠ testing/process"
        },
        {
            "id": 149,
            "text": "Which testing principle suggests that testing should be started as early as possible?",
            "options": [
                "Defect clustering",
                "Exhaustive testing",
                "Early testing",
                "Pesticide paradox"
            ],
            "answer": 2,
            "explanation": "Early testing",
            "keywords": "Early · ≠ clustering/Exhaustive/paradox"
        },
        {
            "id": 150,
            "text": "Why might developers and testers have conflicts?",
            "options": [
                "Developers and testers always work in separate environments.",
                "Their roles require adopting different mindsets toward the product.",
                "Testers are often seen as responsible for project delays.",
                "Testers and developers never interact directly."
            ],
            "answer": 1,
            "explanation": "Their roles require adopting different mindsets toward the product.",
            "keywords": "Their · roles · ≠ environments/delays/directly"
        },
        {
            "id": 151,
            "text": "What does the \"Pesticide paradox\" suggest about the need for test case review?",
            "options": [
                "Reusing test cases guarantees the detection of more defects.",
                "The more test cases, the better the software quality.",
                "Test cases do not need regular updates.",
                "Test cases need to be regularly reviewed and revised to find more defects."
            ],
            "answer": 3,
            "explanation": "Test cases need to be regularly reviewed and revised to find more defects.",
            "keywords": "regularly · reviewed · ≠ detection/quality/updates"
        },
        {
            "id": 152,
            "text": "What does managing testware involve in test closure activities?",
            "options": [
                "Archiving test outputs and environments for future use",
                "Ignoring testware once the product is released",
                "Deleting all test cases to protect intellectual property",
                "Reusing test cases for different test cycles without modification"
            ],
            "answer": 0,
            "explanation": "Archiving test outputs and environments for future use",
            "keywords": "Archiving · outputs · ≠ released/property/modification"
        },
        {
            "id": 153,
            "text": "Which of the following is a primary goal of software testing?",
            "options": [
                "To ensure that software is delivered without any documentation",
                "To increase the number of features in the software",
                "To improve the quality, reliability, and performance of software products",
                "To shorten the development lifecycle"
            ],
            "answer": 2,
            "explanation": "To improve the quality, reliability, and performance of software products",
            "keywords": "improve · quality · ≠ documentation/features/lifecycle"
        },
        {
            "id": 154,
            "text": "What does the principle of \"Testing is context dependent\" emphasize?",
            "options": [
                "The approach to testing may vary depending on the software and its environment.",
                "Testing methods do not vary in different situations.",
                "The necessity to apply the same testing standards across all software types.",
                "Testing should always be performed under the same conditions."
            ],
            "answer": 0,
            "explanation": "The approach to testing may vary depending on the software and its environment.",
            "keywords": "approach · may · ≠ situations/types/conditions"
        },
        {
            "id": 155,
            "text": "How should testers communicate about defects?",
            "options": [
                "In a detailed and technical language only",
                "Only through written reports",
                "Briefly and infrequently",
                "Respectfully and constructively"
            ],
            "answer": 3,
            "explanation": "Respectfully and constructively",
            "keywords": "Respectfully · constructively · ≠ only/reports/infrequently"
        },
        {
            "id": 156,
            "text": "How can clear and objective testing objectives affect the testing process?",
            "options": [
                "They discourage thorough and detailed testing.",
                "They are generally too difficult to define and rarely used.",
                "They lead to a more focused and efficient testing effort.",
                "They may cause confusion and misalignment in team goals."
            ],
            "answer": 2,
            "explanation": "They lead to a more focused and efficient testing effort.",
            "keywords": "lead · more · ≠ detailed/rarely/goals"
        },
        {
            "id": 157,
            "text": "What is the purpose of the test implementation and execution phase?",
            "options": [
                "To analyze the test basis and identify test conditions",
                "To define the overall approach to testing",
                "To evaluate whether testing is complete",
                "To execute test cases and log the outcomes"
            ],
            "answer": 3,
            "explanation": "To execute test cases and log the outcomes",
            "keywords": "execute · cases · ≠ conditions/testing/complete"
        },
        {
            "id": 158,
            "text": "What role does courteous communication play in testing?",
            "options": [
                "It is not important in automated testing",
                "It ensures faster project delivery",
                "It increases the technical skills of the team",
                "It helps convey defect feedback effectively"
            ],
            "answer": 3,
            "explanation": "It helps convey defect feedback effectively",
            "keywords": "helps · convey · ≠ testing/delivery/team"
        },
        {
            "id": 159,
            "text": "What is an effect of poor communication between testers and developers?",
            "options": [
                "It may lead to misunderstandings and reduced software quality.",
                "It has no effect as long as testing is done independently.",
                "It improves the independence of the testing function.",
                "It enhances the efficiency of the development and testing processes."
            ],
            "answer": 0,
            "explanation": "It may lead to misunderstandings and reduced software quality.",
            "keywords": "may · lead · ≠ independently/function/processes"
        },
        {
            "id": 160,
            "text": "What is a major challenge in testing modern software applications?",
            "options": [
                "The complexity and integration of systems",
                "The absence of defects in software",
                "The reduction in software functionality",
                "The simplicity of software interfaces"
            ],
            "answer": 0,
            "explanation": "The complexity and integration of systems",
            "keywords": "complexity · integration · ≠ software/functionality/interfaces"
        },
        {
            "id": 161,
            "text": "What is the role of root cause analysis in testing?",
            "options": [
                "To calculate the profitability of software projects",
                "To determine the cost of software production",
                "To identify the underlying reasons for defects",
                "To decide the software release date"
            ],
            "answer": 2,
            "explanation": "To identify the underlying reasons for defects",
            "keywords": "identify · underlying · ≠ projects/production/date"
        },
        {
            "id": 162,
            "text": "What is the significance of context in testing according to the principles?",
            "options": [
                "It suggests that testing should always follow the same international standards.",
                "It is irrelevant since all testing follows the same standard.",
                "It is critical as testing approaches should vary based on the specific context.",
                "Context is only important in large, complex systems."
            ],
            "answer": 2,
            "explanation": "It is critical as testing approaches should vary based on the specific context.",
            "keywords": "critical · approaches · ≠ standards/standard/systems"
        },
        {
            "id": 163,
            "text": "Who is typically responsible for conducting acceptance testing?",
            "options": [
                "System administrators",
                "Developers",
                "End-users or clients",
                "Testers only"
            ],
            "answer": 2,
            "explanation": "End-users or clients",
            "keywords": "End-users · clients · ≠ administrators/Developers/only"
        },
        {
            "id": 164,
            "text": "Which of the following best defines software testing?",
            "options": [
                "The process of compiling software code",
                "The process of writing code for software",
                "The process of evaluating a software application to identify defects",
                "The process of installing software on user devices"
            ],
            "answer": 2,
            "explanation": "The process of evaluating a software application to identify defects",
            "keywords": "evaluating · application · ≠ software code/for software/user devices"
        },
        {
            "id": 165,
            "text": "What is the primary purpose of exit criteria in testing?",
            "options": [
                "To define when a test phase can be concluded",
                "To specify the software release date",
                "To identify the initial testing requirements",
                "To increase the complexity of tests"
            ],
            "answer": 0,
            "explanation": "To define when a test phase can be concluded",
            "keywords": "define · when · ≠ date/requirements/tests"
        },
        {
            "id": 166,
            "text": "What is the main focus of system testing in terms of functionality?",
            "options": [
                "Conducting user training",
                "Integrating subsystems",
                "Ensuring system functions conform to specified requirements",
                "Testing individual components"
            ],
            "answer": 2,
            "explanation": "Ensuring system functions conform to specified requirements",
            "keywords": "Ensuring · functions · ≠ training/subsystems/components"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swt_pt1"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
