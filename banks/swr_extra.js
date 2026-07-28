/** Ngân hàng câu hỏi: SWR Extra (183 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
            "text": "What are the purposes of prioritizing the requirements? Choose 2 correct answers.",
            "options": [
                "To ensure that the team implements the highest value or most timely functionality first",
                "To determine which release or increment will contain each feature or set of requirements",
                "To finish the project faster",
                "To facilitate the release of the product"
            ],
            "answer": 0,
            "explanation": "To ensure that the team implements the highest value or most timely functionality first · To determine which release or increment will contain each feature or set of requirements",
            "keywords": "Q: What are the purposes of prioritizing the requirements? | A: To ensure that the team implements",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 2,
            "text": "What do product champions do? Choose 2 correct answers.",
            "options": [
                "They gather requirements from other members of the user classes they represent and reconcile inconsistencies.",
                "They serve as the primary interface between members of a single user class and the project's business analyst.",
                "They implement the coding standards.",
                "They write requirements documents."
            ],
            "answer": 0,
            "explanation": "They gather requirements from other members of the user classes they represent and reconcile inconsistencies. · They serve as the primary interface between members of a single user class and the project's business analyst.",
            "keywords": "Q: What do product champions do? Choose 2 correct | A: They gather requirements from other members",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 3,
            "text": "What technique is used to represent the scope of a project? Choose 2 correct answers.",
            "options": [
                "Ecosystem map",
                "Use case",
                "Context diagram",
                "ERD"
            ],
            "answer": 0,
            "explanation": "Ecosystem map · Context diagram",
            "keywords": "Q: What technique is used to represent the scope | A: Ecosystem map · Context diagram",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 4,
            "text": "Which elements are mandatory in use case? Choose 2 answers.",
            "options": [
                "Post-condition",
                "Actors",
                "Pre-condition",
                "Name"
            ],
            "answer": 1,
            "explanation": "Actors · Name",
            "keywords": "Q: Which elements are mandatory in use case? Choose | A: Actors · Name",
            "answers": [
                1,
                3
            ]
        },
        {
            "id": 5,
            "text": "Which one is a non-functional requirement? Choose 2 correct answers.",
            "options": [
                "The messages between the client and server shall be in YAML 1.2 format.",
                "The user shall be able to select the course number.",
                "Communication between the client and server will be expressed in EBCDIC encoding."
            ],
            "answer": 0,
            "explanation": "The messages between the client and server shall be in YAML 1.2 format. · Communication between the client and server will be expressed in EBCDIC encoding.",
            "keywords": "Q: Which one is a non-functional requirement? Choose 2 | A: The messages between the client and",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 6,
            "text": "Which of the following statements accurately describe user stories and epics in agile development? Select all that apply.",
            "options": [
                "Story decomposition refers to breaking down user stories into smaller epics for implementation in agile projects.",
                "Epics are user stories that are too large to be implemented in a single iteration.",
                "User stories are concise statements that articulate user needs and serve as a starting point for detailed discussions."
            ],
            "answer": 1,
            "explanation": "Epics are user stories that are too large to be implemented in a single iteration. · User stories are concise statements that articulate user needs and serve as a starting point for detailed discussions.",
            "keywords": "Q: Which of the following statements accurately describe user | A: Epics are user stories that are",
            "answers": [
                1,
                2
            ]
        },
        {
            "id": 7,
            "text": "Requirements engineering can be split into: Choose 2 correct answers.",
            "options": [
                "requirements development",
                "requirements management",
                "requirements elicitation",
                "requirements confirmation"
            ],
            "answer": 0,
            "explanation": "requirements development · requirements management",
            "keywords": "Q: Requirements engineering can be split into: Choose 2 | A: requirements development · requirements management",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 8,
            "text": "To illustrate the data object relationships, which kinds of representation should be used? Choose 2 correct answers.",
            "options": [
                "Entity-relationship diagram",
                "Class diagram",
                "Data dictionary",
                "Context diagram"
            ],
            "answer": 0,
            "explanation": "Entity-relationship diagram · Class diagram",
            "keywords": "Q: To illustrate the data object relationships, which kinds | A: Entity-relationship diagram · Class diagram",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 9,
            "text": "Two important goals of writing requirements are that: Choose 2 answers.",
            "options": [
                "Anyone who reads the requirement comes to the same interpretation as any other reader.",
                "Each reader's interpretation matches what the author intended to communicate.",
                "Developers find the requirements technically easy to understand.",
                "Customers are happy."
            ],
            "answer": 0,
            "explanation": "Anyone who reads the requirement comes to the same interpretation as any other reader. · Each reader's interpretation matches what the author intended to communicate.",
            "keywords": "Q: Two important goals of writing requirements are that: | A: Anyone who reads the requirement comes",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 10,
            "text": "The tasks of a business analyst include: Choose 2 correct answers.",
            "options": [
                "Documenting business requirements.",
                "Directing testing tasks for product development.",
                "Directing programming tasks for product development.",
                "Identifying user classes of the product."
            ],
            "answer": 0,
            "explanation": "Documenting business requirements. · Identifying user classes of the product.",
            "keywords": "Q: The tasks of a business analyst include: Choose | A: Documenting business requirements. · Identifying user",
            "answers": [
                0,
                3
            ]
        },
        {
            "id": 11,
            "text": "We can reuse all authentication requirements from the previous project by copy from a library of reusable components. Which dimensions does the statement refer to?",
            "options": [
                "extent of modification",
                "reuse mechanism",
                "extent of reuse"
            ],
            "answer": 1,
            "explanation": "reuse mechanism · extent of reuse",
            "keywords": "Q: We can reuse all authentication requirements from the | A: reuse mechanism · extent of reuse",
            "answers": [
                1,
                2
            ]
        },
        {
            "id": 12,
            "text": "What is true about a software prototype? Choose 3 correct answers.",
            "options": [
                "It is a partial implementation of a proposed new product.",
                "It is a possible implementation of a proposed new product.",
                "It is a preliminary implementation of a proposed new product.",
                "It is a complete implementation of a proposed new product."
            ],
            "answer": 0,
            "explanation": "It is a partial implementation of a proposed new product. · It is a possible implementation of a proposed new product. · It is a preliminary implementation of a proposed new product.",
            "keywords": "Q: What is true about a software prototype? Choose | A: It is a partial implementation of",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 13,
            "text": "What are the tasks of a business analyst? Choose 3 correct answers.",
            "options": [
                "Define business requirements",
                "Identify project stakeholders and user classes",
                "Document requirements",
                "Lead requirements prioritization"
            ],
            "answer": 0,
            "explanation": "Define business requirements · Identify project stakeholders and user classes · Document requirements",
            "keywords": "Q: What are the tasks of a business analyst? | A: Define business requirements · Identify project",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 14,
            "text": "What does acceptance criteria include? Choose 3 correct answers.",
            "options": [
                "Passing a defined set of acceptance tests based on user requirements",
                "Demonstrating satisfaction of specific nonfunctional requirements",
                "Tracking open defects and issues",
                "Having a trendy user interface"
            ],
            "answer": 0,
            "explanation": "Passing a defined set of acceptance tests based on user requirements · Demonstrating satisfaction of specific nonfunctional requirements · Tracking open defects and issues",
            "keywords": "Q: What does acceptance criteria include? Choose 3 correct | A: Passing a defined set of acceptance",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 15,
            "text": "What should a business analyst do in an Agile project? Choose 3 correct answers.",
            "options": [
                "Define a lightweight, flexible requirements process and adapt it as the project warrants",
                "Ensure that requirements documentation is at the right level: very detailed",
                "Help validate that customer needs are accurately represented in the product backlog",
                "Facilitate backlog prioritization"
            ],
            "answer": 0,
            "explanation": "Define a lightweight, flexible requirements process and adapt it as the project warrants · Help validate that customer needs are accurately represented in the product backlog · Facilitate backlog prioritization",
            "keywords": "Q: What should a business analyst do in an | A: Define a lightweight, flexible requirements process",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 16,
            "text": "Which of the following are true about a dashboard? Choose 3 correct answers.",
            "options": [
                "It is a screen display or printed report.",
                "It uses multiple textual and/or graphical representations of data.",
                "It aims to provide a consolidated, multidimensional view of what is going on in an organization or a process.",
                "It is a brochure to promote the product."
            ],
            "answer": 0,
            "explanation": "It is a screen display or printed report. · It uses multiple textual and/or graphical representations of data. · It aims to provide a consolidated, multidimensional view of what is going on in an organization or a process.",
            "keywords": "Q: Which of the following are true about a | A: It is a screen display or",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 17,
            "text": "Which of the following are the signals indicating that you have completed requirements elicitation? Choose 3 correct answers.",
            "options": [
                "Users repeat issues they already covered in previous discussions.",
                "Suggested new features, user requirements, or functional requirements are all deemed to be out of scope.",
                "Proposed new requirements are all low priority.",
                "Developers and testers who review the requirements for an area raise many questions."
            ],
            "answer": 0,
            "explanation": "Users repeat issues they already covered in previous discussions. · Suggested new features, user requirements, or functional requirements are all deemed to be out of scope. · Proposed new requirements are all low priority.",
            "keywords": "Q: Which of the following are the signals indicating | A: Users repeat issues they already covered",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 18,
            "text": "Which of the following are common places and ways to look for business rules? Choose 3 correct answers.",
            "options": [
                "\"Common knowledge\" from the organization, often collected from individuals who have worked with the business for a long time and know the details of how it operates.",
                "Legacy systems that embed business rules in their requirements and code.",
                "Analysis of existing documentation, including requirements specifications from earlier projects, regulations, industry standards, corporate policy documents, contracts, and business plans.",
                "Business laws"
            ],
            "answer": 0,
            "explanation": "\"Common knowledge\" from the organization, often collected from individuals who have worked with the business for a long time and know the details of how it operates. · Legacy systems that embed business rules in their requirements and code. · Analysis of existing documentation, including requirements specifications from earlier projects, regulations, industry standards, corporate policy documents, contracts, and business plans.",
            "keywords": "Q: Which of the following are common places and | A: \"Common knowledge\" from the organization, often",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 19,
            "text": "Why do we have to label the requirements in a software requirements specification (SRS)? Choose 3 correct answers.",
            "options": [
                "It allows us to refer to specific requirements in a change request, modification history, cross-reference, or requirements traceability matrix.",
                "It enables reusing the requirements in multiple projects.",
                "It facilitates collaboration between team members when they're discussing requirements.",
                "It makes the SRS look more professional."
            ],
            "answer": 0,
            "explanation": "It allows us to refer to specific requirements in a change request, modification history, cross-reference, or requirements traceability matrix. · It enables reusing the requirements in multiple projects. · It facilitates collaboration between team members when they're discussing requirements.",
            "keywords": "Q: Why do we have to label the requirements | A: It allows us to refer to",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 20,
            "text": "Customers have the right to: Choose 3 correct answers.",
            "options": [
                "expect business analysts to learn about their business and their objectives",
                "describe characteristics that will make the product easy to use",
                "receive a system that meets their functional needs and quality expectations",
                "promptly communicate changes to the requirements"
            ],
            "answer": 0,
            "explanation": "expect business analysts to learn about their business and their objectives · describe characteristics that will make the product easy to use · receive a system that meets their functional needs and quality expectations",
            "keywords": "Q: Customers have the right to: Choose 3 correct | A: expect business analysts to learn about",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 21,
            "text": "Entries in the data dictionary represent the following types of data elements: Choose 3 correct answers.",
            "options": [
                "Primitive",
                "Structure",
                "Repeating group",
                "Virtual"
            ],
            "answer": 0,
            "explanation": "Primitive · Structure · Repeating group",
            "keywords": "Q: Entries in the data dictionary represent the following | A: Primitive · Structure · Repeating group",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 22,
            "text": "In software development, what do requirements drive? Choose 3 correct answers.",
            "options": [
                "Project planning",
                "Design and coding",
                "Testing activities",
                "Financial activities"
            ],
            "answer": 0,
            "explanation": "Project planning · Design and coding · Testing activities",
            "keywords": "Q: In software development, what do requirements drive? Choose | A: Project planning · Design and coding",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 23,
            "text": "In agile projects, what is true about an epic? Choose 3 correct answers.",
            "options": [
                "It is a user story that is too large to fully implement in a single iteration.",
                "It must be split into sets of smaller stories.",
                "It can span iterations.",
                "It is the most important feature of an iteration."
            ],
            "answer": 0,
            "explanation": "It is a user story that is too large to fully implement in a single iteration. · It must be split into sets of smaller stories. · It can span iterations.",
            "keywords": "Q: In agile projects, what is true about an | A: It is a user story that",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 24,
            "text": "Requirement statements must be: Choose 3 correct answers.",
            "options": [
                "Feasible",
                "Correct",
                "Verifiable",
                "Flexible"
            ],
            "answer": 0,
            "explanation": "Feasible · Correct · Verifiable",
            "keywords": "Q: Requirement statements must be: Choose 3 correct answers. | A: Feasible · Correct · Verifiable",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 25,
            "text": "The structure of the vision and scope document includes: Choose three correct answers.",
            "options": [
                "Scope and Limitations",
                "Specific Requirements",
                "Business Context",
                "Business Requirements",
                "General Description"
            ],
            "answer": 0,
            "explanation": "Scope and Limitations · Business Context · Business Requirements",
            "keywords": "Q: The structure of the vision and scope document | A: Scope and Limitations · Business Context",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 26,
            "text": "The benefits of effective requirements reuse include: Choose 3 correct answers.",
            "options": [
                "faster delivery",
                "lower development costs",
                "reduced rework",
                "fewer test cases"
            ],
            "answer": 0,
            "explanation": "faster delivery · lower development costs · reduced rework",
            "keywords": "Q: The benefits of effective requirements reuse include: Choose | A: faster delivery · lower development costs",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 27,
            "text": "The elements of risk management are: Choose 3 correct answers.",
            "options": [
                "Risk assessment",
                "Risk avoidance",
                "Risk control",
                "Risk reduction"
            ],
            "answer": 0,
            "explanation": "Risk assessment · Risk control · Risk reduction",
            "keywords": "Q: The elements of risk management are: Choose 3 | A: Risk assessment · Risk control ·",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 28,
            "text": "What is NOT Requirements development tools?",
            "options": [
                "Elicitation tools.",
                "Prototyping tools.",
                "Modeling tools.",
                "Specific tools."
            ],
            "answer": 3,
            "explanation": "Specific tools.",
            "keywords": "Q: What is NOT Requirements development tools? | A: Specific tools."
        },
        {
            "id": 29,
            "text": "What is not the purpose of a Use Case Diagram?",
            "options": [
                "Use case diagrams are both behavior diagrams because they describe the behavior of the system. They are also structure diagrams, serving as a special case of class diagrams where classifiers are restricted to be either actors or use cases related to each other with associations.",
                "Use case diagrams show the graphical user interface that needs to be implemented.",
                "Use case diagrams are usually referred to as behavior diagrams used to describe a set of actions (use cases) that some system or systems (subject) should or can perform in collaboration with one or more external users of the system (actors).",
                "A use case describes a sequence of interactions between a system and an external actor that results in the actor being able to achieve some outcome of value."
            ],
            "answer": 1,
            "explanation": "Use case diagrams show the graphical user interface that needs to be implemented.",
            "keywords": "Q: What is not the purpose of a Use | A: Use case diagrams show the graphical"
        },
        {
            "id": 30,
            "text": "What activities is not included in a representative requirements development process?",
            "options": [
                "Select an appropriate software development life cycle.",
                "Select elicitation techniques",
                "Review requirement",
                "Plan elicitation",
                "Analysis requirement"
            ],
            "answer": 0,
            "explanation": "Select an appropriate software development life cycle.",
            "keywords": "Q: What activities is not included in a representative | A: Select an appropriate software development life"
        },
        {
            "id": 31,
            "text": "Which is NOT activity of risk management?",
            "options": [
                "Risk avoidance",
                "Risk assessment",
                "Risk monitoring",
                "Risk control"
            ],
            "answer": 0,
            "explanation": "Risk avoidance",
            "keywords": "Q: Which is NOT activity of risk management? | A: Risk avoidance"
        },
        {
            "id": 32,
            "text": "Which is NOT element of risk management?",
            "options": [
                "Risk avoidance is one way to deal with a risk: don't do the risky thing.",
                "Risk assessment is the process of examining a project to identify potential threats.",
                "Risk control activities to manage the top-priority risks you identified.",
                "Risk management planning produces a plan for dealing with each significant risk, including mitigation approaches, contingency plans, owners, and timelines."
            ],
            "answer": 0,
            "explanation": "Risk avoidance is one way to deal with a risk: don't do the risky thing.",
            "keywords": "Q: Which is NOT element of risk management? | A: Risk avoidance is one way to"
        },
        {
            "id": 33,
            "text": "Which of the following is not an external quality attribute?",
            "options": [
                "Availability",
                "Integrity",
                "Safety",
                "Reusability"
            ],
            "answer": 3,
            "explanation": "Reusability",
            "keywords": "Q: Which of the following is not an external | A: Reusability"
        },
        {
            "id": 34,
            "text": "Which of the following is not an elicitation technique?",
            "options": [
                "Interviews",
                "Focus groups",
                "Observations",
                "Training courses"
            ],
            "answer": 3,
            "explanation": "Training courses",
            "keywords": "Q: Which of the following is not an elicitation | A: Training courses"
        },
        {
            "id": 35,
            "text": "Which of the following is not included in software requirements specification (SRS) template?",
            "options": [
                "Quality Attributes",
                "External interface",
                "Data requirements",
                "Design features",
                "System features"
            ],
            "answer": 3,
            "explanation": "Design features",
            "keywords": "Q: Which of the following is not included in | A: Design features"
        },
        {
            "id": 36,
            "text": "Which of the following is NOT a characteristic of Software as a service (SaaS)?",
            "options": [
                "Subscription-based pricing",
                "On-premises deployment",
                "Centralized hosting",
                "Internet accessibility"
            ],
            "answer": 1,
            "explanation": "On-premises deployment",
            "keywords": "Q: Which of the following is NOT a characteristic | A: On-premises deployment"
        },
        {
            "id": 37,
            "text": "Which of the following does NOT suggest an overall description of the Software Requirements Specification template?",
            "options": [
                "Product perspective",
                "User classes and characteristics",
                "Operating environment",
                "Design and implementation constraints",
                "Assumptions and dependencies",
                "System feature"
            ],
            "answer": 5,
            "explanation": "System feature",
            "keywords": "Q: Which of the following does NOT suggest an | A: System feature"
        },
        {
            "id": 38,
            "text": "Which of the following is NOT the essential elements of a use case?",
            "options": [
                "ID and Name",
                "Description",
                "A trigger condition",
                "Zero or more preconditions, one or more postconditions",
                "Normal Flow",
                "Alternative flow"
            ],
            "answer": 5,
            "explanation": "Alternative flow",
            "keywords": "Q: Which of the following is NOT the essential | A: Alternative flow"
        },
        {
            "id": 39,
            "text": "Which of the following is not an elicitation activity?",
            "options": [
                "Define product vision and project scope",
                "Hold elicitation interviews",
                "Observe users performing their jobs",
                "Model the application environment"
            ],
            "answer": 0,
            "explanation": "Define product vision and project scope",
            "keywords": "Q: Which of the following is not an elicitation | A: Define product vision and project scope"
        },
        {
            "id": 40,
            "text": "Which of the following is NOT characteristic of the user?",
            "options": [
                "A subset of the product's customers",
                "A subset of the product's users",
                "A superset of stakeholders",
                "Includes direct users and indirect users"
            ],
            "answer": 2,
            "explanation": "A superset of stakeholders",
            "keywords": "Q: Which of the following is NOT characteristic of | A: A superset of stakeholders"
        },
        {
            "id": 41,
            "text": "Which of the following is not a requirement attribute?",
            "options": [
                "Date the requirement was created",
                "Author who wrote the requirement",
                "Status",
                "Customer who came up with the idea about this requirement"
            ],
            "answer": 3,
            "explanation": "Customer who came up with the idea about this requirement",
            "keywords": "Q: Which of the following is not a requirement | A: Customer who came up with the"
        },
        {
            "id": 42,
            "text": "Which of the following is NOT a purpose of creating a mock-up?",
            "options": [
                "To refine user interface design.",
                "To test architectural feasibility.",
                "To allow users to judge the overall workflow and requirements.",
                "To simulate a user interface with no real functionality."
            ],
            "answer": 1,
            "explanation": "To test architectural feasibility.",
            "keywords": "Q: Which of the following is NOT a purpose | A: To test architectural feasibility."
        },
        {
            "id": 43,
            "text": "Which of the following is not a benefit of having a clear set of expectations for product champions?",
            "options": [
                "Encouraging accountability and clarity of role",
                "Helping champions align with project goals",
                "Guaranteeing the project will stay on budget",
                "Facilitating negotiation of the champion's responsibilities"
            ],
            "answer": 2,
            "explanation": "Guaranteeing the project will stay on budget",
            "keywords": "Q: Which of the following is not a benefit | A: Guaranteeing the project will stay on"
        },
        {
            "id": 44,
            "text": "Which of the following is NOT included in the list of Software Bill of Rights Requirements?",
            "options": [
                "Expect BAs to speak your language.",
                "Expect BAs to learn about your business and your objectives.",
                "Promptly communicate changes to the requirements.",
                "Receive explanations of requirements practices and deliverables.",
                "Change your requirements.",
                "Expect an environment of mutual respect."
            ],
            "answer": 2,
            "explanation": "Promptly communicate changes to the requirements.",
            "keywords": "Q: Which of the following is NOT included in | A: Promptly communicate changes to the requirements."
        },
        {
            "id": 45,
            "text": "Which of the following is NOT a principle of software process improvement?",
            "options": [
                "People and organizations change only when they have an incentive to do so.",
                "Prioritizing individual contributions over teamwork",
                "Process changes should be goal-oriented",
                "Process improvement should be evolutionary and continuous"
            ],
            "answer": 1,
            "explanation": "Prioritizing individual contributions over teamwork",
            "keywords": "Q: Which of the following is NOT a principle | A: Prioritizing individual contributions over teamwork"
        },
        {
            "id": 46,
            "text": "Which one of the following is NOT true the software customer?",
            "options": [
                "A subset of stakeholders",
                "An individual or organization that derives either direct or indirect benefit from a product",
                "They could request, pay for, select, specify, use, or receive the output generated by a software product",
                "Such as legal staff, compliance auditors, suppliers"
            ],
            "answer": 3,
            "explanation": "Such as legal staff, compliance auditors, suppliers",
            "keywords": "Q: Which one of the following is NOT true | A: Such as legal staff, compliance auditors,"
        },
        {
            "id": 47,
            "text": "Which of the following is NOT about Requirements validation?",
            "options": [
                "It is the fourth component of requirements development.",
                "It is ensure that they have all the desired properties of high-quality requirements is also an essential activity.",
                "It is assesses whether you have written the right requirements: they trace back to business objectives.",
                "It allows teams to build a correct solution that meets the stated business objectives."
            ],
            "answer": 1,
            "explanation": "It is ensure that they have all the desired properties of high-quality requirements is also an essential activity.",
            "keywords": "Q: Which of the following is NOT about Requirements | A: It is ensure that they have"
        },
        {
            "id": 48,
            "text": "Which of the following is NOT about packaged solution?",
            "options": [
                "You build systems by using your own staff.",
                "It needs to be configured, integrated, and extended to work in the target environment.",
                "You can purchase a package as part or all of the solution for a new project.",
                "Evaluate solution candidates so that you can select the most appropriate package."
            ],
            "answer": 0,
            "explanation": "You build systems by using your own staff.",
            "keywords": "Q: Which of the following is NOT about packaged | A: You build systems by using your"
        },
        {
            "id": 49,
            "text": "Which of the following is NOT about outsourced projects?",
            "options": [
                "It takes advantage of development skills they have available in-house.",
                "It's harder to get developer input on requirements and to pass along user feedback on delivered software to developers.",
                "A formal contractual definition of requirements is necessary, which can lead to contention if differences of interpretation are discovered late in the project."
            ],
            "answer": 0,
            "explanation": "It takes advantage of development skills they have available in-house.",
            "keywords": "Q: Which of the following is NOT about outsourced | A: It takes advantage of development skills"
        },
        {
            "id": 50,
            "text": "Which of the following is NOT about Agile project?",
            "options": [
                "Developers have little interaction with customers after construction begins on projects.",
                "It encourage creating the minimum amount of documentation needed to accurately guide the developers and testers.",
                "BAs or other people responsible for requirements will develop the necessary precision through conversations and documentation when it is needed.",
                "The close collaboration of customers with developers on agile projects generally means that requirements can be documented in less detail."
            ],
            "answer": 0,
            "explanation": "Developers have little interaction with customers after construction begins on projects.",
            "keywords": "Q: Which of the following is NOT about Agile | A: Developers have little interaction with customers"
        },
        {
            "id": 51,
            "text": "Which of the following is NOT about Change management on Agile projects?",
            "options": [
                "Agile processes harness change for the customer's competitive advantage.",
                "Agile projects manage change by maintaining a specific backlog of work to be done.",
                "Accepting change helps to meet evolving business objectives and priorities and to accommodate the limitations of human plans and foresight.",
                "Agile methods vary as to their philosophy on this point; there is no single \"correct\" approach."
            ],
            "answer": 1,
            "explanation": "Agile projects manage change by maintaining a specific backlog of work to be done.",
            "keywords": "Q: Which of the following is NOT about Change | A: Agile projects manage change by maintaining"
        },
        {
            "id": 52,
            "text": "Which one of the following is not step of requirement engineering?",
            "options": [
                "documentation",
                "elicitation",
                "analysis",
                "design"
            ],
            "answer": 3,
            "explanation": "design",
            "keywords": "Q: Which one of the following is not step | A: design"
        },
        {
            "id": 53,
            "text": "Which one of these is NOT a Business analyst's task?",
            "options": [
                "Communicate requirements",
                "Document requirements",
                "Analyze requirements",
                "Assurance requirements",
                "Elicit requirements"
            ],
            "answer": 3,
            "explanation": "Assurance requirements",
            "keywords": "Q: Which one of these is NOT a Business | A: Assurance requirements"
        },
        {
            "id": 54,
            "text": "Requirements development does not include:",
            "options": [
                "Analysis",
                "Validation",
                "Design",
                "Elicitation"
            ],
            "answer": 2,
            "explanation": "Design",
            "keywords": "Q: Requirements development does not include: | A: Design"
        },
        {
            "id": 55,
            "text": "Requirements analysis involves refining the requirements to ensure that all stakeholders understand them and scrutinizing them for errors, omissions, and other deficiencies. Which technique is NOT common for expressing requirements during the Requirements analysis step?",
            "options": [
                "Model the application environment.",
                "Create user interface and technical prototypes.",
                "Analyze requirement feasibility.",
                "Prioritize the requirements.",
                "Model the requirements.",
                "Identify requirement origins."
            ],
            "answer": 5,
            "explanation": "Identify requirement origins.",
            "keywords": "Q: Requirements analysis involves refining the requirements to ensure | A: Identify requirement origins."
        },
        {
            "id": 56,
            "text": "Which of the following statements are TRUE about Use Cases?",
            "options": [
                "Use Cases are static and do not evolve throughout the software development process.",
                "Use case diagrams are the primary tool to document requirements",
                "Use Cases are not useful in capturing user requirements.",
                "Use Cases describe the interactions between the system and external entities."
            ],
            "answer": 3,
            "explanation": "Use Cases describe the interactions between the system and external entities.",
            "keywords": "Q: Which of the following statements are TRUE about | A: Use Cases describe the interactions between"
        },
        {
            "id": 57,
            "text": "What is the primary consequence of requirements problems?",
            "options": [
                "Delays and rework",
                "Increased resource costs",
                "Faster development process",
                "Improved product quality"
            ],
            "answer": 0,
            "explanation": "Delays and rework",
            "keywords": "Q: What is the primary consequence of requirements problems? | A: Delays and rework"
        },
        {
            "id": 58,
            "text": "What is Vision and Scope Document derived from?",
            "options": [
                "System requirements",
                "User requirements",
                "Business requirements",
                "Original requirements"
            ],
            "answer": 2,
            "explanation": "Business requirements",
            "keywords": "Q: What is Vision and Scope Document derived from? | A: Business requirements"
        },
        {
            "id": 59,
            "text": "What is the definition of a condition in which the scope of a project continues to increase in an uncontrolled fashion throughout the development process?",
            "options": [
                "Risk",
                "Inspection",
                "Scope creep",
                "Decision rule"
            ],
            "answer": 2,
            "explanation": "Scope creep",
            "keywords": "Q: What is the definition of a condition in | A: Scope creep"
        },
        {
            "id": 60,
            "text": "What is the definition of a high-level requirement for a product that contains multiple subsystems, which could be all software or software and hardware?",
            "options": [
                "Business Requirement",
                "Functional requirement",
                "Nonfunctional requirement",
                "System requirement"
            ],
            "answer": 3,
            "explanation": "System requirement",
            "keywords": "Q: What is the definition of a high-level requirement | A: System requirement"
        },
        {
            "id": 61,
            "text": "What principle ensures that each code unit performs a specific, well-defined function without interference from other parts of the system?",
            "options": [
                "Loose coupling",
                "Information hiding",
                "Strong cohesion",
                "All of the others"
            ],
            "answer": 2,
            "explanation": "Strong cohesion",
            "keywords": "Q: What principle ensures that each code unit performs | A: Strong cohesion"
        },
        {
            "id": 62,
            "text": "What database would be best suited for the following scenario: An app development company is trying to implement a cloud based storage system for their new map-based app. The cloud will manage the longitude and latitude of the data in order to track user location.",
            "options": [
                "Solr",
                "Vertica",
                "Aerospike",
                "Redis"
            ],
            "answer": 2,
            "explanation": "Aerospike",
            "keywords": "Q: What database would be best suited for the | A: Aerospike"
        },
        {
            "id": 63,
            "text": "Which of the following is a benefit of prioritizing requirements?",
            "options": [
                "Improved project management",
                "Decreased stakeholder involvement",
                "Enhanced focus on high-value features",
                "Reduced scope creep"
            ],
            "answer": 2,
            "explanation": "Enhanced focus on high-value features",
            "keywords": "Q: Which of the following is a benefit of | A: Enhanced focus on high-value features"
        },
        {
            "id": 64,
            "text": "Which of the following is incorrect that the process of evaluating a project deliverable to determine whether it satisfies customer needs?",
            "options": [
                "Validation",
                "Verification",
                "Checklist",
                "Testing"
            ],
            "answer": 2,
            "explanation": "Checklist",
            "keywords": "Q: Which of the following is incorrect that the | A: Checklist"
        },
        {
            "id": 65,
            "text": "Which of the following characteristics of excellent requirements is depicted by the statement: \"Requirements don't conflict with other requirements of the same type or with higher-level biz, user, or system requirements.\"",
            "options": [
                "Complete",
                "Unambiguous",
                "Consistent",
                "Traceable",
                "Modifiable"
            ],
            "answer": 2,
            "explanation": "Consistent",
            "keywords": "Q: Which of the following characteristics of excellent requirements | A: Consistent"
        },
        {
            "id": 66,
            "text": "Which one of the following is not a step of requirement development?",
            "options": [
                "elicitation",
                "design",
                "analysis",
                "validation",
                "documentation"
            ],
            "answer": 1,
            "explanation": "design",
            "keywords": "Q: Which one of the following is not a | A: design"
        },
        {
            "id": 67,
            "text": "Which one of the following is a functional requirement?",
            "options": [
                "Portability.",
                "Order products.",
                "Maintainability.",
                "Security.",
                "Robustness."
            ],
            "answer": 1,
            "explanation": "Order products.",
            "keywords": "Q: Which one of the following is a functional | A: Order products."
        },
        {
            "id": 68,
            "text": "Which one is a kind of prototyping that firstly creates a sample for clarifying requirements with the user, then builds up and adds new features to this sample incrementally, and finally releases the final deliverable product based on it?",
            "options": [
                "Mockup",
                "Throwaway prototype",
                "Evolutionary prototype",
                "Wireframe"
            ],
            "answer": 2,
            "explanation": "Evolutionary prototype",
            "keywords": "Q: Which one is a kind of prototyping that | A: Evolutionary prototype"
        },
        {
            "id": 69,
            "text": "Which type of issue occurs when something isn't understood or decided about a requirement?",
            "options": [
                "Requirement question",
                "Incorrect requirement",
                "Implementation question",
                "Unneeded requirement"
            ],
            "answer": 0,
            "explanation": "Requirement question",
            "keywords": "Q: Which type of issue occurs when something isn't | A: Requirement question"
        },
        {
            "id": 70,
            "text": "Which type of requirement best describes the behavior and information that the solution will manage, including a specific system actions or responses?",
            "options": [
                "Stakeholder Requirements.",
                "Functional Requirements.",
                "Business Requirements.",
                "Non-functional Requirements"
            ],
            "answer": 1,
            "explanation": "Functional Requirements.",
            "keywords": "Q: Which type of requirement best describes the behavior | A: Functional Requirements."
        },
        {
            "id": 71,
            "text": "Which arrangement describes the increasing amount of requirements and development work when implementing packaged solutions? 1. configured 2. integrated 3. extended 4. out of the box",
            "options": [
                "1,2,3,4",
                "2,1,3,4",
                "2,4,3,1",
                "4,1,2,3"
            ],
            "answer": 3,
            "explanation": "4,1,2,3",
            "keywords": "Q: Which arrangement describes the increasing amount of requirements | A: 4,1,2,3"
        },
        {
            "id": 72,
            "text": "Which approach to reviewing requirements involves the author describing a deliverable and soliciting comments on it?",
            "options": [
                "Peer deskcheck approach",
                "Passaround approach",
                "Walkthrough approach",
                "Inspection approach"
            ],
            "answer": 2,
            "explanation": "Walkthrough approach",
            "keywords": "Q: Which approach to reviewing requirements involves the author | A: Walkthrough approach"
        },
        {
            "id": 73,
            "text": "While a mock-up is called a ______ prototype, a proof of concept is called a ______ prototype.",
            "options": [
                "horizontal, vertical",
                "vertical, horizontal",
                "primary, secondary",
                "front-end, back-end"
            ],
            "answer": 0,
            "explanation": "horizontal, vertical",
            "keywords": "Q: While a mock-up is called a ______ prototype, | A: horizontal, vertical"
        },
        {
            "id": 74,
            "text": "When requirements elicitation, the customer states, \"Save $X per year on electricity now wasted by inefficient units\". As an analyst, what type of requirement does this statement belong to?",
            "options": [
                "User requirements",
                "Business rules",
                "Business requirements",
                "Quality attributes",
                "Solution ideas"
            ],
            "answer": 2,
            "explanation": "Business requirements",
            "keywords": "Q: When requirements elicitation, the customer states, \"Save $X | A: Business requirements"
        },
        {
            "id": 75,
            "text": "A collection of definitions for the data elements and data structures that are relevant to the problem domain",
            "options": [
                "Data dictionary",
                "Data flow diagram",
                "Database",
                "Relationship"
            ],
            "answer": 0,
            "explanation": "Data dictionary",
            "keywords": "Q: A collection of definitions for the data elements | A: Data dictionary"
        },
        {
            "id": 76,
            "text": "An analysis model that depicts a process flow proceeding from one activity to another",
            "options": [
                "Dialog map",
                "Swimlane diagram",
                "Context diagram",
                "Class diagram"
            ],
            "answer": 1,
            "explanation": "Swimlane diagram",
            "keywords": "Q: An analysis model that depicts a process flow | A: Swimlane diagram"
        },
        {
            "id": 77,
            "text": "An analysis model that visually depicts the various states in which a system or an object in the system can exist, the permitted transitions that can take place between states.",
            "options": [
                "State-transition diagram",
                "Swimlane diagram",
                "Use case diagram",
                "Data Flow diagram"
            ],
            "answer": 0,
            "explanation": "State-transition diagram",
            "keywords": "Q: An analysis model that visually depicts the various | A: State-transition diagram"
        },
        {
            "id": 78,
            "text": "A designated representative of a specific user class who supplies the user requirements for the group that he or she represents",
            "options": [
                "Product manager",
                "Product champion",
                "Product backlog",
                "Product owner"
            ],
            "answer": 1,
            "explanation": "Product champion",
            "keywords": "Q: A designated representative of a specific user class | A: Product champion"
        },
        {
            "id": 79,
            "text": "Customers are a(n) ______ of stakeholders.",
            "options": [
                "subset",
                "representative",
                "partner",
                "equivalent"
            ],
            "answer": 0,
            "explanation": "subset",
            "keywords": "Q: Customers are a(n) ______ of stakeholders. | A: subset"
        },
        {
            "id": 80,
            "text": "Consider the following Statement: \"If a lead doesn't respond back within 30 days of the first contact, it must be a cold lead and can be marked accordingly\". What types of business rule is being depicted here?",
            "options": [
                "Facts",
                "Constraints",
                "Action enablers",
                "Inferences",
                "Computations"
            ],
            "answer": 3,
            "explanation": "Inferences",
            "keywords": "Q: Consider the following Statement: \"If a lead doesn't | A: Inferences"
        },
        {
            "id": 81,
            "text": "Consider the following statement: \"All the screens in the system must load quickly\". This requirement statement is",
            "options": [
                "Correct and Feasible",
                "Unambiguous and Testable",
                "Unambiguous and Non-Testable",
                "Ambiguous and Non-Testable"
            ],
            "answer": 3,
            "explanation": "Ambiguous and Non-Testable",
            "keywords": "Q: Consider the following statement: \"All the screens in | A: Ambiguous and Non-Testable"
        },
        {
            "id": 82,
            "text": "Define vision and scope, select product champions activities should be done in the ______ stage.",
            "options": [
                "Specifications",
                "Validation",
                "Elicitation",
                "Analysis"
            ],
            "answer": 2,
            "explanation": "Elicitation",
            "keywords": "Q: Define vision and scope, select product champions activities | A: Elicitation"
        },
        {
            "id": 83,
            "text": "______ is a visual representation of the data objects and collections the system will process and the relationships between them.",
            "options": [
                "Use case diagram",
                "Data model",
                "Data dictionary",
                "Reports"
            ],
            "answer": 1,
            "explanation": "Data model",
            "keywords": "Q: ______ is a visual representation of the data | A: Data model"
        },
        {
            "id": 84,
            "text": "\"Every order has a shipping charge\" is a:",
            "options": [
                "fact",
                "constraint",
                "action enabler",
                "inference"
            ],
            "answer": 0,
            "explanation": "fact",
            "keywords": "Q: \"Every order has a shipping charge\" is a: | A: fact"
        },
        {
            "id": 85,
            "text": "Elicitation is a collaborative and analytical process that includes activities to collect, discover, extract, and",
            "options": [
                "gather requirements",
                "define requirements",
                "write requirements",
                "analyze requirements"
            ],
            "answer": 0,
            "explanation": "gather requirements",
            "keywords": "Q: Elicitation is a collaborative and analytical process that | A: gather requirements"
        },
        {
            "id": 86,
            "text": "Outsourced teams in other countries are typically referred to as being",
            "options": [
                "offshore",
                "offline",
                "on-site",
                "off-site"
            ],
            "answer": 0,
            "explanation": "offshore",
            "keywords": "Q: Outsourced teams in other countries are typically referred | A: offshore"
        },
        {
            "id": 87,
            "text": "Prioritization is a way to deal with competing demands for limited resources. So, establishing the relative priority of each product capability lets you plan construction to provide the ______ value at the ______ cost.",
            "options": [
                "highest, lowest",
                "lowest, highest",
                "highest, highest",
                "lowest, lowest"
            ],
            "answer": 0,
            "explanation": "highest, lowest",
            "keywords": "Q: Prioritization is a way to deal with competing | A: highest, lowest"
        },
        {
            "id": 88,
            "text": "Validation of requirements assesses whether you have written",
            "options": [
                "the right requirements",
                "the requirements right",
                "the flexible requirements",
                "the variable requirements"
            ],
            "answer": 0,
            "explanation": "the right requirements",
            "keywords": "Q: Validation of requirements assesses whether you have written | A: the right requirements"
        },
        {
            "id": 89,
            "text": "In a Swimlane diagram, process steps are shown as",
            "options": [
                "rectangles",
                "arrows connecting pairs of rectangles",
                "diamonds",
                "ovals"
            ],
            "answer": 0,
            "explanation": "rectangles",
            "keywords": "Q: In a Swimlane diagram, process steps are shown | A: rectangles"
        },
        {
            "id": 90,
            "text": "In a project, who is primarily responsible for communicating project information?",
            "options": [
                "The business analyst",
                "The project manager",
                "The software development team",
                "The customer community"
            ],
            "answer": 1,
            "explanation": "The project manager",
            "keywords": "Q: In a project, who is primarily responsible for | A: The project manager"
        },
        {
            "id": 91,
            "text": "In an ERD, what is an entity typically represented by?",
            "options": [
                "A diamond shape",
                "A rectangle",
                "An oval shape",
                "A hexagon shape"
            ],
            "answer": 1,
            "explanation": "A rectangle",
            "keywords": "Q: In an ERD, what is an entity typically | A: A rectangle"
        },
        {
            "id": 92,
            "text": "In a software requirements specification, which section do user interfaces belong to?",
            "options": [
                "Overall description",
                "System features",
                "Data requirements",
                "External interface requirements"
            ],
            "answer": 3,
            "explanation": "External interface requirements",
            "keywords": "Q: In a software requirements specification, which section do | A: External interface requirements"
        },
        {
            "id": 93,
            "text": "In a use case diagram, an arrow from an actor to a use case indicates that he is the ______ actor for the use case.",
            "options": [
                "primary",
                "secondary",
                "main",
                "side"
            ],
            "answer": 0,
            "explanation": "primary",
            "keywords": "Q: In a use case diagram, an arrow from | A: primary"
        },
        {
            "id": 94,
            "text": "In the Chemical Tracking System project, what is the relationship between use case: Play a bill and use case: Write a check?",
            "options": [
                "include",
                "extend",
                "generalization"
            ],
            "answer": 0,
            "explanation": "include",
            "keywords": "Q: In the Chemical Tracking System project, what is | A: include"
        },
        {
            "id": 95,
            "text": "In the specification of a use case, conditions that have the potential to prevent a use case from succeeding are called",
            "options": [
                "exceptions",
                "alternative flows",
                "secondary scenarios",
                "backup flows"
            ],
            "answer": 0,
            "explanation": "exceptions",
            "keywords": "Q: In the specification of a use case, conditions | A: exceptions"
        },
        {
            "id": 96,
            "text": "If you prototype the whole solution rather than only the most uncertain, high-risk, or complex portions, your risk is",
            "options": [
                "investing excessive effort in prototypes",
                "distraction by details",
                "pressure to release the prototype",
                "unrealistic performance expectations"
            ],
            "answer": 0,
            "explanation": "investing excessive effort in prototypes",
            "keywords": "Q: If you prototype the whole solution rather than | A: investing excessive effort in prototypes"
        },
        {
            "id": 97,
            "text": "In context diagram, external entities are illustrated with ______ and data flows are illustrated with ______.",
            "options": [
                "rectangles, lines/arcs with arrows",
                "ovals, lines/arcs with arrows",
                "ovals, lines/arcs without arrows",
                "triangles, lines/arcs with arrows"
            ],
            "answer": 0,
            "explanation": "rectangles, lines/arcs with arrows",
            "keywords": "Q: In context diagram, external entities are illustrated with | A: rectangles, lines/arcs with arrows"
        },
        {
            "id": 98,
            "text": "\"Story point\" is used to measure which one below?",
            "options": [
                "User story",
                "Code",
                "Function",
                "Architecture"
            ],
            "answer": 0,
            "explanation": "User story",
            "keywords": "Q: \"Story point\" is used to measure which one | A: User story"
        },
        {
            "id": 99,
            "text": "Some stakeholders are customers, such as legal staff, compliance auditors, suppliers, contractors, and venture capitalists",
            "options": [
                "True",
                "False"
            ],
            "answer": 1,
            "explanation": "False",
            "keywords": "Q: Some stakeholders are customers, such as legal staff, | A: False"
        },
        {
            "id": 100,
            "text": "Swimlane diagrams provide a way to represent the steps involved in a ______ or the operations of a proposed software system.",
            "options": [
                "design process",
                "organizational activities",
                "stakeholders",
                "business process"
            ],
            "answer": 3,
            "explanation": "business process",
            "keywords": "Q: Swimlane diagrams provide a way to represent the | A: business process"
        },
        {
            "id": 101,
            "text": "To help reviewers look for typical kinds of errors in the products they review, develop a(n) ______ for each type of requirements document your projects create.",
            "options": [
                "defect checklist",
                "error checklist",
                "inspection meeting",
                "support documentation"
            ],
            "answer": 0,
            "explanation": "defect checklist",
            "keywords": "Q: To help reviewers look for typical kinds of | A: defect checklist"
        },
        {
            "id": 102,
            "text": "The four capitalized letters in the MOSCOW prioritization technique stand for:",
            "options": [
                "Must, Should, Could, Won't",
                "Must, Should, Could, Will",
                "Must, Should, Can, Will",
                "Must, Shall, Could, Won't"
            ],
            "answer": 0,
            "explanation": "Must, Should, Could, Won't",
            "keywords": "Q: The four capitalized letters in the MOSCOW prioritization | A: Must, Should, Could, Won't"
        },
        {
            "id": 103,
            "text": "The four tasks that are performed to handle a single change request are: evaluate change request, make change decision, implement the change, and",
            "options": [
                "verify the change",
                "validate the change",
                "test the change",
                "use the change"
            ],
            "answer": 0,
            "explanation": "verify the change",
            "keywords": "Q: The four tasks that are performed to handle | A: verify the change"
        },
        {
            "id": 104,
            "text": "The close collaboration of customers with developers on agile projects generally means that requirements can be documented in ______ detail than on traditional projects.",
            "options": [
                "less",
                "more",
                "shorter",
                "longer"
            ],
            "answer": 0,
            "explanation": "less",
            "keywords": "Q: The close collaboration of customers with developers on | A: less"
        },
        {
            "id": 105,
            "text": "\"The user must be able to sort the project list in forward and reverse alphabetical order\" is a:",
            "options": [
                "business requirement",
                "user requirement",
                "functional requirement",
                "data requirement"
            ],
            "answer": 2,
            "explanation": "functional requirement",
            "keywords": "Q: \"The user must be able to sort the | A: functional requirement"
        },
        {
            "id": 106,
            "text": "\"The Chemical Tracking System shall be able to import any valid chemical structure from the ChemDraw (version 13.0 or earlier) and MarvinSketch (version 5.0 or earlier) tools\" is an external quality attribute about:",
            "options": [
                "Availability",
                "Installability",
                "Integrity",
                "Interoperability"
            ],
            "answer": 3,
            "explanation": "Interoperability",
            "keywords": "Q: \"The Chemical Tracking System shall be able to | A: Interoperability"
        },
        {
            "id": 107,
            "text": "Your company developed a software system for a customer a long time ago, and the application works as intended. Now, the customer's business has grown, and they want the software system to handle 10x the number of transactions. They ask your company to upgrade the software system. Upon inspection, you find out that this system can't handle 10x transactions due to monolithic processes and tightly coupled logic. What is the quality attribute mentioned?",
            "options": [
                "Availability",
                "Usability",
                "Scalability",
                "Robustness"
            ],
            "answer": 2,
            "explanation": "Scalability",
            "keywords": "Q: Your company developed a software system for a | A: Scalability"
        },
        {
            "id": 108,
            "text": "What is a Mock-up?",
            "options": [
                "It is a horizontal prototype.",
                "It is a particular approach to throwaway prototype.",
                "It is a throwaway prototype.",
                "It is a nonreleasable prototype."
            ],
            "answer": 0,
            "explanation": "It is a horizontal prototype.",
            "keywords": "Q: What is a Mock-up? | A: It is a horizontal prototype."
        },
        {
            "id": 109,
            "text": "What is Planguage?",
            "options": [
                "It is a programming language.",
                "It is a language with a rich set of keywords that permits precise statements of quality attributes and other project goals.",
                "It is a planning language used in project management.",
                "It is a language to express non functional requirements."
            ],
            "answer": 1,
            "explanation": "It is a language with a rich set of keywords that permits precise statements of quality attributes and other project goals.",
            "keywords": "Q: What is Planguage? | A: It is a language with a"
        },
        {
            "id": 110,
            "text": "What is Extent of reuse?",
            "options": [
                "You might reuse just a single functional requirement.",
                "You consider how much modification will be needed to make existing requirements reusable on the new project.",
                "It is simply a copy-and-paste of a piece of requirements information, either from another specification or from a library of reusable requirements.",
                "Specific functional requirements within use cases, performance requirements, usability requirements, business rules."
            ],
            "answer": 0,
            "explanation": "You might reuse just a single functional requirement.",
            "keywords": "Q: What is Extent of reuse? | A: You might reuse just a single"
        },
        {
            "id": 111,
            "text": "What is Risk assessment?",
            "options": [
                "It is the process of examining a project to identify potential threats.",
                "It is one way to deal with a risk: don't do the risky thing.",
                "It produces a plan for dealing with each significant risk.",
                "It activities to manage the top-priority risks you identified."
            ],
            "answer": 0,
            "explanation": "It is the process of examining a project to identify potential threats.",
            "keywords": "Q: What is Risk assessment? | A: It is the process of examining"
        },
        {
            "id": 112,
            "text": "What is an enhancement project?",
            "options": [
                "It is a project in which new capabilities are added to an existing system.",
                "It is a project that replaces an existing application with a new custom-built system, a commercial off-the-shelf system, or a hybrid of those.",
                "It is a project which costs less than planned.",
                "It is a project which generates more revenues."
            ],
            "answer": 0,
            "explanation": "It is a project in which new capabilities are added to an existing system.",
            "keywords": "Q: What is an enhancement project? | A: It is a project in which"
        },
        {
            "id": 113,
            "text": "What is a requirements baseline?",
            "options": [
                "Constraints on the development process of the system",
                "A specification of features be implemented, descriptions of how the system should behave or descriptions",
                "A set of requirements that stakeholders have agreed to, often defining the contents of a specific planned release or development iteration"
            ],
            "answer": 2,
            "explanation": "A set of requirements that stakeholders have agreed to, often defining the contents of a specific planned release or development iteration",
            "keywords": "Q: What is a requirements baseline? | A: A set of requirements that stakeholders"
        },
        {
            "id": 114,
            "text": "What is the Change Control Board (CCB)?",
            "options": [
                "A group of stakeholders responsible for documenting project assumptions",
                "A group that decides to approve or reject proposed changes for a specific project",
                "A team of project managers tasked with managing project risks",
                "A committee responsible for scheduling project milestones"
            ],
            "answer": 1,
            "explanation": "A group that decides to approve or reject proposed changes for a specific project",
            "keywords": "Q: What is the Change Control Board (CCB)? | A: A group that decides to approve"
        },
        {
            "id": 115,
            "text": "What is the most popular form of user stories?",
            "options": [
                "As a <type of user>, I want <some goal> so that <some reason>.",
                "As a <type of user>, I want <some goal>.",
                "As a <type of user>, I need <some need> so that <some reason>.",
                "As a <type of user>, I want <some goal> to <some purpose>."
            ],
            "answer": 0,
            "explanation": "As a <type of user>, I want <some goal> so that <some reason>.",
            "keywords": "Q: What is the most popular form of user | A: As a <type of user>, I"
        },
        {
            "id": 116,
            "text": "What is the definition of Pre-Condition in Use case?",
            "options": [
                "A condition that describes the state of a system after a use case is successfully completed.",
                "A condition that must be satisfied or a state the system must be in before a use case can begin.",
                "A condition that initiates execution of the use case",
                "A condition that must be so that system run successful."
            ],
            "answer": 1,
            "explanation": "A condition that must be satisfied or a state the system must be in before a use case can begin.",
            "keywords": "Q: What is the definition of Pre-Condition in Use | A: A condition that must be satisfied"
        },
        {
            "id": 117,
            "text": "What is the risk of incomplete requirements during the elicitation phase?",
            "options": [
                "Project delays, increased costs, and reduced stakeholder satisfaction",
                "Faster completion of functional requirements",
                "Elimination of prototyping needs",
                "Reduced complexity in coding"
            ],
            "answer": 0,
            "explanation": "Project delays, increased costs, and reduced stakeholder satisfaction",
            "keywords": "Q: What is the risk of incomplete requirements during | A: Project delays, increased costs, and reduced"
        },
        {
            "id": 118,
            "text": "What is a potential way for someone to transition into the business analyst role?",
            "options": [
                "Through an apprenticeship program with mentoring",
                "By studying software development exclusively",
                "By focusing only on user interface design skills",
                "By avoiding involvement in diverse business activities"
            ],
            "answer": 0,
            "explanation": "Through an apprenticeship program with mentoring",
            "keywords": "Q: What is a potential way for someone to | A: Through an apprenticeship program with mentoring"
        },
        {
            "id": 119,
            "text": "What is the purpose of a Requirements Traceability Matrix (RTM) in the requirements management process?",
            "options": [
                "To trace the origin of software bugs",
                "To document project milestones",
                "To track the relationship between requirements and other project artifacts",
                "To manage project budgets"
            ],
            "answer": 2,
            "explanation": "To track the relationship between requirements and other project artifacts",
            "keywords": "Q: What is the purpose of a Requirements Traceability | A: To track the relationship between requirements"
        },
        {
            "id": 120,
            "text": "What is a key benefit of using a requirements management tool?",
            "options": [
                "It ensures traceability and reduces errors in requirements documentation",
                "It finalizes stakeholder requirements automatically.",
                "It replaces the validation process.",
                "It eliminates the need for prototyping."
            ],
            "answer": 0,
            "explanation": "It ensures traceability and reduces errors in requirements documentation",
            "keywords": "Q: What is a key benefit of using a | A: It ensures traceability and reduces errors"
        },
        {
            "id": 121,
            "text": "What is the primary motivation for tracing requirements?",
            "options": [
                "To prevent any changes from being made to project requirements",
                "To document project assumptions",
                "To manage project team members",
                "To improve the quality of your products, reduce maintenance costs, and facilitate reuse"
            ],
            "answer": 3,
            "explanation": "To improve the quality of your products, reduce maintenance costs, and facilitate reuse",
            "keywords": "Q: What is the primary motivation for tracing requirements? | A: To improve the quality of your"
        },
        {
            "id": 122,
            "text": "What is the primary objective of requirements reuse in projects?",
            "options": [
                "To improve efficiency and consistency by leveraging existing requirements in new projects",
                "To finalize coding standards early",
                "To eliminate stakeholder involvement in the elicitation process",
                "To skip non-functional requirements entirely"
            ],
            "answer": 0,
            "explanation": "To improve efficiency and consistency by leveraging existing requirements in new projects",
            "keywords": "Q: What is the primary objective of requirements reuse | A: To improve efficiency and consistency by"
        },
        {
            "id": 123,
            "text": "What is the primary challenge in defining system boundaries during requirements elicitation?",
            "options": [
                "Ensuring all stakeholders agree on the scope and avoiding scope creep",
                "Prioritizing functional requirements over non-functional requirements",
                "Eliminating technical constraints",
                "Finalizing coding strategies"
            ],
            "answer": 0,
            "explanation": "Ensuring all stakeholders agree on the scope and avoiding scope creep",
            "keywords": "Q: What is the primary challenge in defining system | A: Ensuring all stakeholders agree on the"
        },
        {
            "id": 124,
            "text": "What is the primary goal of risk management in software projects?",
            "options": [
                "To focus on low-priority risks that have minimal impact on the project.",
                "To identify potential threats to the project.",
                "To completely eliminate all potential risks.",
                "To propose strategies for mitigating project risks."
            ],
            "answer": 3,
            "explanation": "To propose strategies for mitigating project risks.",
            "keywords": "Q: What is the primary goal of risk management | A: To propose strategies for mitigating project"
        },
        {
            "id": 125,
            "text": "What is the primary purpose of a business case in software requirements?",
            "options": [
                "To justify the project's value and align it with organizational goals",
                "To finalize the technical requirements",
                "To replace the Vision and Scope document",
                "To eliminate stakeholder involvement in the early phases"
            ],
            "answer": 0,
            "explanation": "To justify the project's value and align it with organizational goals",
            "keywords": "Q: What is the primary purpose of a business | A: To justify the project's value and"
        },
        {
            "id": 126,
            "text": "What is the main purpose of a Vision and Scope document?",
            "options": [
                "To define the boundaries and objectives of the project",
                "To specify all technical requirements",
                "To finalize the system's architecture",
                "To replace the requirements traceability matrix"
            ],
            "answer": 0,
            "explanation": "To define the boundaries and objectives of the project",
            "keywords": "Q: What is the main purpose of a Vision | A: To define the boundaries and objectives"
        },
        {
            "id": 127,
            "text": "What is the primary purpose of conducting stakeholder interviews during elicitation?",
            "options": [
                "To gather detailed requirements directly from key stakeholders",
                "To finalize the project schedule",
                "To identify coding standards",
                "To replace prototyping needs"
            ],
            "answer": 0,
            "explanation": "To gather detailed requirements directly from key stakeholders",
            "keywords": "Q: What is the primary purpose of conducting stakeholder | A: To gather detailed requirements directly from"
        },
        {
            "id": 128,
            "text": "What is the primary distinction between requirements validation and verification?",
            "options": [
                "Validation ensures that the product meets the user's needs, while verification ensures it is free from defects.",
                "Validation ensures the product satisfies customer needs, while verification ensures the product meets its specifications.",
                "Validation occurs before the design phase, and verification occurs after.",
                "Validation is about internal testing, while verification is about external approval."
            ],
            "answer": 1,
            "explanation": "Validation ensures the product satisfies customer needs, while verification ensures the product meets its specifications.",
            "keywords": "Q: What is the primary distinction between requirements validation | A: Validation ensures the product satisfies customer"
        },
        {
            "id": 129,
            "text": "What is the advantage of using prototyping in early project phases?",
            "options": [
                "To validate requirements and reduce the risk of costly changes later",
                "To eliminate the design phase",
                "To prioritize functional over non-functional requirements",
                "To replace stakeholder engagement"
            ],
            "answer": 0,
            "explanation": "To validate requirements and reduce the risk of costly changes later",
            "keywords": "Q: What is the advantage of using prototyping in | A: To validate requirements and reduce the"
        },
        {
            "id": 130,
            "text": "What is the main benefit of fostering a collaborative relationship between the development team and other stakeholders in the requirements process?",
            "options": [
                "To ensure that each stakeholder has full control over the project.",
                "To align business, technical, and user needs and avoid misunderstandings.",
                "To speed up the development process by minimizing the number of team members involved.",
                "To focus only on technical requirements without business or user input."
            ],
            "answer": 1,
            "explanation": "To align business, technical, and user needs and avoid misunderstandings.",
            "keywords": "Q: What is the main benefit of fostering a | A: To align business, technical, and user"
        },
        {
            "id": 131,
            "text": "What is a key characteristic of Agile projects?",
            "options": [
                "Strict adherence to a detailed project plan",
                "Regular adaptation to changing requirements and priorities",
                "Emphasis on comprehensive documentation over working software",
                "Minimal interaction with customers and stakeholders"
            ],
            "answer": 1,
            "explanation": "Regular adaptation to changing requirements and priorities",
            "keywords": "Q: What is a key characteristic of Agile projects? | A: Regular adaptation to changing requirements and"
        },
        {
            "id": 132,
            "text": "What is a key challenge when maintaining trace data in an existing system?",
            "options": [
                "There is often no existing trace data to start with.",
                "The system is too complex to trace effectively.",
                "Trace data becomes obsolete very quickly.",
                "There are too many participants to track."
            ],
            "answer": 2,
            "explanation": "Trace data becomes obsolete very quickly.",
            "keywords": "Q: What is a key challenge when maintaining trace | A: Trace data becomes obsolete very quickly."
        },
        {
            "id": 133,
            "text": "What is the key difference between functional and non-functional requirements?",
            "options": [
                "Functional requirements describe what the system does; non-functional requirements describe how the system performs.",
                "Functional requirements are optional, while non-functional requirements are mandatory.",
                "Functional requirements are stakeholder-specific, while non-functional requirements apply to developers",
                "There is no difference between functional and non-functional requirements"
            ],
            "answer": 0,
            "explanation": "Functional requirements describe what the system does; non-functional requirements describe how the system performs.",
            "keywords": "Q: What is the key difference between functional and | A: Functional requirements describe what the system"
        },
        {
            "id": 134,
            "text": "What is a common challenge that both enhancement and replacement projects often face?",
            "options": [
                "Users who are familiar with how the system works today might not like the changes they are about to encounter",
                "Limited stakeholder involvement",
                "Requirements documentation may be available for existing systems.",
                "Minimal communication among team members"
            ],
            "answer": 0,
            "explanation": "Users who are familiar with how the system works today might not like the changes they are about to encounter",
            "keywords": "Q: What is a common challenge that both enhancement | A: Users who are familiar with how"
        },
        {
            "id": 135,
            "text": "What are non-functional requirements?",
            "options": [
                "A description of a property or characteristic that a system must exhibit or a constraint that it must respect.",
                "Requirements that are in conflict with the SRS.",
                "One or more logically related system capabilities that provide value to a user and are described by a set of functional requirements.",
                "A high-level business objective of the organization that builds a product or of a customer who procures it."
            ],
            "answer": 0,
            "explanation": "A description of a property or characteristic that a system must exhibit or a constraint that it must respect.",
            "keywords": "Q: What are non-functional requirements? | A: A description of a property or"
        },
        {
            "id": 136,
            "text": "What are the reasons for companies to contract with software outsourcing organizations?",
            "options": [
                "To increase control and oversight project",
                "To minimize stakeholder involvement",
                "To limit project scope",
                "To save money, or to accelerate development and access specialized expertise."
            ],
            "answer": 3,
            "explanation": "To save money, or to accelerate development and access specialized expertise.",
            "keywords": "Q: What are the reasons for companies to contract | A: To save money, or to accelerate"
        },
        {
            "id": 137,
            "text": "What are the major activities involved in requirements management?",
            "options": [
                "Version control, project scheduling, change control and budget management",
                "Change control, risk assessment, requirements tracing and stakeholder engagement",
                "Version control, change control, requirements status tracking, and requirements tracing",
                "Change control, testing, deployment, and maintenance"
            ],
            "answer": 2,
            "explanation": "Version control, change control, requirements status tracking, and requirements tracing",
            "keywords": "Q: What are the major activities involved in requirements | A: Version control, change control, requirements status"
        },
        {
            "id": 138,
            "text": "What does the MOSCOW method classify in requirements prioritization?",
            "options": [
                "Urgency and cost of requirements",
                "Must, Should, Could, and Won't categories",
                "Technical feasibility and design limitations",
                "High, Medium, and Low priorities"
            ],
            "answer": 1,
            "explanation": "Must, Should, Could, and Won't categories",
            "keywords": "Q: What does the MOSCOW method classify in requirements | A: Must, Should, Could, and Won't categories"
        },
        {
            "id": 139,
            "text": "What does the term \"verifiable\" mean in the context of excellent requirements?",
            "options": [
                "The requirements cannot be tested",
                "The requirements are difficult to understand",
                "The requirements can be tested to ensure they are met",
                "The requirements are subjective and open to interpretation"
            ],
            "answer": 2,
            "explanation": "The requirements can be tested to ensure they are met",
            "keywords": "Q: What does the term \"verifiable\" mean in the | A: The requirements can be tested to"
        },
        {
            "id": 140,
            "text": "What happens in passive observation for task elicitation?",
            "options": [
                "Being involved in the process you are observing.",
                "Interrupting with small questions.",
                "Silently watch the user perform their tasks",
                "Only watching video"
            ],
            "answer": 2,
            "explanation": "Silently watch the user perform their tasks",
            "keywords": "Q: What happens in passive observation for task elicitation? | A: Silently watch the user perform their"
        },
        {
            "id": 141,
            "text": "What kind of questions are best to ask at the beginning to use for writing better questionnaires at the beginning of the elicitation process?",
            "options": [
                "Essay questions",
                "Closed ended questions with standardized answers.",
                "Open-ended questions are asked at the beginning to obtain full and meaningful answers.",
                "Combine close ended questions with open-ended questions"
            ],
            "answer": 2,
            "explanation": "Open-ended questions are asked at the beginning to obtain full and meaningful answers.",
            "keywords": "Q: What kind of questions are best to ask | A: Open-ended questions are asked at the"
        },
        {
            "id": 142,
            "text": "What role does a Requirements Change Control Board (RCCB) play in the requirements management process?",
            "options": [
                "Approving all changes without review",
                "Rejecting all proposed changes",
                "Evaluating and approving or rejecting changes to requirements",
                "Managing project timelines"
            ],
            "answer": 2,
            "explanation": "Evaluating and approving or rejecting changes to requirements",
            "keywords": "Q: What role does a Requirements Change Control Board | A: Evaluating and approving or rejecting changes"
        },
        {
            "id": 143,
            "text": "What tool did Seilevel develop to assist with estimating requirements development effort?",
            "options": [
                "A coding tool for developers.",
                "A requirements effort estimation spreadsheet.",
                "A time-tracking tool for project managers.",
                "A documentation tool for stakeholders."
            ],
            "answer": 1,
            "explanation": "A requirements effort estimation spreadsheet.",
            "keywords": "Q: What tool did Seilevel develop to assist with | A: A requirements effort estimation spreadsheet."
        },
        {
            "id": 144,
            "text": "What's the difference between Use Cases and User Stories?",
            "options": [
                "The use case is a business artifact which defines the software requirement or an application feature. Whereas use story is a test artifact which defines the steps to validate and verify that the software requirement or application feature exists",
                "The user story contains complete and lengthy descriptions. A use case contains simplified and short descriptions",
                "The user story is a business artifact which defines the software requirement or an application feature. Whereas use case is a test artifact which defines the steps to validate and verify that the software requirement or application feature exists",
                "The user story contains simplified and short descriptions. A use case contains complete and lengthy descriptions"
            ],
            "answer": 3,
            "explanation": "The user story contains simplified and short descriptions. A use case contains complete and lengthy descriptions",
            "keywords": "Q: What's the difference between Use Cases and User | A: The user story contains simplified and"
        },
        {
            "id": 145,
            "text": "Which of the following is a correct guideline for writing clear and concise requirements?",
            "options": [
                "Use long, descriptive sentences to cover all aspects of a requirement.",
                "Avoid using \"shall\" or \"must\" in favor of softer terms like \"could\" and \"may.\"",
                "Write in simple language, avoid jargon, and keep sentences short and direct.",
                "Use multiple terms for the same concept to make the document more interesting."
            ],
            "answer": 2,
            "explanation": "Write in simple language, avoid jargon, and keep sentences short and direct.",
            "keywords": "Q: Which of the following is a correct guideline | A: Write in simple language, avoid jargon,"
        },
        {
            "id": 146,
            "text": "Which of the following statements is incorrect about ERD?",
            "options": [
                "Individual instances of an entity will have the same as attribute values",
                "The cardinality, or multiplicity, of each relationship is shown with a number or letter on the lines that connect entities and relationships",
                "Each entity is described by one or more attributes",
                "The diamonds in the ERD represent relationships, which identify the logical linkages between pairs of entities"
            ],
            "answer": 0,
            "explanation": "Individual instances of an entity will have the same as attribute values",
            "keywords": "Q: Which of the following statements is incorrect about | A: Individual instances of an entity will"
        },
        {
            "id": 147,
            "text": "Which of the following best describes the structure of the Requirements Traceability Matrix (RTM)?",
            "options": [
                "It is a spreadsheet that lists requirements and their corresponding test cases",
                "It is a graphical representation of the project schedule",
                "It is a tool used to manage project risks",
                "It is a spreadsheet that maps requirements to other project artifacts such as design documents, test cases, and source code"
            ],
            "answer": 3,
            "explanation": "It is a spreadsheet that maps requirements to other project artifacts such as design documents, test cases, and source code",
            "keywords": "Q: Which of the following best describes the structure | A: It is a spreadsheet that maps"
        },
        {
            "id": 148,
            "text": "Which of the following is a potential benefit of implementing requirements tracing?",
            "options": [
                "Enhancing project tracking by creating links between project plan tasks and development progress.",
                "Reducing overall product life-cycle costs by minimizing development efforts.",
                "Identifying all regulatory compliance requirements and confirming their correct implementation.",
                "Finding missing requirements that don't trace to any user or business requirements."
            ],
            "answer": 3,
            "explanation": "Finding missing requirements that don't trace to any user or business requirements.",
            "keywords": "Q: Which of the following is a potential benefit | A: Finding missing requirements that don't trace"
        },
        {
            "id": 149,
            "text": "Which of the following activities would be considered part of requirements management effort?",
            "options": [
                "Holding workshops and interviews to gather requirements.",
                "Submitting requirements changes and proposing new requirements change.",
                "Writing requirements specifications and prioritizing requirements",
                "Creating and evaluating prototypes for requirements development."
            ],
            "answer": 1,
            "explanation": "Submitting requirements changes and proposing new requirements change.",
            "keywords": "Q: Which of the following activities would be considered | A: Submitting requirements changes and proposing new"
        },
        {
            "id": 150,
            "text": "Which of the following is a benefit of requirements tracing for reengineering efforts?",
            "options": [
                "It facilitates the reuse of components from the previous system.",
                "It helps identify where a system needs to be entirely replaced.",
                "It automates the reengineering process.",
                "It allows a system to function with fewer resources."
            ],
            "answer": 0,
            "explanation": "It facilitates the reuse of components from the previous system.",
            "keywords": "Q: Which of the following is a benefit of | A: It facilitates the reuse of components"
        },
        {
            "id": 151,
            "text": "Which of the following statements are incorrect about Three-level scale technique?",
            "options": [
                "Medium-priority requirements are important (customers need the capability) but not urgent (they can wait for a later release).",
                "High-priority requirements are both important (customers need the capability) and urgent (customers need it in the next release)",
                "Low-priority requirements are not important (customers can live without the capability if necessary) but urgent for some stakeholders"
            ],
            "answer": 2,
            "explanation": "Low-priority requirements are not important (customers can live without the capability if necessary) but urgent for some stakeholders",
            "keywords": "Q: Which of the following statements are incorrect about | A: Low-priority requirements are not important (customers"
        },
        {
            "id": 152,
            "text": "Which of the following is the most precise definition of \"requirement(s)\"?",
            "options": [
                "A requirement is anything that drives design choices.",
                "A requirement is a property that a product must have to provide value to a stakeholder.",
                "Requirements are a specification of what should be implemented. They are descriptions of how the system should behave, or of a system property or attribute. They may be a constraint on the development process of the system.",
                "Requirements are what customers want."
            ],
            "answer": 2,
            "explanation": "Requirements are a specification of what should be implemented. They are descriptions of how the system should behave, or of a system property or attribute. They may be a constraint on the development process of the system.",
            "keywords": "Q: Which of the following is the most precise | A: Requirements are a specification of what"
        },
        {
            "id": 153,
            "text": "Which of the following factors can act as a barrier to requirements reuse?",
            "options": [
                "Lack of stakeholder involvement",
                "Frequent updates and version control of requirements documentation",
                "Standardized format for requirements documentation",
                "Requirements written in natural language are ambiguities, missing information, and hidden assumptions"
            ],
            "answer": 3,
            "explanation": "Requirements written in natural language are ambiguities, missing information, and hidden assumptions",
            "keywords": "Q: Which of the following factors can act as | A: Requirements written in natural language are"
        },
        {
            "id": 154,
            "text": "Which of the following statements are incorrect about throwaway prototypes?",
            "options": [
                "most appropriate when the team faces uncertainty, ambiguity, incompleteness, or vagueness in the requirements",
                "when build a throwaway prototype, they ignore solid software construction techniques",
                "you might prefer to call it a releasable prototype",
                "Build a throwaway prototype to answer questions, resolve uncertainties, and improve requirements quality"
            ],
            "answer": 2,
            "explanation": "you might prefer to call it a releasable prototype",
            "keywords": "Q: Which of the following statements are incorrect about | A: you might prefer to call it"
        },
        {
            "id": 155,
            "text": "Which of the following statements is incorrect about mockup?",
            "options": [
                "also called a horizontal prototype",
                "it dives into all the architectural layers or into detailed functionality",
                "displays the facades of user interface screens and permits some navigation between them",
                "let's you explore some specific behaviors of the intended system, with the goal of refining the requirements"
            ],
            "answer": 1,
            "explanation": "it dives into all the architectural layers or into detailed functionality",
            "keywords": "Q: Which of the following statements is incorrect about | A: it dives into all the architectural"
        },
        {
            "id": 156,
            "text": "Which of the following activities fall under the core activities of requirements management?",
            "options": [
                "Document formatting, project scheduling, risk management, and budget tracking.",
                "Quality assurance, stakeholder management, resource allocation, and system testing.",
                "Version control, change control, requirements status tracking, and requirements tracing.",
                "Designing user interfaces, coding, testing software modules, and system deployment."
            ],
            "answer": 2,
            "explanation": "Version control, change control, requirements status tracking, and requirements tracing.",
            "keywords": "Q: Which of the following activities fall under the | A: Version control, change control, requirements status"
        },
        {
            "id": 157,
            "text": "Which of the following would be an appropriate analysis model component for a 'verb' in customer language?",
            "options": [
                "External entities in a Data Flow Diagram (DFD)",
                "Relationships in an Entity Relationship Diagram (ERD)",
                "Processes in a Data Flow Diagram (DFD)",
                "Objects with states in a State Transition Diagram (STD)"
            ],
            "answer": 2,
            "explanation": "Processes in a Data Flow Diagram (DFD)",
            "keywords": "Q: Which of the following would be an appropriate | A: Processes in a Data Flow Diagram"
        },
        {
            "id": 158,
            "text": "Which of the following are essential analyst skills required from the Business Analyst?",
            "options": [
                "Listening skills, Systems thinking skills",
                "Interviewing and questioning skills, Learning skills, Interpersonal skills",
                "Thinking on your feet, Facilitation skills,",
                "Analytical skills, Leadership skills, Organizational skills, Creativity",
                "Observational skills, Communication skills, Modeling skills",
                "All of the mentioned"
            ],
            "answer": 5,
            "explanation": "All of the mentioned",
            "keywords": "Q: Which of the following are essential analyst skills | A: All of the mentioned"
        },
        {
            "id": 159,
            "text": "Which of the following strategies helps mitigate the risk of stakeholders expecting a throwaway prototype to be production-ready?",
            "options": [
                "Using high-fidelity tools that resemble the final product.",
                "Leaving the prototype looking rough and unpolished.",
                "Making the prototype available for immediate release.",
                "Giving detailed descriptions of every feature."
            ],
            "answer": 1,
            "explanation": "Leaving the prototype looking rough and unpolished.",
            "keywords": "Q: Which of the following strategies helps mitigate the | A: Leaving the prototype looking rough and"
        },
        {
            "id": 160,
            "text": "Which statement best describes the purpose of an Epic in Agile project?",
            "options": [
                "To define detailed requirements and specifications for a project",
                "To represent a high-level user need or business requirement that can be broken down into smaller, more manageable user stories",
                "To assign tasks to team members for implementation",
                "To prioritize project deliverables"
            ],
            "answer": 1,
            "explanation": "To represent a high-level user need or business requirement that can be broken down into smaller, more manageable user stories",
            "keywords": "Q: Which statement best describes the purpose of an | A: To represent a high-level user need"
        },
        {
            "id": 161,
            "text": "When creating a persona for each user class, the most important thing is:",
            "options": [
                "The persona must be a real person",
                "The persona must be representative of their user class",
                "The persona must be rich",
                "The persona must be beautiful"
            ],
            "answer": 1,
            "explanation": "The persona must be representative of their user class",
            "keywords": "Q: When creating a persona for each user class, | A: The persona must be representative of"
        },
        {
            "id": 162,
            "text": "When there is a disagreement between development and customers, how to solve it?",
            "options": [
                "Customers get preference, unconditionally",
                "Customers get preference, but in alignment with business objectives",
                "Development gets preference, unconditionally",
                "Development gets preference, but in alignment with business objectives"
            ],
            "answer": 1,
            "explanation": "Customers get preference, but in alignment with business objectives",
            "keywords": "Q: When there is a disagreement between development and | A: Customers get preference, but in alignment"
        },
        {
            "id": 163,
            "text": "Why is it essential to regularly reassess and update prioritization based on evolving business objectives?",
            "options": [
                "To discourage changes in project priorities",
                "To avoid addressing potential risks",
                "To ensure that development efforts remain aligned with the current business landscape",
                "To prioritize technical challenges over business goals"
            ],
            "answer": 2,
            "explanation": "To ensure that development efforts remain aligned with the current business landscape",
            "keywords": "Q: Why is it essential to regularly reassess and | A: To ensure that development efforts remain"
        },
        {
            "id": 164,
            "text": "Why is it challenging to amalgamate requirements input from numerous users?",
            "options": [
                "Users often disagree on technical specifications.",
                "Structured organizing schemes are typically unavailable.",
                "Requirements input is often diverse and unstructured.",
                "Users lack domain expertise."
            ],
            "answer": 2,
            "explanation": "Requirements input is often diverse and unstructured.",
            "keywords": "Q: Why is it challenging to amalgamate requirements input | A: Requirements input is often diverse and"
        },
        {
            "id": 165,
            "text": "Why is it crucial to involve users during requirements elicitation?",
            "options": [
                "To gather insights about their needs and ensure requirements meet their expectations",
                "To prioritize system design over functional requirements",
                "To validate non-functional requirements",
                "To finalize system testing strategies"
            ],
            "answer": 0,
            "explanation": "To gather insights about their needs and ensure requirements meet their expectations",
            "keywords": "Q: Why is it crucial to involve users during | A: To gather insights about their needs"
        },
        {
            "id": 166,
            "text": "Why is it important to identify stakeholders when eliciting the requirements for a software system?",
            "options": [
                "The people, groups, or organizations that are actively involved in a project, are affected by its outcome, or are able to influence its outcome",
                "It helps you identify the vision and roadmap.",
                "It helps you identify which support you need, who can influence the support, and potential issues that result from a non-supportive stakeholder",
                "It helps you to make strategic decisions and clear the path of political and financial obstacles."
            ],
            "answer": 0,
            "explanation": "The people, groups, or organizations that are actively involved in a project, are affected by its outcome, or are able to influence its outcome",
            "keywords": "Q: Why is it important to identify stakeholders when | A: The people, groups, or organizations that"
        },
        {
            "id": 167,
            "text": "Why is it important to clearly define the scope of a software project in a scope document?",
            "options": [
                "Limit stakeholder involvement",
                "Speed up the development process",
                "Avoid addressing project risks",
                "Prevent scope creep and ensure project focus"
            ],
            "answer": 3,
            "explanation": "Prevent scope creep and ensure project focus",
            "keywords": "Q: Why is it important to clearly define the | A: Prevent scope creep and ensure project"
        },
        {
            "id": 168,
            "text": "Why is it important to involve stakeholders, including data experts, in the process of specifying data requirements?",
            "options": [
                "To exclude data experts from the development process.",
                "To limit the variety of data used in the system.",
                "To ensure a comprehensive understanding of data needs and complexities.",
                "To prioritize project timelines over data considerations."
            ],
            "answer": 2,
            "explanation": "To ensure a comprehensive understanding of data needs and complexities.",
            "keywords": "Q: Why is it important to involve stakeholders, including | A: To ensure a comprehensive understanding of"
        },
        {
            "id": 169,
            "text": "Why is it important to engage with a variety of user representatives rather than relying on a single representative?",
            "options": [
                "To streamline the requirements gathering process.",
                "To avoid addressing potential risks.",
                "To ensure a more comprehensive understanding of diverse user needs.",
                "To minimize the impact of user feedback on the development process."
            ],
            "answer": 2,
            "explanation": "To ensure a more comprehensive understanding of diverse user needs.",
            "keywords": "Q: Why is it important to engage with a | A: To ensure a more comprehensive understanding"
        },
        {
            "id": 170,
            "text": "How can requirements modeling assist in resolving conflicts between stakeholders?",
            "options": [
                "By providing a clear, visual representation of requirements for alignment",
                "By finalizing all functional requirements",
                "By focusing only on technical feasibility",
                "By eliminating the need for prototyping"
            ],
            "answer": 0,
            "explanation": "By providing a clear, visual representation of requirements for alignment",
            "keywords": "Q: How can requirements modeling assist in resolving conflicts | A: By providing a clear, visual representation"
        },
        {
            "id": 171,
            "text": "How can risks be prioritized in project management?",
            "options": [
                "By focusing on risks that are least likely to occur",
                "By considering both the likelihood of occurrence and potential impact of risks",
                "By ignoring potential impact and only considering likelihood",
                "By assuming that all risks are equally important"
            ],
            "answer": 1,
            "explanation": "By considering both the likelihood of occurrence and potential impact of risks",
            "keywords": "Q: How can risks be prioritized in project management? | A: By considering both the likelihood of"
        },
        {
            "id": 172,
            "text": "How can you explain the statement \"Implicit requirements can also be unknown unknowns\"?",
            "options": [
                "During the SRS process, customers should always be required to spell out their unknown unknowns.",
                "An unknown unknown cannot be known and therefore we can not make them explicit requirements.",
                "There are matters that should be, but are not, elicited through the elicitation process. They exist, but they are not realized.",
                "They help us reveal both known unknowns and more unknown unknowns."
            ],
            "answer": 2,
            "explanation": "There are matters that should be, but are not, elicited through the elicitation process. They exist, but they are not realized.",
            "keywords": "Q: How can you explain the statement \"Implicit requirements | A: There are matters that should be,"
        },
        {
            "id": 173,
            "text": "How does modeling help in analyzing complex requirements?",
            "options": [
                "By visualizing requirements and identifying inconsistencies or gaps",
                "By prioritizing coding over documentation",
                "By finalizing all functional requirements early",
                "By reducing stakeholder engagement"
            ],
            "answer": 0,
            "explanation": "By visualizing requirements and identifying inconsistencies or gaps",
            "keywords": "Q: How does modeling help in analyzing complex requirements? | A: By visualizing requirements and identifying inconsistencies"
        },
        {
            "id": 174,
            "text": "How does the Kano model help analyze user requirements?",
            "options": [
                "By classifying features into basic, performance, and delight categories",
                "By prioritizing requirements based on technical feasibility",
                "By eliminating unnecessary requirements",
                "By focusing only on functional requirements"
            ],
            "answer": 0,
            "explanation": "By classifying features into basic, performance, and delight categories",
            "keywords": "Q: How does the Kano model help analyze user | A: By classifying features into basic, performance,"
        },
        {
            "id": 175,
            "text": "How does prototyping mitigate risks in requirements engineering?",
            "options": [
                "By providing stakeholders with a visual representation to validate ambiguous requirements",
                "By finalizing system requirements early",
                "By focusing on coding rather than design",
                "By skipping the requirements validation phase"
            ],
            "answer": 0,
            "explanation": "By providing stakeholders with a visual representation to validate ambiguous requirements",
            "keywords": "Q: How does prototyping mitigate risks in requirements engineering? | A: By providing stakeholders with a visual"
        },
        {
            "id": 176,
            "text": "How does the MOSCOW method contribute to prioritizing requirements based on business objectives?",
            "options": [
                "It prioritizes requirements solely based on stakeholder preferences",
                "It categorizes requirements into Must-haves, Should-haves, Could-haves, and Won't-haves to guide prioritization",
                "It excludes business objectives from the prioritization process",
                "It only considers technical specifications in prioritization decisions"
            ],
            "answer": 1,
            "explanation": "It categorizes requirements into Must-haves, Should-haves, Could-haves, and Won't-haves to guide prioritization",
            "keywords": "Q: How does the MOSCOW method contribute to prioritizing | A: It categorizes requirements into Must-haves, Should-haves,"
        },
        {
            "id": 177,
            "text": "How does prioritization help in managing conflicting requirements?",
            "options": [
                "It ensures that high-value requirements are implemented first.",
                "It eliminates non-functional requirements from consideration.",
                "It finalizes all requirements before the design phase.",
                "It focuses on budget over stakeholder needs"
            ],
            "answer": 0,
            "explanation": "It ensures that high-value requirements are implemented first.",
            "keywords": "Q: How does prioritization help in managing conflicting requirements? | A: It ensures that high-value requirements are"
        },
        {
            "id": 178,
            "text": "Who are the intended audiences for requirements specifications?",
            "options": [
                "System architects and developers",
                "Test engineers and quality analysts",
                "Stakeholders, reviewers, and project team members",
                "All of the others"
            ],
            "answer": 3,
            "explanation": "All of the others",
            "keywords": "Q: Who are the intended audiences for requirements specifications? | A: All of the others"
        },
        {
            "id": 179,
            "text": "A requirement is best defined as?",
            "options": [
                "A need or want of the business to solve a problem or achieve an objective.",
                "A condition or capability of a product or solution that documents a problem or objective of the business.",
                "A need or necessary feature of a system that could be sensed from a position anywhere within the system",
                "A condition or capability needed by a stakeholder to solve a problem or achieve an objective."
            ],
            "answer": 3,
            "explanation": "A condition or capability needed by a stakeholder to solve a problem or achieve an objective.",
            "keywords": "Q: A requirement is best defined as? | A: A condition or capability needed by"
        },
        {
            "id": 180,
            "text": "An organization that's serious about managing its software projects must ensure that:",
            "options": [
                "Proposed requirements changes are thoughtfully evaluated before being committed to.",
                "Appropriate individuals make informed business decisions about requested changes.",
                "Approved changes are communicated to all members of team.",
                "Change activity is made visible to affected stakeholders."
            ],
            "answer": 0,
            "explanation": "Proposed requirements changes are thoughtfully evaluated before being committed to.",
            "keywords": "Q: An organization that's serious about managing its software | A: Proposed requirements changes are thoughtfully evaluated"
        },
        {
            "id": 181,
            "text": "External quality attributes describe characteristics that are observed when the software is executing. Which following definitions is Integrity?",
            "options": [
                "It deals with blocking unauthorized access to system functions or data, ensuring that the software is protected from malware attacks, and so on.",
                "It is the degree to which a system continues to function properly when confronted with invalid inputs.",
                "It deals with preventing information loss and preserving the correctness of data entered into the system.",
                "It deal with the need to prevent a system from doing any injury to people or damage to property."
            ],
            "answer": 2,
            "explanation": "It deals with preventing information loss and preserving the correctness of data entered into the system.",
            "keywords": "Q: External quality attributes describe characteristics that are observed | A: It deals with preventing information loss"
        },
        {
            "id": 182,
            "text": "In a requirements development process, why is it important to establish a mechanism for managing changes to requirements?",
            "options": [
                "To discourage changes and maintain a fixed project scope",
                "To speed up the development process",
                "To adapt to evolving project needs while maintaining control",
                "To eliminate the need for documentation"
            ],
            "answer": 2,
            "explanation": "To adapt to evolving project needs while maintaining control",
            "keywords": "Q: In a requirements development process, why is it | A: To adapt to evolving project needs"
        },
        {
            "id": 183,
            "text": "The Product vision and project scope describes the?",
            "options": [
                "Function, performance and constraints of a computer-based system",
                "The indicators that stakeholders will use to define and measure success on this project and the statement that is believed to be true in the absence of proof or definitive knowledge",
                "The benefits the business",
                "The ultimate product that will achieve the business objectives and what portion of the ultimate product vision the current project or development iteration will address"
            ],
            "answer": 3,
            "explanation": "The ultimate product that will achieve the business objectives and what portion of the ultimate product vision the current project or development iteration will address",
            "keywords": "Q: The Product vision and project scope describes the? | A: The ultimate product that will achieve"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swr_extra"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
