const econ = [
      { 
        type="Econometrics Series",
        id="econometrics",
        code="ECON 120A, 120B, 120C",
        description="Probability and statistics used in economics. Probability and sampling theory, statistical inference, and use of spreadsheets. Basic econometric methods, including the linear regression, hypothesis testing, quantifying uncertainty using confidence intervals, and distinguishing correlation from causality. Advanced econometric methods: estimation of linear regression models with endogeneity, economic methods designed for panel data sets, estimation of discrete choice models, time series analysis, and estimation in the presence of autocorrelated and heterskedastic errors."
      },
    { 
        type="Intermediate Microeconomics",
        id="micro",
        code="ECON 100A, 100B, 100C",
        "description":"Economic analysis of household determination of the demand for goods and services, consumption/saving decisions, and the supply of labor. Analysis of firms’ production and costs, the supply of output and demand factors of production. Analysis of perfectly competitive markets. Analysis of the effects of imperfect market structure, strategy, and imperfect information."
      },
     { 
        type="Intermediate Macroeconomics",
        id="macro",
        code="ECON 110A, 110B",
        description="Analysis of the determination of long run growth and models of the determination of output, interest rates, and the price level. Analysis of inflation, unemployment, and monetary and fiscal policy. '\n'Analysis of the determination of consumption spending at the aggregate level; extension of the basic macro model to include exchange rates and international trade; the aggregate money supply, and the business cycle."
      },
      { 
        type="Principles of Microeconomics",
        id="introMicro",
        code="ECON 1",
        description="Introduction to the study of the economic system. Course will introduce the standard economic models used to examine how individuals and firms make decisions in perfectly competitive markets, and how these decisions affect supply and demand in output markets."
      },

      { 
        type="Principles of Macroeconomics",
        id="introMacro",
        code="ECON 3",
        description="Introductory macroeconomics: unemployment, inflation, business cycles, monetary and fiscal policy."
      },
       { 
        type="Decisions under Uncertainty",
        id="uncertainty",
        code="ECON 171",
        description="Decision making when the consequences are uncertain. Decision trees, payoff tables, decision criteria, expected utility theory, risk aversion, sample information."
      },
       { 
        type="Financial Accounting",
        id="financialAccounting",
        code="ECON 4",
        description=""
      },
      { 
        type="Financial Markets",
        id="financialMarkets",
        code="ECON 173A",
        description="Financial market functions, institutions and instruments: stocks, bonds, cash instruments, derivatives (options), etc. Discussion of no-arbitrage arguments, as well as investors’ portfolio decisions and the basic risk-return trade-off established in market equilibrium."
      },
      { 
        type="Operations Research",
        id="oeprationsResearch",
        code="ECON 172A",
        "description":"Linear and integer programming, elements of zero-sum, two-person game theory, and specific combinatorial algorithms."
      }
];

var cse=[
    {
        type="Introduction to Programming (C)",
        id= "CSE5A",
        code="CSE 5A",
        description="Introduction to algorithms and top-down problem solving. Introduction to the C language, including functions, arrays, and standard libraries. Basic skills for using a PC graphical user interface operating system environment. File maintenance utilities are covered."
    },
     {
        type="Intoduction to OOP - Java",
        id= "CSE11",
        code="CSE 11",
        description="An accelerated introduction to computer science and programming using the Java language. Basic UNIX. Modularity and abstraction. Documentation, testing and verification techniques. Basic object-oriented programming, including inheritance and dynamic binding. Exception handling. Event-driven programming. Experience with AWT library or other similar library. "
    },

    {
        type="Basic Data Structures and OOD",
        id= "CSE12",
        code="CSE 12",
        description="Use and implementation of basic data structures including linked lists, stacks, and queues. Use of advanced structures such as binary trees and hash tables. Object-oriented design including interfaces, polymorphism, encapsulation, abstract data types, pre-/post-conditions. Recursion. Uses Java and Java Collections."
    },

    {
        type="Computer Organization and Systems Programming",
        id= "CSE30",
        code="CSE 30",
        description="Introduction to organization of modern digital computers—understanding the various components of a computer and their interrelationships. Study of a specific architecture/machine with emphasis on systems programming in C and Assembly languages in a UNIX environment. "
    },
    {
        type="Advanced Data Structures",
        id= "CSE100",
        code="CSE 100",
        description="High-performance data structures and supporting algorithms. Use and implementation of data structures like (un)balanced trees, graphs, priority queues, and hash tables. Also memory management, pointers, recursion. Theoretical and practical performance analysis, both average case and amortized. Uses C++ and STL."
    },
    {
        type="Software Engineering",
        id= "CSE110",
        code="CSE 110",
        description="Introduction to software development and engineering methods, including specification, design, implementation, testing, and process. An emphasis on team development, agile methods, and use of tools such as IDE's, version control, and test harnesses."
    },
    {
        type="Introduction to Human-Computer Interaction Design",
        id= "CSE170",
        code="CSE 170",
        description="Introduces fundamental methods and principles for designing, implementing, and evaluating user interfaces. Topics: user-centered design, rapid prototyping, experimentation, direct manipulation, cognitive principles, visual design, social software, software tools. Learn by doing: Work with a team on a quarter-long design project."
    }
];

