pipeline {
    agent {
        docker {
            image 'simoncomputing/react-agent:latest'
        }
    }

    stages {
        stage('Build') {
            steps {
                checkout scm
                sh 'yarn'
                sh 'yarn test --coverage --watchAll=false --passWithNoTests'
            }
        }

        stage('Sonar') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh "yarn sonar-scanner -Dsonar.login=$SONAR_AUTH_TOKEN"
                }
            }
        }   
        
        stage('Deploy') {
            steps {
                checkout scm
                sh 'yarn build'
                sh 'aws s3 sync build/ s3://<s3-bucket-name>'
            }
        }        
    }
}