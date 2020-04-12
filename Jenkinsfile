@Library('jenkins-shared-library')_
pipeline {
    environment {
        registry = "windsekirun/turnipsbot"
        registryCredential = 'DockerHub'
    }
    agent any
    stages {
        stage ('Start') {
            steps {
                sendNotifications 'STARTED'
            }
        }
        stage('Environment') {
            parallel {
                stage('display') {
                    steps {
                        sh 'ls -la'
                    }
                }
            }
        }
        stage('Build docker image - dev') {
            when {
                expression { env.BRANCH_NAME != 'master' }
            }
            steps {
                sh 'docker build -t $registry:$env.BRANCH_NAME --build-arg VCS_REF=`git rev-parse --short HEAD` .'
            }
        }   
        stage('Build docker image - Real') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                sh 'docker build -t $registry:latest --build-arg VCS_REF=`git rev-parse --short HEAD` .'
            }
        }
        stage('Deploy docker image - Real') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                withDockerRegistry([ credentialsId: registryCredential, url: "" ]) {
                    sh 'docker push $registry:latest'
                }
            }
        }
     }
    post {
        always {
            sendNotifications currentBuild.result
        }
    }
}