var math = [
  {
    type="Calculus for Science and Engineering",
    id= "MATH20AB",
    code="MATH 20A, 20B",
    description="Foundations of differential and integral calculus of one variable. Functions, graphs, continuity, limits, derivative, tangent line. Applications with algebraic, exponential, logarithmic, and trigonometric functions. Integral calculus of one variable and its applications, with exponential, logarithmic, hyperbolic, and trigonometric functions. Methods of integration. Infinite series. Polar coordinates in the plane and complex exponentials."
  },
   {
    type="Calculus and Analytic Geometry for Science and Engineering",
    id= "MATH20C",
    code="MATH 20C",
    description="Vector geometry, vector functions and their derivatives. Partial differentiation. Maxima and minima. Double integration."
  },
  {
    type="Linear Algebra",
    id= "MATH20F",
    code="MATH 20F",
    description="Matrix algebra, Gaussian elimination, determinants. Linear and affine subspaces, bases of Euclidean spaces. Eigenvalues and eigenvectors, quadratic forms, orthogonal matrices, diagonalization of symmetric matrices. Applications. Computing symbolic and graphical solutions using Matlab."
  },
   {
    type="Intro to Discrete Mathematics",
    id= "MATH15A",
    code="MATH 15A",
    description="Basic discrete mathematical structure: sets, relations, functions, sequences, equivalence relations, partial orders, and number systems. Methods of reasoning and proofs: propositional logic, predicate logic, induction, recursion, and pigeonhole principle. Infinite sets and diagonalization. Basic counting techniques; permutation and combinations. Applications will be given to digital logic design, elementary number theory, design of programs, and proofs of program correctness."
   }
];

