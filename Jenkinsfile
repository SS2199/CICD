pipeline {
  agent any

  tools {
    nodejs 'node'
  }

  environment {
    DOCKERHUB_REGISTRY = 'sindhusambasivam/hello_world'
    DOCKERHUB_CREDENTIALS_ID = 'dockerhub'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        dir('C:\\Users\\sindhu\\CICD') {
          script {
            // Run npm install in the correct directory
            bat 'npm install'
          }
        }
      }
    }

    stage('Test') {
      steps {
        dir('C:\\Users\\sindhu\\CICD') {
          script {
            bat 'npx jest --passWithNoTests'
          }
        }
      }
    }

    stage('Build Docker image') {
      steps {
        dir('C:\\Users\\sindhu\\CICD') {
          script {
            bat "docker build -t ${DOCKERHUB_REGISTRY}:${BUILD_NUMBER} ."
          }
        }
      }
    }

    stage('Push Docker image') {
      steps {
        withEnv(['DOCKERHUB_USERNAME=sindhusambasivam', 'DOCKERHUB_PASSWORD=sindhu21*']) {
          withCredentials([usernamePassword(
            credentialsId: DOCKERHUB_CREDENTIALS_ID,
            passwordVariable: 'DOCKERHUB_PASSWORD',
            usernameVariable: 'DOCKERHUB_USERNAME'
          )]) {
            bat "docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}"
            bat "docker push ${DOCKERHUB_REGISTRY}:${BUILD_NUMBER}"
          }
        }
      }
    }
  }

  post {
    always {
      bat 'docker logout'
    }
  }
}
