pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from Git
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Build your JavaScript project
                sh 'npm install'
            }
        }
        
        stage('Deploy') {
            steps {
                // Apply Kubernetes configuration
                sh 'kubectl apply -f kubernetes/deployment.yaml'
                sh 'kubectl apply -f kubernetes/service.yaml'
            }
        }
    }
}