var chinese=[
  {
    type="First Year Chinese - Non-Native Series",
    id= "CHINN",
    code="CHIN 10AN, 10BN, 10CN",
    description="Introductory course of basic Chinese for students with no background in Chinese. Curriculum for entry-level Chinese in communicative skills. Covers pronunciation, fundamentals of Chinese grammar, and vocabulary. Topics include greetings, family affairs, numbers, and daily exchanges. Also covers pronunciation, more elaborate grammar, and vocabulary. Focus on goal-oriented tasks: school life, shopping, and transportation.Continuation course of basic Chinese for students with no background in Chinese. Expansion on pronunciation and more elaborate Chinese grammar and increasing vocabulary. Topics include dining, direction, and social life."
  },
  {
    type="First Year Chinese - Non-Native Series",
    id= "CHINN",
    code="CHIN 10AN, 10BN, 10CN",
    description="Introductory course of basic Chinese for students with no background in Chinese. Curriculum for entry-level Chinese in communicative skills. Covers pronunciation, fundamentals of Chinese grammar, and vocabulary. Topics include greetings, family affairs, numbers, and daily exchanges. Also covers pronunciation, more elaborate grammar, and vocabulary. Focus on goal-oriented tasks: school life, shopping, and transportation.Continuation course of basic Chinese for students with no background in Chinese. Expansion on pronunciation and more elaborate Chinese grammar and increasing vocabulary. Topics include dining, direction, and social life."
  }
];

 var experience =[
      {
        what="HR Organizer at Best Day Foundation",
        time="June 2017 - Present",
        mainTask="Develop and expand the volunteer network for the Southern California Chapter of the Best Day Foundation",
        subTask="Plan and communicate with the Best Day team to maximize the efficiency and success of each event",
        link="https://bestdayfoundation.org/locations/san-diego-county-ca/"
    },

    {
        what="Triton Athletics Council Representative",
        time="2016-Present",
        mainTask="Communicates and coordinates between council representative",
        subTask="Resulted in successful engagement and improvement in UCSD Athletic's community outreach and networking ",
        link="http://www.ucsdtritons.com/ViewArticle.dbml?ATCLID=187355"
    },

    {
        what="UCSD Men's Golf",
        time="2014-Present",
        mainTask="Dedicated team leader and team captain working with coaches and teammates",
        subTask="Resulted in a motivating, successful environment and improved team culture",
        link="http://www.ucsdtritons.com/ViewArticle.dbml?DB_OEM_ID=5800&ATCLID=209714542"
    },

    {
        what="Intern at Wilshire Quinn Capital - San Diego",
        time="Summer 2016",
        mainTask="Involved with daily operation of the income fund",
        subTask="Trust deed investing, private money lending, property management, investing, risk minimization strategies, investor relations and communications",
        link="http://www.wilshirequinn.com/"
    },

    {
        what="Designer and Web-App Developer",
        time="2017",
        mainTask="Coordinated, planned, and exectued the design process, front and back end implementations of the web app",
        subTask="Successful and appealing product that met and exceeded all requirements",
        link="https://favor4favour.herokuapp.com/"
    },

     {
        what="Volunteer at Best Day Foundation",
        time="June 2016",
        mainTask="Engaged with and supported children with special needs",
        subTask="Helped the children surf and have fun at the beach and in the water",
        link="https://bestdayfoundation.org/locations/san-diego-county-ca/"
    },
    {
        what="Volunteer at Willing Hearts (NGO) - Singapore",
        time="March 2013",
        mainTask="Helped with daily operations",
        subTask="Food preparation, food delivery around Singapore",
        link="http://www.willinghearts.org.sg/"
    },

    {
        what="Prague Model United Nations (MUN) - Chair",
        time="April 2011",
        mainTask="Organizer and co-chair for a 150 person conference.",
        subTask="Conference lasted three days and required strong communication and leadership skills",
        link=""
    }
];
  
   var skills =[
        {name="Fluent in English, Polish and German, presently learning Mandarin"},
        {name="Proficient with Microsoft Office, Spreadsheet Processing, Salesforce"},
        {name="Knowledgeable in Business & Management; property valuation, private money lending, risk-return analysis, risk minimization strategies, trust-deed investing, and customer relations"},
        {name="Proficient in product design process and software development"},
        {name="Passionately hard-working, great listener with a positive attitude"},
        {name="Effective communication and public speaking skills"},
        {name="Confident and motivating leadership"}
    ];

    var techskills =[
        {name="Java"}, 
        {name="HTML"},
        {name="CSS"},
        {name="JavaScript"},
        {name="Node.js"},
        {name="Android"},
        {name="Firebase"},
        {name="Google Play Services"},
        {name="C"},
        {name="ARM (Assembly)"},
        {name="Unix Systems"}
    ];

    var tools=[
        {name="J-Unit - testing"}, 
        {name="Android ADT - app development"}, 
        {name="JIRA - project management"}, 
        {name="GIT - software version control"}
    ];

   var references=[
        {
        name="Jim Ragan",
        position="UCSD Men's Golf Head Coach",
        email="jragan@ucsd.edu",
        phone="858-699 2965"
        },

        {
        name="Matthew Mielke",
        position="Senior Account Manager - Wilsher Quinn",
        email="mmielke@wilshirequinn.com",
        phone="619-872-6000"
        }
    ];

    var awards=[
     {
        title="Academic All-American",
        year="2017",
        link="http://www.ucsdtritons.com/ViewArticle.dbml?DB_OEM_ID=5800&ATCLID=211656897"
    },
    {
        title="CCAA All-Academic Team",
        year="2016-2017",
        link="https://s3.amazonaws.com/sidearm.sites/goccaa.sidearmsports.com/documents/2017/6/24/2017_Spring_All_Academic.pdf"
    },
    {
        title="CCAA All-Academic Team",
        year="2015-2016",
        link="http://www.goccaa.org/documents/2016/6/18//2016_Spring_All_Academic.pdf?id=814"
    },
    {
        title="UCSD Athletic Director's Honor Roll",
        year="2015, 2016, 2017",
        link=""
    },
    {
        title="UCSD Warren College Provost Honor Roll",
        year="Six Times",
        link=""
    },
    {
        title="UCSD Student-Athlete Honoree",
        year="2017",
        link="http://www.ucsdtritons.com/ViewArticle.dbml?DB_OEM_ID=5800&ATCLID=211547891"
    },
     {
        title="OFS Academic Merit Certificate",
        year="2012, 2013, 2014",
        link=""
    },
    {
        title="Principal's Award for Academic Excellence",
        year="2012, 2013, 2014",
        link=""
    },
     {
        title="International Student Award - OFS",
        year="2011, 2012",
        link=""
    },
    {
        title="UK Intermediate Maths Challenge- Bronze Certificate",
        year="2012",
        link=""
    },
     {
        title="Best Delegate Award - Bratislava Model United Nations",
        year="2011",
        link=""
    },
      {
        title="Mission Award to Recognize Individual Exellence - International School of Prague",
        year="2011",
        link=""
    }
    ];
