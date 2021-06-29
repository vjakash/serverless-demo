
exports.handler = async event => {
    console.log('event', event);

    return {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials' : true 
        },
        statusCode: 200,
        body: JSON.stringify(jobs)
    };
};

const jobs={"joblist":[{
    "id":1,
    "role":"Engineer - React Fullstack",
    "logo":"https://media-exp3.licdn.com/dms/image/C4D0BAQGRhsociEn4gQ/company-logo_200_200/0/1523269243842?e=1631145600&v=beta&t=mWysU26-B0atCFY5oCfW3mPccHlgIRPMisN_N3aMhmI",
    "company":"American Express",
    "location":"New York, NY",
    "postedOn":"2021-06-10T06:46:22.461Z",
    "promoted":false,
    "totalApplicants":28,
    "SeniorityLevel":"Entry Level",
    "employmentType":"Full Time",
    "industry":"Internet",
    "jobFunctions":["Engineering","Information Technology","Development"],
    "views":14,
    "postedBy":{
        "name":"Ryan Wen",
        "role":"Chief Of Staff at Outlier",
        "profilePic":"https://media-exp3.licdn.com/dms/image/C4E03AQHbtCKqC_Ef4g/profile-displayphoto-shrink_100_100/0/1576875226509?e=1628726400&v=beta&t=bZ0WeBpqBmzlSMjoHHd1nt4TZzSVFsqOlY_iDMFn_5I"
    },
    "companyDetails":{
        "noOfEmployees":"100-200",
        "sector":"Consumer Services",
        "totalLinkedinMember":174,
        "totalFollowers":1235,
        "totalConnection":0,
        "following":false
    },
    "description":"<p>The ideal candidate will be responsible for designing, developing, testing, and debugging responsive mobile applications for the company. This candidate will be able to translate user and business needs into functional frontend design, with proficiency in React and React Native.&nbsp;</p><p>&nbsp;</p><p><strong> Responsibilities </strong></p><ul><li>Designing, developing, and testing UI for mobile applications</li><li>Build reusable code and libraries for future use</li><li>Accurately translate user and business needs into functional frontend code</li></ul><p>&nbsp;</p><p><strong> Qualifications </strong></p><ul><li>Bachelor's degree or equivalent in Computer Science</li><li>2+ years' experience in frontend development</li><li>Familiarity using Scrum/Agile development methodologies</li><li>Experience building applications using React and React Native</li></ul><p>&nbsp;</p><p>Please provide a portfolio of prior work, if available.</p>"
},
{
      "id":2,
      "role":"Data Engineer",
      "logo":"https://media-exp3.licdn.com/dms/image/C4D0BAQGRhsociEn4gQ/company-logo_200_200/0/1523269243842?e=1631145600&v=beta&t=mWysU26-B0atCFY5oCfW3mPccHlgIRPMisN_N3aMhmI",
      "company":"Condé Nast India",
      "location":"Chennai, Tamil Nadu",
      "postedOn":"2021-06-10T06:46:22.461Z",
      "promoted":true,
      "totalApplicants":12,
      "SeniorityLevel":"Mid-Senior level",
      "employmentType":"Full Time",
      "industry":"Internet",
      "jobFunctions":["Engineering","Business","Publishing"],
      "views":30,
      "postedBy":{
          "name":"Akash Kumar",
          "role":"HR Recruiter",
          "profilePic":"https://media-exp3.licdn.com/dms/image/C4D03AQF8b-HnHCDx_Q/profile-displayphoto-shrink_200_200/0/1517430075839?e=1628726400&v=beta&t=DHyFqjxukpmnck9kOPJBctBv6N2HvuBbBpMyzVvkSuI"
      },
      "companyDetails":{
          "noOfEmployees":"200-500",
          "sector":"Publishing",
          "totalLinkedinMember":300,
          "totalFollowers":1786,
          "totalConnection":3,
          "following":false
      },
      "description":"<p>We CondeNast are seeking Data Engineers who will support a range of initiatives across various technical and business areas within Cond&eacute; Nast. If you are looking for a challenging environment and to work with a world class team of data engineers in a well balanced environment and seasoned company</p><p><strong>Primary Responsibilities:</strong></p><p>● Build, test, scale and maintain highly reliable data pipelines from a variety of batch data sources and real-time streams (Internal, third party, etc.), to understanding customer journeys across the landscape of our business&nbsp;</p><p>● Build and maintain data infrastructure, frameworks and platforms&nbsp;</p><p>● Serve as a core member of the data engineering team and be proficient in assisting the business with understanding data attributes&nbsp;</p><p>● Design and present recommendations to guide future business and research directions&nbsp;</p><p>● Build and maintain highly validated data-marts with ensured clarity and correctness of key business metrics for BI reporting purposes&nbsp;</p><p>● Collaborate with other Data Engineers, Data Scientists, and BI Engineers to architect and implement a shared technical vision.&nbsp;</p><p>● Follow agile processes with a focus on delivering production-ready, testable deliverables in an iterable fashion.</p><p>● Participate in the entire software development lifecycle, from concept to release&nbsp;</p><p><strong>Desired Skills &amp; Qualification:</strong></p><p>● BS, MS, Ph.D., or equivalent industry experience in Computer Science, Software Engineering, or other related Science/Technology/Engineering/Math fields.&nbsp;</p><p>● At least 5+ years of relevant experience in software development&nbsp;</p><p>● 3+ years experience of near Real Time (Streaming) or Batch Data Pipeline development in a large scale organization&nbsp;</p><p>● Experience in writing reusable/efficient code to automate analysis and data processes&nbsp;</p><p>● Experience successfully working on an independent project with very minimal supervision&nbsp;</p><p>● Having a deep understanding of data integration and data architecture&nbsp;</p><p>● Experience in processing structured and unstructured data into a form suitable for analysis and reporting with integration with a variety of data metric providers ranging from web analytics, consumer analytics, and advertising&nbsp;</p><p>● Experience implementing scalable, distributed, and highly available systems using AWS services such Kinesis, DynamoDB, S3&nbsp;</p><p>● Proficiency in BigData technologies Python/PySpark, Scala or Java</p><p>● Proficiency in SQL&nbsp;</p><p>● Experience with either of the following technologies (Databricks/Spark, AWS ecosystem, Hadoop, Hive.)&nbsp;</p><p>● Experience with any orchestration tools such as Airflow, Oozie etc.</p><p>● Comfortable with CI/CD Pipelines&nbsp;</p><p>● Experience with Git version control, and other software adjacent tools</p><p>● Exceptional analytical, problem solving skills.&nbsp;</p><p>● Exceptional communication skills, particularly in communicating and visualizing quantitative findings in a compelling and actionable manner for business stakeholders&nbsp;</p>"
  },
  {
        "id":3,
        "role":"Microsoft Modern Data Platform Application Developer",
        "logo":"https://media-exp3.licdn.com/dms/image/C4D0BAQG_oY7LkqBPBA/company-logo_100_100/0/1622604168326?e=1631750400&v=beta&t=cm1eZ3trM13dxpeLo5hPFjpmSxuUFsCMcd18yjXg5Rw",
        "company":"Accenture in India",
        "location":"Chennai, Tamil Nadu",
        "postedOn":"2021-06-10T06:46:22.461Z",
        "promoted":false,
        "totalApplicants":40,
        "SeniorityLevel":"Entry level",
        "employmentType":"Full Time",
        "industry":"Data",
        "jobFunctions":["Engineering","Internet","Information Technology & Solutions"],
        "views":25,
        "postedBy":{
            "name":"Yuvraj C",
            "role":"Manager - DevOps",
            "profilePic":"https://media-exp3.licdn.com/dms/image/C4D03AQGw42quqojZqg/profile-displayphoto-shrink_200_200/0/1516588376380?e=1628726400&v=beta&t=WaJK7mb0OB7fx5Io6DUDK9LkSVgN13o3ysSTcz0dyg0"
        },
        "companyDetails":{
            "noOfEmployees":"10000",
            "sector":"Information Technology",
            "totalLinkedinMember":5000,
            "totalFollowers":1346,
            "totalConnection":8,
            "following":true
        },
        "description":"<p><strong>About Accenture:&nbsp;</strong>Accenture is a global professional services company with leading capabilities in digital, cloud and security. Combining unmatched experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Interactive, Technology and Operations services-all powered by the world's largest network of Advanced Technology and Intelligent Operations centers. Our 514,000 people deliver on the promise of technology and human ingenuity every day, serving clients in more than 120 countries. We embrace the power of change to create value and shared success for our clients, people, shareholders, partners and communities. Visit us at www.accenture.com Accenture | Let there be change We embrace change to create 360-degree value www.accenture.com<br /><br /></p><ul><li>Project Role :Application Developer<br /><br /></li><li>Project Role Description :Design, build and configure applications to meet business process and application requirements.<br /><br /></li><li>Management Level :11<br /><br /></li><li>Work Experience :2.5-4 years<br /><br /></li><li>Work location :Chennai<br /><br /></li><li>Must Have Skills :Microsoft Modern Data Platform<br /><br /></li><li>Good To Have Skills :No Technology Specialization<br /><br /></li><li>Job Requirements :<br /><br /></li><li>Key Responsibilities : A: Requirement understanding and strong Analysis skill B: Handle cloud technologies Azure,AWS projects C: End to End responsible for Azure PAAS includind ADF, ADB and JSON confgurations D: Development, debugging and integration activities using DataBricks,PYSPARK,Azure Data Factory E: Provide support in SQL and ETL and development activities F: Complete SDLC processes handling G: Able to create data flow and should have strong analytical skill<br /><br /></li><li>Technical Experience : A: Resource should have experience in Azure Data Factory ,Azure DataBricks B: Resource should 5 years of IT development experience and 2 years of exposure in Azure development C: Resource should have strong ETL knowledge D: Exposure and experience in cloud technologies Azure, AWS E: Hands on Exposure in Azure PAAS , DataBricks , PYSPARK , Azure data Factory F: handling of Json config and integration between notebook and ADF<br /><br /></li><li>Professional Attributes : Should have good communication skills - verbal and written<br /><br /></li></ul><p>15 years of full time education</p><p>&nbsp;</p>"
    },
    {
          "id":4,
          "role":"MTS 2 Data Engineer",
          "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQGgcRYcsEA95g/company-logo_100_100/0/1593617920398?e=1631750400&v=beta&t=tInPCRTto7QlK7wK6vZukUnVzQ8cSxG3qOTmvli48C8",
          "company":"PayPal",
          "location":"Bengaluru, Karnataka",
          "postedOn":"2021-06-10T06:46:22.461Z",
          "promoted":false,
          "totalApplicants":60,
          "SeniorityLevel":"Entry level",
          "employmentType":"Full Time",
          "industry":"Banking",
          "jobFunctions":["Engineering","Banking","Information Technology & Solutions"],
          "views":100,
          "postedBy":{
              "name":"Remo Antony Raymond",
              "role":"Product Manager",
              "profilePic":"https://media-exp3.licdn.com/dms/image/C5103AQF9w8sNM3iOcQ/profile-displayphoto-shrink_400_400/0/1549103801705?e=1628726400&v=beta&t=IN5VsyaPVY6cTxxAJf54CYLjQzknPabWNtG2pl8oXJg"
          },
          "companyDetails":{
              "noOfEmployees":"10000",
              "sector":"Banking",
              "totalLinkedinMember":1211,
              "totalFollowers":640,
              "totalConnection":0,
              "following":false
          },
          "description":"<p><strong>Job Description Summary:<br /></strong>The MTS 1 &ndash; Data Engineer will directly report to and support Sr. Manger of Finance Technologies in the development and execution of strategic transformation programs &amp; initiatives, strategic engineering architecture design, resource allocation, and platform performance monitoring. Ideal candidate is a technologist who believes that use of technology is in its infancy and the best is yet to come. The Regulatory Reporting Hadoop product owner (Business System Analyst) will be part of the Global Regulatory Reporting, and Merger &amp; Acquisition Integration support. The nature of role is strategic, analytical and highly collaborative, working with team members across World and also as a liaison for Global projects.<br /><br /><strong>Job Description:<br /></strong></p><ul><li>Lead, develop, and grow a high performance, multi-function team of talented and passionate professionals, who are results driven to take the business forward and demonstrate superior leadership in line with the PayPal values.</li><li>Undergraduate/ Master degree in Computer Engineering or equivalent from a leading university.</li><li>11+ years of post-college working experience as a Business System Analyst and leading large scale projects end to end.</li><li>Minimum 4+ years&rsquo; experience working with large data sets, experience working with distributed computing a plus (Map/Reduce, Hadoop, Hive, Spark, etc.)</li><li>Experience in Data Analysis, Data Validation.</li><li>Strong knowledge in writing complex queries for validation of ETL process.</li><li>Preferred/Basic understanding of Payments/Finance/Accounting Industry Background.</li><li>Must have demonstrably strong interpersonal and communication skills (both written and verbal), to include speaking clearly and persuasively in positive or negative situations.</li><li>Experience with databases, systems integration, application development and reporting.</li><li>Works independently and able to make decisions quickly when necessary.</li><li>Quick Learner with an ability to ramp up in technologies and modules to meet business needs.</li><li>Works in an Agile environment and continuously reviews the business needs, refines priorities, outlines milestones and deliverables, and identifies opportunities and risks.</li><li>Maintain, track and collaborate with dev teams to ensure project estimation for delivery.</li><li>Experience using JIRA and Confluence, or similar User Story workflow and management tool is a must.</li><li>Highlight the bugs and blockers and coordinate with the development and operations team to come up with the best solutions/fixes and document them.</li><li>Work across internal team in various geo-locations across the world</li><li>&ldquo;Drive For Results&rdquo; - Can be counted on to exceed goals successfully; is constantly and consistently one of the top performers; very bottom-line oriented; steadfastly pushes self and others for results.</li><li>&ldquo;Priority Setting&rdquo; - Spends his/her time and the time of others on what&rsquo;s important; quickly zeros in on the critical few and puts the trivial many aside; can quickly sense what will help or hinder accomplishing a goal; eliminates roadblocks; creates focus.</li><li>Weekly and Monthly status reporting to leadership.</li></ul>"
      },
      {
            "id":5,
            "role":"Senior Consultant - Data Engineer",
            "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQGNOjiwyqZVJw/company-logo_100_100/0/1519855878148?e=1631750400&v=beta&t=0WRmYXH6F6x5kWmcaBq0ZI8DeR5Sr6tBS3P-FDVE9Ik",
            "company":"AstraZeneca",
            "location":"Chennai, Tamil Nadu, India",
            "postedOn":"2021-06-10T06:46:22.461Z",
            "promoted":false,
            "totalApplicants":4,
            "SeniorityLevel":"Associate",
            "employmentType":"Full Time",
            "industry":"Pharmaceuticals",
            "jobFunctions":["Pharmaceuticals","Information Technology & Solutions"],
            "views":18,
            "postedBy":{
                "name":"Thangavelu Krishnasamy",
                "role":"Co-create value with stakeholders through IT products and services",
                "profilePic":"https://media-exp3.licdn.com/dms/image/C5603AQGlRz3-DxDh9g/profile-displayphoto-shrink_400_400/0/1606077823810?e=1628726400&v=beta&t=jvxq3WP3a5Tp5c6jYnU4fxn_S_7XiUqzqKirlyO5ZRk"
            },
            "companyDetails":{
                "noOfEmployees":"2000-3000",
                "sector":"Information Technology",
                "totalLinkedinMember":654,
                "totalFollowers":120,
                "totalConnection":0,
                "following":false
            },
            "description":"<p>Designation -&nbsp;<strong>Senior Consultant - Data Engineer</strong></p><p>&nbsp;</p><p><strong>Job Summary</strong></p><p><strong>Exp : 6 to 8yrs</strong></p><p><strong>Location - Chennai.</strong></p><p>&nbsp;</p><p><strong>Key Accountabilities</strong></p><p>&nbsp;</p><ul><li>Part of a DevOps team implementing and supporting ETL workflows. Data sources will be: structured, semi-structured and unstructured.</li><li>Working with suppliers, data scientists, machine learning engineers, and platform teams to acquire and process data.</li><li>Analyzing data requirements, source data, model the source, and determine the best methods in extracting, transforming and loading the data into the data lake and processing the data through the layers of the lake.</li><li>Providing technical input around design, architecture, integration and support of the entire data sourcing platform with a focus on high availability, performance, scalability and maintainability.</li><li>Act as the ETL technical liaison working with technical infrastructure teams to resolve problems and implement solutions to technical issues impacting application performance</li><li>Managing data administration tasks such as scheduling jobs, troubleshooting job errors, identifying issues with job windows, assisting with backups, rollback and performance tuning.</li><li>Test, document and quality assess new data solutions, to ensure they are fit for release.</li><li>Communicate and coordinate with members of the development team to work across multiple projects. Explore, actively support and work on new technology initiatives that may be of interest to the organization.</li><li>Manage automation of all ETL processes within a job workflow</li><li>Documentation of data engineering workflows to support downstream use</li><li>Testing of data in analytics applications, to ensure data validity and reconciliation to source systems</li><li>Development of subject matter expertise in sub-domains of the Science &amp; Enabling Unit portfolio &ndash; understanding of the business process, data flows, data provenance, data restrictions and data use.</li></ul>"
        },
        {
              "id":6,
              "role":"Data Engineer III",
              "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQF5O6a4Cblj0g/company-logo_100_100/0/1622704922540?e=1631750400&v=beta&t=S0xHOfXg4Qire3D4wCpIGR1W-O7OXYl7Nc96Hl7EhDw",
              "company":"Walmart Global Tech India",
              "location":"Mumbai, Maharashtra",
              "postedOn":"2021-06-10T06:46:22.461Z",
              "promoted":false,
              "totalApplicants":5,
              "SeniorityLevel":"Senior level",
              "employmentType":"Full Time",
              "industry":"Banking",
              "jobFunctions":["Engineering","Retail","Information Technology & Solutions"],
              "views":90,
              "postedBy":{
                  "name":"Rohit Sharma",
                  "role":"Process Lead I | Retail Operations at Walmart Global Tech India",
                  "profilePic":"https://media-exp3.licdn.com/dms/image/C5603AQHYFXGXjXCGmQ/profile-displayphoto-shrink_400_400/0/1617340039225?e=1628726400&v=beta&t=AVizkRAz61UGDfvC8eZQUCpQU2iN7Yl8SUXkinX-fac"
              },
              "companyDetails":{
                  "noOfEmployees":"1000-2500",
                  "sector":"Retail",
                  "totalLinkedinMember":430,
                  "totalFollowers":180,
                  "totalConnection":2,
                  "following":false
              },
              "description":"<p><strong>Your Opportunity<br /><br /></strong>As a part of Merchandise team which works for multiple Walmart markets you will have a significant impact on Walmart&rsquo;s business. You will play a crucial role in optimising the Merchandising processes and ensure efficient utilisation.<br /><br />You will design and build APIs and data pipelines to analyse huge datasets, create powerful visualisations to derive insights and partner with the product team to brain storm and act on these opportunities. You will build and maintain infrastructure and platform to derive maximise data driven impact. You must be able to accurately prioritise projects, make sound judgments, work to improve the processes, and get the right things done.<br /><br /><strong><u>Responsibilities<br /><br /></u></strong>As a Data Engineer III you will own and build scalable and highly available distributed systems in production and will have following responsibilities</p><ul><ul><li>Develop APIs and services for enabling data for dependent systems and applications</li><li>Develop and implement best-in-class Data pipelines to ensure on time availability of Data and Insights.</li><li>Enable data scientists, business and product partners to fully leverage our platform.</li><li>Demonstrate and transform business requirements to code, specific analytical reports and tools.</li><li>Design, build, test and deploy cutting edge solutions at scale, impacting multi-billion-dollar business.</li><li>Work closely with product owner and technical lead and play a major role in the overall delivery of the assigned project/enhancements.</li><li>Learn &amp; Research on the go and work on both new requests/projects as well as support production.</li><li>Provide business insights while leveraging internal tools and systems, databases and industry data.</li><li>Own a data subject and ensure availability and accuracy</li><li>Document requirements, data lineage, subject matter in both business and technical terminology.</li></ul></ul><p>&nbsp;</p><p><strong><u>Your Qualifications<br /></u></strong></p><ul><ul><li>Bachelor&rsquo;s degree in computer science or related discipline with 4+ years&rsquo; experience</li><li>Minimum 3 years of experience in Big Data and distributed computing.</li><li>Minimum 2 years of experience programming in Java, Javascript, Springboot &amp; Nodejs,</li><li>Proven experience building pipelines on Big Data Technologies/Stack &ndash; Hadoop, Spark, Hive, Presto, Kafka, Atomic Scheduler and MapReduce to name a few.</li><li>Deep understanding of the Hadoop ecosystem and strong conceptual knowledge in Hadoop architecture components and experience in working on at least one Big Data technology with Java, Python or Scala.</li><li>Strong knowledge of deploying and managing applications in Azure or GCP.</li><li>Strong scripting skills to process large amount of data and highly proficient in SQL.</li></ul></ul><p>&nbsp;</p><p><strong><u>Preferred Qualifications<br /></u></strong></p><ul><li>Solid knowledge of Linux systems with the ability to troubleshoot issues in complex, distributed, multi-tier architectures.</li><li>Experience in secure, scalable and highly available services.</li><li>Experience with data science and machine learning is a plus.</li><li>Build the infrastructure required for optimal extraction, transformation, and loading of data from a wide variety of data sources using SQL and GCP &lsquo;big data&rsquo; technologies.</li><li>Excellent hands-on working knowledge and experience with object-oriented/object function scripting languages: Python, Java, C++, Scala, and development of Micro-services.</li><li>Good written and verbal communication skills.</li></ul>"
          },
          {
                "id":7,
                "role":"Software Engineer",
                "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQGgcRYcsEA95g/company-logo_100_100/0/1593617920398?e=1631750400&v=beta&t=tInPCRTto7QlK7wK6vZukUnVzQ8cSxG3qOTmvli48C8",
                "company":"DEME Group",
                "location":"Mumbai, Maharashtra, India",
                "postedOn":"2021-06-10T06:46:22.461Z",
                "promoted":false,
                "totalApplicants":25,
                "SeniorityLevel":"Senior Level",
                "employmentType":"Full Time",
                "industry":"Software",
                "jobFunctions":["Engineering","Software","Information Technology & Solutions"],
                "views":100,
                "postedBy":{
                    "name":"Arumainathan Suganya",
                    "role":"Assistant Manager Human Resources at DEME Group",
                    "profilePic":"https://media-exp3.licdn.com/dms/image/C5603AQHBR_YAeYmeSw/profile-displayphoto-shrink_100_100/0/1588903523579?e=1628726400&v=beta&t=MgxSHR0LydnJ-ZJ18eupSAcVeXam0gUxIqsy6OwNxAQ"
                },
                "companyDetails":{
                    "noOfEmployees":"5000-10000",
                    "sector":"Software",
                    "totalLinkedinMember":680,
                    "totalFollowers":70,
                    "totalConnection":1,
                    "following":true
                },
                "description":"<p><strong><em>DEME</em></strong><em>&nbsp;is a world leader in the highly specialised fields of dredging, solutions for the offshore energy market, infra marine and environmental works. With more than 140 years of experience and 5,200 highly skilled professionals, we bring tailor-made solutions, innovation and new technologies to our customers&rsquo; projects, ensuring that they are performed safely, efficiently and cost-effectively.</em></p><p><em>&nbsp;</em></p><p><em>International Seaport Dredging Private Limited (ISD) is a part of DEME group with international standards headquartered in Belgium.</em><strong><em>&nbsp;DEME-ISD&nbsp;</em></strong><em>Creating land for future ... International Seaport Dredging wants to carry out its activities in a sustainable way in accordance with the social, economic.</em></p><p>&nbsp;</p><p><strong><u>Required Skills :</u></strong></p><ul><li>Design and setup data platforms for data science</li><li>Designing and setup of the machine learning environment in the Microsoft stack</li><li>Designing and optimizing machine learning models and algorithms.</li><li>Training and retraining of models.</li><li>Design and setup model execution environments</li><li>Process Automation</li><li>Monitoring of the environment (Storage, compute) and optimize designs.</li><li>Develop documentation for data engineers and data scientists</li><li>Knowledge of MS azure data stack</li><li>SQL, ADLS, AAS, Power BI, Synapse, etc. &hellip;</li><li>&nbsp;Setup documentation and drive adoption</li><li>Good writing skills for technical documentation</li><li>Good verbal and written skills to aid data teams in ML / AI endeavors</li></ul><p>&nbsp;</p><p><strong>Work Location:</strong>&nbsp;Mumbai (prime location)</p><p><strong>Interview Process:</strong>&nbsp;Teams call and HR Round</p><p>&nbsp;</p><p><strong>Benefits:</strong></p><p>Work timing: 9:00 am - 5:30 pm</p><p>Insurance: Comprehensive insurance plans</p><p>Food: Office Lunch with seasonal fruits and snacks</p><p>Bonuses: Yearly two bonuses - Statutory and performance bonuses</p><p>Exposure to learn cross work culture with onsite resources (Europe)</p>"
            },
            {
                  "id":8,
                  "role":"Data Integration Developer - ETL",
                  "logo":"https://media-exp3.licdn.com/dms/image/C510BAQHDweyLlHrB2g/company-logo_100_100/0/1580821841624?e=1631750400&v=beta&t=CSd9i4WlbntCOw1H6KyrMOTsqf98vdWN0z9xwJ37B7g",
                  "company":"Mad Street Den",
                  "location":"Chennai, Tamil Nadu",
                  "postedOn":"2021-06-10T06:46:22.461Z",
                  "promoted":true,
                  "totalApplicants":7,
                  "SeniorityLevel":"Associate",
                  "employmentType":"Full Time",
                  "industry":"Banking",
                  "jobFunctions":["Engineering","Computer Software","Information Technology & Solutions"],
                  "views":12,
                  "postedBy":{
                      "name":"Advait Garg",
                      "role":"Business Development Associate",
                      "profilePic":"https://media-exp3.licdn.com/dms/image/C5603AQGcIy-qAHRBEg/profile-displayphoto-shrink_400_400/0/1622187412224?e=1628726400&v=beta&t=RLiVe5hDomMEl-EcvJUoL9ZZ6cKChHzHZiwmcfgk7rg"
                  },
                  "companyDetails":{
                      "noOfEmployees":"200-300",
                      "sector":"Computer Software",
                      "totalLinkedinMember":230,
                      "totalFollowers":30,
                      "totalConnection":1,
                      "following":false
                  },
                  "description":"<p>Mad Street Den&reg; is looking for Data natives with a minimum of 2 years of experience who have the ability to work with data in all capacities in the cloud. If playing with large amounts of data, feeding your curiosity, and modeling data for data-intensive applications in the cloud excites you, this role is for you!</p><p>&nbsp;</p><p><strong>Your requirements:</strong></p><ul><li>Design, develop, document, maintain and test ETL solutions</li><li>Work with data from multiple sources, integrate disparate data into a common data model and integrate data into an A.I. platform using efficient ETL processes</li><li>Participate in requirements gathering sessions with business and technical staff to distill technical requirements from business requests</li><li>Partner with clients to fully understand and recommend process improvements to increase efficiency and reliability in ETL development</li><li>Present ETL documentation and designs to internal stakeholders and convey complex information in a clear and concise manner</li><li>Collaborate with Quality Assurance resources to debug ETL development and ensure the timely delivery of products</li><li>Build logging, validation, and test framework for the data pipelines to improve continuous integration and deployments</li></ul><p>&nbsp;</p><p><strong>You must have:</strong></p><ul><li>Strong expertise in SQL and python towards ingesting &amp; working with data&nbsp;</li><li>Strong expertise with libraries like Pandas/Pyspark for data manipulation</li><li>Development experience with a few different OLTP &amp; OLAP database platforms - such as Teradata, AWS Redshift, MySQL, etc.</li><li>Minimum of 2 years experience designing, developing, and testing ETL interfaces aligned with defined requirements</li><li>Experience tuning ETL processes to ensure performance and reliability.</li><li>Experience working with data from different domains is desired</li><li>Exposure to Business Intelligence tools such as Tableau, QlikView, Spotfire is an additional advantage</li><li>Ability to communicate clearly and effectively and manage internal and external stakeholders</li></ul>"
              },
              {
                    "id":9,
                    "role":"AWS Data Engineer",
                    "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQHk68GJ-A95Ng/company-logo_100_100/0/1623232927196?e=1631750400&v=beta&t=qZei99sCe5tyFdztzV3jEnB-D7CTV2mf7kjBB0iZRpA",
                    "company":"Tata Consultancy Services",
                    "location":"Pune, Maharashtra",
                    "postedOn":"2021-06-10T06:46:22.461Z",
                    "promoted":false,
                    "totalApplicants":30,
                    "SeniorityLevel":"Mid-Senior level",
                    "employmentType":"Full Time",
                    "industry":"Banking",
                    "jobFunctions":["Engineering","Amazon","Information Technology & Services"],
                    "views":50,
                    "postedBy":{
                        "name":"Prashaanthini Kumaaravel",
                        "role":"Talent Acquisition Specialist",
                        "profilePic":"https://media-exp3.licdn.com/dms/image/C4D03AQEe4ZlAzNK89A/profile-displayphoto-shrink_100_100/0/1619120191043?e=1628726400&v=beta&t=WvLym8P7HlxhbIf1juPC4pXu33bwypBJm54AHJcFxLk"
                    },
                    "companyDetails":{
                        "noOfEmployees":"100-200",
                        "sector":"Banking",
                        "totalLinkedinMember":801,
                        "totalFollowers":323,
                        "totalConnection":0,
                        "following":false
                    },
                    "description":"<p><strong><em>Location : PAN India</em></strong></p><p><strong><em>Years of experience : 3-8 Years</em></strong></p><p>&nbsp;</p><ul><li>Positive attitude and Teamwork</li><li>AWS Technology stack S3, Redshift, Lambda, EC2 dockers</li><li>AWS lake formation, AWS Athena, AWS cross account access</li><li>DevOps technologies and tools including code pipeline</li><li>JIRA, Enterprise GIT</li><li>Experience working with Teradata at an industry level/Strong SQL skills</li><li>Experience working on data warehouse projects</li><li>Experience in a data warehousing support function</li><li>Excellent communication skills, both written and verbal.</li><li>Sound technical specification writing skills with focus on clear, concise documentation</li></ul>"
                },
                {
                      "id":10,
                      "role":"Middle Data Engineer ",
                      "logo":"https://media-exp3.licdn.com/dms/image/C560BAQH7G4ppO5H97A/company-logo_100_100/0/1557483616368?e=1631750400&v=beta&t=g2JzvwJAU1QkoOPo-kXDavYkOwQUlhO5aCbfpUez2z4",
                      "company":"EPAM Systems",
                      "location":"Noida, NCR",
                      "postedOn":"2021-06-10T06:46:22.461Z",
                      "promoted":true,
                      "totalApplicants":23,
                      "SeniorityLevel":"Senior level",
                      "employmentType":"Full Time",
                      "industry":"Social Media",
                      "jobFunctions":["Engineering","Social Media","Information Technology & Solutions"],
                      "views":12,
                      "postedBy":{
                          "name":"Balanjaneyulu K.",
                          "role":"Recruiter",
                          "profilePic":"https://media-exp3.licdn.com/dms/image/C5103AQFRwFvuRZbI-w/profile-displayphoto-shrink_400_400/0/1576555342948?e=1628726400&v=beta&t=a9kLONsKxM-zdRi7eDswtGRfnIeAAYSWnQS6p75s1bQ"
                      },
                      "companyDetails":{
                          "noOfEmployees":"200",
                          "sector":"Social Media",
                          "totalLinkedinMember":900,
                          "totalFollowers":123,
                          "totalConnection":2,
                          "following":false
                      },
                      "description":"<p>We are currently looking for a&nbsp;<strong>remote Middle Data Engineer&nbsp;</strong>with SQL skills and knowledge of data modeling and ETL processes to join our team.<br /><br />The customer is an American online social media and social networking service.<br /><br /><em>Please note that even though you are applying for this position, you may be offered other projects to join within EPAM Anywhere.<br /><br /></em><em><em>We accept CVs only in English.<br /><br /></em><strong>Responsibilities<br /></strong></em></p><ul><li>Development of ETL pipelines</li><li>Dashboard development (Tableau)</li><li>Ad-hoc analysis (writing complex SQL queries)</li><li>Communication with the customer</li><li>Requirements analysis</li><li>Propose best solutions/approaches</li></ul><p><em><strong>Requirements<br /></strong></em></p><ul><li>2+ years of experience in data engineering</li><li>SQL skills</li><li>Knowledge of data modeling and ETL processes</li><li>Production experience (any ETL tool)</li><li>Python skills (at least Intermediate level)</li><li>Dashboard development experience (any reporting tool)</li></ul><p><em><strong>Nice to have<br /></strong></em></p><ul><li>Hands-on experience and understanding of Software Development Life Cycle (SDLC)</li><li>Spark experience</li><li>Presto query engine production experience</li><li>Tableau desktop/server production experience</li></ul><p><em><strong>Technologies<br /></strong></em></p><ul><li>Big Data: Hadoop/Hive/PrestoDB</li><li>DBs: MySQL, Oracle, Scuba in-memory DB</li><li>VCS: Mercurial FB</li><li>Daiquery</li><li>CDM (DDT) - Central Data Manager, Scheduled Jobs Monitor</li><li>Dataswarm</li><li>DB UI, Ent UI, iData</li><li>Diff</li><li>VS Code</li><li>Bento/Jupyter notebook</li></ul><p><em><strong>We offer<br /></strong></em></p><ul><li>Competitive compensation depending on experience and skills</li><li>Work on enterprise-level projects on a long-term basis</li><li>Full-time remote work</li><li>Unlimited access to learning resources (EPAM training courses, English classes, Internal Library)</li><li>Community of 38,000+ industry's top professionals</li></ul><p><em>This is a remote position and we welcome applications from anywhere in India.<br /></em></p>"
                  },
                  {
                        "id":11,
                        "role":"Cloud Data Engineer _ Subject Matter Expert (SME)",
                        "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQFsq9IqUjLUBQ/company-logo_100_100/0/1613064782996?e=1631750400&v=beta&t=Cr2g3FfhLeJdrgLBPZc90c47MIC6LqZ1l8nvT8kKyH8",
                        "company":"Trimble Inc.",
                        "location":"Chennai, Tamil Nadu",
                        "postedOn":"2021-06-10T06:46:22.461Z",
                        "promoted":false,
                        "totalApplicants":5,
                        "SeniorityLevel":"Entry level",
                        "employmentType":"Full Time",
                        "industry":"Cloud Services",
                        "jobFunctions":["Engineering","Cloud","Information Technology & Solutions"],
                        "views":20,
                        "postedBy":{
                            "name":"Gowsick Subramaniam",
                            "role":".Net Developer",
                            "profilePic":"https://media-exp3.licdn.com/dms/image/C5603AQGIij1uNyjR_Q/profile-displayphoto-shrink_200_200/0/1609945011889?e=1628726400&v=beta&t=TDymRkUbOiiE9LqpNjITinLpCXUvdf4gmB8hCEbG7EU"
                        },
                        "companyDetails":{
                            "noOfEmployees":"7000-8000",
                            "sector":"Cloud Services",
                            "totalLinkedinMember":329,
                            "totalFollowers":12,
                            "totalConnection":0,
                            "following":false
                        },
                        "description":"<p><strong><strong>Skillsets<br /></strong></strong></p><ul><li><strong>Good understanding of operating systems principles, software architectures, software algorithms, software engineering principles, and software engineering tools like Jira and Git.</strong></li><li><strong>Expertise in validating BI + big data solutions to ensure correctness</strong></li><li><strong>Expertise at least one of the RDBMS: MySQL/MSSQL/Oracle,etc</strong></li><li><strong>Working knowledge of AWS, including security principles.</strong></li><li><strong>Exposure to AWS Cost and Usage Reports</strong></li><li><strong>Expertise in ETL tools, preferably AWS Glue and Athena, or Hadoop/Hive/Spark, ElasticSearch.</strong></li><li><strong>Experience with Business Intelligence and Analytics tools, Domo preferred</strong></li><li><strong>Ability to script various data pipeline steps to automate the full solution, preferably in Python</strong></li><li><strong>Good analytical and problem-solving skills, as well as the ability to quickly and independently learn about and apply new technologies.</strong></li><li><strong>Experience being a technical lead on a project, assigning tasks to more junior team members and making sure they are done correctly, on schedule.</strong></li><li><strong>Excellent English communication and interpersonal skills.</strong></li><li><strong>Upbeat, highly motivated and self-starter.<br /><br /></strong></li></ul><p><strong><u>Qualifications &amp; Experience<br /></u></strong></p><ul><li><strong>B.E / B.Tech or M.E / M.Tech / M.S. in Computer Engineering or an equivalent degree with a good JEE / AIEEE / GATE score.</strong></li><li><strong>Minimum 5 years of direct ETL and BI experience</strong></li><li><strong>A good score in any of the national level Olympiads or talent search examinations will be value addition.</strong></li><li><strong>Paper presentation in a national level forum, contribution to open source projects, contribution to standards bodies will be value addition.</strong></li></ul>"
                    },
                    {
                          "id":12,
                          "role":"Data Warehouse Engineer",
                          "logo":"https://media-exp3.licdn.com/dms/image/C560BAQF7B8V-H6hTsw/company-logo_100_100/0/1602093225902?e=1631750400&v=beta&t=qhTsKlhAqR3VmtGSsLz4VAFkbl8lvj_rz1PFLsENLjY",
                          "company":"Dataflo",
                          "location":"Mysuru, Karnataka",
                          "postedOn":"2021-06-10T06:46:22.461Z",
                          "promoted":false,
                          "totalApplicants":3,
                          "SeniorityLevel":"Senior level",
                          "employmentType":"Full Time",
                          "industry":"Big Data",
                          "jobFunctions":["Engineering","Big Data","Information Technology & Solutions"],
                          "views":45,
                          "postedBy":{
                              "name":"R. Jospeh Manfrotto",
                              "role":"Data Scientist",
                              "profilePic":"https://media-exp3.licdn.com/dms/image/C5603AQHVI1FU35XHvw/profile-displayphoto-shrink_200_200/0/1622632505316?e=1628726400&v=beta&t=wDcxjTFrRZuJMYQWeDZv4AUPOX4OITNHBGullGQjbv8"
                          },
                          "companyDetails":{
                              "noOfEmployees":"1-10",
                              "sector":"Big Data",
                              "totalLinkedinMember":125,
                              "totalFollowers":34,
                              "totalConnection":2,
                              "following":true
                          },
                          "description":"<p>Data Warehouse Engineer responsible for the design and development of our data platform</p><p><strong>Impact and Ownership</strong></p><ul><li>Define and build a data architecture that scales across large volumes of Data</li><li>Developing and maintaining datasets</li><li>Improving data quality and efficiency</li><li>Crafting a resilient architecture leveraging modern data warehousing platforms from the ground up (Scale, security &amp; monitoring)</li><li>Develop the ETL/ELT Data pipeline for the Financial data from B2B SaaS applications</li><li>Build reusable and extensible solutions to simplify the future addition of new data sources</li><li>Combine raw information from different sources</li><li>Translate requirements for BI and insights to database design on modern data warehouse platforms</li><li>Establish top-notch data security and monitoring</li><li>Support, mentor and hire your team members</li></ul><strong>Requirements</strong><ul><li>Should have minimum 5 years of relevant experience</li><li>You love data design, building data integration processes, coding with knowledge of programming languages (e.g. Java and Python)</li><li>Hands-on experience with SQL database design</li><li>Technical expertise with data models, data mining, and segmentation techniques</li><li>You are familiar with one of the columnar data stores like Snowflake, Bigquery</li><li>You love testing even a little more... with an outrageously high quality standard</li><li>You have a degree in Computer Science or Computer Engineering</li><li>You have awareness on data compliance, data protection and data security</li><li>You are a self-starter who is never satisfied with the status quo; you are always thinking of how to improve existing processes and you are open to new ideas presented by others</li><li>Excellent analytical and problem-solving skills.</li><li>A knack for independent and group work.</li><li>Capacity to successfully manage a pipeline of duties with minimal supervision.</li><li>Performance tuning experience while managing high volume data</li></ul></div></div></article><footer></footer>"
                      },
                      {
                            "id":13,
                            "role":"Senior Java Spark Developer",
                            "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQH2HKoyS_G1zQ/company-logo_100_100/0/1622650953542?e=1631750400&v=beta&t=m4Z244oR90_DIbjDtjInvP88rMmPWNX_ZVhbBoxuPDM",
                            "company":"Citi",
                            "location":"Thane, Maharashtra",
                            "postedOn":"2021-06-10T06:46:22.461Z",
                            "promoted":true,
                            "totalApplicants":3,
                            "SeniorityLevel":"Entry level",
                            "employmentType":"Full Time",
                            "industry":"Banking",
                            "jobFunctions":["Engineering","Banking","Information Technology & Solutions"],
                            "views":23,
                            "postedBy":{
                                "name":"Drishya Mohan",
                                "role":"Analyst | Vocalist | Master of Ceremonies",
                                "profilePic":"https://media-exp3.licdn.com/dms/image/C5103AQF9w8sNM3iOcQ/profile-displayphoto-shrink_400_400/0/1549103801705?e=1628726400&v=beta&t=IN5VsyaPVY6cTxxAJf54CYLjQzknPabWNtG2pl8oXJg"
                            },
                            "companyDetails":{
                                "noOfEmployees":"2-20",
                                "sector":"Banking",
                                "totalLinkedinMember":567,
                                "totalFollowers":34,
                                "totalConnection":0,
                                "following":false
                            },
                            "description":"<p>Citi, the world leading global bank, has approximately 200 million customer accounts and a presence in more than 160 countries and jurisdictions worldwide. Citi provides consumers, corporations, governments and institutions with a broad range of financial products and services, including consumer banking and credit, corporate and investment banking, securities brokerage, transaction services, and wealth management. Citi enables clients to achieve their strategic financial objectives by providing them with cutting-edge ideas, best-in-class products and solutions, and unparalleled access to capital and liquidity.</p><p>&nbsp;</p><p><strong>Qualifications<br /><br /></strong>:</p><ul><li>Strong Core Java / Scala working experience</li><li>Strong Experience in Big data technologies like Apache Spark, HDFS, Hive, Hbase</li><li>Working experience with Any Hadoop Distribution - Cloudera/Hortonworks</li><li>Comfortable working with large data volumes and be able to demonstrate a firm understanding of logical data structures and analysis techniques</li><li>Experienced with Linux/Unix platform</li><li>Experience in RDMS and No SQL databases</li><li>Experience in Service oriented architecture, and data standards like JSON, Avro, Parquet</li><li>Experience using ALM and CICD tools like Bitbucket, TFS, Jenkins, uDeploy, BMC RLM or related tools in an agile methodology.</li><li>Experience in SCMs like GIT; and tools like JIRA</li><li>Experienced with automated build and test processes</li><li>Able to demonstrate an expertise in identifying and resolving data quality issues &ndash; in data sets at rest and in flight</li><li>Familiar with the financial services industry and/or regulatory environments</li><li>Capable of assisting with the design of solutions and mentoring other developers within the same team</li><li>Demonstrated leadership skills</li><li>Consistently demonstrates clear and concise written and verbal communication</li><li>Ability to work as part of team and independently</li><li>Interpersonal skills to interact with team members and clients</li><li>Prior experience working with remote teams</li><li>Candidate should be willing to work extended hours in order to interact with global partners/teams or as per project demand.</li></ul><p><u><strong>Good to have:<br /></strong></u></p><ul><li>Python</li><li>Kafka or other equivalent messaging services</li><li>Exposure on Public Cloud - GCP/AWS/Azure</li></ul><p><u><strong>Educational Qualification:<br /></strong></u></p><ul><li>Bachelor&rsquo;s degree/University degree or equivalent experience</li><li>Master&rsquo;s degree preferred</li></ul></div></article><footer></footer>"
                        },
                        {
                              "id":14,
                              "role":"Junior SQL/BI Developer",
                              "logo":"https://media-exp3.licdn.com/dms/image/C5603AQF9rpe3QCqnmg/profile-displayphoto-shrink_100_100/0/1517706172056?e=1628726400&v=beta&t=vwplmhZuXJ8rzii3TtdNVUYCtKNKvAJcYTdB9kd6ynI",
                              "company":"NRoot Labs Pvt. Ltd",
                              "location":"Chennai, Tamil Nadu",
                              "postedOn":"2021-06-10T06:46:22.461Z",
                              "promoted":false,
                              "totalApplicants":2,
                              "SeniorityLevel":"Entry level",
                              "employmentType":"Full Time",
                              "industry":"Developer",
                              "jobFunctions":["Engineering","Developer","Information Technology & Solutions"],
                              "views":11,
                              "postedBy":{
                                  "name":"Varun Thatha",
                                  "role":"Co-Founder",
                                  "profilePic":"https://media-exp3.licdn.com/dms/image/C5603AQF9rpe3QCqnmg/profile-displayphoto-shrink_100_100/0/1517706172056?e=1628726400&v=beta&t=vwplmhZuXJ8rzii3TtdNVUYCtKNKvAJcYTdB9kd6ynI"
                              },
                              "companyDetails":{
                                  "noOfEmployees":"3",
                                  "sector":"Developer",
                                  "totalLinkedinMember":21,
                                  "totalFollowers":24,
                                  "totalConnection":0,
                                  "following":false
                              },
                              "description":""
                          },
                          {
                                "id":15,
                                "role":"Senior Consultant - Bioinformatics Data Engineer",
                                "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQGNOjiwyqZVJw/company-logo_100_100/0/1519855878148?e=1631750400&v=beta&t=0WRmYXH6F6x5kWmcaBq0ZI8DeR5Sr6tBS3P-FDVE9Ik",
                                "company":"AstraZeneca",
                                "location":"Indore, Madhya Pradesh",
                                "postedOn":"2021-06-10T06:46:22.461Z",
                                "promoted":false,
                                "totalApplicants":12,
                                "SeniorityLevel":"Entry level",
                                "employmentType":"Full Time",
                                "industry":"Pharmaceuticals",
                                "jobFunctions":["Engineering","Pharmaceuticals","Information Technology & Solutions"],
                                "views":80,
                                "postedBy":{
                                    "name":"Deepak Patra",
                                    "role":"Senior Manager",
                                    "profilePic":"https://media-exp3.licdn.com/dms/image/C5603AQHqHeTR4V-Csg/profile-displayphoto-shrink_100_100/0/1602074776294?e=1628726400&v=beta&t=tVzDfK2dZpLd4Tbbf7KIynXBUlY-x2sQfBJBp7vIDgY"
                                },
                                "companyDetails":{
                                    "noOfEmployees":"3452",
                                    "sector":"Pharmaceuticals",
                                    "totalLinkedinMember":235,
                                    "totalFollowers":11,
                                    "totalConnection":0,
                                    "following":false
                                },
                                "description":"<p><strong><u>What you'll do</u></strong></p><p>You'll perform exploratory data analysis of internal and external datasets. You will write code to automate the extraction, transformation and loading of the data in our knowledge graph. You will be responsible to draft, design and decide on a graph data model for each new data type that we'll include.</p><p>&nbsp;</p><p>You will help evolve the current data model of our knowledge graph to remove inconsistencies and increase its predictive power.</p><p>&nbsp;</p><p><strong><u>What you'll need</u></strong></p><p>&nbsp;</p><p><strong>Essential:</strong></p><ul><li>Independent, collaborative, &amp; product focused</li><li>Deep expertise in computational biology</li><li>Experience with at least one of: CRISPR screening data, NGS data, omics data,</li><li>GWAS/PheWAS data, RWE data, protein/protein interaction data</li><li>Strong coding skills (Python or Scala) and experience in data wrangling</li><li>Strong experience in setting up ETL data flows</li><li>Knowledge of SQL and experience in querying APIs</li><li>Familiar with modern software engineering practices and the use of modern</li><li>Collaborative tools.</li></ul><p>&nbsp;</p><p><strong>Bonus points if you have:</strong></p><ul><li>Experience in building knowledge graphs and integrating ontologies</li><li>Previously developed CI/CD pipelines and leveraged cloud computing</li><li>Knowledge of semantic modelling: RDF(S), OWL, SKOS, SPARQL, SHACL, TTL</li><li>Cheminformatics or high throughput screening knowledge</li><li>Experience in network biology, knowledge graph or related fields</li></ul></div>"
                            },
                            {
                                  "id":16,
                                  "role":"Process Data Engineer",
                                  "logo":"https://media-exp3.licdn.com/dms/image/C4D0BAQGN30g7aSl4NA/company-logo_100_100/0/1519856218579?e=1631750400&v=beta&t=SAM1H8i31biUxKsQhPphm0wZnztY7zdUjYzozvl7YA0",
                                  "company":"Shell",
                                  "location":"Navi Mumbai, Maharashtra",
                                  "postedOn":"2021-06-10T06:46:22.461Z",
                                  "promoted":false,
                                  "totalApplicants":2,
                                  "SeniorityLevel":"Entry level",
                                  "employmentType":"Full Time",
                                  "industry":"Petroleum",
                                  "jobFunctions":["Engineering","Petroleum","Information Technology & Solutions"],
                                  "views":8,
                                  "postedBy":{
                                      "name":"Remo Antony Raymond",
                                      "role":"Product Manager",
                                      "profilePic":"https://media-exp3.licdn.com/dms/image/C5103AQF9w8sNM3iOcQ/profile-displayphoto-shrink_400_400/0/1549103801705?e=1628726400&v=beta&t=IN5VsyaPVY6cTxxAJf54CYLjQzknPabWNtG2pl8oXJg"
                                  },
                                  "companyDetails":{
                                      "noOfEmployees":"400-500",
                                      "sector":"Petroleum",
                                      "totalLinkedinMember":983,
                                      "totalFollowers":128,
                                      "totalConnection":0,
                                      "following":false
                                  },
                                  "description":"<p><strong><u>Education/Experience<br /><br /></u></strong>Electrical/Instrumentation related Engineering Degree with at least 3-5 years of work experience in</p><ul><li>Oil &amp; Gas/Petrochemical Industry - operating assets and/or a varied range of brownfield projects.</li><li>A minimum of 2-3 years&rsquo; experience in Designer or Administrator or both in BENTLEY TOOL</li><li>Electrical design &amp; selection of electrical components, comprehending, creating &amp; updating the drawings viz. P&amp;IDs, Electrical Equipment Schedules, 3D drawings, 2D &amp; 3D drawing &amp; drafting tool- MicroStation/Open Plant P&amp;ID/Open Plant Modeler respectively in design, drafting &amp; engineering firms/ consultancy firms/ plant environments/industry past the professional degree/diploma.</li><li>Ability to apply engineering best practices, codes, and standards to identify issues, recommend improvements, and implement solutions.</li><li>Strong proficiency in 2D &amp; 3D electrical detailing and modelling, drawings &amp; drafting tools viz. BENTLEY Tool are musts for this role.</li><li>Decent proficiency in using PC applications (eg: MS Office, Internet, Email).</li></ul><p>Strong proficiency in English both oral and written.<br /><br />Highly preferred work experience in Oil and Gas/Power and other related industries.<br /><br /><strong><u>Behavioral Competences<br /></u></strong></p><ul><li>Excellent communication skills and quick learner. Be a good team player. Ability to prioritize and ensure delivery of priorities for the area of responsibility. Flexible and adaptable to change, with track record of demonstrating initiative, analytical capabilities and problem solving.</li><li>Ability to apply engineering best practices, codes, and standards to identify issues, recommend improvements, and implement solutions.</li><li>Excellent stakeholder management with business interface exposure</li><li>Strong interpersonal leadership skills are critical due to the requirement for effective communication of complex issues across multiple offices and teams.</li></ul></div></div></article><footer></footer>"
                              },
                              {
                                    "id":17,
                                    "role":"Networking Software Engineer",
                                    "logo":"https://media-exp3.licdn.com/dms/image/C560BAQHRlv1Ln2fMmA/company-logo_100_100/0/1622520786220?e=1631750400&v=beta&t=qvtQm3ftil_YhhN4O1E8xZX1Lm-O-3HaHGwIbT1MW3U",
                                    "company":"Cisco",
                                    "location":"Bengaluru, Karnataka",
                                    "postedOn":"2021-06-10T06:46:22.461Z",
                                    "promoted":false,
                                    "totalApplicants":2,
                                    "SeniorityLevel":"Entry level",
                                    "employmentType":"Full Time",
                                    "industry":"Software",
                                    "jobFunctions":["Engineering","Networking","Information Technology & Solutions"],
                                    "views":6,
                                    "postedBy":{
                                        "name":"Muhammed S",
                                        "role":"Software Engineer",
                                        "profilePic":"https://media-exp3.licdn.com/dms/image/C4E03AQHGC7zqalm2gA/profile-displayphoto-shrink_400_400/0/1614972303416?e=1628726400&v=beta&t=xApK6X0-zXv3yOqCo8ux3hB4ojds1jOzRyeNqxAzlcM"
                                    },
                                    "companyDetails":{
                                        "noOfEmployees":"60-90",
                                        "sector":"Software",
                                        "totalLinkedinMember":560,
                                        "totalFollowers":520,
                                        "totalConnection":0,
                                        "following":false
                                    },
                                    "description":"<p><strong><strong><u>Who You Are<br /><br /><br /></u></strong></strong></p><ul><li>We require creative and hardworking engineers with experience in developing high-quality networking products on schedule, with good communication and collaboration skills, and a passion for innovation. In this role, you will be responsible for designing and implementing new features, as well as maintaining existing features and areas.</li><li>Good experience in developing s/w in C, under multi-threaded environment.</li><li>Excellent problem solving skills</li><li>Sound fundamentals in Data Structures, Operating Systems and Data Networking fundamentals</li><li>Strong Layer 2/Layer 3 expertise</li><li>Hands on experience in TCP/IP and sockets programming.</li><li>Exposure to Enterprise technologies is added advantage.</li><li>Exposure to development of large/complex network devices including routing&amp; switching systems.</li><li>Good hands on implementation experience with one or more of the following</li><li>RTOS Internals, High Availability, IPC, Memory management, Distributed communications Infrastructure</li><li>Ability to build and work on Solutions Independently.</li><li>Demonstrable ability to work with technical interfaces in multi-location, across business units.</li><li>Possess outstanding written and verbal communication skills. Must utilize these skills to communicate effectively across all groups in the organization.</li><li>Willing to work with and excel in teams spanning geographies and physical boundaries</li><li>Quick learner who is self-driven and has a passion to excel</li></ul><p><strong><u>Preferred Experience And Education<br /><br /></u></strong>Typically requires BSEE/CS or MS/CS or equivalent with 3+ years relevant experience in internetworking technologies and applications.<br /><br /><strong><br /><strong>Why Cisco<br /><br /></strong></strong></p><ul><li>At Cisco, each person brings their unique talents to work as a team and make a difference.</li><li>Yes, our technology changes the way the world works, lives, plays and learns, but our edge comes from our people.</li><li>We connect everything &ndash; people, process, data and things &ndash; and we use those connections to change our world for the better.</li><li>We innovate everywhere - From launching a new era of networking that adapts, learns and protects, to building Cisco Services that accelerate businesses and business results. Our technology powers entertainment, retail, healthcare, education and more &ndash; from Smart Cities to your everyday devices.</li><li>We benefit everyone - We do all of this while aspiring for a culture that empowers every person to be the difference, at work and in our communities.</li></ul><p>Colorful hair? Don&rsquo;t care. Tattoos? Show off your ink. Like polka dots? That&rsquo;s cool. Pop culture geek? Many of us are. Be you, with us! #WeAreCisco</p>"
                                },
                                {
                                      "id":18,
                                      "role":"Lead Data Engineer",
                                      "logo":"https://media-exp3.licdn.com/dms/image/C4E0BAQGgcRYcsEA95g/company-logo_100_100/0/1593617920398?e=1631750400&v=beta&t=tInPCRTto7QlK7wK6vZukUnVzQ8cSxG3qOTmvli48C8",
                                      "company":"GAIN Credit",
                                      "location":"Chengalpattu, Tamil Nadu",
                                      "postedOn":"2021-06-10T06:46:22.461Z",
                                      "promoted":false,
                                      "totalApplicants":23,
                                      "SeniorityLevel":"Entry level",
                                      "employmentType":"Full Time",
                                      "industry":"Big Data",
                                      "jobFunctions":["Engineering","Big Data","Information Technology & Solutions"],
                                      "views":90,
                                      "postedBy":{
                                          "name":"Dorsal Ruffina",
                                          "role":"Senior Recruitment Consultant",
                                          "profilePic":"https://media-exp3.licdn.com/dms/image/C5103AQF9w8sNM3iOcQ/profile-displayphoto-shrink_400_400/0/1549103801705?e=1628726400&v=beta&t=IN5VsyaPVY6cTxxAJf54CYLjQzknPabWNtG2pl8oXJg"
                                      },
                                      "companyDetails":{
                                          "noOfEmployees":"600-700",
                                          "sector":"Big Data",
                                          "totalLinkedinMember":30000,
                                          "totalFollowers":450,
                                          "totalConnection":0,
                                          "following":false
                                      },
                                      "description":"<p><strong>Position Summary&nbsp;&nbsp;</strong></p><p>The&nbsp;Lead&nbsp;Data Engineer will work in a business facing role to gather the data requirements to meet the business users&rsquo; needs and provide them with timely information that enables them to make various business-related decisions. The role requires the candidate to build and maintain complex large scale data models for an enterprise system and the underlying business processes. The role manages to develop, construct, and maintain architectures such as databases and high scalable data processing systems. Develop processes for data modelling, mining, and production data sets. Integrate new data management technologies and software engineering tools into existing structures. Build process to improve data reliability, efficiency, and quality. The ideal candidate needs to work collaboratively with teams, formulate recommendations for further initiative refinement based on current data evidence.&nbsp;</p><p>&nbsp;</p><p><strong>Critical Business Activities&nbsp;&nbsp;</strong></p><p>&nbsp;As a&nbsp;Data Engineering&nbsp;Team Lead&nbsp;you (candidate) will be responsible for,&nbsp;</p><p>&nbsp;</p><ul><li>Building a scalable and robust data pipeline architecture that serves the business functions to use the data for analytics and reporting needs.&nbsp;</li><li>Working with stakeholders including the Executive, Product, Data and Design teams to assist with data requirements and infrastructure needs.&nbsp;</li><li>Keeping our data separated and secure across multiple data centres and AWS regions for business and operational compliance and continuity.&nbsp;&nbsp;</li><li>Optimizing or even re-designing the data architecture and design to support our next generation of products and data initiatives.&nbsp;</li><li>Integrate new data management technologies and software engineering tools into existing structures.&nbsp;&nbsp;</li><li>Delivering data with consistency by implementing automation testing and strong QA processes.&nbsp;</li><li>Capable of leading a group of 6-8 members. Motivates and influences team on accomplishing goals.&nbsp;</li><li>Gather requirements from various functions across organization, work with product owners to prioritize items. Effectively plan, implement, and track sprint for the team.&nbsp;</li><li>Rapid turn-around of urgent ad-hoc data requirements.&nbsp;</li><li>Data modelling, integration, quality and standards, governance, metadata management, relational and dimensional modelling and ETL concepts.&nbsp;</li><li>Master data management&nbsp;</li><li>Maintain consistency and quality of raw and derived variables in the data mart and ensure the availability of it to stakeholders.&nbsp;</li><li>Look for any performance issues of any scripts and create a plan to fix them in the most optimized way.&nbsp;&nbsp;</li></ul><p>&nbsp;</p><p><strong>Competencies and&nbsp;Experience&nbsp;</strong></p><ul><li>&nbsp;6+ Years of experience in Data Warehousing and&nbsp;maintaining large scale datasets.&nbsp;</li><li>Good understanding on cloud platforms (Redshift, Athena, Aurora, Dynamo DB, Kinesis, Lambda, S3, EC2, PostgreSQL etc&nbsp;&nbsp;</li><li>Demonstrated strength in SQL, data modelling, ETL development.&nbsp;</li><li>Experience in maintaining data warehouse systems and working on large scale data transformation.&nbsp;&nbsp;</li><li>Coding proficiency in at least one modern programming language (Python&nbsp;etc.)&nbsp;</li><li>Experience mentoring and managing other Data Engineers, ensuring data engineering best practices are being followed.&nbsp;</li><li>Knowledge of NoSQL databases&nbsp;</li><li>Strong analytical and communication skills with the enthusiasm to learn the inner working of large application.&nbsp;</li><li>Results-Driven with ability to take initiatives and meet deadlines in a fast-paced changing environment.&nbsp;</li><li>Ability to lead peers in adopting a new process or innovation.&nbsp;</li><li>Makes expert technical decisions on design and coding tasks. Understands module level impacts of design and coding decisions.&nbsp;</li><li>Strong interpersonal skills and the ability to communicate complex technology solutions to senior leadership, gain alignment, and drive progress.&nbsp;&nbsp;</li></ul>"
                                  },
                                  {
                                        "id":19,
                                        "role":"Data Engineer",
                                        "logo":"https://media-exp3.licdn.com/dms/image/C4D0BAQFp4NCYZynPZQ/company-logo_100_100/0/1519855897171?e=1631750400&v=beta&t=bZU9eZnZw_zthGot_bF1nXTQO0qaVStkfEZtUP2NVhs",
                                        "company":"Ericsson",
                                        "location":"Bengaluru, Karnataka",
                                        "postedOn":"2021-06-10T06:46:22.461Z",
                                        "promoted":false,
                                        "totalApplicants":42,
                                        "SeniorityLevel":"Entry level",
                                        "employmentType":"Full Time",
                                        "industry":"Smartphone",
                                        "jobFunctions":["Engineering","Smartphone","Information Technology & Solutions"],
                                        "views":87,
                                        "postedBy":{
                                            "name":"Michael Erikson",
                                            "role":"Product Manager",
                                            "profilePic":"https://media-exp3.licdn.com/dms/image/C4D0BAQFp4NCYZynPZQ/company-logo_100_100/0/1519855897171?e=1631750400&v=beta&t=bZU9eZnZw_zthGot_bF1nXTQO0qaVStkfEZtUP2NVhs"
                                        },
                                        "companyDetails":{
                                            "noOfEmployees":"20-30",
                                            "sector":"Smartphone",
                                            "totalLinkedinMember":9000,
                                            "totalFollowers":450,
                                            "totalConnection":0,
                                            "following":false
                                        },
                                        "description":"<<p><strong>Our Exciting Opportunity<br /><br /></strong>We are setting up a&nbsp;<strong>Global AI Accelerator (GAIA)</strong>&nbsp;in the US, Sweden and India, with 300 specialists, to fast-track our strategy execution!<br /><br />We believe in&nbsp;<strong>trust</strong>&nbsp;&ndash; we trust each other to do the right things. Therefore, we believe in taking decisions as close to the product and technical expertise as possible!<br /><br /><strong>You will<br /><br /></strong></p><ul><li>Develop and test high quality products</li><li>Perform trouble shooting and customer support</li><li>Drive continuous improvements of products and processes</li><li>Develop competence in technical domain</li><li>You will support the technical leadership initiatives</li><li>Manage communication, planning. collaboration and feedback loops with business partners.</li><li>Contribute to IPR creation for Ericsson in GAIA-MASS</li></ul><p><strong>To be successful in the role you must have<br /><br /></strong>(</p></div></div></div><li>7 to 10 years of exp<br /><br /><ul><li>Strong in bigdata technologies like Hadoop, Spark, Kafka, Zookeeper</li><li>Hands on experience of different data stores: Cassandra, Postgres, Redis</li><li>Experience in building data pipelines using workflows like Argo Workflow, NiFi</li><li>Experience in developing containerized applications/microservices</li><li>Good to have: K8s Continuous deployment like ArgoCD, Service Mesh like Istio, Object Storage like Minio, CEPH Object Storage, Apache Ozone</li><li>Good understanding of Kubernetes</li><li>Good in Java/Python/Golang programming</li><li>Very comfortable working with tools like Gerrit/Jenkins/Jira/Confluence</li><li>Should have built at least 2 data pipelines on cloud native platform (SDE)</li></ul><strong>What&acute;s in it for you?<br /><br /></strong>Here at Ericsson, our culture is built on over a century of courageous decisions. With us, you will no longer be dreaming of what the future holds &ndash; you will be redefining it. You won&rsquo;t develop for the status quo, but will build what replaces it. Joining us is a way to move your career in any direction you want; with hundreds of career opportunities in locations all over the world, in a place where co-creation and collaboration are embedded into the walls. You will find yourself in a speak-up environment where empathy and humanness serve as cornerstones for how we work, and where work-life balance is a priority. Welcome to an inclusive, global company where your opportunity to make an impact is endless.<br /><br /><strong>What happens once you apply?<br /><br /></strong>To prepare yourself for next steps, please explore here: https://www.ericsson.com/en/careers/job-opportunities/hiring-process<br /><br />We will ensure that individuals with disabilities are provided reasonable accommodation to participate in the job application or interview process, to perform essential job functions, and to receive other benefits and privileges of employment. Please contact us to request accommodation.<br /><br />Do you believe that an organization fostering an environment of cooperation and collaboration to execute with speed creates better business value? Do you value a culture of humanness, where fact based decisions are important and our people are encouraged to speak up? Do you believe that diverse, inclusive teams drive performance and innovation? At Ericsson, we do.<br /><br />We provide equal employment opportunities without regard to race, color, gender, sexual orientation, transgender status, gender identity and/or expression, marital status, pregnancy, parental status, religion, political opinion, nationality, ethnic background, social origin, social status, Indigenous status, disability, age, union membership or employee representation and any other characteristic protected by local law or Ericsson&rsquo;s Code of Business Ethics.</li>"
                                    },
                                    {
                                          "id":20,
                                          "role":"Azure Data Engineer",
                                          "logo":"https://media-exp3.licdn.com/dms/image/C560BAQHNo7HssLcq7Q/company-logo_100_100/0/1622971867535?e=1631750400&v=beta&t=IFnpw3eAXtbSqKh2Z4rnRb3aqofxfV9eoO19JEnXqu0",
                                          "company":"Tech Mahindra",
                                          "location":"Chengalpattu, Tamil Nadu",
                                          "postedOn":"2021-06-10T06:46:22.461Z",
                                          "promoted":false,
                                          "totalApplicants":32,
                                          "SeniorityLevel":"Entry level",
                                          "employmentType":"Full Time",
                                          "industry":"Technology",
                                          "jobFunctions":["Engineering","Technology","Information Technology & Solutions"],
                                          "views":127,
                                          "postedBy":{
                                              "name":"Simson Arputharaj Y ",
                                              "role":"Talent Acquisition Specialist",
                                              "profilePic":"https://media-exp3.licdn.com/dms/image/C5103AQFayMDA5ZirRQ/profile-displayphoto-shrink_100_100/0/1549265001496?e=1628726400&v=beta&t=MKCqwwFpkdMVzerfzsrn0CBkKjlLKsC4diAM9BzB9Zg"
                                          },
                                          "companyDetails":{
                                              "noOfEmployees":"2000-3000",
                                              "sector":"Technology",
                                              "totalLinkedinMember":902,
                                              "totalFollowers":468,
                                              "totalConnection":0,
                                              "following":false
                                          },
                                          "description":"p>Role &amp; Responsibility :-</p><p>&nbsp;</p><p>Azure Data Engineer with required skillsets of Azure Data Factory (ADF), DataBricks</p><p>&nbsp;</p><p>Experience :- 4-8 years</p><p>Location :- Chennai/BLR/HYD</p><p>Notice Period: -Immediate- 15 days</p><p>&nbsp;</p><p>Kindly fill the below information and share your resume with Sharon (DS00593669@TechMahindra.com)</p><p>&nbsp;</p><p>Name:</p><p>&nbsp;</p><p>Mobile No:</p><p>&nbsp;</p><p>Email Id:</p><p>&nbsp;</p><p>Years of Exp:</p><p>&nbsp;</p><p>Relevant exp:</p><p>&nbsp;</p><p>Current Company:</p><p>&nbsp;</p><p>CTC:</p><p>&nbsp;</p><p>ECTC:</p><p>&nbsp;</p><p>Notice Period:</p><p>&nbsp;</p><p>Location</p><p>&nbsp;</p><p>Offers in Pipeline (Y/N)</p><p>&nbsp;</p><p>Availability slot for Interview:-</p>"
                                      }

]}
