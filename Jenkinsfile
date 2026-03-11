pipeline {
    agent any

    tools {
        nodejs "NodeJS18"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/NitishAutomaation/playwright-automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Automation Tests') {
            steps {
                sh 'npm test'
            }
        }

    }
}