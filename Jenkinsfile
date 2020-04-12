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
        stage('Build docker image') {
            steps {
                sh 'docker build -t $registry:latest --build-arg VCS_REF=`git rev-parse --short HEAD` .'
            }
        }
        if (env.BRANCH_NAME == 'master') {
            stage('Deploy docker image') {
                steps {
                    withDockerRegistry([ credentialsId: registryCredential, url: "" ]) {
                        sh 'docker push $registry:latest'
                    }
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