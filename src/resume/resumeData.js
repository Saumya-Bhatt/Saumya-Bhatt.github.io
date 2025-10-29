import kotlin from '../images/skills/languages/Kotlin.png';
import java from '../images/skills/languages/java.png';
import javascript from '../images/skills/languages/javascript.png';
import python from '../images/skills/languages/python.png';
import cpluspluss from '../images/skills/languages/c++.png';
import golang from '../images/skills/languages/golang.png';

import fastapi from '../images/skills/framework/fastapi.png'
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
import kubernetes from '../images/skills/tools/kubernetes.png'
import gcp from '../images/skills/tools/gcp.png'

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
            company: 'Porter (SE2)',
            link: 'https://porter.in/',
            location: 'Bengaluru, Karnataka',
            duration: 'June 2024 - Present',
            title: 'Software Engineer II',
            summary: 'Part of the Decisions Systems team to create Machine Learning platform for Data Scientists to launch, iterate and monitor the performance of their Machine Learning models.',
            description: [
                "Built, maintained, and deployed the model serving platform powering multiple ML models, serving 3–4 lakh inferences/day with a p95 latency of 200 ms.",
                "Designed a Python-based DSL framework and CI/CD pipeline enabling Data Scientists to define offline and online features, reducing model deployment TAT from 1.5 months → 2 weeks.",
                "Implemented a model inference logging pipeline ingesting 200 MB/s of logs for model re-training and debugging.",
                "Built a reusable A/B testing Kotlin library for real-time order streams (40 RPS) enabling cross-service experiments with user-defined attributes; designed an adaptive balancing algorithm maintaining traffic splits within 0.1% error despite uneven data distributions."
            ]
        },
        {
            company: 'Porter (SE1)',
            link: 'https://porter.in/',
            location: 'Bengaluru, Karnataka',
            duration: 'July 2022 - June 2024',
            title: 'Software Engineer I',
            summary: 'Worked on building the Payments micro-service from scratch and part of the AWS to GCP migration squad',
            description: [
                "Contributed to the migration of core services from AWS to GCP, reducing infrastructure costs by 30%.",
                "Built the payments microservice from scratch, now processing 88% of all online transactions at Porter with 99.95% uptime.",
                "Implemented dynamic routing between payment gateways based on user profile and region, improving payment success rate from 74% → 87%."
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
                "Developed a customer segmentation dashboard for banks to perform RFM analysis, classifying users into 5 segments using a custom K-Means clustering algorithm trained on 100 K records.",
                "Indexed the classified data in Elasticsearch and built a Spring Boot REST API to serve it to a ReactJS-based frontend for interactive visualization. This helped the business unit understand more about their customer base and gain insights to take actions.",
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
                'Created a web-based dashboard in Python to manage and communicate with 25 marine robots in real-time.',
                "Included ability to track location and stream camera feed in near-real time using OpenCV, WebSockets and RTSP Protocols.",
                "Devised ability to track localtion using concepts of image rasterization with a lag of 5 seconds."
            ]
        }
    ],
    "projects": [
        {
            name: 'Karya',
            tech: 'Kotlin, Postgres, Redis, RabbitMQ',
            description: 'An open-source distributed task scheduler designed for high-throughput job scheduling with delayed, recurring and custom workflows. Built to scale horizontally, it supports multi-language clients, YAML configuration, plug-and-play integration, and enables chaining tasks, hooks and custom actions such as sending mails, Slack alerts, API calls, etc.',
            link: 'https://github.com/Saumya-Bhatt/karya'
        },
        {
            name: 'ClickStream Simulator 1.0',
            tech: 'Kafka, Redis, Rabbit-MQ',
            description: 'End to end application to stream click events from a React-based webapp to a python consumer that triggers an email on suspicious activity in near-real-time (with a lag of 1 second) using Kafka.',
            link: 'https://github.com/Event-Streaming-Example'
        },
        {
            name: 'NGINX inspired python webserver',
            tech: 'Python',
            description: 'A bare bone python web server created from scratch mirroring the event loop based async design of NGINX using sockets and kernel level calls to optimize for throughput',
            link: 'https://github.com/Saumya-Bhatt/nginx-python'
        },
        {
            name: 'Movies-By-the-Sea',
            tech: 'Flask, React',
            description: 'Created backend, frontend, CRM and a public REST API (with a latency of 300 ms) with role-based-access using JWT tokens for personal movie review blog.',
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
                    name: 'FastAPI',
                    img: fastapi,
                    link: "https://fastapi.tiangolo.com/"
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
                    name: "GCP",
                    img: gcp,
                    link: "https://console.cloud.google.com/"
                },
                {
                    name: "Docker",
                    img: docker,
                    link: "https://www.docker.com/"
                },
                {
                    name: "Kubernetes",
                    img: kubernetes,
                    link: "https://kubernetes.io/"
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