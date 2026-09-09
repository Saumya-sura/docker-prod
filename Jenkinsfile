pipeline {

    agent any

    environment {
        IMAGE_NAME = "saumyasura/production-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }
    stages {    

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                dir('app') {
                    bat 'npm ci'
                }
            }
        }
        stage('Test') {
            steps {
                dir('app') {
                    bat 'npm test'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                bat """
                    docker build ^
                    -t ${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Push Image') {
            steps {
                bat """
                    docker push ${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }
    }
}