import kotlin from '../images/skills/languages/Kotlin.png';
import java from '../images/skills/languages/java.png';
import javascript from '../images/skills/languages/javascript.png';
import python from '../images/skills/languages/python.png';
import cpluspluss from '../images/skills/languages/c++.png';
import golang from '../images/skills/languages/golang.png';

import nodejs from '../images/skills/framework/node-js.png';
import express from '../images/skills/framework/express.png';
import django from '../images/skills/framework/django.png';
import flask from '../images/skills/framework/flask.png';
import spring from '../images/skills/framework/spring.png';
import ktor from '../images/skills/framework/ktor.png';
import react from '../images/skills/framework/react.png';

import mongodb from '../images/skills/database/mongodb.png';
import mysql from '../images/skills/database/mysql.png';
import elastic from '../images/skills/database/elasticsearch.png';
import postgresql from '../images/skills/database/postgresql.png';
import redis from '../images/skills/database/redis.png';

import postman from '../images/skills/tools/postman.png';
import firebase from '../images/skills/tools/firebase.png';
import figma from '../images/skills/tools/figma.png';
import android from '../images/skills/tools/android-studio.png';
import heroku from '../images/skills/tools/heroku.png';
import aws from '../images/skills/tools/aws.png';
import terraform from '../images/skills/tools/terraform.png';
import docker from '../images/skills/tools/docker.png';
import githubTool from '../images/skills/tools/github.png';
import kafka from '../images/skills/tools/kafka.png';

import placements from '../images/resources/placements.jpg';
import dsa from '../images/resources/dsa.png';
import oop from '../images/resources/oop.png';
import ir from '../images/resources/IR.jpg';
import history from '../images/resources/history.jpg';

import github from '../images/icons/Github_white.svg';
import linkedin from '../images/icons/LinkedIN_white.svg';
import gmail from '../images/icons/Gmail_white.svg';
import behance from '../images/icons/Behance_white.svg';
import medium from '../images/icons/medium.png'


