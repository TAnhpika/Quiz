/** Ngân hàng câu hỏi: SWR (203 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
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
            "id": 2,
            "text": "Which elements are mandatory in use case?",
            "options": [
                "Post-condition",
                "Actors",
                "Pre-condition",
                "Name"
            ],
            "answer": 1,
            "explanation": "Actors · Name",
            "keywords": "Q: Which elements are mandatory in use case? | A: Actors · Name",
            "answers": [
                1,
                3
            ]
        },
        {
            "id": 3,
            "text": "What do product champions do? Choose 2 correct answers.",
            "options": [
                "They gather requirements from other members of the user classes they represent, and reconcile inconsistencies.",
                "They serve as the primary interface between members of a single user class and the project's business analyst.",
                "They implement the coding standards.",
                "They write requirements documents."
            ],
            "answer": 0,
            "explanation": "They gather requirements from other members of the user classes they represent, and reconcile inconsistencies. · They serve as the primary interface between members of a single user class and the project's business analyst.",
            "keywords": "Q: product champions do? | A: They gather requirements from other · They serve as the primary",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 4,
            "text": "Which of the following tasks are typically performed by a business analyst? Select two.",
            "options": [
                "Defining business requirements and helping project sponsors express the project's vision clearly.",
                "Focusing only on textual documentation and avoiding the use of visual aids like diagrams and prototypes.",
                "Ensuring that all team members fully understand the requirements being communicated.",
                "Managing the entire software development life cycle, from inception to deployment."
            ],
            "answer": 0,
            "explanation": "Defining business requirements and helping project sponsors express the project's vision clearly. · Ensuring that all team members fully understand the requirements being communicated.",
            "keywords": "Q: tasks are typically performed by a business analyst? | A: Defining business requirements and helping · Ensuring that all team members",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 5,
            "text": "Which of the following statements about reaching agreement on requirements is accurate? Select two.",
            "options": [
                "Signing off on requirements is an infallible method to prevent any changes later in the project.",
                "All participants in the requirements approval process must understand what signing off implies.",
                "The purpose of signing off is to freeze requirements and prevent any future modifications.",
                "Reaching agreement on requirements ensures that both customers and developers have a shared understanding of project objectives."
            ],
            "answer": 1,
            "explanation": "All participants in the requirements approval process must understand what signing off implies. · Reaching agreement on requirements ensures that both customers and developers have a shared understanding of project objectives.",
            "keywords": "Q: statements about reaching agreement on requirements is accurate? | A: All participants in the requirements · Reaching agreement on requirements ensures",
            "answers": [
                1,
                3
            ]
        },
        {
            "id": 6,
            "text": "What is the benefit of having a small group representing key areas as decision makers in a project?",
            "options": [
                "It simplifies the decision-making process by involving only the project manager",
                "It ensures diverse perspectives from management, customers, business analysis, development, and marketing",
                "It reduces the need for stakeholder involvement",
                "It focuses solely on technical specifications"
            ],
            "answer": 1,
            "explanation": "It ensures diverse perspectives from management, customers, business analysis, development, and marketing",
            "keywords": "Q: the benefit of having a small group representing | A: It ensures diverse perspectives from management"
        },
        {
            "id": 7,
            "text": "Which of the following practices should be followed when documenting software requirements? Select two.",
            "options": [
                "Ensure that each requirement is documented in multiple places to increase visibility and reduce the risk of it being overlooked.",
                "Use a consistent format for documenting requirements to enhance clarity and understanding among all stakeholders.",
                "Avoid documenting requirements that involve complex logic, as these can be difficult for stakeholders to understand.",
                "The software requirements specification (SRS) should be used to formally record the agreed-upon requirements and ensure all stakeholders have a shared understanding."
            ],
            "answer": 1,
            "explanation": "Use a consistent format for documenting requirements to enhance clarity and understanding among all stakeholders. · The software requirements specification (SRS) should be used to formally record the agreed-upon requirements and ensure all stakeholders have a shared understanding.",
            "keywords": "Q: practices should be followed when documenting software requirements? | A: Use a consistent format for · The software requirements specification (SRS)",
            "answers": [
                1,
                3
            ]
        },
        {
            "id": 8,
            "text": "Which of the following statements accurately describes the role of a business analyst in a project? Select two.",
            "options": [
                "The business analyst is solely responsible for managing communication between the customer(s) and the development team.",
                "The business analyst primarily focuses on eliciting, analyzing, documenting, and validating the needs of the project stakeholders.",
                "In agile projects, the business analyst often acts as the project manager, handling both internal and external project tasks.",
                "The business analyst plays a central role in collecting and disseminating product information, while the project manager focuses on communicating project information."
            ],
            "answer": 1,
            "explanation": "The business analyst primarily focuses on eliciting, analyzing, documenting, and validating the needs of the project stakeholders. · The business analyst plays a central role in collecting and disseminating product information, while the project manager focuses on communicating project information.",
            "keywords": "Q: statements accurately describes the role of a business | A: The business analyst primarily focuses · The business analyst plays a",
            "answers": [
                1,
                3
            ]
        },
        {
            "id": 9,
            "text": "Which of the following are considered good practices in requirements elicitation? Select two.",
            "options": [
                "Defining the product vision and project scope early in the project to ensure all stakeholders have a shared understanding.",
                "Focusing exclusively on nonfunctional requirements during initial elicitation while ignoring functional requirements to save time.",
                "Identifying user classes and their characteristics to ensure that all user needs are considered.",
                "Avoiding the use of prototypes in the early stages of requirements elicitation to prevent biasing stakeholders."
            ],
            "answer": 0,
            "explanation": "Defining the product vision and project scope early in the project to ensure all stakeholders have a shared understanding. · Identifying user classes and their characteristics to ensure that all user needs are considered.",
            "keywords": "Q: are considered good practices in requirements elicitation? | A: Defining the product vision and · Identifying user classes and their",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 10,
            "text": "Which of the following are advantages of reusing requirements? (Choose 2 answers)",
            "options": [
                "Decreased consistency",
                "Reduced rework",
                "Lower development costs",
                "Increased number of defects"
            ],
            "answer": 1,
            "explanation": "Reduced rework · Lower development costs",
            "keywords": "Q: are advantages of reusing requirements? | A: Reduced rework · Lower development costs",
            "answers": [
                1,
                2
            ]
        },
        {
            "id": 11,
            "text": "Which of the following statements correctly distinguishes between product requirements and project requirements? Select two.",
            "options": [
                "Product requirements describe the physical resources and training needs necessary for project completion.",
                "Project requirements include staff training and infrastructure changes needed in the operating environment.",
                "Project requirements are housed in the SRS along with product requirements.",
                "Product requirements focus on the characteristics and functionalities of the software system being built."
            ],
            "answer": 1,
            "explanation": "Project requirements include staff training and infrastructure changes needed in the operating environment. · Product requirements focus on the characteristics and functionalities of the software system being built.",
            "keywords": "Q: statements correctly distinguishes between product requirements and project | A: Project requirements include staff training · Product requirements focus on the",
            "answers": [
                1,
                3
            ]
        },
        {
            "id": 12,
            "text": "Which of the following statements about the requirements development process' framework is accurate? Select two.",
            "options": [
                "The process of requirements development is strictly linear, moving from elicitation to validation without any need for revisiting previous stages.",
                "Elicitation, analysis, specification, and validation are iterative activities that may require revisiting earlier stages to ensure accuracy and completeness.",
                "Validation is only performed at the end of the project to confirm that all requirements have been met.",
                "The framework allows for flexibility, with steps often revisited throughout the project to refine and correct requirements as needed."
            ],
            "answer": 1,
            "explanation": "Elicitation, analysis, specification, and validation are iterative activities that may require revisiting earlier stages to ensure accuracy and completeness. · The framework allows for flexibility, with steps often revisited throughout the project to refine and correct requirements as needed.",
            "keywords": "Q: statements about the requirements development process' framework is | A: Elicitation · The framework allows for flexibility",
            "answers": [
                1,
                3
            ]
        },
        {
            "id": 13,
            "text": "Which of the following statements accurately describe the use of context diagrams in representing project scope? Select two.",
            "options": [
                "A context diagram visually illustrates the boundary between the system being developed and external entities that interact with it.",
                "The context diagram includes detailed information about the system's internal processes and data.",
                "The primary purpose of a context diagram is to depict the interactions between the system and external entities without detailing the internal workings of the system.",
                "Context diagrams are typically used to represent the relationship between user interfaces and system components within the boundary."
            ],
            "answer": 0,
            "explanation": "A context diagram visually illustrates the boundary between the system being developed and external entities that interact with it. · The primary purpose of a context diagram is to depict the interactions between the system and external entities without detailing the internal workings of the system.",
            "keywords": "Q: statements accurately describe the use of context diagrams | A: A context diagram visually illustrates · The primary purpose of a",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 14,
            "text": "Which of the following statements accurately describes the purpose and use of personas in requirements analysis? Select two.",
            "options": [
                "A persona is a real user from the target audience, used to validate requirements and ensure they meet actual user needs.",
                "Personas are hypothetical, generic users representing a group with similar characteristics, used to understand requirements and design user experiences.",
                "Creating a persona helps bring user classes to life and aids in visualizing how different types of users will interact with the system.",
                "Personas are only useful during the testing phase to ensure that the application functions as expected for diverse user groups."
            ],
            "answer": 1,
            "explanation": "Personas are hypothetical, generic users representing a group with similar characteristics, used to understand requirements and design user experiences. · Creating a persona helps bring user classes to life and aids in visualizing how different types of users will interact with the system.",
            "keywords": "Q: statements accurately describes the purpose and use of | A: Personas are hypothetical · Creating a persona helps bring",
            "answers": [
                1,
                2
            ]
        },
        {
            "id": 15,
            "text": "Which of the following statements accurately describe preconditions and postconditions in the context of use cases? Select two.",
            "options": [
                "Preconditions define the prerequisites that must be met before the system can begin executing a use case.",
                "Preconditions describe the expected outcome after the use case has been successfully executed.",
                "Postconditions describe the state of the system after the use case has executed successfully.",
                "Postconditions determine whether the system should proceed with executing a use case."
            ],
            "answer": 0,
            "explanation": "Preconditions define the prerequisites that must be met before the system can begin executing a use case. · Postconditions describe the state of the system after the use case has executed successfully.",
            "keywords": "Q: statements accurately describe preconditions and postconditions in the | A: Preconditions define the prerequisites that · Postconditions describe the state of",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 16,
            "text": "Which of the following statements accurately describes a business rule? Select two.",
            "options": [
                "A business rule is a statement that defines or constrains some aspect of the business to control or influence its behavior.",
                "Business rules are only relevant for heavily rules-driven systems and can be ignored in simpler systems.",
                "Classifying business rules helps in understanding how they might be applied in a software application, such as using constraints to enforce certain conditions.",
                "A business rule is the same as a system requirement, focusing solely on the technical implementation details."
            ],
            "answer": 0,
            "explanation": "A business rule is a statement that defines or constrains some aspect of the business to control or influence its behavior. · Classifying business rules helps in understanding how they might be applied in a software application, such as using constraints to enforce certain conditions.",
            "keywords": "Q: statements accurately describes a business rule? | A: A business rule is a · Classifying business rules helps in",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 17,
            "text": "Which of the following statements accurately describe the use case approach? Select two.",
            "options": [
                "A use case describes a sequence of interactions between a system and an external actor that results in an outcome of value to the actor.",
                "In a use case diagram, the boundary between what's inside and outside the system is not explicitly defined.",
                "Actors in a use case can include both human users and other systems that interact with the system being developed.",
                "The primary actor in a use case is always the system itself, as it initiates and controls all interactions."
            ],
            "answer": 0,
            "explanation": "A use case describes a sequence of interactions between a system and an external actor that results in an outcome of value to the actor. · Actors in a use case can include both human users and other systems that interact with the system being developed.",
            "keywords": "Q: statements accurately describe the use case approach? | A: A use case describes a · Actors in a use case",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 18,
            "text": "Which of the following characteristics should a well-written requirement statement exhibit? Select two.",
            "options": [
                "Each requirement should be complete, meaning it contains all the information necessary for the reader to understand it and for developers to implement it correctly.",
                "A requirement statement can be ambiguous as long as it is feasible to implement.",
                "Requirements should be prioritized based on their importance to achieving the desired business value, and should be assigned an implementation priority.",
                "Verifiability of a requirement is optional as long as it meets stakeholder needs."
            ],
            "answer": 0,
            "explanation": "Each requirement should be complete, meaning it contains all the information necessary for the reader to understand it and for developers to implement it correctly. · Requirements should be prioritized based on their importance to achieving the desired business value, and should be assigned an implementation priority.",
            "keywords": "Q: characteristics should a well-written requirement statement exhibit? | A: Each requirement should be complete · Requirements should be prioritized based",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 19,
            "text": "Which type of requirement best describes the behavior and information that the solution will manage, including specific system actions or responses?",
            "options": [
                "Stakeholder Requirements.",
                "Functional Requirements.",
                "Business Requirements.",
                "Non-functional Requirements."
            ],
            "answer": 1,
            "explanation": "Functional Requirements.",
            "keywords": "Q: Which type of requirement best describes the behavior | A: Functional Requirements"
        },
        {
            "id": 20,
            "text": "When defining the scope and limitations of a product, which of the following practices should be followed? Select two.",
            "options": [
                "List the product's major features or user capabilities, focusing on those that distinguish it from competitors.",
                "Include all possible features in the scope to ensure nothing is left out, even if some may be unnecessary.",
                "Clearly define the features that will be included in the initial release and those that will be excluded.",
                "Avoid mentioning any limitations or exclusions to keep the focus on what the product will do."
            ],
            "answer": 0,
            "explanation": "List the product's major features or user capabilities, focusing on those that distinguish it from competitors. · Clearly define the features that will be included in the initial release and those that will be excluded.",
            "keywords": "Q: defining the scope and limitations of a product, | A: List the product's major features · Clearly define the features that",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 21,
            "text": "When specifying the level of detail in software requirements, which of the following practices should be considered? Select two.",
            "options": [
                "It is always necessary to specify all requirements at the same high level of detail to ensure consistency.",
                "More detail should be included when the work is being done for an external client or when system testing will be based on the requirements.",
                "Less detail can be included if the work is being done internally for your company and developers have considerable domain experience.",
                "Writing all requirements at a very fine-grained level is always better, regardless of the project's context."
            ],
            "answer": 1,
            "explanation": "More detail should be included when the work is being done for an external client or when system testing will be based on the requirements. · Less detail can be included if the work is being done internally for your company and developers have considerable domain experience.",
            "keywords": "Q: specifying the level of detail in software requirements, | A: More detail should be included · Less detail can be included",
            "answers": [
                1,
                2
            ]
        },
        {
            "id": 22,
            "text": "When choosing the appropriate representation techniques for analysis models, which of the following guidelines should be followed? Select two.",
            "options": [
                "Business process flows can be represented with high-level data flow diagrams or Swimlane diagrams that show roles and responsibilities in the process.",
                "Use only one type of model to avoid confusion and ensure clarity throughout the development process.",
                "Complex logic can be effectively represented using decision trees or decision tables, which show possible outcomes or unique functional requirements.",
                "Data relationships should be illustrated using state-transition diagrams or storyboard models."
            ],
            "answer": 0,
            "explanation": "Business process flows can be represented with high-level data flow diagrams or Swimlane diagrams that show roles and responsibilities in the process. · Complex logic can be effectively represented using decision trees or decision tables, which show possible outcomes or unique functional requirements.",
            "keywords": "Q: choosing the appropriate representation techniques for analysis models, | A: Business process flows can be · Complex logic can be effectively",
            "answers": [
                0,
                2
            ]
        },
        {
            "id": 23,
            "text": "How can a business analyst effectively translate the voice of the customer into specific model components? Select two.",
            "options": [
                "By focusing exclusively on the nouns mentioned by customers, as they represent the most critical elements.",
                "By identifying keywords such as nouns, verbs, and conditional statements that can be mapped to corresponding analysis model components.",
                "By using a predetermined set of model components without considering the specific word choices of the customer.",
                "By mapping verbs mentioned by customers to processes, activities, and use cases in the analysis models."
            ],
            "answer": 1,
            "explanation": "By identifying keywords such as nouns, verbs, and conditional statements that can be mapped to corresponding analysis model components. · By mapping verbs mentioned by customers to processes, activities, and use cases in the analysis models.",
            "keywords": "Q: a business analyst effectively translate the voice of | A: By identifying keywords such as nouns · By mapping verbs mentioned by",
            "answers": [
                1,
                3
            ]
        },
        {
            "id": 24,
            "text": "Why is clear communication crucial in acquirer-supplier interactions in outsourced projects? (Choose 2 answers)",
            "options": [
                "It reduces the need for collaboration.",
                "It ensures both parties understand each other's needs and capabilities.",
                "It helps in resolving potential issues early.",
                "It allows unilateral decision-making by the supplier."
            ],
            "answer": 1,
            "explanation": "It ensures both parties understand each other's needs and capabilities. · It helps in resolving potential issues early.",
            "keywords": "Q: clear communication crucial in acquirer-supplier interactions in outsourced | A: It ensures both parties understand · It helps in resolving potential issues early",
            "answers": [
                1,
                2
            ]
        },
        {
            "id": 25,
            "text": "In the context of requirements tracing, what is a traceability matrix used for? (Choose 2 answers)",
            "options": [
                "To track project progress in real-time",
                "To generate new requirements automatically",
                "To map requirements to other system elements like design and code",
                "To identify missing or unnecessary requirements"
            ],
            "answer": 2,
            "explanation": "To map requirements to other system elements like design and code · To identify missing or unnecessary requirements",
            "keywords": "Q: In the context of requirements tracing, what is | A: To map requirements to other · To identify missing or unnecessary requirements",
            "answers": [
                2,
                3
            ]
        },
        {
            "id": 26,
            "text": "Two important goals of writing requirements are that:",
            "options": [
                "Anyone who reads the requirement comes to the same interpretation as any other reader.",
                "Each reader's interpretation matches what the author intended to communicate.",
                "Developers find the requirements technically easy to understand.",
                "Customers are happy."
            ],
            "answer": 0,
            "explanation": "Anyone who reads the requirement comes to the same interpretation as any other reader. · Each reader's interpretation matches what the author intended to communicate.",
            "keywords": "Q: Two important goals of writing requirements are that: | A: Anyone who reads the requirement · Each reader's interpretation matches what",
            "answers": [
                0,
                1
            ]
        },
        {
            "id": 27,
            "text": "What is true about a software prototype? Choose 3 correct answers.",
            "options": [
                "It is a partial implementation of a proposed new product.",
                "It is a possible implementation of a proposed new product.",
                "It is a preliminary implementation of a proposed new product.",
                "It is a complete implementation of a proposed new product."
            ],
            "answer": 0,
            "explanation": "It is a partial implementation of a proposed new product. · It is a possible implementation of a proposed new product. · It is a preliminary implementation of a proposed new product.",
            "keywords": "Q: true about a software prototype? | A: It is a partial implementation · It is a possible implementation · It is a preliminary implementation",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 28,
            "text": "What are the tasks of a business analyst? Choose 3 correct answers.",
            "options": [
                "Define business requirements",
                "Identify project stakeholders and user classes",
                "Document requirements",
                "Lead requirements prioritization"
            ],
            "answer": 0,
            "explanation": "Define business requirements · Identify project stakeholders and user classes · Document requirements",
            "keywords": "Q: the tasks of a business analyst? | A: Define business requirements · Identify project stakeholders and user classes · Document requirements",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 29,
            "text": "What potential issues can be prevented by validating requirements? (Select all that apply)",
            "options": [
                "Scope creep",
                "Eliminating All Bugs",
                "Misaligned Expectations",
                "Cost Overruns and Delays"
            ],
            "answer": 0,
            "explanation": "Scope creep · Misaligned Expectations · Cost Overruns and Delays",
            "keywords": "Q: What potential issues can be prevented by validating | A: Scope creep · Misaligned Expectations · Cost Overruns and Delays",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 30,
            "text": "What should a business analyst do in an Agile project? Chooses 3 correct answers.",
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
            "id": 31,
            "text": "Which of the following are considered good practices in requirements analysis? Select three.",
            "options": [
                "Modeling the application environment to understand the system's boundaries and interactions with external entities.",
                "Prioritizing the requirements based solely on the preferences of the development team without considering business goals or customer needs.",
                "Creating prototypes to explore and validate uncertain requirements with stakeholders.",
                "Analyzing data flows to ensure that all interactions between the system and external entities are understood and documented."
            ],
            "answer": 0,
            "explanation": "Modeling the application environment to understand the system's boundaries and interactions with external entities. · Creating prototypes to explore and validate uncertain requirements with stakeholders. · Analyzing data flows to ensure that all interactions between the system and external entities are understood and documented.",
            "keywords": "Q: are considered good practices in requirements analysis? Select | A: Modeling the application environment to · Creating prototypes to explore and · Analyzing data flows to ensure",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 32,
            "text": "Which of the following are common places and ways to look for business rules? Choose 3 correct answers.",
            "options": [
                "\"Common knowledge\" from the organization, often collected from individuals who have worked with the business for a long time and know the details of how it operates.",
                "Legacy systems that embed business rules in their requirements and code.",
                "Analysis of existing documentation, including requirements specifications from earlier projects, regulations, industry standards, corporate policy documents, contracts, and business plans.",
                "Business laws"
            ],
            "answer": 0,
            "explanation": "\"Common knowledge\" from the organization, often collected from individuals who have worked with the business for a long time and know the details of how it operates. · Legacy systems that embed business rules in their requirements and code. · Analysis of existing documentation, including requirements specifications from earlier projects, regulations, industry standards, corporate policy documents, contracts, and business plans.",
            "keywords": "Q: are common places and ways to look for | A: \"Common knowledge\" from the organization · Legacy systems that embed business · Analysis of existing documentation",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 33,
            "text": "Which of the following are true about a dashboard? Choose 3 correct answers.",
            "options": [
                "It is a screen display or printed report.",
                "It uses multiple textual and/or graphical representations of data.",
                "It aims to provide a consolidated, multidimensional view of what is going on in an organization or a process.",
                "It is a brochure to promote the product."
            ],
            "answer": 0,
            "explanation": "It is a screen display or printed report. · It uses multiple textual and/or graphical representations of data. · It aims to provide a consolidated, multidimensional view of what is going on in an organization or a process.",
            "keywords": "Q: are true about a dashboard? | A: It is a screen display or printed report · It uses multiple textual and/or · It aims to provide a consolidated",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 34,
            "text": "Which of the following factors should be considered when classifying users? Select three.",
            "options": [
                "The platform they will be using, such as desktop PCs, laptops, tablets, or smartphones.",
                "The specific languages used in the system's backend processes.",
                "The frequency with which they use the product and the tasks they perform during business operations.",
                "Their access privileges or security levels, such as ordinary user, guest user, or administrator."
            ],
            "answer": 0,
            "explanation": "The platform they will be using, such as desktop PCs, laptops, tablets, or smartphones. · The frequency with which they use the product and the tasks they perform during business operations. · Their access privileges or security levels, such as ordinary user, guest user, or administrator.",
            "keywords": "Q: factors should be considered when classifying users? Select | A: The platform they will be using · The frequency with which they · Their access privileges or security levels",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 35,
            "text": "Which of the following skills are essential for a business analyst? Select three.",
            "options": [
                "Literacy skills for effectively interpreting written material and communicating requirements.",
                "Technical skills to ensure the analyst can implement the software they are analyzing.",
                "Facilitation skills to manage group discussions and ensure effective participation from all stakeholders.",
                "Analytical skills to break down complex problems and identify feasible solutions."
            ],
            "answer": 0,
            "explanation": "Literacy skills for effectively interpreting written material and communicating requirements. · Facilitation skills to manage group discussions and ensure effective participation from all stakeholders. · Analytical skills to break down complex problems and identify feasible solutions.",
            "keywords": "Q: skills are essential for a business analyst? Select | A: Literacy skills for effectively interpreting · Facilitation skills to manage group · Analytical skills to break down",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 36,
            "text": "Which of the following elements should be included when crafting a vision statement? Select three.",
            "options": [
                "The specific target customer for whom the product is intended.",
                "A detailed technical specification of the product's architecture.",
                "The key benefit or compelling reason for the customer to buy or use the product.",
                "A comparison with the primary competitive alternative or current system."
            ],
            "answer": 0,
            "explanation": "The specific target customer for whom the product is intended. · The key benefit or compelling reason for the customer to buy or use the product. · A comparison with the primary competitive alternative or current system.",
            "keywords": "Q: elements should be included when crafting a vision | A: The specific target customer for · The key benefit or compelling · A comparison with the primary",
            "answers": [
                0,
                2,
                3
            ]
        },
        {
            "id": 37,
            "text": "Which of the following are the signals indicating that you have completed requirements elicitation? Choose 3 correct answers.",
            "options": [
                "Users repeat issues they already covered in previous discussions.",
                "Suggested new features, user requirements, or functional requirements are all deemed to be out of scope.",
                "Proposed new requirements are all low priority.",
                "Developers and testers who review the requirements for an area raise many questions."
            ],
            "answer": 0,
            "explanation": "Users repeat issues they already covered in previous discussions. · Suggested new features, user requirements, or functional requirements are all deemed to be out of scope. · Proposed new requirements are all low priority.",
            "keywords": "Q: are the signals indicating that you have completed | A: Users repeat issues they already · Suggested new features · Proposed new requirements are all low priority",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 38,
            "text": "Why do we have to label the requirements in a software requirements specification (SRS)? (Choose 3 correct answers)",
            "options": [
                "It allows us to refer to specific requirements in a change request, modification history, cross-reference, or requirements traceability matrix.",
                "It enables reusing the requirements in multiple projects.",
                "It facilitates collaboration between team members when they're discussing requirements.",
                "It makes the SRS look more professional."
            ],
            "answer": 0,
            "explanation": "It allows us to refer to specific requirements in a change request, modification history, cross-reference, or requirements traceability matrix. · It enables reusing the requirements in multiple projects. · It facilitates collaboration between team members when they're discussing requirements.",
            "keywords": "Q: we have to label the requirements in a | A: It allows us to refer · It enables reusing the requirements · It facilitates collaboration between team",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 39,
            "text": "When documenting data requirements for a system, which of the following practices should be followed? Select three.",
            "options": [
                "Include a detailed implementation data model directly in the SRS to ensure clarity in the system's design.",
                "Create a data dictionary that defines the composition, meaning, data type, and allowed values for all data elements the system will handle.",
                "Document any reports that the application will generate, focusing on their logical descriptions and deferring detailed layouts to the design stage.",
                "Describe how data will be acquired, maintained, and protected, including policies for data retention, disposal, and ensuring data integrity."
            ],
            "answer": 1,
            "explanation": "Create a data dictionary that defines the composition, meaning, data type, and allowed values for all data elements the system will handle. · Document any reports that the application will generate, focusing on their logical descriptions and deferring detailed layouts to the design stage. · Describe how data will be acquired, maintained, and protected, including policies for data retention, disposal, and ensuring data integrity.",
            "keywords": "Q: documenting data requirements for a system, which of | A: Create a data dictionary that · Document any reports that the · Describe how data will be acquired",
            "answers": [
                1,
                2,
                3
            ]
        },
        {
            "id": 40,
            "text": "Customers have the right to: (choose 3 correct answers)",
            "options": [
                "expect business analysts to learn about their business and their objectives",
                "describe characteristics that will make the product easy to use",
                "receive a system that meets their functional needs and quality expectations",
                "promptly communicate changes to the requirements"
            ],
            "answer": 0,
            "explanation": "expect business analysts to learn about their business and their objectives · describe characteristics that will make the product easy to use · receive a system that meets their functional needs and quality expectations",
            "keywords": "Q: Customers have the right to: | A: expect business analysts to learn · describe characteristics that will make · receive a system that meets",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 41,
            "text": "Entries in the data dictionary represent the following types of data elements: (choose 3 correct answers)",
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
            "id": 42,
            "text": "In software development, what do requirements drive? Choose 3 correct answers.",
            "options": [
                "Project planning",
                "Design and coding",
                "Testing activities",
                "Financial activities"
            ],
            "answer": 0,
            "explanation": "Project planning · Design and coding · Testing activities",
            "keywords": "Q: In software development, what do requirements drive? | A: Project planning · Design and coding · Testing activities",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 43,
            "text": "The benefits of effective requirements reuse include: (choose 3 correct answers)",
            "options": [
                "faster delivery",
                "lower development costs",
                "reduced rework",
                "fewer test cases"
            ],
            "answer": 0,
            "explanation": "faster delivery · lower development costs · reduced rework",
            "keywords": "Q: The benefits of effective requirements reuse include: | A: faster delivery · lower development costs · reduced rework",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 44,
            "text": "Requirement statements must be: (Choose 3 correct answers)",
            "options": [
                "Feasible",
                "Correct",
                "Verifiable",
                "Flexible"
            ],
            "answer": 0,
            "explanation": "Feasible · Correct · Verifiable",
            "keywords": "Q: Requirement statements must be: | A: Feasible · Correct · Verifiable",
            "answers": [
                0,
                1,
                2
            ]
        },
        {
            "id": 45,
            "text": "While a mock-up is called a ... prototype, a proof of concept is called a ... prototype.",
            "options": [
                "horizontal, vertical",
                "vertical, horizontal",
                "primary, secondary",
                "front-end, back-end"
            ],
            "answer": 0,
            "explanation": "horizontal, vertical",
            "keywords": "Q: While a mock-up is called a... prototype, a | A: horizontal, vertical"
        },
        {
            "id": 46,
            "text": "Prioritization is a way to deal with competing demands for limited resources. So, establishing the relative priority of each product capability lets you plan construction to provide the ... value at the ... cost.",
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
            "text": "Customers are a(n) ... of stakeholders.",
            "options": [
                "subset",
                "representative",
                "partner",
                "equivalent"
            ],
            "answer": 0,
            "explanation": "subset",
            "keywords": "Q: Customers are a(n)... of stakeholders. | A: subset"
        },
        {
            "id": 48,
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
            "id": 49,
            "text": "Fill in the blank. \"Define vision and scope\", \"select product champions\" activities should be done ... stage.",
            "options": [
                "Specifications",
                "Validation",
                "Elicitation",
                "Analysis"
            ],
            "answer": 2,
            "explanation": "Elicitation",
            "keywords": "Q: Fill in the blank. \"Define vision and scope\", | A: Elicitation"
        },
        {
            "id": 50,
            "text": "Fill in the blank. ... is a visual representation of the data objects and collections the system will process, and the relationships between them.",
            "options": [
                "Use case diagram",
                "Data model",
                "Data dictionary",
                "Reports"
            ],
            "answer": 1,
            "explanation": "Data model",
            "keywords": "Q: Fill in the blank.... is a visual representation | A: Data model"
        },
        {
            "id": 51,
            "text": "In the specification of a use case, conditions that have the potential to prevent a use case from succeeding are called ...",
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
            "id": 52,
            "text": "Product backlogs typically are",
            "options": [
                "user stories",
                "defects",
                "user stories and defects",
                "prototype"
            ],
            "answer": 2,
            "explanation": "user stories and defects",
            "keywords": "Q: Product backlogs typically are | A: user stories and defects"
        },
        {
            "id": 53,
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
            "id": 54,
            "text": "What is not the purpose of a Use Case Diagram?",
            "options": [
                "Use case diagrams are both behavior diagrams because they describe the behavior of the system. They are also structure diagrams, serving as a special case of class diagrams where classifiers are restricted to be either actors or use cases related to each other with associations.",
                "Use case diagrams show the graphical user interface that needs to be implemented.",
                "Use case diagrams are usually referred to as behavior diagrams used to describe a set of actions (use cases) that some system or systems (subject) should or can perform in collaboration with one or more external users of the system (actors).",
                "A use case describes a sequence of interactions between a system and an external actor that results in the actor being able to achieve some outcome of value."
            ],
            "answer": 1,
            "explanation": "Use case diagrams show the graphical user interface that needs to be implemented.",
            "keywords": "Q: not the purpose of a Use Case Diagram? | A: Use case diagrams show the"
        },
        {
            "id": 55,
            "text": "Which of the following is NOT an intended audience for a Software Requirements Specification (SRS)?",
            "options": [
                "Project Managers",
                "Testers",
                "Legal Staff",
                "Hardware Manufacturers",
                "Documentation Writers"
            ],
            "answer": 3,
            "explanation": "Hardware Manufacturers",
            "keywords": "Q: is NOT an intended audience for a Software | A: Hardware Manufacturers"
        },
        {
            "id": 56,
            "text": "Which of the following is NOT considered a dimension of requirements reuse when adapting requirements from one project to another?",
            "options": [
                "The extent of reuse, including whether individual requirement statements or sets of requirements with their associated elements are reused.",
                "Reuse frequency, which measures how often a particular requirement has been reused in different projects.",
                "The extent of modification, which considers the degree to which reused requirements must be altered to fit the new project's context.",
                "The reuse mechanism, which involves how the requirement is reused, such as copying from a library of reusable requirements or referring to the original source."
            ],
            "answer": 1,
            "explanation": "Reuse frequency, which measures how often a particular requirement has been reused in different projects.",
            "keywords": "Q: is NOT considered a dimension of requirements reuse | A: Reuse frequency"
        },
        {
            "id": 57,
            "text": "Which of the following is NOT a type of business rule according to the taxonomy?",
            "options": [
                "Fact Rules",
                "Action Enabler Rules",
                "Constraint Rules",
                "Operational Rules"
            ],
            "answer": 3,
            "explanation": "Operational Rules",
            "keywords": "Q: is NOT a type of business rule according | A: Operational Rules"
        },
        {
            "id": 58,
            "text": "Which of the following is NOT a characteristic of Software as a Service (SaaS)?",
            "options": [
                "Subscription-based pricing",
                "On-premises deployment",
                "Centralized hosting",
                "Internet accessibility"
            ],
            "answer": 1,
            "explanation": "On-premises deployment",
            "keywords": "Q: is NOT a characteristic of Software as a | A: On-premises deployment"
        },
        {
            "id": 59,
            "text": "Which of the following is NOT a requirements prioritization technique?",
            "options": [
                "Pairwise comparison",
                "In or out",
                "Three-level scale",
                "$1000",
                "MOSCOW"
            ],
            "answer": 3,
            "explanation": "$1000",
            "keywords": "Q: is NOT a requirements prioritization technique? | A: $1000"
        },
        {
            "id": 60,
            "text": "Which of the following does NOT suggest an overall description of the Software Requirements Specification template?",
            "options": [
                "Product perspective",
                "User classes and characteristics",
                "Operating environment",
                "Design and implementation constraints.",
                "Assumptions and dependencies",
                "System feature"
            ],
            "answer": 5,
            "explanation": "System feature",
            "keywords": "Q: does NOT suggest an overall description of the | A: System feature"
        },
        {
            "id": 61,
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
            "keywords": "Q: is NOT included in the list of Software | A: Promptly communicate changes to the requirements"
        },
        {
            "id": 62,
            "text": "Which of the following is NOT about Agile project?",
            "options": [
                "Developers have little interaction with customers after construction begins on projects.",
                "It encourages creating the minimum amount of documentation needed to accurately guide the developers and testers.",
                "BAs or other people responsible for requirements will develop the necessary precision through conversations and documentation when it is needed.",
                "The collaboration of customers with developers on agile projects generally means that requirements can be documented in less detail."
            ],
            "answer": 0,
            "explanation": "Developers have little interaction with customers after construction begins on projects.",
            "keywords": "Q: is NOT about Agile project? | A: Developers have little interaction with"
        },
        {
            "id": 63,
            "text": "Which of the following is NOT about outsourced projects?",
            "options": [
                "It takes advantage of development skills they have available in-house.",
                "It's harder to get developer input on requirements and to pass along user feedback on delivered software to developers.",
                "A formal contractual definition of requirements is necessary, which can lead to contention if differences of interpretation are discovered late in the project."
            ],
            "answer": 0,
            "explanation": "It takes advantage of development skills they have available in-house.",
            "keywords": "Q: is NOT about outsourced projects? | A: It takes advantage of development"
        },
        {
            "id": 64,
            "text": "Which of the following is NOT about packaged solution?",
            "options": [
                "You build systems by using your own staff.",
                "It needs to be configured, integrated, and extended to work in the target environment.",
                "You can purchase a package as part or all of the solution for a new project.",
                "Evaluate solution candidates so that you can select the most appropriate package."
            ],
            "answer": 0,
            "explanation": "You build systems by using your own staff.",
            "keywords": "Q: is NOT about packaged solution? | A: You build systems by using your own staff"
        },
        {
            "id": 65,
            "text": "Which of the following is NOT a purpose of creating a mock-up?",
            "options": [
                "To refine user interface design.",
                "To test architectural feasibility.",
                "To allow users to judge the overall workflow and requirements.",
                "To simulate a user interface with no real functionality."
            ],
            "answer": 1,
            "explanation": "To test architectural feasibility.",
            "keywords": "Q: is NOT a purpose of creating a mock-up? | A: To test architectural feasibility"
        },
        {
            "id": 66,
            "text": "Which one of these is NOT a Business analyst's task?",
            "options": [
                "Communicate requirements",
                "Document requirements",
                "Analyze requirements",
                "Assure requirements",
                "Elicit requirements"
            ],
            "answer": 3,
            "explanation": "Assure requirements",
            "keywords": "Q: of these is NOT a Business analyst's task? | A: Assure requirements"
        },
        {
            "id": 67,
            "text": "Which of the following is NOT about prioritization techniques?",
            "options": [
                "In or out.",
                "Pairwise comparison and rank ordering.",
                "Three-level scale.",
                "MOSCOW.",
                "Based on risk."
            ],
            "answer": 4,
            "explanation": "Based on risk.",
            "keywords": "Q: is NOT about prioritization techniques? | A: Based on risk"
        },
        {
            "id": 68,
            "text": "Which of the following is NOT about Change management on Agile projects?",
            "options": [
                "Agile processes harness change for the customer's competitive advantage.",
                "Agile projects manage change by maintaining a specific backlog of work to be done.",
                "Accepting change helps to meet evolving business objectives and priorities and to accommodate the limitations of human plans and foresight.",
                "Agile methods vary as to their philosophy on this point; there is no single \"correct\" approach."
            ],
            "answer": 3,
            "explanation": "Agile methods vary as to their philosophy on this point; there is no single \"correct\" approach.",
            "keywords": "Q: is NOT about Change management on Agile projects? | A: Agile methods vary as to"
        },
        {
            "id": 69,
            "text": "Which is NOT an activity of risk management?",
            "options": [
                "Risk avoidance",
                "Risk assessment",
                "Risk monitoring",
                "Risk control"
            ],
            "answer": 0,
            "explanation": "Risk avoidance",
            "keywords": "Q: Which is NOT an activity of risk management? | A: Risk avoidance"
        },
        {
            "id": 70,
            "text": "Which of the following is NOT characteristic of the user?",
            "options": [
                "A subset of the product's customers in some cases",
                "A subset of the product's users",
                "A superset of stakeholders",
                "Includes direct users and indirect users"
            ],
            "answer": 2,
            "explanation": "A superset of stakeholders",
            "keywords": "Q: is NOT characteristic of the user? | A: A superset of stakeholders"
        },
        {
            "id": 71,
            "text": "Which of the following statements is TRUE about Use Cases?",
            "options": [
                "Use Cases are static and do not evolve throughout the software development process.",
                "Use case diagrams are the primary tool to document requirements.",
                "Use Cases are not useful in capturing user requirements.",
                "Use Cases describe the interactions between the system and external entities."
            ],
            "answer": 3,
            "explanation": "Use Cases describe the interactions between the system and external entities.",
            "keywords": "Q: statements is TRUE about Use Cases? | A: Use Cases describe the interactions"
        },
        {
            "id": 72,
            "text": "What is a potential consequence of adding more functionality through a series of iterations?",
            "options": [
                "Improved system performance.",
                "Increased system efficiency.",
                "Deterioration of system performance.",
                "Reduced need for performance testing."
            ],
            "answer": 2,
            "explanation": "Deterioration of system performance.",
            "keywords": "Q: a potential consequence of adding more functionality through | A: Deterioration of system performance"
        },
        {
            "id": 73,
            "text": "What is a common pitfall in writing non-functional requirements?",
            "options": [
                "Making them too vague or unmeasurable",
                "Prioritizing them over functional requirements",
                "Writing them without stakeholder input",
                "Skipping them in the documentation process"
            ],
            "answer": 0,
            "explanation": "Making them too vague or unmeasurable",
            "keywords": "Q: a common pitfall in writing non-functional requirements? | A: Making them too vague or unmeasurable"
        },
        {
            "id": 74,
            "text": "What is the definition of a condition in which the scope of a project continues to increase in an uncontrolled fashion throughout the development process?",
            "options": [
                "Risk",
                "Inspection",
                "Scope creep",
                "Decision rule"
            ],
            "answer": 2,
            "explanation": "Scope creep",
            "keywords": "Q: the definition of a condition in which the | A: Scope creep"
        },
        {
            "id": 75,
            "text": "What is the central element that drives all activities in the software development process?",
            "options": [
                "Project plans",
                "Designs and code",
                "Tests",
                "Baselined requirements"
            ],
            "answer": 3,
            "explanation": "Baselined requirements",
            "keywords": "Q: the central element that drives all activities in | A: Baselined requirements"
        },
        {
            "id": 76,
            "text": "What should you not expect a prototype to replace?",
            "options": [
                "Multiple iterations.",
                "Written requirements.",
                "Plausible data.",
                "The purpose of the prototype."
            ],
            "answer": 1,
            "explanation": "Written requirements.",
            "keywords": "Q: What should you not expect a prototype to | A: Written requirements"
        },
        {
            "id": 77,
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
            "keywords": "Q: is a functional requirement? | A: Order products"
        },
        {
            "id": 78,
            "text": "Which one is a kind of prototyping that firstly creates a sample for clarifying requirements with the user, then builds up and adds new features to this sample incrementally, and finally releases the final deliverable product based on it?",
            "options": [
                "Mockup",
                "Throwaway prototype",
                "Evolutionary prototype",
                "Wireframe"
            ],
            "answer": 2,
            "explanation": "Evolutionary prototype",
            "keywords": "Q: is a kind of prototyping that firstly creates | A: Evolutionary prototype"
        },
        {
            "id": 79,
            "text": "Which of the following characteristics of excellent requirements is depicted by the statement: \"Requirements don't conflict with other requirements of the same type or with higher-level biz, user, or system requirements.\"?",
            "options": [
                "Complete",
                "Unambiguous",
                "Consistent",
                "Traceable",
                "Modifiable"
            ],
            "answer": 2,
            "explanation": "Consistent",
            "keywords": "Q: characteristics of excellent requirements is depicted by the | A: Consistent"
        },
        {
            "id": 80,
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
            "keywords": "Q: is not included in software requirements specification (SRS) | A: Design features"
        },
        {
            "id": 81,
            "text": "Which of the following is not an elicitation technique?",
            "options": [
                "Interviews",
                "Focus groups",
                "Observations",
                "Training courses"
            ],
            "answer": 3,
            "explanation": "Training courses",
            "keywords": "Q: is not an elicitation technique? | A: Training courses"
        },
        {
            "id": 82,
            "text": "Which of the following is not a component of an Entity Relationship Diagrams (ERD)?",
            "options": [
                "Entity",
                "Relationship",
                "Association",
                "Cardinality",
                "Attribute"
            ],
            "answer": 2,
            "explanation": "Association",
            "keywords": "Q: is not a component of an Entity Relationship | A: Association"
        },
        {
            "id": 83,
            "text": "Which of the following is a likely stakeholder interest for a retail kiosk's customer?",
            "options": [
                "Maximizing user convenience",
                "Minimizing development cost",
                "Improving operational efficiency",
                "Increasing market reach"
            ],
            "answer": 0,
            "explanation": "Maximizing user convenience",
            "keywords": "Q: is a likely stakeholder interest for a retail | A: Maximizing user convenience"
        },
        {
            "id": 84,
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
            "keywords": "Q: is not a step of requirement development? | A: design"
        },
        {
            "id": 85,
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
            "id": 86,
            "text": "Which elicitation technique is most suitable for identifying stakeholder needs in large projects?",
            "options": [
                "Focus groups",
                "Observation",
                "Brainstorming sessions",
                "Stakeholder interviews"
            ],
            "answer": 0,
            "explanation": "Focus groups",
            "keywords": "Q: Which elicitation technique is most suitable for identifying | A: Focus groups"
        },
        {
            "id": 87,
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
            "id": 88,
            "text": "Which one of the following is not step of requirement engineering?",
            "options": [
                "documentation",
                "elicitation",
                "analysis",
                "design"
            ],
            "answer": 3,
            "explanation": "design",
            "keywords": "Q: is not step of requirement engineering? | A: design"
        },
        {
            "id": 89,
            "text": "Which technique is most effective for resolving conflicts among stakeholders?",
            "options": [
                "Prioritization workshops",
                "Eliminating conflicting requirements",
                "Focusing only on functional requirements",
                "Avoiding stakeholder feedback"
            ],
            "answer": 0,
            "explanation": "Prioritization workshops",
            "keywords": "Q: Which technique is most effective for resolving conflicts | A: Prioritization workshops"
        },
        {
            "id": 90,
            "text": "Which JSTL tag is used to format numbers according to the default user's locale?",
            "options": [
                "<fmt:parseNumber>",
                "<fmt:setNumber>",
                "<fmt:formatNumber>",
                "<fmt:setLocale>"
            ],
            "answer": 2,
            "explanation": "<fmt:formatNumber>",
            "keywords": "Q: Which JSTL tag is used to format numbers | A: <fmt:formatNumber>"
        },
        {
            "id": 91,
            "text": "When considering software quality attributes, which of the following is classified as an internal quality attribute?",
            "options": [
                "Usability",
                "Security",
                "Efficiency",
                "Availability"
            ],
            "answer": 2,
            "explanation": "Efficiency",
            "keywords": "Q: considering software quality attributes, which of the following | A: Efficiency"
        },
        {
            "id": 92,
            "text": "How should the names of use cases be written?",
            "options": [
                "A noun followed by a verb",
                "A verb followed by an object",
                "A random combination of words",
                "A descriptive phrase"
            ],
            "answer": 1,
            "explanation": "A verb followed by an object",
            "keywords": "Q: How should the names of use cases be | A: A verb followed by an object"
        },
        {
            "id": 93,
            "text": "A designated representative of a specific user class, who supplies the user requirements for the group that he or she represents, is a:",
            "options": [
                "Product manager",
                "Product champion",
                "Product backlog",
                "Product owner"
            ],
            "answer": 1,
            "explanation": "Product champion",
            "keywords": "Q: A designated representative of a specific user class, | A: Product champion"
        },
        {
            "id": 94,
            "text": "A key motivation for requirements tracing is to facilitate what activity, especially when a requirement needs to be modified?",
            "options": [
                "Requirements elicitation",
                "Change impact analysis",
                "User interface design",
                "Project budgeting"
            ],
            "answer": 1,
            "explanation": "Change impact analysis",
            "keywords": "Q: A key motivation for requirements tracing is to | A: Change impact analysis"
        },
        {
            "id": 95,
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
            "id": 96,
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
            "id": 97,
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
            "id": 98,
            "text": "Consider the following Statement: \"If a lead doesn't respond back within 30 days of the first contact, it must be a cold lead and can be marked accordingly\". What type of business rule is being depicted here?",
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
            "id": 99,
            "text": "Choose the incorrect answer when talking about the essential aspects of an agile approach to requirements.",
            "options": [
                "Customer involvement",
                "Expect stability",
                "The backlog and prioritization",
                "Timing",
                "Documentation detail"
            ],
            "answer": 1,
            "explanation": "Expect stability",
            "keywords": "Q: Choose the incorrect answer when talking about the | A: Expect stability"
        },
        {
            "id": 100,
            "text": "During which activity are customer needs processed and related to software requirements?",
            "options": [
                "Elicitation",
                "Analysis",
                "Specification",
                "Validation"
            ],
            "answer": 1,
            "explanation": "Analysis",
            "keywords": "Q: During which activity are customer needs processed and | A: Analysis"
        },
        {
            "id": 101,
            "text": "If you prototype the whole solution rather than only the most uncertain, high-risk, or complex portions, your risk is:",
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
            "id": 102,
            "text": "If both \"Submit loan request\" and \"Offer line of credit\" use the \"Perform credit check\" use case, the relationship between \"Perform credit check\" and the other use cases is:",
            "options": [
                "Extend relationship",
                "Generalization relationship",
                "Include relationship"
            ],
            "answer": 2,
            "explanation": "Include relationship",
            "keywords": "Q: If both \"Submit loan request\" and \"Offer line | A: Include relationship"
        },
        {
            "id": 103,
            "text": "If a report is generated but not used, what should a Business Analyst consider doing?",
            "options": [
                "Ensure it is included in the new system",
                "Modify it to meet new requirements",
                "Exclude it from the new system",
                "Increase its frequency of generation"
            ],
            "answer": 2,
            "explanation": "Exclude it from the new system",
            "keywords": "Q: If a report is generated but not used, | A: Exclude it from the new system"
        },
        {
            "id": 104,
            "text": "When creating a persona for each user class, the most important thing is:",
            "options": [
                "The persona must be a real person",
                "The persona must be representative of their user class",
                "The persona must be rich",
                "The persona must be beautiful"
            ],
            "answer": 1,
            "explanation": "The persona must be representative of their user class",
            "keywords": "Q: creating a persona for each user class, the | A: The persona must be representative"
        },
        {
            "id": 105,
            "text": "Why is stakeholder feedback critical during requirements validation?",
            "options": [
                "To ensure requirements align with business objectives and user needs",
                "To finalize coding strategies",
                "To skip ambiguous requirements",
                "To prioritize testing phases"
            ],
            "answer": 0,
            "explanation": "To ensure requirements align with business objectives and user needs",
            "keywords": "Q: stakeholder feedback critical during requirements validation? | A: To ensure requirements align with"
        },
        {
            "id": 106,
            "text": "Why is it important to clearly define the scope of a software project in a scope document?",
            "options": [
                "Limit stakeholder involvement",
                "Speed up the development process",
                "Avoid addressing project risks",
                "Prevent scope creep and ensure project focus"
            ],
            "answer": 3,
            "explanation": "Prevent scope creep and ensure project focus",
            "keywords": "Q: it important to clearly define the scope of | A: Prevent scope creep and ensure project focus"
        },
        {
            "id": 107,
            "text": "Why is it challenging to amalgamate requirements input from numerous users?",
            "options": [
                "Users often disagree on technical specifications.",
                "Structured organizing schemes are typically unavailable.",
                "Requirements input is often diverse and unstructured.",
                "Users lack domain expertise."
            ],
            "answer": 2,
            "explanation": "Requirements input is often diverse and unstructured.",
            "keywords": "Q: it challenging to amalgamate requirements input from numerous | A: Requirements input is often diverse and unstructured"
        },
        {
            "id": 108,
            "text": "How does the process of elicitation relate to the other activities in requirements development?",
            "options": [
                "Elicitation is performed only after specification is complete.",
                "Elicitation is an initial step that does not need to be revisited.",
                "Elicitation is interwoven with analysis, specification, and validation.",
                "Elicitation is only necessary for the first iteration of the project."
            ],
            "answer": 2,
            "explanation": "Elicitation is interwoven with analysis, specification, and validation.",
            "keywords": "Q: the process of elicitation relate to the other | A: Elicitation is interwoven with analysis"
        },
        {
            "id": 109,
            "text": "How does the Kano model help analyze user requirements?",
            "options": [
                "By classifying features into basic, performance, and delight categories",
                "By prioritizing requirements based on technical feasibility",
                "By eliminating unnecessary requirements",
                "By focusing only on functional requirements"
            ],
            "answer": 0,
            "explanation": "By classifying features into basic, performance, and delight categories",
            "keywords": "Q: the Kano model help analyze user requirements? | A: By classifying features into basic"
        },
        {
            "id": 110,
            "text": "How does requirements reuse improve project efficiency?",
            "options": [
                "By reducing time and effort during the elicitation process",
                "By skipping stakeholder reviews",
                "By focusing only on functional requirements",
                "By eliminating non-functional requirements"
            ],
            "answer": 0,
            "explanation": "By reducing time and effort during the elicitation process",
            "keywords": "Q: requirements reuse improve project efficiency? | A: By reducing time and effort"
        },
        {
            "id": 111,
            "text": "How can better requirements practices reduce the cost of development?",
            "options": [
                "By increasing the number of features developed.",
                "By reducing rework, unnecessary features, and miscommunications.",
                "By increasing the project timeline.",
                "By focusing solely on technical specifications."
            ],
            "answer": 1,
            "explanation": "By reducing rework, unnecessary features, and miscommunications.",
            "keywords": "Q: better requirements practices reduce the cost of development? | A: By reducing rework, unnecessary features, and miscommunications"
        },
        {
            "id": 112,
            "text": "Develop a method to ensure that all necessary documents and systems are available for independent elicitation. What would be a primary focus of this method?",
            "options": [
                "Creating a checklist of required documents and systems.",
                "Assigning a team member to gather all necessary materials.",
                "Setting up a shared repository for document access.",
                "Scheduling regular audits to ensure document availability."
            ],
            "answer": 0,
            "explanation": "Creating a checklist of required documents and systems.",
            "keywords": "Q: Develop a method to ensure that all necessary | A: Creating a checklist of required"
        },
        {
            "id": 113,
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
            "id": 114,
            "text": "In a requirements development process, why is it important to establish a mechanism for managing changes to requirements?",
            "options": [
                "To discourage changes and maintain a fixed project scope",
                "To speed up the development process",
                "To adapt to evolving project needs while maintaining control",
                "To eliminate the need for documentation"
            ],
            "answer": 2,
            "explanation": "To adapt to evolving project needs while maintaining control",
            "keywords": "Q: In a requirements development process, why is it | A: To adapt to evolving project"
        },
        {
            "id": 115,
            "text": "What is the primary distinction between Scope Creep and Gold Plating?",
            "options": [
                "Scope Creep involves adding features, whereas Gold Plating involves reducing project scope.",
                "Scope Creep arises from customer-driven changes, while Gold Plating results from the project team adding unnecessary features.",
                "Both Scope Creep and Gold Plating involve unplanned changes.",
                "Scope Creep occurs only in the early stages of a project, while Gold Plating happens post-delivery.",
                "Scope Creep is seen in small projects, while Gold Plating only occurs in large projects."
            ],
            "answer": 1,
            "explanation": "Scope Creep arises from customer-driven changes, while Gold Plating results from the project team adding unnecessary features.",
            "keywords": "Q: the primary distinction between Scope Creep and Gold | A: Scope Creep arises from customer-driven changes"
        },
        {
            "id": 116,
            "text": "What is the distinction between users and actors?",
            "options": [
                "There is no real difference; the terms can be used interchangeably.",
                "Users are only relevant for use cases involving a graphical interface, while actors cover backend processes.",
                "Users are responsible for system development, and actors are responsible for testing.",
                "A user is an actual person (or system) using the product, while an actor is an abstraction that represents the role the user plays in a given use case.",
                "Users are always individuals, while actors are always systems."
            ],
            "answer": 3,
            "explanation": "A user is an actual person (or system) using the product, while an actor is an abstraction that represents the role the user plays in a given use case.",
            "keywords": "Q: the distinction between users and actors? | A: A user is an actual"
        },
        {
            "id": 117,
            "text": "What is the relationship between \"product vision\" and \"project scope\"?",
            "options": [
                "Product vision and project scope are interchangeable terms.",
                "Product vision describes the ultimate product, while project scope identifies the portion of that vision to be addressed by the current project.",
                "Project scope defines business objectives, while product vision defines functional requirements.",
                "Product vision is a subset of project scope for each release."
            ],
            "answer": 1,
            "explanation": "Product vision describes the ultimate product, while project scope identifies the portion of that vision to be addressed by the current project.",
            "keywords": "Q: the relationship between \"product vision\" and \"project scope\"? | A: Product vision describes the ultimate product"
        },
        {
            "id": 118,
            "text": "What is Extent of reuse?",
            "options": [
                "You might reuse just a single functional requirement.",
                "You consider how much modification will be needed to make existing requirements reusable on the new project.",
                "It is simply a copy-and-paste of a piece of requirements information, either from another specification or from a library of reusable requirements.",
                "It is specific functional requirements within use cases, performance requirements, usability requirements, business rules."
            ],
            "answer": 0,
            "explanation": "You might reuse just a single functional requirement.",
            "keywords": "Q: Extent of reuse? | A: You might reuse just a"
        },
        {
            "id": 119,
            "text": "What is Planguage?",
            "options": [
                "It is a programming language.",
                "It is a language with a rich set of keywords that permits precise statements of quality attributes and other project goals.",
                "It is a planning language used in project management.",
                "It is a language to express non-functional requirements."
            ],
            "answer": 1,
            "explanation": "It is a language with a rich set of keywords that permits precise statements of quality attributes and other project goals.",
            "keywords": "Q: Planguage? | A: It is a language with"
        },
        {
            "id": 120,
            "text": "What is the value of creating a traceability matrix in a project?",
            "options": [
                "To ensure all requirements are linked to their design, testing, and implementation phases",
                "To replace stakeholder involvement in the validation phase",
                "To prioritize non-functional requirements over functional ones",
                "To finalize the system's coding standards"
            ],
            "answer": 0,
            "explanation": "To ensure all requirements are linked to their design, testing, and implementation phases",
            "keywords": "Q: the value of creating a traceability matrix in | A: To ensure all requirements are"
        },
        {
            "id": 121,
            "text": "What is the benefit of having a small group representing key areas as decision makers in a project?",
            "options": [
                "It simplifies the decision-making process by involving only the project manager",
                "It ensures diverse perspectives from management, customers, business analysis, development, and marketing",
                "It reduces the need for stakeholder involvement",
                "It focuses solely on technical specifications"
            ],
            "answer": 1,
            "explanation": "It ensures diverse perspectives from management, customers, business analysis, development, and marketing",
            "keywords": "Q: the benefit of having a small group representing | A: It ensures diverse perspectives from management"
        },
        {
            "id": 122,
            "text": "What is the primary purpose of a state-transition diagram (STD)?",
            "options": [
                "To model the physical layout and hardware components of a system",
                "To represent the possible states of an object and the transitions between these states based on various events or conditions",
                "To outline the organizational roles and responsibilities within a business process",
                "To visualize user interface flow and interactions in software applications"
            ],
            "answer": 1,
            "explanation": "To represent the possible states of an object and the transitions between these states based on various events or conditions",
            "keywords": "Q: the primary purpose of a state-transition diagram (STD)? | A: To represent the possible states"
        },
        {
            "id": 123,
            "text": "What is the definition of Pre-Condition in Use case?",
            "options": [
                "A condition that describes the state of a system after a use case is successfully completed",
                "A condition that must be satisfied or a state the system must be in before a use case can begin",
                "A condition that initiates execution of the use case",
                "A condition that must be satisfied so that system run successful"
            ],
            "answer": 1,
            "explanation": "A condition that must be satisfied or a state the system must be in before a use case can begin",
            "keywords": "Q: the definition of Pre-Condition in Use case? | A: A condition that must be"
        },
        {
            "id": 124,
            "text": "What is the main benefit of fostering a collaborative relationship between the development team and other stakeholders in the requirements process?",
            "options": [
                "To ensure that each stakeholder has full control over the project",
                "To align business, technical, and user needs and avoid misunderstandings",
                "To speed up the development process by minimizing the number of team members involved",
                "To focus only on technical requirements without business or user input"
            ],
            "answer": 1,
            "explanation": "To align business, technical, and user needs and avoid misunderstandings",
            "keywords": "Q: the main benefit of fostering a collaborative relationship | A: To align business"
        },
        {
            "id": 125,
            "text": "What is the value of prototyping during requirements elicitation?",
            "options": [
                "It provides a visual tool to clarify ambiguous requirements and gather stakeholder feedback",
                "It eliminates the need for acceptance criteria",
                "It skips non-functional requirements",
                "It focuses on coding directly"
            ],
            "answer": 0,
            "explanation": "It provides a visual tool to clarify ambiguous requirements and gather stakeholder feedback",
            "keywords": "Q: the value of prototyping during requirements elicitation? | A: It provides a visual tool"
        },
        {
            "id": 126,
            "text": "What is the role of user stories in Agile requirements management?",
            "options": [
                "To provide concise, actionable descriptions of features from the user's perspective",
                "To replace the Vision and Scope document",
                "To prioritize non-functional requirements",
                "To finalize the system's architecture"
            ],
            "answer": 0,
            "explanation": "To provide concise, actionable descriptions of features from the user's perspective",
            "keywords": "Q: the role of user stories in Agile requirements | A: To provide concise"
        },
        {
            "id": 127,
            "text": "What is the primary purpose of using a prototype in the software development process?",
            "options": [
                "To finalize the product design and ensure no further changes are needed",
                "To validate requirements by finding errors and omissions, and assessing their accuracy and quality",
                "To create a fully functional product that can be immediately deployed",
                "To focus solely on the user experience without considering technical feasibility"
            ],
            "answer": 1,
            "explanation": "To validate requirements by finding errors and omissions, and assessing their accuracy and quality",
            "keywords": "Q: the primary purpose of using a prototype in | A: To validate requirements by finding"
        },
        {
            "id": 128,
            "text": "What is a requirements baseline?",
            "options": [
                "Constraints on the development process of the system",
                "A specification of features to be implemented, descriptions of how the system should behave or descriptions",
                "A set of requirements that stakeholders have agreed to, often defining the contents of a specific planned release or development iteration"
            ],
            "answer": 2,
            "explanation": "A set of requirements that stakeholders have agreed to, often defining the contents of a specific planned release or development iteration",
            "keywords": "Q: a requirements baseline? | A: A set of requirements that"
        },
        {
            "id": 129,
            "text": "What is the primary motivation for tracing requirements?",
            "options": [
                "To prevent any changes from being made to project requirements",
                "To document project assumptions",
                "To manage project team members",
                "To improve the quality of your products, reduce maintenance costs, and facilitate reuse"
            ],
            "answer": 3,
            "explanation": "To improve the quality of your products, reduce maintenance costs, and facilitate reuse",
            "keywords": "Q: the primary motivation for tracing requirements? | A: To improve the quality of your products"
        },
        {
            "id": 130,
            "text": "What is a key difference between a throwaway prototype and an evolutionary prototype?",
            "options": [
                "A throwaway prototype is built with production-quality code, while an evolutionary prototype is discarded after use.",
                "An evolutionary prototype is designed to be gradually refined into the final product, while a throwaway prototype is created to answer specific questions and then discarded.",
                "A throwaway prototype provides a solid architectural foundation for the final product, while an evolutionary prototype is typically used to test user interface designs.",
                "Both throwaway and evolutionary prototypes are intended to be discarded after initial testing."
            ],
            "answer": 1,
            "explanation": "An evolutionary prototype is designed to be gradually refined into the final product, while a throwaway prototype is created to answer specific questions and then discarded.",
            "keywords": "Q: a key difference between a throwaway prototype and | A: An evolutionary prototype is designed"
        },
        {
            "id": 131,
            "text": "What is the primary distinction between requirements validation and verification?",
            "options": [
                "Validation ensures that the product meets the user's needs, while verification ensures it is free from defects.",
                "Validation ensures the product satisfies customer needs, while verification ensures the product meets its specifications.",
                "Validation occurs before the design phase, and verification occurs after.",
                "Validation is about internal testing, while verification is about external approval."
            ],
            "answer": 1,
            "explanation": "Validation ensures the product satisfies customer needs, while verification ensures the product meets its specifications.",
            "keywords": "Q: the primary distinction between requirements validation and verification? | A: Validation ensures the product satisfies"
        },
        {
            "id": 132,
            "text": "What is the primary purpose of a Swimlane diagram?",
            "options": [
                "To represent detailed software architecture and coding structures.",
                "To visually depict the steps involved in a business process or the operations of a proposed software system, subdivided into lanes that represent different systems or actors.",
                "To exclusively model user interface interactions and design layouts.",
                "To show the organizational structure and management hierarchy within a company."
            ],
            "answer": 1,
            "explanation": "To visually depict the steps involved in a business process or the operations of a proposed software system, subdivided into lanes that represent different systems or actors.",
            "keywords": "Q: the primary purpose of a Swimlane diagram? | A: To visually depict the steps"
        },
        {
            "id": 133,
            "text": "What are the major activities involved in requirements management?",
            "options": [
                "Version control, project scheduling, change control and budget management",
                "Change control, risk assessment, requirements tracing and stakeholder engagement",
                "Version control, change control, requirements status tracking, and requirements tracing",
                "Change control, testing, deployment, and maintenance"
            ],
            "answer": 2,
            "explanation": "Version control, change control, requirements status tracking, and requirements tracing",
            "keywords": "Q: the major activities involved in requirements management? | A: Version control"
        },
        {
            "id": 134,
            "text": "What steps would you include in a peer review process to identify and resolve ambiguities in requirement statements?",
            "options": [
                "Have each participant review the requirements individually and submit their feedback separately.",
                "Conduct a formal peer review meeting where participants compare their understanding of each requirement and discuss any ambiguities.",
                "Skip the peer review process and rely on individual interpretations.",
                "Only review requirements after the development phase."
            ],
            "answer": 1,
            "explanation": "Conduct a formal peer review meeting where participants compare their understanding of each requirement and discuss any ambiguities.",
            "keywords": "Q: What steps would you include in a peer | A: Conduct a formal peer review"
        },
        {
            "id": 135,
            "text": "What are the reasons for companies to contract with software outsourcing organizations?",
            "options": [
                "To increase control and oversight project",
                "To minimize stakeholder involvement",
                "To limit project scope",
                "To save money, or to accelerate development and access specialized expertise."
            ],
            "answer": 3,
            "explanation": "To save money, or to accelerate development and access specialized expertise.",
            "keywords": "Q: the reasons for companies to contract with software | A: To save money"
        },
        {
            "id": 136,
            "text": "What's the difference between Use Cases and User Stories?",
            "options": [
                "The use case is a business artifact which defines the software requirement or an application feature. Whereas use story is a test artifact which defines the steps to validate and verify that the software requirement or application feature exists",
                "The user story contains complete and lengthy descriptions. A use case contains simplified and short descriptions",
                "The user story is a business artifact which defines the software requirement or an application feature. Whereas use case is a test artifact which defines the steps to validate and verify that the software requirement or application feature exists",
                "The user story contains simplified and short descriptions. A use case contains complete and lengthy descriptions"
            ],
            "answer": 3,
            "explanation": "The user story contains simplified and short descriptions. A use case contains complete and lengthy descriptions",
            "keywords": "Q: What's the difference between Use Cases and User | A: The user story contains simplified"
        },
        {
            "id": 137,
            "text": "Which of the following statements INCORRECTLY describes types of software requirements?",
            "options": [
                "Business rules are the origin of several types of software requirements, but they are not software requirements themselves.",
                "Nonfunctional requirements describe the system's performance characteristics rather than its specific behaviors.",
                "Functional requirements describe how the system will perform certain actions under specific conditions.",
                "Quality attributes describe the system's functional behaviors in terms of user interactions."
            ],
            "answer": 3,
            "explanation": "Quality attributes describe the system's functional behaviors in terms of user interactions.",
            "keywords": "Q: statements INCORRECTLY describes types of software requirements? | A: Quality attributes describe the system's"
        },
        {
            "id": 138,
            "text": "Which of the following is the most precise definition of \"requirement(s)\"?",
            "options": [
                "A requirement is anything that drives design choices.",
                "A requirement is a property that a product must have to provide value to a stakeholder.",
                "Requirements are a specification of what should be implemented. They are descriptions of how the system should behave, or a system property or attribute. They may be a constraint on the development process of the system.",
                "Requirements are what customers want."
            ],
            "answer": 2,
            "explanation": "Requirements are a specification of what should be implemented. They are descriptions of how the system should behave, or a system property or attribute. They may be a constraint on the development process of the system.",
            "keywords": "Q: is the most precise definition of \"requirement(s)\"? | A: Requirements are a specification of"
        },
        {
            "id": 139,
            "text": "Which of the following best describes the primary purpose of a vision and scope document?",
            "options": [
                "To detail the technical specifications of the project.",
                "To collect business requirements into a single deliverable for subsequent development work.",
                "To outline the marketing strategy for the product.",
                "To provide a detailed project timeline."
            ],
            "answer": 1,
            "explanation": "To collect business requirements into a single deliverable for subsequent development work.",
            "keywords": "Q: best describes the primary purpose of a vision | A: To collect business requirements into"
        },
        {
            "id": 140,
            "text": "In a Swimlane diagram, process steps are shown as:",
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
            "id": 141,
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
            "id": 142,
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
            "id": 143,
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
            "id": 144,
            "text": "In the Chemical Tracking System project, what is the relationship between use case \"Pay a bill\" and use case \"Write a check\"?",
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
            "id": 145,
            "text": "\"Organize and share notes\" is an activity that belongs to?",
            "options": [
                "Preparing for elicitation",
                "Performing elicitation activities",
                "Following up after elicitation",
                "Classifying customer"
            ],
            "answer": 2,
            "explanation": "Following up after elicitation",
            "keywords": "Q: \"Organize and share notes\" is an activity that | A: Following up after elicitation"
        },
        {
            "id": 146,
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
            "id": 147,
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
            "id": 148,
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
            "id": 149,
            "text": "Your company developed a software system for a customer a long time ago, and the application works as intended. Now, the customer's business has grown, and they want the software system to handle 10x the number of transactions. They ask your company to upgrade the software system. Upon inspection, you find out that this system can't handle 10x transactions due to monolithic processes and tightly coupled logic. What is the quality attribute mentioned above?",
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
            "id": 150,
            "text": "What is the main purpose of a requirements baseline?",
            "options": [
                "To track changes",
                "To establish project goals",
                "To set the scope of the project",
                "To establish an initial set of agreed-upon requirements"
            ],
            "answer": 3,
            "explanation": "To establish an initial set of agreed-upon requirements",
            "keywords": "Q: the main purpose of a requirements baseline? | A: To establish an initial set"
        },
        {
            "id": 151,
            "text": "What is one guideline for naming processes in a DFD?",
            "options": [
                "Use a verb only",
                "Use a noun only",
                "Name the process after its corresponding data store",
                "Name each process using a concise verb-object action"
            ],
            "answer": 3,
            "explanation": "Name each process using a concise verb-object action",
            "keywords": "Q: one guideline for naming processes in a DFD? | A: Name each process using a"
        },
        {
            "id": 152,
            "text": "What is the function of decision tables in requirements modeling?",
            "options": [
                "To represent complex Boolean logic and decisions in a tabular format",
                "To model user interface design",
                "To specify data flows",
                "To define system states"
            ],
            "answer": 0,
            "explanation": "To represent complex Boolean logic and decisions in a tabular format",
            "keywords": "Q: the function of decision tables in requirements modeling? | A: To represent complex Boolean logic"
        },
        {
            "id": 153,
            "text": "What is the main advantage of using the active voice in writing requirements?",
            "options": [
                "It helps in reducing the length of the requirements.",
                "It makes the subject and action of the sentence clear, ensuring clarity.",
                "It makes the requirements sound more formal and professional.",
                "It is easier to translate into other languages."
            ],
            "answer": 1,
            "explanation": "It makes the subject and action of the sentence clear, ensuring clarity.",
            "keywords": "Q: the main advantage of using the active voice | A: It makes the subject and"
        },
        {
            "id": 154,
            "text": "What is a key benefit of using mock-ups in prototyping?",
            "options": [
                "To test the performance of the system",
                "To demonstrate the system's functionality",
                "To clarify user interface designs early",
                "To finalize system features"
            ],
            "answer": 2,
            "explanation": "To clarify user interface designs early",
            "keywords": "Q: a key benefit of using mock-ups in prototyping? | A: To clarify user interface designs early"
        },
        {
            "id": 155,
            "text": "What is the primary advantage of requirements reuse in software projects?",
            "options": [
                "Reducing time and effort during the elicitation process",
                "Skipping the stakeholder review phase",
                "Eliminating the need for prototyping",
                "Ensuring all requirements are functional"
            ],
            "answer": 0,
            "explanation": "Reducing time and effort during the elicitation process",
            "keywords": "Q: the primary advantage of requirements reuse in software | A: Reducing time and effort during"
        },
        {
            "id": 156,
            "text": "What is one of the first questions to ask when eliciting reporting requirements from a customer?",
            "options": [
                "How often should the reports be printed?",
                "What reports are currently used?",
                "How many users will need access to the report?",
                "What is the preferred color scheme for the reports?"
            ],
            "answer": 1,
            "explanation": "What reports are currently used?",
            "keywords": "Q: one of the first questions to ask when | A: What reports are currently used?"
        },
        {
            "id": 157,
            "text": "What is the most popular form of user stories?",
            "options": [
                "As a <type of user>, I want <some goal> so that <some reason>.",
                "As a <type of user>, I want <some goal>.",
                "As a <type of user>, I need <some need> so that <some reason>.",
                "As a <type of user>, I want <some goal> to <some purpose>."
            ],
            "answer": 0,
            "explanation": "As a <type of user>, I want <some goal> so that <some reason>.",
            "keywords": "Q: the most popular form of user stories? | A: As a <type of user>"
        },
        {
            "id": 158,
            "text": "What is the primary challenge of validating non-functional requirements?",
            "options": [
                "They are often subjective and difficult to measure accurately",
                "They focus only on technical constraints",
                "They eliminate the need for functional requirements",
                "They replace stakeholder reviews."
            ],
            "answer": 0,
            "explanation": "They are often subjective and difficult to measure accurately",
            "keywords": "Q: the primary challenge of validating non-functional requirements? | A: They are often subjective and"
        },
        {
            "id": 159,
            "text": "What is the main purpose of a Vision and Scope document?",
            "options": [
                "To define the boundaries and objectives of the project",
                "To specify all technical requirements",
                "To finalize the system's architecture",
                "To replace the requirements traceability matrix"
            ],
            "answer": 0,
            "explanation": "To define the boundaries and objectives of the project",
            "keywords": "Q: the main purpose of a Vision and Scope | A: To define the boundaries and"
        },
        {
            "id": 160,
            "text": "What is a potential way for someone to transition into the business analyst role?",
            "options": [
                "Through an apprenticeship program with mentoring",
                "By studying software development exclusively",
                "By focusing only on user interface design skills",
                "By avoiding involvement in diverse business activities"
            ],
            "answer": 0,
            "explanation": "Through an apprenticeship program with mentoring",
            "keywords": "Q: a potential way for someone to transition into | A: Through an apprenticeship program with mentoring"
        },
        {
            "id": 161,
            "text": "What is the advantage of using acceptance tests during validation?",
            "options": [
                "To ensure that all requirements are measurable and testable",
                "To eliminate the need for non-functional requirements",
                "To skip stakeholder reviews",
                "To prioritize coding tasks"
            ],
            "answer": 0,
            "explanation": "To ensure that all requirements are measurable and testable",
            "keywords": "Q: the advantage of using acceptance tests during validation? | A: To ensure that all requirements"
        },
        {
            "id": 162,
            "text": "What is the primary purpose of requirements reuse?",
            "options": [
                "To save time, improve consistency, and reduce risks",
                "To eliminate stakeholder reviews",
                "To finalize the coding phase",
                "To reduce prototyping efforts"
            ],
            "answer": 0,
            "explanation": "To save time, improve consistency, and reduce risks",
            "keywords": "Q: the primary purpose of requirements reuse? | A: To save time"
        },
        {
            "id": 163,
            "text": "What is Risk assessment?",
            "options": [
                "It is the process of examining a project to identify potential threats.",
                "It is one way to deal with a risk: don't do the risky thing.",
                "It produces a plan for dealing with each significant risk.",
                "It activities to manage the top-priority risks you identified."
            ],
            "answer": 0,
            "explanation": "It is the process of examining a project to identify potential threats.",
            "keywords": "Q: Risk assessment? | A: It is the process of"
        },
        {
            "id": 164,
            "text": "What is the primary objective of creating a requirements traceability matrix (RTM)?",
            "options": [
                "To link requirements to design, development, and testing artifacts",
                "To identify redundant requirements",
                "To finalize the system budget",
                "To prioritize stakeholder meetings"
            ],
            "answer": 0,
            "explanation": "To link requirements to design, development, and testing artifacts",
            "keywords": "Q: the primary objective of creating a requirements traceability | A: To link requirements to design"
        },
        {
            "id": 165,
            "text": "What is the primary challenge of documenting requirements for complex systems?",
            "options": [
                "Ensuring clarity, consistency, and avoiding ambiguities",
                "Eliminating low-priority requirements",
                "Skipping stakeholder validation",
                "Focusing only on functional needs"
            ],
            "answer": 0,
            "explanation": "Ensuring clarity, consistency, and avoiding ambiguities",
            "keywords": "Q: the primary challenge of documenting requirements for complex | A: Ensuring clarity, consistency, and avoiding ambiguities"
        },
        {
            "id": 166,
            "text": "What is the simplest way to initially manage business rules in an organization?",
            "options": [
                "Implement a full-scale business rule management tool",
                "Use a requirements management tool",
                "Use a word processor or a simple catalog",
                "Write business rules directly in application code"
            ],
            "answer": 2,
            "explanation": "Use a word processor or a simple catalog",
            "keywords": "Q: the simplest way to initially manage business rules | A: Use a word processor or a simple catalog"
        },
        {
            "id": 167,
            "text": "What is the purpose of categorizing requirements into \"Must-have\" and \"Should-have\"?",
            "options": [
                "To prioritize high-value requirements for early implementation",
                "To eliminate low-priority requirements altogether",
                "To finalize coding strategies",
                "To reduce the scope of non-functional requirements"
            ],
            "answer": 0,
            "explanation": "To prioritize high-value requirements for early implementation",
            "keywords": "Q: the purpose of categorizing requirements into \"Must-have\" and | A: To prioritize high-value requirements for early implementation"
        },
        {
            "id": 168,
            "text": "What is a key characteristic of Agile projects?",
            "options": [
                "Strict adherence to a detailed project plan",
                "Regular adaptation to changing requirements and priorities",
                "Emphasis on comprehensive documentation over working software",
                "Minimal interaction with customers and stakeholders"
            ],
            "answer": 1,
            "explanation": "Regular adaptation to changing requirements and priorities",
            "keywords": "Q: a key characteristic of Agile projects? | A: Regular adaptation to changing requirements and priorities"
        },
        {
            "id": 169,
            "text": "What does the \"STRETCH\" keyword in Planguage represent?",
            "options": [
                "The ideal performance level",
                "A benchmark for testing",
                "A more desirable performance objective than the minimum goal",
                "A failure condition"
            ],
            "answer": 2,
            "explanation": "A more desirable performance objective than the minimum goal",
            "keywords": "Q: the \"STRETCH\" keyword in Planguage represent? | A: A more desirable performance objective"
        },
        {
            "id": 170,
            "text": "What does the MOSCOW method classify in requirements prioritization?",
            "options": [
                "Urgency and cost of requirements",
                "Must, Should, Could, and Won't categories",
                "Technical feasibility and design limitations",
                "High, Medium, and Low priorities"
            ],
            "answer": 1,
            "explanation": "Must, Should, Could, and Won't categories",
            "keywords": "Q: the MOSCOW method classify in requirements prioritization? | A: Must, Should, Could, and Won't categories"
        },
        {
            "id": 171,
            "text": "What does the term \"elicitation\" primarily refer to in requirements engineering?",
            "options": [
                "The process of gathering requirements from stakeholders",
                "The validation of technical requirements",
                "The prioritization of system constraints",
                "The finalization of the project budget"
            ],
            "answer": 0,
            "explanation": "The process of gathering requirements from stakeholders",
            "keywords": "Q: the term \"elicitation\" primarily refer to in requirements | A: The process of gathering requirements from stakeholders"
        },
        {
            "id": 172,
            "text": "What tool did Seilevel develop to assist with estimating requirements development effort?",
            "options": [
                "A coding tool for developers.",
                "A requirements effort estimation spreadsheet.",
                "A time-tracking tool for project managers.",
                "A documentation tool for stakeholders."
            ],
            "answer": 1,
            "explanation": "A requirements effort estimation spreadsheet.",
            "keywords": "Q: What tool did Seilevel develop to assist with | A: A requirements effort estimation spreadsheet"
        },
        {
            "id": 173,
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
            "keywords": "Q: What activities is not included in a representative | A: Select an appropriate software development life cycle"
        },
        {
            "id": 174,
            "text": "Which of the following is a recommended question to ask when probing for exceptions in processes?",
            "options": [
                "Why do you think this system is perfect?",
                "What are the three things you dislike about the current system?",
                "What happens when an error occurs?",
                "What is your favorite feature of this system?"
            ],
            "answer": 2,
            "explanation": "What happens when an error occurs?",
            "keywords": "Q: is a recommended question to ask when probing | A: What happens when an error occurs?"
        },
        {
            "id": 175,
            "text": "Which of the following is not a benefit of having a clear set of expectations for product champions?",
            "options": [
                "Encouraging accountability and clarity of role",
                "Helping champions align with project goals",
                "Guaranteeing the project will stay on budget",
                "Facilitating negotiation of the champion's responsibilities"
            ],
            "answer": 2,
            "explanation": "Guaranteeing the project will stay on budget",
            "keywords": "Q: is not a benefit of having a clear | A: Guaranteeing the project will stay on budget"
        },
        {
            "id": 176,
            "text": "Which of the following is an example of a risk avoidance strategy?",
            "options": [
                "Performing risk control activities to manage top-priority risks",
                "Documenting potential risks without any action",
                "Not engaging in the risky activity at all",
                "Ignoring minor risks and focusing only on major risks."
            ],
            "answer": 2,
            "explanation": "Not engaging in the risky activity at all",
            "keywords": "Q: is an example of a risk avoidance strategy? | A: Not engaging in the risky activity at all"
        },
        {
            "id": 177,
            "text": "Which of the following are essential analyst skills required from the Business Analyst?",
            "options": [
                "Listening skills, Systems thinking skills",
                "Interviewing and questioning skills, Learning skills, Interpersonal skills",
                "Thinking on your feet, Facilitation skills",
                "Analytical skills, Leadership skills, Organizational skills, Creativity",
                "Observational skills, Communication skills, Modeling skills",
                "All of the mentioned"
            ],
            "answer": 5,
            "explanation": "All of the mentioned",
            "keywords": "Q: are essential analyst skills required from the Business | A: All of the mentioned"
        },
        {
            "id": 178,
            "text": "Which keyword in Planguage defines the goal or minimum acceptable achievement level?",
            "options": [
                "AMBITION",
                "SCALE",
                "GOAL",
                "WISH"
            ],
            "answer": 2,
            "explanation": "GOAL",
            "keywords": "Q: Which keyword in Planguage defines the goal or | A: GOAL"
        },
        {
            "id": 179,
            "text": "Which statement best describes the purpose of an Epic in Agile project?",
            "options": [
                "To define detailed requirements and specifications for a project",
                "To represent a high-level user need or business requirement that can be broken down into smaller, more manageable user stories",
                "To assign tasks to team members for implementation",
                "To prioritize project deliverables"
            ],
            "answer": 1,
            "explanation": "To represent a high-level user need or business requirement that can be broken down into smaller, more manageable user stories",
            "keywords": "Q: Which statement best describes the purpose of an | A: To represent a high-level user"
        },
        {
            "id": 180,
            "text": "Why is traceability essential for managing changing requirements?",
            "options": [
                "To track changes and ensure alignment with project goals",
                "To prioritize functional requirements",
                "To reduce stakeholder involvement",
                "To eliminate ambiguous requirements"
            ],
            "answer": 0,
            "explanation": "To track changes and ensure alignment with project goals",
            "keywords": "Q: traceability essential for managing changing requirements? | A: To track changes and ensure"
        },
        {
            "id": 181,
            "text": "Which of the following statements best describes a key aspect of performance requirements for a software system?",
            "options": [
                "Performance requirements focus solely on the visual design and user interface of the system.",
                "Performance requirements include the responsiveness of the system to user inquiries, such as the number of seconds to display a webpage.",
                "Performance requirements are concerned only with the physical storage capacity of the system's database.",
                "Performance requirements are unrelated to the external factors like network connections and hardware components."
            ],
            "answer": 1,
            "explanation": "Performance requirements include the responsiveness of the system to user inquiries, such as the number of seconds to display a webpage.",
            "keywords": "Q: statements best describes a key aspect of performance | A: Performance requirements include the responsiveness"
        },
        {
            "id": 182,
            "text": "Which of the following statements are incorrect about throwaway prototypes?",
            "options": [
                "most appropriate when the team faces uncertainty, ambiguity, incompleteness, or vagueness in the requirements",
                "when build a throwaway prototype, they ignore solid software construction techniques.",
                "you might prefer to call it a releasable prototype",
                "Build a throwaway prototype to answer questions, resolve uncertainties, and improve requirements quality"
            ],
            "answer": 2,
            "explanation": "you might prefer to call it a releasable prototype",
            "keywords": "Q: statements are incorrect about throwaway prototypes? | A: you might prefer to call"
        },
        {
            "id": 183,
            "text": "Which of the following best describes the structure of the Requirements Traceability Matrix (RTM)?",
            "options": [
                "It is a spreadsheet that lists requirements and their corresponding test cases",
                "It is a graphical representation of the project schedule",
                "It is a tool used to manage project risks",
                "It is a spreadsheet that maps requirements to other project artifacts such as design documents, test cases, and source code"
            ],
            "answer": 3,
            "explanation": "It is a spreadsheet that maps requirements to other project artifacts such as design documents, test cases, and source code",
            "keywords": "Q: best describes the structure of the Requirements Traceability | A: It is a spreadsheet that"
        },
        {
            "id": 184,
            "text": "Which of the following characteristics should a collection of requirements exhibit?",
            "options": [
                "Completeness, meaning it is acceptable if some necessary information is absent as long as the core requirements are documented.",
                "Modifiability, which allows changes to be made without maintaining a history of changes or considering dependencies among requirements.",
                "Consistency, ensuring that requirements do not conflict with other requirements or higher-level business, user, or system requirements.",
                "Traceability, where requirements should be loosely linked and not necessarily connected to their origin or to derived elements."
            ],
            "answer": 2,
            "explanation": "Consistency, ensuring that requirements do not conflict with other requirements or higher-level business, user, or system requirements.",
            "keywords": "Q: characteristics should a collection of requirements exhibit? | A: Consistency"
        },
        {
            "id": 185,
            "text": "Which of the following activities fall under the core activities of requirements management?",
            "options": [
                "Document formatting, project scheduling, risk management, and budget tracking.",
                "Quality assurance, stakeholder management, resource allocation, and system testing.",
                "Version control, change control, requirements status tracking, and requirements tracing.",
                "Designing user interfaces, coding, testing software modules, and system deployment."
            ],
            "answer": 2,
            "explanation": "Version control, change control, requirements status tracking, and requirements tracing.",
            "keywords": "Q: activities fall under the core activities of requirements | A: Version control"
        },
        {
            "id": 186,
            "text": "Which of the following statements is incorrect about ERD?",
            "options": [
                "Individual instances of an entity will have the same attribute values",
                "The cardinality, or multiplicity, of each relationship is shown with a number or letter on the lines that connect entities and relationships",
                "Each entity is described by one or more attributes",
                "The diamonds in the ERD represent relationships, which identify the logical linkages between pairs of entities"
            ],
            "answer": 0,
            "explanation": "Individual instances of an entity will have the same attribute values",
            "keywords": "Q: statements is incorrect about ERD? | A: Individual instances of an entity"
        },
        {
            "id": 187,
            "text": "Which of the following statements is incorrect about mockup?",
            "options": [
                "It is also called a horizontal prototype",
                "It dives into all the architectural layers or into detailed functionality",
                "It displays the facades of user interface screens and permits some navigation between them",
                "It lets you explore some specific behaviors of the intended system, with the goal of refining the requirements"
            ],
            "answer": 1,
            "explanation": "It dives into all the architectural layers or into detailed functionality",
            "keywords": "Q: statements is incorrect about mockup? | A: It dives into all the"
        },
        {
            "id": 188,
            "text": "Which of the following factors can act as a barrier to requirements reuse?",
            "options": [
                "Lack of stakeholder involvement",
                "Frequent updates and version control of requirements documentation",
                "Standardized format for requirements documentation",
                "Requirements written in natural language are ambiguities, missing information, and hidden assumptions"
            ],
            "answer": 3,
            "explanation": "Requirements written in natural language are ambiguities, missing information, and hidden assumptions",
            "keywords": "Q: factors can act as a barrier to requirements | A: Requirements written in natural language"
        },
        {
            "id": 189,
            "text": "Which of the following statements best describes a \"horizontal prototype\" in the context of software development?",
            "options": [
                "A horizontal prototype focuses on the user interface, allowing exploration of specific behaviors without diving into detailed functionality or architectural layers.",
                "A horizontal prototype fully implements all layers of the system, from the user interface to the backend services.",
                "A horizontal prototype is used to validate the architectural approach and test critical timing requirements.",
                "A horizontal prototype includes detailed implementation of business logic and database interactions."
            ],
            "answer": 0,
            "explanation": "A horizontal prototype focuses on the user interface, allowing exploration of specific behaviors without diving into detailed functionality or architectural layers.",
            "keywords": "Q: statements best describes a \"horizontal prototype\" in the | A: A horizontal prototype focuses on"
        },
        {
            "id": 190,
            "text": "Which statement accurately describes the implementation of a COTS package?",
            "options": [
                "COTS packages always require significant customization.",
                "Some COTS packages can be used out of the box with little to no modification",
                "COTS packages provide unlimited flexibility to meet all business requirements",
                "All COTS packages require integration with other systems."
            ],
            "answer": 1,
            "explanation": "Some COTS packages can be used out of the box with little to no modification",
            "keywords": "Q: Which statement accurately describes the implementation of a | A: Some COTS packages can be"
        },
        {
            "id": 191,
            "text": "How can you explain the statement \"Implicit requirements can also be unknown unknowns\"?",
            "options": [
                "During the SRS process, customers should always be required to spell out their unknown unknowns.",
                "An unknown unknown cannot be known and therefore we can not make them explicit requirements.",
                "There are matters that should be, but are not, elicited through the elicitation process. They exist, but they are not realized.",
                "They help us reveal both known unknowns and more unknown unknowns."
            ],
            "answer": 2,
            "explanation": "There are matters that should be, but are not, elicited through the elicitation process. They exist, but they are not realized.",
            "keywords": "Q: you explain the statement \"Implicit requirements can also | A: There are matters that should be"
        },
        {
            "id": 192,
            "text": "How does prototyping mitigate risks in requirements engineering?",
            "options": [
                "By providing stakeholders with a visual representation to validate ambiguous requirements",
                "By finalizing system requirements early",
                "By focusing on coding rather than design.",
                "By skipping the requirements validation phase"
            ],
            "answer": 0,
            "explanation": "By providing stakeholders with a visual representation to validate ambiguous requirements",
            "keywords": "Q: prototyping mitigate risks in requirements engineering? | A: By providing stakeholders with a"
        },
        {
            "id": 193,
            "text": "How does the MOSCOW method assist in prioritizing requirements?",
            "options": [
                "By categorizing requirements as Must-have, Should-have, Could-have, and Won't-have",
                "By focusing on technical feasibility",
                "By skipping stakeholder engagement",
                "By eliminating low-priority requirements"
            ],
            "answer": 0,
            "explanation": "By categorizing requirements as Must-have, Should-have, Could-have, and Won't-have",
            "keywords": "Q: the MOSCOW method assist in prioritizing requirements? | A: By categorizing requirements as Must-have"
        },
        {
            "id": 194,
            "text": "How should data flows be represented between processes, data stores, and external entities in a DFD?",
            "options": [
                "Directly from one process to another.",
                "Directly from one data store to another.",
                "Through a process bubble, not directly between data stores or between external entities and data stores.",
                "Directly between external entities and data stores."
            ],
            "answer": 2,
            "explanation": "Through a process bubble, not directly between data stores or between external entities and data stores.",
            "keywords": "Q: How should data flows be represented between processes, | A: Through a process bubble"
        },
        {
            "id": 195,
            "text": "How can reusable requirements be stored for easy reference?",
            "options": [
                "By storing them in a spreadsheet.",
                "By copying them into every new project document.",
                "By linking to them from a shared location such as a database or a requirements management tool.",
                "By creating new versions for every instance they are used."
            ],
            "answer": 2,
            "explanation": "By linking to them from a shared location such as a database or a requirements management tool.",
            "keywords": "Q: reusable requirements be stored for easy reference? | A: By linking to them from"
        },
        {
            "id": 196,
            "text": "When defining installability requirements, which of the following factors is most important to measure how easy it is to install a system?",
            "options": [
                "The number of additional components that need to be installed with the system.",
                "The average time required for an untrained user to successfully complete the installation process.",
                "The type of hardware used during the installation process.",
                "The number of user profiles that need to be transferred during installation."
            ],
            "answer": 1,
            "explanation": "The average time required for an untrained user to successfully complete the installation process.",
            "keywords": "Q: defining installability requirements, which of the following factors | A: The average time required for"
        },
        {
            "id": 197,
            "text": "Why is it crucial for a business analyst to communicate requirements effectively and efficiently?",
            "options": [
                "To ensure that requirements are documented only once.",
                "To facilitate ongoing collaboration and ensure the team understands the requirements.",
                "To avoid the need for visual analysis models.",
                "To reduce the number of requirements."
            ],
            "answer": 1,
            "explanation": "To facilitate ongoing collaboration and ensure the team understands the requirements.",
            "keywords": "Q: it crucial for a business analyst to communicate | A: To facilitate ongoing collaboration and"
        },
        {
            "id": 198,
            "text": "Consider the use case diagram for the Chemical Tracking System. How does the \"extend\" relationship between \"Request a Chemical\" and \"Search Vendor Catalogs\" affect the system's functionality?",
            "options": [
                "It allows \"Request a Chemical\" to function independently without any alternative flows.",
                "It integrates \"Search Vendor Catalogs\" into the normal flow of \"Request a Chemical.\"",
                "It provides an optional alternative flow for requesting chemicals from a vendor.",
                "It duplicates the steps of \"Search Vendor Catalogs\" within \"Request a Chemical.\""
            ],
            "answer": 2,
            "explanation": "It provides an optional alternative flow for requesting chemicals from a vendor.",
            "keywords": "Q: Consider the use case diagram for the Chemical | A: It provides an optional alternative"
        },
        {
            "id": 199,
            "text": "External quality attributes describe characteristics that are observed when the software is executing. Which following definitions is Integrity?",
            "options": [
                "It deals with blocking unauthorized access to system functions or data, ensuring that the software is protected from malware attacks, and so on.",
                "It is the degree to which a system continues to function properly when confronted with invalid inputs.",
                "It deals with preventing information loss and preserving the correctness of data entered into the system.",
                "It deal with the need to prevent a system from doing any injury to people or damage to property."
            ],
            "answer": 2,
            "explanation": "It deals with preventing information loss and preserving the correctness of data entered into the system.",
            "keywords": "Q: External quality attributes describe characteristics that are observed | A: It deals with preventing information"
        },
        {
            "id": 200,
            "text": "Evaluate the effectiveness of using business process modeling to discover business rules. Which of the following best describes its impact?",
            "options": [
                "It only identifies computational rules and ignores constraints.",
                "It helps identify rules affecting each process step, including constraints and triggering events.",
                "It focuses solely on the analysis of existing documentation.",
                "It is ineffective in discovering business rules related to data states."
            ],
            "answer": 1,
            "explanation": "It helps identify rules affecting each process step, including constraints and triggering events.",
            "keywords": "Q: Evaluate the effectiveness of using business process modeling | A: It helps identify rules affecting"
        },
        {
            "id": 201,
            "text": "In the context of change management on agile projects, how are changes typically managed to maintain alignment with business objectives and priorities?",
            "options": [
                "By freezing the product backlog after each iteration to prevent any changes until the next iteration.",
                "By maintaining a dynamic product backlog where new tasks are prioritized based on business value, and lower-priority tasks can be deferred or removed.",
                "By allowing changes only during a predefined change window, outside of which no changes are permitted.",
                "By escalating all change requests to a higher-level change authority, regardless of their impact on the project."
            ],
            "answer": 1,
            "explanation": "By maintaining a dynamic product backlog where new tasks are prioritized based on business value, and lower-priority tasks can be deferred or removed.",
            "keywords": "Q: In the context of change management on agile | A: By maintaining a dynamic product"
        },
        {
            "id": 202,
            "text": "In the context of a data dictionary, which of the following is true about organizing data elements?",
            "options": [
                "Each data element in the dictionary should be represented only by primitive types.",
                "The data dictionary should only store information about complex data structures, not individual data elements.",
                "The data dictionary should list all data elements alphabetically, regardless of their relationships or grouping in the system.",
                "The data dictionary should contain information about each data element, including its data type, length, and any associated constraints."
            ],
            "answer": 3,
            "explanation": "The data dictionary should contain information about each data element, including its data type, length, and any associated constraints.",
            "keywords": "Q: In the context of a data dictionary, which | A: The data dictionary should contain"
        },
        {
            "id": 203,
            "text": "Propose a solution for a scenario where a product owner is unable to understand all user requirements due to the complexity of the project. Which approach would you recommend?",
            "options": [
                "Replace the product owner with a more knowledgeable individual.",
                "Collaborate with multiple business analysts and product champions to gather comprehensive requirements.",
                "Simplify the project to reduce complexity.",
                "Delegate all decision-making to the development team."
            ],
            "answer": 1,
            "explanation": "Collaborate with multiple business analysts and product champions to gather comprehensive requirements.",
            "keywords": "Q: Propose a solution for a scenario where a | A: Collaborate with multiple business analysts"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swr"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
