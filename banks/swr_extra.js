/** Ngân hàng câu hỏi: SWR Extra (97 câu) — load on demand */
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
            "keywords": "Q: the purposes of prioritizing the requirements? | A: To ensure that the team · To determine which release or",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 2,
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
            "id": 3,
            "text": "Which one is a non-functional requirement? Choose 2 correct answers.",
            "options": [
                "The messages between the client and server shall be in YAML 1.2 format.",
                "The user shall be able to select the course number.",
                "Communication between the client and server will be expressed in EBCDIC encoding."
            ],
            "answer": 0,
            "explanation": "The messages between the client and server shall be in YAML 1.2 format. · Communication between the client and server will be expressed in EBCDIC encoding.",
            "keywords": "Q: is a non-functional requirement? | A: The messages between the client · Communication between the client and",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 4,
            "text": "Which of the following statements accurately describe user stories and epics in agile development? Select all that apply.",
            "options": [
                "Story decomposition refers to breaking down user stories into smaller epics for implementation in agile projects.",
                "Epics are user stories that are too large to be implemented in a single iteration.",
                "User stories are concise statements that articulate user needs and serve as a starting point for detailed discussions."
            ],
            "answer": 1,
            "explanation": "Epics are user stories that are too large to be implemented in a single iteration. · User stories are concise statements that articulate user needs and serve as a starting point for detailed discussions.",
            "keywords": "Q: statements accurately describe user stories and epics in | A: Epics are user stories that · User stories are concise statements",
            "answers": [
                1,
                2
            ]
        },
        {
            "id": 5,
            "text": "Requirements engineering can be split into: Choose 2 correct answers.",
            "options": [
                "requirements development",
                "requirements management",
                "requirements elicitation",
                "requirements confirmation"
            ],
            "answer": 0,
            "explanation": "requirements development · requirements management",
            "keywords": "Q: Requirements engineering can be split into: | A: requirements development · requirements management",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 6,
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
            "id": 7,
            "text": "The tasks of a business analyst include: Choose 2 correct answers.",
            "options": [
                "Documenting business requirements.",
                "Directing testing tasks for product development.",
                "Directing programming tasks for product development.",
                "Identifying user classes of the product."
            ],
            "answer": 0,
            "explanation": "Documenting business requirements. · Identifying user classes of the product.",
            "keywords": "Q: The tasks of a business analyst include: | A: Documenting business requirements · Identifying user classes of the product",
            "answers": [
                0,
                3
            ]
        },
        {
            "id": 8,
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
            "id": 9,
            "text": "What does acceptance criteria include? Choose 3 correct answers.",
            "options": [
                "Passing a defined set of acceptance tests based on user requirements",
                "Demonstrating satisfaction of specific nonfunctional requirements",
                "Tracking open defects and issues",
                "Having a trendy user interface"
            ],
            "answer": 0,
            "explanation": "Passing a defined set of acceptance tests based on user requirements · Demonstrating satisfaction of specific nonfunctional requirements · Tracking open defects and issues",
            "keywords": "Q: acceptance criteria include? | A: Passing a defined set of · Demonstrating satisfaction of specific nonfunctional requirements · Tracking open defects and issues",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 10,
            "text": "What should a business analyst do in an Agile project? Choose 3 correct answers.",
            "options": [
                "Define a lightweight, flexible requirements process and adapt it as the project warrants",
                "Ensure that requirements documentation is at the right level: very detailed",
                "Help validate that customer needs are accurately represented in the product backlog",
                "Facilitate backlog prioritization"
            ],
            "answer": 0,
            "explanation": "Define a lightweight, flexible requirements process and adapt it as the project warrants · Help validate that customer needs are accurately represented in the product backlog · Facilitate backlog prioritization",
            "keywords": "Q: What should a business analyst do in an | A: Define a lightweight · Help validate that customer needs · Facilitate backlog prioritization",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 11,
            "text": "In agile projects, what is true about an epic? Choose 3 correct answers.",
            "options": [
                "It is a user story that is too large to fully implement in a single iteration.",
                "It must be split into sets of smaller stories.",
                "It can span iterations.",
                "It is the most important feature of an iteration."
            ],
            "answer": 0,
            "explanation": "It is a user story that is too large to fully implement in a single iteration. · It must be split into sets of smaller stories. · It can span iterations.",
            "keywords": "Q: In agile projects, what is true about an | A: It is a user story · It must be split into sets of smaller stories · It can span iterations",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 12,
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
            "keywords": "Q: The structure of the vision and scope document | A: Scope and Limitations · Business Context · Business Requirements",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 13,
            "text": "The elements of risk management are: Choose 3 correct answers.",
            "options": [
                "Risk assessment",
                "Risk avoidance",
                "Risk control",
                "Risk reduction"
            ],
            "answer": 0,
            "explanation": "Risk assessment · Risk control · Risk reduction",
            "keywords": "Q: The elements of risk management are: | A: Risk assessment · Risk control · Risk reduction",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 14,
            "text": "What is NOT Requirements development tools?",
            "options": [
                "Elicitation tools.",
                "Prototyping tools.",
                "Modeling tools.",
                "Specific tools."
            ],
            "answer": 3,
            "explanation": "Specific tools.",
            "keywords": "Q: NOT Requirements development tools? | A: Specific tools"
        },
        {
            "id": 15,
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
            "id": 16,
            "text": "Which is NOT element of risk management?",
            "options": [
                "Risk avoidance is one way to deal with a risk: don't do the risky thing.",
                "Risk assessment is the process of examining a project to identify potential threats.",
                "Risk control activities to manage the top-priority risks you identified.",
                "Risk management planning produces a plan for dealing with each significant risk, including mitigation approaches, contingency plans, owners, and timelines."
            ],
            "answer": 0,
            "explanation": "Risk avoidance is one way to deal with a risk: don't do the risky thing.",
            "keywords": "Q: Which is NOT element of risk management? | A: Risk avoidance is one way"
        },
        {
            "id": 17,
            "text": "Which of the following is not an external quality attribute?",
            "options": [
                "Availability",
                "Integrity",
                "Safety",
                "Reusability"
            ],
            "answer": 3,
            "explanation": "Reusability",
            "keywords": "Q: is not an external quality attribute? | A: Reusability"
        },
        {
            "id": 18,
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
            "keywords": "Q: is NOT the essential elements of a use | A: Alternative flow"
        },
        {
            "id": 19,
            "text": "Which of the following is not an elicitation activity?",
            "options": [
                "Define product vision and project scope",
                "Hold elicitation interviews",
                "Observe users performing their jobs",
                "Model the application environment"
            ],
            "answer": 0,
            "explanation": "Define product vision and project scope",
            "keywords": "Q: is not an elicitation activity? | A: Define product vision and project scope"
        },
        {
            "id": 20,
            "text": "Which of the following is not a requirement attribute?",
            "options": [
                "Date the requirement was created",
                "Author who wrote the requirement",
                "Status",
                "Customer who came up with the idea about this requirement"
            ],
            "answer": 3,
            "explanation": "Customer who came up with the idea about this requirement",
            "keywords": "Q: is not a requirement attribute? | A: Customer who came up with"
        },
        {
            "id": 21,
            "text": "Which of the following is NOT a principle of software process improvement?",
            "options": [
                "People and organizations change only when they have an incentive to do so.",
                "Prioritizing individual contributions over teamwork",
                "Process changes should be goal-oriented",
                "Process improvement should be evolutionary and continuous"
            ],
            "answer": 1,
            "explanation": "Prioritizing individual contributions over teamwork",
            "keywords": "Q: is NOT a principle of software process improvement? | A: Prioritizing individual contributions over teamwork"
        },
        {
            "id": 22,
            "text": "Which one of the following is NOT true the software customer?",
            "options": [
                "A subset of stakeholders",
                "An individual or organization that derives either direct or indirect benefit from a product",
                "They could request, pay for, select, specify, use, or receive the output generated by a software product",
                "Such as legal staff, compliance auditors, suppliers"
            ],
            "answer": 3,
            "explanation": "Such as legal staff, compliance auditors, suppliers",
            "keywords": "Q: is NOT true the software customer? | A: Such as legal staff, compliance auditors, suppliers"
        },
        {
            "id": 23,
            "text": "Which of the following is NOT about Requirements validation?",
            "options": [
                "It is the fourth component of requirements development.",
                "It is ensure that they have all the desired properties of high-quality requirements is also an essential activity.",
                "It is assesses whether you have written the right requirements: they trace back to business objectives.",
                "It allows teams to build a correct solution that meets the stated business objectives."
            ],
            "answer": 1,
            "explanation": "It is ensure that they have all the desired properties of high-quality requirements is also an essential activity.",
            "keywords": "Q: is NOT about Requirements validation? | A: It is ensure that they"
        },
        {
            "id": 24,
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
            "id": 25,
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
            "keywords": "Q: Requirements analysis involves refining the requirements to ensure | A: Identify requirement origins"
        },
        {
            "id": 26,
            "text": "Which of the following statements are TRUE about Use Cases?",
            "options": [
                "Use Cases are static and do not evolve throughout the software development process.",
                "Use case diagrams are the primary tool to document requirements",
                "Use Cases are not useful in capturing user requirements.",
                "Use Cases describe the interactions between the system and external entities."
            ],
            "answer": 3,
            "explanation": "Use Cases describe the interactions between the system and external entities.",
            "keywords": "Q: statements are TRUE about Use Cases? | A: Use Cases describe the interactions"
        },
        {
            "id": 27,
            "text": "What is the primary consequence of requirements problems?",
            "options": [
                "Delays and rework",
                "Increased resource costs",
                "Faster development process",
                "Improved product quality"
            ],
            "answer": 0,
            "explanation": "Delays and rework",
            "keywords": "Q: the primary consequence of requirements problems? | A: Delays and rework"
        },
        {
            "id": 28,
            "text": "What is Vision and Scope Document derived from?",
            "options": [
                "System requirements",
                "User requirements",
                "Business requirements",
                "Original requirements"
            ],
            "answer": 2,
            "explanation": "Business requirements",
            "keywords": "Q: Vision and Scope Document derived from? | A: Business requirements"
        },
        {
            "id": 29,
            "text": "What is the definition of a high-level requirement for a product that contains multiple subsystems, which could be all software or software and hardware?",
            "options": [
                "Business Requirement",
                "Functional requirement",
                "Nonfunctional requirement",
                "System requirement"
            ],
            "answer": 3,
            "explanation": "System requirement",
            "keywords": "Q: the definition of a high-level requirement for a | A: System requirement"
        },
        {
            "id": 30,
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
            "id": 31,
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
            "id": 32,
            "text": "Which of the following is a benefit of prioritizing requirements?",
            "options": [
                "Improved project management",
                "Decreased stakeholder involvement",
                "Enhanced focus on high-value features",
                "Reduced scope creep"
            ],
            "answer": 2,
            "explanation": "Enhanced focus on high-value features",
            "keywords": "Q: is a benefit of prioritizing requirements? | A: Enhanced focus on high-value features"
        },
        {
            "id": 33,
            "text": "Which of the following is incorrect that the process of evaluating a project deliverable to determine whether it satisfies customer needs?",
            "options": [
                "Validation",
                "Verification",
                "Checklist",
                "Testing"
            ],
            "answer": 2,
            "explanation": "Checklist",
            "keywords": "Q: is incorrect that the process of evaluating a | A: Checklist"
        },
        {
            "id": 34,
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
            "id": 35,
            "text": "Which type of requirement best describes the behavior and information that the solution will manage, including a specific system actions or responses?",
            "options": [
                "Stakeholder Requirements.",
                "Functional Requirements.",
                "Business Requirements.",
                "Non-functional Requirements"
            ],
            "answer": 1,
            "explanation": "Functional Requirements.",
            "keywords": "Q: Which type of requirement best describes the behavior | A: Functional Requirements"
        },
        {
            "id": 36,
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
            "id": 37,
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
            "keywords": "Q: requirements elicitation, the customer states, \"Save $X per | A: Business requirements"
        },
        {
            "id": 38,
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
            "id": 39,
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
            "id": 40,
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
            "id": 41,
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
            "id": 42,
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
            "id": 43,
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
            "id": 44,
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
            "id": 45,
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
            "id": 46,
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
            "id": 47,
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
            "id": 48,
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
            "id": 49,
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
            "id": 50,
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
            "id": 51,
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
            "id": 52,
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
            "id": 53,
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
            "id": 54,
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
            "id": 55,
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
            "id": 56,
            "text": "What is a Mock-up?",
            "options": [
                "It is a horizontal prototype.",
                "It is a particular approach to throwaway prototype.",
                "It is a throwaway prototype.",
                "It is a nonreleasable prototype."
            ],
            "answer": 0,
            "explanation": "It is a horizontal prototype.",
            "keywords": "Q: a Mock-up? | A: It is a horizontal prototype"
        },
        {
            "id": 57,
            "text": "What is an enhancement project?",
            "options": [
                "It is a project in which new capabilities are added to an existing system.",
                "It is a project that replaces an existing application with a new custom-built system, a commercial off-the-shelf system, or a hybrid of those.",
                "It is a project which costs less than planned.",
                "It is a project which generates more revenues."
            ],
            "answer": 0,
            "explanation": "It is a project in which new capabilities are added to an existing system.",
            "keywords": "Q: an enhancement project? | A: It is a project in"
        },
        {
            "id": 58,
            "text": "What is the Change Control Board (CCB)?",
            "options": [
                "A group of stakeholders responsible for documenting project assumptions",
                "A group that decides to approve or reject proposed changes for a specific project",
                "A team of project managers tasked with managing project risks",
                "A committee responsible for scheduling project milestones"
            ],
            "answer": 1,
            "explanation": "A group that decides to approve or reject proposed changes for a specific project",
            "keywords": "Q: the Change Control Board (CCB)? | A: A group that decides to"
        },
        {
            "id": 59,
            "text": "What is the risk of incomplete requirements during the elicitation phase?",
            "options": [
                "Project delays, increased costs, and reduced stakeholder satisfaction",
                "Faster completion of functional requirements",
                "Elimination of prototyping needs",
                "Reduced complexity in coding"
            ],
            "answer": 0,
            "explanation": "Project delays, increased costs, and reduced stakeholder satisfaction",
            "keywords": "Q: the risk of incomplete requirements during the elicitation | A: Project delays"
        },
        {
            "id": 60,
            "text": "What is the purpose of a Requirements Traceability Matrix (RTM) in the requirements management process?",
            "options": [
                "To trace the origin of software bugs",
                "To document project milestones",
                "To track the relationship between requirements and other project artifacts",
                "To manage project budgets"
            ],
            "answer": 2,
            "explanation": "To track the relationship between requirements and other project artifacts",
            "keywords": "Q: the purpose of a Requirements Traceability Matrix (RTM) | A: To track the relationship between"
        },
        {
            "id": 61,
            "text": "What is a key benefit of using a requirements management tool?",
            "options": [
                "It ensures traceability and reduces errors in requirements documentation",
                "It finalizes stakeholder requirements automatically.",
                "It replaces the validation process.",
                "It eliminates the need for prototyping."
            ],
            "answer": 0,
            "explanation": "It ensures traceability and reduces errors in requirements documentation",
            "keywords": "Q: a key benefit of using a requirements management | A: It ensures traceability and reduces"
        },
        {
            "id": 62,
            "text": "What is the primary objective of requirements reuse in projects?",
            "options": [
                "To improve efficiency and consistency by leveraging existing requirements in new projects",
                "To finalize coding standards early",
                "To eliminate stakeholder involvement in the elicitation process",
                "To skip non-functional requirements entirely"
            ],
            "answer": 0,
            "explanation": "To improve efficiency and consistency by leveraging existing requirements in new projects",
            "keywords": "Q: the primary objective of requirements reuse in projects? | A: To improve efficiency and consistency"
        },
        {
            "id": 63,
            "text": "What is the primary challenge in defining system boundaries during requirements elicitation?",
            "options": [
                "Ensuring all stakeholders agree on the scope and avoiding scope creep",
                "Prioritizing functional requirements over non-functional requirements",
                "Eliminating technical constraints",
                "Finalizing coding strategies"
            ],
            "answer": 0,
            "explanation": "Ensuring all stakeholders agree on the scope and avoiding scope creep",
            "keywords": "Q: the primary challenge in defining system boundaries during | A: Ensuring all stakeholders agree on"
        },
        {
            "id": 64,
            "text": "What is the primary goal of risk management in software projects?",
            "options": [
                "To focus on low-priority risks that have minimal impact on the project.",
                "To identify potential threats to the project.",
                "To completely eliminate all potential risks.",
                "To propose strategies for mitigating project risks."
            ],
            "answer": 3,
            "explanation": "To propose strategies for mitigating project risks.",
            "keywords": "Q: the primary goal of risk management in software | A: To propose strategies for mitigating project risks"
        },
        {
            "id": 65,
            "text": "What is the primary purpose of a business case in software requirements?",
            "options": [
                "To justify the project's value and align it with organizational goals",
                "To finalize the technical requirements",
                "To replace the Vision and Scope document",
                "To eliminate stakeholder involvement in the early phases"
            ],
            "answer": 0,
            "explanation": "To justify the project's value and align it with organizational goals",
            "keywords": "Q: the primary purpose of a business case in | A: To justify the project's value"
        },
        {
            "id": 66,
            "text": "What is the primary purpose of conducting stakeholder interviews during elicitation?",
            "options": [
                "To gather detailed requirements directly from key stakeholders",
                "To finalize the project schedule",
                "To identify coding standards",
                "To replace prototyping needs"
            ],
            "answer": 0,
            "explanation": "To gather detailed requirements directly from key stakeholders",
            "keywords": "Q: the primary purpose of conducting stakeholder interviews during | A: To gather detailed requirements directly"
        },
        {
            "id": 67,
            "text": "What is the advantage of using prototyping in early project phases?",
            "options": [
                "To validate requirements and reduce the risk of costly changes later",
                "To eliminate the design phase",
                "To prioritize functional over non-functional requirements",
                "To replace stakeholder engagement"
            ],
            "answer": 0,
            "explanation": "To validate requirements and reduce the risk of costly changes later",
            "keywords": "Q: the advantage of using prototyping in early project | A: To validate requirements and reduce"
        },
        {
            "id": 68,
            "text": "What is a key challenge when maintaining trace data in an existing system?",
            "options": [
                "There is often no existing trace data to start with.",
                "The system is too complex to trace effectively.",
                "Trace data becomes obsolete very quickly.",
                "There are too many participants to track."
            ],
            "answer": 2,
            "explanation": "Trace data becomes obsolete very quickly.",
            "keywords": "Q: a key challenge when maintaining trace data in | A: Trace data becomes obsolete very quickly"
        },
        {
            "id": 69,
            "text": "What is the key difference between functional and non-functional requirements?",
            "options": [
                "Functional requirements describe what the system does; non-functional requirements describe how the system performs.",
                "Functional requirements are optional, while non-functional requirements are mandatory.",
                "Functional requirements are stakeholder-specific, while non-functional requirements apply to developers",
                "There is no difference between functional and non-functional requirements"
            ],
            "answer": 0,
            "explanation": "Functional requirements describe what the system does; non-functional requirements describe how the system performs.",
            "keywords": "Q: the key difference between functional and non-functional requirements? | A: Functional requirements describe what the"
        },
        {
            "id": 70,
            "text": "What is a common challenge that both enhancement and replacement projects often face?",
            "options": [
                "Users who are familiar with how the system works today might not like the changes they are about to encounter",
                "Limited stakeholder involvement",
                "Requirements documentation may be available for existing systems.",
                "Minimal communication among team members"
            ],
            "answer": 0,
            "explanation": "Users who are familiar with how the system works today might not like the changes they are about to encounter",
            "keywords": "Q: a common challenge that both enhancement and replacement | A: Users who are familiar with"
        },
        {
            "id": 71,
            "text": "What are non-functional requirements?",
            "options": [
                "A description of a property or characteristic that a system must exhibit or a constraint that it must respect.",
                "Requirements that are in conflict with the SRS.",
                "One or more logically related system capabilities that provide value to a user and are described by a set of functional requirements.",
                "A high-level business objective of the organization that builds a product or of a customer who procures it."
            ],
            "answer": 0,
            "explanation": "A description of a property or characteristic that a system must exhibit or a constraint that it must respect.",
            "keywords": "Q: non-functional requirements? | A: A description of a property"
        },
        {
            "id": 72,
            "text": "What does the term \"verifiable\" mean in the context of excellent requirements?",
            "options": [
                "The requirements cannot be tested",
                "The requirements are difficult to understand",
                "The requirements can be tested to ensure they are met",
                "The requirements are subjective and open to interpretation"
            ],
            "answer": 2,
            "explanation": "The requirements can be tested to ensure they are met",
            "keywords": "Q: the term \"verifiable\" mean in the context of | A: The requirements can be tested"
        },
        {
            "id": 73,
            "text": "What happens in passive observation for task elicitation?",
            "options": [
                "Being involved in the process you are observing.",
                "Interrupting with small questions.",
                "Silently watch the user perform their tasks",
                "Only watching video"
            ],
            "answer": 2,
            "explanation": "Silently watch the user perform their tasks",
            "keywords": "Q: What happens in passive observation for task elicitation? | A: Silently watch the user perform their tasks"
        },
        {
            "id": 74,
            "text": "What kind of questions are best to ask at the beginning to use for writing better questionnaires at the beginning of the elicitation process?",
            "options": [
                "Essay questions",
                "Closed ended questions with standardized answers.",
                "Open-ended questions are asked at the beginning to obtain full and meaningful answers.",
                "Combine close ended questions with open-ended questions"
            ],
            "answer": 2,
            "explanation": "Open-ended questions are asked at the beginning to obtain full and meaningful answers.",
            "keywords": "Q: What kind of questions are best to ask | A: Open-ended questions are asked at"
        },
        {
            "id": 75,
            "text": "What role does a Requirements Change Control Board (RCCB) play in the requirements management process?",
            "options": [
                "Approving all changes without review",
                "Rejecting all proposed changes",
                "Evaluating and approving or rejecting changes to requirements",
                "Managing project timelines"
            ],
            "answer": 2,
            "explanation": "Evaluating and approving or rejecting changes to requirements",
            "keywords": "Q: What role does a Requirements Change Control Board | A: Evaluating and approving or rejecting"
        },
        {
            "id": 76,
            "text": "Which of the following is a correct guideline for writing clear and concise requirements?",
            "options": [
                "Use long, descriptive sentences to cover all aspects of a requirement.",
                "Avoid using \"shall\" or \"must\" in favor of softer terms like \"could\" and \"may.\"",
                "Write in simple language, avoid jargon, and keep sentences short and direct.",
                "Use multiple terms for the same concept to make the document more interesting."
            ],
            "answer": 2,
            "explanation": "Write in simple language, avoid jargon, and keep sentences short and direct.",
            "keywords": "Q: is a correct guideline for writing clear and | A: Write in simple language"
        },
        {
            "id": 77,
            "text": "Which of the following is a potential benefit of implementing requirements tracing?",
            "options": [
                "Enhancing project tracking by creating links between project plan tasks and development progress.",
                "Reducing overall product life-cycle costs by minimizing development efforts.",
                "Identifying all regulatory compliance requirements and confirming their correct implementation.",
                "Finding missing requirements that don't trace to any user or business requirements."
            ],
            "answer": 3,
            "explanation": "Finding missing requirements that don't trace to any user or business requirements.",
            "keywords": "Q: is a potential benefit of implementing requirements tracing? | A: Finding missing requirements that don't"
        },
        {
            "id": 78,
            "text": "Which of the following activities would be considered part of requirements management effort?",
            "options": [
                "Holding workshops and interviews to gather requirements.",
                "Submitting requirements changes and proposing new requirements change.",
                "Writing requirements specifications and prioritizing requirements",
                "Creating and evaluating prototypes for requirements development."
            ],
            "answer": 1,
            "explanation": "Submitting requirements changes and proposing new requirements change.",
            "keywords": "Q: activities would be considered part of requirements management | A: Submitting requirements changes and proposing"
        },
        {
            "id": 79,
            "text": "Which of the following is a benefit of requirements tracing for reengineering efforts?",
            "options": [
                "It facilitates the reuse of components from the previous system.",
                "It helps identify where a system needs to be entirely replaced.",
                "It automates the reengineering process.",
                "It allows a system to function with fewer resources."
            ],
            "answer": 0,
            "explanation": "It facilitates the reuse of components from the previous system.",
            "keywords": "Q: is a benefit of requirements tracing for reengineering | A: It facilitates the reuse of"
        },
        {
            "id": 80,
            "text": "Which of the following statements are incorrect about Three-level scale technique?",
            "options": [
                "Medium-priority requirements are important (customers need the capability) but not urgent (they can wait for a later release).",
                "High-priority requirements are both important (customers need the capability) and urgent (customers need it in the next release)",
                "Low-priority requirements are not important (customers can live without the capability if necessary) but urgent for some stakeholders"
            ],
            "answer": 2,
            "explanation": "Low-priority requirements are not important (customers can live without the capability if necessary) but urgent for some stakeholders",
            "keywords": "Q: statements are incorrect about Three-level scale technique? | A: Low-priority requirements are not important"
        },
        {
            "id": 81,
            "text": "Which of the following would be an appropriate analysis model component for a 'verb' in customer language?",
            "options": [
                "External entities in a Data Flow Diagram (DFD)",
                "Relationships in an Entity Relationship Diagram (ERD)",
                "Processes in a Data Flow Diagram (DFD)",
                "Objects with states in a State Transition Diagram (STD)"
            ],
            "answer": 2,
            "explanation": "Processes in a Data Flow Diagram (DFD)",
            "keywords": "Q: would be an appropriate analysis model component for | A: Processes in a Data Flow Diagram (DFD)"
        },
        {
            "id": 82,
            "text": "Which of the following strategies helps mitigate the risk of stakeholders expecting a throwaway prototype to be production-ready?",
            "options": [
                "Using high-fidelity tools that resemble the final product.",
                "Leaving the prototype looking rough and unpolished.",
                "Making the prototype available for immediate release.",
                "Giving detailed descriptions of every feature."
            ],
            "answer": 1,
            "explanation": "Leaving the prototype looking rough and unpolished.",
            "keywords": "Q: strategies helps mitigate the risk of stakeholders expecting | A: Leaving the prototype looking rough and unpolished"
        },
        {
            "id": 83,
            "text": "When there is a disagreement between development and customers, how to solve it?",
            "options": [
                "Customers get preference, unconditionally",
                "Customers get preference, but in alignment with business objectives",
                "Development gets preference, unconditionally",
                "Development gets preference, but in alignment with business objectives"
            ],
            "answer": 1,
            "explanation": "Customers get preference, but in alignment with business objectives",
            "keywords": "Q: there is a disagreement between development and customers, | A: Customers get preference"
        },
        {
            "id": 84,
            "text": "Why is it essential to regularly reassess and update prioritization based on evolving business objectives?",
            "options": [
                "To discourage changes in project priorities",
                "To avoid addressing potential risks",
                "To ensure that development efforts remain aligned with the current business landscape",
                "To prioritize technical challenges over business goals"
            ],
            "answer": 2,
            "explanation": "To ensure that development efforts remain aligned with the current business landscape",
            "keywords": "Q: it essential to regularly reassess and update prioritization | A: To ensure that development efforts"
        },
        {
            "id": 85,
            "text": "Why is it crucial to involve users during requirements elicitation?",
            "options": [
                "To gather insights about their needs and ensure requirements meet their expectations",
                "To prioritize system design over functional requirements",
                "To validate non-functional requirements",
                "To finalize system testing strategies"
            ],
            "answer": 0,
            "explanation": "To gather insights about their needs and ensure requirements meet their expectations",
            "keywords": "Q: it crucial to involve users during requirements elicitation? | A: To gather insights about their"
        },
        {
            "id": 86,
            "text": "Why is it important to identify stakeholders when eliciting the requirements for a software system?",
            "options": [
                "The people, groups, or organizations that are actively involved in a project, are affected by its outcome, or are able to influence its outcome",
                "It helps you identify the vision and roadmap.",
                "It helps you identify which support you need, who can influence the support, and potential issues that result from a non-supportive stakeholder",
                "It helps you to make strategic decisions and clear the path of political and financial obstacles."
            ],
            "answer": 0,
            "explanation": "The people, groups, or organizations that are actively involved in a project, are affected by its outcome, or are able to influence its outcome",
            "keywords": "Q: it important to identify stakeholders when eliciting the | A: The people, groups, or organizations"
        },
        {
            "id": 87,
            "text": "Why is it important to involve stakeholders, including data experts, in the process of specifying data requirements?",
            "options": [
                "To exclude data experts from the development process.",
                "To limit the variety of data used in the system.",
                "To ensure a comprehensive understanding of data needs and complexities.",
                "To prioritize project timelines over data considerations."
            ],
            "answer": 2,
            "explanation": "To ensure a comprehensive understanding of data needs and complexities.",
            "keywords": "Q: it important to involve stakeholders, including data experts, | A: To ensure a comprehensive understanding"
        },
        {
            "id": 88,
            "text": "Why is it important to engage with a variety of user representatives rather than relying on a single representative?",
            "options": [
                "To streamline the requirements gathering process.",
                "To avoid addressing potential risks.",
                "To ensure a more comprehensive understanding of diverse user needs.",
                "To minimize the impact of user feedback on the development process."
            ],
            "answer": 2,
            "explanation": "To ensure a more comprehensive understanding of diverse user needs.",
            "keywords": "Q: it important to engage with a variety of | A: To ensure a more comprehensive"
        },
        {
            "id": 89,
            "text": "How can requirements modeling assist in resolving conflicts between stakeholders?",
            "options": [
                "By providing a clear, visual representation of requirements for alignment",
                "By finalizing all functional requirements",
                "By focusing only on technical feasibility",
                "By eliminating the need for prototyping"
            ],
            "answer": 0,
            "explanation": "By providing a clear, visual representation of requirements for alignment",
            "keywords": "Q: requirements modeling assist in resolving conflicts between stakeholders? | A: By providing a clear"
        },
        {
            "id": 90,
            "text": "How can risks be prioritized in project management?",
            "options": [
                "By focusing on risks that are least likely to occur",
                "By considering both the likelihood of occurrence and potential impact of risks",
                "By ignoring potential impact and only considering likelihood",
                "By assuming that all risks are equally important"
            ],
            "answer": 1,
            "explanation": "By considering both the likelihood of occurrence and potential impact of risks",
            "keywords": "Q: risks be prioritized in project management? | A: By considering both the likelihood"
        },
        {
            "id": 91,
            "text": "How does modeling help in analyzing complex requirements?",
            "options": [
                "By visualizing requirements and identifying inconsistencies or gaps",
                "By prioritizing coding over documentation",
                "By finalizing all functional requirements early",
                "By reducing stakeholder engagement"
            ],
            "answer": 0,
            "explanation": "By visualizing requirements and identifying inconsistencies or gaps",
            "keywords": "Q: modeling help in analyzing complex requirements? | A: By visualizing requirements and identifying"
        },
        {
            "id": 92,
            "text": "How does the MOSCOW method contribute to prioritizing requirements based on business objectives?",
            "options": [
                "It prioritizes requirements solely based on stakeholder preferences",
                "It categorizes requirements into Must-haves, Should-haves, Could-haves, and Won't-haves to guide prioritization",
                "It excludes business objectives from the prioritization process",
                "It only considers technical specifications in prioritization decisions"
            ],
            "answer": 1,
            "explanation": "It categorizes requirements into Must-haves, Should-haves, Could-haves, and Won't-haves to guide prioritization",
            "keywords": "Q: the MOSCOW method contribute to prioritizing requirements based | A: It categorizes requirements into Must-haves"
        },
        {
            "id": 93,
            "text": "How does prioritization help in managing conflicting requirements?",
            "options": [
                "It ensures that high-value requirements are implemented first.",
                "It eliminates non-functional requirements from consideration.",
                "It finalizes all requirements before the design phase.",
                "It focuses on budget over stakeholder needs"
            ],
            "answer": 0,
            "explanation": "It ensures that high-value requirements are implemented first.",
            "keywords": "Q: prioritization help in managing conflicting requirements? | A: It ensures that high-value requirements"
        },
        {
            "id": 94,
            "text": "Who are the intended audiences for requirements specifications?",
            "options": [
                "System architects and developers",
                "Test engineers and quality analysts",
                "Stakeholders, reviewers, and project team members",
                "All of the others"
            ],
            "answer": 3,
            "explanation": "All of the others",
            "keywords": "Q: are the intended audiences for requirements specifications? | A: All of the others"
        },
        {
            "id": 95,
            "text": "A requirement is best defined as?",
            "options": [
                "A need or want of the business to solve a problem or achieve an objective.",
                "A condition or capability of a product or solution that documents a problem or objective of the business.",
                "A need or necessary feature of a system that could be sensed from a position anywhere within the system",
                "A condition or capability needed by a stakeholder to solve a problem or achieve an objective."
            ],
            "answer": 3,
            "explanation": "A condition or capability needed by a stakeholder to solve a problem or achieve an objective.",
            "keywords": "Q: A requirement is best defined as? | A: A condition or capability needed"
        },
        {
            "id": 96,
            "text": "An organization that's serious about managing its software projects must ensure that:",
            "options": [
                "Proposed requirements changes are thoughtfully evaluated before being committed to.",
                "Appropriate individuals make informed business decisions about requested changes.",
                "Approved changes are communicated to all members of team.",
                "Change activity is made visible to affected stakeholders."
            ],
            "answer": 0,
            "explanation": "Proposed requirements changes are thoughtfully evaluated before being committed to.",
            "keywords": "Q: An organization that's serious about managing its software | A: Proposed requirements changes are thoughtfully"
        },
        {
            "id": 97,
            "text": "The Product vision and project scope describes the?",
            "options": [
                "Function, performance and constraints of a computer-based system",
                "The indicators that stakeholders will use to define and measure success on this project and the statement that is believed to be true in the absence of proof or definitive knowledge",
                "The benefits the business",
                "The ultimate product that will achieve the business objectives and what portion of the ultimate product vision the current project or development iteration will address"
            ],
            "answer": 3,
            "explanation": "The ultimate product that will achieve the business objectives and what portion of the ultimate product vision the current project or development iteration will address",
            "keywords": "Q: The Product vision and project scope describes the? | A: The ultimate product that will"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swr_extra"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