export const resumeData = {
    "experience": [
        {
            company: 'Porter',
            link: 'https://porter.in/',
            location: 'Bengaluru, Karnataka',
            duration: 'July 2022 - Present',
            title: 'Software Engineer I',
            summary: 'Worked on building the Payments micro-service. Currently working with Data Science team to build a Model Serving and Feature Computation Platform to power ML use-cases.',
            description: [
                "Built the payments microservice which currently processes ~1.5 Lakh transactions in a month with an uptime of 99.5%",
                "Built dynamic switching between different Payment Gateways based on Customer Profile to ensure higher success rate.",
                "Built the model serving platform that powers the matchmaking service by ranking drivers based on 100 different features.",
                "Building the feature computation layer on top of Apache Kafka and Spark that manages offline and online features of drivers."
            ]
        },
        {
            company: 'Nucleus Software',
            link: 'https://www.nucleussoftware.com/',
            location: 'Noida, UP',
            duration: 'June 2021 - December 2021',
            title: 'Software Engineer Intern',
            summary: 'Worked with the B2B facing team FinnAxia for building an end-to-end solution to classify their customer base.',
            description: [
                "Developed a customer classification and visualization dashboard for banks to gain insights from.",
                "Built a three-way system which included a K-means clustering algorithm to classify dataset, Spring Boot based web-server that exposes a REST interface for the frontend built using ReactJS.",
                "The dashboard built helped the business unit perform RFM (Recency, Frequency, Monetary) analysis on their user-base to gain further insights."
            ]
        },
        {
            company: 'National Institute of Oceanography',
            link: 'https://github.com/Saumya-Bhatt/NIO-Dashboard',
            location: 'Panjim, Goa',
            duration: 'August 2020 - October 2020',
            title: 'Software Engineer Intern',
            summary: 'Worked with the Marine Scoping team and built a service to communicate with their robot in near realtime.',
            description: [
                ' Created a web-based dashboard to manage and communicate with 25 marine robots in real-time.',
                "Included ability to track location and stream camera feed in near-real time using OpenCV, WebSockets and RTSP Protocols.",
                "Involved in using concepts of rasterization to generate live offline mapping using images."
            ]
        }
    ],
    "projects": [
        {
            name: 'ClickStream Simulator 1.0',
            tech: 'Kafka, Redis, Rabbit-MQ',
            description: 'End to end application to stream click events from a React-based webapp to a python consumer that triggers an email on suspicious activity in near-real-time using Kafka.',
            link: 'https://github.com/Event-Streaming-Example'
        },
        {
            name: 'Movies-By-the-Sea',
            tech: 'Flask, React',
            description: 'Created backend, frontend, CRM and a public REST API with RBAC for personal movie review blog.',
            link: 'https://github.com/Movies-By-the-Sea'
        },
        {
            name: 'Twitter-Clone',
            tech: 'Flask, MySQL',
            description: ' Fullstack Twitter clone with user authentication, cookie and session management system with CRUD abilities based on user roles.',
            link: 'https://github.com/Saumya-Bhatt/Twitter-Clone'
        },
        {
            name: 'Chat-Room',
            tech: 'Ajax, MySQL',
            description: 'Near-Real time multi-user chat room running locally on an Apache server using web-sockets.',
            link: 'https://github.com/Saumya-Bhatt/Chat-Room'
        }
    ],
    "skills": [
        {
            field: 'Languages',
            tech: [
                {
                    name: "Kotlin",
                    img: kotlin,
                    link: "https://kotlinlang.org/"
                },
                {
                    name: "Java",
                    img: java,
                    link: "https://www.oracle.com/java/"
                },
                {
                    name: "Python",
                    img: python,
                    link: "https://www.python.org/"
                },
                {
                    name: "Javascript",
                    img: javascript,
                    link: "https://developer.mozilla.org/en-US/docs/Web/javascript"
                },
                {
                    name: "Golang",
                    img: golang,
                    link: "https://go.dev/"
                },
                {
                    name: "C++",
                    img: cpluspluss,
                    link: "https://cplusplus.com/"
                }
            ]
        },
        {
            field: 'Libraries and Frameworks',
            tech: [
                {
                    name: "Ktor",
                    img: ktor,
                    link: "https://ktor.io/docs/welcome.html"
                },
                {
                    name: 'Spring Boot',
                    img: spring,
                    link: 'https://spring.io/projects/spring-boot'
                },
                {
                    name: 'Node JS',
                    img: nodejs,
                    link: 'https://nodejs.org/en/'
                },
                {
                    name: 'Express JS',
                    img: express,
                    link: 'https://expressjs.com/'
                },
                {
                    name: 'Flask',
                    img: flask,
                    link: 'https://flask.palletsprojects.com/en/2.1.x/'
                },
                {
                    name: 'Django',
                    img: django,
                    link: 'https://www.djangoproject.com/'
                },
                {
                    name: 'React',
                    img: react,
                    link: 'https://reactjs.org/'
                }
            ]
        },
        {
            field: 'Databases',
            tech: [
                {
                    name: 'PostgreSQL',
                    img: postgresql,
                    link: "https://www.postgresql.org/"
                },
                {
                    name: "Redis",
                    img: redis,
                    link: "https://redis.io/"
                },
                {
                    name: 'MongoDB',
                    img: mongodb,
                    link: 'https://www.mongodb.com/'
                },
                {
                    name: 'MySQL',
                    img: mysql,
                    link: 'https://www.mysql.com/'
                },
                {
                    name: 'Elastic Search',
                    img: elastic,
                    link: 'https://www.elastic.co/elasticsearch/'
                }
            ]
        },
        {
            field: 'Tools and Services',
            tech: [
                {
                    name: "AWS",
                    img: aws,
                    link: "https://aws.amazon.com/"
                },
                {
                    name: "Docker",
                    img: docker,
                    link: "https://www.docker.com/"
                },
                {
                    name: "Kafka",
                    img: kafka,
                    link: "https://kafka.apache.org/"
                },
                {
                    name: 'Firebase',
                    img: firebase,
                    link: 'https://firebase.google.com/'
                },
                {
                    name: 'Heroku',
                    img: heroku,
                    link: 'https://www.heroku.com/'
                },
                {
                    name: "Github",
                    img: githubTool,
                    link: "https://github.com/"
                },
                {
                    name: "Terraform",
                    img: terraform,
                    link: "https://www.terraform.io/"
                }
            ]
        }
    ],
    "resources": [
        {
            name: 'DSA Question Bank',
            link: 'https://saumya-bhatt.notion.site/91fd63c86ffc405f9dd16256e6cc3d56?v=9753b961f83c4ef1bb3a88fe1f36d4d1',
            description: '100 plus DSA questions of all topics important for placements with solutions',
            img: placements
        },
        {
            name: 'Data Structures and Algorithms',
            link: 'https://saumya-bhatt.notion.site/62ea2570009044338ee7e88f7db66d1f?v=f8d1e79aeaeb4acfaf8455fb6c9e5364',
            description: 'Covering all important DSA theory topics required for IT placements',
            img: dsa
        },
        {
            name: 'Object Oriented Programming',
            link: 'https://saumya-bhatt.notion.site/e106f332689b44818c7bbdb60905bc6a?v=d24fe34e5b5443d0ade29056c73780e3',
            description: 'Class notes for OOP done in Java covering all important topics',
            img: oop
        },
        {
            name: 'International Relations',
            link: 'https://saumya-bhatt.notion.site/adff0edb2bb444bb8eb99327e7036529?v=001cb6c93e394f8fbc72be7c0f91204a',
            description: 'Class notes on various IR topics and interesting case studies',
            img: ir
        },
        {
            name: 'Main Trends in Indian History',
            link: 'https://saumya-bhatt.notion.site/Main-Trends-in-Indian-History-0aaf5872ce4643ae829ead12bd6fd3fa',
            description: 'Class notes on Indian History covering important topics and discussions',
            img: history
        }
    ],
    "socials": [
        {
            name: 'Github',
            link: "https://github.com/Saumya-Bhatt",
            icon: github
        },
        {
            name: 'LinkedIn',
            link: "https://www.linkedin.com/in/saumya-bhatt-2000/",
            icon: linkedin
        },
        {
            name: 'Medium',
            link: 'https://medium.com/@SaumyaBhatt106',
            icon: medium
        },
        {
            name: 'Gmail',
            link: "mailto:saumya.bhatt106@gmail.com",
            icon: gmail
        }
    ]
}