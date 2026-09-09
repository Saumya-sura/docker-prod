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
                    sh 'npm ci'
                }
            }
        }
        stage('Test') {
            steps {
                dir('app') {
                    sh 'npm test'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                sh """
                    docker build \
                    -t ${IMAGE_NAME}:${IMAGE_TAG} .
                """
            }
        }

        stage('Push Image') {
            steps {
                sh """
                    docker push ${IMAGE_NAME}:${IMAGE_TAG}
                """
            }
        }
    }
}